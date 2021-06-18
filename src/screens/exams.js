import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  firestore,
  storage,
} from "../firebase/firebase.config";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Covid from "./covid";
import Avatar from "@material-ui/core/Avatar";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import swal from "sweetalert";
import CheckPupil from "../utils/CheckPupil";

function Exams() {
  const [value, setValue] = useState("");

  const selectClass = (e) => setValue(e.target.value);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    input: {
      display: "none",
    },
  }));
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();
  // const onSubmit = (data) => {
  //     console.log(data);
  // };
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const imgUpload = (e) => {
    setImage(e.target.files[0]);
  };
  const fileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const addPupil = async (data) => {
    console.log(data);
    CheckPupil(data.idRequired).then((response) => {
      if (response.status) {
        return swal(
          "მოსწავლე უკვე რეგისტრირებულია!",
          "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
          "error"
        );
      } else {
        firestore
          .collection(`${data.class}`)
          .get()
          .then(async function (querySnapshot) {
            const code = querySnapshot.size;
            const storageRef = storage.ref();
            const fileRef = storageRef.child(data.file[0].name);
            await fileRef.put(data.file[0]);

            const imageRef = storageRef.child(data.img[0].name);
            await imageRef.put(data.img[0]);

            const imgUrl = await imageRef.getDownloadURL();
            const fileUrl = await fileRef.getDownloadURL();

            firestore
              .collection(`${data.class}`)
              .add({
                code: code,
                firstName: data.firstName,
                lastName: data.lastName,
                idNumber: data.idRequired,
                FatherName: data.fatherName,
                ParentFirstName: data.parentName,
                ParentLastName: data.parentLastName,
                oldSchool: data.oldSchool,
                mobileNumber: data.mobileNumber,
                language: data.language,
                class: data.class,
                imgUrl: imgUrl,
                fileUrl: fileUrl,
              })
              .then(() => {
                document.getElementById("firstName").value = "";
                document.getElementById("lastName").value = "";
                document.getElementById("idNumber").value = "";
                document.getElementById("FatherName").value = "";
                document.getElementById("ParentFirstName").value = "";
                document.getElementById("ParentLastName").value = "";
                document.getElementById("oldSchool").value = "";
                document.getElementById("mobileNumber").value = "";
                swal(
                  "თქვენ წარმატებით დარეგისტრირდით!",
                  "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.",
                  "success"
                );
              });
          });
      }
    });
  };
  return (
    <div>
      <Container component="main" maxWidth="md">
        <Helmet>
          <title>მოსწავლის მისაღები გამოცდებისათვის რეგისტრაცია</title>
        </Helmet>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            მოსწავლის მისაღები გამოცდებისათვის რეგისტრაცია
          </Typography>
          <br />
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(addPupil)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", { required: true })}
                  error={errors.firstName}
                  helperText={
                    errors.firstName && "მოსწავლის სახელი აუცილებელია"
                  }
                  autoComplete="fname"
                  name="firstName"
                  variant="standard"
                  required
                  fullWidth
                  id="firstName"
                  label="მოსწავლის სახელი"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", { required: true })}
                  error={errors.lastName}
                  helperText={errors.lastName && "მოსწავლის გვარი აუცილებელია"}
                  variant="standard"
                  required
                  fullWidth
                  id="lastName"
                  label="მოსწავლის გვარი"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("idRequired", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  error={errors.idRequired}
                  helperText={
                    errors.idRequired &&
                    "მოსწავლის პირადი ნომერი უნდა შეიცავდეს 11 ციფრს"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="idNumber"
                  label="მოსწავლის პირადი ნომერი"
                  type="number"
                  name="idRequired"
                  autoComplete="id"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("fatherName", { required: true })}
                  error={errors.fatherName}
                  helperText={
                    errors.fatherName && "მამის სახელის მითითება აუცილებელია"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="FatherName"
                  label="მოსწავლის მამის სახელი"
                  name="fatherName"
                  autoComplete="fatherName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("parentName", { required: true })}
                  error={errors.parentName}
                  helperText={
                    errors.parentName &&
                    "მოსწავლის მშობლის სახელის მითითება აუცილებელია"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="ParentFirstName"
                  label="მოსწავლის მშობლის სახელი"
                  name="parentName"
                  autoComplete="parentName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("parentLastName", { required: true })}
                  error={errors.parentLastName}
                  helperText={
                    errors.parentLastName &&
                    "მოსწავლის მშობლის გვარის მითითება აუცილებელია"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="ParentLastName"
                  label="მოსწავლის მშობლის გვარი"
                  name="parentLastName"
                  autoComplete="parentLastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("oldSchool", { required: true })}
                  error={errors.oldSchool}
                  helperText={
                    errors.oldSchool &&
                    "გთხოვთ მიუთითოთ სკოლა სადაც მოსწავლე ამჟამად სწავლობს"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="oldSchool"
                  label="სკოლა საიდანაც გადმოდიხართ"
                  name="oldSchool"
                  autoComplete="oldSchool"
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <TextField
                  {...register("mobileNumber", { required: true })}
                  error={errors.mobileNumber}
                  helperText={
                    errors.mobileNumber &&
                    "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"
                  }
                  variant="standard"
                  required
                  fullWidth
                  id="mobileNumber"
                  type="number"
                  label="მშობლის ტელეფონის ნომერი"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl} fullWidth required>
                  <InputLabel>მიუთითეთ კლასი, რომელშიც გადადიხართ</InputLabel>
                  <Select
                    {...register("class", { required: true })}
                    error={errors.class}
                    helperText={
                      errors.class &&
                      "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"
                    }
                    id="class"
                    onChange={selectClass}
                    fullWidth
                    required>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl} fullWidth required>
                  <InputLabel>მეორე უცხო ენა, რომელსაც სწავლობთ</InputLabel>
                  <Select
                    // onChange={selectLanguage}
                    {...register("language", { required: true })}
                    error={errors.language}
                    helperText={
                      errors.language && "მეორე უცხო ენის მითითება აუცილებელია"
                    }
                    id="language"
                    fullWidth
                    required>
                    <MenuItem value="რუსული">რუსული</MenuItem>
                    <MenuItem value="გერმანული">გერმანული</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={12} style={{ textAlign: "start" }}>
                <p style={{ textAlign: "start" }}>ატვირთეთ მოსწავლის ფოტო</p>
                <input
                  accept="image/*"
                  className={classes.input}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  {...register("img", { required: true })}
                  required
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
                <p style={{ color: "red", textAlign: "start" }}>
                  {errors.img?.type === "required" &&
                    "მოსწავლის ფოტოს ატვირთვა აუცილებელია მოსწავლის"}
                </p>
              </Grid>
              <Grid item xs={12} lg={12} style={{ textAlign: "start" }}>
                <p style={{ textAlign: "start" }}>
                  ცნობა სკოლიდან მოსწავლის შესახებ{" "}
                  <small>(სკოლის მიერ დამოწმებული საბუთი)</small>
                </p>
                <input
                  accept="image/*"
                  className={classes.input}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  {...register("file", { required: true })}
                  required
                  id="icon-button-files"
                  type="file"
                />
                <label htmlFor="icon-button-files">
                  <IconButton
                    color="primary"
                    aria-label="upload file"
                    component="span">
                    <AttachFileIcon />
                  </IconButton>
                </label>
                <p style={{ color: "red", textAlign: "start" }}>
                  {errors.file?.type === "required" &&
                    "სკოლის მიერ დამოწმებული საბუთის ატვირთვა აუცილებელია"}
                </p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              fullWidth>
              რეგისტრაცია
            </Button>
            <br />
            <p><i>თუ სარეგისტრაციო ფორმაში თვლით ან დაუშვით შეცდომა, გთხოვთ დაგვიკავშირდეთ ქვემოთ მოცემულ ელ. ფოსტებზე ან ნომერზე.</i></p>
            <p style={{textAlign: "start"}}><b>საიტის Admin</b> - <a href="mailto: support@vekua42.edu.ge" rel="noreferrer" target="_blank">support@vekua42.edu.ge</a></p>
            <p style={{textAlign: "start"}}><b>სკოლის IT</b> - <a href="mailto: it@vekua42.edu.ge" rel="noreferrer" target="_blank">it@vekua42.edu.ge</a></p>
          </form>
          <br />
          <p>
            <small>ან გადაამოწმეთ რეგისტრირებული მოსწავლე</small>
          </p>
          <br />
          <Button
            variant="contained"
            fullWidth
            style={{ width: "100%", marginTop: "0" }}
            color="primary"
            href="/check">
            რეგისტრაციის სისწორე
          </Button>
          <br />
        </div>
      </Container>
      <Covid />
    </div>
  );
}

export default Exams;
