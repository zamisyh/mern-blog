import React from 'react'
import articles from './ArticleContent'
import { Link } from 'react-router-dom'


const ArticlesList = () => {
  return (
    <div className='container'>
        <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
            Article List
        </h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap m-4'>
                {articles.map((article, index) => (
                    <div key={index} className="p-4 md:w-1/2">
                        <div className="shadow-xl card-compact card bg-base-100">
                            <Link key={index} to={`/article/${article.name}`}>
                                <figure>
                                    <img width='400' height='225' src={article.thumbnail}  alt="Shoes" />
                                </figure>
                            </Link>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link key={index} to={`/article/${article.name}`}>{article.title}</Link>
                                </h2>
                                <p>
                                    {article.content[0].substring(0, 125)} ...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ArticlesList
