import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Covid from './covid';
import Check from './check';
import { Helmet } from "react-helmet";
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა',
    imgPath:
      './1947-2.jpg',
  },
  {
    label: 'აქ ყველა პირობაა შექმნილი იმისათვის, რომ მოსწავლეებმა გაიღრმავონ მათემატიკისა და ფიზიკის ცოდნა, დაეუფლონ უმაღლესი მათემატიკის ელემენტებს.',
    imgPath:
      './cos.jpg',
  },
  {
    label: 'ჩვენი ქვეყანა გაძლიერდება, როდესაც თითოეულ ახალ ვეკუელს შეეძლება ხელი შეუწყოს ჩვენს კეთილდღეობასა და ინოვაციას მათემატიკისა და მეცნიერების საშუალებებით.',
    imgPath:
      './carousel.jpg',
  },
  {
    label: 'ჩვენ ვხსნით შესაძლებლობების კარს და ვხელმძღვანელობთ ჩვენს მოსწავლეებს, რადგან ისინი წარმოადგენენ ჩვენი საერთო მომავალს.',
    imgPath:
      './last_bell_2022.jpeg',
  },
];

const useStyles = makeStyles((theme) => ({
}));

function Main(toggleDark) {
    const dark = toggleDark.toggleDark;
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const useStyles = makeStyles((theme) => ({
        rootTwo: {
            maxWidth: "100%",
            flexGrow: 1,
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            height: "auto",
            padding: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
        },
        img: {
            height: "Calc(100% - 125px)",
            display: 'block',
            maxWidth: "100%",
            overflow: 'hidden',
            width: '100%',
        },
        root: {
            backgroundColor: dark ? "#363636" : "#dbf3fc",
        },
        facebook: {
            backgroundColor: dark ? "rgba(48, 48, 48, 0.52)" : "none",
            padding: "40px"
        }
    }));
    const classes = useStyles();
    return (
        <div className="page-container">
            <Helmet>
                <title>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</title>
            </Helmet>
            <div className={classes.rootTwo}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        შემდეგი
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        უკან
                    </Button>
                    }
                />
            </div>
            <div className={classes.root}>
                <div className="main-text">
                    <p>
                        აკადემიკოს ილია ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის N42 საჯარო  სკოლა სპეციალიზებულია. 
                        სკოლის სტრატეგიული მიზნები და მისია მისი პროფილიდან გამომომდინარეობს. 
                        სკოლა აქტიურად ზრუნავს, მოამზადოს ახალგარდა ლიდერები სამოქალაქო საზოგადოების მშენებლობაში წარმატებული 
                        მოღვაწეობისათვის. მხოლოდ სამოქალაქო საზოგადოების პირობებშია შესაძლებელი დემოკრატიული სახელმწიფოს 
                        ფორმირება. სკოლის საქმიანობა ასევე ემსახურება მომავალ თაობებში პატრიოტული გრძნობებისა და სამოქალაქო 
                        ცნობიერების განვითარებას, სათანადო უნარ-ჩვევების გამომუშავებას, პიროვნების პატივისცემასა და ა.შ.
                        სკოლის ძირითადი დანიშნულებაა მოამზადოს  განათლებული ახალგაზრდა 
                        ლიდერები, რომელთაც შეეძლებათ, საბაზრო ეკონომიკის პირობებში, თავიანთი ინტელექტუალური პოტენციალის 
                        თვითრეალიზება და ქვეყნის ეკონომიკური განვითარების პროცესებში წარმატებულად მონაწილეობა.
                    </p>
                </div>
            </div>
            <div className="facebook">
                <div className={classes.facebook}>
                    <h3 style={{color: "white"}}>Facebook პოსტების სანახავად დააჭირეთ ღილაკს:</h3>
                    <br />
                    <Button href="https://www.facebook.com/schoolvekua" className="fb-link" target="_blank" variant="contained" color="primary" ><FacebookIcon style={{fontSize: "38px"}}/></Button>
                </div>
            </div>
            <Covid toggleDark={toggleDark} />
        </div>
    )
}

export default Main
