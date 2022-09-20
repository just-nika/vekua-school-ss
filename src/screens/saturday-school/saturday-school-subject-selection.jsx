import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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


export default function SubjectSelection() {
    const [subject, setSubject] = React.useState('');
    const [StudentClass, setStudentClass] = React.useState('');
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const HandleCh = (event) => {
        setSubject(event.target.value);
    };
    const handleChange = (event) => {
        setStudentClass(event.target.value);
    };
    const SaveStartInfo = async (data) => {
        localStorage.setItem("StudentClass", data.class);
        setStudentClass(localStorage.getItem("StudentClass"));
        localStorage.setItem("subject", data.subject);
        setSubject(localStorage.getItem("subject"));
        localStorage.setItem("SubjectConfirmation", 1);
    }
    React.useEffect(() => {
        if (!localStorage.getItem("StudentClass") && !localStorage.getItem("subject")) {
            setStudentClass('');
            setSubject('');
        }else if (!localStorage.getItem("StudentClass") && localStorage.getItem("subject")) {
            setSubject(localStorage.getItem("subject"));
            setStudentClass('');
        }else if (localStorage.getItem("StudentClass") && localStorage.getItem("subject")) {
            setSubject(localStorage.getItem("subject"));
            setStudentClass(localStorage.getItem("StudentClass"));
        }
    }, []);
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                აირჩიეთ საგანი
            </Typography>
            <form noValidate onSubmit={handleSubmit(SaveStartInfo)} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth required>
                            <InputLabel id="demo-simple-select-label">კლასი</InputLabel>
                            <Select
                            {...register("class", { required: true })}
                            error={errors.class}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={StudentClass}
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
                            {errors.class && <FormHelperText style={{color: "red"}}>კლასის არჩევა აუცილებელია</FormHelperText>}
                            {/* <FormHelperText>Error</FormHelperText> */}
                        </FormControl>
                    </Grid>
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
                            required
                            style={{textAlign: "start"}}
                            >
                                <MenuItem style={{textAlign: "start"}} disabled={!StudentClass} hidden={StudentClass}>საგნის ასარჩევად აირჩიეთ კლასი</MenuItem>
                                <MenuItem style={{textAlign: "start"}} hidden={!StudentClass} value='მათემატიკა'>მათემატიკა</MenuItem>
                                <MenuItem style={{textAlign: "start"}} hidden={!StudentClass || StudentClass<7} value='ფიზიკა'>ფიზიკა</MenuItem>
                                <MenuItem style={{textAlign: "start"}} hidden={!StudentClass || StudentClass!=6} value='წერისა და კითხვის სტრატეგიები'>წერისა და კითხვის სტრატეგიები</MenuItem>
                            </Select>
                            {errors.class && <FormHelperText style={{color: "red"}}>საგნის არჩევა აუცილებელია</FormHelperText>}
                        </FormControl>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    <SaveIcon/> <span> </span> <span style={{fontSize: "16px"}}>შენახვა</span>
                </Button>
            </form>
            <br />
            <br />
            <br />
            <br />
        </React.Fragment>
    );
}