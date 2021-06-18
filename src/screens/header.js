import React, {useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Login from './login';
import Main from './main';
import History from './history';
import Laws from './laws';
import Achievements from './achievements';
import Contact from './contact';
import Pupils from './pupils';
import Error from './error';
import Exams from './exams';
import Check from './check';
import Data from './classesScroll';
import SchoolTeachers from './teachers';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Covid from './covid';
import Footer from './footer';
import NoExams from './noExams';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import { firebase, firestore } from '../firebase/firebase.config';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useRef } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import ReactHtmlParser from 'react-html-parser';
import TextField from '@material-ui/core/TextField';
import { Editor } from '@tinymce/tinymce-react';

function Header() {
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
    // let { path, url } = useRouteMatch();
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
};

    return (
<Router>
        <div className="page-main">
                <div className="header">
                    <nav>
                        <div className="logo">
                            <a href="/"><img src="./logo.png" className="header-logo"/></a>
                        </div>
                        <div className="responsive-icon">
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><i className="fas fa-bars menu"></i></Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            <div
                                className={clsx(classes.list, {
                                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                                })}
                                role="presentation"
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)}
                            >
                        <Link to="/">
                            <List>
                                <ListItem button>მთავარი</ListItem>
                            </List>
                        </Link>
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
                        <Link to="/exams">
                            <List>
                                <ListItem button>
                                    მისაღები გამოცდებისათვის რეგისტრაცია
                                </ListItem>
                            </List>
                        </Link>
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
                    </div>
                            </Drawer>
                            </React.Fragment>
                        ))}
                        
                        </div>
                        <ul className="routes">
                            <li className="header-link">
                                <Link to="/"><Button aria-controls="simple" aria-haspopup="true">მთავარი</Button></Link>
                            </li>
                            <li className="header-link">
                                <Link>
                                    <div>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            ჩვენ შესახებ
                                        </Button>
                                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                            {/* <Link to="/about"><MenuItem onClick={handleClose}>ჩვენს შესახებ</MenuItem></Link> */}
                                            <Link to="/history"><MenuItem onClick={handleClose}>ისტორია და მისია</MenuItem></Link>
                                            {/* <Link to="/mission"><MenuItem onClick={handleClose}>მისია</MenuItem></Link> */}
                                            <Link to="/laws"><MenuItem onClick={handleClose}>შინაგანაწესი</MenuItem></Link>
                                            <Link to="/teachers"><MenuItem onClick={handleClose}>დირექცია და მასწავლებლები</MenuItem></Link>
                                            <Link to="/pupils"><MenuItem onClick={handleClose}>სკოლის თვითმმართველობა</MenuItem></Link>
                                        </Menu>
                                    </div>
                                </Link>
                            </li>
                            <li className="header-link">
                                <Link to="/news"><Button aria-controls="simple-menu" aria-haspopup="true">სიახლეები</Button></Link>
                            </li>
                            <li className="header-link">
                                <Link to="/projects"><Button aria-controls="simple-menu" aria-haspopup="true">პროგრამები/პროექტები</Button></Link>
                            </li>
                            <li className="header-link">
                                <Link to="/achievements"><Button aria-controls="simple-menu" aria-haspopup="true">მიღწევები</Button></Link>
                            </li>
                            <li className="header-link">
                                <Link to="/exams"><Button aria-controls="simple-menu" aria-haspopup="true">მისაღები გამოცდები</Button></Link>
                            </li>
                            <li className="header-link">
                                <Link to="/contact"><Button aria-controls="simple-menu" aria-haspopup="true">კონტაქტი</Button></Link>
                            </li>
                            <li className="header-link">
                                    <div>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                                            ბლოგები
                                        </Button>
                                        <Menu id="simple-menu" anchorEl={anchorEl2} keepMounted open={Boolean(anchorEl2)} onClose={handleClose2}>
                                            <a href="https://geocodna.wordpress.com" target="_blank"><MenuItem onClick={handleClose2}>ნინო მთიულიშვილის ბლოგი</MenuItem></a>
                                            <a href="http://nino42.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://nino42.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი</a></MenuItem></a>
                                            <a href="http://moscavleebs.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://moscavleebs.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი მოსწავლეებისათვის</a></MenuItem></a>
                                        </Menu>
                                    </div>
                            </li>
                            <li className="header-link">
                                <a href="https://vekua-tv.netlify.app" target="_blank"><Button aria-controls="simple-menu" aria-haspopup="true">ვეკუა TV</Button></a>
                            </li>
                        </ul>
                    </nav>
                </div>
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
                    <Route path="/exams">
                        <ExamsReg />
                    </Route>
                    <Route path="/check">
                        <ExamsCheck />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                    <Route path={`single/:id`}>
                        <SinglePost />
                    </Route>
                    <Route path={`projects/:id`}>
                        <SingleProject />
                    </Route>
                </Switch>
                <Footer />
            </div>
            </Router>
         ) 
    function Home() {
        return <>
            <Helmet>
                <title>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</title>
            </Helmet>
            <Main />
        </>;
    }
    
    function OurHistory() {
        return <>
            <Helmet>
                <title>ისტორია და მისია</title>
            </Helmet>
            <History />
        </>;
   }
    
    function OurLaws() {
        return <>
            <Helmet>
                <title>შინაგანაწესი</title>
            </Helmet>
            <Laws />
        </>
    }
    
    function Teachers() {
        return <>
            <Helmet>
                <title>დირექცია/მასწავლებლები</title>
            </Helmet>
            <SchoolTeachers />
        </>
    }
    
    function OurPupils() {
        return <>
            <Helmet>
                <title>სკოლის თვითმმართველობა</title>
            </Helmet>
            <Pupils />
        </>;
    }

    // function Projects() {
    //     return <>
    //         <Helmet>
    //               <title>პროექტები/პროგრამები</title>
    //         </Helmet>
    //         <h2>პროექტები/პროგრამები</h2>
    //         <Covid />
    //     </>;
    // }
    
    function OurAchievements() {
        return <>
            <Helmet>
              <title>მიღწევები</title>
            </Helmet>
            <Achievements />
        </>;
    }
    
    function ContactUs() {
        return <>
                <Helmet>
                  <title>კონტაქტი</title>
                </Helmet>
                <Contact />
            </>;
    }
    
    function TV() {
        return <h2>ვეკუა TV</h2>;
    }
    
    function SecretLogin() {
        return <>
                <Helmet>
                  <title>სისტემაში შესვლა</title>
                </Helmet>
                <Login />
            </>
    }
    
    function NotFound() {
        return <>
                <Helmet>
                    <title>გვერდი ვერ მოიძებნა 404</title>
                </Helmet>
                <Error />
            </>
    }

    function OurNews() {
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
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    }));
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            getPosts();
        }, [])
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        const addPosts = async () => {
            const title = document.getElementById("title").value;
            const url = document.getElementById("photo").value;
            const content = editorRef.current.getContent();
            const mainMonth = month + 1;
            const date = `${day}.${mainMonth}.${year} წ (${hour}:${minutes} სთ)`
            await firestore.collection("posts").add({
                title: title,
                url: url,
                date: date,
                content: content
            }).then(() => {
                document.getElementById("title").value = "";
                document.getElementById("photo").value = "";
            })
        }
        const getPosts = async () => {
            const data = await firestore.collection("posts").get();
            console.log(data);
            setPosts(data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(data);
        }
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
    
        const editorRef = useRef(null)
        const handleOpen = () => {
            // setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
        let { path, url } = useRouteMatch();
        var user = firebase.auth().currentUser;
        const signOut = async () => {
            firebase.auth().signOut().then(() => {<Redirect path="/" />}).catch((error) => {})
        }
        if (user) {
            return (
                <>
                <div>
                <Router>
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
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            
                            id="content"
                            />
                        <Button variant="contained" color="primary" onClick={() => addPosts()} style={{textAlign: "center"}}>პოსტის დამატება</Button>
                    </form>
                </div>
                <br />
                    <br/>
                    <h2>სიახლეები</h2>
                    <br/>
                    <br/>
                <div className="post-container">
                    <div className="feed">
                    <Container className={classes.cardGrid} maxWidth="lg">
                    {
                        posts.map((post, index) => {
                            const html = `${post.content}`;
                            return (
                                <Grid item xs={12} md={6} key={index}>
                                <Link to={`${url}/${post.id}`}>
                                    <CardActionArea component="a" style={{height:"200px"}} onClick={handleOpen}>
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
                                </Link>
                            </Grid>
                            )
                        })
                    }   
                    </Container>
                    </div>
                    <div className="single-post">
                        <Switch>
                            <Route exact path="/">
                                </Route>
                            <Route path={`${path}/:id`}>
                                <SinglePost />
                            </Route>
                        </Switch>
                    </div>
                            {/* <Modal
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
                            </Modal> */}
                <br/>
                </div>
                <Covid />
                </Router>
                </div>
                </>
            );
            OurNews.propTypes = {
                post: PropTypes.object,
            };
        }else {
            return (
                <div>
                <Router>
                <Helmet>
                  <title>სიახლეები</title>
                </Helmet>
                    <br/>
                    <h2>სიახლეები</h2>
                    <br/>
                    <br/>
                <div className="post-container">
                    <div className="feed">
                    <Container className={classes.cardGrid} maxWidth="lg">
                    {
                        posts.map((post, index) => {
                            const html = `${post.content}`;
                            return (
                                <Grid item xs={12} md={6} key={index}>
                                <Link to={`${url}/${post.id}`}>
                                    <CardActionArea component="a" style={{height:"200px"}} onClick={handleOpen}>
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
                                </Link>
                            </Grid>
                            )
                        })
                    }   
                    </Container>
                    </div>
                    <div className="single-post">
                        <Switch>
                            <Route exact path="/">
                                </Route>
                            <Route path={`${path}/:id`}>
                                <SinglePost />
                            </Route>
                        </Switch>
                    </div>
                            {/* <Modal
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
                            </Modal> */}
                <br/>
                </div>
                <Covid />
                </Router>
                </div>
            );
        }
    }
    
    function Projects() {
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
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(4),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
    }));
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            getPosts();
        }, [])
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const addPosts = async () => {
            const title = document.getElementById("title").value;
            const content = editorRef.current.getContent();
            const mainMonth = month + 1;
            const date = `${day}.${mainMonth}.${year} წ`
            await firestore.collection("projects").add({
                title: title,
                date: date,
                content: content
            }).then(() => {
                document.getElementById("title").value = "";
            })
        }
        const getPosts = async () => {
            const data = await firestore.collection("projects").get();
            console.log(data);
            setPosts(data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(data);
        }
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
    
        const editorRef = useRef(null)
        const handleOpen = () => {
            // setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
        let { path, url } = useRouteMatch();
        var user = firebase.auth().currentUser;
        const signOut = async () => {
            firebase.auth().signOut().then(() => {<Redirect path="/" />}).catch((error) => {})
        }
        if (user) {
            return (
                <>
                <div>
                <Router>
                <Helmet>
                  <title>პროექტების Admin გვერდი</title>
                </Helmet>
                <br/>
                <Button variant="contained" color="secondary" onClick={signOut}>გასვლა</Button>
                <div className="post-form">
                    <form action="" className="add-post">
                        <br />
                        <br />
                        <h2 style={{textAlign: "center"}}>პროექტის დამატება</h2>
                        <br />
                        <br />
                        <TextField id="title" label="სათაური" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <Editor
                            // initialValue="<p>Initial content</p>"
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            
                            id="content"
                            />
                        <Button variant="contained" color="primary" onClick={() => addPosts()} style={{textAlign: "center"}}>პოსტის დამატება</Button>
                    </form>
                </div>
                <br />
                    <br/>
                    <h2>პროექტები</h2>
                    <br/>
                    <br/>
                <div className="post-container">
                    <div className="feed">
                    <Container className={classes.cardGrid} maxWidth="lg">
                    {
                        posts.map((post, index) => {
                            const html = `${post.content}`;
                            return (
                                <Grid item xs={12} md={6} key={index}>
                                <Link to={`${url}/${post.id}`}>
                                    <CardActionArea component="a" style={{height:"200px"}} onClick={handleOpen}>
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
                                </Link>
                            </Grid>
                            )
                        })
                    }   
                    </Container>
                    </div>
                    <div className="single-post">
                        <Switch>
                            <Route exact path="/"></Route>
                            <Route path={`${path}/:id`}>
                                <SingleProject />
                            </Route>
                        </Switch>
                    </div>
                            {/* <Modal
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
                            </Modal> */}
                <br/>
                </div>
                <Covid />
                </Router>
                </div>
                </>
            );
            OurNews.propTypes = {
                post: PropTypes.object,
            };
        }else {
            return (
                <div>
                <Router>
                <Helmet>
                  <title>პროექტები</title>
                </Helmet>
                    <br/>
                    <h2>პროექტები</h2>
                    <br/>
                    <br/>
                <div className="post-container">
                    <div className="feed">
                    <Container className={classes.cardGrid} maxWidth="lg">
                    {
                        posts.map((post, index) => {
                            const html = `${post.content}`;
                            return (
                                <Grid item xs={12} md={6} key={index}>
                                <Link to={`${url}/${post.id}`}>
                                    <CardActionArea component="a" style={{height:"200px"}} onClick={handleOpen}>
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
                                </Link>
                            </Grid>
                            )
                        })
                    }   
                    </Container>
                    </div>
                    <div className="single-post">
                        <Switch>
                            <Route exact path="/">
                                </Route>
                            <Route path={`${path}/:id`}>
                                <SingleProject />
                            </Route>
                        </Switch>
                    </div>
                            {/* <Modal
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
                            </Modal> */}
                <br/>
                </div>
                <Covid />
                </Router>
                </div>
            );
        }
    }
    function SingleProject() {
        // The <Route> that rendered this component has a
        // path of `/topics/:topicId`. The `:topicId` portion
        // of the URL indicates a placeholder that we can
        // get from `useParams()`.
        let { id } = useParams();
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            getPosts();
        }, [])
        const getPosts = async () => {
            const data = await firestore.collection("projects").get();
            console.log(data);
            setPosts(data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(data);
        }
        const editorRef = useRef(null)
        var user = firebase.auth().currentUser;
        const updatePost = async (id) => {
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            const day = new Date().getDate();
            const title = document.getElementById("headline").value;
            const url = document.getElementById("url").value;
            const content = editorRef.current.getContent();
            const mainMonth = month + 1;
            const date = `${day}.${mainMonth}.${year} წ.`
            await firestore.collection("projects").doc(id).update({
              title: title,
              url: url,
              date: date,
              content: content
            }).then(() => getPosts());
          }
        if (user) {
            return (
            <div>
    {
                          posts.map((post, index) => {
                              const html = `${post.content}`;
                              if (post.id == id) {
                                  return (
                                      <div className="full">
                                          <Helmet>
                                              <title>
                                                  {post.title}
                                              </title>
                                          </Helmet>
                                          <div style={{backgroundImage: "url('https://i.postimg.cc/XNKCLj1F/No-Background.png')", width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                          <form action="">
                                            <TextField id="headline" defaultValue={`${post.title}`} label="სათაური" variant="filled" style={{width: "100%"}}/>
                                            <br />
                                            <br />
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue={`${html}`}
                                                init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar: 'undo redo | formatselect | ' +
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                                {/* { ReactHtmlParser(html) } */}
                                            <Button variant="contained" fullWidth color="primary" onClick={() => updatePost(post.id)} style={{textAlign: "center"}}>პოსტის ჩასწორება</Button>
                                          </form>
                                          <br />
                                          <br />
                                          <p style={{textAlign: "start"}}><i style={{textAlign: "start"}}>{post.date}</i></p>
                                      </div>
                                      )
                                  }
                          })
                      }  
            </div>
          );
            
        }else {
            return (
              <div>
        {
                            posts.map((post, index) => {
                                const html = `${post.content}`;
                                if (post.id == id) {
                                    return (
                                        <div className="full">
                                            <Helmet>
                                              <title>
                                                  {post.title}
                                              </title>
                                          </Helmet>
                                          <div style={{backgroundImage: "url(https://i.postimg.cc/XNKCLj1F/No-Background.png)", width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center"}}></div>

                                            <h2>{post.title}</h2>
                                            <br />
                                            <p style={{textAlign: "start"}}>{ ReactHtmlParser(html) }</p>
                                            <br />
                                            <br />
                                            <p style={{textAlign: "start"}}><i style={{textAlign: "start"}}>{post.date}</i></p>
                                        </div>
                                        )
                                    }
                            })
                        }  
              </div>
            );

        }
      }
    function SinglePost() {
        // The <Route> that rendered this component has a
        // path of `/topics/:topicId`. The `:topicId` portion
        // of the URL indicates a placeholder that we can
        // get from `useParams()`.
        let { id } = useParams();
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            getPosts();
        }, [])
        const getPosts = async () => {
            const data = await firestore.collection("posts").get();
            console.log(data);
            setPosts(data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(data);
        }
        const editorRef = useRef(null)
        var user = firebase.auth().currentUser;
        const updatePost = async (id) => {
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            const day = new Date().getDate();
            const title = document.getElementById("headline").value;
            const url = document.getElementById("url").value;
            const content = editorRef.current.getContent();
            const mainMonth = month + 1;
            const date = `${day}.${mainMonth}.${year} წ.`
            await firestore.collection("posts").doc(id).update({
              title: title,
              url: url,
              date: date,
              content: content
            }).then(() => getPosts());
          }
        if (user) {
            return (
            <div>
    {
                          posts.map((post, index) => {
                              const html = `${post.content}`;
                              if (post.id == id) {
                                  return (
                                      <div className="full">
                                          <Helmet>
                                              <title>
                                                  {post.title}
                                              </title>
                                          </Helmet>
                                          <div style={{backgroundImage: `url(${post.url})`, width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                          <form action="">
                                            <TextField id="headline" defaultValue={`${post.title}`} label="სათაური" variant="filled" style={{width: "100%"}}/>
                                            <br />
                                            <br />
                                            <TextField id="url" label="ფოტოს ლინკი" defaultValue={`${post.url}`} variant="filled" style={{width: "100%"}}/>
                                            <br />
                                            <br />
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue={`${html}`}
                                                init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar: 'undo redo | formatselect | ' +
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                                {/* { ReactHtmlParser(html) } */}
                                            <Button variant="contained" fullWidth color="primary" onClick={() => updatePost(post.id)} style={{textAlign: "center"}}>პოსტის ჩასწორება</Button>
                                          </form>
                                          <br />
                                          <br />
                                          <p style={{textAlign: "start"}}><i style={{textAlign: "start"}}>{post.date}</i></p>
                                      </div>
                                      )
                                  }
                          })
                      }  
            </div>
          );
            
        }else {
            return (
              <div>
        {
                            posts.map((post, index) => {
                                const html = `${post.content}`;
                                if (post.id == id) {
                                    return (
                                        <div className="full">
                                            <Helmet>
                                              <title>
                                                  {post.title}
                                              </title>
                                          </Helmet>
                                            <div style={{backgroundImage: `url(${post.url})`, width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                            <h2>{post.title}</h2>
                                            <br />
                                            <p style={{textAlign: "start"}}>{ ReactHtmlParser(html) }</p>
                                            <br />
                                            <br />
                                            <p style={{textAlign: "start"}}><i style={{textAlign: "start"}}>{post.date}</i></p>
                                        </div>
                                        )
                                    }
                            })
                        }  
              </div>
            );

        }
      }
    
    function ExamsReg() {
        // const year = new Date().getFullYear();
        // const month = new Date().getMonth();
        var user = firebase.auth().currentUser;
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        const date = `${month}.${day}`
        const mainMonth = month + 1;
        console.log(mainMonth)
        console.log(date)
        if (user) {
            return <>
                <Data /><Exams />
                <Helmet>
                    <title>მისაღები გამოცდების Admin გვერდი</title>
                </Helmet>
            </>
        }else {
            return <>
                <NoExams />
                <Helmet>
                    <title>მისაღები გამოცდებისათვის რეგისტრაცია</title>
                </Helmet>
            </>
        }
    }
    function ExamsCheck() {
        return <Check />
    }
}

export default Header;