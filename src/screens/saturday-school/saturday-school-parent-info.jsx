import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function ParentInfo() {
    const [mobileNumber, setFatherMobileNumber] = React.useState('');
    const [lawName, setLawName] = React.useState('');
    const [lawLastName, setLawLastName] = React.useState('');
    const [lawId, setLawId] = React.useState('');
    const [address, setAddress] = React.useState('');

    const MobileNumber = (event) => { 
        setFatherMobileNumber(event.target.value) 
        localStorage.setItem("LawMobileNumber", event.target.value)
    }
    const LawName = (event) => { 
        setLawName(event.target.value) 
        localStorage.setItem("LawName", event.target.value)
    }
    const LawLastName = (event) => { 
        setLawLastName(event.target.value) 
        localStorage.setItem("LawLastName", event.target.value)
    }
    const LawId = (event) => { 
        setLawId(event.target.value) 
        localStorage.setItem("LawId", event.target.value)
    }
    const Address = (event) => { 
        setAddress(event.target.value) 
        localStorage.setItem("LawAddress", event.target.value)
    }

    const SubmitParent = async (data) => {
        localStorage.setItem("LawMobileNumber", data.MobileNumber)
        localStorage.setItem("LawName", data.lawName)
        localStorage.setItem("LawLastName", data.lawLastName)
        localStorage.setItem("LawId", data.lawId)
        localStorage.setItem("LawAddress", data.address)
        localStorage.setItem("LawConfirmation", 1)
    }
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                მშობელი/კანონიერი წარმომადგენელი, რომელთანაც იდება ხელშეკრულება:
            </Typography>
            <form noValidate onSubmit={handleSubmit(SubmitParent)} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
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
                            defaultValue={localStorage.getItem("LawName")}
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                            defaultValue={localStorage.getItem("LawLastName")}
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                            defaultValue={localStorage.getItem("LawAddress")}
                            fullWidth
                            autoComplete="address"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                            defaultValue={localStorage.getItem("LawMobileNumber")}
                            type="number"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                            defaultValue={localStorage.getItem("LawId")}
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