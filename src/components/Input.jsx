export const Input = ({label, error, handleChange, value, ...rest}) => {
    return (
       <div className='input_wrapper'>
       <label htmlFor="email" style={error?{color:'red'}:{}} >{error?error:label}:</label>
       <input {...rest} className="email_form" value={value} onChange={handleChange}/>
       </div>
    )
}