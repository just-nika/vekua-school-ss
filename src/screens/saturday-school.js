import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Helmet } from "react-helmet";
import Registration from './saturday-school-registration';
import { firebase } from '../firebase/firebase.config'
import { Link, Router } from 'react-router-dom';
import Check from './checkClasses';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AllSSPupils from './allSSPupils'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    rootTwo: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 324,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));  

function SaturdaySchool() {
    const classes = useStyles();
    var user = firebase.auth().currentUser;
    function TeachersClasses() {
        if (user) {
            return <>
                <Button fullWidth variant="contained" color="primary" href="/contracts" >ხელშეკრულებები</Button>
                <br />
                <AllSSPupils />
                <br />
                <br />
            </>
        }else {
            return ""
        }
    }
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className="saturday-school">
            <Helmet>
                <title>საშაბათო სკოლა</title>
            </Helmet>
            <br />
            <h1>საშაბათო სკოლა</h1>
            <br />
            <br />
            <TeachersClasses />
            <br />
            <div className={classes.rootTwo} style={{paddingLeft: "30px", paddingRight: "30px"}}>
                {/* <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>რა არის საშაბათო სკოლა?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>საშაბათო სკოლის მეცადინეობების განრიგი</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{textAlign: "center"}}>
                            <img style={{width: "100%", margin: "auto"}} src="./schedule.png" alt="" />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                        <Typography className={classes.heading} style={{fontFamily: "'Arial GEO', sans-serif"}}>როგორ დავრეგისტრირდეთ საშაბათო სკოლაში?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="answer-1" style={{textAlign: "start"}}>
                                <p style={{textAlign: "start"}}>
                                    საშაბათო სკოლაში მსმენელთა (III-XI კლასები) ონლაინ რეგისტრაცია  2021 წლის 21 სექტემბრის 10 საათიდან,   სკოლის ვებ- გვერდზე - www.vekua42.edu.ge მიმდინარეობს. <br /><br />
                                    III–VI კლასებისათვის მეცადინეობები  ჩატარდება მათემატიკაში;   VII-XI კლასებისათვის - მათემატიკასა  და  ფიზიკაში.  მეცადინეობის  ხანგრძლივობაა 1,5 ასტრონომიული  საათი. <br /><br />
                                    მსმენელები, რომლებიც  გასულ  სასწავლო  წელს  სარგებლობდნენ  საშაბათო  სკოლის  მომსახურებით  და  სურვილი  აქვთ  იმავე  მომსახურებით  ისარგებლონ  მიმდინარე  სასწავლო  წელსაც, რეგისტრირდებიან  თავიდან.<br /><br />
                                    რეგისტრაციისას  მსმენელი შეარჩევს  მისთვის  სასურველ  პედაგოგს  შესაბამისი  კლასისა  და  დროის  გათვალისწინებით.<br /><br />
                                    ჯგუფში  მსმენელთა  მაქსიმალური  რაოდენობა  25-ია. თითოეული  ჯგუფის  სრულად  დაკომპლექტების  შემთხვევაში  ავტომატურად  შეწყდება  რეგისტრაცია. აღნიშნულ  შემთხვევაში  შესაძლებლობა  გექნებათ  რეგისტრაცია გაიაროთ სხვა  ჯგუფებში, სხვა პედაგოგთან. <br /><br />
                                </p>
                                <ul style={{textAlign: "start"}}>
                                    <p>საშაბათო  სკოლაში  სწავლის  მსურველი  ვალდებულია:</p>
                                    <li>გაიაროს  ონლაინ  რეგისტრაცია  სკოლის  ვებგვერდზე - vekua42.edu.ge;</li>
                                    <li>რეგისტრაციისას მიუთითოს  ზუსტი მონაცემები;</li>
                                </ul>
                                    <p style={{textAlign: "start"}}>რეგისტრაციის  გავლისთვის  უნდა შეხვიდეთ საიტზე გამოტანილ ფანჯარაში- „საშაბათო სკოლა“  და შეავსეთ სარეგისტრაციო  ფორმა  შემდეგი  ველებით:</p>
                                <ul style={{textAlign: "start"}}>
                                    <ul>
                                        <li>მოსწავლის  სახელი,  გვარი;</li>
                                        <li>მოსწავლის  პირადი  ნომერი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  სახელი, გვარი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  ტელეფონის  ნომერი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის პირადი ნომერი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  სახოვრებელი მისამართი;</li>
                                        <li>კლასი რომელშიც მოსწავლე სწავლობს;</li>
                                        <li>საგანი, რომელსაც მოსწავლე ირჩევს;</li>
                                        <li>პედაგოგი;</li>
                                        <li>დრო;</li>
                                    </ul>
                                    <li>რეგისტრაციის  დასრულებისთვის  კურსორი  დააჭირეთ ღილაკს  „რეგისტრაცია“;</li>
                                    <li>რეგისტრაციის დასრულების შემდეგ გამოვა ფანჯარა „მოსწავლე წარმატებით დარეგისტრირდა“, ამავე ფანჯარაში რეგისტრაციის გავლა დაადასტურეთ „ok“ ღილაკით.</li>
                                </ul>
                                <p>
                                    თუ  მსმენელს  სურვილი  აქვს  აირჩიოს  ორივე  საგანი ( მათემატიკა და ფიზიკა) , რეგისტრაციას  გადის  ცალ-ცალკე  თითოეულ  საგანში; <br /><br />
                                    საშაბათო  სკოლაში  მეცადინეობა  დაიწყება 2021 წლის  9  ოქტომბერს.  სასწავლო პროცესის წარმართვის ფორმასთან დაკავშირებით (სკოლაში თუ ონლაინ) ინფორმაცია წინასწარ დაიდება სკოლის ვებ და ფეისბუქ გვერდებზე.<br /><br />
                                    საშაბათო სკოლის მომსახურების  საფასური ყოველ კალენდარულ  თვეში  შეადგენს 80 ლარს, რომლის გადახდა ხდება წინასწარ ყოველი თვის 10  რიცხვამდე. სურვილის შემთხვევაში შესაძლებელია რამდენიმე თვის საფასურის ერთად გადახდა.<br /><br />
                                </p>
                                <p>საშაბათო  სკოლაში    რეგისტრირებული  მსმენელის  მშობელი  მიმართავს  სკოლას   ხელშეკრულების  გასაფორმებლად შემდეგი განრიგის მიხედვით  (11 -დან 15 საათამდე):</p>
                                <ul>
                                    <li>5 ოქტომბერს -    III–IV კლასები;</li>
                                    <li>6 ოქტომბერს  -   V- VI  კლასები;</li>
                                    <li>7 ოქტომბერს  -   VII-XI კლასები;</li>
                                </ul>
                                <p><b>აუცილებელია მშობელმა  თან  იქონიოს  თავისი  პირადობის  მოწმობის  ასლი.</b></p>
                                <p><b>მიმდინარე სასწავლო წლის განმავლობაში,  სასწავლო კურსის  არანაკლებ 6 თვით სარგებლობის შემთხვევაში VI-X  კლასების  მსმენელებს უფლება აქვთ მონაწილეობა მიიღონ საშაბათო სკოლის შემაჯამებელ წერაში მხოლოდ იმ საგანში, რომლითაც სარგებლობდნენ.</b> წერის შედეგებიდან გამომდინარე წარმატებულ მსმენელს რეკომენდაცია ეძლევა სწავლა გააგრძელოს აკადემიკოს ი. ვეკუას სახელობის ფიზიკა-მათემატიკის ქ. თბილისის  N 42 საჯარო სკოლაში.</p>
                                <br />
                                <br />
                                <p>გისურვებთ  წარმატებებს.</p>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <br />
            <br />
            <h1>საშაბათო სკოლაში ონლაინ რეგისტრაცია დასრულებულია!</h1>
            <br />
            <br />
        </div>
    )
}

export default SaturdaySchool
