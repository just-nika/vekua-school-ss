import React, {Fragment, useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { firebase, auth, firestore, storage } from '../firebase/firebase.config';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NewsAdmin from './newsAdmin';
import Exams from './exams';
import ResponsiveHeader from './responsiveHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Hidden from '@material-ui/core/Hidden';
import Fade from '@material-ui/core/Fade';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Covid from './covid';
import Footer from './footer';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "react-helmet";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import swal from 'sweetalert';

function Check() {
    const [pupils7, setPupils7] = useState([]);
        const [pupils8, setPupils8] = useState([]);
        const [pupils9, setPupils9] = useState([]);
        const [pupils10, setPupils10] = useState([]);
        const [pupils11, setPupils11] = useState([]);
        const [forCard, setPupilCard] = useState([]);
        useEffect(() => {
            getPupils7();
            getPupils8();
            getPupils9();
            getPupils10();
            getPupils11();
            pupilCard();
        }, [])
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
              marginTop: theme.spacing(1),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
          }));
          const classes = useStyles();
          const {
            register,
            handleSubmit,
            getValues,
            formState: { errors }
          } = useForm();
          const onSubmit = (data) => {
            const language = data.language;
            // console.log(language)

            console.log(data);
        };
        const getPupils7 = async () => {
            const data = await firestore.collection("7").get();
            setPupils7(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
          }
          const getPupils8 = async () => {
            const data = await firestore.collection("8").get();
            setPupils8(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
          }
          const getPupils9 = async () => {
            const data = await firestore.collection("9").get();
            setPupils9(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
          }
          const getPupils10 = async () => {
            const data = await firestore.collection("10").get();
            setPupils10(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
          }
          const getPupils11 = async () => {
            const data = await firestore.collection("11").get();
            setPupils11(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
          }
        const pupilClass = getValues("class");
        const pupilCard = async () => {
            const data = await firestore.collection(`${pupilClass}`).get();
            setPupilCard(data.docs.map(doc => ({
              ...doc.data(),
              docId: doc.id
            })))
        }
        const checkPupil = async () => {
            const idNumberForm = document.getElementById("idNumber").value;
            pupils7.map((pupil7, index) => {
                pupils8.map((pupil8, index) => {
                    pupils9.map((pupil9, index) => {
                        pupils10.map((pupil10, index) => {
                            pupils11.map((pupil11, index) => {
                                if (pupilClass == 7) {
                                    if (pupil7.idNumber = idNumberForm) {
                                        swal("მოსწავლე წარმატებულად მოიძებნა!", "გთხოვთ იხილით თანდართული მოსწავლის ტესტირების ბარათი, რომელიც აუცილებელია თან იქონიოს მოსწავლემ მისაღების გამოცდის წერისას.", "success");
                                        document.getElementById("idNumber").value = "";
                                    }else {
                                        swal("ასეთი მოსწავლე ვერ მოიძება!", "თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ამ გვერდზე მოცემულ ნომერზე ან ელ. ფოსტაზე.", "error");
                                        document.getElementById("idNumber").value = "";
                                    }
                                }
                                if (pupilClass == 8) {
                                    if (pupil8.idNumber = idNumberForm) {
                                        swal("მოსწავლე წარმატებულად მოიძებნა!", "გთხოვთ იხილით თანდართული მოსწავლის ტესტირების ბარათი, რომელიც აუცილებელია თან იქონიოს მოსწავლემ მისაღების გამოცდის წერისას.", "success");
                                        document.getElementById("idNumber").value = "";
                                    }else {
                                        swal("ასეთი მოსწავლე ვერ მოიძება!", "თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ამ გვერდზე მოცემულ ნომერზე ან ელ. ფოსტაზე.", "error");
                                        document.getElementById("idNumber").value = "";
                                    }
                                }
                                if (pupilClass == 9) {
                                    if (pupil9.idNumber = idNumberForm) {
                                        swal("მოსწავლე წარმატებულად მოიძებნა!", "გთხოვთ იხილით თანდართული მოსწავლის ტესტირების ბარათი, რომელიც აუცილებელია თან იქონიოს მოსწავლემ მისაღების გამოცდის წერისას.", "success");
                                        document.getElementById("idNumber").value = "";
                                    }else {
                                        swal("ასეთი მოსწავლე ვერ მოიძება!", "თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ამ გვერდზე მოცემულ ნომერზე ან ელ. ფოსტაზე.", "error");
                                        document.getElementById("idNumber").value = "";
                                    }
                                }
                                if (pupilClass == 10) {
                                    if (pupil10.idNumber == idNumberForm) {
                                        swal("მოსწავლე წარმატებულად მოიძებნა!", "გთხოვთ იხილით თანდართული მოსწავლის ტესტირების ბარათი, რომელიც აუცილებელია თან იქონიოს მოსწავლემ მისაღების გამოცდის წერისას.", "success");
                                        document.getElementById("idNumber").value = "";
                                    }else {
                                        swal("ასეთი მოსწავლე ვერ მოიძება!", "თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ამ გვერდზე მოცემულ ნომერზე ან ელ. ფოსტაზე.", "error");
                                        document.getElementById("idNumber").value = "";
                                    }
                                }
                                if (pupilClass == 11) {
                                    if (pupil11.idNumber = idNumberForm) {
                                        swal("მოსწავლე წარმატებულად მოიძებნა!", "გთხოვთ იხილით თანდართული მოსწავლის ტესტირების ბარათი, რომელიც აუცილებელია თან იქონიოს მოსწავლემ მისაღების გამოცდის წერისას.", "success");
                                        document.getElementById("idNumber").value = "";
                                    }else {
                                        swal("ასეთი მოსწავლე ვერ მოიძება!", "თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ამ გვერდზე მოცემულ ნომერზე ან ელ. ფოსტაზე.", "error");
                                        document.getElementById("idNumber").value = "";
                                    }
                                }
                            })
                        })
                    })
                })
            })
        }
        return (
            <>
                <div className="container">
                    <Helmet>
                        <title>რეგისტრირებული მოსწავლის ბარათის მიღება</title>
                    </Helmet>
                    <br />
                    <h1>გადაამოწმეთ რეგისტრირებული მოსწავლე და ჩამოწერეთ მისი ბარათი</h1>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                შეავსეთ ქვემოთ მოცემული ველები
                            </Typography>
                            <br />
                            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
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
                                    autoFocus
                                />
                                <br />
                                <br />
                                <Grid item xs={12}>
                                <FormControl className={classes.formControl} fullWidth required>
                                    <InputLabel>მიუთითეთ კლასი, რომელშიც გადადიხართ</InputLabel>
                                    <Select
                                        {...register("class", { required: true })}
                                        error={errors.class}
                                        helperText={errors.class && "მშობლის ტელეფონის ნომრის მითითება აუცილებელია"}
                                        id="class"
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{width: "100%"}}
                                className={classes.submit}
                                onClick={checkPupil}
                            >
                                მოძებნეთ მოსწავლის ბარათი
                            </Button>
                            </form>
                        </div>
                    </Container>
                    <br />
                    <br />
                    <h2>მოსწავლის ბარათი:</h2>
                    <br />
                    <br />
                    {
                        forCard.map((card, index) => {
                            const idNumber = document.getElementById("idNumber").value;
                            if (card.idNumber == idNumber) {
                                return (
                                    <div className="pupil-card">
                                        <p>{card.id}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </>
        )
}

export default Check;
