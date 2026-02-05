// --- Banco de Dados Global de Produtos ---
// Lista de objetos que contém as informações básicas de cada produto para busca e exibição
const produtosDB = [
  {
    nome: "Camisa Coritiba Titular 2024",
    url: "Pagina_produto_coritiba.html",
    img: "imagens/Camisas-time/Coritiba.jpeg",
    preco: 299.9,
  },
  {
    nome: "Camisa Seleção Brasileira I 2026",
    url: "Pagina_produto_selecao_1.html",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 1/Frente.webp",
    preco: 299.9,
  },
  {
    nome: "Camisa Seleção Brasil II 2026",
    url: "Pagina_produto.html",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 2/Seleção Brasil 2.webp",
    preco: 199.9,
  },
  {
    nome: "Camisa Real Madrid I 2025",
    url: "Pagina_produto_real_madrid.html",
    img: "imagens/Camisas-time/LaLiga/Real madrid I/Frente.jpg",
    preco: 349.9,
  },
  {
    nome: "Camisa Barcelona I 2025",
    url: "Pagina_produto_barcelona.html",
    img: "imagens/Camisas-time/LaLiga/Barcelona I/Frente.jpg",
    preco: 349.9,
  },
  {
    nome: "Camisa Manchester City I 2025",
    url: "Pagina_produto_man_city.html",
    img: "imagens/Camisas-time/Premier league/Man. City/Frente.jpg",
    preco: 329.9,
  },
  {
    nome: "Camisa Arsenal I 2025",
    url: "Pagina_produto_arsenal.html",
    img: "imagens/Camisas-time/Premier league/Arsenal/frente.jpg",
    preco: 329.9,
  },
  {
    nome: "Camisa França Titular 2024",
    url: "Pagina_produto_franca.html",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 1/Frente.webp",
    preco: 299.9,
  },
];

// Executa quando a página carrega para atualizar o número do carrinho
// O evento DOMContentLoaded garante que o HTML foi totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();

  // Carrega produtos relacionados se o container existir
  exibirProdutosRelacionados();

  // Se estivermos na página do carrinho, renderiza os itens
  if (document.getElementById("lista-carrinho")) {
    renderizarCarrinho();
  }

  // Adiciona a máscara de CEP (00000-000)
  // Formata o campo de CEP automaticamente enquanto o usuário digita
  const cepInput = document.getElementById("cep-input");
  if (cepInput) {
    cepInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
      if (value.length > 5) {
        value = value.slice(0, 5) + "-" + value.slice(5, 8);
      }
      e.target.value = value;

      // Calcula automaticamente quando o CEP estiver completo (8 dígitos)
      if (value.replace(/\D/g, "").length === 8) {
        calcularFrete();
      }
    });
  }

  // --- Lógica da Barra de Pesquisa Global (Autocomplete) ---
  // Cria uma lista de sugestões abaixo do campo de busca baseada no que é digitado

  const searchInput = document.getElementById("search-input");
  const searchBox = document.querySelector(".search-box");

  if (searchInput && searchBox) {
    // Cria o container de resultados dinamicamente
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("search-results");
    searchBox.appendChild(resultsContainer);

    searchInput.addEventListener("input", (e) => {
      // Normaliza o texto (remove acentos e põe em minúsculo)
      const termo = normalizarTexto(e.target.value);
      resultsContainer.innerHTML = "";

      if (termo.length === 0) {
        resultsContainer.classList.remove("ativo");
        return;
      }

      // Filtra os produtos
      const resultados = produtosDB.filter((produto) =>
        normalizarTexto(produto.nome).includes(termo),
      );

      if (resultados.length > 0) {
        resultados.forEach((produto) => {
          const item = document.createElement("div");
          item.classList.add("search-item");
          item.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <div>${produto.nome}</div>
          `;
          // Redireciona ao clicar
          item.onclick = () => (window.location.href = produto.url);
          resultsContainer.appendChild(item);
        });
      } else {
        const item = document.createElement("div");
        item.classList.add("search-item");
        item.innerHTML = `<div>Nenhum produto encontrado</div>`;
        resultsContainer.appendChild(item);
      }

      resultsContainer.classList.add("ativo");
    });

    // Fecha a busca ao clicar fora
    document.addEventListener("click", (e) => {
      if (!searchBox.contains(e.target)) {
        resultsContainer.classList.remove("ativo");
      }
    });
  }

  // Calcula e exibe o preço do Pix automaticamente
  // Pega o preço principal e aplica 5% de desconto visualmente
  calcularPrecoPix();

  // Força o nome da personalização a ser maiúsculo enquanto digita
  const inputNome = document.getElementById("nome-camisa");
  if (inputNome) {
    inputNome.addEventListener("input", (e) => {
      e.target.value = e.target.value.toUpperCase();
    });
  }

  // Fecha o modal se clicar fora dele
  // Melhora a usabilidade permitindo fechar janelas clicando no fundo escuro
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal-medidas");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Inicia o carrossel se houver slides na página
  iniciarCarrossel();

  // Lógica do Botão Voltar ao Topo
  // Mostra o botão apenas quando o usuário rola a página para baixo
  const btnTopo = document.getElementById("btn-topo");
  window.addEventListener("scroll", () => {
    if (btnTopo) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        btnTopo.style.display = "block";
      } else {
        btnTopo.style.display = "none";
      }
    }
  });

  // Fecha o menu mobile automaticamente ao clicar em um link
  // Melhora a experiência no celular, fechando o menu após a navegação
  const linksMenu = document.querySelectorAll(".nav-links a");
  const menuNav = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuNav) {
    linksMenu.forEach((link) => {
      link.addEventListener("click", () => {
        menuNav.classList.remove("active");
        if (menuToggle) menuToggle.classList.remove("active");
      });
    });
  }

  // Fecha o menu mobile ao clicar fora dele
  // Detecta cliques fora da área do menu para fechá-lo
  document.addEventListener("click", (event) => {
    if (menuNav && menuToggle && menuNav.classList.contains("active")) {
      if (
        !menuNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        menuNav.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    }
  });

  // Sincroniza o carrinho entre abas diferentes (se alterar em uma, atualiza na outra)
  // O evento 'storage' é disparado quando o localStorage muda em outra aba
  window.addEventListener("storage", (event) => {
    if (event.key === "carrinho") {
      atualizarContadorCarrinho();
      if (document.getElementById("lista-carrinho")) {
        renderizarCarrinho();
      }
    }
  });

  // Restaura os dados do formulário do carrinho (se existirem)
  // Preenche os campos automaticamente se o usuário já tiver digitado antes
  if (document.getElementById("nome-cliente")) {
    document.getElementById("nome-cliente").value =
      localStorage.getItem("nomeCliente") || "";
    document.getElementById("telefone-cliente").value =
      localStorage.getItem("telefoneCliente") || "";
    document.getElementById("endereco-cliente").value =
      localStorage.getItem("enderecoCliente") || "";
    document.getElementById("pagamento-cliente").value =
      localStorage.getItem("pagamentoCliente") || "";
  }
});

// Atualiza o número vermelho no ícone do carrinho no menu
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

// Troca a imagem principal do produto ao clicar nas miniaturas
function trocarImagem(enderecoDaImagem) {
  const imagemPrincipal = document.getElementById("imagemPrincipal");
  if (imagemPrincipal) {
    imagemPrincipal.src = enderecoDaImagem;
  }
}

// Gerencia a seleção visual dos botões de tamanho (P, M, G...)
function selecionarTamanho(elemento) {
  // Remove a classe 'ativo' de todos os botões
  const botoes = document.querySelectorAll(".btn-tam");
  botoes.forEach((btn) => btn.classList.remove("ativo"));

  // Adiciona no clicado
  elemento.classList.add("ativo");

  // Atualiza o texto
  document.getElementById("tamanho-selecionado").innerText = elemento.innerText;
}

// Variável global para armazenar o frete escolhido
let freteSelecionado = 0;
let tipoFreteSelecionado = "";

// Consulta a API ViaCEP e calcula o frete baseado na região
async function calcularFrete() {
  const cepInput = document.getElementById("cep-input");
  const cep = cepInput.value.replace(/\D/g, ""); // Remove o traço para validar apenas números
  const campoResultado = document.getElementById("resultado-frete");

  if (cep.length !== 8) {
    mostrarNotificacao("Por favor, digite um CEP válido.", "erro");
    return;
  }

  // Mostra feedback de carregamento
  campoResultado.classList.remove("resultado-oculto");
  campoResultado.innerHTML = "Buscando endereço... 🚚";

  // Reseta o frete selecionado ao calcular novo CEP
  freteSelecionado = 0;

  try {
    // Consulta a API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      campoResultado.innerHTML = `<p style="color: #dc3545;">CEP não encontrado.</p>`;
      return;
    }

    // Lógica de preço baseada na região (UF)
    const sul = ["PR", "SC", "RS"];
    const sudeste = ["SP", "RJ", "MG", "ES"];

    let resultadoHTML = `
        <p style="font-size: 0.9rem; color: #555; margin-bottom: 5px;">📍 ${data.localidade} - ${data.uf}</p>
    `;

    if (data.localidade === "Curitiba") {
      resultadoHTML += `
        <label class="item-frete">
            <input type="radio" name="frete" value="12.00" onchange="selecionarFrete(this.value, 'Motoboy 🏍️')">
            <span><strong>Motoboy 🏍️:</strong> R$ 12,00 (Entrega no mesmo dia)</span>
        </label>
        <label class="item-frete">
            <input type="radio" name="frete" value="0.00" onchange="selecionarFrete(this.value, 'Retirada na Loja')">
            <span><strong>🏪 Retirada na Loja:</strong> Grátis (Pronto em 2h)</span>
        </label>
      `;
    } else {
      let precoPAC, prazoPAC, precoSedex, prazoSedex;

      if (sul.includes(data.uf)) {
        precoPAC = 15.0;
        prazoPAC = "5-7 dias úteis";
        precoSedex = 25.0;
        prazoSedex = "2-3 dias úteis";
      } else if (sudeste.includes(data.uf)) {
        precoPAC = 20.0;
        prazoPAC = "6-8 dias úteis";
        precoSedex = 35.0;
        prazoSedex = "3-4 dias úteis";
      } else {
        precoPAC = 30.0;
        prazoPAC = "8-12 dias úteis";
        precoSedex = 60.0;
        prazoSedex = "4-6 dias úteis";
      }

      resultadoHTML += `
        <label class="item-frete">
            <input type="radio" name="frete" value="${precoPAC}" onchange="selecionarFrete(this.value, 'Correios PAC')">
            <span><strong>Correios (PAC):</strong> R$ ${formatarPreco(precoPAC)} (${prazoPAC})</span>
        </label>
        <label class="item-frete">
            <input type="radio" name="frete" value="${precoSedex}" onchange="selecionarFrete(this.value, 'Sedex')">
            <span><strong>Sedex:</strong> R$ ${formatarPreco(precoSedex)} (${prazoSedex})</span>
        </label>
      `;
    }

    // Adiciona o container para mostrar o total somado
    resultadoHTML += `<div id="total-com-frete" class="total-frete-container"></div>`;

    campoResultado.innerHTML = resultadoHTML;
  } catch (error) {
    campoResultado.innerHTML = `<p style="color: #dc3545;">Erro ao calcular frete.</p>`;
  }
}

// Atualiza a variável global quando o usuário clica em uma opção de frete (radio button)
function selecionarFrete(valor, tipo) {
  freteSelecionado = parseFloat(valor);
  tipoFreteSelecionado = tipo;
  atualizarTotalComFrete();
}

// Exibe o valor total (Produto + Frete) abaixo das opções de envio
function atualizarTotalComFrete() {
  const divTotal = document.getElementById("total-com-frete");
  if (!divTotal || freteSelecionado === 0) return;

  // Pega o preço atual do produto (já considerando personalização)
  const precoElemento = document.querySelector(".preco-destaque");
  let precoProduto = 0;

  if (precoElemento) {
    const textoPreco = precoElemento.childNodes[0].textContent;
    precoProduto = parseFloat(
      textoPreco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
    );
  }

  const totalFinal = precoProduto + freteSelecionado;

  divTotal.style.display = "block";
  divTotal.innerHTML = `Total com Frete: <strong>R$ ${formatarPreco(totalFinal)}</strong>`;
}

// Alterna entre "Com Personalização" e "Sem Personalização", ajustando o preço
function alternarPersonalizacao(querPersonalizar) {
  const campos = document.getElementById("campos-personalizar");
  const status = document.getElementById("status-personalizacao");
  const btnCom = document.getElementById("btn-com-perso");
  const btnSem = document.getElementById("btn-sem-perso");
  const precoElemento = document.querySelector(".preco-destaque");

  // Salva o preço base original na primeira vez que a função é chamada
  if (precoElemento && !precoElemento.dataset.precoBase) {
    const textoPreco = precoElemento.childNodes[0].textContent;
    precoElemento.dataset.precoBase = parseFloat(
      textoPreco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
    );
  }

  const precoBase = precoElemento
    ? parseFloat(precoElemento.dataset.precoBase)
    : 0;

  if (querPersonalizar) {
    campos.classList.remove("resultado-oculto");
    status.innerText = "Com personalização (+ R$ 25,00)";
    btnCom.classList.add("ativo");
    btnSem.classList.remove("ativo");

    // Atualiza o preço visualmente na tela
    if (precoElemento) {
      precoElemento.childNodes[0].textContent = `R$ ${formatarPreco(precoBase + 25)} `;
    }
  } else {
    campos.classList.add("resultado-oculto");
    status.innerText = "Sem personalização";
    btnSem.classList.add("ativo");
    btnCom.classList.remove("ativo");

    // Restaura o preço original visualmente
    if (precoElemento) {
      precoElemento.childNodes[0].textContent = `R$ ${formatarPreco(precoBase)} `;
    }
  }

  // Recalcula o valor do Pix com o novo preço exibido
  calcularPrecoPix();

  // Atualiza o total com frete se já houver um frete selecionado
  atualizarTotalComFrete();
}

// Função principal de adicionar ao carrinho
function finalizarCompra() {
  // Validação de Tamanho: Impede a compra se nenhum tamanho estiver selecionado
  const btnTamanhoAtivo = document.querySelector(".btn-tam.ativo");
  if (!btnTamanhoAtivo) {
    mostrarNotificacao("Por favor, selecione um tamanho!", "erro");
    return;
  }

  // 1. Validação (Antes do Loading)
  const areaPersonalizar = document.getElementById("campos-personalizar");
  const isPersonalizado =
    !areaPersonalizar.classList.contains("resultado-oculto");
  let nome = "";
  let numero = "";

  if (isPersonalizado) {
    nome = document.getElementById("nome-camisa").value.trim().toUpperCase();
    numero = document.getElementById("numero-camisa").value.trim();

    if (!nome || !numero) {
      mostrarNotificacao("Preencha Nome e Número para personalizar!", "erro");
      return;
    }
  }

  // 2. Ativa o efeito de Loading
  const btn = document.querySelector(".btn-comprar");
  const textoOriginal = btn.innerText;

  btn.innerText = "Adicionando... ⏳";
  btn.disabled = true;
  btn.style.opacity = "0.7";
  btn.style.cursor = "not-allowed";

  // 3. Simula o tempo de processamento
  setTimeout(() => {
    const tamanho = document.getElementById("tamanho-selecionado").innerText;
    const nomeProduto = document.querySelector(".info h2").innerText;
    const imagemSrc = document.getElementById("imagemPrincipal").src;

    // Lógica de Preço
    const precoElemento = document.querySelector(".preco-destaque");
    let precoFinal;

    if (precoElemento.dataset.precoBase) {
      precoFinal = parseFloat(precoElemento.dataset.precoBase);
    } else {
      const textoPreco = precoElemento.childNodes[0].textContent;
      precoFinal = parseFloat(
        textoPreco
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
          .trim(),
      );
    }

    const CUSTO_PERSONALIZACAO = 25.0;
    let detalhesPersonalizacao = "Sem personalização";

    if (isPersonalizado) {
      precoFinal += CUSTO_PERSONALIZACAO;
      detalhesPersonalizacao = `${nome} (${numero})`;
    }

    // Criação do objeto
    const produto = {
      nome: nomeProduto,
      preco: precoFinal,
      tamanho: tamanho,
      imagem: imagemSrc,
      personalizacao: detalhesPersonalizacao,
      quantidade: 1,
    };

    // Salvar no localStorage
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

    // Salvar Frete no LocalStorage se foi selecionado
    if (freteSelecionado > 0 || tipoFreteSelecionado === "Retirada na Loja") {
      const dadosFrete = {
        valor: freteSelecionado,
        tipo: tipoFreteSelecionado,
      };
      localStorage.setItem("dadosFrete", JSON.stringify(dadosFrete));
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    // 4. Restaura o botão e mostra sucesso
    btn.innerText = textoOriginal;
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";

    const precoFormatado = formatarPreco(precoFinal);
    mostrarNotificacao(
      `Adicionado ao carrinho!<br><strong>${nomeProduto}</strong><br>Total: R$ ${precoFormatado}`,
      "sucesso",
    );
  }, 1000); // 1 segundo de delay
}

// --- Sistema de Cupons ---
// --- Sistema de Cupons ---
const cuponsValidos = {
  BEMVINDO10: 0.1, // 10% de desconto
  GPTSTORE: 0.15, // 15% de desconto
};

// Carrega a biblioteca de confetes dinamicamente
const scriptConfete = document.createElement("script");
scriptConfete.src =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(scriptConfete);

// Aplica o desconto se o cupom for válido e salva no localStorage
function aplicarCupom() {
  const input = document.getElementById("input-cupom");
  const codigo = input.value.trim().toUpperCase();

  if (cuponsValidos[codigo]) {
    localStorage.setItem("cupomAtivo", codigo);
    mostrarNotificacao(`Cupom ${codigo} aplicado com sucesso!`, "sucesso");
    renderizarCarrinho();

    // Dispara a animação de confete
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#28a745", "#ffffff", "#333333"], // Cores da marca
      });
    }
  } else {
    mostrarNotificacao("Cupom inválido ou expirado.", "erro");
  }
}

// Remove o cupom ativo e recalcula o carrinho
function removerCupom() {
  localStorage.removeItem("cupomAtivo");
  renderizarCarrinho();
  mostrarNotificacao("Cupom removido.", "erro");
}

// Remove o frete selecionado e recalcula o carrinho
function removerFrete() {
  localStorage.removeItem("dadosFrete");
  renderizarCarrinho();
  mostrarNotificacao("Frete removido.", "erro");
}

// Gera o HTML da lista de produtos na página do carrinho
function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("valor-total");
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const btnWhatsapp = document.querySelector(".btn-whatsapp");
  const btnEsvaziar = document.querySelector(".btn-esvaziar");

  lista.innerHTML = "";
  let subtotal = 0;

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalEl.innerText = "0,00";

    // Desabilita o botão do WhatsApp e esconde o de esvaziar
    if (btnWhatsapp) {
      btnWhatsapp.disabled = true;
      btnWhatsapp.style.opacity = "0.5";
      btnWhatsapp.style.cursor = "not-allowed";
    }
    if (btnEsvaziar) {
      btnEsvaziar.style.display = "none";
    }
    return;
  }

  // Habilita os botões se houver itens
  if (btnWhatsapp) {
    btnWhatsapp.disabled = false;
    btnWhatsapp.style.opacity = "1";
    btnWhatsapp.style.cursor = "pointer";
  }
  if (btnEsvaziar) {
    btnEsvaziar.style.display = "block";
  }

  // 1. Calcula o subtotal antes para a barra de progresso
  carrinho.forEach((item) => {
    subtotal += item.preco * (item.quantidade || 1);
  });

  // 2. Barra de Progresso de Frete Grátis (Meta: R$ 299,00)
  const LIMITE_FRETE = 299.0;
  const percentual = Math.min((subtotal / LIMITE_FRETE) * 100, 100);
  const falta = LIMITE_FRETE - subtotal;

  if (subtotal >= LIMITE_FRETE) {
    lista.innerHTML += `<div class="frete-gratis-box sucesso"><p>🎉 Parabéns! Você ganhou <strong>Frete Grátis</strong>!</p><div class="progress-bg"><div class="progress-fill" style="width: 100%;"></div></div></div>`;
  } else {
    lista.innerHTML += `<div class="frete-gratis-box"><p>Faltam <strong>R$ ${formatarPreco(falta)}</strong> para ganhar Frete Grátis!</p><div class="progress-bg"><div class="progress-fill" style="width: ${percentual}%;"></div></div></div>`;
  }

  // 3. Renderiza os itens
  carrinho.forEach((item, index) => {
    const qtd = item.quantidade || 1;
    lista.innerHTML += `
            <div class="item-carrinho">
                <div class="item-info">
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div>
                        <h4>${item.nome}</h4>
                        <p>Tamanho: ${item.tamanho} | ${item.personalizacao}</p>
                        <p><strong>R$ ${formatarPreco(item.preco)}</strong></p>
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

  // Lógica de Desconto
  const cupomAtivo = localStorage.getItem("cupomAtivo");
  let desconto = 0;
  if (cupomAtivo && cuponsValidos[cupomAtivo]) {
    desconto = subtotal * cuponsValidos[cupomAtivo];
  }

  // Lógica de Frete (Recupera do LocalStorage)
  const dadosFrete = JSON.parse(localStorage.getItem("dadosFrete"));
  let valorFrete = 0;
  let htmlFrete = "";

  if (dadosFrete) {
    valorFrete = dadosFrete.valor;

    // Verifica se atingiu a meta de Frete Grátis (R$ 299,00)
    if (subtotal >= LIMITE_FRETE) {
      valorFrete = 0;
      htmlFrete = `<p>Frete (${dadosFrete.tipo}): <span style="color: #28a745; font-weight: bold;">GRÁTIS</span> <span style="text-decoration: line-through; font-size: 0.8em; color: #999;">R$ ${formatarPreco(dadosFrete.valor)}</span> <button class="btn-remover-frete" onclick="removerFrete()" title="Remover frete">❌</button></p>`;
    } else {
      htmlFrete = `<p>Frete (${dadosFrete.tipo}): + R$ ${formatarPreco(valorFrete)} <button class="btn-remover-frete" onclick="removerFrete()" title="Remover frete">❌</button></p>`;
    }
  }

  const totalFinal = subtotal - desconto + valorFrete;

  // Adiciona o campo de cupom ao final da lista
  lista.innerHTML += `
    <div class="carrinho-footer-cupom">
        <div class="cupom-input-group">
            <input type="text" id="input-cupom" placeholder="Cupom de desconto" value="${cupomAtivo || ""}">
            <button class="btn-aplicar-cupom" onclick="aplicarCupom()">Aplicar</button>
            ${cupomAtivo ? `<button class="btn-remover-cupom" onclick="removerCupom()" title="Remover cupom">❌</button>` : ""}
        </div>
        ${desconto > 0 ? `<div class="resumo-desconto"><p>Subtotal: R$ ${formatarPreco(subtotal)}</p><p class="texto-desconto">Desconto (${cupomAtivo}): - R$ ${formatarPreco(desconto)}</p></div>` : ""}
        ${dadosFrete ? `<div class="resumo-desconto">${htmlFrete}</div>` : ""}
    </div>
  `;

  // Campo de Observações
  const obsSalva = localStorage.getItem("observacoesPedido") || "";
  lista.innerHTML += `
    <div class="observacoes-container">
        <label for="observacoes-pedido">Observações do Pedido:</label>
        <textarea id="observacoes-pedido" placeholder="Ex: Entregar na portaria, embrulhar para presente..." oninput="localStorage.setItem('observacoesPedido', this.value)">${obsSalva}</textarea>
    </div>
  `;

  totalEl.innerText = formatarPreco(totalFinal);
}

// Aumenta ou diminui a quantidade de um item no carrinho
function alterarQuantidade(index, mudanca) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (!carrinho[index].quantidade) carrinho[index].quantidade = 1;

  carrinho[index].quantidade += mudanca;

  // Se a quantidade for 0 ou menor, remove o item (com confirmação opcional)
  if (carrinho[index].quantidade <= 0) {
    if (confirm("Deseja remover este item do carrinho?")) {
      const nomeItem = carrinho[index].nome;
      carrinho.splice(index, 1);
      mostrarNotificacao(`Removido: ${nomeItem}`, "erro");
    } else {
      carrinho[index].quantidade = 1; // Cancela e volta para 1
    }
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

// Remove um item específico do carrinho
function removerItem(index) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const nomeItem = carrinho[index] ? carrinho[index].nome : "Item";
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
  atualizarContadorCarrinho();
  mostrarNotificacao(`Removido: ${nomeItem}`, "erro");
}

// Monta a mensagem formatada e abre o WhatsApp
function finalizarPedidoWhatsApp() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    mostrarNotificacao("Seu carrinho está vazio!", "erro");
    return;
  }

  // Captura e Valida os Dados do Cliente
  const nome = document.getElementById("nome-cliente")
    ? document.getElementById("nome-cliente").value.trim()
    : "";
  const telefone = document.getElementById("telefone-cliente")
    ? document.getElementById("telefone-cliente").value.trim()
    : "";
  const endereco = document.getElementById("endereco-cliente")
    ? document.getElementById("endereco-cliente").value.trim()
    : "";
  const pagamento = document.getElementById("pagamento-cliente")
    ? document.getElementById("pagamento-cliente").value
    : "";

  // Se os campos existirem na página (estamos no carrinho), valida o preenchimento
  if (document.getElementById("nome-cliente")) {
    if (!nome || !telefone || !endereco || !pagamento) {
      mostrarNotificacao(
        "Por favor, preencha todos os dados de entrega e pagamento!",
        "erro",
      );
      // Foca no primeiro campo vazio
      if (!nome) document.getElementById("nome-cliente").focus();
      else if (!telefone) document.getElementById("telefone-cliente").focus();
      else if (!endereco) document.getElementById("endereco-cliente").focus();
      else if (!pagamento) document.getElementById("pagamento-cliente").focus();
      return;
    }
  }

  let mensagem = "Olá! Gostaria de finalizar o seguinte pedido:\n\n";

  // Adiciona Dados do Cliente no topo da mensagem
  if (nome) {
    mensagem += `👤 *DADOS DO CLIENTE:*\nNome: ${nome}\nTelefone: ${telefone}\nEndereço: ${endereco}\n\n`;
  }

  mensagem += `🛒 *RESUMO DO PEDIDO:*\n`;
  let total = 0;

  carrinho.forEach((item) => {
    const qtd = item.quantidade || 1;
    total += item.preco * qtd;
    mensagem += `👕 *${qtd}x ${item.nome}*\n`;
    mensagem += `   Tamanho: ${item.tamanho}\n`;
    if (item.personalizacao && item.personalizacao !== "Sem personalização") {
      mensagem += `   Personalização: ${item.personalizacao}\n`;
    }
    mensagem += `   Preço: R$ ${formatarPreco(item.preco)}\n\n`;
  });

  const subtotal = total; // Salva o subtotal para verificação de frete grátis

  // Verifica se tem cupom para o WhatsApp
  const cupomAtivo = localStorage.getItem("cupomAtivo");
  if (cupomAtivo && cuponsValidos[cupomAtivo]) {
    const desconto = total * cuponsValidos[cupomAtivo];
    mensagem += `🏷️ *Subtotal: R$ ${formatarPreco(total)}*\n`;
    mensagem += `🎟️ *Cupom (${cupomAtivo}): - R$ ${formatarPreco(desconto)}*\n`;
    total -= desconto;
  }

  // Adiciona o Frete na mensagem do WhatsApp
  const dadosFrete = JSON.parse(localStorage.getItem("dadosFrete"));
  if (dadosFrete) {
    let valorFrete = dadosFrete.valor;
    let textoFrete = `🚚 *Frete (${dadosFrete.tipo}): R$ ${formatarPreco(valorFrete)}*`;

    if (subtotal >= 299.0) {
      valorFrete = 0;
      textoFrete = `🚚 *Frete (${dadosFrete.tipo}): GRÁTIS (Meta atingida)*`;
    }
    mensagem += `${textoFrete}\n`;
    total += valorFrete;
  }

  mensagem += `💰 *Total Final: R$ ${formatarPreco(total)}*\n`;

  // Adiciona Forma de Pagamento
  if (pagamento) {
    mensagem += `💳 *Forma de Pagamento:* ${pagamento}\n`;
  }

  // Adiciona Observações
  const observacoes = localStorage.getItem("observacoesPedido");
  if (observacoes) {
    mensagem += `\n📝 *Observações:*\n${observacoes}`;
  }

  // Substitua pelo número da loja (com DDI 55 e DDD)
  const numeroWhatsApp = "5541995655320";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

// Limpa todo o carrinho e dados associados
function esvaziarCarrinho() {
  if (confirm("Tem certeza que deseja esvaziar todo o carrinho?")) {
    localStorage.removeItem("carrinho");
    localStorage.removeItem("dadosFrete"); // Remove também o frete salvo
    localStorage.removeItem("observacoesPedido"); // Remove observações
    renderizarCarrinho();
    atualizarContadorCarrinho();
    mostrarNotificacao("Carrinho esvaziado!", "erro");
  }
}

// Calcula o preço com 5% de desconto para exibição (Pix)
function calcularPrecoPix() {
  // Busca o preço apenas dentro de .info (garante que é a página do produto e não um card da lista)
  const precoElemento = document.querySelector(".info .preco-destaque");

  // Se não houver preço na página (ex: home), a função para aqui
  if (!precoElemento) return;

  // Remove o aviso de Pix anterior para não duplicar ao atualizar
  const pixAnterior = document.querySelector(".preco-pix");
  if (pixAnterior) {
    pixAnterior.remove();
  }

  // Pega apenas o texto do preço (primeiro nó de texto), ignorando o preço antigo (span)
  const textoPreco = precoElemento.childNodes[0].textContent;

  // Limpa a string: remove "R$", remove pontos de milhar e troca vírgula por ponto
  const valorNumerico = parseFloat(
    textoPreco.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
  );

  if (!isNaN(valorNumerico)) {
    const valorPix = valorNumerico * 0.95; // Aplica 5% de desconto

    const pPix = document.createElement("p");
    pPix.classList.add("preco-pix");
    pPix.innerHTML = `R$ ${formatarPreco(valorPix)} com <strong>Pix</strong> (5% de desconto)`;

    // Insere o elemento logo após o preço principal
    precoElemento.after(pPix);
  }
}

// Função auxiliar para formatar preço (R$) - Troca ponto por vírgula
function formatarPreco(valor) {
  return valor.toFixed(2).replace(".", ",");
}

// Função auxiliar para remover acentos e normalizar texto para busca (ex: "Seleção" -> "selecao")
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Função para criar notificações elegantes (Toast) que aparecem no canto da tela
function mostrarNotificacao(mensagem, tipo = "sucesso") {
  // Cria o container se não existir
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("toast-container");
    document.body.appendChild(container);
  }

  // Cria o elemento da notificação
  const toast = document.createElement("div");
  toast.classList.add("toast", tipo);
  toast.innerHTML = mensagem; // Permite usar <br> ou <strong>

  container.appendChild(toast);

  // Remove após 4 segundos
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Função para filtrar categorias por abas na página de Clubes
function filtrarCategoria(categoria, botao) {
  // Atualiza o visual dos botões
  const botoes = document.querySelectorAll(".btn-aba");
  botoes.forEach((btn) => btn.classList.remove("ativo"));
  botao.classList.add("ativo");

  // Mostra ou esconde as seções
  const secoes = document.querySelectorAll(".secao-categoria");
  secoes.forEach((secao) => {
    // Remove a animação anterior para reiniciar
    secao.classList.remove("animar-aba");

    // Se for 'todos' ou se o ID da seção for igual à categoria clicada
    if (categoria === "todos" || secao.id === categoria) {
      secao.style.display = "block";
      // Truque para reiniciar a animação CSS (Reflow)
      void secao.offsetWidth;
      secao.classList.add("animar-aba");
    } else {
      secao.style.display = "none";
    }
  });
}

// --- Funções do Modal de Medidas ---
// Cria o modal dinamicamente no HTML se ele não existir e o exibe
function abrirModalMedidas() {
  let modal = document.getElementById("modal-medidas");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-medidas";
    modal.className = "modal-container";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="fecharModalMedidas()">&times;</span>
            <h3>Guia de Medidas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tamanho</th>
                        <th>Largura (cm)</th>
                        <th>Altura (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>P</td><td>50</td><td>70</td></tr>
                    <tr><td>M</td><td>53</td><td>72</td></tr>
                    <tr><td>G</td><td>56</td><td>74</td></tr>
                    <tr><td>GG</td><td>59</td><td>76</td></tr>
                    <tr><td>GGG</td><td>62</td><td>78</td></tr>
                </tbody>
            </table>
        </div>
    `;
    document.body.appendChild(modal);
  }

  modal.style.display = "flex";
}

function fecharModalMedidas() {
  const modal = document.getElementById("modal-medidas");
  if (modal) {
    modal.style.display = "none";
  }
}

// --- Função para Exibir Produtos Relacionados ---
// Seleciona 3 produtos aleatórios do banco de dados e exibe no final da página
function exibirProdutosRelacionados() {
  const container = document.getElementById("produtos-relacionados");
  if (!container) return;

  // Embaralha e pega 3 produtos aleatórios
  const produtosAleatorios = produtosDB
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  let html = `<h2 class="titulo-relacionados">Você também pode gostar</h2><div class="container-produtos">`;

  produtosAleatorios.forEach((produto) => {
    html += `
        <div class="card">
            <img src="${produto.img}" alt="${produto.nome}" onclick="window.location.href='${produto.url}'" style="cursor: pointer;">
            <h3>${produto.nome}</h3>
            <p class="preco-destaque">R$ ${formatarPreco(produto.preco)}</p>
            <button onclick="window.location.href='${produto.url}'">Ver Detalhes</button>
        </div>
    `;
  });

  html += "</div>";
  container.innerHTML = html;
}

// --- Lógica do Carrossel ---
// Gerencia a troca de slides automática e manual na Home
let slideIndex = 0;
let timer; // Variável para controlar o tempo automático

function iniciarCarrossel() {
  const slides = document.getElementsByClassName("carousel-slide");
  if (slides.length === 0) return; // Se não estiver na home, sai da função
  showSlides();
}

// Função para controle manual
function mudarSlide(n) {
  clearTimeout(timer); // Para o timer automático ao clicar
  slideIndex += n - 1; // Ajusta o índice (subtrai 1 pois showSlides soma 1)
  showSlides();
}

function currentSlide(n) {
  clearTimeout(timer);
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  } // Garante o loop ao voltar

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }

  timer = setTimeout(showSlides, 4000); // Reinicia o timer
}

// Função para rolar a página para o topo suavemente
function subirTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Função para abrir/fechar o Menu Hambúrguer no mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  navLinks.classList.toggle("active");
  if (menuToggle) menuToggle.classList.toggle("active");
}
