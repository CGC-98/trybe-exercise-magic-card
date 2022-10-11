const { saveFavoriteMagicCard } = require('../magic');
const favoriteCards = require('../data/favoriteCards');

const restoreFavoriteCards = () => {
  while (favoriteCards.length > 4) favoriteCards.pop();
};

jest.setTimeout(10000);

describe('3 - Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[favoriteCards.length - 1].name).toMatch('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);
  });

  it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);
    expect(favoriteCards).toHaveLength(4);
  });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
  it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
  contém todos os quatro nomes iniciais nomes`, async () => {
    expect.assertions();
    const favNames = favoriteCards.map(({ name }) => name);
    const favExpect = ['Ancestor\'s Chosen', 'Angel of Mercy',
      'Aven Cloudchaser', 'Ballista Squad'];
    expect(favNames).toMatchObject(favExpect);
  });
});
