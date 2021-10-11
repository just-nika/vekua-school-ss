import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import { secondaryApp, firebase } from '../firebase/firebase.config';
import Error from './error'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Five from "./five"

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography >{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Contracts() {
    var user = firebase.auth().currentUser;
    const [posts, setPosts] = useState([]);
    const [rows, setRows] = useState(posts);
    const [searched, setSearched] = useState("");
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const classes = useStyles();
    useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        const data = await secondaryApp.firestore().collection(`მათემატიკა`).orderBy("class", "desc").get();
        setPosts(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
    }
    
    const requestSearch = function (searchedVal) {
        const filteredRows = posts.filter((pupil) => {
            return pupil.idNumber.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };
    
    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const [postss, setPostss] = useState([]);
    const [rowss, setRowss] = useState(postss);
    const [searchedd, setSearchedd] = useState("");
    
    useEffect(() => {
        getPostss();
    }, [])
    const getPostss = async () => {
        const data = await secondaryApp.firestore().collection(`ფიზიკა`).orderBy("class", "desc").get();
        setPostss(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
    }
    
    const requestSearchh = function (searcheddVal) {
        const filteredRowss = postss.filter((pupil) => {
            return pupil.idNumber.toLowerCase().includes(searcheddVal.toLowerCase());
        });
        setRowss(filteredRowss);
    };
    
    const cancelSearchh = () => {
        setSearchedd("");
        requestSearch(searchedd);
    };
    
    if (user) {
        return <>
            <Route>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: "100%" }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{width: "100%"}}>
                            <Tab label="მათემატიკა" {...a11yProps(0)} style={{width: "50%"}}/>
                            <Tab label="ფიზიკა" {...a11yProps(1)} style={{width: "50%"}}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div className="contracts" style={{padding: "50px"}}>
                            <p style={{textAlign: "start"}}><i>ხელშეკრულების მოსაძებნად მიუთითეთ პირადი ნომერი</i></p>
                            <SearchBar
                                value={searched}
                                onChange={(searchVal) => requestSearch(searchVal)}
                                onCancelSearch={() => cancelSearch()}
                            />
                            <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">ხელშეკრულების ლინკი</TableCell>
                                    <TableCell align="center">მოსწავლის პირადი ნომერი</TableCell>
                                    <TableCell align="center">კლასი</TableCell>
                                    <TableCell align="center">საგანი</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((pupil, index) => {
                                    return(
                                        <TableRow key={pupil.id}>
                                            <TableCell align="start"><Link to={`contracts/${pupil.subject}/${pupil.id}`}>{pupil.firstName} {pupil.lastName}</Link></TableCell>
                                            <TableCell align="start">{pupil.idNumber}</TableCell>
                                            <TableCell align="start">{pupil.class}</TableCell>
                                            <TableCell align="start">{pupil.subject}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <div className="contracts" style={{padding: "50px"}}>
                            <p style={{textAlign: "start"}}><i>ხელშეკრულების მოსაძებნად მიუთითეთ პირადი ნომერი</i></p>
                            <SearchBar
                                value={searched}
                                onChange={(searcheddVal) => requestSearchh(searcheddVal)}
                                onCancelSearch={() => cancelSearchh()}
                            />
                            <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">ხელშეკრულების ლინკი</TableCell>
                                    <TableCell align="center">მოსწავლის პირადი ნომერი</TableCell>
                                    <TableCell align="center">კლასი</TableCell>
                                    <TableCell align="center">საგანი</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowss.map((pupil, index) => {
                                    return(
                                        <TableRow key={pupil.id}>
                                            <TableCell align="start"><Link to={`contracts/${pupil.subject}/${pupil.id}`}>{pupil.firstName} {pupil.lastName}</Link></TableCell>
                                            <TableCell align="start">{pupil.idNumber}</TableCell>
                                            <TableCell align="start">{pupil.class}</TableCell>
                                            <TableCell align="start">{pupil.subject}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </div>
                    </TabPanel>
                </Box>
                
            </Route>
        </>
    }else {
        return <Error />
    }
}
