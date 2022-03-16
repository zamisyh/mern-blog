import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './ArticleContent'
import Articles from '../components/Articles'

const Article = () => {
    let {name} = useParams();
    const article = articleContent.find((article) => article.name === name)
    if(!article) return <h1 className="text-2xl font-bold">Article does not exist</h1>
    const otherArticles = articleContent.filter((article) => article.name !== name)

    return (
        <div className='container'>
            <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p className="mx-auto mb-4 text-base leading-relaxed" key={index}>{paragraph}</p>
            ))}
            
            <h1 className="mt-4 mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Other Articles</h1>
            <div className="flex flex-wrap m-4">
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}

export default Article
