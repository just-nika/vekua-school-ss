import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ParentInfo from './saturday-school-parent-info';
import StudentInfo from './saturday-school-student-info';
import TeacherInfo from './saturday-school-teacher-info';
import SubjectSelection from './saturday-school-subject-selection';
import { LocalHospitalTwoTone } from '@material-ui/icons';
import swal from 'sweetalert';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { firestore } from '../../firebase/firebase.config';
import { green } from '@material-ui/core/colors';
import CheckPupil from '../../utils/CheckSSPupil';
import qs from 'qs'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "95%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const steps = ['საგნის არჩევა', 'კანონიერი წარმომადგენლის ინფორმაცია', 'მოსწავლის ინფორმაცია', 'რეგისტრაციის დასრულება'];

function getStepContent(step) {
  switch (step) {
    case 0:
        return <SubjectSelection/>;
    case 1:
        return <ParentInfo />;
    case 2:
        return <StudentInfo />;
    case 3:
        return <TeacherInfo />
    default:
        throw new Error('Unknown step');
  }
}

export default function SaturdaySchoolRegistrationNewVersion() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const handleNext = () => {
    if (activeStep == 0) {
      if (!localStorage.getItem("subject") || !localStorage.getItem("StudentClass")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად აუცილებელია შეავსოთ ყველა ველი", "error");
      }else if (!localStorage.getItem("SubjectConfirmation")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად გთხოვთ შეინახოთ ცვლილება", "warning");
      }else {
        setActiveStep(activeStep + 1);
      }
    }
    if (activeStep == 1) {
      if (!localStorage.getItem("LawMobileNumber") || !localStorage.getItem("LawName") || !localStorage.getItem("LawLastName") || !localStorage.getItem("LawId") || !localStorage.getItem("LawAddress")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად აუცილებელია შეავსოთ ყველა ველი", "error");
      }else if (!localStorage.getItem("LawConfirmation")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად გთხოვთ შეინახოთ ცვლილება", "warning");
      }else {
        setActiveStep(activeStep + 1);
      }
    }
    if (activeStep == 2) {
      if (!localStorage.getItem("StudentFirstName") || !localStorage.getItem("StudentLastName") || !localStorage.getItem("StudentPersonalNumber")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად აუცილებელია შეავსოთ ყველა ველი", "error");
      }else if (!localStorage.getItem("StudentConfirmation")) {
        swal("შემდეგ გვერდზე ვერ გადახვალთ", "შემდეგ გვერდზე გადასასვლელად გთხოვთ შეინახოთ ცვლილება", "warning");
      }else {
        setActiveStep(activeStep + 1);
      }
    }if (activeStep == 3) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  }; 
  const classes = useStyles();
  const Registration = async () => {
    setLoading(true);
    setSuccess(false);
    CheckPupil(localStorage.getItem("StudentPersonalNumber")).then((response) => {
      if (response.status) {
        setLoading(false);
        localStorage.removeItem("StudentFirstName")
        localStorage.removeItem("StudentLastName")
        localStorage.removeItem("StudentPersonalNumber")
        localStorage.removeItem("LawName")
        localStorage.removeItem("LawLastName")
        localStorage.removeItem("LawId")
        localStorage.removeItem("LawMobileNumber")
        localStorage.removeItem("LawAddress")
        localStorage.removeItem("StudentClass")
        localStorage.removeItem("subject")
        localStorage.removeItem("TeacherName")
        localStorage.removeItem("TeacherTime")
        localStorage.removeItem("StudentEmail")
        localStorage.removeItem("LawEmail")
        return swal(
          "მოსწავლე უკვე რეგისტრირებულია!",
          "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია ამ საგანზე, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
          "error"
        );

      }else {
        if (!loading) {
          if (localStorage.getItem("TeacherName") && localStorage.getItem("TeacherTime")) {
            firestore.collection("projects").get().then(async function (querySnapshot) {
              const code = querySnapshot.size;
              if (code == 0) {
                setLoading(false);
                localStorage.removeItem("StudentFirstName")
                localStorage.removeItem("StudentLastName")
                localStorage.removeItem("StudentPersonalNumber")
                localStorage.removeItem("LawName")
                localStorage.removeItem("LawLastName")
                localStorage.removeItem("LawId")
                localStorage.removeItem("LawMobileNumber")
                localStorage.removeItem("LawAddress")
                localStorage.removeItem("StudentClass")
                localStorage.removeItem("subject")
                localStorage.removeItem("TeacherName")
                localStorage.removeItem("TeacherTime")
                localStorage.removeItem("StudentEmail")
                localStorage.removeItem("LawEmail")
                return swal(
                  "წარუმატებელი რეგისტრაცია",
                  "თქვენი მონაცემების დამუშავება ვერ მოხერხდა, გთხოვთ შეამოწმოთ ინტერნეტის კავშირი.",
                  "warning"
                );
              }else {
                firestore.collection("saturday-school").where("group", "==", `${localStorage.getItem("group")}`).get().then(async function (querySnapshot) {
                  const code = querySnapshot.size;
                  if (code >= 25) {
                    localStorage.removeItem("StudentFirstName")
                    localStorage.removeItem("StudentLastName")
                    localStorage.removeItem("StudentPersonalNumber")
                    localStorage.removeItem("LawName")
                    localStorage.removeItem("LawLastName")
                    localStorage.removeItem("LawId")
                    localStorage.removeItem("LawMobileNumber")
                    localStorage.removeItem("LawAddress")
                    localStorage.removeItem("StudentClass")
                    localStorage.removeItem("subject")
                    localStorage.removeItem("TeacherName")
                    localStorage.removeItem("TeacherTime")
                    localStorage.removeItem("StudentEmail")
                    localStorage.removeItem("LawEmail")
                    return swal(
                      "ამ ჯგუფში რეგისტრაცია ვერ განხორციელდა!",
                      "მოსწავლე ამ ჯგუფში ვერ დარეგისტრირდება ადგილების არ ქონის გამო.",
                      "error"
                      );
                  }else {
                    firestore.collection(`saturday-school`).add({
                      StudentFirstName: `${localStorage.getItem("StudentFirstName")}`,
                      StudentLastName: `${localStorage.getItem("StudentLastName")}`,
                      StudentPersonalNumber: `${localStorage.getItem("StudentPersonalNumber")}`,
                      StudentEmail: `${localStorage.getItem("StudentEmail")}`,
                      LawName: `${localStorage.getItem("LawName")}`,
                      LawLastName: `${localStorage.getItem("LawLastName")}`,
                      LawId: `${localStorage.getItem("LawId")}`,
                      LawMobileNumber: `${localStorage.getItem("LawMobileNumber")}`,
                      LawAddress: `${localStorage.getItem("LawAddress")}`,
                      LawEmail: `${localStorage.getItem("LawEmail")}`,
                      StudentClass: `${localStorage.getItem("StudentClass")}`,
                      subject: `${localStorage.getItem("subject")}`,
                      TeacherName: `${localStorage.getItem("TeacherName")}`,
                      TeacherTime: `${localStorage.getItem("TeacherTime")}`,
                      group: `${localStorage.getItem("TeacherName")} - ${localStorage.getItem("TeacherTime")}`,
                    })
                    .then(() => {
                      firestore.collection(`${localStorage.getItem("subject")}`).add({
                        StudentFirstName: `${localStorage.getItem("StudentFirstName")}`,
                        StudentLastName: `${localStorage.getItem("StudentLastName")}`,
                        StudentPersonalNumber: `${localStorage.getItem("StudentPersonalNumber")}`,
                        StudentEmail: `${localStorage.getItem("StudentEmail")}`,
                        LawName: `${localStorage.getItem("LawName")}`,
                        LawLastName: `${localStorage.getItem("LawLastName")}`,
                        LawId: `${localStorage.getItem("LawId")}`,
                        LawMobileNumber: `${localStorage.getItem("LawMobileNumber")}`,
                        LawAddress: `${localStorage.getItem("LawAddress")}`,
                        LawEmail: localStorage.getItem("LawEmail"),
                        StudentClass: `${localStorage.getItem("StudentClass")}`,
                        subject: `${localStorage.getItem("subject")}`,
                        TeacherName: `${localStorage.getItem("TeacherName")}`,
                        TeacherTime: `${localStorage.getItem("TeacherTime")}`,
                        group: `${localStorage.getItem("TeacherName")} - ${localStorage.getItem("TeacherTime")}`,
                      })
                      .then(() => {
                        const text = `მოგესალმებით, ${localStorage.getItem("StudentFirstName")} ${localStorage.getItem("StudentLastName")} წარმატებით დარეგისტრირდა სსიპ აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის N 42 საჯარო სკოლის საშაბათო სკოლაში. საგანი - ${localStorage.getItem("subject")}, მასწავლებელი - ${localStorage.getItem("TeacherName")} - ${localStorage.getItem("TeacherTime")}. გისურვებთ წარმატებებს!`;
                        axios.post('https://smsoffice.ge/api/v2/send/', qs.stringify({
                          key: '514f29a0cc3448a79bf32d1ee005bddb',
                          destination: `995${localStorage.getItem("LawMobileNumber")}`,
                          sender: `VEKUA`,
                          content: `${text}`,
                          urgent: true
                        }))
                        setActiveStep(activeStep + 1)
                        localStorage.removeItem("StudentFirstName")
                        localStorage.removeItem("StudentLastName")
                        localStorage.removeItem("StudentPersonalNumber")
                        localStorage.removeItem("LawName")
                        localStorage.removeItem("LawLastName")
                        localStorage.removeItem("LawId")
                        localStorage.removeItem("LawMobileNumber")
                        localStorage.removeItem("LawAddress")
                        localStorage.removeItem("StudentClass")
                        localStorage.removeItem("subject")
                        localStorage.removeItem("TeacherName")
                        localStorage.removeItem("TeacherTime")
                        localStorage.removeItem("StudentEmail")
                        localStorage.removeItem("LawEmail")
                        setLoading(false);
                        setSuccess(true);
                      })
                    })
                  }
                });
              }
            });
          }else {
            return swal(
              "წარუმატებელი რეგისტრაცია!",
              "გთხოვთ შეავსოთ მასწავლებლის ინფორმაცია და სცადოთ თავიდან",
              "warning"
            );
          }
        }
      }
    });
  }
  const StepValidation = () => {
    if (activeStep == 0) {
      return <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>შემდეგი</Button>
    }else if (activeStep == 1) {
      return <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>შემდეგი</Button>
    }else if (activeStep == 2) {
      return <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>შემდეგი</Button>
    }else if (activeStep == 3) {
      return <>
      <Button variant="contained" color="primary" onClick={Registration} className={classes.button} disabled={loading}>რეგისტრაცია</Button>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </>
    }else {
      return <Button variant="contained" color="primary" disabled className={classes.button}>შემდეგი</Button>
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            საშაბათო სკოლაში რეგისტრაცია
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  მადლობას გიხდით რეგისტრაციისთვის
                </Typography>
                <Typography variant="subtitle1">
                  დასტურის მესიჯი მოგივათ თქვენს მიერ მითითებულ კანონიერი წარმომადგენლის ტელეფონის ნომერზე.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {/* {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      უკან
                    </Button>
                  )} */}
                  <StepValidation/>
                  {/* {activeStep === steps.length - 1 ? <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>რეგისტრაცია</Button> : <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>შემდეგი</Button>} */}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}