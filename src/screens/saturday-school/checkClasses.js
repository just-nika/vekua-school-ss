import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import CheckPupil from "../../utils/CheckPupil";
import swal from "sweetalert";
import { useReactToPrint } from 'react-to-print';
import { secondaryApp } from "../../firebase/firebase.config";
import PropTypes from 'prop-types';
// import { XGrid, GridToolbar } from '@material-ui/x-grid';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { createMuiTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FullFeaturedDemo from '../data.js'

const Check = () => {
  const [forCard, setPupilCard] = useState(null);
  const [code, setCode] = useState(null)
//   useEffect(() => {
//       getPosts();
//   }, [])
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleCheck = async (data) => {
    const code = data.code;
    setCode(code)
    if (code=="SSMNM41530" || code=="SSMNM51130" || code=="SSMNM60930" || code=="SSMNM61330" || code=="SSMNQ51100" || code=="SSMNQ51500" || code=="SSMNQ60900" || code=="SSMNQ61300" || code=="SSMGS61100" || code=="SSMGS61400" || code=="SSMGS70930" || code=="SSMGS71230" || code=="SSMMG71300" || code=="SSMMG81100" || code=="SSMMG81500" || code=="SSMMG90900" || code=="SSMMT31515" || code=="SSMMT41315" || code=="SSMMT51115" || code=="SSMMT60915" || code=="SSMMN51100" || code=="SSMMN51500" || code=="SSMMN60900" || code=="SSMMN61300" || code=="SSMAN31330" || code=="SSMAN41530" || code=="SSMAN51130" || code=="SSMAN60930" || code=="SSMLM70930" || code=="SSMEL101230" || code=="SSMEL11121230" || code=="SSMKK41115" || code=="SSMKK51315" || code=="SSMKK60915" || code=="SSMKK61515" || code=="SSMEO30900" || code=="SSMEO41100" || code=="SSMEO51300" || code=="SSPGK71100" || code=="SSPGK71230" || code=="SSPGK11120930" || code=="SSPNT91030" || code=="SSPTG71100" || code=="SSPTG71230" || code=="SSPTG100930" || code=="SSPEKH81300") {
        // return swal(
        //     "კლასი ნაპოვნია!",
        //     "",
        //     "success"
        // )
            const store = await secondaryApp.firestore().collection(`${data.code}`).get();
            console.log(store);
            setPupilCard(store.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(store);

    }else {
        return swal(
            "კლასი ვერ მოიძებნა",
            "",
            "error"
        )
    }
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const defaultTheme = createMuiTheme();
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

const useClassStyles = makeStyles(
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

function FullFeaturedDemo() {
  const [pupils, setPupils] = useState([]);
  useEffect(() => {
    getPupils();
  }, [])
  const getPupils = async () => {
    const data = await secondaryApp.firestore().collection(`${code}`).where("idNumber", "!=", "").get();
    console.log(data);
    setPupils(data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    })))
    console.log(data);
  }
  const classes = useClassStyles();
  const antDesignClasses = useStylesAntDesign();
  const [isAntDesign, setIsAntDesign] = React.useState(false);
  const [type, setType] = React.useState('Commodity');
  const [size, setSize] = React.useState(100);
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
  // address
  // class
  // fatherFirstName
  // fatherLastName
  // fatherMobileNumber
  // firstName
  // idNumber
  // lastName
  // lawId
  // lawLastName
  // lawName
  // motherFirstName
  // motherLastName
  // motherMobileNumber
  // subject
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
    <div className={classes.root}>
      <SettingsPanel
        onApply={handleApplyClick}
        size={size}
        type={type}
        theme={getActiveTheme()}
      />
      <DataGridPro
        className={isAntDesign ? antDesignClasses.root : undefined}
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
        loading={loading}
        rows={pupils}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        {...pagination}
      />
    </div>
  );
}

  return (
    <>
      <div className="container" id="checking">
        {forCard ? (
          <div>
            <FullFeaturedDemo />
          </div>
        ) : (
          <>
            <br />
            <h1>
                იხილეთ კლასი
            </h1>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  შეავსეთ ქვემოთ მოცემული ველი
                </Typography>
                <br />
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit(handleCheck)}>
                  <TextField
                    {...register("code", {
                      required: true,
                    })}
                    error={errors.code}
                    helperText={
                      errors.code &&
                      "კლასის კოდის შეყვანა აუცილებელია"
                    }
                    variant="standard"
                    required
                    fullWidth
                    id="code"
                    label="კლასის კოდი"
                    type="text"
                    name="code"
                    autoComplete="id"
                  />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ width: "100%" }}
                    className={classes.submit}>
                      კლასის ნახვა
                  </Button>
                </form>
              </div>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default Check;