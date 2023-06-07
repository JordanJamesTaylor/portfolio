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
        <div className='card' >
            <img className='card-img' src={`${post.thumbnail}`} alt='blog title image' />
            <h2 className='card-title'>
                {post.title}
            </h2>
            <p className='card-text'>
                {`${toText(post.description.substr(0, 500))}...`}
            </p>
            <a  href={`${post.link}`} target='_blank' className='link-btn'><span className='ship-emoji'>&#128640;</span>Read on Medium
            </a>
        </div>
    );
};