import * as Yup from 'yup';
 
export const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  // email: Yup.string().email('Invalid email').required('Required'),
  // password: Yup.string().email('Invalid password').required('Required'),
}); 