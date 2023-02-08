import * as yup from 'yup';

export const userRegistrationSchema = yup.object().shape({
    name: yup.string().required('name is required'),
    surname: yup.string().required('surname is required'),
    address: yup.string().required('address is required'),
    email: yup.string().email('enter email please'),
    password: yup.string().min(6, 'min password  is 6').max(10, 'max password is 10'),
});

