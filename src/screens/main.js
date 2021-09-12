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
      './chess.jpg',
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
            height: "100%",
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
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
            </div>
            {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{maxHeight: "calc(100vh - 125px)", color: "white"}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner" style={{maxHeight: "calc(100vh - 125px)"}}>
                <div className="carousel-item active" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="1947-2.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლა</h3>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="cos.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>სწავლება</h3>
                        <h6>აქ ყველა პირობაა შექმნილი იმისათვის, რომ მოსწავლეებმა გაიღრმავონ მათემატიკისა და ფიზიკის ცოდნა, დაეუფლონ უმაღლესი მათემატიკის ელემენტებს.</h6>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="carousel.jpg" className="d-block w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 style={{color: "black"}}>ჩვენ გვჯერა!</h3>
                        <h6 style={{color: "white"}}>ჩვენი ქვეყანა გაძლიერდება, როდესაც თითოეულ ახალ ვეკუელს შეეძლება ხელი შეუწყოს ჩვენს კეთილდღეობასა და ინოვაციას მათემატიკისა და მეცნიერების საშუალებებით.</h6>
                    </div>
                </div>
                <div className="carousel-item" style={{maxHeight: "calc(100vh - 125px)"}}>
                    <img src="chess.jpg" className="d-block w-100 h-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>ყოველ დღე</h3>
                        <h6>ჩვენ ვხსნით შესაძლებლობების კარს და ვხელმძღვანელობთ ჩვენს მოსწავლეებს, რადგან ისინი წარმოადგენენ ჩვენი საერთო მომავალს.</h6>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div> */}
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
