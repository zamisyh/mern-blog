import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { loginUser } from '../../api/controllers/user';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { set } from '../../helpers/localStorage';


const Login = () => {
  
  const [ loading, setLoading ] = useState(false);
  const [ success, setSuccess ] = useState(null);

  const validationSchema = yup.object({
      email: yup.string().email().required('Email is required'),
      password: yup.string().required('Password is required')
  })

  
  const onSubmit = async (values) => {
    const { ...data } = values
    setLoading(true)

    const response = await loginUser(`${process.env.REACT_APP_API_URL}/users/login`, data)
        .catch((err) => {
            console.log('Error', err.response.data.message)
            setLoading(false)
        })

        if(response){
            set('token', response.data.token)
            setLoading(false)
        }

       
  }

  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validateOnBlur: true, 
    onSubmit,
    validationSchema: validationSchema
    
})
   


  return (
    <>
      <div className="container">
          <div className="shadow-2xl card card-compact w-96 bg-base-100 xl:ml-56 ml-14">
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <span className="text-xl font-bold text-center">MERN Blog | Login</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" 
                                name="email"
                                className={formik.touched.email && formik.errors.email ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'} 
                                placeholder="Input your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                >
                            </input>
                            <span className="mt-1 text-error">{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" 
                                name="password"
                                className={formik.touched.password && formik.errors.password ? 'w-full input input-bordered input-error' : 'w-full input input-bordered'} 
                                placeholder="Input your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                >
                            </input>
                            <span className="text-error">{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</span>
                        </div>
                        <span className="mt-3 text-blue-500" role="button">Forgot Password ?</span>
                        <div className="mt-2 form-control">
                            <button type="submit" className={loading ? 'btn btn-primary loading' : 'btn btn-primary'} disabled={loading}>
                                { loading ? 'Loading...' : 'Login' }
                            </button>
                        </div>
                    </form>
                   <Link to='/auth/register' className="text-center">
                        <span className="mt-5 text-blue-500" role="button">Don't have any account ?</span>
                   </Link>
                </div>
          </div>
      </div>
    </>
  )
}

export default Login
