export const CATEGORIAS = [
  { id: 'cat1', name: 'Lanches', image: require('../assets/images/lanches.png') },
  { id: 'cat2', name: 'Bebidas', image: require('../assets/images/bebidas.png') },
  { id: 'cat3', name: 'Sobremesas', image: require('../assets/images/sobremesas.png') },
  { id: 'cat4', name: 'Refeições', image: require('../assets/images/refeicoes.png') },
];

export const PRODUTOS = [
  { id: 'prod1', categoryId: 'cat1', name: 'Hamburguer Clássico', description: 'Pão, carne, queijo, alface, tomate.', price: 25.90, image: require('../assets/images/burguer.png') },
  { id: 'prod2', categoryId: 'cat1', name: 'Hot Dog Especial', description: 'Salsicha, pão, molho, batata palha.', price: 18.50, image: require('../assets/images/hotdog.png') },
  { id: 'prod3', categoryId: 'cat2', name: 'Coca-Cola Lata', description: 'Refrigerante 350ml.', price: 7.00, image: require('../assets/images/coca.png') },
  { id: 'prod4', categoryId: 'cat2', name: 'Suco de Laranja Natural', description: 'Copo 300ml.', price: 12.00, image: require('../assets/images/suco.png') },
  { id: 'prod5', categoryId: 'cat3', name: 'Petit Gateau', description: 'Bolo quente com sorvete.', price: 22.00, image: require('../assets/images/gateau.png') },
  { id: 'prod6', categoryId: 'cat3', name: 'Mousse de Chocolate', description: 'Deliciosa mousse cremosa.', price: 15.00, image: require('../assets/images/mousse.png') },
  { id: 'prod7', categoryId: 'cat4', name: 'Prato Executivo Frango', description: 'Frango grelhado, arroz, feijão, salada.', price: 35.00, image: require('../assets/images/frango.png') },
  { id: 'prod8', categoryId: 'cat4', name: 'Prato Executivo Carne', description: 'Carne, arroz, feijão, salada.', price: 40.00, image: require('../assets/images/carne.png') },
];


export const DADOS_USUARIO = {
  id: 'user1',
  name: 'Sirllon Cruz',
  email: 'sirllonat@infnet.com',
  phone: '21987654321',
  address: 'Rua Principal, 123',
  image: require('../assets/images/perfil.jpg'),
};

export const DADOS_PEDIDOS = [
  { id: 'ped1', date: '2025-09-27', status: 'Em Preparo', total: 43.90, items: [{name: 'Hamburguer Clássico', qty: 1}, {name: 'Coca-Cola Lata', qty: 1}] },
  { id: 'ped2', date: '2025-09-26', status: 'Entregue', total: 30.50, items: [{name: 'Hot Dog Especial', qty: 1}, {name: 'Suco de Laranja Natural', qty: 1}] },
];

export const RESTAURANTES = [
  { id: 'rest1', name: 'Restaurante Sabor do Rio', address: 'Rua do Ouvidor, 50', rating: 4.5, menuSample: 'Feijoada, Churrasco', coords: {latitude: -22.9068, longitude: -43.1729}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest2', name: 'Pizzaria Centro', address: 'Av. Rio Branco, 200', rating: 4.0, menuSample: 'Pizza Margherita, Calabresa', coords: {latitude: -22.9060, longitude: -43.1795}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest3', name: 'Café Literário', address: 'Rua da Assembleia, 10', rating: 4.7, menuSample: 'Cafés Especiais, Bolos', coords: {latitude: -22.9075, longitude: -43.1750}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest4', name: 'Boteco da Esquina', address: 'Rua da Carioca, 35', rating: 4.2, menuSample: 'Petiscos variados, Cerveja gelada', coords: {latitude: -22.9055, longitude: -43.1780}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest5', name: 'Temakeria Sushi Mania', address: 'Av. Nilo Peçanha, 12', rating: 4.8, menuSample: 'Combinados de Sushi, Temakis', coords: {latitude: -22.9048, longitude: -43.1765}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest6', name: 'Hamburgueria Prime', address: 'Rua do Rosário, 88', rating: 4.6, menuSample: 'Hamburgueres Artesanais, Fritas', coords: {latitude: -22.9080, longitude: -43.1735}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest7', name: 'Padaria e Confeitaria Flores', address: 'Largo da Carioca, 5', rating: 4.3, menuSample: 'Pães, Doces e Salgados', coords: {latitude: -22.9070, longitude: -43.1770}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest8', name: 'Restaurante Vegetariano Verde', address: 'Rua Uruguaiana, 15', rating: 4.9, menuSample: 'Pratos Veganos, Sucos Naturais', coords: {latitude: -22.9050, longitude: -43.1755}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest9', name: 'Churrascaria Gaúcha', address: 'Rua Visconde de Inhaúma, 70', rating: 4.4, menuSample: 'Rodízio de Carnes, Buffet de Saladas', coords: {latitude: -22.9040, longitude: -43.1740}, image: require('../assets/images/restaurante_placeholder.png')},
  { id: 'rest10', name: 'Gelateria Italiana', address: 'Praça XV de Novembro, 30', rating: 4.7, menuSample: 'Gelatos Artesanais, Açaí', coords: {latitude: -22.9030, longitude: -43.1730}, image: require('../assets/images/restaurante_placeholder.png')},
];
