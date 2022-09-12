import { MetodosCondicionales } from './Metodos-etc';
describe('Probando metodos y condicionales', () => {
  let componente: MetodosCondicionales;

  beforeEach(() => {
    componente = new MetodosCondicionales();
  });

  it('probando metodo', () => {
    expect(componente.probandoCondicionales()).toBe('variable 1 verdadero');
  });

  it('probando variable 1 falsa', () => {
    componente.variable1 = false;
    expect(componente.probandoCondicionales()).toBe(
      'variable 2 y 3 verdaderas'
    );
  });

  it('probando variables 1 y 2 falsa', () => {
    componente.variable1 = false;
    componente.variable3 = false;
    expect(componente.probandoCondicionales()).toBe('variable 2 es verdadera');
  });

  it('probando todas son falsas', () => {
    componente.variable1 = false;
    componente.variable2 = false;
    componente.variable3 = false;
    expect(componente.probandoCondicionales()).toBe('todas son falsas');
  });
});

//ng test --code-coverage
