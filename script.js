// Executa quando a página carrega para atualizar o número do carrinho
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();

  // Se estivermos na página do carrinho, renderiza os itens
  if (document.getElementById("lista-carrinho")) {
    renderizarCarrinho();
  }

  // Adiciona a máscara de CEP (00000-000)
  const cepInput = document.getElementById("cep-input");
  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
      if (value.length > 5) {
        value = value.slice(0, 5) + "-" + value.slice(5, 8);
      }
      e.target.value = value;
    });
  }

  // Lógica da Barra de Pesquisa
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const termo = e.target.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const titulo = card.querySelector("h3").innerText.toLowerCase();
        // Se o título contém o termo, mostra; senão, esconde.
        card.style.display = titulo.includes(termo) ? "" : "none";
      });
    });
  }
});

function atualizarContadorCarrinho() {
  // Recupera a quantidade salva no navegador ou usa 0 se não existir
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const qtd = carrinho.reduce(
    (total, item) => total + (item.quantidade || 1),
    0,
  );

  const contador = document.getElementById("contador-carrinho");
  if (contador) {
    contador.innerText = qtd;
  }
}

function trocarImagem(enderecoDaImagem) {
  const imagemPrincipal = document.getElementById("imagemPrincipal");
  if (imagemPrincipal) {
    imagemPrincipal.src = enderecoDaImagem;
  }
}

function selecionarTamanho(elemento) {
  // Remove a classe 'ativo' de todos os botões
  const botoes = document.querySelectorAll(".btn-tam");
  botoes.forEach((btn) => btn.classList.remove("ativo"));

  // Adiciona no clicado
  elemento.classList.add("ativo");

  // Atualiza o texto
  document.getElementById("tamanho-selecionado").innerText = elemento.innerText;
}

function calcularFrete() {
  const cepInput = document.getElementById("cep-input");
  const cep = cepInput.value.replace(/\D/g, ""); // Remove o traço para validar apenas números
  const campoResultado = document.getElementById("resultado-frete");

  if (cep.length !== 8) {
    alert("Por favor, digite um CEP válido.");
    return;
  }

  // Simulação de cálculo
  campoResultado.classList.remove("resultado-oculto");
  campoResultado.innerHTML = `
        <p style="margin: 0; color: #28a745;"><strong>Entrega Padrão:</strong> R$ 15,00 (3-5 dias úteis)</p>
    `;
}
function alternarPersonalizacao(querPersonalizar) {
  const campos = document.getElementById("campos-personalizar");
  const status = document.getElementById("status-personalizacao");
  const btnCom = document.getElementById("btn-com-perso");
  const btnSem = document.getElementById("btn-sem-perso");

  if (querPersonalizar) {
    campos.classList.remove("resultado-oculto");
    status.innerText = "Com personalização";
    btnCom.classList.add("ativo");
    btnSem.classList.remove("ativo");
  } else {
    campos.classList.add("resultado-oculto");
    status.innerText = "Sem personalização";
    btnSem.classList.add("ativo");
    btnCom.classList.remove("ativo");
  }
}

function finalizarCompra() {
  const tamanho = document.getElementById("tamanho-selecionado").innerText;
  const nomeProduto = document.querySelector(".info h2").innerText;
  // Pega o preço, remove "R$", troca vírgula por ponto e converte para número
  const precoTexto = document.querySelector(".info p").innerText.split("R$")[1];
  const preco = parseFloat(precoTexto.replace(",", ".").trim());
  const imagemSrc = document.getElementById("imagemPrincipal").src;

  const isPersonalizado = !document
    .getElementById("campos-personalizar")
    .classList.contains("resultado-oculto");
  let mensagem = `Sucesso! ✅\nCamisa Tamanho ${tamanho}`;

  if (isPersonalizado) {
    const nome = document.getElementById("nome-camisa").value;
    const numero = document.getElementById("numero-camisa").value;
    if (!nome || !numero) {
      alert("Por favor, preencha o Nome e Número para a personalização.");
      return;
    }
    mensagem += ` com o nome ${nome} e número ${numero}`;
  }

  mensagem += " adicionada ao carrinho!";

  // Cria o objeto do produto
  const produto = {
    nome: nomeProduto,
    preco: preco,
    tamanho: tamanho,
    imagem: imagemSrc,
    personalizacao: isPersonalizado
      ? `${document.getElementById("nome-camisa").value} (${document.getElementById("numero-camisa").value})`
      : "Sem personalização",
    quantidade: 1,
  };

  // Salva no localStorage (Array de objetos)
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Verifica se o item já existe (mesmo nome, tamanho e personalização)
  const indexExistente = carrinho.findIndex(
    (item) =>
      item.nome === produto.nome &&
      item.tamanho === produto.tamanho &&
      item.personalizacao === produto.personalizacao,
  );

  if (indexExistente !== -1) {
    carrinho[indexExistente].quantidade =
      (carrinho[indexExistente].quantidade || 1) + 1;
  } else {
    carrinho.push(produto);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  atualizarContadorCarrinho();

  alert(mensagem);
}

function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("valor-total");
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  lista.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalEl.innerText = "0,00";
    return;
  }

  carrinho.forEach((item, index) => {
    const qtd = item.quantidade || 1;
    total += item.preco * qtd;
    lista.innerHTML += `
            <div class="item-carrinho">
                <div class="item-info">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div>
                        <h4>${item.nome}</h4>
                        <p>Tamanho: ${item.tamanho} | ${item.personalizacao}</p>
                        <p><strong>R$ ${item.preco.toFixed(2).replace(".", ",")}</strong></p>
                    </div>
                </div>
                <div class="qtd-controls">
                    <button class="btn-qtd" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <span>${qtd}</span>
                    <button class="btn-qtd" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
                <button class="btn-remover" onclick="removerItem(${index})">Remover 🗑️</button>
            </div>
        `;
  });

  totalEl.innerText = total.toFixed(2).replace(".", ",");
}

function alterarQuantidade(index, mudanca) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (!carrinho[index].quantidade) carrinho[index].quantidade = 1;

  carrinho[index].quantidade += mudanca;

  // Se a quantidade for 0 ou menor, remove o item (com confirmação opcional)
  if (carrinho[index].quantidade <= 0) {
    if (confirm("Deseja remover este item do carrinho?")) {
      carrinho.splice(index, 1);
    } else {
      carrinho[index].quantidade = 1; // Cancela e volta para 1
    }
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

function removerItem(index) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

function finalizarPedidoWhatsApp() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de finalizar o seguinte pedido:\n\n";
  let total = 0;

  carrinho.forEach((item) => {
    const qtd = item.quantidade || 1;
    total += item.preco * qtd;
    mensagem += `👕 *${qtd}x ${item.nome}*\n`;
    mensagem += `   Tamanho: ${item.tamanho}\n`;
    if (item.personalizacao && item.personalizacao !== "Sem personalização") {
      mensagem += `   Personalização: ${item.personalizacao}\n`;
    }
    mensagem += `   Preço: R$ ${item.preco.toFixed(2).replace(".", ",")}\n\n`;
  });

  mensagem += `💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*`;

  // Substitua pelo número da loja (com DDI 55 e DDD)
  const numeroWhatsApp = "5541995655320";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function esvaziarCarrinho() {
  if (confirm("Tem certeza que deseja esvaziar todo o carrinho?")) {
    localStorage.removeItem("carrinho");
    renderizarCarrinho();
    atualizarContadorCarrinho();
  }
}
