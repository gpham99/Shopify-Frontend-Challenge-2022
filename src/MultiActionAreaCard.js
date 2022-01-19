import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import LikeButton from './LikeButton'

const MultiActionAreaCard = props => {
return (
<Card xs={{ }}>
{/* maxWidth: 345 */}
    <CardActionArea>
    <CardMedia
        component="img"
        height="200"
        src={props.url}
        alt="nasa"
    />
    <CardContent>
        <Typography gutterBottom style={{ fontWeight: 600 }}>
            {props.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
            {props.date}
        </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions>
    
    <LikeButton></LikeButton>

    </CardActions>
</Card>
);
}

export default MultiActionAreaCard;