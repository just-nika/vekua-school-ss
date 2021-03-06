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
import CheckPupilGrade from "../utils/CheckPupil";
import CheckPupil from "../utils/CheckPupil";
import swal from "sweetalert";
import { useReactToPrint } from 'react-to-print';

const CheckGrade = () => {
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
    formState: { errors },
  } = useForm();
  const handleCheck = async () => {
    const idNumberForm = document.getElementById("idNumber").value;
    CheckPupil(idNumberForm).then((response) => {
      if (response.status) {
        setPupilCard(response.data);
      }else {
        swal(`ასეთი რეგისტრირებული მოსწავლე არ არსებობს!`, `მოსწავლე პირადი ნომრით ${idNumberForm} არ არის რეგისტრირებული, თუ თვლით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით სკოლის ნომერზე ან ელ. ფოსტებზე.`, "error")
      }
    });
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  function DatesA() {
    if (forCard.class === 7 || forCard.class === "7") {
      if (forCard.m) {
        if (forCard.ap_m) {
          swal(`2 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, მიიღო ${forCard.m} ქულა. აპელაციის ქულაა ${forCard.ap_m}.`)
          return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
        }else {
          swal(`2 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, მიიღო ${forCard.m} ქულა.`)
          return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
        }
      }else {
        swal(`მოსწავლეს სარეკომენდაციო წერა არ უწერია.`)
        return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
      }
    }else if (forCard.class === 8 || forCard.class === "8" || forCard.class === 9 || forCard.class === "9" || forCard.class === 10 || forCard.class === "10" || forCard.class === 11 || forCard.class === "11") {
      if (forCard.m || forCard.p) {
        if (forCard.m && !forCard.p) {
          if (forCard.ap_m) {
            swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა. მათემატიკის აპელაციის ქულაა ${forCard.ap_m}.`)
            return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
          }else {
            swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა.`)
            return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
          }
        }else if (!forCard.m && forCard.p) {
          if (forCard.ap_p) {
            swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 5 ივლისს ჩატარებულ ფიზიკის სარეკომენდაციო წერაზე მიიღო ${forCard.p} ქულა. ფიზიკის აპელაციის ქულაა ${forCard.ap_p}.`)
            return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
          }else {
            swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.p} ქულა.`)
            return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
          }
        }else if (forCard.m && forCard.p) {
          if (forCard.ap_m || forCard.ap_p) {
            if (forCard.ap_m && forCard.ap_p) {
              swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა, 5 ივლისს ჩატარებულ ფიზიკის სარეკომენდაციო წერის შეფასებაა ${forCard.p} ქულა. მათემატიკის აპელაციის ქულაა ${forCard.ap_m}, ფიზიკის ${forCard.ap_p} ქულა.`)
              return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
            }else if (forCard.ap_m && !forCard.ap_p) {
              swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა, 5 ივლისს ჩატარებულ ფიზიკის სარეკომენდაციო წერის შეფასებაა ${forCard.p} ქულა. მათემატიკის აპელაციის ქულაა ${forCard.ap_m}.`)
              return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
            }else if (!forCard.ap_m && forCard.ap_p) {
              swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა, 5 ივლისს ჩატარებულ ფიზიკის სარეკომენდაციო წერის შეფასებაა ${forCard.p} ქულა. ფიზიკის აპელაციის ქულაა ${forCard.ap_p}.`)
              return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
            }
          }else {
            swal(`მოსწავლემ უნიკალური კოდით ${forCard.class}-${forCard.code}, 4 ივლისს ჩატარებულ მათემატიკის სარეკომენდაციო წერაზე მიიღო ${forCard.m} ქულა, 5 ივლისს ჩატარებულ ფიზიკის სარეკომენდაციო წერის შეფასებაა ${forCard.p} ქულა.`)
            return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
          }
        }
      }else {
        swal(`მოსწავლეს სარეკომენდაციო წერა არ უწერია.`)
        return <h3>ქულის ხილვის გვერდზე დასაბრუნებლად, გთხოვთ გადატვირთოთ გვერდი</h3>
      }
    }
  }
  function ComponentToPrint() {
    return (
        <div>
          <br />
          <DatesA />
        </div>
    );
  }
  return (
    <>
      <div className="container" id="checking">
        <Helmet>
          <title>მოსწავლის ქულის ხილვა</title>
        </Helmet>
        {forCard ? (
          <div>
            <ComponentToPrint />
          </div>
        ) : (
          <>
            <br />
            <h1>
            მიმდინარე წლის 2, 4 და 5 ივლისს ჩატარებული სარეკომენდაციო წერების და აპელაციის შედეგები შეგიძლიათ იხილოთ სკოლის ვებ. გვერდზე <a href="/exams">vekua42.edu.ge</a> მოსწავლის პირადი ნომრის მითითებით.
            </h1>
            <div className="info-text" style={{ textAlign: "start", margin: "0", fontSize: "16px" }}>
              <br />
              <p>სააპელაციო განაცხადის ფორმების შევსება მოხდება სკოლაში 7, 8, 9 და 10 ივლისს, 10 საათიდან 17 საათამდე.</p>
              <br />
              <p><i><b>ნამუშევრის შეფასება და აპელაცია:</b></i></p>
              <ul>
                <li><b>ნამუშევრები გამსწორებლამდე მიდის კოდირებული ფორმით;</b></li>
                <li><b>აპელაციას გაივლის მხოლოდ კოდირებული ნაშრომი მოსწავლისა და მშობლის გარეშე;</b></li>
                <li><b>აპელაციის შედეგები შეგიძლიათ იხილოთ გვერდზე: „<a href="https://vekua42.edu.ge/exams">სარეკომენდაციო წერა</a>“ აპელაციის დასრულებისთანავე.</b></li>
              </ul>
            </div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  შეავსეთ ქვემოთ მოცემული ველი
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
                    className={classes.submit}>
                      მოსწავლის ქულის ხილვა
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

export default CheckGrade;