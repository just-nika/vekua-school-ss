import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";
import { firebase, auth } from '../firebase/firebase.config';
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
import Admin from './admin';
import Error from './error';


function Header() {

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


    return (
        <div className="page-main">
            <Router>
                <div className="header">
                    <nav>
                        <div className="logo">
                            <a href="/"><img src="./logo.png" className="header-logo"/></a>
                        </div>
                        <ul className="routes">
                            <li className="header-link">
                                <Link to="/"><Button aria-controls="simple-menu" aria-haspopup="true">მთავარი</Button></Link>
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
                                <a href="https://www.vekua.gfca.ge" target="_blank"><Button aria-controls="simple-menu" aria-haspopup="true">საშაბათოების რეგისტრაცია</Button></a>
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
                    <Route path="/single">
                        <SinglePage />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
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
        return <h2>დირექცია/დირექტორი</h2>;
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

    function SinglePage() {
        return "კი";
    }

    function OurNews() {
        var user = firebase.auth().currentUser;

        if (user) {
            return (<Admin />);
        } else {
            return (<News />);
        }
    }
}

export default Header
