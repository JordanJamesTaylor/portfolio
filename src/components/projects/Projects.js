import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

import spaceBackground from "../../assests/temp-space.jpg";
import "./projects.css";

export default function Projects() {

  const cardsStyling = {
    margin: '15px',
    border: 'solid white 1px',
    borderRadius: '25px',
    backgroundColor: '#080B3E',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)', 
      cursor: 'pointer',
      '& $cardTextStyling': {
        color: 'black',
        backgroundColor: "orange"
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
    color: 'white',
    fontWeight: 'bold',
  };

  // sx={{ color: 'white', fontWeight: 'bold' }}
  return (
    <div className="cards-container">
      <Card sx={cardsStyling} >
        <Typography variant='h5' sx={cardTitle}>
         Blunder-Bug
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={spaceBackground}
        title="Blunder-Bug screenshot"
      />
      <CardContent>
        <Typography sx={cardTextStyling}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={cardsStyling}>
      <Typography variant='h5' sx={cardTitle}>
          Space Invaders
      </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={spaceBackground}
        title="Blunder-Bug screenshot"
      />
      <CardContent>
        <Typography sx={cardTextStyling}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={cardsStyling}>
        <Typography variant='h5' sx={cardTitle}>
          GetItDone
        </Typography>
      <CardMedia
        sx={{ height: 140 }}
        image={spaceBackground}
        title="Blunder-Bug screenshot"
      />
      <CardContent>
        <Typography sx={cardTextStyling}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}