import React ,{useState}from "react";
// import Details from "./details";

import { useFormik } from "formik";
import "./App.css";
import Popup from "./componds/poup";

const validate= (values) =>{
  const error={};
  if(!values.firstname){
    error.firstname="*Required this field!!"
  }
  else if(values.firstname.length <5 || values.firstname.length >10){
    error.firstname="minimum 6 characters and maximum 10 characters!!"
  }
  if(!values.lastname){
    error.lastname="*Required this field!!"
  }
  else if(values.lastname.length > 10){
    error.lastname="Maximum 10 character accepted!!"
  }
  if(!values.email){
    error.email="*Required this field!!"
  }
  else if(!/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(values.email)){
    error.email="Invalid Email address"
  }
  if(!values.password){
    error.password="*Required this field!!"
  }
  else if(values.password.length > 6){
    error.password="*Must be 6 charaters"
  }
  if(!values.confirmpassword){
    error.confirmpassword="*Required this field!!"
  }
  else if(values.confirmpassword.length > 6){
    error.password="*Must be 6 charaters"
  }
  else if(values.confirmpassword !== values.password){
    error.confirmpassword ="Password doesn't Match"

  }
  return error;


}
function App() {
  const [bool,setbool]=useState(0);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  validate,
  onSubmit:values=>{
    if(bool){
      setbool(0);
    }else{
      setbool(1);
      console.log(values);
    }
  }
  });
  function onClick(){
    <Popup />
  }
  
  console.log(formik.values);
  return (
    <div className="main">
      <div className="signupform">
        <h2>Sign Up Here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder="firstname..." name="firstname" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur}></input>
          {
            formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span>:null
          }
          <input type="text" placeholder="lastname..." name="lastname"  onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}></input>
          {
             formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span>:null
          }
          <input type="text" placeholder="email..." name="email"  onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
          {
             formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
          }
          <input type="password" placeholder="password..." name="password" autoComplete="off"  onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}></input>
          {
             formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span>:null
          }
          <input type="password" placeholder="confirmpassword..." name="confirmpassword" autoComplete="off"  onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur}></input>
          {
             formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span>:null
          }
          <button onClick={onClick}>submit</button>





        </form>
      </div>
      <div className="message-box">
        {
          bool ?(<Popup onClick={formik.handleSubmit}></Popup>):null
        }
      </div>
    </div>
  );
}
export default App;