import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { firebase } from '../firebase/firebase.config';
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
import News from './news';
import Error from './error';
import Single from './single';
import NewsAdmin from './newsAdmin';
import Exams from './exams';
import Check from './check';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Covid from './covid';
import Footer from './footer';
import { Helmet } from "react-helmet";

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
                    <Route path="/check">
                        <ExamsCheck />
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
        if (user) {
            return <NewsAdmin />
            OurNews.propTypes = {
                post: PropTypes.object,
            };
        }else {
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
        return <Exams />
    }
    function ExamsCheck() {
        return <Check />
    }
}

export default Header;