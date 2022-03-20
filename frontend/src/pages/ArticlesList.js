import React from "react";
import useSWR from "swr";
import { getAllArticles } from "../api/controllers/blog";
import { Link } from "react-router-dom";
import Articles from "../components/Articles";

const ArticleList = () => {

    const { data, error } = useSWR(`${process.env.REACT_APP_API_URL}/articles`, getAllArticles);
    if(error) return <div>failed to load</div>
    if(!data) return <div>Loading...</div>

    return(
        <div className='container'>
        <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:text-4xl'>
           List Article
        </h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap m-4'>
                <Articles articles={data} />
            </div>
        </div>
    </div>
        
    )
}

export default ArticleList