import React from 'react';
import MultiActionAreaCard from './MultiActionAreaCard'
import Grid from '@mui/material/Grid';

const PhotoContainer = props => {
    const displayPhotos = () => {
        return props.photos.map( (photo, idx) => {
            return (
                <Grid item xs={12} sm={6} key={idx}>
                    <MultiActionAreaCard url={photo.media_type === "image" ? photo.url : photo.thumbnail_url} title={photo.title} date={photo.date} explanation={photo.explanation}></MultiActionAreaCard>    
                </Grid>
            )
        }
        )
    }

    return (
        <Grid container spacing={5}
            alignItems="center"
            justifyContent="center"
        >
            {displayPhotos()}
        </Grid>
    )
}

export default PhotoContainer