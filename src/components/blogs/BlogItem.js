import { useState, Fragment } from 'react';

import spaceBackground from "../../assests/temp-space.jpg";

import './blogitem.css';

export default function BlogItem({ profile, post, index }) {

    const toText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    };

    return(
        // <Fragment>
        //     <div className='post-card'>
        //         <h1>{post.title}</h1>
        //     </div>
        //     <div style={{backgroundImage: `url(${post.thumbnail})`}}>
        //         <div className='author-img'>
        //             <a href={profile.profileUrl} rel='noopener noreferrer' terget='_blank' style={{backgroundImage: `url${profile.profileImage}`}}></a>
        //         </div>
        //     </div>
        //     <div className='card-body'>
        //         <h5 className='card-title'>
        //             <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
        //         </h5>
        //         <p className='cardText'>{`${toText(post.description.substring(0, 1000))}...`}</p>
        //     </div>
        // </Fragment>
        <div className='carousel-item'>
            <div></div>
            <img className='carousel-img' src={spaceBackground} alt='outer space' />
            <div className='carousel-item-text'>{`${toText(post.description.substring(0, 1000))}...`}</div>
        </div>
    )
};