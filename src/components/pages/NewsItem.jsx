import React from 'react';
import newsLogo from '../../assets/news.jpg'
import authorImg from '../../assets/publisherLogo.jpg'

const NewsItem = ({ author, description, publishedAt, title, url, image, }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow + hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out p-3 flex flex-col h-full">
      {/* Image */}
      <img src={image ? image : newsLogo} alt={title} className="w-full h-48 object-cover rounded-md" />

      {/* Category & Date */}
      <div className="flex justify-between mt-3 text-sm text-gray-500 font-medium border-b-2 p-2 border-gray-400">
        <span className="uppercase tracking-wide">News</span>

        <span>
          {new Date(publishedAt).toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',    // or 'numeric' or 'long' as you prefer
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: undefined  // omit seconds
          })}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1 flex-1 line-clamp-3">
        {description ? description : "Catch up on the latest news and trending stories from across the globe."}...
      </p>

      {/* Author */}
      <div className="flex items-center mt-4">
        <img src={authorImg} alt={authorImg} className="w-10 h-10 rounded-full object-cover" />
        <div className="ml-3">
          <p className="text-gray-900 font-semibold text-sm">{author ? author : 'Harry Margue'}</p>
          <p className="text-gray-500 text-xs">publisher</p>
        </div>
      </div>

      {/* Button */}
      <a href={url} target='_blank' className="mt-4 text-center bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700">
        Read more
      </a>
    </div>

  );
};

export default NewsItem;