import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PupilsData from './pupilsData'
import PupilsData7 from './pupilsData7'
import PupilsData8 from './pupilsData8'
import PupilsData9 from './pupilsData9'
import PupilsData11 from './pupilsData11'

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
        <Box p={5}>
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
    width: "100%",
  },
}));

export default function Data() {
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
          <Tab label="7 კლასი" {...a11yProps(0)} />
          <Tab label="8 კლასი" {...a11yProps(1)} />
          <Tab label="9 კლასი" {...a11yProps(2)} />
          <Tab label="10 კლასი" {...a11yProps(3)} />
          <Tab label="11 კლასი" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PupilsData7 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <PupilsData8 />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PupilsData9 />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <PupilsData />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <PupilsData11 />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}