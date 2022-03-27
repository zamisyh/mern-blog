import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { get } from '../../helpers/localStorage';
import axios from 'axios';
import ListArticleTable from '../../components/admin/ListArticleTable';
import useSWR from 'swr'
import { getAllArticles } from '../../api/controllers/blog';

const Dashboard = () => {
  let navigate = useNavigate();
  const getToken = get('token');
  if (getToken === null) window.location.replace('/auth/login')

  const [user, setUser] = useState(null);
  
  

  // useEffect(() => {
  //     axios.post(`${process.env.REACT_APP_API_URL}/users/id`, 
  //     {_id: "" }, {
  //         headers: {
  //           Authorization: 'Bearer ' + getToken
  //         }
  //     }).then((res) => {
  //       console.log(res)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // })

  const { data, error } = useSWR(`${process.env.REACT_APP_API_URL}/articles`, getAllArticles)
  if(error) return <div>failed to load</div>
  if(!data) return <div>Loading...</div>

  return (
    <div>
       {/* <span className="">Name : {user.name}</span><br />
       <span className="">Email : {user.email}</span> */}
       <div>
          <ListArticleTable articles={data} />
       </div>
    </div>
  )
}

export default Dashboard