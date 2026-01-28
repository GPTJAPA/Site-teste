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

  // Calcula e exibe o preço do Pix automaticamente
  calcularPrecoPix();
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
  const imagemSrc = document.getElementById("imagemPrincipal").src;

  // 1. Pegar o preço base
  const precoElemento = document.querySelector(".preco-destaque");
  // Pega apenas o texto do preço atual, ignorando o span do preço antigo se houver
  const textoPreco = precoElemento.childNodes[0].textContent;
  let precoFinal = parseFloat(textoPreco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());

  // 2. Definir o custo da personalização
  const CUSTO_PERSONALIZACAO = 25.00;

  // 3. Verificar se a personalização está visível/ativa
  const areaPersonalizar = document.getElementById("campos-personalizar");
  const isPersonalizado = !areaPersonalizar.classList.contains("resultado-oculto");

  let detalhesPersonalizacao = "Sem personalização";

  if (isPersonalizado) {
    const nome = document.getElementById("nome-camisa").value.trim().toUpperCase();
    const numero = document.getElementById("numero-camisa").value.trim();

    if (!nome || !numero) {
      alert("⚠️ Por favor, preencha o Nome e o Número para personalizar!");
      return;
    }

    // 4. SOMA OS 25 REAIS AO PREÇO
    precoFinal += CUSTO_PERSONALIZACAO;
    detalhesPersonalizacao = `${nome} (${numero})`;
  }

  // 5. Criação do objeto com o preço já atualizado
  const produto = {
    nome: nomeProduto,
    preco: precoFinal,
    tamanho: tamanho,
    imagem: imagemSrc,
    personalizacao: detalhesPersonalizacao,
    quantidade: 1,
  };

  // Guardar no localStorage (mantendo a lógica de agrupar itens iguais)
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

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

  // 6. Alerta mostrando o novo valor
  const precoFormatado = precoFinal.toFixed(2).replace(".", ",");
  alert(`Sucesso! ✅\nItem adicionado: ${nomeProduto}\nValor Total: R$ ${precoFormatado}`);
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

function filtrarProdutos(categoria) {
  const cards = document.querySelectorAll(".card");
  const botoes = document.querySelectorAll(".btn-filtro");

  // 1. Atualiza o aspeto visual dos botões
  botoes.forEach((btn) => {
    btn.classList.remove("ativo");
    // Normaliza o texto para remover acentos (ex: Seleções -> selecoes) para comparar corretamente
    const textoNormalizado = btn.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (textoNormalizado === categoria || (categoria === "todos" && btn.innerText === "Todos")) {
      btn.classList.add("ativo");
    }
  });

  // 2. Filtra os produtos
  cards.forEach((card) => {
    const categoriaDoCard = card.getAttribute("data-categoria");

    if (categoria === "todos" || categoriaDoCard === categoria) {
      card.classList.remove("escondido");
    } else {
      card.classList.add("escondido");
    }
  });
}

function calcularPrecoPix() {
  const precoElemento = document.querySelector(".preco-destaque");
  
  // Se não houver preço na página (ex: home), a função para aqui
  if (!precoElemento) return;

  // Pega apenas o texto do preço (primeiro nó de texto), ignorando o preço antigo (span)
  const textoPreco = precoElemento.childNodes[0].textContent;
  
  // Limpa a string: remove "R$", remove pontos de milhar e troca vírgula por ponto
  const valorNumerico = parseFloat(textoPreco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());

  if (!isNaN(valorNumerico)) {
    const valorPix = valorNumerico * 0.95; // Aplica 5% de desconto
    
    const pPix = document.createElement("p");
    pPix.classList.add("preco-pix");
    pPix.innerHTML = `R$ ${valorPix.toFixed(2).replace(".", ",")} com <strong>Pix</strong> (5% de desconto)`;
    
    // Insere o elemento logo após o preço principal
    precoElemento.after(pPix);
  }
}
