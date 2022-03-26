import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { registerUser } from '../../api/controllers/user'
import { useFormik } from 'formik';
import * as yup from 'yup';


const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const history = useNavigate();

  const validationSchema = yup.object({
      name: yup.string().min(3, "Please enter your name > 3 characters").required("Name is required"),
      email: yup.string().email("Please enter a valid email").required("Email is required"),
      password: yup.string().required("Password is required"),
      confirm_password: yup.string().oneOf([yup.ref('password')], "Password does not match").required("Confirm Password is required")
      
  })

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  }

  const formik = useFormik({
      initialValues: {
          name: "",
          email: "",
          password: "",
          confirm_password: ""
      }, validateOnBlur: true, onSubmit, validationSchema: validationSchema
  })
  

//   const addUsers = async (e) => {
//       e.preventDefault();
//       try {
//           await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
//               name: name,
//               email: email,
//               password: password,
//               confirm_password: confirmPassword,
//           });
//         console.log('Succesfully')
//       } catch (error) {
//           console.log(error)
//       }
//   }
    
  console.log('Error : ', formik.errors)

  return (
    <>
      <div className="container">
          <div className="shadow-2xl card card-compact w-96 bg-base-100 xl:ml-56 ml-14">
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <span className="text-xl font-bold text-center">MERN Blog | Sign Up</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                className={formik.touched.name && formik.errors.name ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'}
                                placeholder="Input your username"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                >
                            </input>
                            <span className="mt-1 text-error">{formik.touched.name && formik.errors.name ? formik.errors.name : ''}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="text" 
                                name="email"
                                className={formik.touched.email && formik.errors.email ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'} 
                                placeholder="Input your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                >
                            </input>
                            <span className="mt-1 text-error">{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password"
                                className={formik.touched.password && formik.errors.password ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'} 
                                placeholder="Input your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                >
                            </input>
                            <span className="mt-1 text-error">{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</span>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="confirm_password"
                                className={formik.touched.confirm_password && formik.errors.confirm_password ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'} 
                                placeholder="Input your confirm password"
                                value={formik.values.confirm_password}
                                onChange={formik.handleChange}
                                // value={confirmPassword}
                                // onChange={(e) => setConfirmPassword(e.target.value)}
                                >
                            </input>
                            <span className="mt-1 text-error">{formik.touched.confirm_password && formik.errors.confirm_password ? formik.errors.confirm_password : ''}</span>
                        </div>
                        <span className="text-blue-500" role="button">Forgot Password ?</span>
                        <div className="mt-2 form-control">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <Link to='/auth/login' className="text-center">
                            <span className="mt-5 text-blue-500" role="button">Already have an account ?</span>
                    </Link>
                    </form>
                </div>
          </div>
      </div>
    </>
  )
}

export default Register
