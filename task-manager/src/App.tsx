import { useFormik, Formik, Form, Field} from 'formik'
import './App.css'
import { signUpSchema } from './schemas'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}
const App = () =>{
 
 const {values,errors,touched, handleBlur,handleChange,handleSubmit} = useFormik({
     initialValues,
     validationSchema: signUpSchema,
     onSubmit: (values, actions) => {
      actions.resetForm()
      console.error(errors)
       console.log('Form data', values);

     },
  })

  const onSubmit = (values:any, actions:any)=>{
    console.log(values)
    actions.resetForm()
  }

 
  return (
    <div>
      <h2>Welcome to my Formik Page</h2>
      <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onSubmit}>

     <form className="signup_form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
      {errors.name && touched.name && <p className='error'>{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {errors.email && touched.email && <p className='error'>{errors.email} </p>}

      <label htmlFor="password">Password</label>
      <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {errors.password && touched.password && <p className='error'>{errors.password} </p>}

      <label htmlFor="cpassword">Confirm Password</label>
      <input type="password" name='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur}/>
      {errors.cpassword && touched.cpassword && <p className='error'>{errors.cpassword} </p>}

      <button type='submit'> Submit</button>
     </form>
      </Formik>
    </div>
  )
}

export default App
