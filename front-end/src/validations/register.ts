import * as yup from 'yup';

export const registerValidation = yup.object({
  name: yup.string().required('*Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('*Email é obrigatório'),
  password: yup.string().required('*Senha é obrigatória'),
  phone_number: yup.string().required('*Contato é obrigatório'),
});
