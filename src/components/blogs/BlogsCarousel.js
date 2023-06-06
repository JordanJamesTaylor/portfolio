import { Fragment, useState } from 'react';
import BlogItem from './BlogItem';

import './blogcarousel.css';

export default function BlogsCarousel({ profile, blogs }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const blogCards = blogs.posts.map((post, index) => {
        return(
            <BlogItem profile={profile} post={post} index={index} />
        );
    });

    console.log(blogs)
    const handlePrevious = () => {
        let newIndex = activeIndex - 1;
        setActiveIndex(newIndex < 0 ? newIndex = blogCards.length-1 : newIndex);
    };

    const handleNext = () => {
        let newIndex = activeIndex + 1;
        setActiveIndex(newIndex >= blogCards.length ? 0 : newIndex);
    };

    return (
        <div className='blogs-carousel'>
            {blogCards[activeIndex]}
            <div className='carousel-btns-container'>
            <button className='arrow-btns'onClick={handlePrevious}>
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </button>
            <div className='indicators'>
                {blogCards.map((blog, index) => {
                    return(
                        <button className={`${index===activeIndex ? 'indicator-btns-active' : 'indicator-btns'}`}>
                            <span className='material-symbols-outlined'>
                                radio_button_checked
                            </span>
                        </button>
                    );
                })}
            </div>
            <button className='arrow-btns'onClick={handleNext}>
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>
            </div>
        </div>
    );
};