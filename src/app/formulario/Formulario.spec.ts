import { FormBuilder } from '@angular/forms';
import { UnFormulario } from './Formulario';
describe('Probando Formulario', () => {
  const componente = new UnFormulario(new FormBuilder());
  const control = componente.form.get('email');
  it('primera prueba formulario', () => {
    expect(componente.form.contains('email')).not.toBeFalse();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('probando validador email es requerido', () => {
    control?.setValue('');
    expect(control?.valid).toBeFalse();
  });

  it('probando validador email es tipo email', () => {
    control?.setValue('sofka@sofka.com.co');
    expect(control?.valid).toBeTruthy();
  });
});
