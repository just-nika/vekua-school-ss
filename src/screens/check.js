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
import CheckPupil from '../utils/CheckPupil';

function Check() {

        const [forCard, setPupilCard] = useState(null);

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
        const handleCheck = async () => {
            const idNumberForm = document.getElementById("idNumber").value;
            CheckPupil(idNumberForm).then(response => {
                if(response.status){
                    setPupilCard(response.data)
                }
            })
        }
        return (
            <>
                <div className="container">
                    <Helmet>
                        <title>რეგისტრირებული მოსწავლის ბარათის მიღება</title>
                    </Helmet>
                    {
                        forCard ? (
                            <p>{forCard.class}-{forCard.id}</p>
                        ) : (
                            <>
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{width: "100%"}}
                                className={classes.submit}
                                onClick={handleCheck}
                            >
                                მოძებნეთ მოსწავლის ბარათი
                            </Button>
                            </form>
                        </div>
                             </Container>       
                        </>
                        )

                    }
                </div>
            </>
        )
}

export default Check;