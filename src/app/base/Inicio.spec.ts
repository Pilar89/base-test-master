import { Primeros } from './Inicio';

describe('Probando Inicio', () => {
  it('Probando Primeros', () => {
    const resultudado = Primeros();
    expect(resultudado).toEqual('Hola que hace');
  });
});
