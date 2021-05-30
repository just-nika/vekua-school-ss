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
import { firebase, auth, firestore } from '../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
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

function Footer() {
    return (
        <div>
                <div className="footer">
                    <div className="first-column">
                        <a href="/"><img src="./logo.png" className="footer-logo" alt="logo"/></a>
                        <br />
                        <br />
                        <a href="https://www.facebook.com/schoolvekua/" target="_blank"><Button color="primary"><i class="fab fa-facebook"></i></Button></a>
                        <a href="https://www.instagram.com/42vekuaschool/" target="_blank"><Button color="primary"><i class="fab fa-instagram"></i></Button></a>
                        <a href="https://www.youtube.com/channel/UCHl29oGvshhX8VzeU9Lgziw" target="_blank"><Button color="primary"><i class="fab fa-youtube"></i></Button></a>
                    </div>
                    <br />
                    <div className="second-column">
                        <h4>კონტაქტი</h4>
                        <br />
                        <br />
                        <p><strong>თბილისი, პეტრე ჩაიკოვსკის 9.</strong></p>
                        <br />
                        <p>ელექტრონული ფოსტა - <a href="mailto: tbilisi42@mes.gov.ge" target="_blank">tbilisi42@mes.gov.ge</a></p>
                        <p>ნომერი - <a href="tel:0322-99-82-10">(995) 0322 99 82 10</a></p>
                    </div>
                    <div className="third-column">
                        <h4>გამოსადეგარი ლინკები</h4>
                        <br />
                        <div className="links">
                            <div className="first-link-column">
                                <p><a href="/history">ჩვენს შესახებ</a></p>
                                <p><a href="/news">სიახლეები</a></p>
                                <p><a href="/projects">პროგრამები და პროექტები</a></p>
                                <p><a href="/teachers">დირექცია და მასწავლებლები</a></p>
                            </div>
                            <div className="second-link-column">
                                <p><a href="/laws">შინაგანწესი</a></p>
                                <p><a href="/achievements">მიღწევები</a></p>
                                <p><a href="/contact">კონტაქტი</a></p>
                                <p><a href="/login">შესვლა</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p><strong>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</strong></p>
                    <p><strong>ყველა უფლება დაცულია © 2021</strong></p>
                </div>
            </div>
    )
}

export default Footer
