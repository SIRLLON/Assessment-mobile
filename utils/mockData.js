export const CATEGORIAS = [
  { id: 'cat1', name: 'Lanches', image: 'https://placehold.co/100x100/FF5733/white?text=Lanches' },
  { id: 'cat2', name: 'Bebidas', image: 'https://placehold.co/100x100/33FF57/white?text=Bebidas' },
  { id: 'cat3', name: 'Sobremesas', image: 'https://placehold.co/100x100/3357FF/white?text=Doces' },
  { id: 'cat4', name: 'Refeições', image: 'https://placehold.co/100x100/FF33DA/white?text=Refeicoes' },
];

export const PRODUTOS = [
  { id: 'prod1', categoryId: 'cat1', name: 'Hamburguer Clássico', description: 'Pão, carne, queijo, alface, tomate.', price: 25.90, image: 'https://placehold.co/150x150/FF5733/white?text=Burguer' },
  { id: 'prod2', categoryId: 'cat1', name: 'Hot Dog Especial', description: 'Salsicha, pão, molho, batata palha.', price: 18.50, image: 'https://placehold.co/150x150/FF5733/white?text=HotDog' },
  { id: 'prod3', categoryId: 'cat2', name: 'Coca-Cola Lata', description: 'Refrigerante 350ml.', price: 7.00, image: 'https://placehold.co/150x150/33FF57/white?text=Coca' },
  { id: 'prod4', categoryId: 'cat2', name: 'Suco de Laranja Natural', description: 'Copo 300ml.', price: 12.00, image: 'https://placehold.co/150x150/33FF57/white?text=Suco' },
  { id: 'prod5', categoryId: 'cat3', name: 'Petit Gateau', description: 'Bolo quente com sorvete.', price: 22.00, image: 'https://placehold.co/150x150/3357FF/white?text=Gateau' },
  { id: 'prod6', categoryId: 'cat3', name: 'Mousse de Chocolate', description: 'Deliciosa mousse cremosa.', price: 15.00, image: 'https://placehold.co/150x150/3357FF/white?text=Mousse' },
  { id: 'prod7', categoryId: 'cat4', name: 'Prato Executivo Frango', description: 'Frango grelhado, arroz, feijão, salada.', price: 35.00, image: 'https://placehold.co/150x150/FF33DA/white?text=Frango' },
  { id: 'prod8', categoryId: 'cat4', name: 'Prato Executivo Carne', description: 'Carne, arroz, feijão, salada.', price: 40.00, image: 'https://placehold.co/150x150/FF33DA/white?text=Carne' },
];

export const DADOS_USUARIO = {
  id: 'user1',
  name: 'João Silva',
  email: 'joao.silva@infnetfood.com',
  phone: '21987654321',
  address: 'Rua Principal, 123',
};

export const DADOS_PEDIDOS = [
  { id: 'ped1', date: '2025-09-27', status: 'Em Preparo', total: 43.90, items: [{name: 'Hamburguer Clássico', qty: 1}, {name: 'Coca-Cola Lata', qty: 1}] },
  { id: 'ped2', date: '2025-09-26', status: 'Entregue', total: 30.50, items: [{name: 'Hot Dog Especial', qty: 1}, {name: 'Suco de Laranja Natural', qty: 1}] },
];

export const RESTAURANTES = [
  { id: 'rest1', name: 'Restaurante Sabor do Rio', address: 'Rua do Ouvidor, 50', rating: 4.5, menuSample: 'Feijoada, Churrasco', coords: {latitude: -22.9068, longitude: -43.1729}},
  { id: 'rest2', name: 'Pizzaria Centro', address: 'Av. Rio Branco, 200', rating: 4.0, menuSample: 'Pizza Margherita, Calabresa', coords: {latitude: -22.9060, longitude: -43.1795}},
  { id: 'rest3', name: 'Café Literário', address: 'Rua da Assembleia, 10', rating: 4.7, menuSample: 'Cafés Especiais, Bolos', coords: {latitude: -22.9075, longitude: -43.1750}},
];
