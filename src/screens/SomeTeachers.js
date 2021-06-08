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

export default function SomeTeachers() {
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
                    image="./teacher_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მირანდა კაპანაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        დაბადების თარიღი: 1962წ.  2 თებერვალი; 
                        1979-1986  „თსუ“, გეოგრაფია -გეოლოგიის ფაკულტეტი. სპეციალობა-ფიზ-გეოგრაფი;
                        1987-1989  თბილისის პატენტმცოდნეობოს და ინფორმაციის ინსტიტუტი, სპეციალობა-პატენტმცოდნე;
                        2006-დღემდე  შეფასების ეროვნული ცნეტრის თანამშრომელი მეთვალყურე
                        2009 წლიდან  მუშაობს ილია ვეკუას სახელობის თბილისის  N42 ფიზიკა-მათემატიკის საჯარო სკოლაში  გეოგრაფიის  მასწავლებელად.
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
                    image="./IT_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ქეთევან წერეთელი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1998 წელს დაამთავრა  თბილისის ეროვნული უნივერსიტეტი ფილოლოგიის ფაკულტეტი და მომენიჭა ფილოლოგის, ქართული ენა-ლიტერატურისა და ინგლისური ენის პედაგოგის კვალიფიკაცია.
                        2003-2005 წლებში მუშაობდა კერძო სკოლა-ლიცეუმ „ვერძში“ პედაგოგად.
                        2005 წელს მას მიენიჭა სერტიფიკატი „სსიპ ინფორმაციული ტექნოლოგიების პროფესიული სწავლების ცენტრი“-ს პროგრამების ოპერატორის სასწავლო კურსების წარმატებით დამთავრებისათვის.
                        2009 წლიდან დღემდე ქეთევენ წერეთელი მუშაობს 42-ე საჯარო სკოლაში ინფორმატიკის მასწავლებლად
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