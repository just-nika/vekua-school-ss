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

export default function BiologyTeachers() {
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
                    image="./biology_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        თამარ მელაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2007 წლიდან  დღემდე -  აკადემიკოს ილია  ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის  #42 საჯარო სკოლა, ბიოლოგიის მასწავლებელი;
                        2011 წლიდან დღემდე ქიმია-ბიოლოგიის კათედრის გამგე;
                        1993-1999 წწ.-ში-  თსუ, ბიოლოგიის ფაკულტეტი , სპეციალობა- ბიოლოგი;
                        თამარ მელაძის მოსწავლეები   ყოველწლიურად წარმატებით  მონაწილეობენ  ეროვნულ ოლიმპიადებში.
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
                    image="./biology_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მაია შონია
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", maxHeight: "200px", overflowX: "scroll"}}>
                        2005 წლიდან დღემდე -  აკადემიკოს ილია  ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის  #42 საჯარო სკოლა  ,ბიოლოგიის მასწავლებელი;
                        1992–1999წწ.-ში- თსუ, ბიოლოგიისა და მედიცინის ფაკულტეტი,
                        სპეციალობა- ” ბიოსამედიცინო ეკოლოგიური გენეტიკა” ;
                        1999–2001წწ.-ში- საქართველოს პედაგოგთა კვალიფიკაციისა და გადამზადების ინსტიტუტი, რელიგიის ისტორიის ფაკულტეტი;
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
                    image="./chemistry_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მარინე სალუქვაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2007   წლიდან  დღემდე -  აკადემიკოს ილია  ვეკუას სახელობის  ფიზიკა-მათემატიკის ქალაქ თბილისის  #42 საჯარო სკოლა, ქიმიის მასწავლებელი;
                        1981-1986 წწ.-ში- თსუ, ქიმიის ფაკულტეტი;
                        2006 წ.- გეოფიზიკის ინსტიტუტი -საკანდიტატო დისერტაცია,
                        (ფიზიკა-მათემატიკურ მეცნიერებათა კანდიდატი, დოქტორი);
                        2006 წლიდან მარინე სალუქვაძეს სხვადასხვა სამეცნიერო პერიოდულ და კონფერენციების მასალებში გამოქვეყნებული აქვს 18 სამეცნიერო შრომა.
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