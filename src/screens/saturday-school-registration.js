import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {secondaryApp} from '../firebase/firebase.config'
import { useForm } from "react-hook-form";

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
  console.log(time)
  function Selects() {
    if (!age) {
      return <>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label" style={{textAlign: "start"}}>საგანი</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              style={{textAlign: "start"}}
            >
              <MenuItem value="" disabled style={{textAlign: "start"}}>საგნის ასარჩევად ჯერ აირჩიეთ კლასი</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </>
    }else if (age <= 6) {
      console.log(age)
      const HandleCh = (event) => {
        setSubject(event.target.value);
      };
      return <>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth style={{textAlign: "start"}}>
            <InputLabel id="demo-simple-select-label">საგანი</InputLabel>
            <Select
              {...register("subject", { required: true })}
              error={errors.subject}
              id="subject"
              name="subject"
              value={subject}
              onChange={HandleCh}
              style={{textAlign: "start"}}
            >
              <MenuItem value={'მათემატიკა'} style={{textAlign: "start"}}>მათემატიკა</MenuItem>
            </Select>
            {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
          </FormControl>
        </Grid>
      </>
    }else if (age => 6) {
      console.log(age)
      const HandleCh = (event) => {
        setSubject(event.target.value);
      };
      return <>
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
              <MenuItem style={{textAlign: "start"}} value={'მათემატიკა'}>მათემატიკა</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={'ფიზიკა'}>ფიზიკა</MenuItem>
            </Select>
            {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
          </FormControl>
        </Grid>
      </>
    }
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  // var t0 = performance.now()
  const addPupil = async (data) => {
    console.log(data);
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
  
  secondaryApp.firestore().collection(`SSMMT31515`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeThirdOne(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMAN31330`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeThirdTwo(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMEO30900`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeThirdThree(pupils)
    }
  );

  const [SSMMT4, querySizeFourthOne] = React.useState('');
  const [SSMAN4, querySizeFourthTwo] = React.useState('');
  const [SSMEO4, querySizeFourthThree] = React.useState('');
  const [SSMKK4, querySizeFourthFour] = React.useState('');
  const [SSMNM4, querySizefourthFive] = React.useState('');

  secondaryApp.firestore().collection(`SSMMT41315`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFourthOne(pupils)
    }
  );
    secondaryApp.firestore().collection(`SSMAN41530`).get().then(
      async function (querySnapshot) {
        const pupils = querySnapshot.size
      querySizeFourthTwo(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMEO41100`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFourthThree(pupils)
    }
    );
  secondaryApp.firestore().collection(`SSMKK41115`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFourthFour(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNM41530`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizefourthFive(pupils)
    }
  );

  const [SSMNM5, querySizeFifthOne] = React.useState('');
  const [SSMNQ5, querySizeFifthTwo] = React.useState('');
  const [SSMNQ52, querySizeFifthThree] = React.useState('');
  const [SSMMT5, querySizeFifthFour] = React.useState('');
  const [SSMMN5, querySizeFifthFive] = React.useState('');
  const [SSMMN52, querySizeFifthSix] = React.useState('');
  const [SSMAN5, querySizeFifthSeven] = React.useState('');
  const [SSMKK5, querySizeFifthEight] = React.useState('');
  const [SSMEO5, querySizeFifthNine] = React.useState('');

  secondaryApp.firestore().collection(`SSMNM51130`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthOne(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNQ51100`).get().then(
      async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthTwo(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNQ51500`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthThree(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMT51115`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthFour(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMN51100`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthFive(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMN51500`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthSix(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMAN51130`).get().then(
      async function (querySnapshot) {
        const pupils = querySnapshot.size
        querySizeFifthSeven(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMKK51315`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthEight(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMEO51300`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeFifthNine(pupils)
    }
  );

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
  
  secondaryApp.firestore().collection(`SSMNM60930`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthOne(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNM61330`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthOne2(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNQ60900`).get().then(
      async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthTwo(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMNQ61300`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthThree(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMGS61100`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthThirteen(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMGS61400`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthTwelve(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMG61300`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthFour(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMT60915`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthFive(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMN60900`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthSix(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMMN61300`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthSixTwo(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMAN60930`).get().then(
      async function (querySnapshot) {
        const pupils = querySnapshot.size
        querySizeSixthSeven(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMKK60915`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthEight(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMKK61515`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSixthEightTwo(pupils)
    }
  );


  const [SSMGS7, querySizeSeventhOne] = React.useState('');
  const [SSMGS72, querySizeSeventhOne2] = React.useState('');
  const [SSMLM7, querySizeSeventhTwo] = React.useState('');
  
  secondaryApp.firestore().collection(`SSMGS70930`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhOne(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMGS71230`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhOne2(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSMLM70930`).get().then(
      async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhTwo(pupils)
    }
  );

  const [SSPGK7, querySizeSeventhThree] = React.useState('');
  const [SSPGK72, querySizeSeventhThirteen] = React.useState('');
  const [SSPTG7, querySizeSeventhTwelve] = React.useState('');
  const [SSPTG72, querySizeSeventhFour] = React.useState('');

  secondaryApp.firestore().collection(`SSPGK71100`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhThree(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSPGK71230`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhThirteen(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSPTG71100`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhTwelve(pupils)
    }
  );
  secondaryApp.firestore().collection(`SSPTG71230`).get().then(
    async function (querySnapshot) {
      const pupils = querySnapshot.size
      querySizeSeventhFour(pupils)
    }
  );


  const[classSubject, setClassSubject] = React.useState('');

  if (age === 7) {
    if (subject === "მათემატიკა") {
      const class7 = "math7"
      setClassSubject(class7)
    }else if (subject === "ფიზიკა") {
      const class7 = "physics7"
      setClassSubject(class7)
    }   
  }

  // if (age === 8 && subject === "მათემატიკა") {
  //   const class8 = "math8"
  //   setClassSubject(class8)
  // }else if (age === 8 && subject === "ფიზიკა") {
  //   const class8 = "physics8"
  //   setClassSubject(class8)
  // }

  // if (age === 9 && subject === "მათემატიკა") {
  //   const class9 = "math9"
  //   setClassSubject(class9)
  // }else if (age === 9 && subject === "ფიზიკა") {
  //   const class9 = "physics9"
  //   setClassSubject(class9)
  // }

  // if (age === 10 && subject === "მათემატიკა") {
  //   const class10 = "math10"
  //   setClassSubject(class10)
  // }else if (age === 10 && subject === "ფიზიკა") {
  //   const class10 = "physics10"
  //   setClassSubject(class10)
  // }

  // if (age === 11 && subject === "მათემატიკა") {
  //   const class11 = "math11"
  //   setClassSubject(class11)
  // }else if (age === 11 && subject === "ფიზიკა") {
  //   const class11 = "physics11"
  //   setClassSubject(class11)
  // }

  // if (age === 12 && subject === "მათემატიკა") {
  //   const class12 = "math12"
  //   setClassSubject(class12)
  // }else if (age === 12 && subject === "ფიზიკა") {
  //   const class12 = "physics12"
  //   setClassSubject(class12)
  // }
  

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
            <Selects />
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
                  {...register("subject", { required: true })}
                  error={errors.subject}
                  id="subject"
                  name="subject"
                  value={state}
                  onChange={getTime}
                  style={{textAlign: "start"}}
                >
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMT3 >= 26} hidden={age!==3} value={"SSMMT31515"}>მაია თევდორაშვილი - 15:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMAN3 >= 26} hidden={age!==3} value={"SSMAN31330"}>ალექსანდრე ნემსაძე - 13:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMEO3 >= 26} hidden={age!==3} value={"SSMEO30900"}>ეკა ონაშვილი - 09:00</MenuItem>

                  <MenuItem style={{textAlign: "start"}} disabled={SSMMT4 >= 26} hidden={age!==4} value={"SSMMT41315"}>მაია თევდორაშვილი - 13:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMAN4 >= 26} hidden={age!==4} value={"SSMAN41530"}>ალექსანდრე ნემსაძე - 15:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMEO4 >= 26} hidden={age!==4} value={"SSMEO41100"}>ეკა ონაშვილი - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMKK4 >= 26} hidden={age!==4} value={"SSMKK41115"}>კოტე კუპატაძე - 11:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNM4 >= 26} hidden={age!==4} value={"SSMNM41530"}>ნუგზარ მახათაძე - 15:30</MenuItem>

                  <MenuItem style={{textAlign: "start"}} disabled={SSMNM5 >= 26} hidden={age!==5} value={"SSMNM51130"}>ნუგზარ მახათაძე - 11:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNQ5 >= 26} hidden={age!==5} value={"SSMNQ51100"}>ნონა ქუშაშვილი - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNQ52 >= 26} hidden={age!==5} value={"SSMNQ51500"}>ნონა ქუშაშვილი - 15:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMT5 >= 26} hidden={age!==5} value={"SSMMT51115"}>მაია თევდორაშვილი - 11:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMN5 >= 26} hidden={age!==5} value={"SSMMN51100"}>ნანა მეტრეველი - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMN52 >= 26} hidden={age!==5} value={"SSMMN51500"}>ნანა მეტრეველი - 15:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMAN5 >= 26} hidden={age!==5} value={"SSMAN51130"}>ალექსანდრე ნემსაძე - 11:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMKK5 >= 26} hidden={age!==5} value={"SSMKK51315"}>კოტე კუპატაძე - 13:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMEO5 >= 26} hidden={age!==5} value={"SSMEO51300"}>ეკა ონაშვილი - 13:00</MenuItem>

                  <MenuItem style={{textAlign: "start"}} disabled={SSMNM6 >= 26} hidden={age!==6} value={"SSMNM60930"}>ნუგზარ მახათაძე - 09:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNM62 >= 26} hidden={age!==6} value={"SSMNM61330"}>ნუგზარ მახათაძე - 13:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNQ6 >= 26} hidden={age!==6} value={"SSMNQ60900"}>ნონა ქუშაშვილი - 09:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMNQ62 >= 26} hidden={age!==6} value={"SSMNQ61300"}>ნონა ქუშაშვილი - 13:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMGS6 >= 26} hidden={age!==6} value={"SSMGS61100"}>გურამ სიხარულიძე - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMGS62 >= 26} hidden={age!==6} value={"SSMGS61400"}>გურამ სიხარულიძე - 14:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMG6 >= 26} hidden={age!==6} value={"SSMMG61300"}>მედეია გურგენაძე - 13:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMT6 >= 26} hidden={age!==6} value={"SSMMT60915"}>მაია თევდორაშვილი - 09:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMN6 >= 26} hidden={age!==6} value={"SSMMN60900"}>ნანა მეტრეველი - 09:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMMN62 >= 26} hidden={age!==6} value={"SSMMN61300"}>ნანა მეტრეველი - 13:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMAN6 >= 26} hidden={age!==6} value={"SSMAN60930"}>ალექსანდრე ნემსაძე - 09:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMKK6 >= 26} hidden={age!==6} value={"SSMKK60915"}>კოტე კუპატაძე - 09:15</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMKK62 >= 26} hidden={age!==6} value={"SSMKK61515"}>კოტე კუპატაძე - 15:15</MenuItem>


                  <MenuItem style={{textAlign: "start"}} disabled={SSMGS7 >= 26} hidden={classSubject!=="math7"} value={"SSMGS70930"}>გურამ სიხარულიძე - 09:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMGS72 >= 26} hidden={classSubject!=="math7"} value={"SSMGS71230"}>გურამ სიხარულიძე - 12:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSMLM7 >= 26} hidden={classSubject!=="math7"} value={"SSMLM70930"}>ლელა მამულაშვილი - 09:30</MenuItem>

                  <MenuItem style={{textAlign: "start"}} disabled={SSPGK7 >= 26} hidden={classSubject!=="physics7"} value={"SSPGK71100"}>გიორგი კაკაბაძე - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSPGK72 >= 26} hidden={classSubject!=="physics7"} value={"SSPGK71230"}>გიორგი კაკაბაძე - 12:30</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSPTG7 >= 26} hidden={classSubject!=="physics7"} value={"SSPTG71100"}>თემურ გაჩეჩილაძე - 11:00</MenuItem>
                  <MenuItem style={{textAlign: "start"}} disabled={SSPTG72 >= 26} hidden={classSubject!=="physics7"} value={"SSPTG71230"}>თემურ გაჩეჩილაძე - 12:30</MenuItem>
                </Select>
                {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
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