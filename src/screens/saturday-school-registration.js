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
import {secondaryApp} from '../firebase/firebase.config'
import { useForm } from "react-hook-form";
import CheckPupil from '../utils/CheckSSPupil';
import swal from "sweetalert";

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
}));

function SaturdaySchool() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  // var t0 = performance.now()
  const addPupil = async (data) => {
    CheckPupil(data.id).then((response) => {
      if (response.status) {
        return swal(
          "მოსწავლე უკვე რეგისტრირებულია!",
          "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
          "error"
        );
      } else {
        if (data.code) {
          if (data.code <= 26) {
            if (data.id !== data.lawId) {
              secondaryApp.firestore().collection(`${data.teachers}`).add({
                address: data.address,
                class: data.class,
                fatherFirstName: data.fatherFirstName,
                fatherLastName: data.fatherLastName,
                fatherMobileNumber: data.fatherMobileNumber,
                firstName: data.firstName,
                idNumber: data.id,
                lastName: data.lastName,
                lawId: data.lawId,
                lawLastName: data.lawLastName,
                lawName: data.lawName,
                motherFirstName: data.motherFirstName,
                motherLastName: data.motherLastName,
                motherMobileNumber: data.motherMobileNumber,
                subject: data.subject
              }).then(() => {
                secondaryApp.firestore().collection(`${data.class}`).add({
                  address: data.address,
                  class: data.class,
                  fatherFirstName: data.fatherFirstName,
                  fatherLastName: data.fatherLastName,
                  fatherMobileNumber: data.fatherMobileNumber,
                  firstName: data.firstName,
                  idNumber: data.id,
                  lastName: data.lastName,
                  lawId: data.lawId,
                  lawLastName: data.lawLastName,
                  lawName: data.lawName,
                  motherFirstName: data.motherFirstName,
                  motherLastName: data.motherLastName,
                  motherMobileNumber: data.motherMobileNumber,
                  subject: data.subject,
                  teacherTime: data.teachers
                }).then(() => {
                  swal(
                    "მოსწავლე წარმატებით დარეგისტრირდა!",
                    "",
                    "success"
                  );
                });
              });
            }else {
              return swal(
                "გთხოვთ მიუთითოთ სხვა პირადი ნომერი ხელშეკრულებისთვის!",
                `მშობელის/კანონიერი წარმომადგენლის პირადი ნომერი არ უნდა ემთხვეოდეს მოსწავლის პირად ნომერს.`,
                "warning"
              );
            }
          }else {
            return swal(
              "ამ ჯგუფში მოსწავლე ვერ დარეგისტრირდება!",
              `თქვენს მიერ არჩეული ჯგუფში აღარაა ადგილი, გთხოვთ აარჩიოთ სხვა ჯგუფი.`,
              "warning"
            );
          }
        }else {
          return swal(
            "რეგისტრაცია ვერ განხორციელდა!",
            `ტექნიკური ხარვეზის გამო ჯერ-ჯერობით რეგისტრაცია შეუძლებელია.`,
            "error"
          );
        }
      }
    });
  }
  // var t1 = performance.now()
  // console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
  const [pupilName, setPupilName] = React.useState('');
  const [pupilLastName, setPupilLastName] = React.useState('');
  const [pupilId, setPupilId] = React.useState('');
  const [fatherFirstName, setFatherFirstName] = React.useState('');
  const [fatherLastName, setFatherLastName] = React.useState('');
  const [fatherMobileNumber, setFatherMobileNumber] = React.useState('');
  const [motherFirstName, setMotherFirstName] = React.useState('');
  const [motherLastName, setMotherLastName] = React.useState('');
  const [motherMobileNumber, setMotherMobileNumber] = React.useState('');
  const [lawName, setLawName] = React.useState('');
  const [lawLastName, setLawLastName] = React.useState('');
  const [lawId, setLawId] = React.useState('');
  const [address, setAddress] = React.useState('');

  const PupilName = (event) => { setPupilName(event.target.value) }
  const PupilLastName = (event) => { setPupilLastName(event.target.value) }
  const PupilId = (event) => { setPupilId(event.target.value) }
  const FatherFirstName = (event) => { setFatherFirstName(event.target.value) }
  const FatherLastName = (event) => { setFatherLastName(event.target.value) }
  const FatherMobileNumber = (event) => { setFatherMobileNumber(event.target.value) }
  const MotherFirstName = (event) => { setMotherFirstName(event.target.value) }
  const MotherLastName = (event) => { setMotherLastName(event.target.value) }
  const MotherMobileNumber = (event) => { setMotherMobileNumber(event.target.value) }
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
  
  secondaryApp.firestore().collection(`SSMGS70930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhOne(pupils)});
  secondaryApp.firestore().collection(`SSMGS71230`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhOne2(pupils)});
  secondaryApp.firestore().collection(`SSMLM70930`).get().then( async function (querySnapshot) { const pupils = querySnapshot.size; querySizeSeventhTwo(pupils)});

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
                  <MenuItem style={{textAlign: "start"}} hidden={!age} value={'მათემატიკა'}>მათემატიკა</MenuItem>
                  <MenuItem style={{textAlign: "start"}} hidden={!age || age<7} value={'ფიზიკა'}>ფიზიკა</MenuItem>
                </Select>
                {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                {...register("fatherFirstName", { required: true })}
                error={errors.fatherFirstName}
                helperText={
                  errors.fatherFirstName && "მამის სახელი აუცილებელია"
                }
                onChange={FatherFirstName}
                id="fatherFirstName"
                name="fatherFirstName"
                label="მამის სახელი"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField 
                {...register("fatherLastName", { required: true })}
                error={errors.fatherLastName}
                helperText={
                  errors.fatherLastName && "მამის გვარი აუცილებელია"
                }
                onChange={FatherLastName}
                id="fatherLastName"
                name="fatherLastName"
                label="მამის გვარი"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField 
                {...register("fatherMobileNumber", { required: true, minLength: 9 })}
                error={errors.fatherMobileNumber}
                helperText={
                  errors.fatherMobileNumber && "გთხოვთ შეიყვანეთ სწორი ნომერი"
                }
                onChange={FatherMobileNumber}
                id="fatherMobileNumber"
                name="fatherMobileNumber"
                label="მამის ტელეფონის ნომერი"
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                {...register("motherFirstName", { required: true })}
                error={errors.motherFirstName}
                helperText={
                  errors.motherFirstName && "დედის სახელი აუცილებელია"
                }
                onChange={MotherFirstName}
                id="motherFirstName"
                name="motherFirstName"
                label="დედის სახელი"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                {...register("motherLastName", { required: true })}
                error={errors.motherLastName}
                helperText={
                  errors.motherLastName && "დედის გვარი აუცილებელია"
                }
                onChange={MotherLastName}
                id="motherLastName"
                name="motherLastName"
                label="დედის გვარი"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField 
                {...register("motherMobileNumber", { required: true, minLength: 9 })}
                error={errors.motherMobileNumber}
                helperText={
                  errors.motherMobileNumber && "გთხოვთ შეიყვანეთ სწორი ტელეფონის ნომერი"
                }
                onChange={MotherMobileNumber}
                id="motherMobileNumber" 
                name="motherMobileNumber" 
                label="დედის ტელეფონის ნომერი" 
                type="number"
                fullWidth 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}>
              <p style={{marginTop: "auto", marginBottom: "auto"}}>მშობელი/კანონიერი წარმომადგენელი, რომელთანაც იდება ხელშეკრულება:</p>
            </Grid>
            <Grid item xs={12} sm={6} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}>
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
                label="სახელი"
                fullWidth
                autoComplete=""
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}>
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
                label="გვარი"
                fullWidth
                autoComplete=""
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}
              />
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}>
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
                label="პირადი ნომერი"
                fullWidth
                type="number"
                autoComplete="id"
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}
              />
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}>
              <TextField
                {...register("address", { required: true })}
                error={errors.address}
                helperText={
                  errors.address && "მშობელის/კანონიერი წარმომადგენლის გვარი აუცილებელია"
                }
                onChange={Address}
                required
                id="address"
                name="address"
                label="მისამართი"
                fullWidth
                autoComplete="address"
                hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber}
              />
            </Grid>
            <Grid item xs={12} sm={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber || !lawName || !lawLastName || !lawId || !address}>
              <p style={{marginTop: "auto", marginBottom: "auto"}}>მასწავლებლისა და დროის არჩევა:</p>
            </Grid>
            <Grid item xs={12} hidden={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber || !lawName || !lawLastName || !lawId || !address}>
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
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMMT31515"}><input type="hidden" value={SSMMT3} {...register("code")}/> მაია თევდორაშვილი - 15:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMAN31330"}><input type="hidden" value={SSMAN3} {...register("code")}/> ალექსანდრე ნემსაძე - 13:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO3 >= 26} hidden={age!==3 || subject!=="მათემატიკა"} value={"SSMEO30900"}><input type="hidden" value={SSMEO3} {...register("code")}/> ეკა ონაშვილი - 09:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMMT41315"}><input type="hidden" value={SSMMT4} {...register("code")}/> მაია თევდორაშვილი - 13:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMAN41530"}><input type="hidden" value={SSMAN4} {...register("code")}/> ალექსანდრე ნემსაძე - 15:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMEO41100"}><input type="hidden" value={SSMEO4} {...register("code")}/> ეკა ონაშვილი - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMKK41115"}><input type="hidden" value={SSMKK4} {...register("code")}/> კოტე კუპატაძე - 11:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM4 >= 26} hidden={age!==4 || subject!=="მათემატიკა"} value={"SSMNM41530"}><input type="hidden" value={SSMNM4} {...register("code")}/> ნუგზარ მახათაძე - 15:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMNM51130"}><input type="hidden" value={SSMNM5} {...register("code")}/> ნუგზარ მახათაძე - 11:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNQ5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMNQ51100"}><input type="hidden" value={SSMNQ5} {...register("code")}/> ნონა ქუშაშვილი - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNQ52 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMNQ51500"}><input type="hidden" value={SSMNQ52} {...register("code")}/> ნონა ქუშაშვილი - 15:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMT51115"}><input type="hidden" value={SSMMT5} {...register("code")}/> მაია თევდორაშვილი - 11:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMN51100"}><input type="hidden" value={SSMMN5} {...register("code")}/> ნანა მეტრეველი - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN52 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMMN51500"}><input type="hidden" value={SSMMN52} {...register("code")}/> ნანა მეტრეველი - 15:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMAN51130"}><input type="hidden" value={SSMAN5} {...register("code")}/> ალექსანდრე ნემსაძე - 11:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMKK51315"}><input type="hidden" value={SSMKK5} {...register("code")}/> კოტე კუპატაძე - 13:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEO5 >= 26} hidden={age!==5 || subject!=="მათემატიკა"} value={"SSMEO51300"}><input type="hidden" value={SSMEO5} {...register("code")}/> ეკა ონაშვილი - 13:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMNM60930"}><input type="hidden" value={SSMNM6} {...register("code")}/> ნუგზარ მახათაძე - 09:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNM62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMNM61330"}><input type="hidden" value={SSMNM62} {...register("code")}/> ნუგზარ მახათაძე - 13:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNQ6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMNQ60900"}><input type="hidden" value={SSMNQ6} {...register("code")}/> ნონა ქუშაშვილი - 09:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMNQ62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMNQ61300"}><input type="hidden" value={SSMNQ62} {...register("code")}/> ნონა ქუშაშვილი - 13:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMGS61100"}><input type="hidden" value={SSMGS6} {...register("code")}/> გურამ სიხარულიძე - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMGS61400"}><input type="hidden" value={SSMGS62} {...register("code")}/> გურამ სიხარულიძე - 14:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMG61300"}><input type="hidden" value={SSMMG6} {...register("code")}/> მედეია გურგენაძე - 13:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMT6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMT60915"}><input type="hidden" value={SSMMT6} {...register("code")}/> მაია თევდორაშვილი - 09:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMN60900"}><input type="hidden" value={SSMMN6} {...register("code")}/> ნანა მეტრეველი - 09:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMN62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMMN61300"}><input type="hidden" value={SSMMN62} {...register("code")}/> ნანა მეტრეველი - 13:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMAN6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMAN60930"}><input type="hidden" value={SSMAN6} {...register("code")}/> ალექსანდრე ნემსაძე - 09:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK6 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMKK60915"}><input type="hidden" value={SSMKK6} {...register("code")}/> კოტე კუპატაძე - 09:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMKK62 >= 26} hidden={age!==6 || subject!=="მათემატიკა"} value={"SSMKK61515"}><input type="hidden" value={SSMKK62} {...register("code")}/> კოტე კუპატაძე - 15:15</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS7 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMGS70930"}><input type="hidden" value={SSMGS7} {...register("code")}/> გურამ სიხარულიძე - 09:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMGS72 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMGS71230"}><input type="hidden" value={SSMGS72} {...register("code")}/> გურამ სიხარულიძე - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMLM7 >= 26} hidden={age!==7 || subject!=="მათემატიკა"} value={"SSMLM70930"}><input type="hidden" value={SSMLM7} {...register("code")}/> ლელა მამულაშვილი - 09:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK7 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPGK71100"}><input type="hidden" value={SSPGK7} {...register("code")}/> გიორგი კაკაბაძე - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK72 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPGK71230"}><input type="hidden" value={SSPGK72} {...register("code")}/> გიორგი კაკაბაძე - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG7 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPTG71100"}><input type="hidden" value={SSPTG7} {...register("code")}/> თემურ გაჩეჩილაძე - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG72 >= 26} hidden={age!==7 || subject!=="ფიზიკა"} value={"SSPTG71230"}><input type="hidden" value={SSPTG72} {...register("code")}/> თემურ გაჩეჩილაძე - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG8 >= 26} hidden={age!==8 || subject!=="მათემატიკა"} value={"SSMMG81100"}><input type="hidden" value={SSMMG8} {...register("code")}/> მედეია გურგენაძე - 11:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG82 >= 26} hidden={age!==8 || subject!=="მათემატიკა"} value={"SSMMG81500"}><input type="hidden" value={SSMMG82} {...register("code")}/> მედეია გურგენაძე - 15:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPEKH8 >= 26} hidden={age!==8 || subject!=="ფიზიკა"} value={"SSPEKH81300"}><input type="hidden" value={SSPEKH8} {...register("code")}/> ესმა ხიზანიშვილი - 13:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMMG9 >= 26} hidden={age!==9 || subject!=="მათემატიკა"} value={"SSMMG90900"}><input type="hidden" value={SSMMG9} {...register("code")}/> მედეია გურგენაძე - 09:00</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPNT9 >= 26} hidden={age!==9 || subject!=="ფიზიკა"} value={"SSPNT91030"}><input type="hidden" value={SSPNT9} {...register("code")}/> ნონა თოდუა - 10:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL10 >= 26} hidden={age!==10 || subject!=="მათემატიკა"} value={"SSMEL101230"}><input type="hidden" value={SSMEL10} {...register("code")}/> ედემ ლაგვილავა - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPTG10 >= 26} hidden={age!==10 || subject!=="ფიზიკა"} value={"SSPTG100930"}><input type="hidden" value={SSPTG10} {...register("code")}/> თემურ გაჩეჩილაძე - 09:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL1112 >= 26} hidden={age!==11 || subject!=="მათემატიკა"} value={"SSMEL11121230"}><input type="hidden" value={SSMEL1112} {...register("code")}/> ედემ ლაგვილავა - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK1112 >= 26} hidden={age!==11 || subject!=="ფიზიკა"} value={"SSPGK11120930"}><input type="hidden" value={SSPGK1112} {...register("code")}/> ნონა თოდუა - 10:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSMEL1112 >= 26} hidden={age!==12 || subject!=="მათემატიკა"} value={"SSMEL11121230"}><input type="hidden" value={SSMEL1112} {...register("code")}/> ედემ ლაგვილავა - 12:30</MenuItem>
                    <MenuItem style={{textAlign: "start"}} disabled={SSPGK1112 >= 26} hidden={age!==12 || subject!=="ფიზიკა"} value={"SSPGK11120930"}><input type="hidden" value={SSPGK1112} {...register("code")}/> გიორგი კაკაბაძე - 09:30</MenuItem>
                </Select>
                {errors.teachers && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Button type="submit" variant="contained" fullWidth color="secondary" disabled={!pupilName || !pupilLastName || !pupilId || !age || !fatherFirstName || !fatherLastName || !fatherMobileNumber || !motherFirstName || !motherLastName || !motherMobileNumber || !lawName || !lawLastName || !lawId || !address || !state}>რეგისტრაცია</Button>  
        </form>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default SaturdaySchool;