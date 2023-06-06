// import React from 'react';

// import './blogitem.css';

// export default function BlogItem({ post }) {

//     console.log('BLOG: ', post.description);

//     function toText(node) {
//         let tag = document.createElement("div");
//         tag.innerHTML = node;
//         node = tag.innerText;
        
//         return node;
//     }

//     return (
//         <div className='blog-item'> 
//             <img className='card-img' src={`${post.thumbnail}`} alt='blog title image' />
//             <h3>{post.title}</h3>
//             <p>{`${toText(post.description.substr(0, 750))}...`}</p>
//         </div>
//     );
// };


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './blogitem.css';

export default function BlogItem({ post }) {

    /*













            REDO WITHOUT MATERIAL UI 
            CANT WORK Z INDEX!








    */

    const cardsStyling = {
        height: '25rem',
        width: '43rem',
        margin: '0 5rem 2rem 5rem',
        zindex: '100',
        border: 'solid white 1px',
        borderRadius: '25px',
        backgroundColor: '#fff',
        transition: 'all .2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.04)', 
        cursor: 'pointer',
        '& $cardTextStyling': {
          color: 'black',
        }
      }   
    };
  
    const cardTitle = {
      padding: '15px',
      fontWeight: 'bold',
      fontFamily: 'Bruno Ace SC', 
      color: '#95C6FF'
    };
  
    const cardTextStyling = {
      color: 'black',
      fontWeight: 'bold',
    };
  
    // remove html
    function toText(node) {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        
        return node;
    }

    return (
        <Card sx={cardsStyling} >
            <img className='card-img' src={`${post.thumbnail}`} alt='blog title image' />
            <Typography variant='h5' sx={cardTitle}>
             {post.title}
            </Typography>
            <CardContent>
              <Typography sx={cardTextStyling}>
                  {`${toText(post.description.substr(0, 750))}...`}
              </Typography>
            </CardContent>
        </Card>
    );
};