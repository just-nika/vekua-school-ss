import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { firebase, auth, firestore, storage } from '../firebase/firebase.config';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Covid from './covid';
import { Helmet } from "react-helmet";

function NewsAdmin() {
    const useStyles = makeStyles((theme) => ({
        // icon: {
        //   marginRight: theme.spacing(2),
        // },
        // heroContent: {
        //   backgroundColor: theme.palette.background.paper,
        //   padding: theme.spacing(8, 0, 6),
        // },
        // heroButtons: {
        //   marginTop: theme.spacing(4),
        // },
        // cardGrid: {
        //   paddingTop: theme.spacing(8),
        //   paddingBottom: theme.spacing(8),
        // },
        // card: {
        //   height: '100%',
        //   display: 'flex',
        //   flexDirection: 'column',
        // },
        // cardMedia: {
        //   paddingTop: '56.25%', // 16:9
        // },
        // cardContent: {
        //   flexGrow: 1,
        // },
        // footer: {
        //   backgroundColor: theme.palette.background.paper,
        //   padding: theme.spacing(6),
        // },
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
    console.log(editorRef.current.getContent())
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
    const signOut = async () => {
        firebase.auth().signOut().then(() => {<Redirect path="/" />}).catch((error) => {})
    }
    return (
            <div className="admin-news">
                <Helmet>
              <title>სიახლეების Admin გვერდი</title>
            </Helmet>
                <br/>
                <Button variant="contained" color="secondary" onClick={signOut}>გასვლა</Button>
                <div className="post-form">
                    <form action="" className="add-post">
                        <br />
                        <br />
                        <h2 style={{textAlign: "center"}}>პოსტის დამატება</h2>
                        <br />
                        <br />
                        <TextField id="title" label="სათაური" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <TextField id="photo" label="ფოტოს ლინკი" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <Editor
                            // initialValue="<p>Initial content</p>"
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image', 
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic | \
                                alignleft aligncenter alignright | \
                                bullist numlist outdent indent | help'
                            }}

                            id="content"
                        />
                        <Button variant="contained" color="primary" onClick={() => addPosts()} style={{textAlign: "center"}}>პოსტის დამატება</Button>
                    </form>
                </div>
                <br />
                <br />
                <div className="container">
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
                </div>
                <br/>
                <Covid />
            </div>
    )
    // OurNews.propTypes = {
    //     post: PropTypes.object,
    //   };
}

export default NewsAdmin
