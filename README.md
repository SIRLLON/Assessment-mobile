
# InfnetFood - Aplicativo de Pedidos de Comida

Este é um aplicativo de pedidos de comida desenvolvido em React Native, projetado para simular a experiência de navegação por categorias de produtos, visualização de restaurantes próximos em um mapa simulado, gerenciamento de carrinho de compras e um sistema de login/perfil de usuário.

## Funcionalidades Principais

* **Autenticação de Usuário:** Tela de login com validação de credenciais (e-mail: `sirllonat@infnet.com`, senha: `1234`).
* **Listagem de Categorias:** Navegação por diferentes categorias de alimentos (Lanches, Bebidas, Sobremesas, Refeições).
* **Lista de Produtos:** Visualização de produtos por categoria, com detalhes como nome, descrição, preço e funcionalidade de adicionar ao carrinho.
* **Carrinho de Compras:** Adição e gerenciamento de itens no carrinho, exibindo a quantidade total de itens.
* **Restaurantes Próximos:** Uma tela que simula a localização de 10 restaurantes no Centro do Rio de Janeiro, permitindo a visualização de detalhes de cada restaurante.
* **Detalhes do Restaurante:** Exibição de informações detalhadas sobre um restaurante, incluindo nome, endereço, avaliação e um exemplo de cardápio.
* **Perfil do Usuário:** Tela de perfil exibindo informações do usuário mockado (Sirllon Cruz, `sirllonat@infnet.com`) e opção de logout.
* **Temas (Claro/Escuro):** Suporte para alternância entre tema claro e tema escuro, garantindo uma experiência visual adaptável.
* **Componentes Reutilizáveis:** Utilização de componentes customizados como `Header`, `Card` e `Button`, além de componentes do `React Native Paper`.

## Estrutura do Projeto (Visão Geral)

* `App.js`: Componente principal que configura a navegação e o `AuthContext`.
* `contexts/AuthContext.js`: Gerencia o estado de autenticação e tema do aplicativo.
* `screens/`: Pasta contendo todas as telas do aplicativo (LoginScreen, HomeScreen, ProductsScreen, CartScreen, MapScreen, RestaurantDetailScreen, ProfileScreen).
* `components/`: Pasta para componentes de UI reutilizáveis.
* `utils/`: Contém arquivos de utilidade, como `mockData.js` (dados de categorias, produtos, restaurantes e usuário) e `theme.js` (definições de cores para os temas).
* `assets/images/`: Pasta para armazenar todas as imagens locais do aplicativo.

## Credenciais de Teste

* **E-mail:** `sirllonat@infnet.com`
* **Senha:** `1234`
