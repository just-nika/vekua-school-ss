import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Helmet } from "react-helmet";
import Registration from './saturday-school-registration';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));  

function SaturdaySchool() {
    const classes = useStyles();
    return (
        <div className="saturday-school">
            <Helmet>
                <title>საშაბათო სკოლა</title>
            </Helmet>
            <br />
            <h1>საშაბათო სკოლა</h1>
            <br />
            <div className={classes.root} style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>რა არის საშაბათო სკოლა?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>რა უნდა ვიცოდეთ თუ გვსურს საშაბათო სკოლაში სწავლა?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>როგორ დავრეგისტრირდეთ საშაბათო სკოლაში?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <br />
            <br />
            <Registration />
        </div>
    )
}

export default SaturdaySchool
