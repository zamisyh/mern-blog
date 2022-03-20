import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({articles}) => {
  return (
    <>
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
                        {article.content.substring(0, 125)} ...
                    </p>
                    <div className="mt-2 mb-2 text-blue-400 text-md">
                        <Link key={index} to={`/article/${article.name}`}>Learn more...</Link>
                    </div>
                    </div>
                </div>

                
            </div>
        ))}
    </>
  )
}

export default Articles
