import React, { useState, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import CheckPupil from "../utils/CheckPupil";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import swal from "sweetalert";
import { useReactToPrint } from 'react-to-print';

const Check = () => {
  const [forCard, setPupilCard] = useState(null);

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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const language = data.language;
    // console.log(language)

    console.log(data);
  };
  const handleCheck = async () => {
    const idNumberForm = document.getElementById("idNumber").value;
    CheckPupil(idNumberForm).then((response) => {
      if (response.status) {
        setPupilCard(response.data);
      }else {
        swal(`ასეთი რეგისტრირებული მოსწავლე არ არსებობს!`, `მოსწავლე პირადი ნომრით ${idNumberForm} არ არის რეგისტრირებული, თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით სარეგისტრაციო ფორმასთან მითითებულ ნომერზე ან ელ. ფოსტებზე.`, "error")
      }
    });
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // const printDocument = () => {
  //   const input = document.getElementById("card");
  //   html2canvas(input, {useCORS: true}).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("landscape");
  //     pdf.addImage(imgData, "JPEG", 0, 0, 270, 100, "FAST");
  //     pdf.save("card.pdf");
  //   });
  // };

  function ComponentToPrint() {
    return (
      <div className="pupil-card" id="card"  ref={componentRef}>
        <p style={{ fontSize: "30px" }} className="card-code">
          <strong>
            {" "}
            {forCard.class}-{forCard.code}
          </strong>
        </p>
        <div className="first">
          <div className="card-logo" style={{width: "33,3%"}}>
            <img src={`${forCard.imgUrl}`} alt={`${forCard.firstName} ${forCard.lastName}`} className="pupil-logo" style={{width: "100%"}} />
          </div>
          <div className="pupil-info">
            <p style={{ textAlign: "start"  }}>
              სახელი: <b>{forCard.firstName}</b>
            </p>
            <p style={{ textAlign: "start" }}>
              გვარი: <b>{forCard.lastName}</b>
            </p>
            <p style={{ textAlign: "start" }}>
              პირადი ნომერი: <b>{forCard.idNumber}</b>
            </p>
            <p style={{ textAlign: "start" }}>
              მამის სახელი: <b>{forCard.FatherName}</b>
            </p>
          </div>
          <div className="card-logo">
            <img src="logo.png" alt="logo" style={{width: "40%"}} />
          </div>
        </div>
        <div className="second">
          <br />
          <i style={{ textAlign: "start" }}>
            ინფორმაცია მისაღები გამოცდების წესებისა და ტესტირების თარიღების
            შესახებ დაიდება სიახლეების ველში.
          </i>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <Helmet>
          <title>რეგისტრირებული მოსწავლის ბარათის მიღება</title>
        </Helmet>
        {forCard ? (
          <div>
            <ComponentToPrint />
            <Button variant="outlined" color="primary" onClick={handlePrint}>ამობეჭვდა</Button>
            <br />
          </div>
        ) : (
          <>
            <h1>
              გადაამოწმეთ რეგისტრირებული მოსწავლე და ჩამოწერეთ მისი ბარათი
            </h1>
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
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit(handleCheck)}>
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
                    autoFocus
                  />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ width: "100%" }}
                    className={classes.submit}
                    onClick={handleCheck}>
                    მოძებნეთ მოსწავლის ბარათი
                  </Button>
                </form>
              </div>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default Check;