import { useEffect, useState } from "react";
import users from './Database'
import './App.css';
import background from "./img/bgrnd.png";
import Validation from "./Validate";

function App() {

const [formData, setFormData] = useState({email: "", password:""})
const [errors,setErrors] = useState({})

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
};

const checkValidation = (event) => {
  event.preventDefault();
  setErrors(Validation(formData))
};

  return (
    <div className='layout' style={{ backgroundImage: `url(${background})` }}>
      <div className='form_wrapper'>
        <div className='form_contents'>
          <div className='form_title'>Input your email and password</div>
          <div className='form_layout'>
            <form onSubmit={checkValidation}>
              <div className='email_wrapper'>
                <label htmlFor="email">Email:</label>
                <input type="email" className="email_form" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
              </div>
              <div className='pass_wrapper'>
                <label htmlFor="password">Password:</label>
                <input type="password" className="password_form" name="password" placeholder="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
              </div>
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
