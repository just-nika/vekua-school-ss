import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { firebase, auth, firestore } from '../firebase/firebase.config';
import TextField from '@material-ui/core/TextField';
import Login from './login';
import Main from './main';
import History from './history';
import Laws from './laws';
import Achievements from './achievements';
import Contact from './contact';
import Pupils from './pupils';
import Error from './error';
import Single from './single';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  
export default function ResponsiveHeader() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
        <Router>
            <Link to="/">
                <List>
                    <ListItem button>მთავარი</ListItem>
                </List>
            </Link>
                {/* <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Collapsible Group Item #1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Collapsible Group Item #2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Collapsible Group Item #3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
            <Link to="/history">
                <List>
                    <ListItem button>
                        ისტორია და მისია
                    </ListItem>
                </List>
            </Link>
            <Link to="/laws">
                <List>
                    <ListItem button>
                        შინაგანაწესი
                    </ListItem>
                </List>
            </Link>
            <Link to="/teachers">
                <List>
                    <ListItem button>
                        დირექცია და მასწავლებლები
                    </ListItem>
                </List>
            </Link>
            <Link to="/pupils">
                <List>
                    <ListItem button>
                        სკოლის თვითმმართველობა
                    </ListItem>
                </List>
            </Link>
            <Link to="/news">
                <List>
                    <ListItem button>
                        სიახლეები
                    </ListItem>
                </List>
            </Link>
            <Link to="/projects">
                <List>
                    <ListItem button>
                        პროგრამები/პროექტები
                    </ListItem>
                </List>
            </Link>
            <Link to="/achievements">
                <List>
                    <ListItem button>
                        მიღწევები
                    </ListItem>
                </List>
            </Link>
            <a href="http://vekua42.edu.ge/obiblio/home/index.php" target="_blank">
                <List>
                    <ListItem button>
                        ბიბლიოთეკა
                    </ListItem>
                </List>
            </a>
            <a href="https://www.vekua.gfca.ge" target="_blank">
                <List>
                    <ListItem button>
                        საშაბათოების რეგისტრაცია
                    </ListItem>
                </List>
            </a>
            <Link to="/contact">
                <List>
                    <ListItem button>
                        კონტაქტი
                    </ListItem>
                </List>
            </Link>
            <a href="https://geocodna.wordpress.com" target="_blank">
                <List>
                    <ListItem button>
                        ნინო მთიულიშვილის ბლოგი
                    </ListItem>
                </List>
            </a>
            <a href="http://nino42.blogspot.com" target="_blank">
                <List>
                    <ListItem button>
                        ნინო ნასყიდაშვილის ბლოგი
                    </ListItem>
                </List>
            </a>
            <a href="http://moscavleebs.blogspot.com" target="_blank">
                <List>
                    <ListItem button>
                        ნინო ნასყიდაშვილის ბლოგი მოსწავლეებისათვის
                    </ListItem>
                </List>
            </a>
            <a href="https://vekua-tv.netlify.app" target="_blank">
                <List>
                    <ListItem button>
                        ვეკუა TV
                    </ListItem>
                </List>
            </a>
            <Switch>
                    <Route path="/news">
                        <OurNews />
                    </Route>
                    <Route path="/history">
                        <OurHistory />
                    </Route>
                    <Route path="/laws">
                        <OurLaws />
                    </Route>
                    <Route path="/teachers">
                        <Teachers />
                    </Route>
                    <Route path="/pupils">
                        <OurPupils />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/achievements">
                        <OurAchievements />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/tv">
                        <TV />
                    </Route>
                    <Route path="/login">
                        <SecretLogin />
                    </Route>
                    <Route path="/single/:id" render={(props) => <Single {...props} />}/> 
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
        </Router>
    </div>
  );
  function Home() {
    return <><Main /></>;
}

function OurHistory() {
    return <><History /></>;
}

function OurLaws() {
    return <><Laws /></>
}

function Teachers() {
    return <h2>დირექცია/მასწავლებლები</h2>;
}

function OurPupils() {
    return <><Pupils /></>;
}


function Projects() {
    return <h2>პროექტები/პროგრამები</h2>;
}

function OurAchievements() {
    return <><Achievements /></>;
}

function ContactUs() {
    return <><Contact /></>;
}

function TV() {
    return <h2>ვეკუა TV</h2>;
}

function SecretLogin() {
    return <><Login /></>
}

function NotFound() {
    return <><Error /></>
}

function OurNews() {
    var user = firebase.auth().currentUser;

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
if (user) {
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
                
            </div>
    )
    OurNews.propTypes = {
        post: PropTypes.object,
      };
    } else {
        return (<News />);
    }
}
 
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  );
  
  
}
