const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('verifica se sem armumentos a função retorna o objeto com os horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se para os argumentos Tuesday e 9:00-AM retorna zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  // it('Verifica se para os argumentos Friday e 9:00-AM retorna zoo is closed', () => {
  //   expect(getOpeningHours('Friday', '09:00-AM')).toBe('The zoo is closed');
  // });
  // it('Verifica se para os argumentos Wednesday e 9:00-PM retorna zoo is closed', () => {
  //   expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  // });
  it('Verifica se para os argumentos Sunday e 8:00-SM retorna The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Sunday', '08:00-SM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se para os argumentos Sunday e x9:00-AM retorna The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Sunday', 'x09:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se para os argumentos Sunday e 11:c0-AM retorna The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Sunday', '11:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica se para os argumentos Sunday e 13:00-AM retorna The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se para os argumentos Sunday e 10:60-AM retorna The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Sunday', '10:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica validateDay retorna erro', () => {
    expect(() => getOpeningHours('Joseane')).toThrowError();
  });
  it('Verifica se o argumento for vazio retorna zoo is closed', () => {
    expect(getOpeningHours()).toBe('The zoo is closed');
  });
});
