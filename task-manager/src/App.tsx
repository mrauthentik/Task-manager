import { useFormik } from 'formik'
import './App.css'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}
const App = () =>{
 
  useFormik({
     initialValues,
     onSubmit: (values) => {
       console.log('Form data', values);
     },
  })
 
  return (
    <div>
     <form className="signup_form">
      <label htmlFor="name">Name</label>
      <input type="text" name='name' />

      <label htmlFor="email">Email</label>
      <input type="email" name='email' />

      <label htmlFor="password">Password</label>
      <input type="password" name='password' />

      <label htmlFor="cpassword">Confirm Password</label>
      <input type="password" name='cpassword' />
      
     </form>
    </div>
  )
}

export default App
