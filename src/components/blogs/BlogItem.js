import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './blogitem.css';

export default function BlogItem({ post }) {
    
    // remove html
    function toText(node) {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    }

    return (
        <div className='blog-card' >
            <img className='blog-card-img' src={`${post.thumbnail}`} alt='blog title image' />
            <h2 className='blog-card-title'>
                {post.title}
            </h2>
            <p className='blog-card-text'>
                {`${toText(post.description.substr(0, 750))}...`}
            </p>
            <a  href={`${post.link}`} target='_blank' className='blog-link-btn'><span className='blog-ship-emoji'>&#128640;</span>Read on Medium
            </a>
        </div>
    );
};