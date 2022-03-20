import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './ArticleContent'
import Articles from '../components/Articles'
import useSWR from 'swr'
import { getAllArticles, getArticleByName } from '../api/controllers/blog'

const Article = () => {
    let {name} = useParams();
    let datas = null;

    const {data, error} = useSWR(`${process.env.REACT_APP_API_URL}/articles/${name}`, getArticleByName)
    const tmp = useSWR(`${process.env.REACT_APP_API_URL}/articles`, getAllArticles)
    
    const article = articleContent.find((article) => article.name === name)
    if(!article) return <h1 className="text-2xl font-bold">Article does not exist</h1>
    const otherArticles = articleContent.filter((article) => article.name !== name)

    if (error) return <div>failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className='container'>
            <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
                {data.title}
            </h1>
                {data.content}
            
            <h1 className="mt-4 mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Other Articles</h1>
            <div className="flex flex-wrap m-4">
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}

export default Article
