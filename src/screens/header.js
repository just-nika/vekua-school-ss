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
import SaturdaySchool from './saturday-school';
import SwitchM from "@material-ui/core/Switch";
import Messages from './messages';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import ContractsRoute from './contractsRoute';


function ScrollTop(props) {
      const useStyles = makeStyles((theme) => ({
          root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            left: theme.spacing(2),
          },
        }));
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function Header({ toggleDark, settoggleDark, props }) {
    const handleModeChange = () => {
        settoggleDark(!toggleDark);
      };
    const dark = toggleDark.toggleDark;
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        headerClasses: {
            backgroundColor: toggleDark ? "#383838" : "rgba(159, 216, 237, 1)",
        },
        headerCl: {
            height: "125px"
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
    const aStyle = {
        color: toggleDark ? "white" : "#343a40",
    }

    return (
<Router>
        <div className="page-main" className={classes.root}>
            <div className={classes.headerCl}>
            <CssBaseline />
            <AppBar className={classes.headerClasses}>
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
                        <Link to="/saturday-school">
                            <List>
                                <ListItem button>
                                    საშაბათო სკოლა
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
                        <SwitchM
                                checked={toggleDark}
                                onChange={handleModeChange}
                                name="toggleDark"
                                color="default"
                            />
                    </div>
                            </Drawer>
                            </React.Fragment>
                        ))}
                        
                        </div>
                        <ul className="routes">
                            <li className="header-link">
                                {/* <Link to="/"><Button aria-controls="simple" aria-haspopup="true">მთავარი</Button></Link> */}
                                <Link to="/" style={aStyle}>მთავარი</Link>
                            </li>
                            <li className="header-link">
                                <Link onClick={handleClick} style={aStyle}>
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
                                <Link to="/news" style={aStyle}>სიახლეები</Link>
                            </li>
                            <li className="header-link">
                                <Link to="/projects" style={aStyle}>პროგრამები/პროექტები</Link>
                            </li>
                            <li className="header-link">
                                <Link to="/achievements" style={aStyle}>მიღწევები</Link>
                            </li>
                            <li className="header-link">
                                <Link to="/saturday-school" style={aStyle}>საშაბათო სკოლა</Link>
                            </li>
                            
                            <li className="header-link">
                                <Link to="/contact" style={aStyle}>კონტაქტი</Link>
                            </li>
                            <li className="header-link">
                                <Link onClick={handleClick2} style={aStyle}>
                                    ბლოგები
                                </Link>
                                <Menu id="simple-menu" anchorEl={anchorEl2} keepMounted open={Boolean(anchorEl2)} onClose={handleClose2}>
                                    <a href="https://geocodna.wordpress.com" target="_blank"><MenuItem onClick={handleClose2}>ნინო მთიულიშვილის ბლოგი</MenuItem></a>
                                    <a href="http://nino42.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://nino42.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი</a></MenuItem></a>
                                    <a href="http://moscavleebs.blogspot.com" target="_blank"><MenuItem onClick={handleClose2}><a href="http://moscavleebs.blogspot.com" target="_blank">ნინო ნასყიდაშვილის ბლოგი მოსწავლეებისათვის</a></MenuItem></a>
                                </Menu>
                            </li>
                            <li className="header-link">
                                <a href="https://vekua-tv.netlify.app" target="_blank" style={aStyle}>ვეკუა TV</a>
                            </li>
                            <li className="header-link">
                            <SwitchM
                                checked={toggleDark}
                                onChange={handleModeChange}
                                name="toggleDark"
                                color="default"
                            />
                            </li>
                        </ul>
                    </nav>
                </div>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />
            </div>

                <Switch>
                    <Route path="/news">
                        <NewsRoute toggleDark={toggleDark} />
                    </Route>
                    <Route path="/history">
                        <History toggleDark={toggleDark} />
                    </Route>
                    <Route path="/laws">
                        <Laws toggleDark={toggleDark} />
                    </Route>
                    <Route path="/plan">
                        <Plan toggleDark={toggleDark} />
                    </Route>
                    <Route path="/teachers">
                        <SchoolTeachers toggleDark={toggleDark} />
                    </Route>
                    <Route path="/pupils">
                        <Pupils toggleDark={toggleDark} />
                    </Route>
                    <Route path="/projects">
                        <ProjectsRoute toggleDark={toggleDark} />
                    </Route>
                    <Route path="/achievements">
                        <Achievements toggleDark={toggleDark} />
                    </Route>
                    <Route path="/contact">
                        <Contact toggleDark={toggleDark} />
                    </Route>
                    <Route path="/saturday-school">
                        <SaturdaySchool toggleDark={toggleDark} />
                    </Route>
                    <Route path="/login">
                        <Login toggleDark={toggleDark} />
                    </Route>
                    <Route path="/messages">
                        <Messages toggleDark={toggleDark} />
                    </Route>
                    <Route path="/contracts">
                        <ContractsRoute toggleDark={toggleDark} />
                    </Route>
                    <Route path="/" exact>
                        <Main toggleDark={toggleDark} />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer toggleDark={toggleDark} />
            </div>
            <ScrollTop {...props}>
                <Fab color="primary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
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