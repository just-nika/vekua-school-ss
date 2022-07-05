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
    if (forCard.class === 7) {
      return <>
        <p className="test-dates" style={{ textAlign: "start", margin: "0" }}><i><b>მათემატიკა</b></i> სარეკომენდაციო გამოცდის თარიღი: <b>02.07.2022 წ.</b></p> 
        <p className="test-dates" style={{ textAlign: "start", margin: "0" }}>სარეკომენდაციო გამოცდის დაწყების დრო: <b>09:00 სთ.</b> <small>მოსწავლე უნდა გამოცხადდეს გამოცდის დაწყებამდე ნახევარი საათით ადრე!</small> </p>
        <br />
      </>
    }else if (forCard.class === 8 || forCard.class === 9 || forCard.class === 10 || forCard.class === 11) {
      return <>
        <p className="test-dates" style={{ textAlign: "start", margin: "0" }}><i>04.07.2022 <b>მათემატიკა</b></i> {forCard.m}</p> 
        <p className="test-dates" style={{ textAlign: "start", margin: "0" }}><i>05.07.2022 <b>ფიზიკა</b></i> {forCard.p}</p> 
        <p className="test-dates" style={{ textAlign: "start", margin: "0" }}>სარეკომენდაციო გამოცდის დაწყების დრო: <b>09:00 სთ.</b> <small>მოსწავლე უნდა გამოცხადდეს გამოცდის დაწყებამდე ნახევარი საათით ადრე!</small> </p>
        <br />
      </>
    }
  }
  function ComponentToPrint() {
    return (
      <div className="pupil-card" id="card"  ref={componentRef}>
        <p style={{ fontSize: "30px" }} className="card-code">
          <strong>
            {" "}
            <br />
            {forCard.class}-{forCard.code}
          </strong>
        </p>
        <div className="first">
          <div className="card-" style={{backgroundImage: `url(${forCard.imgUrl})`, backgroundSize: "cover", width: "192px", height: "256px", backgroundPosition: "center"}}></div>
          <div className="pupil-info">
            <p style={{ textAlign: "start", margin: "0" }}>
              სახელი: <b>{forCard.firstName}</b>
            </p>
            <p style={{ textAlign: "start", margin: "0" }}>
              გვარი: <b>{forCard.lastName}</b>
            </p>
            <p style={{ textAlign: "start", margin: "0" }}>
              პირადი ნომერი: <b>{forCard.idNumber}</b>
            </p>
            <DatesA />
          </div>
          <div className="card-logo" style={{width: "125px", height: "125px", backgroundImage: `url(logo.png)`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        </div>
        <div className="second">
          <div className="test-laws">
            <h6><strong>პროცედურული მოთხოვნები და პირობები:</strong></h6>
            <div className="small-group" style={{textAlign: "start", fontSize: "12px" }}>
              <p style={{marginBottom: "5px", marginTop: "5px"}}><strong>სარეკომენდაციო წერაზე გამომსვლელი ვალდებულია:</strong></p>
              <ul style={{textAlign: "start", marginBottom: "3px"}}>
                <li>დროულად გამოცხადდეს  სარეგისტრაციო ბარათით;</li>
                <li>ჰქონდეს საწერი კალამი, სახაზავი, ფანქარი, საშლელი;</li>
                <li>დაიცვას სოციალური დისტანცია.</li>
              </ul>
              <p style={{marginBottom: "5px", marginTop: "5px"}}><strong>სარეკომენდაციო წერაზე გამომსვლელს უფლება აქვს:</strong></p>
              <ul style={{textAlign: "start", marginBottom: "3px"}}>
                <li>ტექნიკურ  საკითხებთან  დაკავშირებით კონსულტაციისა და განმარტებისათვის მიმართოს მეთვალყურეს;</li>
                <li>ჰქონდეს წყალი პოლიეთილენის ბოთლით;</li>
              </ul>
              <p style={{marginBottom: "5px", marginTop: "5px"}}><strong>სარეკომენდაციო წერის მონაწილეს ეკრძალება:</strong></p>
              <ul style={{textAlign: "start", marginBottom: "3px"}}>
                <li>თან ჰქონდეს მობილური ტელეფონი;</li>
                <li>გამოიყენოს ნებისმიერი საინფორმაციო წყარო;</li>
                <li>გამოცდის მსვლელობის დროს ვერბალური და არავერბალური კომუნიკაცია სხვა მონაწილესთან.</li>
                <li><strong>VII და VIII კლასებში გადამსვლელებს მათემატიკის გამოცდაზე კალკულატორის გამოყენება</strong> <small><i>(დანარჩენ კლასებში კალკულატორის გამოყენება დაშვებულია)</i></small>;</li>
              </ul>
              <p style={{marginBottom: "5px", marginTop: "5px"}}><strong>ნამუშევრის შეფასება და აპელაცია:</strong></p>
              <ul style={{textAlign: "start", marginBottom: "3px"}}>
                <li>ნამუშევრები გამსწორებლამდე მიდის კოდირებული ფორმით;</li>
                <li>შეფასებები გამოქვეყნდება სკოლის საიტზე სარეკომენდაციო წერიდან 10 კალენდარული დღის განმავლობაში სარეგისტრაციო ბარათის ნომრის შესაბამისად;</li>
                <li>სააპელაციო განაცხადის ფორმების შევსება მოხდება სკოლაში შედეგების გამოქვეყნებიდან ორი სამუშაო დღის განმავლობაში, შემდეგ მისამართზე პეტრე ჩაიკოვსკის N9;</li>
                <li>აპელაციას გაივლის მხოლოდ კოდირებული ნაშრომი მოსწავლისა და მშობლის გარეშე;</li>
                <li>აპელაციის შედეგები გამოქვეყნდება სკოლის ვებგვერდზე <a href="https://vekua42.edu.ge">vekua42.edu.ge</a> აპელაციის დასრულებისთანავე.</li>
              </ul>
              <p style={{textAlign: "center"}}><u style={{textAlign: "center"}}>დამატებითი ინფორმაციისთვის დაგვიკავშირდით სკოლის ტელ. ნომერზე: <a href="tel:0322-99-00-73">(995) 032 2 99 00 73</a></u></p>
              <p style={{textAlign: "center"}}><u style={{textAlign: "center"}}>ან ელექტრონულ ფოსტებზე: <a href="mailto: support@vekua42.edu.ge" rel="noreferrer" target="_blank">support@vekua42.edu.ge</a>; <a href="mailto: tbilisi42@mes.gov.ge" rel="noreferrer" target="_blank">tbilisi42@mes.gov.ge</a>.</u></p>
              <p className="some-warnings" style={{marginBottom: "0"}}><b>გთხოვთ,  ტემპერატურის ან ვირუსის სხვა სიმპტომების არსებობის შემთხვევაში არ გამოცხადდეთ გამოცდაზე.</b></p>
              <p className="some-warnings"><b>სკოლაში დაცულია შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტროს მიერ მოცემული რეკომენდაციები.</b></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container" id="checking">
        {/* <Helmet>
          <title>მოსწავლის ქულის ხილვა</title>
        </Helmet> */}
        {forCard ? (
          <div>
            <ComponentToPrint />
            <Button variant="outlined" color="primary" onClick={handlePrint}>ამობეჭვდა</Button>
          </div>
        ) : (
          <>
            <br />
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
                      მოსწავლის ბარათის ხილვა
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