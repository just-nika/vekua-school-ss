import React, {Fragment, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { firebase, auth, firestore, storage } from '../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Login from './login';
import Main from './main';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import History from './history';
import Laws from './laws';
import Achievements from './achievements';
import Contact from './contact';
import Pupils from './pupils';
import News from './news';
import Error from './error';
import Single from './single';
import ResponsiveHeader from './responsiveHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Covid from './covid';
import Footer from './footer';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "react-helmet";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

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
                                            ჩვენს შესახებ
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
                                <a href="http://vekua42.edu.ge/obiblio/home/index.php" target="_blank"><Button aria-controls="simple-menu" aria-haspopup="true">ბიბლიოთეკა</Button></a>
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
                    <Route path="/single/:id" render={(props) => <Single {...props} />}/> 
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
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
            <h2>დირექცია/მასწავლებლები</h2>
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

    function Projects() {
        return <>
            <Helmet>
                  <title>პროექტები/პროგრამები</title>
            </Helmet>
            <h2>პროექტები/პროგრამები</h2>
            <Covid />
        </>;
    }
    
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
        OurNews.propTypes = {
            post: PropTypes.object,
          };
        } else {
            return (
            <div>
                <Helmet>
                  <title>სიახლეები</title>
                </Helmet>
                <News />
                <Covid />
            </div>
            );
        }
    }
    function ExamsReg() {
        const [pupils7, setPupils7] = useState([]);
        const [pupils8, setPupils8] = useState([]);
        const [pupils9, setPupils9] = useState([]);
        const [pupils10, setPupils10] = useState([]);
        const [pupils11, setPupils11] = useState([]);
        const [value, setValue] = useState("");
        const selectClass = e => setValue(e.target.value);
        const [language, setLanguage] = useState("");
        const selectLanguage = e => setLanguage(e.target.language);
        useEffect(() => {
            getPupils7();
            getPupils8();
            getPupils9();
            getPupils10();
            getPupils11();
          }, [])
        const {
            register,
            handleSubmit,
            formState: { errors }
          } = useForm();
        
          const onSubmit = (data) => {
            console.log(data);
          };
        const useStyles = makeStyles((theme) => ({
            paper: {
              marginTop: theme.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            },
            form: {
              width: '100%', // Fix IE 11 issue.
              marginTop: theme.spacing(3),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
            input: {
                display: 'none',
            },
          }));
          const [age, setAge] = React.useState('');

          const handleChange = (event) => {
            setAge(event.target.value);
          };
          const getPupils7 = async () => {
            const data = await firestore.collection("7").get();
            setPupils7(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils8 = async () => {
            const data = await firestore.collection("8").get();
            setPupils8(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils9 = async () => {
            const data = await firestore.collection("9").get();
            setPupils9(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils10 = async () => {
            const data = await firestore.collection("10").get();
            setPupils10(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils11 = async () => {
            const data = await firestore.collection("11").get();
            setPupils11(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
            const classes = useStyles();
            const addPupil = async () => {
                
            }
            // const handleUpload = async () => {
            //     const storageRef = storage.ref();
            //     const fileRef = storageRef.child(image.name);
            //     await fileRef.put(image);
            //     firestore.collection("albums").add({
            //         name: image.name,
            //         desc: document.getElementById("postDesc").value,
            //         url: await fileRef.getDownloadURL()
            //     })
            // }
            return (
            <div>
              <Container component="main" maxWidth="md">
                <Helmet>
                  <title>მოსწავლის მისაღები გამოცდებისათვის რეგისტრაცია</title>
                </Helmet>
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <PersonAddIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    მოსწავლის მისაღები გამოცდებისათვის რეგისტრაცია {value} {language}
                  </Typography>
                  <br />
                  <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("firstName", { required: true })}
                            error={errors.firstName}
                            helperText={errors.firstName && "მოსწავლის სახელი აუცილებელია"}
                            autoComplete="fname"
                            name="firstName"
                            variant="standard"
                            required
                            fullWidth
                            id="firstName"
                            label="მოსწავლის სახელი"
                            autoFocus
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("lastName", { required: true })}
                            error={errors.lastName}
                            helperText={errors.lastName && "მოსწავლის გვარი აუცილებელია"}
                            variant="standard"
                            required
                            fullWidth
                            id="lastName"
                            label="მოსწავლის გვარი"
                            name="lastName"
                            autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            {...register("idRequired", { required: true, minLength: 11, maxLength: 11 })}
                            error={errors.idRequired}
                            helperText={errors.idRequired && "მოსწავლის პირადი ნომერი უნდა შეიცავდეს 11 ციფრს"}
                            variant="standard"
                            required
                            fullWidth
                            id="idNumber"
                            label="მოსწავლის პირადი ნომერი"
                            type="number"
                            name="idRequired"
                            autoComplete="id"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            {...register("fatherName", { required: true  })}
                            error={errors.fatherName}
                            helperText={errors.fatherName && "მამის სახელი აუცილებელია"}
                            variant="standard"
                            required
                            fullWidth
                            id="FatherName"
                            label="მამის სახელი"
                            name="FatherName"
                            autoComplete="FatherName"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("parentName", { required: true  })}
                            error={errors.parentName}
                            helperText={errors.parentName && "მშობლის სახელი აუცილებელია"}
                            autoComplete="fname"
                            name="ParentfirstName"
                            variant="standard"
                            required
                            fullWidth
                            id="ParentFirstName"
                            label="მშობლის სახელი"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("parentLastName", { required: true })}
                            error={errors.parentLastName}
                            helperText={errors.parentLastName && "მშობლის გვარი აუცილებელია"}
                            variant="standard"
                            required
                            fullWidth
                            id="ParentLastName"
                            label="მშობლის გვარი"
                            name="ParentLastName"
                            autoComplete="lname"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            {...register("oldSchool", { required: true })}
                            error={errors.oldSchool}
                            helperText={errors.oldSchool && "გთხოვთ მიუთითოთ სკოლა სადაც მოსწავლე ამჟამად სწავლობს"}
                            variant="standard"
                            required
                            fullWidth
                            id="oldSchool"
                            label="სკოლა საიდანაც გადმოდიხართ"
                            name="oldSchool"
                            autoComplete="oldSchool"
                        />
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <TextField
                            {...register("mobileNumber", { required: true })}
                            error={errors.mobileNumber}
                            helperText={errors.mobileNumber && "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"}
                            variant="standard"
                            required
                            fullWidth
                            id="mobileNumber"
                            type="number"
                            label="მშობლის ტელეფონის ნომერი"
                            name="mobileNumber"
                            autoComplete="mobileNumber"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl className={classes.formControl} fullWidth required>
                            <InputLabel>მიუთითეთ კლასი, რომელშიც გადადიხართ</InputLabel>
                            <Select
                                {...register("class", { required: true })}
                                error={errors.class}
                                helperText={errors.class && "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"}
                                labelId="demo-simple-select-label"
                                id="class"
                                onChange={selectClass}
                                fullWidth
                                required
                            >
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                            </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} id="language">
                        <FormControl className={classes.formControl} fullWidth required >
                            <InputLabel>მეორე უცხო ენა, რომელსაც სწავლობთ</InputLabel>
                            <Select
                                {...register("language", { required: true })}
                                error={errors.language}
                                helperText={errors.language && "მეორე უცხო ენის მითითება აუცილებელია"}
                                labelId="demo-simple-select-label"
                                onChange={selectLanguage}
                                fullWidth
                                required
                            >
                                <MenuItem value="რუსული">რუსული</MenuItem>
                                <MenuItem value="გერმანული">გერმანული</MenuItem>
                            </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <p style={{textAlign: "start"}}>ატვირთეთ მოსწავლის ფოტო</p>
                        <input accept="image/*" className={classes.input} required id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <p style={{textAlign: "start"}}>ცნობა სკოლიდან სწავლის შესახებ</p>
                        <input accept="image/*" className={classes.input} required id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <AttachFileIcon />
                            </IconButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                      fullWidth
                      onClick={() => addPupil()}
                    >
                      რეგისტრაცია
                    </Button>
                  </form>
                <br />
                </div>
              </Container>
                <Covid />
                </div>
            );
    }
    // function SinglePage() {
    //     return (props) => <Single {...props} />
    // }
}

export default Header;