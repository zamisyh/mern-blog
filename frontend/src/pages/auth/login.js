import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="container">
          <div className="shadow-2xl card card-compact w-96 bg-base-100 xl:ml-56 ml-14">
                <div className="card-body">
                    <span className="text-xl font-bold text-center">MERN Blog | Login</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" className="w-full input input-bordered" placeholder="Input your email"></input>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered" placeholder="Input your password"></input>
                    </div>
                    <span className="text-blue-500" role="button">Forgot Password ?</span>
                    <div className="mt-2 form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
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
