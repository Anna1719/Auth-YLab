import { useState } from "react";
import {registeredUsers} from './Database'
import './App.css';
import {Input} from './components/Input'
import background from "./img/bgrnd.png";
import Validation from "./Validate";

function App() {

const [formData, setFormData] = useState({email: "", password:""})
const [errors,setErrors] = useState({})
const [userExist, setUserExist] = useState('')

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
};

const submitForm = (event) => {
  event.preventDefault();
  setErrors(Validation(formData))

  if (!errors.email && !errors.password){

    const user = registeredUsers.find(element =>
       event.target.email.value===element.email && event.target.password.value===element.password)
    if (!user){
      setUserExist('User is not registered')
    }
    else {
      setUserExist('Authentification is successful')
    }   
  }
};

  return (
    <div className='layout' style={{ backgroundImage: `url(${background})` }}>
      <div className='form_wrapper'>
        <div className='form_contents'>
          <div className='form_title'>Input your email and password</div>
          {(!errors.email && !errors.password) && <div style={{color:'red'}}>{userExist}</div>}
          <div className='form_layout'>
            <form onSubmit={submitForm}>
              <Input label='Email' error={errors.email} handleChange={handleChange} value={formData.email} type="email" name="email" placeholder="email"/>
              <Input label='Password' error={errors.password} handleChange={handleChange} value={formData.password} type="password" name="password" placeholder="password"/>
              <div className='button_wrapper'>
                <button type="submit" className='button_submit'>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
