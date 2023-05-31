import { useState } from 'react';
import BlogItem from './BlogItem';

import './blogcarousel.css';

export default function BlogsCarousel({ profile, blog }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const haveBlogs = () => {
        if(blog.item){
            const blogCards = blog.item.map((post, index) => {
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
                {haveBlogs()}
            </div>
        </div>
    );
};