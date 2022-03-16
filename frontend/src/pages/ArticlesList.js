import React from 'react'
import articles from './ArticleContent'
import Articles from '../components/Articles'


const ArticlesList = () => {
  return (
    <div className='container'>
        <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
            Article List
        </h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap m-4'>
                <Articles articles={articles} />
            </div>
        </div>
    </div>
  )
}

export default ArticlesList
