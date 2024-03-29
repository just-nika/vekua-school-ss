import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Helmet } from "react-helmet";
// import Registration from './saturday-school-registration';
import { firebase } from '../../firebase/firebase.config'
import { Link, Router } from 'react-router-dom';
import Check from './checkClasses';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AllSSPupils from './allSSPupils'
import SaturdaySchoolRegistrationNewVersion from './saturday-school-registration-new-version';

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
                            <img style={{width: "100%", margin: "auto"}} src="./saturday-school-schedule.png" alt="" />
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
                                    მიმდინარეობს  ონლაინ რეგისტრაცია, საშაბათო სკოლის მსურველთათვის III-XI კლასებში. <br /><br />
                                    III–VI კლასებისათვის მეცადინეობები ჩატარდება მათემატიკაში; VII-XI კლასებისათვის - მათემატიკასა და ფიზიკაში. მეცადინეობის ხანგრძლივობაა 1,5 ასტრონომიული საათი. <br /><br />
                                    მსმენელები, რომლებიც გასულ სასწავლო წელს სარგებლობდნენ საშაბათო სკოლის მომსახურებით და სურვილი აქვთ იმავე მომსახურებით ისარგებლონ მიმდინარე სასწავლო წელსაც, რეგისტრირდებიან თავიდან.<br /><br />
                                    რეგისტრაციისას მსმენელი შეარჩევს მისთვის სასურველ პედაგოგს შესაბამისი კლასისა და დროის გათვალისწინებით ( იხილეთ ველი „ საშაბათო სკოლის მეცადინეობების განრიგი“)<br /><br />
                                    ჯგუფში მსმენელთა მაქსიმალური რაოდენობა 25-ია. თითოეული ჯგუფის სრულად დაკომპლექტების შემთხვევაში ავტომატურად შეწყდება რეგისტრაცია. აღნიშნულ შემთხვევაში შესაძლებლობა გექნებათ რეგისტრაცია გაიაროთ სხვა ჯგუფებში, სხვა პედაგოგთან. <br /><br />
                                </p>
                                <ul style={{textAlign: "start"}}>
                                    <p>საშაბათო სკოლაში სწავლის მსურველი ვალდებულია:</p>
                                    <li>გაიაროს ონლაინ რეგისტრაცია სკოლის ვებგვერდზე - vekua42.edu.ge;</li>
                                    <li>რეგისტრაციისას მიუთითოს ზუსტი მონაცემები;</li>
                                </ul>
                                    <p style={{textAlign: "start"}}>რეგისტრაციის გავლისთვის უნდა შეხვიდეთ საიტზე გამოტანილ ფანჯარაში- „საშაბათო სკოლა“ და შეავსეთ სარეგისტრაციო ფორმა შემდეგი ველებით:</p>
                                <ul style={{textAlign: "start"}}>
                                    <ul>
                                        <li>მოსწავლის სახელი, გვარი;</li>
                                        <li>მოსწავლის პირადი ნომერი;</li>
                                        <li>მოსწავლის ელ ფოსტა (თიმსის  ელ. ფოსტა  საჯარო სკოლის მოსწავლეებისთვის, ნებისმიერი სხვა ელ. ფოსტა კეძო სკოლების მოსწავლეებისთვის)</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  სახელი, გვარი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  ტელეფონის  ნომერი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის პირადი ნომერი;</li>
                                        <li>მშობლის/კანონოერი წარმომადგენლის  სახოვრებელი მისამართი;</li>
                                        <li>კლასი რომელშიც მოსწავლე სწავლობს;</li>
                                        <li>საგანი, რომელსაც მოსწავლე ირჩევს;</li>
                                        <li>პედაგოგი;</li>
                                        <li>დრო;</li>
                                    </ul>
                                    <li>რეგისტრაციის გავლისას  „შენახვის“ ღილაკის გამოყენებით ეტაპობრივად (სულ 4 ეტაპი) მოახდინეთ ინფორმაციის შენახვა, შემდეგ ეტაპზე გადასასვლელად გამოიყენეთ ღილაკი  „შემდეგი“. რეგისტრაციის დასრულებისთვის კურსორი დააჭირეთ ღილაკს „რეგისტრაცია“;</li>
                                    <li>რეგისტრაციის დასრულებას დაგიდასტურებთ წარწერა „ მადლობას გიხდით რეგისტრაციისთვის“.  სატელეფონო შეტყობინებით  მიიღებთ მესიჯს რეგისტრაციის წარმატებით გავლასთან დაკავშირებით.</li>
                                </ul>
                                <p>
                                    თუ მსმენელს სურვილი აქვს აირჩიოს ორივე საგანი (მათემატიკა და ფიზიკა) , რეგისტრაციას გადის ცალ-ცალკე თითოეულ საგანში; <br /><br />
                                    საშაბათო სკოლაში მეცადინეობა დაიწყება 2021 წლის 1 ოქტომბერს. მეცადინეობები წარიმართება სკოლაში მისამართზე: ჩაიკოვსკის ქუჩა N9.<br /><br />
                                    საშაბათო სკოლის მომსახურების საფასური ყოველ კალენდარულ თვეში შეადგენს 80 ლარს, რომლის გადახდა ხდება წინასწარ ყოველი თვის 10 რიცხვამდე. სურვილის შემთხვევაში შესაძლებელია რამდენიმე თვის საფასურის ერთად გადახდა.<br /><br />
                                </p>
                                <p>საშაბათო სკოლაში რეგისტრირებული მსმენელის მშობელი მიმართავს სკოლას ხელშეკრულების გასაფორმებლად შემდეგი განრიგის მიხედვით (11-დან 16 საათამდე):</p>
                                <ul>
                                    <li>27 სექტემბერი - III–IV კლასები;</li>
                                    <li>28 სექტემბერი - V-VI კლასები;</li>
                                    <li>29 სექტემბერი - VI- VII კლასები;</li>
                                    <li>30 სექტემბერი - VII-XI კლასები;</li>
                                </ul>
                                <p><b>აუცილებელია მშობელმა თან იქონიოს თავისი პირადობის მოწმობის ასლი.</b></p>
                                <p><b>მიმდინარე სასწავლო წლის განმავლობაში, სასწავლო კურსის არანაკლებ 6 თვით სარგებლობის შემთხვევაში VI-X კლასების მსმენელებს უფლება აქვთ მონაწილეობა მიიღონ საშაბათო სკოლის შემაჯამებელ წერაში მხოლოდ იმ საგანში, რომლითაც სარგებლობდნენ.</b> ამასთანავე აუცილებელია მითითებული 6 თვიდან მსმენელი საშაბათო სკოლაში ირიცხებოდეს ბოლო 3 თვის განმავლობაში. წერის შედეგებიდან გამომდინარე წარმატებულ მსმენელს რეკომენდაცია ეძლევა სწავლა გააგრძელოს აკადემიკოს ი. ვეკუას სახელობის ფიზიკა-მათემატიკის ქ. თბილისის N 42 საჯარო სკოლაში.</p>
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
            {/* <h1>2022-2023 სასწავლო წელს საშაბათო სკოლაში ონლაინ რეგისტრაცია დაიწყება 2022 წლის 21 სექტემბერს 10 საათიდან!</h1> */}
            <SaturdaySchoolRegistrationNewVersion/>
            <br />
            <br />
        </div>
    )
}

export default SaturdaySchool
