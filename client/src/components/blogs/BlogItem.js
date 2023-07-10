import React from 'react';

import './blogitem.css';

export default function BlogItem({ index, post }) {
    // remove html
    function toText(node) {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    };

    return (
        <div id={index} className='blog-card' >
            <div className='blog-card-img'>
                <img src={`${post.thumbnail}`} alt='blog title image' />
            </div>
            <h2 className='blog-card-title'>
                {post.title}
            </h2>
            <p className='blog-card-text'>
                {`${toText(post.description.substr(0, 500))}...`}
            </p>
            <a  href={post.link} target='_blank' className='blog-link-btn'>
                    <span>&#128640;</span>
                    <span style={{ flex: '1 1 auto'}}></span>
                    <span>Read on Medium</span>
            </a>
        </div>
    );
};