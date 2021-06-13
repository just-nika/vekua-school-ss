import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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

export default function HistoryTeachers() {
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
                    image="./history_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნუგზარ მოლაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        დაბადების თარიღი:  1956 წლის 1 იანვარი;
                        1974-1982წწ.  დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი, ისტორიის ფაკულტეტი, ისტორიკოსი, ისტორიისა და საზოგადოებათმცოდნეობის მასწავლებელი
                        1994 წლიდან  მუშაობს ილია ვეკუას სახელობის თბილისის  N42 ფიზიკა-მათემატიკის საჯარო სკოლაში  ისტორიის  მასწავლებელად. 
                        1997  წლიდან  ის არის თბილისის პედაგოგ - ისტორიკოსთა კლუბი ,,მემკვიდრე,, -პრეზიდენტი.
                        2005-2012  საქართველოს ისტორიის მასწავლებელთა ასოციაციის რესპუბლიკური კონკურსის  :”ქართული სამყარო” - ორგანიზატორი
                        ბატონ  ნუგზარს მიღებული აქვს უამრავი მადლობის სიგელი და სერტიფიკატი:
                        2011-ისტორიის მასწავლებელთა საქართველოს ასოციაციის დიპლომი

                        2003-საქართველოს განათლების სამინისტროს სამცხე-ჯავახეთის მხარის საოლქო სამმართველოს უფროსის მადლობა
                        2002-,,ღირსების ორდენი,,
                        ,,მოსწავლეთა რესპუბლიკური სასწავლო-სემოქმედებითი კონფერენციის საორგანიზაციო კომიტეტის მადლობა
                        2000-განათლების მინისტრის მადლობა  ბრძ.653. 15.12.
                        1997-საქართველოს მოსწავლე ახალგაზრდობის რესპუბლიკური სასახლის სიგელი
                        ივანე ჯავახიშვილის სახელობის პრემია
                        თბილისის მასწავლებელთა დახელოვნებისა და განათლების სისტემის უზრუნველყოფის ინსტიტუტის დირექტორის მადლობა
                        ბრძ. 1/36.
                        მოსწავლეთა რესპუბლიკური სასწავლო-შემოქმედებითი კონფერენციის საორგანიზაციო კომიტეტის მადლობა
                        დედაქალაქის განათლების მუშაკთა პირველი ფორუმის დელეგატი.
                        ბატონი ნუგზარი გახლავთ მრავალი წიგნის, გამოცემის, პუბლიკაციისა და სტატიის ავტორი.
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
                    image="./history_2.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        მანანა გაბუნია
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", maxHeight: "200px", overflowX: "scroll", overflowY: "none"}}>
                        დაბადების თარიღი: 19.01.1956; 
                        1975-1981  ივ. ჯავახიშვილის სახ. თბილისის სახელმწიფო უნივერსიტეტი ისტორიის ფაკულტეტი, ისტორიისა და საზოგადოებათმცოდნეობის მასწავლებელი.
                        1977 წლიდან  მუშაობს ილია ვეკუას სახელობის თბილისის  N42 ფიზიკა-მათემატიკის საჯარო სკოლაში  ისტორიის  მასწავლებელად.  2010-2011წწ ამავე სკოლის საზოგადოებრივ მეცნიერებათა კათედრის გამგე.
                        მიღებული აქვს მონაწილეობა ბევრ წარმატებულ  საზოგადოებრივ პროექტში.
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
                    image="./history_3.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნანა იმერაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        დაბადების თარიღი: 1962 წ. 30 ოქტომბერი; 
                        1979- 1984 წ.წ.   - თბილისის სახელმწიფო უნივერსიტეტი, ისტორიის ფაკულტეტი  ისტორიისა და  საზოგადოებათმცოდნეობის მასწავლებელი
                        1992 წ - საკანდიდატო დისერტაცია, ისტორიის მეცნიერებათა კანდიდატი 2002 წლიდან დღემდე  მუშაობს ილია ვეკუას სახელობის თბილისის  N42 ფიზიკა-მათემატიკის საჯარო სკოლაში ისტორიისა და სამოქალაქო განათლების პედაგოგად.       
                        ქალბატონი ნანა არის მრავალი გამოცემისა თუ პუბლიკაციის ავტორი და თანაავტორი.
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