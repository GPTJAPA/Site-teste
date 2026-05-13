// --- Banco de Dados Global de Produtos ---
// Lista de objetos que contém as informações básicas de cada produto para busca e exibição
const produtosDB = [
  {
    id: "selecao-brasileira-1-2026-jogador",
    nome: "Camisa Seleção Brasileira I 2026 - VERSÃO JOGADOR",
    url: "produto.html?id=selecao-brasileira-1-2026-jogador",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Jogador/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Jogador/frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Jogador/costas.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Jogador/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Jogador/etiqueta.jpg",
    ],
    preco: 280.0,
  },
  {
    id: "selecao-brasileira-2-2026-jogador",
    nome: "Camisa Seleção Brasil II 2026 - VERSÃO JOGADOR",
    url: "produto.html?id=selecao-brasileira-2-2026-jogador",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/costas.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/lateral.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Jogador/etiqueta.jpg",
    ],
    preco: 280.0,
  },
  {
    id: "selecao-brasileira-1-2026",
    nome: "Camisa Seleção Brasileira I 2026",
    url: "produto.html?id=selecao-brasileira-1-2026",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 1/Frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1/Frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1/Costas.jpg", // Exemplo de segunda foto
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1/gola.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1/etiqueta.jpg",
    ],
    preco: 225.0,
  },
  {
    id: "selecao-brasileira-2-2026",
    nome: "Camisa Seleção Brasil II 2026",
    url: "produto.html?id=selecao-brasileira-2-2026",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 2/Frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2/Frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2/Costas.jpg", // Exemplo de segunda foto
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2/lateral.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "alemanha",
    nome: "Camisa Seleção Alemanha I 2026",
    url: "produto.html?id=alemanha",
    img: "imagens/Camisas-time/Seleções/Alemanha/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Alemanha/frente.jpg",
      "imagens/Camisas-time/Seleções/Alemanha/costas.jpg",
      "imagens/Camisas-time/Seleções/Alemanha/emblema.jpg",
      "imagens/Camisas-time/Seleções/Alemanha/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Alemanha/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "alemanha-fem",
    nome: "Camisa Seleção Alemanha Feminina",
    url: "produto.html?id=alemanha-fem",
    img: "imagens/Camisas-time/Seleções/Alemanha - feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Alemanha - feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Alemanha - feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Alemanha - feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Alemanha - feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Alemanha - feminino/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "argentina",
    nome: "Camisa Seleção Argentina I 2026",
    url: "produto.html?id=argentina",
    img: "imagens/Camisas-time/Seleções/Argentina/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Argentina/frente.jpg",
      "imagens/Camisas-time/Seleções/Argentina/costas.jpg",
      "imagens/Camisas-time/Seleções/Argentina/emblema.jpg",
      "imagens/Camisas-time/Seleções/Argentina/patch.jpg",
      "imagens/Camisas-time/Seleções/Argentina/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Argentina/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "argentina-fem",
    nome: "Camisa Seleção Argentina Feminina",
    url: "produto.html?id=argentina-fem",
    img: "imagens/Camisas-time/Seleções/Argentina - Feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Argentina - Feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Argentina - Feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Argentina - Feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Argentina - Feminino/patch.jpg",
      "imagens/Camisas-time/Seleções/Argentina - Feminino/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "colombia",
    nome: "Camisa Seleção Colombia I 2026",
    url: "produto.html?id=colombia",
    img: "imagens/Camisas-time/Seleções/Colombia/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Colombia/frente.jpg",
      "imagens/Camisas-time/Seleções/Colombia/costas.jpg",
      "imagens/Camisas-time/Seleções/Colombia/emblema.jpg",
      "imagens/Camisas-time/Seleções/Colombia/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Colombia/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "colombia-fem",
    nome: "Camisa Seleção Colombia Feminina",
    url: "produto.html?id=colombia-fem",
    img: "imagens/Camisas-time/Seleções/Colombia - feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Colombia - feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Colombia - feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Colombia - feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Colombia - feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Colombia - feminino/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "brasil-retro",
    nome: "Camisa Seleção Brasileira 2002 Retrô",
    url: "produto.html?id=brasil-retro",
    img: "imagens/Camisas-time/Seleções/Brasileira - retro penta/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/frente.jpg",
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/costas.jpg",
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/emblema.jpg",
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/lateral.jpg",
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/ronaldo.png",
      "imagens/Camisas-time/Seleções/Brasileira - retro penta/Ronaldinho.webp",
    ],
    preco: 240.0,
  },
  {
    id: "selecao-brasileira-fem-1",
    nome: "Camisa Seleção Brasileira Feminina I",
    url: "produto.html?id=selecao-brasileira-fem-1",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 1 - Feminino/gola.jpg",
    ],
    preco: 225.0,
  },
  {
    id: "selecao-brasileira-fem-2",
    nome: "Camisa Seleção Brasileira Feminina II",
    url: "produto.html?id=selecao-brasileira-fem-2",
    img: "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Seleção Brasileira 2 - Feminino/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "alemanha-2",
    nome: "Camisa Seleção Alemanha II 2026",
    url: "produto.html?id=alemanha-2",
    img: "imagens/Camisas-time/Seleções/Alemanha II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Alemanha II/frente.jpg",
      "imagens/Camisas-time/Seleções/Alemanha II/costas.jpg",
      "imagens/Camisas-time/Seleções/Alemanha II/emblema.jpg",
      "imagens/Camisas-time/Seleções/Alemanha II/lateral.jpg",
      "imagens/Camisas-time/Seleções/Alemanha II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "brasil-1994-amarela",
    nome: "Camisa Seleção Brasileira 1994 - Amarela",
    url: "produto.html?id=brasil-1994-amarela",
    img: "imagens/Camisas-time/Seleções/Brasil Amare -1994/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Brasil Amare -1994/frente.jpg",
      "imagens/Camisas-time/Seleções/Brasil Amare -1994/costas.jpg",
      "imagens/Camisas-time/Seleções/Brasil Amare -1994/emblema.jpg",
      "imagens/Camisas-time/Seleções/Brasil Amare -1994/lateral.jpg",
      "imagens/Camisas-time/Seleções/Brasil Amare -1994/gola.jpg",
    ],
    preco: 240.0,
  },
  {
    id: "brasil-1994-azul",
    nome: "Camisa Seleção Brasileira 1994 - Azul",
    url: "produto.html?id=brasil-1994-azul",
    img: "imagens/Camisas-time/Seleções/Brasil Azul -1994/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Brasil Azul -1994/frente.jpg",
      "imagens/Camisas-time/Seleções/Brasil Azul -1994/costas.jpg",
      "imagens/Camisas-time/Seleções/Brasil Azul -1994/emblema.jpg",
      "imagens/Camisas-time/Seleções/Brasil Azul -1994/lateral.jpg",
      "imagens/Camisas-time/Seleções/Brasil Azul -1994/gola.jpg",
    ],
    preco: 240.0,
  },
  {
    id: "espanha",
    nome: "Camisa Seleção Espanha I 2026",
    url: "produto.html?id=espanha",
    img: "imagens/Camisas-time/Seleções/Espanha/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Espanha/frente.jpg",
      "imagens/Camisas-time/Seleções/Espanha/costas.jpg",
      "imagens/Camisas-time/Seleções/Espanha/emblema.jpg",
      "imagens/Camisas-time/Seleções/Espanha/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Espanha/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "espanha-fem",
    nome: "Camisa Seleção Espanha Feminina",
    url: "produto.html?id=espanha-fem",
    img: "imagens/Camisas-time/Seleções/Espanha - feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Espanha - feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Espanha - feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Espanha - feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Espanha - feminino/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "franca-retro",
    nome: "Camisa Seleção França - Retro",
    url: "produto.html?id=franca-retro",
    img: "imagens/Camisas-time/Seleções/França - retro/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/França - retro/frente.jpg",
      "imagens/Camisas-time/Seleções/França - retro/costas.jpg",
      "imagens/Camisas-time/Seleções/França - retro/emblema.jpg",
      "imagens/Camisas-time/Seleções/França - retro/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/França - retro/gola.jpg",
      "imagens/Camisas-time/Seleções/França - retro/Zidane.webp",
    ],
    preco: 230.0,
  },
  {
    id: "italia-1",
    nome: "Camisa Seleção Italia I 2026",
    url: "produto.html?id=italia-1",
    img: "imagens/Camisas-time/Seleções/Italia I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Italia I/frente.jpg",
      "imagens/Camisas-time/Seleções/Italia I/costas.jpg",
      "imagens/Camisas-time/Seleções/Italia I/emblema.jpg",
      "imagens/Camisas-time/Seleções/Italia I/gola.jpg",
      "imagens/Camisas-time/Seleções/Italia I/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Italia I/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "italia-2",
    nome: "Camisa Seleção Italia II 2026",
    url: "produto.html?id=italia-2",
    img: "imagens/Camisas-time/Seleções/Italia II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Italia II/frente.jpg",
      "imagens/Camisas-time/Seleções/Italia II/costas.jpg",
      "imagens/Camisas-time/Seleções/Italia II/emblema.jpg",
      "imagens/Camisas-time/Seleções/Italia II/gola.jpg",
      "imagens/Camisas-time/Seleções/Italia II/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Italia II/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "mexico",
    nome: "Camisa Seleção México I 2026",
    url: "produto.html?id=mexico",
    img: "imagens/Camisas-time/Seleções/Mexico/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Mexico/frente.jpg",
      "imagens/Camisas-time/Seleções/Mexico/costas.jpg",
      "imagens/Camisas-time/Seleções/Mexico/emblema.jpg",
      "imagens/Camisas-time/Seleções/Mexico/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Mexico/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "mexico-fem",
    nome: "Camisa Seleção México Feminina",
    url: "produto.html?id=mexico-fem",
    img: "imagens/Camisas-time/Seleções/Mexico - feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Mexico - feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Mexico - feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Mexico - feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Mexico - feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Mexico - feminino/gola.jpg",
      "imagens/Camisas-time/Seleções/Mexico - feminino/corpo.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "portugal",
    nome: "Camisa Seleção Portugal I 2026",
    url: "produto.html?id=portugal",
    img: "imagens/Camisas-time/Seleções/Portugal/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Portugal/frente.jpg",
      "imagens/Camisas-time/Seleções/Portugal/costas.jpg",
      "imagens/Camisas-time/Seleções/Portugal/emblema.jpg",
      "imagens/Camisas-time/Seleções/Portugal/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Portugal/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "portugal-fem",
    nome: "Camisa Seleção Portugal Feminina",
    url: "produto.html?id=portugal-fem",
    img: "imagens/Camisas-time/Seleções/Portugal - feminino/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Portugal - feminino/frente.jpg",
      "imagens/Camisas-time/Seleções/Portugal - feminino/costas.jpg",
      "imagens/Camisas-time/Seleções/Portugal - feminino/emblema.jpg",
      "imagens/Camisas-time/Seleções/Portugal - feminino/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Portugal - feminino/gola.jpg",
      "imagens/Camisas-time/Seleções/Portugal - feminino/corpo.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "portugal-especial",
    nome: "Camisa Seleção Portugal Especial",
    url: "produto.html?id=portugal-especial",
    img: "imagens/Camisas-time/Seleções/Portugal especial/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Seleções/Portugal especial/frente.jpg",
      "imagens/Camisas-time/Seleções/Portugal especial/costas.jpg",
      "imagens/Camisas-time/Seleções/Portugal especial/emblema.jpg",
      "imagens/Camisas-time/Seleções/Portugal especial/etiqueta.jpg",
      "imagens/Camisas-time/Seleções/Portugal especial/gola.jpg",
      "imagens/Camisas-time/Seleções/Portugal especial/lateral.jpg",
    ],
    preco: 200.0,
  },
  // --- BRASILEIRÃO ---
  {
    id: "atl-mineiro-titular-2024",
    nome: "Camisa Atletico Mineiro I 2026",
    url: "produto.html?id=atl-mineiro-titular-2024",
    img: "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "atl-mineiro-ii-2026",
    nome: "Camisa Atletico Mineiro II 2026",
    url: "produto.html?id=atl-mineiro-ii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "atl-mineiro-iii-2026",
    nome: "Camisa Atletico Mineiro III 2026",
    url: "produto.html?id=atl-mineiro-iii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Atl. Mineiro III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "atlético-juventus-2026",
    nome: "Camisa Atlético Juventus 2026",
    url: "produto.html?id=atlético-juventus-2026",
    img: "imagens/Camisas-time/Brasileirão A/Atlético Juventus/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Atlético Juventus/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Atlético Juventus/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Atlético Juventus/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Atlético Juventus/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Atlético Juventus/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "botafogo-i-2026",
    nome: "Camisa Botafogo I 2026",
    url: "produto.html?id=botafogo-i-2026",
    img: "imagens/Camisas-time/Brasileirão A/Botafogo I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Botafogo I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo I/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo I/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo I/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "botafogo-ii-2026",
    nome: "Camisa Botafogo II 2026",
    url: "produto.html?id=botafogo-ii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Botafogo II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Botafogo II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo II/costa.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo II/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Botafogo II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "corinthians-i-2026",
    nome: "Camisa Corinthians I 2026",
    url: "produto.html?id=corinthians-i-2026",
    img: "imagens/Camisas-time/Brasileirão A/Corinthians I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Corinthians I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians I/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians I/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians I/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "corinthians-ii-2026",
    nome: "Camisa Corinthians II 2026",
    url: "produto.html?id=corinthians-ii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Corinthians II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Corinthians II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians II/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "corinthians-iv-2026",
    nome: "Camisa Corinthians Total 90 2026",
    url: "produto.html?id=corinthians-iv-2026",
    img: "imagens/Camisas-time/Brasileirão A/Corinthians 4/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Corinthians 4/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians 4/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians 4/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians 4/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians 4/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "corinthians-iii-2026",
    nome: "Camisa Corinthians Away 2025",
    url: "produto.html?id=corinthians-iii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Corinthians III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Corinthians III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians III/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Corinthians III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "cruzeiro-i-2026",
    nome: "Camisa Cruzeiro I 2026",
    url: "produto.html?id=cruzeiro-i-2026",
    img: "imagens/Camisas-time/Brasileirão A/Cruzeiro I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Cruzeiro I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro I/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "cruzeiro-ii-2026",
    nome: "Camisa Cruzeiro II 2026",
    url: "produto.html?id=cruzeiro-ii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Cruzeiro II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Cruzeiro II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro II/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro II/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "cruzeiro-iii-2026",
    nome: "Camisa Cruzeiro de Treino 2025",
    url: "produto.html?id=cruzeiro-iii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Cruzeiro III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Cruzeiro III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro III/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Cruzeiro III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "flamengo-1-2026",
    nome: "Camisa Flamengo I 2026",
    url: "produto.html?id=flamengo-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/Flamengo/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Flamengo/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "flamengo-2-2026",
    nome: "Camisa Flamengo II 2026",
    url: "produto.html?id=flamengo-2-2026",
    img: "imagens/Camisas-time/Brasileirão A/Flamengo II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Flamengo II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo II/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "flamengo-3-2026",
    nome: "Camisa Flamengo III 2026",
    url: "produto.html?id=flamengo-3-2026",
    img: "imagens/Camisas-time/Brasileirão A/Flamengo III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Flamengo III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo III/lateral.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "flamengo-4-2026",
    nome: "Camisa Flamengo IV 2026",
    url: "produto.html?id=flamengo-4-2026",
    img: "imagens/Camisas-time/Brasileirão A/Flamengo 4/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Flamengo 4/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo 4/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo 4/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Flamengo 4/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "gremio-i-2026",
    nome: "Camisa Grêmio I 2026",
    url: "produto.html?id=gremio-i-2026",
    img: "imagens/Camisas-time/Brasileirão A/Gremio I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Gremio I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio I/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio I/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio I/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "gremio-ii-2026",
    nome: "Camisa Grêmio II 2026",
    url: "produto.html?id=gremio-ii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Gremio II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Gremio II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio II/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "gremio-iii-2026",
    nome: "Camisa Grêmio III 2026",
    url: "produto.html?id=gremio-iii-2026",
    img: "imagens/Camisas-time/Brasileirão A/Gremio III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Gremio III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio III/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Gremio III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "internacional-1-2026",
    nome: "Camisa Internacional I 2026",
    url: "produto.html?id=internacional-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/Internacional I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Internacional I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Internacional I/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Internacional I/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Internacional I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "palmeiras-1-2026",
    nome: "Camisa Palmeiras I 2026",
    url: "produto.html?id=palmeiras-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/Palmeiras I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Palmeiras I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Palmeiras I/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "palmeiras-2-2026",
    nome: "Camisa Palmeiras II 2026",
    url: "produto.html?id=palmeiras-2-2026",
    img: "imagens/Camisas-time/Brasileirão A/Palmeiras II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Palmeiras II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Palmeiras II/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "palmeiras-3-2026",
    nome: "Camisa Palmeiras III 2025",
    url: "produto.html?id=palmeiras-3-2026",
    img: "imagens/Camisas-time/Brasileirão A/Palmeiras III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Palmeiras III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Palmeiras III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Palmeiras III/emblema.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "santos-1-2026",
    nome: "Camisa Santos I 2026",
    url: "produto.html?id=santos-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/Santos I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Santos I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos I/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos I/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos I/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "santos-2-2026",
    nome: "Camisa Santos II 2026",
    url: "produto.html?id=santos-2-2026",
    img: "imagens/Camisas-time/Brasileirão A/Santos II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Santos II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos II/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos II/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos II/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos II/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "santos-3-2026",
    nome: "Camisa Santos III 2026",
    url: "produto.html?id=santos-3-2026",
    img: "imagens/Camisas-time/Brasileirão A/Santos III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Santos III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos III/costas.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos III/emblema.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos III/etiqueta.jpg",
      "imagens/Camisas-time/Brasileirão A/Santos III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "sao-paulo-2-2026",
    nome: "Camisa São Paulo II 2026",
    url: "produto.html?id=sao-paulo-2-2026",
    img: "imagens/Camisas-time/Brasileirão A/São Paulo II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/São Paulo II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/São Paulo II/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "sao-paulo-1-2026",
    nome: "Camisa São Paulo I 2026",
    url: "produto.html?id=sao-paulo-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/São Paulo/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/São Paulo/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/São Paulo/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "sao-paulo-3-2026",
    nome: "Camisa São Paulo III 2026",
    url: "produto.html?id=sao-paulo-3-2026",
    img: "imagens/Camisas-time/Brasileirão A/São Paulo III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/São Paulo III/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/São Paulo III/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "vasco-1-2026",
    nome: "Camisa Vasco I 2026",
    url: "produto.html?id=vasco-1-2026",
    img: "imagens/Camisas-time/Brasileirão A/Vasco I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Vasco I/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Vasco I/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "vasco-2-2026",
    nome: "Camisa Vasco II 2026",
    url: "produto.html?id=vasco-2-2026",
    img: "imagens/Camisas-time/Brasileirão A/Vasco II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Brasileirão A/Vasco II/frente.jpg",
      "imagens/Camisas-time/Brasileirão A/Vasco II/costas.jpg",
    ],
    preco: 200.0,
  },
  // --- LA LIGA ---
  {
    id: "real-madrid-1-2026",
    nome: "Camisa Real Madrid I 2026",
    url: "produto.html?id=real-madrid-1-2026",
    img: "imagens/Camisas-time/LaLiga/Real madrid I/Frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Real madrid I/Frente.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid I/Costas.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid I/Escudo.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid I/Gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "real-madrid-2-2026",
    nome: "Camisa Real Madrid II 2026",
    url: "produto.html?id=real-madrid-2-2026",
    img: "imagens/Camisas-time/LaLiga/Real madrid II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Real madrid II/frente.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid II/costas.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid II/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Real madrid II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "barcelona-1-2025",
    nome: "Camisa Barcelona I 2025",
    url: "produto.html?id=barcelona-1-2025",
    img: "imagens/Camisas-time/LaLiga/Barcelona I/Frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Barcelona I/Frente.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona I/costas.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona I/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona I/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "barcelona-2-2025",
    nome: "Camisa Barcelona II 2025",
    url: "produto.html?id=barcelona-2-2025",
    img: "imagens/Camisas-time/LaLiga/Barcelona II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Barcelona II/frente.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona II/costas.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona II/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona II/etiqueta.jpg",
      "imagens/Camisas-time/LaLiga/Barcelona II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "atletico-madrid-1-2025",
    nome: "Camisa Atletico Madrid I 2025",
    url: "produto.html?id=atletico-madrid-1-2025",
    img: "imagens/Camisas-time/LaLiga/Atletico Madrid/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Atletico Madrid/frente.jpg",
      "imagens/Camisas-time/LaLiga/Atletico Madrid/costas.jpg",
      "imagens/Camisas-time/LaLiga/Atletico Madrid/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Atletico Madrid/etiqueta.jpg",
      "imagens/Camisas-time/LaLiga/Atletico Madrid/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "atletico-madrid-2-2025",
    nome: "Camisa Atletico Madrid II 2025",
    url: "produto.html?id=atletico-madrid-2-2025",
    img: "imagens/Camisas-time/LaLiga/Atletico Madrid - Copia/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Atletico Madrid - Copia/frente.jpg",
      "imagens/Camisas-time/LaLiga/Atletico Madrid - Copia/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "athletic-bilbao-1-2025",
    nome: "Camisa Athletic Bilbao I 2025",
    url: "produto.html?id=athletic-bilbao-1-2025",
    img: "imagens/Camisas-time/LaLiga/Athletic Bilbao/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Athletic Bilbao/frente.jpg",
      "imagens/Camisas-time/LaLiga/Athletic Bilbao/costas.jpg",
      "imagens/Camisas-time/LaLiga/Athletic Bilbao/Emblema.webp",
    ],
    preco: 200.0,
  },
  {
    id: "celta-vigo-1-2025",
    nome: "Camisa Celta De Vigo Especial I 2026",
    url: "produto.html?id=celta-vigo-1-2025",
    img: "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/frente.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/costas.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/etiqueta.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "celta-vigo-2-2025",
    nome: "Camisa Celta De Vigo Especial II 2026",
    url: "produto.html?id=celta-vigo-2-2025",
    img: "imagens/Camisas-time/LaLiga/Celta De Vigo Especial II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial II/frente.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial II/costas.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial II/emblema.jpg",
      "imagens/Camisas-time/LaLiga/Celta De Vigo Especial II/lateral.jpg",
    ],
    preco: 200.0,
  },
  // --- PREMIER LEAGUE ---AAAA
  {
    id: "arsenal-1-2026",
    nome: "Camisa Arsenal I 2026",
    url: "produto.html?id=arsenal-1-2026",
    img: "imagens/Camisas-time/Premier league/Arsenal/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Arsenal/frente.jpg",
      "imagens/Camisas-time/Premier league/Arsenal/Costas.jpg",
      "imagens/Camisas-time/Premier league/Arsenal/Escudo.jpg",
      "imagens/Camisas-time/Premier league/Arsenal/Manga.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "arsenal-2-2026",
    nome: "Camisa Arsenal II 2026",
    url: "produto.html?id=arsenal-2-2026",
    img: "imagens/Camisas-time/Premier league/Arsenal Azul/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Arsenal Azul/frente.jpg",
      "imagens/Camisas-time/Premier league/Arsenal Azul/costas.jpg",
      "imagens/Camisas-time/Premier league/Arsenal Azul/emblema.jpg",
      "imagens/Camisas-time/Premier league/Arsenal Azul/etiqueta.jpg",
      "imagens/Camisas-time/Premier league/Arsenal Azul/gola.jpg",
      "imagens/Camisas-time/Premier league/Arsenal Azul/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "aston-villa-1-2026",
    nome: "Camisa Aston Villa I 2026",
    url: "produto.html?id=aston-villa-1-2026",
    img: "imagens/Camisas-time/Premier league/Aston villa/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Aston villa/frente.jpg",
      "imagens/Camisas-time/Premier league/Aston villa/costas.jpg",
      "imagens/Camisas-time/Premier league/Aston villa/emblema.jpg",
      "imagens/Camisas-time/Premier league/Aston villa/lateral.jpg",
      "imagens/Camisas-time/Premier league/Aston villa/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "chelsea-1-2026",
    nome: "Camisa Chelsea I 2026",
    url: "produto.html?id=chelsea-1-2026",
    img: "imagens/Camisas-time/Premier league/Chelsea I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Chelsea I/frente.jpg",
      "imagens/Camisas-time/Premier league/Chelsea I/costas.jpg",
      "imagens/Camisas-time/Premier league/Chelsea I/emblema.jpg",
      "imagens/Camisas-time/Premier league/Chelsea I/lateral.jpg",
      "imagens/Camisas-time/Premier league/Chelsea I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "chelsea-2-2026",
    nome: "Camisa Chelsea II 2026",
    url: "produto.html?id=chelsea-2-2026",
    img: "imagens/Camisas-time/Premier league/Chelsea II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Chelsea II/frente.jpg",
      "imagens/Camisas-time/Premier league/Chelsea II/costas.jpg",
      "imagens/Camisas-time/Premier league/Chelsea II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Chelsea II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Chelsea II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "chelsea-3-2026",
    nome: "Camisa Chelsea III 2026",
    url: "produto.html?id=chelsea-3-2026",
    img: "imagens/Camisas-time/Premier league/Chelsea III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Chelsea III/frente.jpg",
      "imagens/Camisas-time/Premier league/Chelsea III/costas.jpg",
      "imagens/Camisas-time/Premier league/Chelsea III/emblema.jpg",
      "imagens/Camisas-time/Premier league/Chelsea III/lateral.jpg",
      "imagens/Camisas-time/Premier league/Chelsea III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "liverpool-1-2026",
    nome: "Camisa Liverpool I 2026",
    url: "produto.html?id=liverpool-1-2026",
    img: "imagens/Camisas-time/Premier league/Liverpool/frente.webp",
    galeria: [
      "imagens/Camisas-time/Premier league/Liverpool/frente.webp",
      "imagens/Camisas-time/Premier league/Liverpool/costas.webp",
      "imagens/Camisas-time/Premier league/Liverpool/emblema.webp",
      "imagens/Camisas-time/Premier league/Liverpool/gola.webp",
    ],
    preco: 200.0,
  },
  {
    id: "liverpool-2-2026",
    nome: "Camisa Liverpool II 2026",
    url: "produto.html?id=liverpool-2-2026",
    img: "imagens/Camisas-time/Premier league/Liverpool II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Liverpool II/frente.jpg",
      "imagens/Camisas-time/Premier league/Liverpool II/costas.jpg",
      "imagens/Camisas-time/Premier league/Liverpool II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Liverpool II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Liverpool II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "liverpool-3-2026",
    nome: "Camisa Liverpool III 2026",
    url: "produto.html?id=liverpool-3-2026",
    img: "imagens/Camisas-time/Premier league/Liverpool III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Liverpool III/frente.jpg",
      "imagens/Camisas-time/Premier league/Liverpool III/costas.jpg",
      "imagens/Camisas-time/Premier league/Liverpool III/emblema.jpg",
      "imagens/Camisas-time/Premier league/Liverpool III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-city-1-2026",
    nome: "Camisa Manchester City I 2026",
    url: "produto.html?id=man-city-1-2026",
    img: "imagens/Camisas-time/Premier league/Man. City/Frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. City/Frente.jpg",
      "imagens/Camisas-time/Premier league/Man. City/costas.jpg",
      "imagens/Camisas-time/Premier league/Man. City/Escudo.jpg",
      "imagens/Camisas-time/Premier league/Man. City/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-city-2-2026",
    nome: "Camisa Manchester City II 2026",
    url: "produto.html?id=man-city-2-2026",
    img: "imagens/Camisas-time/Premier league/Man. City  II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. City  II/frente.jpg",
      "imagens/Camisas-time/Premier league/Man. City  II/costas.jpg",
      "imagens/Camisas-time/Premier league/Man. City  II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Man. City  II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Man. City  II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-city-3-2026",
    nome: "Camisa Manchester City III 2026",
    url: "produto.html?id=man-city-3-2026",
    img: "imagens/Camisas-time/Premier league/Man. City III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. City III/frente.jpg",
      "imagens/Camisas-time/Premier league/Man. City III/costas.jpg",
      "imagens/Camisas-time/Premier league/Man. City III/emblema.jpg",
      "imagens/Camisas-time/Premier league/Man. City III/lateral.jpg",
      "imagens/Camisas-time/Premier league/Man. City III/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-utd-1-2026",
    nome: "Camisa Manchester United I 2026",
    url: "produto.html?id=man-utd-1-2026",
    img: "imagens/Camisas-time/Premier league/Man. Utd/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. Utd/frente.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd/costas.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd/emblema.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd/lateral.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-utd-2-2026",
    nome: "Camisa Manchester United II 2026",
    url: "produto.html?id=man-utd-2-2026",
    img: "imagens/Camisas-time/Premier league/Man. Utd II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. Utd II/frente.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd II/costas.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "man-utd-3-2026",
    nome: "Camisa Manchester United III 2026",
    url: "produto.html?id=man-utd-3-2026",
    img: "imagens/Camisas-time/Premier league/Man. Utd III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Man. Utd III/frente.jpg",
      "imagens/Camisas-time/Premier league/Man. Utd III/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "newcastle-1-2026",
    nome: "Camisa Newcastle I 2026",
    url: "produto.html?id=newcastle-1-2026",
    img: "imagens/Camisas-time/Premier league/Newcastle I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Newcastle I/frente.jpg",
      "imagens/Camisas-time/Premier league/Newcastle I/costas.jpg",
      "imagens/Camisas-time/Premier league/Newcastle I/emblema.jpg",
      "imagens/Camisas-time/Premier league/Newcastle I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "newcastle-2-2026",
    nome: "Camisa Newcastle II 2026",
    url: "produto.html?id=newcastle-2-2026",
    img: "imagens/Camisas-time/Premier league/Newcastle II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Newcastle II/frente.jpg",
      "imagens/Camisas-time/Premier league/Newcastle II/costas.jpg",
      "imagens/Camisas-time/Premier league/Newcastle II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Newcastle II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Newcastle II/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "tottenham-1-2026",
    nome: "Camisa Tottenham I 2026",
    url: "produto.html?id=tottenham-1-2026",
    img: "imagens/Camisas-time/Premier league/Tottenham I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Tottenham I/frente.jpg",
      "imagens/Camisas-time/Premier league/Tottenham I/costas.jpg",
      "imagens/Camisas-time/Premier league/Tottenham I/emblema.jpg",
      "imagens/Camisas-time/Premier league/Tottenham I/lateral.jpg",
      "imagens/Camisas-time/Premier league/Tottenham I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "tottenham-2-2026",
    nome: "Camisa Tottenham II 2026",
    url: "produto.html?id=tottenham-2-2026",
    img: "imagens/Camisas-time/Premier league/Tottenham II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Premier league/Tottenham II/frente.jpg",
      "imagens/Camisas-time/Premier league/Tottenham II/costas.jpg",
      "imagens/Camisas-time/Premier league/Tottenham II/emblema.jpg",
      "imagens/Camisas-time/Premier league/Tottenham II/lateral.jpg",
      "imagens/Camisas-time/Premier league/Tottenham II/gola.jpg",
    ],
    preco: 200.0,
  },
  // --- LIGUE 1 ---
  {
    id: "psg-1-2026",
    nome: "Camisa Paris Saint-Germain I 2026",
    url: "produto.html?id=psg-1-2026",
    img: "imagens/Camisas-time/Ligue 1/Paris/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Ligue 1/Paris/frente.jpg",
      "imagens/Camisas-time/Ligue 1/Paris/costas.jpg",
      "imagens/Camisas-time/Ligue 1/Paris/emblema.jpg",
      "imagens/Camisas-time/Ligue 1/Paris/etiqueta.jpg",
      "imagens/Camisas-time/Ligue 1/Paris/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "marseille-1-2026",
    nome: "Camisa Olympique de Marseille I 2026",
    url: "produto.html?id=marseille-1-2026",
    img: "imagens/Camisas-time/Ligue 1/OLympique/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Ligue 1/OLympique/frente.jpg",
      "imagens/Camisas-time/Ligue 1/OLympique/costas.jpg",
      "imagens/Camisas-time/Ligue 1/OLympique/emblema.jpg",
      "imagens/Camisas-time/Ligue 1/OLympique/etiqueta.jpg",
      "imagens/Camisas-time/Ligue 1/OLympique/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "lyon-1-2026",
    nome: "Camisa Olympique Lyonnais I 2026",
    url: "produto.html?id=lyon-1-2026",
    img: "imagens/Camisas-time/Ligue 1/Lyon/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Ligue 1/Lyon/frente.jpg",
      "imagens/Camisas-time/Ligue 1/Lyon/costas.jpg",
    ],
    preco: 200.0,
  },
  // --- BUNDESLIGA ---
  {
    id: "bayern-especial-2026",
    nome: "Camisa Bayern Munich Especial",
    url: "produto.html?id=bayern-especial-2026",
    img: "imagens/Camisas-time/Bundesliga/Bayern Munich especial/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Bundesliga/Bayern Munich especial/frente.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich especial/costas.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich especial/emblema.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich especial/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "bayern-1-2026",
    nome: "Camisa Bayern Munich I 2026",
    url: "produto.html?id=bayern-1-2026",
    img: "imagens/Camisas-time/Bundesliga/Bayern Munich I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Bundesliga/Bayern Munich I/frente.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich I/costas.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich I/emblema.jpg",
      "imagens/Camisas-time/Bundesliga/Bayern Munich I/gola.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "borussia-1-2026",
    nome: "Camisa Borussia Dortmund I 2026",
    url: "produto.html?id=borussia-1-2026",
    img: "imagens/Camisas-time/Bundesliga/Borussia Dortmund/frente.jpg",
    galeria: [
      "imagens/Camisas-time/Bundesliga/Borussia Dortmund/frente.jpg",
      "imagens/Camisas-time/Bundesliga/Borussia Dortmund/costas.jpg",
      "imagens/Camisas-time/Bundesliga/Borussia Dortmund/emblema.jpg",
      "imagens/Camisas-time/Bundesliga/Borussia Dortmund/gola.jpg",
    ],
    preco: 200.0,
  },
  // --- SERIE A ---
  {
    id: "ac-milan-1-2026",
    nome: "Camisa AC Milan I 2026",
    url: "produto.html?id=ac-milan-1-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/gola.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan I/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "ac-milan-2-2026",
    nome: "Camisa AC Milan II 2026",
    url: "produto.html?id=ac-milan-2-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan II/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/AC Milan II/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "inter-milan-1-2026",
    nome: "Camisa Inter Milan I 2026",
    url: "produto.html?id=inter-milan-1-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/gola.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan I/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "inter-milan-2-2026",
    nome: "Camisa Inter Milan II 2026",
    url: "produto.html?id=inter-milan-2-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/lateral.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Inter Milan II/etiqueta.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "juventus-1-2026",
    nome: "Camisa Juventus I 2026",
    url: "produto.html?id=juventus-1-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Juventus I/frente.png",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Juventus I/frente.png",
      "imagens/Camisas-time/SERIE A  - ITALIA/Juventus I/costas.png",
    ],
    preco: 200.0,
  },
  {
    id: "juventus-2-2026",
    nome: "Camisa Juventus II 2026",
    url: "produto.html?id=juventus-2-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Juventus II/frente.png",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Juventus II/frente.png",
      "imagens/Camisas-time/SERIE A  - ITALIA/Juventus II/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "napoli-1-2026",
    nome: "Camisa Napoli I 2026",
    url: "produto.html?id=napoli-1-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/gola.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli I/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "napoli-2-2026",
    nome: "Camisa Napoli II 2026",
    url: "produto.html?id=napoli-2-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Napoli II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli II/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Napoli II/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "roma-1-2026",
    nome: "Camisa Roma I 2026",
    url: "produto.html?id=roma-1-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Roma I/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma I/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma I/costas.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "roma-2-2026",
    nome: "Camisa Roma II 2026",
    url: "produto.html?id=roma-2-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/gola.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma II/lateral.jpg",
    ],
    preco: 200.0,
  },
  {
    id: "roma-3-2026",
    nome: "Camisa Roma III 2026",
    url: "produto.html?id=roma-3-2026",
    img: "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/frente.jpg",
    galeria: [
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/frente.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/costas.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/emblema.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/gola.jpg",
      "imagens/Camisas-time/SERIE A  - ITALIA/Roma III/lateral.jpg",
    ],
    preco: 200.0,
  },
];

// Executa quando a página carrega para atualizar o número do carrinho
// O evento DOMContentLoaded garante que o HTML foi totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorCarrinho();

  carregarProdutoDinamico();

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

    // Permite que o usuário aperte "Enter" para ir para o primeiro resultadoPermite que o usuário aperte "Enter" para ir para o primeiro resultado
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const termo = normalizarTexto(e.target.value);
        const resultados = produtosDB.filter((produto) =>
          normalizarTexto(produto.nome).includes(termo),
        );
        if (resultados.length > 0) {
          window.location.href = resultados[0].url;
        }
      }
    });

    // Fecha a busca a clicar fora
    document.addEventListener("click", (e) => {
      if (!searchBox.contains(e.target)) {
        resultsContainer.classList.remove("ativo");
      }
    });
  }



  // Inicia o carrossel garantindo que o HTML da página já carregou
  iniciarCarrossel();
});

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
    if (!menuNav.contains(event.target) && !menuToggle.contains(event.target)) {
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

// Preenche a página de produto dinamicamente com base no ID da URL
function carregarProdutoDinamico() {
  // Só roda se estivermos na página genérica de produto
  if (!window.location.pathname.includes("produto.html")) return;

  const params = new URLSearchParams(window.location.search);
  const idProduto = params.get("id");

  if (!idProduto) return;

  const produto = produtosDB.find((p) => p.id === idProduto);

  if (produto) {
    // Atualiza título da aba do navegador
    document.title = `Detalhes do Produto - ${produto.nome}`;

    // Atualiza nome e imagem
    const tituloEl = document.querySelector(".info h2");
    if (tituloEl) tituloEl.innerText = produto.nome;

    const imgPrincipalEl = document.getElementById("imagemPrincipal");
    if (imgPrincipalEl) {
      imgPrincipalEl.src = produto.img;
      imgPrincipalEl.alt = produto.nome;
    }

    // Atualiza preço e remove o data-attribute para a personalização não bugar
    const precoEl = document.querySelector(".preco-destaque");
    if (precoEl) {
      precoEl.innerHTML = `R$ ${formatarPreco(produto.preco)} `;
      delete precoEl.dataset.precoBase;
    }

    // Limpa as miniaturas antigas e carrega a galeria do produto
    const thumbnailsContainer = document.querySelector(".thumbnails");
    if (thumbnailsContainer) {
      thumbnailsContainer.innerHTML = "";

      // Se o produto tiver uma lista 'galeria', usa ela. Senão, usa apenas a imagem principal.
      const imagensMiniatura = produto.galeria || [produto.img];

      imagensMiniatura.forEach((caminhoImg, index) => {
        thumbnailsContainer.innerHTML += `<img src="${caminhoImg}" onclick="trocarImagem(this.src)" alt="Foto ${index + 1}" loading="lazy">`;
      });
    }
  } else {
    // Tratamento para produto não encontrado (Evita tela quebrada)
    document.title = "Produto não encontrado - GPT STORE";

    // Renomeado para 'tituloElErro' para não causar conflito de re-declaração
    const tituloElErro = document.querySelector(".info h2");
    if (tituloElErro)
      tituloElErro.innerText = "Produto Indisponível ou Não Encontrado";

    const precoEl = document.querySelector(".preco-destaque");
    if (precoEl) precoEl.innerText = "R$ 0,00";

    const btnComprar = document.querySelector(".btn-comprar");
    if (btnComprar) {
      btnComprar.innerText = "INDISPONÍVEL";
      btnComprar.disabled = true;
      btnComprar.style.backgroundColor = "#ccc";
      btnComprar.style.cursor = "not-allowed";
      btnComprar.style.boxShadow = "none";
      btnComprar.style.transform = "none";
    }
  }
}

// --- Helpers Seguros para LocalStorage ---
function obterCarrinho() {
  try {
    const dados = localStorage.getItem("carrinho");
    if (!dados) return [];
    const parsed = JSON.parse(dados);
    if (!Array.isArray(parsed)) return [];
    // Proteção extra: remove itens nulos ou corrompidos de testes anteriores
    const validos = parsed.filter(
      (item) => item && typeof item === "object" && item.nome,
    );
    if (validos.length !== parsed.length) {
      localStorage.setItem("carrinho", JSON.stringify(validos));
    }
    return validos;
  } catch (e) {
    console.warn("Carrinho corrompido no localStorage. Resetando...");
    localStorage.removeItem("carrinho");
    return [];
  }
}

function obterFreteSalvo() {
  try {
    const dados = localStorage.getItem("dadosFrete");
    if (!dados) return null;
    return JSON.parse(dados);
  } catch (e) {
    localStorage.removeItem("dadosFrete");
    return null;
  }
}

// Atualiza o número vermelho no ícone do carrinho no menu
function atualizarContadorCarrinho() {
  // Recupera a quantidade salva no navegador ou usa 0 se não existir
  const carrinho = obterCarrinho();
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
  const txtTamanho = document.getElementById("tamanho-selecionado");
  if (txtTamanho) {
    txtTamanho.innerText = elemento.innerText;
  }
}

// Variável global para armazenar o frete escolhido
let freteSelecionado = 0;
let tipoFreteSelecionado = "";

// Consulta a API ViaCEP e calcula o frete baseado na região
async function calcularFrete() {
  const cepInput = document.getElementById("cep-input");
  if (!cepInput) return;
  const cep = cepInput.value.replace(/\D/g, ""); // Remove o traço para validar apenas números
  const campoResultado = document.getElementById("resultado-frete");
  if (!campoResultado) return;

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
    // Adiciona um AbortController para evitar requests presos (timeout de 10s)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    // Consulta a API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("Erro na API ViaCEP");

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
            <input type="radio" name="frete" value="0.00" onchange="selecionarFrete(this.value, 'Motoboy 🏍️ (A calcular - Uber)')">
            <span><strong>Motoboy 🏍️:</strong> A calcular (Uber)</span>
        </label>
        <label class="item-frete">
            <input type="radio" name="frete" value="0.00" onchange="selecionarFrete(this.value, 'Retirada na Loja')">
            <span><strong>🏪 Retirada na Loja:</strong> Grátis (Pronto em 2h)</span>
        </label>
      `;
    } else {
      let precoPAC, prazoPAC, precoSedex, prazoSedex;

      if (sul.includes(data.uf)) {
        precoPAC = 35.0;
        prazoPAC = "5-7 dias úteis";
        precoSedex = 45.0;
        prazoSedex = "2-3 dias úteis";
      } else if (sudeste.includes(data.uf)) {
        precoPAC = 30.0;
        prazoPAC = "6-8 dias úteis";
        precoSedex = 45.0;
        prazoSedex = "3-4 dias úteis";
      } else {
        precoPAC = 40.0;
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
    console.error("Erro no frete:", error);
    // Fallback para permitir a compra mesmo se a API dos Correios/ViaCEP estiver fora do ar ou bloqueada
    let fallbackHTML = `
      <p style="color: #dc3545; font-size: 0.9rem; margin-bottom: 10px;">Falha ao buscar o CEP automaticamente, mas você pode prosseguir escolhendo uma opção abaixo:</p>
      <label class="item-frete">
          <input type="radio" name="frete" value="35.00" onchange="selecionarFrete(this.value, 'Correios (PAC)')">
          <span><strong>Correios (PAC):</strong> R$ 35,00 (5-10 dias úteis)</span>
      </label>
      <label class="item-frete">
          <input type="radio" name="frete" value="55.00" onchange="selecionarFrete(this.value, 'Sedex (Expresso)')">
          <span><strong>Sedex (Expresso):</strong> R$ 55,00 (2-5 dias úteis)</span>
      </label>
      <div id="total-com-frete" class="total-frete-container"></div>
    `;
    campoResultado.innerHTML = fallbackHTML;
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
  const precoElemento =
    document.querySelector(".info .preco-destaque") ||
    document.querySelector(".preco-destaque");
  let precoProduto = 0;

  if (precoElemento) {
    const textoPreco = precoElemento.childNodes[0]
      ? precoElemento.childNodes[0].textContent
      : precoElemento.textContent;
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
  if (querPersonalizar) {
    mostrarNotificacao(
      "⚠️ A personalização de camisas está temporariamente indisponível.",
      "erro",
    );
    return;
  }

  const campos = document.getElementById("campos-personalizar");
  const status = document.getElementById("status-personalizacao");
  const btnCom = document.getElementById("btn-com-perso");
  const btnSem = document.getElementById("btn-sem-perso");
  const precoElemento =
    document.querySelector(".info .preco-destaque") ||
    document.querySelector(".preco-destaque");

  if (!campos || !status || !btnCom || !btnSem) return;

  // Salva o preço base original na primeira vez que a função é chamada
  if (precoElemento && !precoElemento.dataset.precoBase) {
    const textoPreco = precoElemento.childNodes[0]
      ? precoElemento.childNodes[0].textContent
      : precoElemento.textContent;
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
    areaPersonalizar &&
    !areaPersonalizar.classList.contains("resultado-oculto");
  let nome = "";
  let numero = "";

  if (isPersonalizado) {
    const nomeEl = document.getElementById("nome-camisa");
    const numeroEl = document.getElementById("numero-camisa");
    nome = nomeEl ? nomeEl.value.trim().toUpperCase() : "";
    numero = numeroEl ? numeroEl.value.trim() : "";

    if (!nome || !numero) {
      mostrarNotificacao("Preencha Nome e Número para personalizar!", "erro");
      return;
    }
  }

  // 2. Ativa o efeito de Loading
  const btn = document.querySelector(".btn-comprar");
  if (!btn) return;
  const textoOriginal = btn.innerText;

  btn.innerText = "Adicionando... ⏳";
  btn.disabled = true;
  btn.style.opacity = "0.7";
  btn.style.cursor = "not-allowed";

  // 3. Simula o tempo de processamento
  setTimeout(() => {
    try {
      const tamanhoEl = document.getElementById("tamanho-selecionado");
      let tamanho = "Padrão";
      if (tamanhoEl && tamanhoEl.innerText.trim() !== "") {
        tamanho = tamanhoEl.innerText;
      } else {
        const btnAtivo = document.querySelector(".btn-tam.ativo");
        if (btnAtivo) tamanho = btnAtivo.innerText;
      }

      const tituloEl =
        document.querySelector(".info h2") || document.querySelector("h2");
      const nomeProduto = tituloEl ? tituloEl.innerText : "Produto";

      const imgEl =
        document.getElementById("imagemPrincipal") ||
        document.querySelector(".main-img-container img");
      const imagemSrc = imgEl ? imgEl.src : "";

      // Lógica de Preço
      const precoElemento =
        document.querySelector(".info .preco-destaque") ||
        document.querySelector(".preco-destaque");
      let precoFinal = 0;

      if (precoElemento) {
        if (precoElemento.dataset.precoBase) {
          precoFinal = parseFloat(precoElemento.dataset.precoBase);
        } else {
          const textoPreco = precoElemento.childNodes[0]
            ? precoElemento.childNodes[0].textContent
            : precoElemento.textContent;
          precoFinal = parseFloat(
            textoPreco
              .replace("R$", "")
              .replace(/\./g, "")
              .replace(",", ".")
              .trim(),
          );
        }
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
        preco: precoFinal || 0,
        tamanho: tamanho,
        imagem: imagemSrc,
        personalizacao: detalhesPersonalizacao,
        quantidade: 1,
      };

      // Salvar no localStorage
      const carrinho = obterCarrinho();
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

      const precoFormatado = formatarPreco(precoFinal || 0);
      mostrarNotificacao(
        `Adicionado ao carrinho!<br><strong>${nomeProduto}</strong><br>Total: R$ ${precoFormatado}`,
        "sucesso",
      );
    } catch (err) {
      console.error("Erro ao adicionar ao carrinho: ", err);
      btn.innerText = textoOriginal;
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
      mostrarNotificacao("Erro ao adicionar produto.", "erro");
    }
  }, 1000); // 1 segundo de delay
}

// --- Sistema de Cupons ---
// --- Sistema de Cupons ---
const cuponsValidos = {
  BEMVINDO10: 0.1, // 10% de desconto,
  AMIGOSDPADILHA: 35, // R$ 35 de desconto fixo
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
  const carrinho = obterCarrinho();
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

  // 2. Barra de Progresso de Frete Grátis (Meta: R$ 400,00)
  const LIMITE_FRETE = 400.0;
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
    const valorCupom = cuponsValidos[cupomAtivo];
    // Se for menor ou igual a 1, entende-se como porcentagem (ex: 0.1). Caso contrário, valor fixo.
    if (valorCupom <= 1) {
      desconto = subtotal * valorCupom;
    } else {
      desconto = Math.min(valorCupom, subtotal); // Math.min evita que o desconto seja maior que o subtotal
    }
  }

  // Lógica de Frete (Recupera do LocalStorage)
  const dadosFrete = obterFreteSalvo();
  let valorFrete = 0;
  let htmlFrete = "";

  if (dadosFrete) {
    valorFrete = dadosFrete.valor;

    // Verifica se atingiu a meta de Frete Grátis
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
  const carrinho = obterCarrinho();
  if (!carrinho[index]) return;
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
  const carrinho = obterCarrinho();
  const nomeItem = carrinho[index] ? carrinho[index].nome : "Item";
  carrinho.splice(index, 1); // Remove o item pelo índice
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
  atualizarContadorCarrinho();
  mostrarNotificacao(`Removido: ${nomeItem}`, "erro");
}

// Monta a mensagem formatada e abre o WhatsApp
function finalizarPedidoWhatsApp() {
  const carrinho = obterCarrinho();

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
    let desconto = 0;
    const valorCupom = cuponsValidos[cupomAtivo];
    if (valorCupom <= 1) {
      desconto = total * valorCupom;
    } else {
      desconto = Math.min(valorCupom, total);
    }
    mensagem += `🏷️ *Subtotal: R$ ${formatarPreco(total)}*\n`;
    mensagem += `🎟️ *Cupom (${cupomAtivo}): - R$ ${formatarPreco(desconto)}*\n`;
    total -= desconto;
  }

  // Adiciona o Frete na mensagem do WhatsApp
  const dadosFrete = obterFreteSalvo();
  if (dadosFrete) {
    let valorFrete = dadosFrete.valor;
    let textoFrete = `🚚 *Frete (${dadosFrete.tipo}): R$ ${formatarPreco(valorFrete)}*`;

    if (subtotal >= 400.0) {
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
                                <th>Comprimento (cm)</th>
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

  if (slides.length === 0) return; // Evita erros se não houver carrossel na tela

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
