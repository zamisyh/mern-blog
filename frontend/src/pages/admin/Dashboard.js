import { replace } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { get } from '../../helpers/localStorage';

const Dashboard = () => {
  let navigate = useNavigate();
  const getToken = get('token');
  
  if (getToken == null) {
      window.location.replace('/auth/login')
  }
 

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard