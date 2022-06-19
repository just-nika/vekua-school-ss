import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function PassedAwayTeachers() {
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
                    image="./math_one.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ედემ ლაგვილავა
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1966-1968 წწ-ში სწავლობდა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტში მათემატიკის ფაკულტეტზე და 1972 წელს დაამთავრა მოსკოვის ლომონოსოვის სახელობის უნივერსიტეტის მექანიკა-მათემატიკის ფაკულტეტი.
                        ბატონი ედემი თავად გახლავთ 42-ე საჯარო სკოლის კურსდამთავრებული და 1997წ-დან-დღემდე  მუშაობს მათემატიკის მასწავლებლად ამავე სკოლაში.  ედემ ლაგვილავა  გახლავთ  საქართველოს მეცნიერებათა აკადემიის ა.რაზმაძის სახელობის მათემატიკის ინსტიტუტის ასოცირებული მეცნიერ თანამშრომელი. ის მრავალი გამოცემისა და სტატიის ავტორია.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./math_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ოლეგ კვენეტაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1976 წელს დაამთავრა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის მათემატიკის ფაკულტეტი. სპეციალობა - მათემატიკოსი.
                        1982 წლიდან დღემდე ბატონი ოლეგი მუშაობს აკ. ილია ვეკუას სახ. ფიზიკა-მათემატიკის  №42 საჯარო სკოლაში მათემატიკის მასწავლებლად.
                        ოლეგ კვეტენაძეს  2007 წელს   მიენიჭა საქართველოს პრეზიდენტის „ღირსების ორდენი“.
                        2010 წლიდან ის  სერტიფიცირებული მასწავლებლია.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./chemistry_1.png"
                    title="Image title"
                    style={{position: "top !important"}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ეთერ ელოშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1998  წლიდან  დღემდე -  აკადემიკოს ილია  ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის  #42 საჯარო სკოლა, ქიმიის მასწავლებელი;
                        1967-1972 წწ.-ში-  თსუ, ქიმიის ფაკულტეტი , სპეციალობა - ორგანული ქიმია, ქიმიის მასწავლებელი;
                        1996წ.- წლის საუკეთესო მასწავლებლი;
                        2011წ.-  წლის საუკეთესო მასწავლებელი.
                        ეთერ ელოშვილის  მოსწავლეები   ყოველწლიურად წარმატებით  მონაწილეობენ  ეროვნულ ოლიმპიადებში.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}