import { InputsOutputsComponent } from './InputsOutputs';
describe('Probando inputs y outputs', () => {
  let compotente: InputsOutputsComponent;

  beforeEach(() => {
    compotente = new InputsOutputsComponent();
  });

  it('probando input', () => {
    expect(compotente.entrada).toBe('default');
    compotente.borrarEntrada();
    expect(compotente.entrada).toBe('');
  });

  it('probando output', () => {
    const ARG: string = 'emitiendo';
    compotente.emitirAlgo(ARG);
    compotente.salida.subscribe((valor) => {
      expect(valor).toBe(ARG);
    });
  });
});
