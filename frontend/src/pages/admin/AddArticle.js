import React from 'react'
import { addUser } from '../../api/controllers/user'
import * as yup from 'yup'
import { useFormik } from 'formik'


const AddArticle = () => {


  const validationSchema = yup.object({
      name: yup.string().required('Name is required'),
      title: yup.string().required('Title is required'),
      content: yup.string().required('Content is required'),
      image: yup.string().required('Image is required')
  })  

  const onSubmit = (values) => {
    const { ...data } = values;
    alert(JSON.stringify(data))
  }

  const formik = useFormik({
    initialValues: {
        name: '',
        title: '',
        content: '',
        image: ''
    }, 
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })

  return (
    <div>
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
                <input 
                    type="file" 
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                />
                 <span className="mt-1 text-error">
                    {formik.touched.image && formik.errors.image ? formik.errors.image : ''}
                </span>
            </div>

            <div className="mt-4 form-control">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>


        </form>
    </div>
  )
}

export default AddArticle