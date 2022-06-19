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

export default function Teachers() {
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
                    image="./math_3.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნუგზარ მახათაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1976 წელს დაამთავრა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, მექანიკა-მათემატიკის ფაკულტეტი. სპეციალობა -მათემატიკოსი.
                        1986-1990 წწ. დაამთავრა ასპირანტურა- საქ. მეცნიერებათა აკადემიის გამოთვლითი მათემატიკის ინსტიტუტი. 
                        1991 წლიდან დღემდე არის მათემატიკის მასწავლებელი 42-ე საჯარო  სკოლაში.
                        1994-1997 წწ-ში დაიმსახურა „სოროსის მასწავლებლის“ პრემია, ასევე, საქართველოს განათლების სამინისტროსა და საქართველოს მათემატიკოსთა კავშირის მადლობა.
                        ბატონი ნუგზარი გახლავთ  სხვადასხვა გამოცემისა და სტატიის ავტორი.
                        2010 წელს მას მიენიჭა სერტიფიცირებული მასწავლებლის წოდება.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
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
                    image="./math_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        გურამ სიხარულიძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1971-1976 წწ-ში დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი, მექანიკა-მათემატიკის ფაკულტეტი, სპეციალობა-მათემატიკოსი.
                        1988 წლიდან დღემდე არის აკად. ი. ვეკუას სახელობის ფიზიკა-მათემატიკის 42-ე საჯარო სკოლაში მათემატიკის მასწავლებელი.
                        2007 წელს მას  მიენიჭა საქართველოს პრეზიდენტის „ღირსების ორდენი“. 
                        2012 წლიდან გურამ სიხარულიძესმიენიჭა   სერტიფიცირებული მასწავლებლის წოდება.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
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
                    image="./math_5.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნონა ქუშაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1967-1974 წლებში დაამთავრა   ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეეტი   მექანიკა-მათემატიკის ფაკულტეტი, სპეციალობა-მათემატიკოსი.
                        1979 წლიდან დღემდე ქალბატონი ნონა  მუშაობს აკ. ილია ვეკუას სახ. ფიზიკა-მათემატიკის  42-ე საჯარო სკოლაში მათემატიკის მასწავლებლად.
                        მას  2007 წელს   მიენიჭა საქართველოს პრეზიდენტის „ღირსების ორდენი“.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
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
                    image="./math_6.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მედეა გურგენიძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1976-1981 წწ-ში დაამთავრა ი.ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი - მექანიკა მათემატიკის ფაკულტეტი, სპეციალობა- მათმატიკოსი.
                        1982 წლიდან  დღემდე  ის მუშაობს აკად. ი.ვეკუას სახელობის ფიზიკა მათემატიკის  N42 საჯარო სკოლაში მათემატიკის მასწავლებლად. 
                        2007-2011 წწ-ში ქალბატონი მედეა  იყო ქ.თბილისის N138 საჯარო სკოლის დირექტორი.
                        2010 წელს მას მიენიჭა სერტიფიცირებული მასწავლებლის წოდება. ამჟამად ქალბატონი მედეა მე-12 საჯარო სკოლის დირექტორია.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
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
                    image="./math_8.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        მაია თევდორაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1986-1991 წლებში დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი მექანიკა-მათემატიკის ფაკულტეტი, სპეციალობა – მათემატიკოსი. 
                        1991-1994 წლებში დაამთავრა მექანიკა-მათემატიკის ფაკულტეტის ასპირანტურა ფუნქციონალური ანალიზის სპეციალობით.
                        2009 წლიდან  ქალბატონო მაია აკად. ილია ვეკუას სახელობის ფიზიკა- მათემატიკური 42-ე საჯარო სკოლაში მუშაობს მათემატიკის მასწავლებლად. 2010 წლიდან კი ილიას სახელმწიფო უნივერსიტეტში კითხულობს ლექციების კურსს ბაკალავრიატსა და მაგისტრატურაში ამავე წლიდან ილიას სახელმწიფო უნივერსიტეტთან არსებული მასწავლებელთა პროფესიული მხარდაჭერის ცენტრის ტრენერია. 
                        2010 წელს ქალბატონ მაიას მიენიჭა სერტიფიცირებული მასწავლებლის წოდება.
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
                    image="./math_9.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ლელა მამულაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1990-1995 წწ-ში წარჩინებით დაამთავრა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, მექანიკა-მათემატიკის  ფაკულტეტი, სპეციალობა- მათემატიკოსი.  1995-1998 წლებში სწავლობდა ასპირანტურაში დიფერენციალურ და ინტეგრალურ განტოლება განყოფილებაზე.
                        ქალბატონი ლელა თავად გახლავთ №42 საჯარო სკოლის კურსადმთავრებული და 1993 წლიდან   დღემდე მუშაობს მათემატიკის მასწავლებლად   ამავე   სკოლაში.
                        1995-1997 წწ-ში  მან მიიღო პრემია „სოროსის მასწავლებელი“.  
                        2007 წელს   მიენიჭა საქართველოს პრეზიდენტის „ღირსების ორდენი“. 
                        2011-2012 სასაწავლო წელს ქალბქტონ ლელას პედაგოგთა სასერტიფიკაციო გამოცდების წარმატებით ჩაბარების შედეგად დაენიშნა 1000 ლარიანი ხელფასი.
                        2011 წელს საქართველოს მეცნიერებისა დაგანათლების სამინისტროს მიერ გაგზავნილი იყო ინგლისში, მათემატიკის მასწავლებელთა ტრენინგზე. 
                        2010-2015  წლებში ჩააბარა სასერტიფიკაციო გამოცდები ფიზიკაში, ინგლისურ და რუსულ ენაში და მიენიჭა ამ საგნებში პედაგოგის უფლება.
                        2010,2011 წლებში დაჯილდოვებული იყო კავკასიის უნივერსიტეტის მიერ (CU) მისი მოსწავლეების უნივერსიტეტის ოლიმპიადაში წარმატებულად მონაწილეობისათვის.
                        ლელა არის ასევე სამივე სააფეხურის მათემატიკის მასწავლებელთა გზამკვლევის თანაავტორი.
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
                    image="./math_10.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        კოტე კუპატაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        1993-1999 წწ-ში დაამთავრა ქუთაისის აკ. წერეთლის სახელობის სახელმწიფო უნივერსიტეტი, ფიზიკა მათემატიკის ფაკულტეტი, მათემატიკის სპეციალობა.
                        2002-2005წწ-ში დაამთვრა ნიკო მუსხელიშვილის სახელობის გამოთვლითი მათემატიკის ინსტიტუტი, ასპირანტურის განყოფილება.
                        2008 წლიდან დღემდე კოტე კუპატაძე  არის აკადემიკოს ილია ვეკუას სახელობის 42-ე ფიზიკა-მათემატიკის საჯარო სკოლის მათემატიკის მასწავლებელი. ასევე, საქართველოს ტექნიკური უნივერსიტეტის ნიკო მუსხელიშვილის გამოთვლითი მათემატიკის ინსტიტუტის მეცნიერ თანამშრომელი.  
                        2011 წელს კოტე კუპატაძეს მიენიჭა სერტიფიცირებული   მასწავლებლის წოდება.
                        მისი მოსწავლეები წარმატებით მონაწილეობენ რესპუბლიკურ და საერთაშორისო ტურნირებსა და ოლიმპიადებში.
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
                    image="./math_12.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ეკატერინე ონაშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                        2006 წელს  დაამთავრა თბილისის სახელმწიფო უნივერსიტეტის ზუსტ და საბუნებისმეტყველო მეცნიერებათა  ფაკულტეტი, სპეციალობა -მათემატოკოსი;
                        2012-2014 წლებში დაამთავრა ილიას უნივერსიტეტის მაგისტრატურა სპეციალობით-„ თანამედროვე მათემატიკის ძირითადი პარადიგმები“ 
                        2007-2011 წლებში  მუშაობდა 138-ე საჯარო სკოლაში მათემატიკის მასწავლებლად;
                        2011-2014 წლებში  კერძო სკოლა „ლომისი-1“- მათემატიკის მასწავლებლად;
                        2012 წელს ეკა ონაშვილს მიენიჭა სერტიფიცირებული  მასწავლებლის წოდება.
                        ქალბატონი ეკა თავად გახლავთ №42 საჯარო სკოლის კურსადმთავრებული და 2014 წლიდან  მუშაობს მათემატიკის მასწავლებლად ამავე სკოლაში.
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