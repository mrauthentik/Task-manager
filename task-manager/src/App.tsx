import { useFormik } from 'formik'
import './App.css'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}
const App = () =>{
 
 const {values, handleBlur,handleChange,handleSubmit} = useFormik({
     initialValues,
     onSubmit: (values) => {
       console.log('Form data', values);
     },
  })

 
  return (
    <div>
     <form className="signup_form">
      <label htmlFor="name">Name</label>
      <input type="text" name='name' value={values.name} />

      <label htmlFor="email">Email</label>
      <input type="email" name='email' value={values.email} />

      <label htmlFor="password">Password</label>
      <input type="password" name='password' value={values.password} />

      <label htmlFor="cpassword">Confirm Password</label>
      <input type="password" name='cpassword' value={values.cpassword}/>
      
     </form>
    </div>
  )
}

export default App
