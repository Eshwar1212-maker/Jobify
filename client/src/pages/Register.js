import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/Testing";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //Gloval State, useNavigate
  const {isLoading, showAlert, displayAlert} = useAppContext()
  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember})
  }
  const handleChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    const {name, email, password, isMember} = values
    if(!email || !password || (!isMember && !name)) {
        alert('Please fill out all of the field ')
        return
    } 
    console.log(values);
  }
  
  return( 
  <Wrapper className="full-page">
    <form className="form" onSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? 'Login' : "Register"}</h3>
      {showAlert && <Alert />}
      <FormRow
       name='email'
       type="email" 
       value={values.email} 
       handleChange={handleChange}
       />
      <FormRow
       name='name'
       type="text" 
       value={values.name} 
       handleChange={handleChange}
       />
       {
        !values.isMember &&
      <FormRow
       name='password'
       type="text" 
       value={values.password} 
       handleChange={handleChange}
       />
        } 
      <button type="submit" className="btn btn-block">
        Submit
      </button>
      <p>
      {values.isMember ? 'Not a member yet' : 'Already a member?'}
      <button onClick={toggleMember} type="button" 
      className="btn-block">
        {values.isMember ? 'Register' : 'Login'}
      </button>
      </p>
    </form>
  </Wrapper>
  );
};

export default Register;
 