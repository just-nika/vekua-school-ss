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

export default function LanguageTeachers() {
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
                    image="./language_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მაია გოგიაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        დაამთავრა ი. ჭავჭავაძის სახელობის თბილისის უცხო ენათა სახელმწიფო პedაგოგიური ინსტიტუტის გერმანული ენის ფაკულტეტი, სპეციალობით  გერმანული და ესპანური ენების მასწავლებელი.
                        ქალბატონმა   მაიამ  2006-2011 წლებში  გერმანიის  გოეთეს ინსტიტუტში მოისმინა გერმანული ენის ინტენსიური კურსი (85 აკადემიური საათი).
                        ასევე თბილისის გოეთეს ინსტიტუტში გავლილი აქვს ტრენინგები ( ტესტების შედგენა, შეფასებისა და გერმანული ენის გაკვეთილების დაგეგმარების შესახებ.)
                        ქალბატონი მაია გახლავთ აკად. ილია ვეკუას სახელობის ფიზიკა-მათემატიკური 42-ე საჯარო სკოლაში გერმანული ენის მასწავლებელი. 
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
                    image="./language_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        ვენერა ტურიანი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", maxHeight: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1954-59 წ.წ-ში დაამთავრა თბილისის უცხო ენების პედაგოგიური ინსტიტუტის ინგლისური ენის ფაკულტეტი, სპეციალობა ინგლისური და გერმანული ენების მასწავლებელი.
                        1998-დღემდე აკადემიკოს ილია ვეკუას სახ.42-ე ფიზიკა-მათემატიკის საჯარო სკოლა, ინგლისური ენის მასწავლებელი
                        არის შრომის ვეტერანი და დაჯილდოვებულია სახალხო განათლების სამკერდე ნიშნით.
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
                    image="./language_3.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ლორენა ბაჯელიძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        დაბადების თარიღი: 5.12.1962
                        1985-1990  დაამთავრა სულხან-საბას სახელობის სახელმწიფო პედაგოგიური ინსტიტუტი.  სპეციალობა: რუსული ენის ფილოლოგია 
                        1998-დღემდენ ის  გახლავთ ი.ვეკუას სახელობის თბილისის ფიზიკა-მათემატიკის 42-ე საჯარო სკოლაში რუსული ენის მასწავლებელი. ქალბატონი ლორენას მოსწავლეები არიან რესპუბლიკური ოლიმპიადების გამარჯვებულები რუსულ ენაში.
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
                    image="./language_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        თამარ გაბუნია
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1988-1993წწ-ში დაამთავრა რუსული ენისა და ლიტერატურის ფაკულტეტი, სპეციალობა - რუსული ენისა და ლიტერატურის მასწავლებელი.
                        1994-1997 წლებში მიენიჭა ასპირანტის წოდება „ სლავური ენები“-ში.
                        2003 წწ.-ს გახლდათ ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის აკადემიური დოქტორი. 
                        2007 წლიდან დღემდე გახლავთ ი.ვეკუას სახელობის თბილისის ფიზიკა-მათემატიკის 42-ე საჯარო სკოლაში რუსული ენის  სერტიფიცირებული მასწავლებელი.
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