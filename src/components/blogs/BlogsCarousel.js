import { useState } from 'react';
import BlogItem from './BlogItem';

import './blogcarousel.css';

export default function BlogsCarousel({ profile, blogs }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const haveBlogs = (blogs) => {
        if(!blogs.isLoading){

            console.log('MAPPING OBJECT: ', blogs);
            console.log('MAPPING POSTS: ', blogs.posts);
            
            const blogCards = blogs.posts.map((post, index) => {
                return(
                    <div key={index}>
                        <BlogItem profile={profile} post={post} index={index} />
                    </div>
                );
            });

            return blogCards;
        };
    };

    return (
        <div className='blogs-carousel'>
            <div 
                className='inner'
                style={{ transform: `translate:(-${activeIndex * 100})`}}
            >
                {haveBlogs(blogs)}
            </div>
        </div>
    );
};