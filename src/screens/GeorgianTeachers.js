import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function GeorgianTeachers() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ანა სალაყაია
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1997   წლიდან დღემდე  - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლა - ქართული ენისა დალიტერატურის მასწავლებელი;
                        1997წ.- მასწავლებელთა სამეცნიერო-მეთოდური შრომების  კრებულის- ”მთაწმინდა ” რედაქტორი. ( გამოიცა 4 კრებული);
                        2012 წლიდან დღემდე - ბლოგი ”ივერიონი ”- ხელმძღვანელი;
                        1972-1978  წწ.-ში - ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, ფილოლოგიის ფაკულტეტი, სპეციალობა- ფილოლოგი, ქართული ენისა და ლიტერატურის მასწავლებელი;
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        სალომე პატარაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", maxHeight: "200px", overflowX: "scroll"}}>
                        1986  წლიდან დღემდე  - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლა - ქართული ენისა და ლიტერატურის მასწავლებელი;
                        1990 წლიდან დღემდე -  აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლის  პროფკავშირების ორგანიზაციის თავჯდომარე;
                        1972-1976 წწ.-ში   - თელავის იაკობ გოგებაშვილის სახელობის სახელობის პედაგოგიური უნივერსიტეტი , ისტორია-ფილოლოგიის ფაკულტეტი, სპეციალობა- ფილოლოგი, ქართული ენისა და ლიტერატურის მასწავლებელი;
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_3.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მარინე დეკანოიძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1998   წლიდან დღემდე  - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლა - ქართული ენისა დალიტერატურის მასწავლებელი;
                        1995-1998წწ.-ში-თბილისის სახელმწიფო ეკონომიკური ინსტიტუტი-ლექტორი;
                        1990-1996წწ.-ში-ფილოლოგთა ელიტარული ჯგუფის წევრი;
                        1998 წელს-უმაღლესი კატეგორიის მასწავლებლის წოდება;
                        1997-2000წწ.-ში- დიდუბის რაიონის მეთოდური ცენტრის ქართული ენისა და ლიტერატურის მეთოდისტ-ორგანიზატორი;
                        2005-2010წწ.-ში-ეროვნული გამოცდების ქართული ენისა და ლიტერატურის ნამუშევართა გამსწორებელი;
                        1972-1978  წწ.ში - ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, ფილოლოგიის ფაკულტეტი, სპეციალობა- ფილოლოგი, ქართული ენისა და ლიტერატურის მასწავლებელი;
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნანა მეხრიშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2006   წლიდან დღემდე  - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლა - ქართული ენისა და ლიტერატურის მასწავლებელი;
                        2012 წ.- საქართველოს კათოლიკოს- პატრიარქის ,მცხეთა-თბილისის მთავარ-ეპისკოპოსისისა და ბიჭვინთისა და ცხუმ-აფხაზეთის მიტროპოლიტის ილია-II-ის დალოცვა-კურთხევით საქართველოს საპატრიარქოს წმ. ანდრია პირველწოდებულის სახელობის ქართული უნივესიტეტის დიპლომი - ” საუკეთესო მასწავლებელი”;
                        1976-1981წწ.-ში - ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, ფილოლოგიის ფაკულტეტი, სპეციალობა- ფილოლოგი, ქართული ენისა და ლიტერატურის მასწავლებელი;
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ირინა კირვალიძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        test
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                {/* </Card>
              </Grid> */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნინო ნასყიდაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        test
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                {/* </Card>
              </Grid> */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./georgian_7.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნინო ნანობაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2011   წლიდან დღემდე  - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის  N42 საჯარო სკოლა - ქართული ენისა დალიტერატურის მასწავლებელი;
                        1998-2004 წწ.-ში - ივ.ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი (ბაკალავრიატი/მაგისტრატურა) ფილოლოგიის ფაკულტეტი, სპეციალობა- ფილოლოგი, ქართული ენისა და ლიტერატურის მასწავლებელი;
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}