import React from 'react'
import { useParams } from 'react-router-dom'
import Articles from '../components/Articles'
import useSWR from 'swr'
import {getArticleByName, getOtherArticles } from '../api/controllers/blog'

const Article = () => {
    let {name} = useParams();
   

    const {data: articleByName, error} = useSWR(`${process.env.REACT_APP_API_URL}/articles/${name}`, getArticleByName)
    const {data: otherArticles} = useSWR(`${process.env.REACT_APP_API_URL}/other-articles`, getOtherArticles);


    if (error) return <div>failed to load</div>
    if (!articleByName) return <div>Loading...</div>

    return (
        <div className='container'>
            <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
                {articleByName.title}
            </h1>
                {articleByName.content}
            
            <h1 className="mt-4 mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Other Articles</h1>
            <div className="flex flex-wrap m-4">
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}

export default Article
