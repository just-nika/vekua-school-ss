import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import { secondaryApp } from '../firebase/firebase.config';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const originalRows = [
    { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
];  
export default function Contracts() {
    const [posts, setPosts] = useState([]);
    const [rows, setRows] = useState(posts);
    const [searched, setSearched] = useState("");
    const classes = useStyles();
    useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        const data = await secondaryApp.firestore().collection("all").orderBy("class", "desc").get();
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <>
    <Route>
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
                            <TableCell align="start"><Link to={`contracts/${pupil.id}`}>{pupil.firstName} {pupil.lastName}</Link></TableCell>
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
    </Route>
  </>
}
