import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    margin: 'auto',
    marginBottom: 20,
  },
  media: {
    height: 200,
  },
  authorContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  authorAvatar: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 10,
  },
});

const BlogCard = ({ imageSrc, title, authorName, authorAvatar }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageSrc} title="Blog Image" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <div className={classes.authorContainer}>
          <Image src='' alt='blog content'></Image>
          <Typography variant="body2" color="textSecondary">
            {authorName}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;