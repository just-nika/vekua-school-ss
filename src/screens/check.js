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

  function ComponentToPrint() {
    return (
      <div className="pupil-card" id="card"  ref={componentRef}>
        <br />
        <p style={{ fontSize: "30px" }} className="card-code">
          <strong>
            {" "}
            {forCard.class}-{forCard.code}
          </strong>
        </p>
        <div className="first">
          <div className="card-" style={{backgroundImage: `url(${forCard.imgUrl})`, backgroundSize: "cover", width: "192px", height: "256px", backgroundPosition: "center"}}></div>
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
          <div className="card-logo" style={{width: "150px", height: "150px", backgroundImage: `url(logo.png)`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        </div>
        <div className="second">
          <br />
          <div className="test-laws">
            <h4><strong>პროცედურული მოთხოვნები და პირობები:</strong></h4>
            <div className="small-group" style={{textAlign: "start"}}>
              <p><strong>გამოცდაზე გამომსვლელი ვალდებულია:</strong></p>
              <ul style={{textAlign: "start"}}>
                <li>დროულად გამოცხადდეს  სარეგისტრაციო ბარათით;</li>
                <li>ჰქონდეს პირბადე, საწერი კალამი, სახაზავი, ფანქარი, საშლელი; </li>
                <li>დაიცვას სოციალური დისტანცია.</li>
              </ul>
              <p><strong>გამოცდაზე გამომსვლელს უფლება აქვს:</strong></p>
              <ul>
                <li>ტექნიკურ  საკითხებთან  დაკავშირებით კონსულტაციისა და განმარტებისათვის მიმართოს მეთვალყურეს;</li>
                <li>ჰქონდეს წყალი პოლიეთილენის ბოთლით;</li>
              </ul>
              <p><strong>გამოცდის მონაწილეს ეკრძალება:</strong></p>
              <ul>
                <li>გამოცდის მსვლელობის პერიოდში მოიხსნას პირბადე;</li>
                <li>თან ჰქონდეს მობილური ტელეფონი;</li>
                <li>გამოიყენოს ნებისმიერი საინფორმაციო წყარო;</li>
                <li>გამოცდის მსვლელობის დროს  ვერბალური და არავერბალური კომუნიკაცია სხვა მონაწილესთან.</li>
                <li><strong>VII კლასში  გადამსვლელებს  მათემატიკის გამოცდაზე კალკულატორის გამოყენება</strong> <small><i>(დანარჩენ კლასებში კალკულატორის გამოყენება დაშვებულია)</i></small>;</li>
              </ul>
              <h4 style={{textAlign: "center"}}><strong>ნამუშევრის შეფასება და აპელაცია:</strong></h4>
              <ul>
                <li>ნამუშევრები გამსწორებლამდე  მიდის კოდირებული ფორმით;</li>
                <li>ინფიცირების რისკის შემცირების მიზნით, საგამოცდო რვეულები შეფასებამდე დამუშავდება და განთავსდება ორდღიან კარანტინში.</li>
                <li>შეფასებები გამოქვეყნდება სკოლის საიტზე  გამოცდიდან 10 კალენდარული დღის განმავლობაში  სარეგისტრაციო ბარათის ნომრის შესაბამისად;</li>
                <li>სააპელაციო განაცხადის ფორმების შევსება მოხდება სკოლაში შედეგების გამოქვეყნებიდან ორი სამუშაო დღის განმავლობაში.</li>
                <li>აპელაციას გაივლის მხოლოდ კოდირებული ნაშრომი მოსწავლისა და მშობლის გარეშე;</li>
                <li>აპელაციის შედეგები გამოქვეყნდება სკოლის ვებგვერდზე <a href="https://vekua42.edu.ge">vekua42.edu.ge</a> აპელაციის დასრულებისთანავე.</li>
              </ul>
              <u>დამატებითი ინფორმაციისთვის დაგვიკავშირდით სკოლის ტელ. ნომერზე: <a href="tel:0322-99-00-73">(995) 032 2 99 00 73</a> ან ელექტრონულ ფოსტებზე: საიტის Admin - <a href="mailto: support@vekua42.edu.ge" rel="noreferrer" target="_blank">support@vekua42.edu.ge</a>; სკოლის IT - <a href="mailto: it@vekua42.edu.ge" rel="noreferrer" target="_blank">it@vekua42.edu.ge</a>.</u>
              <br />
              <p className="some-warnings"><b>გთხოვთ,  ტემპერატურის ან ვირუსის სხვა სიმპტომების არსებობის შემთხვევაში არ გამოცხადდეთ გამოცდაზე.</b></p>
              <p className="some-warnings"><b>სკოლაში დაცულია შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტროს მიერ მოცემული რეკომენდაციები.</b></p>
            </div>
          </div>
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
            <br />
          </div>
        ) : (
          <>
            <br />
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
                    className={classes.submit}
                    onClick={handleCheck}>
                      იხილეთ რეგისტრაციის ბარათი
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