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
    const data = await secondaryApp.firestore().collection("saturday-school").where("subject", "!=", `${state}`).get();
    setPupils(data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))) 
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
        field: "StudentFirstName", 
        headerName: "სახელი/First Name", 
        width: 200 
    },
    { 
        field: "StudentLastName", 
        headerName: "გვარი/Last Name", 
        width: 200 
    },
    { 
        field: "StudentEmail", 
        headerName: "მოსწავლის ელ. ფოსტა/Student E-mail", 
        width: 200 
    },
    { 
        field: "StudentPersonalNumber", 
        headerName: "პირადი ნომერი/Personal Number", 
        width: 300 
    },
    {
        field: "StudentClass",
        headerName: "კლასი/Class",
        width: 175,
    },
    {
        field: "subject",
        headerName: "საგანი/subject",
        width: 175,
    },
    {
        field: "TeacherName",
        headerName: "მასწავლებელი/Teacher",
        width: 175,
    },
    {
        field: "TeacherTime",
        headerName: "დრო/Time",
        width: 175,
    },
    {
        field: "group",
        headerName: "ჯგუფი/Group",
        width: 175,
    },
    {
        field: "LawName",
        headerName: "სახელი ხელშეკრულებისათვის/Name For Contract",
        width: 250,
    },
    {
        field: "LawLastName",
        headerName: "გვარი ხელშეკრულებისათვის/Last Name For Contract",
        width: 250,
    },
    {
        field: "LawMobileNumber",
        headerName: "მშობლის ნომერი ხელშეკრულებისათვის/Last Name For Contract",
        width: 250,
    },
    {
        field: "LawId",
        headerName: "პირადი ნომერი ხელშეკრულებისათვის/ID For Contract",
        width: 250,
    },
    {
        field: "LawAddress",
        headerName: "მისამართი ხელშეკრულებისათვის/Address For Contract",
        width: 250,
    },
    {
        field: "LawEmail",
        headerName: "ელ. ფოსტა/E-mail",
        width: 250,
    },
  ];
  return (
    <div>
      <form noValidate style={{textAlign: "start"}}>
        <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth>
          <InputLabel id="demo-simple-select-label">დარეგისტრირებული მოსწავლეები საგნების მიხედვით</InputLabel>
          <Select
            id="teachers"
            name="teachers"
            value={state}
            onChange={getTime}
            style={{textAlign: "start"}}
          >
              <MenuItem style={{textAlign: "start"}} value={"მათემატიკა"}>მათემატიკა</MenuItem>
              <MenuItem style={{textAlign: "start"}} value={"ფიზიკა"}>ფიზიკა</MenuItem>
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
