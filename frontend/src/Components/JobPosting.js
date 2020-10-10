import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderTop: '1px solid black'
  },
});

const JobPosting=({title, description, emergency, favorite, applied})=> {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to favorite
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
        {emergency===true?<Button size="small" style={{backgroundColor:'red', height: '10px', minWidth:'40px'}}></Button>:null}
        {favorite===true?<Button size="small" style={{backgroundColor:'yellow', height: '10px', minWidth:'40px'}}></Button>:null}
        {applied===true?<Button size="small" style={{backgroundColor:'green', height: '10px', minWidth:'40px'}}></Button>:null}
      </CardActions>
    </Card>
  );
}
export default JobPosting;