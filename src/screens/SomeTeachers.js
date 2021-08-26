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
                      დაბადების თარიღი: 1986 წელი, 16 აპრილი
                      2003-2007 წ. ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი
                      ჰუმანიტარულ მეცნიერებათა ბაკალავრი, ფილოსოფია-სოციოლოგიის მიმართულება, სპეციალობა: რელიგიათმცოდნე
                      2005-2007 წ. თ.ს.უ პედაგოგიკის ინსტიტუტი, მიღებული კვალიფიკაცია საზოგადოებრივ დისციპლინათა მასწავლებელი.
                      2008-2010 წ. ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი  სამაგისტრო პროგრამა 
                      ჰუმანიტარულ მეცნიერებათა მიმართულებით, განათლების მეცნიერებები, 
                      სპეციალობა: განათლების სფეროს ხელმძღვანელობა და მართვა
                      მიღებული კვალიფიკაცია განათლების ადმინისტრირების მაგისტრი.
                      2015 წლის პროფესიული უნარების გამოცდა.
                      2010 წ. აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის #42 საჯარო სკოლა, სამოქალაქო თავდაცვისა და უსაფრთხოების, პროფესიული ორიენტაციისა და კარიერის დაგეგმვის პედაგოგი, კლასის დამრიგებელი.
                      პროექტები და პროგრამები
                      პროექტი ”ჩემი სვეტიცხოველი”,  კოორდინატორი.
                      სწავლა-სწავლების ხარისხის მართვის კოორდინატორი.
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