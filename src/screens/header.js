import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
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
import SchoolTeachers from './teachers';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NewsRoute from './newsRoute';
import ProjectsRoute from './projectsRoute';

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
                            <a href="/"><img src="/logo.png" className="header-logo"/></a>
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
                        <Link to="/plan">
                            <List>
                                <ListItem button>
                                    სასკოლო სასწავლო გეგმა
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
                                {/* <Link to="/"><Button aria-controls="simple" aria-haspopup="true">მთავარი</Button></Link> */}
                                <Link to="/" style={{marginTop: "auto", marginBottom: "auto"}}>მთავარი</Link>
                            </li>
                            <li className="header-link">
                                <Link onClick={handleClick}>
                                    ჩვენ შესახებ
                                </Link>
                                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                    <Link to="/history"><MenuItem onClick={handleClose}>ისტორია და მისია</MenuItem></Link>
                                    <Link to="/laws"><MenuItem onClick={handleClose}>შინაგანაწესი</MenuItem></Link>
                                    <Link to="/plan"><MenuItem onClick={handleClose}>სასკოლო სასწავლო გეგმა</MenuItem></Link>
                                    <Link to="/teachers"><MenuItem onClick={handleClose}>დირექცია და მასწავლებლები</MenuItem></Link>
                                    <Link to="/pupils"><MenuItem onClick={handleClose}>სკოლის თვითმმართველობა</MenuItem></Link>
                                </Menu>
                            </li>
                            <li className="header-link">
                                <Link to="/news">სიახლეები</Link>
                            </li>
                            <li className="header-link">
                                <Link to="/projects">პროგრამები/პროექტები</Link>
                            </li>
                            <li className="header-link">
                                <Link to="/achievements">მიღწევები</Link>
                            </li>
                            
                            <li className="header-link">
                                <Link to="/contact">კონტაქტი</Link>
                            </li>
                            <li className="header-link">
                                <Link onClick={handleClick2}>
                                    ბლოგები
                                </Link>
                                <Menu id="simple-menu" anchorEl={anchorEl2} keepMounted open={Boolean(anchorEl2)} onClose={handleClose2}>
                                    <a href="https://geocodna.wordpress.com" target="_blank"><MenuItem onClick={handleClose2}>ნინო მთიულიშვილის ბლოგი</MenuItem></a>
                                    <a href="http://nino42.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://nino42.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი</a></MenuItem></a>
                                    <a href="http://moscavleebs.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://moscavleebs.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი მოსწავლეებისათვის</a></MenuItem></a>
                                </Menu>
                            </li>
                            <li className="header-link">
                                <a href="https://vekua-tv.netlify.app" target="_blank">ვეკუა TV</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/news">
                        <NewsRoute />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/laws">
                        <Laws />
                    </Route>
                    <Route path="/plan">
                        <Plan />
                    </Route>
                    <Route path="/teachers">
                        <SchoolTeachers />
                    </Route>
                    <Route path="/pupils">
                        <Pupils />
                    </Route>
                    <Route path="/projects">
                        <ProjectsRoute />
                    </Route>
                    <Route path="/achievements">
                        <Achievements />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </div>
            </Router>
         )
    function Plan() {
        return <>
            <br />
            <p>სასწავლო გეგმა იხილეთ მიმაგრებულ <a target="blanc_" href="./2020-2021-სასწავლო-წლის-სასკოლო-სასწავლო-გეგმა.pdf">ფაილში</a></p>
            <br />
        </>
    }
}

export default Header;