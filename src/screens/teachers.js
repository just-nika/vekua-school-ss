import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SingleTeachers from './teachersSingle';
import ITTeachers from './ITSingle';
import PhysicsTeachers from './PhysicsTeachers';
import GeorgianTeachers from './GeorgianTeachers';
import BiologyTeachers from './BiologyTeachers';
import LanguageTeachers from './LanguageTeachers';
import HistoryTeachers from './HistoryTeachers';
import GeographyTeachers from './GeographyTeachers';
import SomeTeachers from './SomeTeachers';
import Container from '@material-ui/core/Container';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SchoolTeachers() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="მათემატიკის კათედრა" {...a11yProps(0)} />
          <Tab label="ქართული ენის კათედრა" {...a11yProps(1)} />
          <Tab label="საბუნებისმეტყველო კათედრა" {...a11yProps(2)} />
          <Tab label="უცხო ენის კათედრა" {...a11yProps(3)} />
          <Tab label="საზოგადოებრივ მეცნიერებათა კათედრა" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h2>მათემატიკის კათედრა</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>კათედრის გამგე: <strong>ნუგზარ მახათაძე</strong></p>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>ედემ ლაგვილავა</li>
                    <li>ოლეგ კვეტენაძე</li>
                    <li>ნუგზარ მახათაძე</li>
                    <li>ნონა ქუშაშვილი</li>
                    <li>მედეა გურგენაძე</li>
                    <li>ნანა მეტრეველი</li>
                    <li>მაია თევდორაშვილი</li>
                    <li>ალექსანდრე ნემსაძე</li>
                    <li>ლელა მამულაშვილი</li>
                    <li>კოტე კუპატაძე</li>
                    <li>ეკატერინე ონაშვილი</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <SingleTeachers />
            <h2>ინფორმატიკის სექცია</h2>
            <ITTeachers />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <h2>ქართული ენის კათედრა</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>კათედრის გამგე: <strong>ანა სალაყაია</strong></p>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>ანა სალაყაია</li>
                    <li>სალომე პატარაშვილი</li>
                    <li>მარინე დეკანოიძე</li>
                    <li>ნანა მეხრიშვილი</li>
                    <li>ირინა კირვალიძე</li>
                    <li>ნინო ნასყიდაშვილი</li>
                    <li>ნინო ნანობაშვილი</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <GeorgianTeachers />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h2>ფიზიკის კათედრა</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>კათედრის გამგე: <strong>გიორგი კაკაბაძე</strong></p>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>გიორგი კაკაბაძე</li>
                    <li>ლეილა ნარინდოშვილი</li>
                    <li>ნონა თოდუა</li>
                    <li>ესმა ხიზანიშვილი</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <PhysicsTeachers />
          </div>
          <h2>ქიმია-ბიოლოგიის კათედრა</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>კათედრის გამგე: <strong>თამარ მელაძე</strong></p>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>თამარ მელაძე</li>
                    <li>მაია თათრიშვილი-შონია</li>
                    <li>ეთერ ელოშვილი</li>
                    <li>მარინე სალუქვაძე</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <BiologyTeachers />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <h2>უცხო ენის კათედრა</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>კათედრის გამგე: <strong>მაია გოგიაშვილი</strong></p>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>მაია გოგიაშვილი</li>
                    <li>ვენერა ტურიანი</li>
                    <li>ქეთევან ლილუაშვილი</li>
                    <li>ლორინა ბაჯელიძე</li>
                    <li>თამარ გაბუნია</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <LanguageTeachers />
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <h2>ისტორიის სექცია</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>ნუგზარ მოლაშვილი</li>
                    <li>მანანა გაბუნია</li>
                    <li>ნანა იმერაშვილი</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <HistoryTeachers />
          </div>
        <h2>გეოგრაფიის სექცია</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>ნინო მთიულიშვილი</li>
                    <li>ეთერ ყაჭიური</li>
                </ol>
                </Grid>
            </Container>
          </div>
          <div className="teachers-info">
            <GeographyTeachers />
          </div>
        <h2>სამოქალაქო განათლების სექცია</h2>
          <div className="members">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid item  xs={12} sm={6} md={4}>
                <p style={{textAlign: "start"}}>წევრები:</p>
                <ol style={{textAlign: "start"}}>
                    <li>მაკა ბიბილეიშვილი</li>
                    <li>მანანა გაბუნია</li>
                </ol>
                </Grid>
            </Container>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}