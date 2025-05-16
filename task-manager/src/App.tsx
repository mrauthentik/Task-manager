
import './App.css'

function App() {
 
  return (
    <>
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
    </>
  )
}

export default App
