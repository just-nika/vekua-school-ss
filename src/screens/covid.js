import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function Covid(toggleDark) {
    const dark = toggleDark.toggleDark;
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: dark ? "#00243d" : "#01416f",
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="covid-plan">
                <div className="covid-title">
                    <h3>სკოლაში არსებული რეგულაციები COVID-19-ისგან თავის დასაცავად.</h3>
                </div>
                <div className="covid-link">
                    <a href="https://fb.watch/4Xzh_CidlG/" target="_blank"><Button variant="contained" color="secondary" style={{width: "200px",height:"50px"}}>იხილეთ აქ</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Covid;
