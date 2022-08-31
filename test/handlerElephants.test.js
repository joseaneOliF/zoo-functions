const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('É uma função?', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Count undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });

  it('Count not string', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Count elephants number', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Get elephants names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Get elephants average age', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Get elephants location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Get elephants popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Test null', () => {
    expect(handlerElephants('other')).toBe(null);
  });
});
