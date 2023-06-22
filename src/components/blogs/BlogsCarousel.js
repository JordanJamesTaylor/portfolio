import { useState } from 'react';
import BlogItem from './BlogItem';

import './blogcarousel.css';

export default function BlogsCarousel({ blogs }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const blogCards = blogs.posts.map((post, index) => {
        return(
            <BlogItem post={post} />
        );
    });
    
    const handlePrevious = () => {
        let newIndex = activeIndex - 1;
        setActiveIndex(newIndex < 0 ? newIndex = blogCards.length-1 : newIndex);
    };

    const handleNext = () => {
        let newIndex = activeIndex + 1;
        setActiveIndex(newIndex >= blogCards.length ? 0 : newIndex);
    };

    const handleJump = (id) => {
        setActiveIndex(id);
    };

    return (
        <div className='blogs-carousel'>
            <div className='current-blog'>
            <button className='arrow-btns-prev'onClick={handlePrevious}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            {blogCards[activeIndex]}
            <button className='arrow-btns-next'onClick={handleNext}>
                <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>
            </div>
            <div className='carousel-btns-container'>
            <div className='indicators'>
                {blogCards.map((index) => {
                    return(
                        <button onClick={(e) => handleJump(e.target.id)} className={`${index===activeIndex ? 'indicator-btns-active' : 'indicator-btns'}`}>
                            <span id={index} className='material-symbols-outlined'>
                                radio_button_checked
                            </span>
                        </button>
                    );
                })}
            </div>
            </div>
        </div>
    );
};