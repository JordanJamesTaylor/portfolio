import React from 'react';

import './blog.css';

export default function Blog({ profile, blog }) {

    const toText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    };

    const haveBlogs = () => {
        if(blog.item){
            console.log('POSTS: ', blog.item)
            return blog.item.map((post, index) => {
                // console.log(post)
                // console.log(index)
                // <div key={index}>
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
                // </div>
                <div className='post-card'>
                    <h1>{post.title}</h1>
                </div>
            });
        };
    };

    return (
        <div className='blogs'>
            <div className='container'>
                {blog.isLoading ? 'Loading...' : haveBlogs()}
            </div>
        </div>
    );
};