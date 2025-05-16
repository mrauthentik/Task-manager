import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 2 characters long'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
                        .required('Password is required')
                         .min(8, 'Password must be at least 8 characters long'),
    cpassword:Yup.string()
                        .required('Confirm Password is required')
                        .oneOf([Yup.ref('password')], 'Passwords must match'),     

})