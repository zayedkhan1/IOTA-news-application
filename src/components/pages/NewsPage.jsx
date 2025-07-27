import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsPage = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        // let url=`https://newsapi.org/v2/top-headlines/sources?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`  
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))


    }, [category])
    console.log(articles)
    function capitalizeFirstLetter(str) {
        if (typeof str !== 'string' || str.length === 0) {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-4 ">
            <h2 className='text-center font-bold text-3xl mb-5 text-gray-800'>Latest News-<span className='text-emerald-400'>{capitalizeFirstLetter(category)}</span> </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    articles.map((item, idx) => {
                        return <NewsItem key={idx}
                            author={item.author}
                            content={item.content}
                            description={item.description}
                            publishedAt={item.publishedAt}
                            title={item.title}
                            url={item.url}
                            image={item.urlToImage}
                        ></NewsItem>
                    })}
            </div>
        </div>
    );
};

export default NewsPage;