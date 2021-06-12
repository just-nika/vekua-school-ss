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

export default function PhysicsTeachers() {
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
                    image="./physics_1.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        გიორგი კაკაბაძე
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1990  წლიდან   დღემდე - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის   #42 საჯარო სკოლა, ფიზიკის მასწავლებელი;      
                        1976-1981 წწ-ში-თსუ, ფიზიკის ფაკულტეტი, სპეციალობა ”კვანტური ელექტრონიკა, ჰოლოგრაფია”.  
                        2010 წ.-„ეროვნული სასწავლო გეგმებისა და შეფასების ცენტრის“- ექსპერტი;
                        2007 წ.-წლის საუკეთესო მასწავლებლის წოდება;
                        1998წ.- დღემდე - უმაღლესი კატეგორიის მასწავლებლი;
                        გიორგი კაკაბაძის მოსწავლეები ინტენსიურად იღებენ მონაწილეობას სხვადასხვა ოლიმპიადებსა და ტურნირებში. 
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
                    image="./physics_2.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                        ლეილა ნარინდოშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        1977  წლიდან   დღემდე - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის   #42 საჯარო სკოლა, ფიზიკის მასწავლებელი;  
                        1969-1974წწ.-ში-  თსუ,  ფიზიკის ფაკულტეტი,  სპეციალობა-”ბირთვული   ფიზიკა”;
                        2008 წ.- საქართველოს პრეზიდენტის სტიპენდია;
                        2007 წ.-  ღირსების ორდენის კავალერი;
                        1997 წელს -უმაღლესი კატეგორიის მასწავლებლის წოდება;
                        1994-99 წწ.-ში -სოროსის სტიპენდია;
                        1989 წელს მიენიჭა უფროსი მასწავლებლის წოდება.
                        2007-2009 წწ.-ში- 42-ე საჯარო სკოლის სამეურვეო საბჭოს თავმჯდომარე ;
                        1992-2005 წწ-ში -ნორჩ ფიზიკოსთა სასკოლო ტურის ჟიურის წევრი. 
                        სხვადასხვა დროს მიღებული აქვს მადლობის წერილები , სიგელები და დიპლომები.
                        ლეილა ნარინდოშვილის  მოსწავლეები აქტიურად მონაწილეობენ და იმარჯვებენ სხვადასხვა რანგის  ფიზიკის  (რესპუბლიკურ, საერთაშორისო და მსოფლიო ოლიმპიადებსა) და ტურნირებში. 
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
                    image="./physics_2.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ლეილა ნარინდოშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", minHeight: "200px", maxHeight: "200px", overflowX: "scroll"}}>
                        1977  წლიდან   დღემდე - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის   #42 საჯარო სკოლა, ფიზიკის მასწავლებელი;      
                        1969-1974წწ.-ში-  თსუ,  ფიზიკის ფაკულტეტი,  სპეციალობა-”ბირთვული   ფიზიკა”;
                        2008 წ.- საქართველოს პრეზიდენტის სტიპენდია;
                        2007 წ.-  ღირსების ორდენის კავალერი;
                        1997 წელს -უმაღლესი კატეგორიის მასწავლებლის წოდება;
                        1994-99 წწ.-ში -სოროსის სტიპენდია;
                        1989 წელს მიენიჭა უფროსი მასწავლებლის წოდება.
                        2007-2009 წწ.-ში- 42-ე საჯარო სკოლის სამეურვეო საბჭოს თავმჯდომარე ;
                        1992-2005 წწ-ში -ნორჩ ფიზიკოსთა სასკოლო ტურის ჟიურის წევრი. 
                        სხვადასხვა დროს მიღებული აქვს მადლობის წერილები , სიგელები და დიპლომები.
                        ლეილა ნარინდოშვილის  მოსწავლეები აქტიურად მონაწილეობენ და იმარჯვებენ სხვადასხვა რანგის  ფიზიკის  (რესპუბლიკურ, საერთაშორისო და მსოფლიო ოლიმპიადებსა) და ტურნირებში. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card >
                  <CardMedia
                    className={classes.cardMedia}
                    image="./physics_3.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ნონა თოდუა
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2011 წლიდან  დღემდე - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის ქალაქ თბილისის #42  საჯარო სკოლა, ფიზიკის მასწავლებელი;	                                                                           
                        1981-1986წწ.-ში-თსუ,  ფიზიკის ფაკულტეტი ;
                        1986-2007წწ.-ში-სოხუმის სახელმწიფო უნივერსიტეტი- ასისტენტ-პროფესორი;
                        2003 წ.-საკანდიდატო დიცერტაცია-(ფიზიკა-მათემატიკის მეცნიერებათა კანდიდატის ხარისხი);
                        ნონა თოდუა 5 სამეცნიერო ნაშრომისა და ერთი გამოგონების ავტორია.
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
                    image="./physics_4.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        ესმა ხიზანიშვილი
                    </Typography>
                    <Typography style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll"}}>
                        2008  წლიდან დღემდე - აკადემიკოს ილია ვეკუას სახელობის ფიზიკა-მათემატიკის  ქალაქ თბილისის #42 საჯარო სკოლა , ფიზიკის მასწავლებელი;
                        1980-1985 წწ.-ში-თსუ, ფიზიკის ფაკულტეტი, სპეციალობა-”ნახევარგამტარებისა და დიალექტრიკების ფიზიკა”; 
                        1985-1989წწ.-ში-თსუ, ასპირანტურა,ფიზიკა-მათემატიკურ მეცნიერებათა კანდიდატი;
                        2009-2010წწ.-ში- გრიგოლ ფერაძის თბილისის სასწავლო უნივერსიტეტი-ასოცირებული პროფესორი;
                        2006-2009წწ.-ში-საქართველოს ეროვნული სამეცნიერო ფონდი-წამყვანი 
                        თეორიტიკოს -პროგრამისტი;
                        2000-2006წწ.-ში-თსუ, საბუნებისმეტყველო ფაკულტეტის ფიზიკის მიმართულება-დოცენტი;
                        1999-2006წწ.-ში-თსუ, საბუნებისმეტყველო ფაკულტეტის ფიზიკის მიმართულება-ს/კ ლაბორატორიის უფროსი მეცნიერ მუშაკი;
                        1993-2000წწ.-ში-თსუ, მყარი სხეულების ფიზიკის კათედრა-ასისტენტი;
                        1980-1985 წწ.-ში-თსუ, ფიზიკის ფაკულტეტი, სპეციალობა-”ნახევარგამტარებისა და დიალექტრიკების ფიზიკა”; 
                        1985-1989წწ.-ში-თსუ, ასპირანტურა,ფიზიკა-მათემატიკურ მეცნიერებათა კანდიდატი;
                        ესმა ხიზანიშვილს შესრულებული აქვს მრავალი  სამეცნიერო ნაშრომი და მოპოვებული აქვს საერთაშორისო გრანტები სხვადასხვა საკითხებში;
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