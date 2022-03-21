import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="text-white navbar bg-base-100" data-theme='dark'>
        <div className="flex-1">
            <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="p-0 menu menu-horizontal">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/articles-list'>Articles</Link>
                </li>
                <li>
                    <Link to='/auth/login'>Login</Link>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar
