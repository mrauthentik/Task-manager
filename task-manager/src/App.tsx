import { Formik, Form, Field} from 'formik'
import './App.css'
import { signUpSchema } from './schemas'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}
const App = () =>{
 const handleSubmit = (values: any, actions:any) => {
  console.log(values);
  actions.resetForm();
  alert('Form submitted successfully');
}
  return (
    <div>
      <h2>Welcome to my Formik Page</h2>
      <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={handleSubmit} >
      {({errors,touched}) => (
        <Form className="signup_form">
          <label htmlFor="name">Name</label>
          {/* <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} /> */}
          <Field type="text" name="name" />
          {errors.name && touched.name && <p className='error'>{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          {errors.email && touched.email && <p className='error'>{errors.email} </p>}

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          {errors.password && touched.password && <p className='error'>{errors.password} </p>}

          <label htmlFor="cpassword">Confirm Password</label>
          <Field type="password " name="password" />
          {errors.cpassword && touched.cpassword && <p className='error'>{errors.cpassword} </p>}

          <button type='submit'> Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default App
