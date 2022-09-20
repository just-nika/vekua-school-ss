import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function StudentInfo() {
  const [pupilName, setPupilName] = React.useState('');
  const [pupilLastName, setPupilLastName] = React.useState('');
  const [pupilId, setPupilId] = React.useState('');

  const PupilName = (event) => { 
    setPupilName(event.target.value) 
    localStorage.setItem("StudentFirstName", event.target.value)
  }
  const PupilLastName = (event) => { 
    setPupilLastName(event.target.value) 
    localStorage.setItem("StudentLastName", event.target.value)
  }
  const PupilId = (event) => { 
    setPupilId(event.target.value) 
    localStorage.setItem("StudentPersonalNumber", event.target.value)
  }

  const SubmitStudent = async (data) => {
    localStorage.setItem("StudentFirstName", data.firstName)
    localStorage.setItem("StudentLastName", data.lastName)
    localStorage.setItem("StudentPersonalNumber", data.id)
    localStorage.setItem("StudentConfirmation", 1)
  }
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        მოსწავლის ინფორმაცია
      </Typography>
      <form noValidate onSubmit={handleSubmit(SubmitStudent)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("firstName", { required: true })}
              error={errors.firstName}
              helperText={
                errors.firstName && "მოსწავლის სახელი აუცილებელია"
              }
              onChange={PupilName}
              defaultValue={localStorage.getItem("StudentFirstName")}
              required
              id="firstName"
              name="firstName"
              label="მოსწავლის სახელი"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...register("lastName", { required: true })}
              error={errors.lastName}
              helperText={
                errors.lastName && "მოსწავლის გვარი აუცილებელია"
              }
              onChange={PupilLastName}
              defaultValue={localStorage.getItem("StudentLastName")}
              required
              id="lastName"
              name="lastName"
              label="მოსწავლის გვარი"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12} md={12}>
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
              defaultValue={localStorage.getItem("StudentPersonalNumber")}
              required
              id="personalNumber"
              name="id"
              label="მოსწავლის პირადი ნომერი"
              fullWidth
              type="number"
              autoComplete="id"
            />
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            <SaveIcon/> <span> </span> <span style={{fontSize: "16px"}}>შენახვა</span>
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}