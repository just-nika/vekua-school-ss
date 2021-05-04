import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import { firebase, auth, firestore } from '../firebase/firebase.config';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function News() {
  const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
  getPosts();
  }, [])
  const addPosts = async () => {
  const title = document.getElementById("title").value;
  const url = document.getElementById("photo").value;
  const content = editorRef.current.getContent();
  await firestore.collection("posts").add({
      title: title,
      url: url,
      content: content
  }).then(() => {
      
  })
  }
  const getPosts = async () => {
  const data = await firestore.collection("posts").get();
  setPosts(data.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  })))
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const editorRef = useRef(null)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
  <div className="container">
    <br/>
      <h2>სიახლეები</h2>
      <br/>
      <br/>
  <Grid item xs={12} md={6}>
  {
      posts.map((post, index) => {
          const html = `${post.content}`;
          return (
          <div>
          <CardActionArea component="a" style={{height:"200px"}}  onClick={handleOpen}>
              <Card className={classes.card} style={{height:"200px"}}>
              <div className={classes.cardDetails}>
                  <CardContent>
                  <Typography component="h2" variant="h5">
                      {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                      {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                      მეტი
                  </Typography>
                  </CardContent>
              </div>
              <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image={post.url} title={post.title} />
              </Hidden>
              </Card>
          </CardActionArea>
              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                  }}
              >
                  <Fade in={open}>
                  <div className={classes.paper}>
                      <h2 id="transition-modal-title">{post.title}</h2>
                      <p id="transition-modal-description">{ ReactHtmlParser(html) }</p>
                  </div>
                  </Fade>
              </Modal>
              </div>
                              )
                          })
                      }
  </Grid>
  <br/>
  </div>
  )
}

export default News
