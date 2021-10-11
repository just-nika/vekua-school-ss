import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { secondaryApp } from '../firebase/firebase.config'
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import CheckPupil from '../utils/CheckSSPupil';
import LinearProgress from '@material-ui/core/LinearProgress';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function SaturdaySchool() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [time, setTime] = React.useState('');
  const [posts, setPosts] = useState([]);
  const [subjectBase, setSubjectBase] = React.useState('')
  // const [teacherTimeLimit, getTeacherTimeLimit] = React.useState(0)
  const [loading, setLoading] = React.useState(false)


  const [pupilName, setPupilName] = React.useState('');
  const [pupilLastName, setPupilLastName] = React.useState('');
  const [pupilId, setPupilId] = React.useState('');
  const [mobileNumber, setFatherMobileNumber] = React.useState('');
  const [lawName, setLawName] = React.useState('');
  const [lawLastName, setLawLastName] = React.useState('');
  const [lawId, setLawId] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  // var t0 = performance.now()
  const history = useHistory()
  const addPupil = async (data) => {
    if (!loading) {
      setLoading(true);
      CheckPupil(data.id, data.subject).then((response) => {
        if (response.status) {
          setLoading(false);
          return swal(
            "მოსწავლე უკვე რეგისტრირებულია!",
            "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
            "error"
            );
          } else {
          secondaryApp.firestore().collection(`${data.teachers}`).get().then( 
          async function (querySnapshot) { 
          const tTime = querySnapshot.size;
          if (tTime !== 0) {
            if (tTime<=25) {
              if (data.id !== data.lawId) {
                secondaryApp.firestore().collection(`${data.teachers}`).add({
                  firstName: data.firstName,
                  lastName: data.lastName,
                  idNumber: `${data.id}`,
                  class: data.class,
                  subject: data.subject,
                  address: data.address,
                  lawName: data.lawName,
                  lawLastName: data.lawLastName,
                  lawId: `${data.lawId}`,
                  lawMobileNumber: data.MobileNumber,
                  teacherTime: data.teachers,            
                }).then(() => {
                  secondaryApp.firestore().collection(`${data.subject}`).add({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    idNumber: `${data.id}`,
                    class: data.class,
                    subject: data.subject,
                    address: data.address,
                    lawName: data.lawName,
                    lawLastName: data.lawLastName,
                    lawId: `${data.lawId}`,
                    lawMobileNumber: data.MobileNumber,
                    teacherTime: data.teachers,                
                  }).then(() => {
                    secondaryApp.firestore().collection(`${data.class}`).add({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      idNumber: `${data.id}`,
                      class: data.class,
                      subject: data.subject,
                      address: data.address,
                      lawName: data.lawName,
                      lawLastName: data.lawLastName,
                      lawId: `${data.lawId}`,
                      lawMobileNumber: data.MobileNumber,
                      teacherTime: data.teachers,
                    }).then(() => {
                    secondaryApp.firestore().collection(`all`).add({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      idNumber: `${data.id}`,
                      class: data.class,
                      subject: data.subject,
                      address: data.address,
                      lawName: data.lawName,
                      lawLastName: data.lawLastName,
                      lawId: `${data.lawId}`,
                      lawMobileNumber: data.MobileNumber,
                      teacherTime: data.teachers,                  
                    }).then(() => {
                      swal(
                        "მოსწავლე წარმატებით დარეგისტრირდა!",
                        "",
                        "success"
                      );
                      setLoading(false);
                    });
                    });
                  });
                });
              }else {
                setLoading(false);
                return swal(
                  "გთხოვთ მიუთითოთ სხვა პირადი ნომერი ხელშეკრულებისთვის!",
                  `მშობელის/კანონიერი წარმომადგენლის პირადი ნომერი არ უნდა ემთხვეოდეს მოსწავლის პირად ნომერს.`,
                  "warning"
                );
              }
            }else {
              setLoading(false);
              return swal(
                "მოსწავლის ამ კლასში რეგისტრაცია ვერ მოხერხდა!",
                `თქვენს მიერ არჩეული კლასი უკვე სავსეა, გთხოვთ აირჩიოთ სხვა კლასი.`,
                "warning"
              );
            }
          }else {
            setLoading(false);
            return swal(
              "რეგისტრაციის გავლა ჯერ-ჯერობით შეუძლებელია!",
              `გთხოვთ აღადგინოთ ინტერნეტთან კავშირი და სცადოთ თავიდან.`,
              "error"
            );
          }
        });
        }
      })
    }
  }
  // var t1 = performance.now()
  // console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
  

  const PupilName = (event) => { setPupilName(event.target.value) }
  const PupilLastName = (event) => { setPupilLastName(event.target.value) }
  const PupilId = (event) => { setPupilId(event.target.value) }
  const MobileNumber = (event) => { setFatherMobileNumber(event.target.value) }
  const LawName = (event) => { setLawName(event.target.value) }
  const LawLastName = (event) => { setLawLastName(event.target.value) }
  const LawId = (event) => { setLawId(event.target.value) }
  const Address = (event) => { setAddress(event.target.value) }

  const [state, timeState] = React.useState('');

  const getTime = (event) => {
    timeState(event.target.value)
  }

  const [SSMMT3, querySizeThirdOne] = React.useState('');
  const [SSMAN3, querySizeThirdTwo] = React.useState('');
  const [SSMEO3, querySizeThirdThree] = React.useState('');
  
  secondaryApp.firestore().collection(`SSMMT31515`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeThirdOne(pupils) } );
  secondaryApp.firestore().collection(`SSMAN31330`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeThirdTwo(pupils) } );
  secondaryApp.firestore().collection(`SSMEO30900`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeThirdThree(pupils) } );

  const [SSMMT4, querySizeFourthOne] = React.useState('');
  const [SSMAN4, querySizeFourthTwo] = React.useState('');
  const [SSMEO4, querySizeFourthThree] = React.useState('');
  const [SSMKK4, querySizeFourthFour] = React.useState('');
  const [SSMNM4, querySizefourthFive] = React.useState('');

  secondaryApp.firestore().collection(`SSMMT41315`).get().then(async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFourthOne(pupils) } );
  secondaryApp.firestore().collection(`SSMAN41530`).get().then(async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFourthTwo(pupils) } );
  secondaryApp.firestore().collection(`SSMEO41100`).get().then(async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFourthThree(pupils) } );
  secondaryApp.firestore().collection(`SSMKK41115`).get().then(async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFourthFour(pupils) } );
  secondaryApp.firestore().collection(`SSMNM41530`).get().then(async function (querySnapshot) { const pupils = querySnapshot.size; querySizefourthFive(pupils) } );

  const [SSMNM5, querySizeFifthOne] = React.useState('');
  const [SSMNQ5, querySizeFifthTwo] = React.useState('');
  const [SSMNQ52, querySizeFifthThree] = React.useState('');
  const [SSMMT5, querySizeFifthFour] = React.useState('');
  const [SSMMN5, querySizeFifthFive] = React.useState('');
  const [SSMMN52, querySizeFifthSix] = React.useState('');
  const [SSMAN5, querySizeFifthSeven] = React.useState('');
  const [SSMKK5, querySizeFifthEight] = React.useState('');
  const [SSMEO5, querySizeFifthNine] = React.useState('');

  secondaryApp.firestore().collection(`SSMNM51130`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthOne(pupils)});
  secondaryApp.firestore().collection(`SSMNQ51100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthTwo(pupils)});
  secondaryApp.firestore().collection(`SSMNQ51500`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthThree(pupils)});
  secondaryApp.firestore().collection(`SSMMT51115`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthFour(pupils)});
  secondaryApp.firestore().collection(`SSMMN51100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthFive(pupils)});
  secondaryApp.firestore().collection(`SSMMN51500`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthSix(pupils)});
  secondaryApp.firestore().collection(`SSMAN51130`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthSeven(pupils)});
  secondaryApp.firestore().collection(`SSMKK51315`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthEight(pupils)});
  secondaryApp.firestore().collection(`SSMEO51300`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeFifthNine(pupils)});

  const [SSMNM6, querySizeSixthOne] = React.useState('');
  const [SSMNM62, querySizeSixthOne2] = React.useState('');
  const [SSMNQ6, querySizeSixthTwo] = React.useState('');
  const [SSMNQ62, querySizeSixthThree] = React.useState('');
  const [SSMGS6, querySizeSixthThirteen] = React.useState('');
  const [SSMGS62, querySizeSixthTwelve] = React.useState('');
  const [SSMMG6, querySizeSixthFour] = React.useState('');
  const [SSMMT6, querySizeSixthFive] = React.useState('');
  const [SSMMN6, querySizeSixthSix] = React.useState('');
  const [SSMMN62, querySizeSixthSixTwo] = React.useState('');
  const [SSMAN6, querySizeSixthSeven] = React.useState('');
  const [SSMKK6, querySizeSixthEight] = React.useState('');
  const [SSMKK62, querySizeSixthEightTwo] = React.useState('');
  
  secondaryApp.firestore().collection(`SSMNM60930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthOne(pupils)});
  secondaryApp.firestore().collection(`SSMNM61330`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthOne2(pupils)});
  secondaryApp.firestore().collection(`SSMNQ60900`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthTwo(pupils)});
  secondaryApp.firestore().collection(`SSMNQ61300`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthThree(pupils)});
  secondaryApp.firestore().collection(`SSMGS61100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthThirteen(pupils)});
  secondaryApp.firestore().collection(`SSMGS61400`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthTwelve(pupils)});
  secondaryApp.firestore().collection(`SSMMG61300`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthFour(pupils)});
  secondaryApp.firestore().collection(`SSMMT60915`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthFive(pupils)});
  secondaryApp.firestore().collection(`SSMMN60900`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthSix(pupils)});
  secondaryApp.firestore().collection(`SSMMN61300`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthSixTwo(pupils)});
  secondaryApp.firestore().collection(`SSMAN60930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthSeven(pupils)});
  secondaryApp.firestore().collection(`SSMKK60915`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthEight(pupils)});
  secondaryApp.firestore().collection(`SSMKK61515`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSixthEightTwo(pupils)});

  const [SSMGS7, querySizeSeventhOne] = React.useState('');
  const [SSMGS72, querySizeSeventhOne2] = React.useState('');
  const [SSMLM7, querySizeSeventhTwo] = React.useState('');
  const [SSMLM72, querySizeSeventhTwoTwo] = React.useState('');
  
  secondaryApp.firestore().collection(`SSMGS70930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhOne(pupils)});
  secondaryApp.firestore().collection(`SSMGS71230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhOne2(pupils)});
  secondaryApp.firestore().collection(`SSMLM70930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhTwo(pupils)});
  secondaryApp.firestore().collection(`SSMLM709302`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhTwoTwo(pupils)});

  const [SSPGK7, querySizeSeventhThree] = React.useState('');
  const [SSPGK72, querySizeSeventhThirteen] = React.useState('');
  const [SSPTG7, querySizeSeventhTwelve] = React.useState('');
  const [SSPTG72, querySizeSeventhFour] = React.useState('');

  secondaryApp.firestore().collection(`SSPGK71100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhThree(pupils)});
  secondaryApp.firestore().collection(`SSPGK71230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhThirteen(pupils)});
  secondaryApp.firestore().collection(`SSPTG71100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhTwelve(pupils)});
  secondaryApp.firestore().collection(`SSPTG71230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhFour(pupils)});

  const [SSMMG8, querySizeEightThree] = React.useState('');
  const [SSMMG82, querySizeEightThirteen] = React.useState('');
  const [SSPEKH8, querySizeEightTwelve] = React.useState('');

  secondaryApp.firestore().collection(`SSMMG81100`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeEightThree(pupils)});
  secondaryApp.firestore().collection(`SSMMG81500`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeEightThirteen(pupils)});
  secondaryApp.firestore().collection(`SSPEKH81300`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeEightTwelve(pupils)});

  const [SSMMG9, querySizeNinthThirteen] = React.useState('');
  const [SSPNT9, querySizeNinthTwelve] = React.useState('');

  secondaryApp.firestore().collection(`SSMMG90900`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeNinthThirteen(pupils)});
  secondaryApp.firestore().collection(`SSPNT91030`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeNinthTwelve(pupils)});

  const [SSMEL10, querySizeTenthThirteen] = React.useState('');
  const [SSPTG10, querySizeTenthTwelve] = React.useState('');

  secondaryApp.firestore().collection(`SSMEL101230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeTenthThirteen(pupils)});
  secondaryApp.firestore().collection(`SSPTG100930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeTenthTwelve(pupils)});

  const [SSMEL1112, querySizeETThirteen] = React.useState('');
  const [SSPGK1112, querySizeETTwelve] = React.useState('');

  secondaryApp.firestore().collection(`SSMEL11121230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeETThirteen(pupils)});
  secondaryApp.firestore().collection(`SSPGK11120930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeETTwelve(pupils)});

  const HandleCh = (event) => {
    setSubject(event.target.value);
  };
  return (
    <React.Fragment>
      <h2>რეგისტრაცია</h2>
      <Container component="main" maxWidth="md">
        <form noValidate onSubmit={handleSubmit(addPupil)} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName", { required: true })}
                error={errors.firstName}
                helperText={
                  errors.firstName && "მოსწავლის სახელი აუცილებელია"
                }
                onChange={PupilName}
                required
                id="firstName"
                name="firstName"
                label="მოსწავლის სახელი"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("lastName", { required: true })}
                error={errors.lastName}
                helperText={
                  errors.lastName && "მოსწავლის გვარი აუცილებელია"
                }
                onChange={PupilLastName}
                required
                id="lastName"
                name="lastName"
                label="მოსწავლის გვარი"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("id", {
                  required: true,
                  minLength: 11,
                  maxLength: 11,
                })}
                error={errors.id}
                helperText={
                  errors.id && "მოსწავლის პირადი ნომერი უნდა შეიცავდეს 11 ციფრს"
                }
                onChange={PupilId}
                required
                id="personalNumber"
                name="id"
                label="მოსწავლის პირადი ნომერი"
                fullWidth
                type="number"
                autoComplete="id"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth required>
                <InputLabel id="demo-simple-select-label">კლასი</InputLabel>
                <Select
                  {...register("class", { required: true })}
                  error={errors.class}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  required
                  style={{textAlign: "start"}}
                >
                  <MenuItem style={{textAlign: "start"}} value={3}>3 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={4}>4 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={5}>5 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={6}>6 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={7}>7 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={8}>8 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={9}>9 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={10}>10 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={11}>11 კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} value={12}>12 კლასი</MenuItem>
                </Select>
                {errors.class && <FormHelperText>კლასის არჩევა აუცილებელია</FormHelperText>}
                {/* <FormHelperText>Error</FormHelperText> */}
              </FormControl>
            </Grid>
            {/* <Selects /> */}
            <Grid item xs={12}>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-label" style={{textAlign: "start"}}>საგანი</InputLabel>
                <Select
                  {...register("subject", { required: true })}
                  error={errors.subject}
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={HandleCh}
                  style={{textAlign: "start"}}
                >
                  <MenuItem style={{textAlign: "start"}} disabled={!age} hidden={age}>საგნის ასარჩევად აირჩიეთ კლასი</MenuItem>
                  <MenuItem style={{textAlign: "start"}} hidden={!age} value='მათემატიკა'>მათემატიკა</MenuItem>
                  <MenuItem style={{textAlign: "start"}} hidden={!age || age<7} value='ფიზიკა'>ფიზიკა</MenuItem>
                </Select>
                {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <p style={{marginTop: "auto", marginBottom: "auto"}}>მშობელი/კანონიერი წარმომადგენელი, რომელთანაც იდება ხელშეკრულება:</p>
            </Grid>
            <Grid item xs={12} sm={6} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <TextField
                {...register("lawName", { required: true })}
                error={errors.lawName}
                helperText={
                  errors.lawName && "მშობელის/კანონიერი წარმომადგენლის სახელი აუცილებელია"
                }
                onChange={LawName}
                required
                id="lawName"
                name="lawName"
                label="მშობელის/კანონიერი წარმომადგენლის სახელი"
                fullWidth
                autoComplete=""
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}
              />
            </Grid>
            <Grid item xs={12} sm={6} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <TextField
                {...register("lawLastName", { required: true })}
                error={errors.lawLastName}
                helperText={
                  errors.lawLastName && "მშობელის/კანონიერი წარმომადგენლის გვარი აუცილებელია"
                }
                onChange={LawLastName}
                required
                id="lawLastName"
                name="lawLastName"
                label="მშობელის/კანონიერი წარმომადგენლის გვარი"
                fullWidth
                autoComplete=""
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}
              />
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <TextField 
                {...register("MobileNumber", { required: true, minLength: 9 })}
                error={errors.MobileNumber}
                helperText={
                  errors.MobileNumber && "გთხოვთ შეიყვანეთ სწორი ნომერი"
                }
                onChange={MobileNumber}
                id="MobileNumber"
                name="MobileNumber"
                label="მშობელის/კანონიერი წარმომადგენლის ტელეფონის ნომერი"
                type="number"
                fullWidth
                required
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}
              />
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <TextField
                {...register("lawId", { required: true, minLength: 11, maxLength: 11 })}
                error={errors.lawId}
                helperText={
                  errors.lawId && "პირადი ნომერი უნდა შეიცავდეს 11 ციფრს"
                }
                onChange={LawId}
                required
                id="lawId"
                name="lawId"
                label="მშობელის/კანონიერი წარმომადგენლის პირადი ნომერი"
                fullWidth
                type="number"
                autoComplete="id"
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}
              />
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}>
              <TextField
                {...register("address", { required: true })}
                error={errors.address}
                helperText={
                  errors.address && "მშობელის/კანონიერი წარმომადგენლის მისამართი აუცილებელია"
                }
                onChange={Address}
                required
                id="address"
                name="address"
                label="მშობელის/კანონიერი წარმომადგენლის მისამართი"
                fullWidth
                autoComplete="address"
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !subject}
              />
            </Grid>
            <Grid item xs={12} sm={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !lawName || !lawLastName || !lawId || !address}>
              <p style={{marginTop: "auto", marginBottom: "auto"}}>მასწავლებლისა და დროის არჩევა:</p>
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !lawName || !lawLastName || !lawId || !address}>
              <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth hidden={!subject}>
                <InputLabel id="demo-simple-select-label">დროები მასწავლებლების მიხედვით</InputLabel>
                <Select
                  {...register("teachers", { required: true })}
                  error={errors.teachers}
                  id="teachers"
                  name="teachers"
                  value={state}
                  onChange={getTime}
                  style={{textAlign: "start"}}
                >
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMMT31515"}> მაია თევდორაშვილი - 15:15 (კლასში დარჩა {26 - SSMMT3} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMAN31330"}> ალექსანდრე ნემსაძე - 13:30 (კლასში დარჩა {26 - SSMAN3} ადგილი)</MenuItem>
                    {/* <MenuItem style={{textAlign: "start"}} disabled={SSMEO3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMEO30900"}> ეკა ონაშვილი - 09:00 (კლასში დარჩა {26 - SSMEO3} ადგილი)</MenuItem> */}

                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMMT41315"}> მაია თევდორაშვილი - 13:15 (კლასში დარჩა {26 - SSMMT4} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMAN41530"}> ალექსანდრე ნემსაძე - 15:30 (კლასში დარჩა {26 - SSMAN4} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO4 >= 26} hidden={age!==4         || subject!=="მათემატიკა"} value={"SSMEO41100"}> ეკა ონაშვილი - 09:00 (კლასში დარჩა {26 - SSMEO4} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK4 >= 26} hidden={age!==4         || subject!=="მათემატიკა"} value={"SSMKK41115"}> კოტე კუპატაძე - 11:00 (კლასში დარჩა {26 - SSMKK4} ადგილი)</MenuItem>
                    {/* <MenuItem style={{textAlign: "start"}} disabled={SSMNM4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMNM41530"}> ნუგზარ მახათაძე - 15:30 (კლასში დარჩა {26 - SSMNM4} ადგილი)</MenuItem> */}

                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM5 >= 26} hidden={age!==5         || subject!=="მათემატიკა"} value={"SSMNM51130"}> ნუგზარ მახათაძე - 11:00 (კლასში დარჩა {26 - SSMNM5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNQ5 >= 26} hidden={age!==5         || subject!=="მათემატიკა"} value={"SSMNQ51100"}> ნონა ქუშაშვილი - 13:00 (კლასში დარჩა {26 - SSMNQ5} ადგილი)</MenuItem>
                    {/* <MenuItem style={{textAlign: "start"}} disabled={SSMNQ52 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMNQ51500"}> ნონა ქუშაშვილი - 15:00 (კლასში დარჩა {26 - SSMNQ52} ადგილი)</MenuItem> */}
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMT51115"}> მაია თევდორაშვილი - 11:15 (კლასში დარჩა {26 - SSMMT5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMN51100"}> ნანა მეტრეველი - 11:00 (კლასში დარჩა {26 - SSMMN5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN52 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMN51500"}> ნანა მეტრეველი - 15:00 (კლასში დარჩა {26 - SSMMN52} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMAN51130"}> ალექსანდრე ნემსაძე - 11:30 (კლასში დარჩა {26 - SSMAN5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK5 >= 26} hidden={age!==5         || subject!=="მათემატიკა"} value={"SSMKK51315"}> კოტე კუპატაძე - 13:00 (კლასში დარჩა {26 - SSMKK5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO5 >= 26} hidden={age!==5         || subject!=="მათემატიკა"} value={"SSMEO51300"}> ეკა ონაშვილი - 11:00 (კლასში დარჩა {26 - SSMEO5} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG6 >= 26} hidden={age!==5     || subject!=="მათემატიკა"} value={"SSMMG61300"}> მედეია გურგენაძე - 13:00 (კლასში დარჩა {26 - SSMMG6} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM6 >= 26} hidden={age!==6         || subject!=="მათემატიკა"} value={"SSMNM60930"}> ნუგზარ მახათაძე - 09:00 (კლასში დარჩა {26 - SSMNM6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM62 >= 26} hidden={age!==6        || subject!=="მათემატიკა"} value={"SSMNM61330"}> ნუგზარ მახათაძე - 13:00 (კლასში დარჩა {26 - SSMNM62} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMNQ60900"}> ნონა ქუშაშვილი - 09:00 (კლასში დარჩა 0 ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled hidden={age!==6        || subject!=="მათემატიკა"} value={"SSMNQ61300"}> ნონა ქუშაშვილი - 11:00 (კლასში დარჩა 0 ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMGS61100"}> გურამ სიხარულიძე - 11:00 (კლასში დარჩა {26 - SSMGS6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMGS61400"}> გურამ სიხარულიძე - 14:00 (კლასში დარჩა {26 - SSMGS62} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMT60915"}> მაია თევდორაშვილი - 09:15 (კლასში დარჩა {26 - SSMMT6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMN60900"}> ნანა მეტრეველი - 09:00 (კლასში დარჩა {26 - SSMMN6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMN61300"}> ნანა მეტრეველი - 13:00 (კლასში დარჩა {26 - SSMMN62} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMAN60930"}> ალექსანდრე ნემსაძე - 09:30 (კლასში დარჩა {26 - SSMAN6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK6 >= 26} hidden={age!==6         || subject!=="მათემატიკა"} value={"SSMKK60915"}> კოტე კუპატაძე - 09:00 (კლასში დარჩა {26 - SSMKK6} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK62 >= 26} hidden={age!==6        || subject!=="მათემატიკა"} value={"SSMKK61515"}> კოტე კუპატაძე - 15:00 (კლასში დარჩა {26 - SSMKK62} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO3 >= 26} hidden={age!==6                || subject!=="მათემატიკა"} value={"SSMEO30900"}> ეკა ონაშვილი - 13:00 (კლასში დარჩა {26 - SSMEO3} ადგილი)</MenuItem>
                    
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS7 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMGS70930"}> გურამ სიხარულიძე - 09:30 (კლასში დარჩა {26 - SSMGS7} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS72 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMGS71230"}> გურამ სიხარულიძე - 12:30 (კლასში დარჩა {26 - SSMGS72} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMLM7 >= 26} hidden={age!==7         || subject!=="მათემატიკა"} value={"SSMLM70930"}> ლელა მამულაშვილი - 11:00 (კლასში დარჩა {26 - SSMLM7} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMLM72 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMLM709302"}> ლელა მამულაშვილი - 09:30 (კლასში დარჩა {26 - SSMLM72} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK7 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPGK71100"}> გიორგი კაკაბაძე - 11:00 (კლასში დარჩა {26 - SSPGK7} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK72 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPGK71230"}> გიორგი კაკაბაძე - 12:30 (კლასში დარჩა {26 - SSPGK72} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG7 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPTG71100"}> თემურ გაჩეჩილაძე - 11:00 (კლასში დარჩა {26 - SSPTG7} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG72 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPTG71230"}> თემურ გაჩეჩილაძე - 12:30 (კლასში დარჩა {26 - SSPTG72} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG8 >= 26} hidden={age!==8 || subject!=="მათემატიკა"} value={"SSMMG81100"}> მედეია გურგენაძე - 11:00 (კლასში დარჩა {26 - SSMMG8} ადგილი)</MenuItem>
                    {/* <MenuItem style={{textAlign: "start"}} disabled={SSMMG82 >= 26} hidden={age!==8 || subject!=="მათემატიკა"} value={"SSMMG81500"}> მედეია გურგენაძე - 15:00 (კლასში დარჩა {26 - SSMMG82} ადგილი)</MenuItem> */}
                    <MenuItem style={{textAlign: "start"}} disabled={SSPEKH8 >= 26} hidden={age!==8        || subject!=="ფიზიკა"} value={"SSPEKH81300"}> ესმა ხიზანიშვილი - 09:30 (კლასში დარჩა {26 - SSPEKH8} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG9 >= 26} hidden={age!==9 || subject!=="მათემატიკა"} value={"SSMMG90900"}> მედეია გურგენაძე - 09:00 (კლასში დარჩა {26 - SSMMG9} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPNT9 >= 26} hidden={age!==9 || subject!=="ფიზიკა"} value={"SSPNT91030"}> ნონა თოდუა - 10:30 (კლასში დარჩა {26 - SSPNT9} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL10 >= 26} hidden={age!==10       || subject!=="მათემატიკა"} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (კლასში დარჩა {26 - SSMEL10} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG10 >= 26} hidden={age!==10 || subject!=="ფიზიკა"} value={"SSPTG100930"}> თემურ გაჩეჩილაძე - 09:30 (კლასში დარჩა {26 - SSPTG10} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL10 >= 26} hidden={age!==11     || subject!=="მათემატიკა"} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (კლასში დარჩა {26 - SSMEL10} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL10 >= 26} hidden={age!==12     || subject!=="მათემატიკა"} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (კლასში დარჩა {26 - SSMEL10} ადგილი)</MenuItem>

                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK1112 >= 26} hidden={age!==11 || subject!=="ფიზიკა"} value={"SSPGK11120930"}> გიორგი კაკაბაძე - 09:30 (კლასში დარჩა {26 - SSPGK1112} ადგილი)</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK1112 >= 26} hidden={age!==12 || subject!=="ფიზიკა"} value={"SSPGK11120930"}> გიორგი კაკაბაძე - 09:30 (კლასში დარჩა {26 - SSPGK1112} ადგილი)</MenuItem>
                </Select>
                {errors.teachers && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Button type="submit" variant="contained" fullWidth style={{height: "50px"}} color="secondary" disabled={!pupilName || !pupilLastName || !pupilId || !age || !mobileNumber || !subject || !lawName || !lawLastName || !lawId || !address || !state || loading}>{loading && <CircularProgress style={{height: "100%"}} />}&nbsp;&nbsp; რეგისტრაცია</Button>  
          {/* {loading ? "a" : "ბ" } */}
          <br />
          <br />
          {loading && <LinearProgress />}

        </form>
        <br />
        <p style={{textAlign: "start"}}><b>საიტის Admin</b> - <a href="mailto: support@vekua42.edu.ge" rel="noreferrer" target="_blank">support@vekua42.edu.ge</a></p>
        <p style={{textAlign: "start"}}><b>სკოლის IT</b> - <a href="mailto: it@vekua42.edu.ge" rel="noreferrer" target="_blank">it@vekua42.edu.ge</a></p>
      </Container>
    </React.Fragment>
  );
}

export default SaturdaySchool;