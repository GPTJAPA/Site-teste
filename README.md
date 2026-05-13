# ⚽ GPT STORE - E-commerce de Camisas de Futebol

Bem-vindo ao repositório da **GPT STORE**, uma loja virtual especializada em camisas de futebol de clubes e seleções do mundo todo!

Este projeto é um e-commerce front-end interativo focado em oferecer uma ótima experiência de usuário, contando com sistema de carrinho, cálculo de frete, busca dinâmica de produtos e finalização ágil de pedidos via WhatsApp.

## 🚀 Funcionalidades

- **Catálogo de Produtos:** Navegue por camisas de seleções, times brasileiros e clubes europeus (Premier League, La Liga, Serie A, etc).
- **Página de Produto Dinâmica:** Uma única página (`produto.html`) que se adapta automaticamente para mostrar os dados do item clicado, com galeria de imagens, guia de medidas, seleção de tamanho e simulação de frete.
- **Carrinho de Compras Avançado:** 
  - Adição, alteração de quantidade e remoção de itens.
  - Barra de progresso visual para atingir **Frete Grátis**.
  - Sistema de **cupons de desconto** com animação comemorativa.
  - Aplicação de desconto automático de 5% para pagamentos via **Pix**.
  - Uso do `localStorage` para salvar o carrinho, dados do cliente e opções de frete, para que nada seja perdido se a página for recarregada.
- **Cálculo de Frete (ViaCEP):** Integração com a API do ViaCEP para buscar automaticamente a cidade e estado do cliente, simulando valores e prazos de entrega baseados na região.
- **Finalização via WhatsApp:** Os dados do pedido (itens escolhidos, valores, descontos, frete e dados de entrega do cliente) são empacotados em uma mensagem formatada e enviados diretamente para o WhatsApp da loja.
- **Busca Global Autocomplete:** Barra de pesquisa inteligente no menu que exibe resultados imediatos enquanto o usuário digita.
- **Design Responsivo:** Layout totalmente adaptado (Mobile First em áreas chave) para funcionar com perfeição em celulares, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais, mantendo o código leve, limpo e sem dependência de frameworks complexos de build:

- **HTML5:** Semântica e estruturação das páginas.
- **CSS3:** Estilização geral, animações, Flexbox, Grid Layout e Media Queries para responsividade.
- **JavaScript (Vanilla):** Toda a regra de negócio, manipulação do DOM (Document Object Model), lógica do carrinho e banco de dados local (`produtosDB`).
- **API ViaCEP:** Para preenchimento automático de endereço e lógica regional de fretes.
- **Canvas Confetti:** Biblioteca externa leve para exibir confetes quando um cupom de sucesso é aplicado.

## 📁 Estrutura do Projeto

- `index.html`: Página inicial com banner carrossel e destaques da loja.
- `clubes.html` / `selecoes.html`: Páginas de categorias com abas (tabs) para filtrar produtos por região/liga.
- `ofertas.html`: Página reservada para itens promocionais.
- `produto.html`: Molde de página de produto (carrega dados via parâmetro `?id=...` na URL).
- `carrinho.html`: Tela de checkout, listagem de itens e formulário de entrega.
- `style.css`: Arquivo central com todo o estilo visual e responsivo da loja.
- `script.js`: Arquivo centralizado contendo o banco de dados simulado (`produtosDB`) e todas as funções e eventos de interatividade.

## 💻 Como Executar o Projeto Localmente

Como a aplicação baseia-se puramente em tecnologias Front-end do lado do cliente, rodar o projeto é extremamente simples:

1. Faça o clone (`git clone`) ou o download em ZIP deste repositório para o seu computador.
2. Descompacte os arquivos.
3. Navegue até a pasta do projeto.
4. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão.

> **Dica para desenvolvedores:** Se você utiliza o **Visual Studio Code**, instale a extensão Live Server e abra o projeto por ela para ter atualizações automáticas na tela ao salvar os arquivos.

## 📞 Contato

Caso tenha dúvidas, sugestões ou interesse nos produtos, entre em contato através de:

- **WhatsApp:** (41) 99565-5320
- **Email:** gptstoree@gmail.com
- **Instagram:** @gpt_storee