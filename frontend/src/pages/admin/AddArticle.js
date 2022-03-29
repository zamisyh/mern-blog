import React, { useState } from 'react'
import { addUser } from '../../api/controllers/user'
import * as yup from 'yup'
import { useFormik } from 'formik'
import ImageUploading from 'react-images-uploading'
import axios from 'axios'
import { get } from '../../helpers/localStorage'




const AddArticle = () => {

  const [ images, setImages ] = useState([]); 
  const [ loading, setLoading ] = useState(false)
  const [ success, setSuccess ] = useState('');
  const [ fileName, setFileName ] = useState('');
  const token = get('token')
  if (token === null) window.location.replace('/auth/login')

  const validationSchema = yup.object({
      name: yup.string().required('Name is required'),
      title: yup.string().required('Title is required'),
      content: yup.string().required('Content is required'),
    //   thumbnail: yup.string().required('Image is required')
  })  


  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onSubmit = async (values) => {
    setLoading(true)
    const { ...data } = values; 
    const formData = new FormData();
    formData.append('image', images[0].file)

    await axios.post(`${process.env.REACT_APP_API_URL}/articles/uploads`, formData, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        data.thumbnail = res.data.filename
        setSuccess('Succesfully create article')
        setTimeout(() => {
            window.location.replace('/dashboard')
            setSuccess('')
        }, 2000);
    }).catch((err) => {
        console.log(err)
    })
    
    console.log(data);

    await axios.post(`${process.env.REACT_APP_API_URL}/articles/add-article`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then((res) => {
            setLoading(false);
        }).catch((err) => {
            console.log(err.message)
           setLoading(false)
        })

   
    
    
  }

  const formik = useFormik({
    initialValues: {
        name: '',
        title: '',
        content: '',
        thumbnail: ''
    }, 
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })

  return (
    <div>
 
        { success ? <div className="mt-2 mb-3 shadow-lg alert alert-success">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-white stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">{success}</span>
            </div>
        </div> : '' }
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name"
                    className={formik.touched.name && formik.errors.name ? 'input input-bordered input-error' : 'input input-bordered'} 
                    placeholder="Input your name article.." 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                    <span className="mt-1 text-error">
                        {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                    </span>
            </div>
            <div className="mt-4 form-control">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title"
                    className={formik.touched.title && formik.errors.title ? 'input input-bordered input-error' : 'input input-bordered'} 
                    placeholder="Input your title article.."
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    />
                    <span className="mt-1 text-error">
                        {formik.touched.title && formik.errors.title ? formik.errors.title : ''}
                    </span>
            </div>
            <div className="mt-4 form-control">
                <label htmlFor="content">Content</label>
                <textarea 
                    rows="5"
                    name="content" 
                    className={formik.touched.content && formik.errors.content ? 'textarea textarea-bordered textarea-error' : 'textarea textarea-bordered'} 
                    placeholder="Input yout content article ..."
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    >
                </textarea>
                <span className="mt-1 text-error">
                    {formik.touched.content && formik.errors.content ? formik.errors.content : ''}
                </span>
            </div>
            <div className="mt-4 form-control">
                <label htmlFor="image">Image</label>
                <ImageUploading
                    name="thumbnail"
                    value={images}
                    onChange={onChange}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'jpeg', 'png']}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors
                    }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <span
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                            { imageList.length === 0 && <div className="max-w-xl mt-3">
                                <label
                                    className="flex justify-center px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer w-96 h-44 hover:border-gray-400 focus:outline-none">
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="font-medium text-gray-600">
                                            Drop files to Attach, or
                                            <span className="text-blue-600 underline"> browse</span>
                                        </span>
                                    </span>
                                </label>
                            </div> }
                        </span>
                    
                        {imageList.map((image, index) => (
                        <div key={index}>
                            <img src={image['data_url']} alt="" width="380" />
                            <div className="flex justify-between mt-5 w-96">
                                <button onClick={() => onImageUpdate(index)} className="btn btn-primary btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </button>
                                <button onClick={() => onImageRemove(index)} className="btn btn-error btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        ))}

                        <div className="mt-3 mb-3">
                             <span className="text-error">
                                 {errors && errors.acceptType}
                             </span>
                        </div>
                    </div>
                    
                    )}
                </ImageUploading>
            </div>
        
            <div className="mt-4 mb-10 form-control">
                <button type="submit" className={loading ? 'btn btn-primary loading' : 'btn btn-primary'} disabled={loading}>
                    { loading ? 'Loading...' : 'Submit' }
                </button>
            </div>


        </form>
    </div>
  )
}

export default AddArticle