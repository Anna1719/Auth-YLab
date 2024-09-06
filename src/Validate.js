// eslint-disable no-useless-escape
export default function Validation(formValues){
    const errors = {}
    // eslint-disable-next-line
    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if (!formValues.email){
        errors.email="Cannot be empty"
       }
    else if ( !regEmail.test(formValues.email)){
                errors.email="Invalid email"
            }
    

    if (!formValues.password){
         errors.password="Cannot be empty"
        }
    else if ( !regPass.test(formValues.password)){
                errors.password="Invalid password (6-16, [0-9], [!@#$%^&*])"
            }

    return errors;
}