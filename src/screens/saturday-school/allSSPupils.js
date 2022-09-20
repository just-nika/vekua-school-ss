import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { secondaryApp } from '../../firebase/firebase.config';
import { Helmet } from "react-helmet";

const defaultTheme = createTheme();
const useStylesAntDesign = makeStyles(
  (theme) => ({
    root: {
      border: `1px solid ${theme.palette.type === 'light' ? '#f0f0f0' : '#303030'}`,
      color:
        theme.palette.type === 'light'
          ? 'rgba(0,0,0,.85)'
          : 'rgba(255,255,255,0.85)',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      WebkitFontSmoothing: 'auto',
      letterSpacing: 'normal',
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.type === 'light' ? '#fafafa' : '#1d1d1d',
      },
      '& .MuiDataGrid-iconSeparator': {
        display: 'none',
      },
      '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
          theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
        }`,
      },
      '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
          theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
        }`,
      },
      '& .MuiDataGrid-cell': {
        color:
          theme.palette.type === 'light'
            ? 'rgba(0,0,0,.85)'
            : 'rgba(255,255,255,0.85)',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: theme.palette.type === 'light' ? '#fafafa' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
          borderRight: `1px solid ${
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
          borderBottom: `1px solid ${
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-cell': {
          color:
            theme.palette.type === 'light'
              ? 'rgba(0,0,0,.85)'
              : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
          borderRadius: 0,
        },
        '& .MuiCheckbox-root svg': {
          width: 16,
          height: 16,
          backgroundColor: 'transparent',
          border: `1px solid ${
            theme.palette.type === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
          }`,
          borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
          display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
          backgroundColor: '#1890ff',
          borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
          position: 'absolute',
          display: 'table',
          border: '2px solid #fff',
          borderTop: 0,
          borderLeft: 0,
          transform: 'rotate(45deg) translate(-50%,-50%)',
          opacity: 1,
          transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
          content: '""',
          top: '50%',
          left: '39%',
          width: 5.71428571,
          height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
          width: 8,
          height: 8,
          backgroundColor: '#1890ff',
          transform: 'none',
          top: '39%',
          border: 0,
        },
      },
    },
  }),
  { defaultTheme },
);

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: 600,
      width: '100%',
      '& .MuiFormGroup-options': {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
        '& > div': {
          minWidth: 100,
          margin: theme.spacing(2, 2, 2, 0),
        },
      },
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
  { defaultTheme },
);

function SettingsPanel(props) {
  const { onApply, type, size, theme } = props;
  const [sizeState, setSize] = React.useState(size);
  const [typeState, setType] = React.useState(type);
  const [selectedPaginationValue, setSelectedPaginationValue] = React.useState(-1);
  const [activeTheme, setActiveTheme] = React.useState(theme);

  const handleSizeChange = React.useCallback((event) => {
    setSize(Number(event.target.value));
  }, []);

  const handleDatasetChange = React.useCallback((event) => {
    setType(event.target.value);
  }, []);

  const handlePaginationChange = React.useCallback((event) => {
    setSelectedPaginationValue(event.target.value);
  }, []);

  const handleThemeChange = React.useCallback((event) => {
    setActiveTheme(event.target.value);
  }, []);

  const handleApplyChanges = React.useCallback(() => {
    onApply({
      size: sizeState,
      type: typeState,
      pagesize: selectedPaginationValue,
      theme: activeTheme,
    });
  }, [sizeState, typeState, selectedPaginationValue, activeTheme, onApply]);

  return (
    <FormGroup className="MuiFormGroup-options" row>
      <FormControl variant="standard">
        <InputLabel>Dataset</InputLabel>
        <Select value={typeState} onChange={handleDatasetChange}>
          <MenuItem value="Employee">Employee</MenuItem>
          <MenuItem value="Commodity">Commodity</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Rows</InputLabel>
        <Select value={sizeState} onChange={handleSizeChange}>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={1000}>{Number(1000).toLocaleString()}</MenuItem>
          <MenuItem value={10000}>{Number(10000).toLocaleString()}</MenuItem>
          <MenuItem value={100000}>{Number(100000).toLocaleString()}</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Page Size</InputLabel>
        <Select value={selectedPaginationValue} onChange={handlePaginationChange}>
          <MenuItem value={-1}>off</MenuItem>
          <MenuItem value={0}>auto</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={1000}>{Number(1000).toLocaleString()}</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Theme</InputLabel>
        <Select value={activeTheme} onChange={handleThemeChange}>
          <MenuItem value="default">Default Theme</MenuItem>
          <MenuItem value="ant">Ant Design</MenuItem>
        </Select>
      </FormControl>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleApplyChanges}
      >
        <KeyboardArrowRightIcon fontSize="small" /> Apply
      </Button>
    </FormGroup>
  );
}

SettingsPanel.propTypes = {
  onApply: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  theme: PropTypes.oneOf(['ant', 'default']).isRequired,
  type: PropTypes.oneOf(['Commodity', 'Employee']).isRequired,
};

export default function AllSSPupils() {
  const classes = useStyles();
  const antDesignClasses = useStylesAntDesign();
  const [isAntDesign, setIsAntDesign] = React.useState(false);
  const [type, setType] = React.useState('Commodity');
  const [size, setSize] = React.useState(100);
  const [pupils, setPupils] = React.useState([]);
  const [teacherClass, setTeacherClass] = React.useState('');
  const [state, timeState] = React.useState('');

  const getTime = (event) => {
    timeState(event.target.value)
  }
  // React.useEffect(() => {
  //   getPupils();
  // }, [])
  const getPupils = async () => {
    const data = await secondaryApp.firestore().collection(`${state}`).where("idNumber", "!=", "").get();
    setPupils(data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))) 
    if (state == "SSMMT31515") {setTeacherClass("მაია თევდორაშვილი - 15:15 (3 კლასი)")}
    if (state == "SSMAN31330") {setTeacherClass("ალექსანდრე ნემსაძე - 13:30 (3 კლასი)")}
    if (state == "SSMMT41315") {setTeacherClass("მაია თევდორაშვილი - 13:15 (4 კლასი)")}
    if (state == "SSMAN41530") {setTeacherClass("ალექსანდრე ნემსაძე - 15:30 (4 კლასი)")}
    if (state == "SSMEO41100") {setTeacherClass("ეკა ონაშვილი - 09:00 (4 კლასი)")}
    if (state == "SSMKK41115") {setTeacherClass("კოტე კუპატაძე - 11:00 (4 კლასი)")}
    if (state == "SSMNM51130") {setTeacherClass("ნუგზარ მახათაძე - 11:00 (5 კლასი)")}
    if (state == "SSMNQ51100") {setTeacherClass("ნონა ქუშაშვილი - 13:00 (5 კლასი)")}
    if (state == "SSMMT51115") {setTeacherClass("მაია თევდორაშვილი - 11:15 (5 კლასი)")}
    if (state == "SSMMN51100") {setTeacherClass("ნანა მეტრეველი - 11:00 (5 კლასი)")}
    if (state == "SSMMN51500") {setTeacherClass("ნანა მეტრეველი - 15:00 (5 კლასი)")}
    if (state == "SSMAN51130") {setTeacherClass("ალექსანდრე ნემსაძე - 11:30 (5 კლასი)")}
    if (state == "SSMKK51315") {setTeacherClass("კოტე კუპატაძე - 13:00 (5 კლასი)")}
    if (state == "SSMEO51300") {setTeacherClass("ეკა ონაშვილი - 11:00 (5 კლასი)")}
    if (state == "SSMMG61300") {setTeacherClass("მედეია გურგენაძე - 13:00 (5 კლასი)")}
    if (state == "SSMNM60930") {setTeacherClass("ნუგზარ მახათაძე - 09:00 (6 კლასი)")}
    if (state == "SSMNM61330") {setTeacherClass("ნუგზარ მახათაძე - 13:00 (6 კლასი)")}
    if (state == "SSMNQ60900") {setTeacherClass("ნონა ქუშაშვილი - 09:00 (6 კლასი)")}
    if (state == "SSMNQ61300") {setTeacherClass("ნონა ქუშაშვილი - 11:00 (6 კლასი)")}
    if (state == "SSMGS61100") {setTeacherClass("გურამ სიხარულიძე - 11:00 (6 კლასი)")}
    if (state == "SSMGS61400") {setTeacherClass("გურამ სიხარულიძე - 14:00 (6 კლასი)")}
    if (state == "SSMMT60915") {setTeacherClass("მაია თევდორაშვილი - 09:15 (6 კლასი)")}
    if (state == "SSMMN60900") {setTeacherClass("ნანა მეტრეველი - 09:00 (6 კლასი)")}
    if (state == "SSMMN61300") {setTeacherClass("ნანა მეტრეველი - 13:00 (6 კლასი)")}
    if (state == "SSMAN60930") {setTeacherClass("ალექსანდრე ნემსაძე - 09:30 (6 კლასი)")}
    if (state == "SSMKK60915") {setTeacherClass("კოტე კუპატაძე - 09:00 (6 კლასი)")}
    if (state == "SSMKK61515") {setTeacherClass("კოტე კუპატაძე - 15:00 (6 კლასი)")}
    if (state == "SSMEO30900") {setTeacherClass("ეკა ონაშვილი - 13:00 (6 კლასი)")}
    if (state == "SSMGS70930") {setTeacherClass("გურამ სიხარულიძე - 09:30 (7 კლასი)")}
    if (state == "SSMGS71230") {setTeacherClass("გურამ სიხარულიძე - 12:30 (7 კლასი)")}
    if (state == "SSMLM70930") {setTeacherClass("ლელა მამულაშვილი - 11:00 (7 კლასი)")}
    if (state == "SSPGK71100") {setTeacherClass("გიორგი კაკაბაძე - 11:00 (7 კლასი)")}
    if (state == "SSPGK71230") {setTeacherClass("გიორგი კაკაბაძე - 12:30 (7 კლასი)")}
    if (state == "SSPTG71100") {setTeacherClass("თემურ გაჩეჩილაძე - 11:00 (7 კლასი)")}
    if (state == "SSPTG71230") {setTeacherClass("თემურ გაჩეჩილაძე - 12:30 (7 კლასი)")}
    if (state == "SSMMG81100") {setTeacherClass("მედეია გურგენაძე - 11:00 (8 კლასი)")}
    if (state == "SSPEKH81300") {setTeacherClass("ესმა ხიზანიშვილი - 09:30 (8 კლასი)")}
    if (state == "SSMMG90900") {setTeacherClass("მედეია გურგენაძე - 09:00 (9 კლასი)")}
    if (state == "SSPNT91030") {setTeacherClass("ნონა თოდუა - 10:30 (9 კლასი)")}
    if (state == "SSMEL101230") {setTeacherClass("ედემ ლაგვილავა - 11:00 (10-11-12 კლასი)")}
    if (state == "SSPTG100930") {setTeacherClass("თემურ გაჩეჩილაძე - 09:30 (10 კლასი)")}
    if (state == "SSPGK11120930") {setTeacherClass("გიორგი კაკაბაძე - 09:30 (11-12 კლასი)")}
    if (state == "მათემატიკა") {setTeacherClass("მათემატიკა")}
    if (state == "ფიზიკა") {setTeacherClass("ფიზიკა")}
    else {setTeacherClass("")}
}
  const { loading, data, setRowLength, loadNewData } = useDemoData({
    dataSet: type,
    rowLength: size,
    maxColumns: 40,
    editable: true,
  });

  const [pagination, setPagination] = React.useState({
    pagination: false,
    autoPageSize: false,
    pageSize: undefined,
  });

  const getActiveTheme = () => {
    return isAntDesign ? 'ant' : 'default';
  };

  const handleApplyClick = (settings) => {
    if (size !== settings.size) {
      setSize(settings.size);
    }

    if (type !== settings.type) {
      setType(settings.type);
    }

    if (getActiveTheme() !== settings.theme) {
      setIsAntDesign(!isAntDesign);
    }

    if (size !== settings.size || type !== settings.type) {
      setRowLength(settings.size);
      loadNewData();
    }

    const newPaginationSettings = {
      pagination: settings.pagesize !== -1,
      autoPageSize: settings.pagesize === 0,
      pageSize: settings.pagesize > 0 ? settings.pagesize : undefined,
    };

    setPagination((currentPaginationSettings) => {
      if (
        currentPaginationSettings.pagination === newPaginationSettings.pagination &&
        currentPaginationSettings.autoPageSize ===
          newPaginationSettings.autoPageSize &&
        currentPaginationSettings.pageSize === newPaginationSettings.pageSize
      ) {
        return currentPaginationSettings;
      }
      return newPaginationSettings;
    });
  };
  const columns = [
    { 
        field: "id", 
        headerName: "ბაზის ID/Base ID", 
        width: 200 
    },
    { 
        field: "firstName", 
        headerName: "სახელი/First Name", 
        width: 200 
    },
    { 
        field: "lastName", 
        headerName: "გვარი/Last Name", 
        width: 200 
    },
    { 
        field: "idNumber", 
        headerName: "პირადი ნომერი/Personal Number", 
        width: 300 
    },
    {
        field: "class",
        headerName: "კლასი/Class",
        width: 175,
    },
    {
        field: "subject",
        headerName: "საგანი/subject",
        width: 175,
    },
    {
        field: "teacherTime",
        headerName: "კლასის კოდი/Class Code",
        width: 175,
    },
    {
        field: "lawName",
        headerName: "სახელი ხელშეკრულებისათვის/Name For Contract",
        width: 250,
    },
    {
        field: "lawLastName",
        headerName: "გვარი ხელშეკრულებისათვის/Last Name For Contract",
        width: 250,
    },
    {
        field: "lawMobileNumber",
        headerName: "მშობლის ნომერი ხელშეკრულებისათვის/Last Name For Contract",
        width: 250,
    },
    {
        field: "lawId",
        headerName: "პირადი ნომერი ხელშეკრულებისათვის/ID For Contract",
        width: 250,
    },
    {
        field: "address",
        headerName: "მისამართი ხელშეკრულებისათვის/Address For Contract",
        width: 250,
    },
  ];
  return (
    <div>
      <form noValidate style={{textAlign: "start"}}>
        <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth>
          <InputLabel id="demo-simple-select-label">დროები მასწავლებლების მიხედვით</InputLabel>
          <Select
            id="teachers"
            name="teachers"
            value={state}
            onChange={getTime}
            style={{textAlign: "start"}}
          >
              <MenuItem style={{textAlign: "start"}} value={"მათემატიკა"}> მათემატიკა</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"ფიზიკა"}> ფიზიკა</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMMT31515"}> მაია თევდორაშვილი - 15:15 (3 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMAN31330"}> ალექსანდრე ნემსაძე - 13:30 (3 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMMT41315"}> მაია თევდორაშვილი - 13:15 (4 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMAN41530"}> ალექსანდრე ნემსაძე - 15:30 (4 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMEO41100"}> ეკა ონაშვილი - 09:00 (4 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMKK41115"}> კოტე კუპატაძე - 11:00 (4 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMNM51130"}> ნუგზარ მახათაძე - 11:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMNQ51100"}> ნონა ქუშაშვილი - 13:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMT51115"}> მაია თევდორაშვილი - 11:15 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMN51100"}> ნანა მეტრეველი - 11:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMN51500"}> ნანა მეტრეველი - 15:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMAN51130"}> ალექსანდრე ნემსაძე - 11:30 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMKK51315"}> კოტე კუპატაძე - 13:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMEO51300"}> ეკა ონაშვილი - 11:00 (5 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMG61300"}> მედეია გურგენაძე - 13:00 (5 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMNM60930"}> ნუგზარ მახათაძე - 09:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMNM61330"}> ნუგზარ მახათაძე - 13:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMNQ60900"}> ნონა ქუშაშვილი - 09:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMNQ61300"}> ნონა ქუშაშვილი - 11:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMGS61100"}> გურამ სიხარულიძე - 11:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMGS61400"}> გურამ სიხარულიძე - 14:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMT60915"}> მაია თევდორაშვილი - 09:15 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMN60900"}> ნანა მეტრეველი - 09:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMMN61300"}> ნანა მეტრეველი - 13:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMAN60930"}> ალექსანდრე ნემსაძე - 09:30 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMKK60915"}> კოტე კუპატაძე - 09:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMKK61515"}> კოტე კუპატაძე - 15:00 (6 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMEO30900"}> ეკა ონაშვილი - 13:00 (6 კლასი)</MenuItem>
              
              <MenuItem style={{textAlign: "start"}} value={"SSMGS70930"}> გურამ სიხარულიძე - 09:30 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMGS71230"}> გურამ სიხარულიძე - 12:30 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMLM70930"}> ლელა მამულაშვილი - 11:00 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSMLM709302"}> ლელა მამულაშვილი - 09:30 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPGK71100"}> გიორგი კაკაბაძე - 11:00 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPGK71230"}> გიორგი კაკაბაძე - 12:30 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPTG71100"}> თემურ გაჩეჩილაძე - 11:00 (7 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPTG71230"}> თემურ გაჩეჩილაძე - 12:30 (7 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMMG81100"}> მედეია გურგენაძე - 11:00 (8 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPEKH81300"}> ესმა ხიზანიშვილი - 09:30 (8 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMMG90900"}> მედეია გურგენაძე - 09:00 (9 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPNT91030"}> ნონა თოდუა - 10:30 (9 კლასი)</MenuItem>

              <MenuItem style={{textAlign: "start"}} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (10-11-12 კლასი)</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"SSPTG100930"}> თემურ გაჩეჩილაძე - 09:30 (10 კლასი)</MenuItem>

              {/* <MenuItem style={{textAlign: "start"}} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (11 კლასი)</MenuItem> */}
              {/* <MenuItem style={{textAlign: "start"}} value={"SSMEL101230"}> ედემ ლაგვილავა - 11:00 (12 კლასი)</MenuItem> */}

              <MenuItem style={{textAlign: "start"}} value={"SSPGK11120930"}> გიორგი კაკაბაძე - 09:30 (11-12 კლასი)</MenuItem>
              {/* <MenuItem style={{textAlign: "start"}} value={"SSPGK11120930"}> გიორგი კაკაბაძე - 09:30 (12 კლასი)</MenuItem> */}
          </Select>
        </FormControl>
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={getPupils}>ძებნა</Button>
      </form>
      <h4>{teacherClass}</h4>
      <Helmet><title>საშაბათო სკოლა</title></Helmet>
    <div className={classes.root}>
      <SettingsPanel
        onApply={handleApplyClick}
        size={size}
        type={type}
        theme={getActiveTheme()}
      />
      <DataGridPro
        className={isAntDesign ? antDesignClasses.root : undefined}
        columns={columns}
        rows={pupils}
        components={{
          Toolbar: GridToolbar,
        }}
        loading={loading}
        checkboxSelection
        disableSelectionOnClick
        {...pagination}
      />
    </div>
    </div>
  );
}
