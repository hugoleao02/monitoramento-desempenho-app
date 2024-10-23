
import * as Yup from 'yup';

const AuthValidation = Yup.object({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(2, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

export default AuthValidation;