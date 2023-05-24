import { useState } from 'react';

import './contact.css';
import { ClassNames } from '@emotion/react';

export default function Contact({ profile, blog }) {

    const toText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    };

    const haveBlogs = () => {
        if(blog.item){
            return blog.item.map((post, index) => {
                <div key={index}>
                    <div style={{backgroundImage: `url(${post.thumbnail})`}}>
                        <div className='author-img'>
                            <a href={profile.profileUrl} rel='noopener noreferrer' terget='_blank' style={{backgroundImage: `url${profile.profileImage}`}}></a>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
                        </h5>
                        <p className='cardText'>{`${toText(post.description.substring(0, 1000))}...`}</p>
                    </div>
                </div>
            });
        };
    };

    return (
        <div className='blogs'>
            <h2>BLog Posts</h2>
            <div className='container'>
                {blog.isLoading ? 'Loading...' : haveBlogs()}
            </div>
        </div>
    );
};