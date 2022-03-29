import axios from 'axios'
import React, {useState} from 'react'
import { get } from '../../helpers/localStorage'
import { useNavigate } from 'react-router-dom'

const ListArticleTable = ({articles}) => {
    const token = get('token')
    const [success, setSuccess] = useState(null)
    const [alert, setAlert] = useState(false);

    const navigate = useNavigate()
    const onDelete = async (data) => {
       await axios.post(`${process.env.REACT_APP_API_URL}/articles/delete`, 
        { id: data }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            setSuccess(res.data.message);
            setTimeout(() => {
                setSuccess(null)
                window.location.reload()
            }, 1500);
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        { success ? <div className="mt-2 mb-3 shadow-lg alert alert-success">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-white stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">{success}</span>
            </div>
        </div> : '' }
        <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                { articles.map((article, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <img width='150' height='150' src={`${process.env.REACT_APP_MAIN_API_URL}/uploads/${article.thumbnail}`}  alt="" />
                        </td>
                        <td className="px-6 py-4">
                            {article.title}
                        </td>
                        <td className="px-6 py-4">
                            {article.content.substring(0, 25)} ... 
                        </td>
                        <td className="flex px-6 py-4">
                            <button className="btn btn-error btn-sm" onClick={() => onDelete(article._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                            </button>
                            <button className="ml-2 btn btn-primary btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default ListArticleTable