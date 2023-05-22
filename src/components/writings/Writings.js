import React, { Fragment } from "react";
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
  return (
    <Fragment>
    <h1 className='blog-section'>WRITINGS</h1>
    <div className='blog-posts'>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <a href='https://medium.com/@jordjamestaylor/lexical-environment-execution-context-call-stack-and-scope-in-javascript-5be2bc6953c3' target='blank'>
          <Item className='blog-post'>
            <h1 className='blog-titles'>
              Lexical Environment, Execution Context...    
            </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a href='https://medium.com/@jordjamestaylor/frontend-vs-backend-a20dcdc4d07b' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Frontend Vs Backend    
              </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a href='https://medium.com/@jordjamestaylor/dynamic-vs-static-a403ae97b468' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Dynamic Vs Static Programming    
              </h1>
          </Item>
          </a>
        </Grid>
        <Grid item xs={16}>
          <a href='https://medium.com/@jordjamestaylor/moving-from-imperative-to-declarative-programming-bcf01f085179' target='blank'>
          <Item className='blog-post'>
              <h1 className='blog-titles'>
                Imperative Vs Declarative Programming    
              </h1>
          </Item>
          </a>
        </Grid>
      </Grid>
    </div>
    </Fragment>
  );
};
