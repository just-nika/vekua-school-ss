import React, {Fragment, useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { firebase, auth, firestore, storage } from '../firebase/firebase.config';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Covid from './covid';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "react-helmet";
import swal from 'sweetalert';

function Exams() {
    const [pupils7, setPupils7] = useState([]);
        const [pupils8, setPupils8] = useState([]);
        const [pupils9, setPupils9] = useState([]);
        const [pupils10, setPupils10] = useState([]);
        const [pupils11, setPupils11] = useState([]);
        const [value, setValue ] = useState("");
        
        const selectClass = e => setValue(e.target.value);
        useEffect(() => {
            getPupils7();
            getPupils8();
            getPupils9();
            getPupils10();
            getPupils11();
          }, [])
        const {
            register,
            handleSubmit,
            getValues,
            formState: { errors }
          } = useForm();
        const useStyles = makeStyles((theme) => ({
            paper: {
              marginTop: theme.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            },
            form: {
              width: '100%', // Fix IE 11 issue.
              marginTop: theme.spacing(3),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
            input: {
                display: 'none',
            },
          }));
          const [age, setAge] = React.useState('');

          const handleChange = (event) => {
            setAge(event.target.value);
          };
          const getPupils7 = async () => {
            const data = await firestore.collection("7").get();
            setPupils7(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils8 = async () => {
            const data = await firestore.collection("8").get();
            setPupils8(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils9 = async () => {
            const data = await firestore.collection("9").get();
            setPupils9(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils10 = async () => {
            const data = await firestore.collection("10").get();
            setPupils10(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          const getPupils11 = async () => {
            const data = await firestore.collection("11").get();
            setPupils11(data.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
            })))
          }
          
            const classes = useStyles();
            // const onSubmit = (data) => {
            //     console.log(data);
            // };
            const [image, setImage] = useState(null)
            const [file, setFile] = useState(null)
            const imgUpload = (e) => {
                setImage(e.target.files[0])
            }
            const fileUpload = (e) => {
                setFile(e.target.files[0])
            }
            // var nummers = firestore.collection('10').where('idNumber', '==', `${idNumber}`);
            // nummers.get().then(function (querySnapshot) {
                //     querySnapshot.forEach(function (doc) {
                    //         console.log(doc.id, ' => ', doc.data());
                    //     });
                    // });
            // let query = firestore.collection('10').where('idNumber', '==', `${idNumber}`);

            // firestore.collection("10").where("idNumber", "==", `${idNumber}`)
            // .get()
            // .then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         // doc.data() is never undefined for query doc snapshots
            //         console.log(doc.id, " => ", doc.data());
            //     });
            // })
            // .catch((error) => {
            //     console.log("Error getting documents: ", error);
            // });
            const addPupil = async () => {
                // debugger
                const imageName = document.getElementById("icon-button-file").files[0];
                const fileName = document.getElementById("icon-button-files").files[0];
                pupils7.map((pupil7, index) => {
                    pupils8.map((pupil8, index) => {
                        pupils9.map((pupil9, index) => {
                            pupils10.map((pupil10, index) => {
                                pupils11.map((pupil11, index) => {
                                    const idNumber = document.getElementById("idNumber").value;
                                    const firstName = document.getElementById("firstName").value;
                                    const lastName = document.getElementById("lastName").value;
                                    const FatherName = document.getElementById("FatherName").value;
                                    const ParentFirstName = document.getElementById("ParentFirstName").value;
                                    const ParentLastName = document.getElementById("ParentLastName").value;
                                    const oldSchool = document.getElementById("oldSchool").value;
                                    const mobileNumber = document.getElementById("mobileNumber").value;
                                    const language = getValues("language");
                                    if (value == 7) {
                                        if (pupil7.idNumber == idNumber) {
                                            swal("მოსწავლე უკვე რეგისტრირებულია!", "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.", "error");
                                        }else {
                                            firestore.collection("7").get().then(async function(querySnapshot) {   
                                                const storageRef = storage.ref();
                                                const fileRef = storageRef.child(imageName.name);
                                                await fileRef.put(imageName);
                                                const imageRef = storageRef.child(fileName.name);
                                                await imageRef.put(fileName);
                                                const img = await fileRef.getDownloadURL();
                                                const fileUrl = await imageRef.getDownloadURL();
                                                console.log(querySnapshot.size);
                                                const id = querySnapshot.size; 
                                                firestore.collection("7").add({
                                                    id: id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    idNumber: idNumber,
                                                    FatherName: FatherName,
                                                    ParentFirstName: ParentFirstName,
                                                    ParentLastName: ParentLastName,
                                                    oldSchool: oldSchool,
                                                    mobileNumber: mobileNumber,
                                                    language: language,
                                                    imgUrl: img,
                                                    fileUrl: fileUrl
                                                }).then(() => {
                                                    document.getElementById("firstName").value = "";
                                                    document.getElementById("lastName").value = "";
                                                    document.getElementById("idNumber").value = "";
                                                    document.getElementById("FatherName").value = "";
                                                    document.getElementById("ParentFirstName").value = "";
                                                    document.getElementById("ParentLastName").value = "";
                                                    document.getElementById("oldSchool").value = "";
                                                    document.getElementById("mobileNumber").value = "";
                                                    swal("მოსწავლე წარმატებულად დარეგისტრირდა!", "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.", "success");
                                                })
                                            });
                                        }
                                    }
                                    if (value == 8) {
                                        if (pupil8.idNumber == idNumber) {
                                            swal("მოსწავლე უკვე რეგისტრირებულია!", "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.", "error");
                                        }else {
                                            firestore.collection("8").get().then(async function(querySnapshot) {
                                                const storageRef = storage.ref();
                                                const fileRef = storageRef.child(imageName.name);
                                                await fileRef.put(imageName);
                                                const imageRef = storageRef.child(fileName.name);
                                                await imageRef.put(fileName);
                                                const img = await fileRef.getDownloadURL();
                                                const fileUrl = await imageRef.getDownloadURL();
                                                console.log(querySnapshot.size);
                                                const id = querySnapshot.size; 
                                                firestore.collection("8").add({
                                                    id: id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    idNumber: idNumber,
                                                    FatherName: FatherName,
                                                    ParentFirstName: ParentFirstName,
                                                    ParentLastName: ParentLastName,
                                                    oldSchool: oldSchool,
                                                    mobileNumber: mobileNumber,
                                                    language: language,
                                                    imgUrl: img,
                                                    fileUrl: fileUrl
                                                }).then(() => {
                                                    document.getElementById("firstName").value = "";
                                                    document.getElementById("lastName").value = "";
                                                    document.getElementById("idNumber").value = "";
                                                    document.getElementById("FatherName").value = "";
                                                    document.getElementById("ParentFirstName").value = "";
                                                    document.getElementById("ParentLastName").value = "";
                                                    document.getElementById("oldSchool").value = "";
                                                    document.getElementById("mobileNumber").value = "";
                                                    swal("მოსწავლე წარმატებულად დარეგისტრირდა!", "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.", "success");
                                                })
                                            });
                                        }
                                    }
                                    if (value == 9) {
                                        if (pupil9.idNumber == idNumber) {
                                            swal("მოსწავლე უკვე რეგისტრირებულია!", "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.", "error");
                                        }else {
                                            firestore.collection("9").get().then(async function(querySnapshot) {   
                                                const storageRef = storage.ref();
                                                const fileRef = storageRef.child(imageName.name);
                                                await fileRef.put(imageName);
                                                const imageRef = storageRef.child(fileName.name);
                                                await imageRef.put(fileName);
                                                const img = await fileRef.getDownloadURL();
                                                const fileUrl = await imageRef.getDownloadURL();
                                                console.log(querySnapshot.size);
                                                const id = querySnapshot.size; 
                                                firestore.collection("9").add({
                                                    id: id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    idNumber: idNumber,
                                                    FatherName: FatherName,
                                                    ParentFirstName: ParentFirstName,
                                                    ParentLastName: ParentLastName,
                                                    oldSchool: oldSchool,
                                                    mobileNumber: mobileNumber,
                                                    language: language,
                                                    imgUrl: img,
                                                    fileUrl: fileUrl
                                                }).then(() => {
                                                    document.getElementById("firstName").value = "";
                                                    document.getElementById("lastName").value = "";
                                                    document.getElementById("idNumber").value = "";
                                                    document.getElementById("FatherName").value = "";
                                                    document.getElementById("ParentFirstName").value = "";
                                                    document.getElementById("ParentLastName").value = "";
                                                    document.getElementById("oldSchool").value = "";
                                                    document.getElementById("mobileNumber").value = "";
                                                    swal("მოსწავლე წარმატებულად დარეგისტრირდა!", "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.", "success");
                                                })
                                            });
                                        }
                                    }
                                    if (value == 10) {
                                        if (pupil10.idNumber == idNumber) {
                                            swal("მოსწავლე უკვე რეგისტრირებულია!", "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.", "error");
                                        } else {
                                            firestore.collection("10").get().then(async function(querySnapshot) {   
                                                const storageRef = storage.ref();
                                                const fileRef = storageRef.child(imageName.name);
                                                await fileRef.put(imageName);
                                                const imageRef = storageRef.child(fileName.name);
                                                await imageRef.put(fileName);
                                                const img = await fileRef.getDownloadURL();
                                                const fileUrl = await imageRef.getDownloadURL();
                                                console.log(querySnapshot.size);
                                                const id = querySnapshot.size; 
                                                firestore.collection("10").add({
                                                    id: id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    idNumber: idNumber,
                                                    FatherName: FatherName,
                                                    ParentFirstName: ParentFirstName,
                                                    ParentLastName: ParentLastName,
                                                    oldSchool: oldSchool,
                                                    mobileNumber: mobileNumber,
                                                    language: language,
                                                    imgUrl: img,
                                                    fileUrl: fileUrl
                                                }).then(() => {
                                                    document.getElementById("firstName").value = "";
                                                    document.getElementById("lastName").value = "";
                                                    document.getElementById("idNumber").value = "";
                                                    document.getElementById("FatherName").value = "";
                                                    document.getElementById("ParentFirstName").value = "";
                                                    document.getElementById("ParentLastName").value = "";
                                                    document.getElementById("oldSchool").value = "";
                                                    document.getElementById("mobileNumber").value = "";
                                                    swal("მოსწავლე წარმატებულად დარეგისტრირდა!", "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.", "success");
                                                })
                                            });
                                        }
                                    }
                                    if (value == 11) {
                                        if (pupil11.idNumber == idNumber) {
                                            swal("მოსწავლე უკვე რეგისტრირებულია!", "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.", "error");
                                        }else {
                                            firestore.collection("11").get().then(async function(querySnapshot) {   
                                                const storageRef = storage.ref();
                                                const fileRef = storageRef.child(imageName.name);
                                                await fileRef.put(imageName);
                                                const imageRef = storageRef.child(fileName.name);
                                                await imageRef.put(fileName);
                                                const img = await fileRef.getDownloadURL();
                                                const fileUrl = await imageRef.getDownloadURL();
                                                console.log(querySnapshot.size);
                                                const id = querySnapshot.size; 
                                                firestore.collection("11").add({
                                                    id: id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    idNumber: idNumber,
                                                    FatherName: FatherName,
                                                    ParentFirstName: ParentFirstName,
                                                    ParentLastName: ParentLastName,
                                                    oldSchool: oldSchool,
                                                    mobileNumber: mobileNumber,
                                                    language: language,
                                                    imgUrl: img,
                                                    fileUrl: fileUrl
                                                }).then(() => {
                                                    document.getElementById("firstName").value = "";
                                                    document.getElementById("lastName").value = "";
                                                    document.getElementById("idNumber").value = "";
                                                    document.getElementById("FatherName").value = "";
                                                    document.getElementById("ParentFirstName").value = "";
                                                    document.getElementById("ParentLastName").value = "";
                                                    document.getElementById("oldSchool").value = "";
                                                    document.getElementById("mobileNumber").value = "";
                                                    swal("მოსწავლე წარმატებულად დარეგისტრირდა!", "მოსწავლემ რეგისტრაცია წარმატებულად გაიარა, გთხოვთ ქვემოთ გადაამოწმოთ რეგისტრირებული მოსწავლე.", "success");
                                                })
                                            });
                                        }
                                    }
                                })
                            })
                        })
                    })
                })
            }
            // const handleUpload = async () => {
                // const storageRef = storage.ref();
                // const fileRef = storageRef.child(image.name);
                // await fileRef.put(image);
                // firestore.collection("albums").add({
                //     name: image.name,
                //     desc: document.getElementById("postDesc").value,
                //     url: await fileRef.getDownloadURL()
                // })
            // }
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
                  <form className={classes.form} noValidate onSubmit={handleSubmit(addPupil)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            {...register("firstName", { required: true })}
                            error={errors.firstName}
                            helperText={errors.firstName && "მოსწავლის სახელი აუცილებელია"}
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
                            {...register("idRequired", { required: true, minLength: 11, maxLength: 11 })}
                            error={errors.idRequired}
                            helperText={errors.idRequired && "მოსწავლის პირადი ნომერი უნდა შეიცავდეს 11 ციფრს"}
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
                            helperText={errors.fatherName && "მამის სახელის მითითება აუცილებელია"}
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
                            helperText={errors.parentName && "მოსწავლის მშობლის სახელის მითითება აუცილებელია"}
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
                            helperText={errors.parentLastName && "მოსწავლის მშობლის გვარის მითითება აუცილებელია"}
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
                            helperText={errors.oldSchool && "გთხოვთ მიუთითოთ სკოლა სადაც მოსწავლე ამჟამად სწავლობს"}
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
                            helperText={errors.mobileNumber && "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"}
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
                                helperText={errors.class && "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"}
                                id="class"
                                onChange={selectClass}
                                fullWidth
                                required
                            >
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                            </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl className={classes.formControl} fullWidth required >
                            <InputLabel>მეორე უცხო ენა, რომელსაც სწავლობთ</InputLabel>
                            <Select
                                // onChange={selectLanguage}
                                {...register("language", { required: true })}
                                error={errors.language}
                                helperText={errors.language && "მეორე უცხო ენის მითითება აუცილებელია"}
                                id="language"
                                fullWidth
                                required
                            >
                                <MenuItem value="რუსული">რუსული</MenuItem>
                                <MenuItem value="გერმანული">გერმანული</MenuItem>
                            </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} lg={12} style={{textAlign: "start"}}>
                        <p style={{textAlign: "start"}}>ატვირთეთ მოსწავლის ფოტო</p>
                        <input accept="image/*" className={classes.input} onChange={(e)=>{setImage(e.target.files[0])}} {...register("img", { required: true })} required id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                        </label>
                        <p style={{color: "red", textAlign: "start"}}>{errors.img?.type === 'required' && "მოსწავლის ფოტოს ატვირთვა აუცილებელია მოსწავლის"}</p>
                      </Grid>
                      <Grid item xs={12} lg={12} style={{textAlign: "start"}}>
                        <p style={{textAlign: "start"}}>ცნობა სკოლიდან მოსწავლის შესახებ <small>(სკოლის მიერ დამოწმებული საბუთი)</small></p>
                        <input accept="image/*" className={classes.input} onChange={(e)=>{setImage(e.target.files[0])}} {...register("file", { required: true })} required id="icon-button-files" type="file" />
                        <label htmlFor="icon-button-files">
                            <IconButton color="primary" aria-label="upload file" component="span">
                            <AttachFileIcon />
                            </IconButton>
                        </label>
                        <p style={{color: "red", textAlign: "start"}}>{errors.file?.type === 'required' && "სკოლის მიერ დამოწმებული საბუთის ატვირთვა აუცილებელია"}</p>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                      fullWidth
                    >
                      რეგისტრაცია
                    </Button>
                  </form>
                <br />
                <p><small>ან გადაამოწმეთ რეგისტრირებული მოსწავლე</small></p>
                <br />
                <Button variant="contained" fullWidth style={{width: "100%", marginTop: "0"}} color="primary" href="/check">
                    რეგისტრაციის გადამოწმება
                </Button>
                <br />
                </div>
              </Container>
                <Covid />
                </div>
            );
}

export default Exams
