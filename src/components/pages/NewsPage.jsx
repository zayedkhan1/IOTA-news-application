import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsPage = ({ category, }) => {
    const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us"); 

const fetchNew=()=>{
fetch(`http://localhost:5000/news?category=${category}&country=${country}`)
    .then(res => res.json())
    .then(data => {
      if (data && Array.isArray(data.articles)) {
        setArticles(data.articles);
      } else {
        setArticles([]); // or handle error
      }
    })
    .catch(() => setArticles([]));
};
 


    useEffect(() => {
   fetchNew()
  }, [country, category]);

    function capitalizeFirstLetter(str) {
        if (typeof str !== 'string' || str.length === 0) {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-4 ">
            <div>
                <label>
        Select Country:{" "}
        <select value={country} onChange={e => setCountry(e.target.value)}>
          <option value="us">USA</option>
          <option value="gb">UK</option>
          <option value="in">India</option>
          <option value="bd">Bangladesh</option>
          {/* Add more countries as needed */}
        </select>
      </label>
            </div>
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