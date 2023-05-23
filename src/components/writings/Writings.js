import React, { Fragment, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './writings.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Writings() {

  let [curBlogImg, setCurBlogImg] = useState(<img className='blog-img' src={require('../../assests/lexical.png')} alt='blog-image' />);

  const changeBlogImg = (id) => {
    console.log(id);
    if(id === 'lexical'){
        setCurBlogImg(<img className='blog-img' src={require('../../assests/lexical.png')} alt='blog-image' />);
    } else if(id === 'frontend') {
        setCurBlogImg(<img className='blog-img' src={require('../../assests/frontend.png')} alt='blog-image' />);  
    } else if(id === 'dynamic') {
        setCurBlogImg(<img className='blog-img' src={require('../../assests/dynamic.png')} alt='blog-image' />);  
    } else if(id === 'imperative'){
      setCurBlogImg(<img className='blog-img' src={require('../../assests/imperative.png')} alt='blog-image' />);  
    }
  };

  return (
    <div className="writings-section">
    <div className='blog-posts'>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <a id='lexical' onMouseOver={e => changeBlogImg(e.currentTarget.id)} href='https://medium.com/@jordjamestaylor/lexical-environment-execution-context-call-stack-and-scope-in-javascript-5be2bc6953c3' target='blank'>
          <Item className='blog-post'>
            <h1 className='blog-titles'>
              Lexical Environment, Execution Context...    
            </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a id='frontend' onMouseOver={e => changeBlogImg(e.currentTarget.id)} href='https://medium.com/@jordjamestaylor/frontend-vs-backend-a20dcdc4d07b' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Frontend Vs Backend    
              </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a id='dynamic' onMouseOver={e => changeBlogImg(e.currentTarget.id)} href='https://medium.com/@jordjamestaylor/dynamic-vs-static-a403ae97b468' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Dynamic Vs Static Programming    
              </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a id='imperative' onMouseOver={e => changeBlogImg(e.currentTarget.id)} href='https://medium.com/@jordjamestaylor/moving-from-imperative-to-declarative-programming-bcf01f085179' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Imperative Vs Declarative Programming    
              </h1>
          </Item>
          </a>
        </Grid>
      </Grid>
    </div>
    <div className='blog-img-container'>
      {curBlogImg}
    </div>
    </div>
  );
};
