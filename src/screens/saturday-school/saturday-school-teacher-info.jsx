import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useForm } from "react-hook-form";
import clsx from 'clsx';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import {
  firestore,
  storage,
  auth
} from "../../firebase/firebase.config";
import CheckPupil from '../../utils/CheckSSPupil';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}));

export default function TeacherInfo() {
  const [state, timeState] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [StudentClass, setStudentClass] = React.useState(0)
  const [students, setStudents] = useState([]);
  const getTime = (event) => {
    timeState(event.target.value)
    localStorage.setItem("TeacherTime", event.target.value)
  }
  const HandleCh = (event) => {
    setSubject(event.target.value);
    localStorage.setItem("TeacherName", event.target.value)
    CheckPupil(localStorage.getItem("StudentPersonalNumber")).then(async (response) => {
      if (response.status) {
        setLoading(false);
        return swal(
          "მოსწავლე უკვე რეგისტრირებულია!",
          "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
          "error"
        );
      }else {
        if (!loading) {
          firestore.collection("projects").get().then(async function (querySnapshot) {
            const code = querySnapshot.size;
            if (code == 0) {
              setLoading(false);
              return swal(
                "წარუმატებელი რეგისტრაცია",
                "თქვენი მონაცემების დამუშავება ვერ მოხერხდა, გთხოვთ შეამოწმოთ ინტერნეტის კავშირი.",
                "warning"
              );
            }else {
              setLoading(false)
              return
            }
          });
        }
      }
    });
  };

  const GetStudentData = async () => {
    const data = await firestore.collection("saturday-school").where("StudentClass", "==", `${localStorage.getItem("StudentClass")}`).get()
    setStudents(data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }

  React.useEffect(() => {
    // setStudentClass(localStorage.getItem("StudentClass"));
    GetStudentData();
  }, [])
  const TeacherAndTime = async (data) => {
    // setLoading(true);
    // setSuccess(false);
    // CheckPupil(localStorage.getItem("StudentPersonalNumber")).then((response) => {
    //   if (response.status) {
    //     setLoading(false);
    //     return swal(
    //       "მოსწავლე უკვე რეგისტრირებულია!",
    //       "მოსწავლე ამ პირადი ნომრით უკვე რეგისტრირებულია, თუ თვილით, რომ ეს ტექნიკური ხარვეზია, დაგვიკავშირდით ქვემოთ მოცემულ ელ. ფოსტაზე ან ნომერზე.",
    //       "error"
    //     );
    //   }else {
    //     if (!loading) {
    //       firestore.collection("projects").get().then(async function (querySnapshot) {
    //         const code = querySnapshot.size;
    //         if (code == 0) {
    //           setLoading(false);
    //           return swal(
    //             "წარუმატებელი რეგისტრაცია",
    //             "თქვენი მონაცემების დამუშავება ვერ მოხერხდა, გთხოვთ შეამოწმოთ ინტერნეტის კავშირი.",
    //             "warning"
    //           );
    //         }else {

    //         }
    //       });
    //     }
    //   }
    // });
    // setLoading(false);
    // setSuccess(true);
  }
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const DisplayTeachers = () => {
    if (localStorage.getItem("StudentClass") == 3) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='მაია თევდორაშვილი'>მაია თევდორაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ალექსანდრე ნემსაძე'>ალექსანდრე ნემსაძე</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 4) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='მაია თევდორაშვილი'>მაია თევდორაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ალექსანდრე ნემსაძე'>ალექსანდრე ნემსაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='კოტე კუპატაძე'>კოტე კუპატაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ეკა ონაშვილი'>ეკა ონაშვილი</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 5) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ნუგზარ მახათაძე'>ნუგზარ მახათაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ნონა ქუშაშვილი'>ნონა ქუშაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='მაია თევდორაშვილი'>მაია თევდორაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ნანა მეტრეველი'>ნანა მეტრეველი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ალექსანდრე ნემსაძე'>ალექსანდრე ნემსაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='კოტე კუპატაძე'>კოტე კუპატაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ეკა ონაშვილი'>ეკა ონაშვილი</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 6) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='ნუგზარ მახათაძე'>ნუგზარ მახათაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='ნონა ქუშაშვილი'>ნონა ქუშაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='გურამ სიხარულიძე'>გურამ სიხარულიძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='მედეია გურგენაძე'>მედეია გურგენაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='მაია თევდორაშვილი'>მაია თევდორაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='ნანა მეტრეველი'>ნანა მეტრეველი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='ალექსანდრე ნემსაძე'>ალექსანდრე ნემსაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='კოტე კუპატაძე'>კოტე კუპატაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "მათემატიკა"} value='ეკა ონაშვილი'>ეკა ონაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") != "წერისა და კითხვის სტრატეგიები"} value='ქეთი იოსელიანი'>ქეთი იოსელიანი</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 7) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ნუგზარ მახათაძე'>ნუგზარ მახათაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='გურამ სიხარულიძე'>გურამ სიხარულიძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ლელა მამულაშვილი'>ლელა მამულაშვილი</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='გიორგი კაკაბაძე'>გიორგი კაკაბაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='თემურ გაჩეჩილაძე'>თემურ გაჩეჩილაძე</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 8) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='მედეია გურგენაძე'>მედეია გურგენაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='ესმა ხიზანიშვილი'>ესმა ხიზანიშვილი</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 9) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='მედეია გურგენაძე'>მედეია გურგენაძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='ნონა თოდუა'>ნონა თოდუა</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 10) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ლელა ტრაპაიძე'>ლელა ტრაპაიძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='თემურ გაჩეჩილაძე'>თემურ გაჩეჩილაძე</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 11) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ლელა ტრაპაიძე'>ლელა ტრაპაიძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='გიორგი კაკაბაძე'>გიორგი კაკაბაძე</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("StudentClass") == 12) {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "ფიზიკა"} value='ლელა ტრაპაიძე'>ლელა ტრაპაიძე</MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("subject") == "მათემატიკა"} value='გიორგი კაკაბაძე'>გიორგი კაკაბაძე</MenuItem>
        </Select>
      </>
    }else {
      return <>
        <Select {...register("teacher", { required: true })} error={errors.teacher} id="teacher" name="teacher" value={localStorage.getItem("TeacherName")} onChange={HandleCh} style={{textAlign: "start"}}>
          <MenuItem style={{textAlign: "start"}} disabled>მასწავლებლის სახელთა მონაცემების ჩამოტვირთვა ვერ მოხერხდა, გთხოვთ სცადოთ მოგვიენებით</MenuItem>
        </Select>
      </>
    }
  }


const SetTeacherGroup = () => {
  if (localStorage.getItem("StudentClass") == 3) {
    const group_1 = students.filter((student) => {return student.group.includes('მაია თევდორაშვილი - 14:15')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ალექსანდრე ნემსაძე - 13:00')}).map((student, index) => {console.log(student)})
    return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem disabled>
            <em>მაია თევდორაშვილი - 14:15 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მაია თევდორაშვილი"} disabled={(25 - group_1.length) <= 0} value='14:15'>14:15</MenuItem>
        <MenuItem disabled>
            <em>ალექსანდრე ნემსაძე - 13:00 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ალექსანდრე ნემსაძე"} disabled={(25 - group_2.length) <= 0} value='13:00'>13:00</MenuItem>
      </Select>
    </>
  }else if (localStorage.getItem("StudentClass") == 4) {
    const group_1 = students.filter((student) => {return student.group.includes('მაია თევდორაშვილი - 12:45')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ალექსანდრე ნემსაძე - 14:30')}).map((student, index) => {console.log(student)})
    const group_3 = students.filter((student) => {return student.group.includes('კოტე კუპატაძე - 10:45')}).map((student, index) => {console.log(student)})
    const group_4 = students.filter((student) => {return student.group.includes('ეკა ონაშვილი - 09:00')}).map((student, index) => {console.log(student)})
    return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem disabled>
            <em>მაია თევდორაშვილი - 12:45 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მაია თევდორაშვილი"} disabled={(25 - group_1.length) <= 0} value='12:45'>12:45</MenuItem>
        <MenuItem disabled>
            <em>ალექსანდრე ნემსაძე - 14:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ალექსანდრე ნემსაძე"} disabled={(25 - group_2.length) <= 0} value='14:30'>14:30</MenuItem>
        <MenuItem disabled>
            <em>კოტე კუპატაძე - 10:45 ({25 - group_3.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "კოტე კუპატაძე"} disabled={(25 - group_3.length) <= 0} value='10:45'>10:45</MenuItem>
        <MenuItem disabled>
            <em>ეკა ონაშვილი - 09:00 ({25 - group_4.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ეკა ონაშვილი"} disabled={(25 - group_4.length) <= 0} value='09:00'>09:00</MenuItem>
      </Select>
    </>
  }else if (localStorage.getItem("StudentClass") == 5) {
    const group_1 = students.filter((student) => {return student.group.includes('ნუგზარ მახათაძე - 14:15')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ნონა ქუშაშვილი - 10:30')}).map((student, index) => {console.log(student)})
    // const group_3 = students.filter((student) => {return student.group.includes('ნონა ქუშაშვილი - 14:00')}).map((student, index) => {console.log(student)})
    const group_4 = students.filter((student) => {return student.group.includes('მაია თევდორაშვილი - 10:45')}).map((student, index) => {console.log(student)})
    const group_5 = students.filter((student) => {return student.group.includes('ნანა მეტრეველი - 11:00')}).map((student, index) => {console.log(student)})
    const group_6 = students.filter((student) => {return student.group.includes('ნანა მეტრეველი - 14:30')}).map((student, index) => {console.log(student)})
    const group_7 = students.filter((student) => {return student.group.includes('ალექსანდრე ნემსაძე - 11:15')}).map((student, index) => {console.log(student)})
    const group_8 = students.filter((student) => {return student.group.includes('კოტე კუპატაძე - 12:30')}).map((student, index) => {console.log(student)})
    const group_9 = students.filter((student) => {return student.group.includes('ეკა ონაშვილი - 11:00')}).map((student, index) => {console.log(student)})
    return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem disabled>
            <em>ნუგზარ მახათაძე - 14:15 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნუგზარ მახათაძე"} disabled={(25 - group_1.length) <= 0} value='14:15'>14:15</MenuItem>
        <MenuItem disabled>
            <em>ნონა ქუშაშვილი - 10:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნონა ქუშაშვილი"} disabled={(25 - group_2.length) <= 0} value='10:30'>10:30</MenuItem>
        <MenuItem disabled>
            <em>მაია თევდორაშვილი - 10:45 ({25 - group_4.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მაია თევდორაშვილი"} disabled={(25 - group_4.length) <= 0} value='10:45'>10:45</MenuItem>
        <MenuItem disabled>
            <em>ნანა მეტრეველი - 11:00 ({25 - group_5.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნანა მეტრეველი"} disabled={(25 - group_5.length) <= 0} value='11:00'>11:00</MenuItem>
        <MenuItem disabled>
            <em>ნანა მეტრეველი - 14:30 ({25 - group_6.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნანა მეტრეველი"} disabled={(25 - group_6.length) <= 0} value='14:30'>14:30</MenuItem>
        <MenuItem disabled>
            <em>ალექსანდრე ნემსაძე - 11:15 ({25 - group_7.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ალექსანდრე ნემსაძე"} disabled={(25 - group_7.length) <= 0} value='11:15'>11:15</MenuItem>
        <MenuItem disabled>
            <em>კოტე კუპატაძე - 12:30 ({25 - group_8.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "კოტე კუპატაძე"} disabled={(25 - group_8.length) <= 0} value='12:30'>12:30</MenuItem>
        <MenuItem disabled>
            <em>ეკა ონაშვილი - 11:00 ({25 - group_9.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
        <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ეკა ონაშვილი"} disabled={(25 - group_9.length) <= 0} value='11:00'>11:00</MenuItem>
      </Select>
    </>
  }else if (localStorage.getItem("StudentClass") == 6) {
    const group_1 = students.filter((student) => {return student.group.includes('ნუგზარ მახათაძე - 09:00')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ნუგზარ მახათაძე - 12:30')}).map((student, index) => {console.log(student)})
    const group_3 = students.filter((student) => {return student.group.includes('ნონა ქუშაშვილი - 09:00')}).map((student, index) => {console.log(student)})
    const group_4 = students.filter((student) => {return student.group.includes('ნონა ქუშაშვილი - 12:30')}).map((student, index) => {console.log(student)})
    const group_5 = students.filter((student) => {return student.group.includes('გურამ სიხარულიძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_6 = students.filter((student) => {return student.group.includes('გურამ სიხარულიძე - 14:00')}).map((student, index) => {console.log(student)})
    const group_7 = students.filter((student) => {return student.group.includes('მედეია გურგენაძე - 13:00')}).map((student, index) => {console.log(student)})
    const group_8 = students.filter((student) => {return student.group.includes('მაია თევდორაშვილი - 09:15')}).map((student, index) => {console.log(student)})
    const group_9 = students.filter((student) => {return student.group.includes('ნანა მეტრეველი - 09:00')}).map((student, index) => {console.log(student)})
    const group_10 = students.filter((student) => {return student.group.includes('ნანა მეტრეველი - 12:30')}).map((student, index) => {console.log(student)})
    const group_11 = students.filter((student) => {return student.group.includes('ალექსანდრე ნემსაძე - 09:30')}).map((student, index) => {console.log(student)})
    const group_12 = students.filter((student) => {return student.group.includes('კოტე კუპატაძე - 09:00')}).map((student, index) => {console.log(student)})
    const group_13 = students.filter((student) => {return student.group.includes('კოტე კუპატაძე - 14:15')}).map((student, index) => {console.log(student)})
    const group_14 = students.filter((student) => {return student.group.includes('ეკა ონაშვილი - 13:00')}).map((student, index) => {console.log(student)})
    const group_15 = students.filter((student) => {return student.group.includes('ქეთი იოსელიანი - 09:00')}).map((student, index) => {console.log(student)})
    const group_16 = students.filter((student) => {return student.group.includes('ქეთი იოსელიანი - 11:00')}).map((student, index) => {console.log(student)})
    const group_17 = students.filter((student) => {return student.group.includes('ქეთი იოსელიანი - 13:00')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ნუგზარ მახათაძე - 09:00 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნუგზარ მახათაძე"} disabled={(25 - group_1.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>ნუგზარ მახათაძე - 12:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნუგზარ მახათაძე"} disabled={(25 - group_2.length) <= 0} value='12:30'>12:30</MenuItem>
          <MenuItem disabled>
            <em>ნონა ქუშაშვილი - 09:00 ({25 - group_3.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნონა ქუშაშვილი"} disabled={(25 - group_3.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>ნონა ქუშაშვილი - 12:30 ({25 - group_4.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნონა ქუშაშვილი"} disabled={(25 - group_4.length) <= 0} value='12:30'>12:30</MenuItem>
          <MenuItem disabled>
            <em>გურამ სიხარულიძე - 11:00 ({25 - group_5.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გურამ სიხარულიძე"} disabled={(25 - group_5.length) <= 0} value='11:00'>11:00</MenuItem>
          <MenuItem disabled>
            <em>გურამ სიხარულიძე - 14:00 ({25 - group_6.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გურამ სიხარულიძე"} disabled={(25 - group_6.length) <= 0} value='14:00'>14:00</MenuItem>
          <MenuItem disabled>
            <em>მედეია გურგენაძე - 13:00 ({25 - group_7.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მედეია გურგენაძე"} disabled={(25 - group_7.length) <= 0} value='13:00'>13:00</MenuItem>
          <MenuItem disabled>
            <em>მაია თევდორაშვილი - 09:15 ({25 - group_8.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მაია თევდორაშვილი"} disabled={(25 - group_8.length) <= 0} value='09:15'>09:15</MenuItem>
          <MenuItem disabled>
            <em>ნანა მეტრეველი - 09:00 ({25 - group_9.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნანა მეტრეველი"} disabled={(25 - group_9.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>ნანა მეტრეველი - 12:30 ({25 - group_10.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნანა მეტრეველი"} disabled={(25 - group_10.length) <= 0} value='12:30'>12:30</MenuItem>
          <MenuItem disabled>
            <em>ალექსანდრე ნემსაძე - 09:30 ({25 - group_11.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ალექსანდრე ნემსაძე"} disabled={(25 - group_11.length) <= 0} value='09:30'>09:30</MenuItem>
          <MenuItem disabled>
            <em>კოტე კუპატაძე - 09:00 ({25 - group_12.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "კოტე კუპატაძე"} disabled={(25 - group_12.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>კოტე კუპატაძე - 14:15 ({25 - group_13.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "კოტე კუპატაძე"} disabled={(25 - group_13.length) <= 0} value='14:15'>14:15</MenuItem>
          <MenuItem disabled>
            <em>ეკა ონაშვილი - 13:00 ({25 - group_14.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ეკა ონაშვილი"} disabled={(25 - group_14.length) <= 0} value='13:00'>13:00</MenuItem>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 09:00 ({25 - group_15.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_15.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 11:00 ({25 - group_16.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_16.length) <= 0} value='11:00'>11:00</MenuItem>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 13:00 ({25 - group_17.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_17.length) <= 0} value='13:00'>13:00</MenuItem>
        </Select>
      </>
    }
    if (localStorage.getItem("subject") == "წერისა და კითხვის სტრატეგიები") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 09:00 ({25 - group_15.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_15.length) <= 0} value='09:00'>09:00</MenuItem>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 11:00 ({25 - group_16.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_16.length) <= 0} value='11:00'>11:00</MenuItem>
          <MenuItem disabled>
            <em>ქეთი იოსელიანი - 13:00 ({25 - group_17.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ქეთი იოსელიანი"} disabled={(25 - group_17.length) <= 0} value='13:00'>13:00</MenuItem>
        </Select>
      </>
    }else {
      return <>
  <ul>
    <li></li>
  </ul>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else if (localStorage.getItem("StudentClass") == 7) {
    const group_1 = students.filter((student) => {return student.group.includes('ნუგზარ მახათაძე - 10:45')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('გურამ სიხარულიძე - 09:30')}).map((student, index) => {console.log(student)})
    const group_3 = students.filter((student) => {return student.group.includes('გურამ სიხარულიძე - 12:30')}).map((student, index) => {console.log(student)})
    const group_4 = students.filter((student) => {return student.group.includes('ლელა მამულაშვილი - 09:30')}).map((student, index) => {console.log(student)})
    const group_5 = students.filter((student) => {return student.group.includes('ლელა მამულაშვილი - 11:00')}).map((student, index) => {console.log(student)})
    const group_6 = students.filter((student) => {return student.group.includes('გიორგი კაკაბაძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_7 = students.filter((student) => {return student.group.includes('გიორგი კაკაბაძე - 12:30')}).map((student, index) => {console.log(student)})
    const group_8 = students.filter((student) => {return student.group.includes('თემურ გაჩეჩილაძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_9 = students.filter((student) => {return student.group.includes('თემურ გაჩეჩილაძე - 12:30')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ნუგზარ მახათაძე - 10:45 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნუგზარ მახათაძე"} disabled={(25 - group_1.length) <= 0} value='10:45'>10:45</MenuItem>
          <MenuItem disabled>
            <em>გურამ სიხარულიძე - 09:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გურამ სიხარულიძე"} disabled={(25 - group_2.length) <= 0} value='09:30'>09:30</MenuItem>
          <MenuItem disabled>
            <em>გურამ სიხარულიძე - 12:30 ({25 - group_3.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გურამ სიხარულიძე"} disabled={(25 - group_3.length) <= 0} value='12:30'>12:30</MenuItem>
          <MenuItem disabled>
            <em>ლელა მამულაშვილი - 09:30 ({25 - group_4.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ლელა მამულაშვილი"} disabled={(25 - group_4.length) <= 0} value='09:30'>09:30</MenuItem>
          <MenuItem disabled>
            <em>ლელა მამულაშვილი - 11:00 ({25 - group_5.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ლელა მამულაშვილი"} disabled={(25 - group_5.length) <= 0} value='11:00'>11:00</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("subject") == "ფიზიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>გიორგი კაკაბაძე - 11:00 ({25 - group_6.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გიორგი კაკაბაძე"} disabled={(25 - group_6.length) <= 0} value='11:00'>11:00</MenuItem>
          <MenuItem disabled>
            <em>გიორგი კაკაბაძე - 12:30 ({25 - group_7.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გიორგი კაკაბაძე"} disabled={(25 - group_7.length) <= 0} value='12:30'>12:30</MenuItem>
          <MenuItem disabled>
            <em>თემურ გაჩეჩილაძე - 11:00 ({25 - group_8.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "თემურ გაჩეჩილაძე"} disabled={(25 - group_8.length) <= 0} value='11:00'>11:00</MenuItem>
          <MenuItem disabled>
            <em>თემურ გაჩეჩილაძე - 12:30 ({25 - group_9.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "თემურ გაჩეჩილაძე"} disabled={(25 - group_9.length) <= 0} value='12:30'>12:30</MenuItem>
        </Select>
      </>
    }else {
      return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else if (localStorage.getItem("StudentClass") == 8) {
    const group_1 = students.filter((student) => {return student.group.includes('მედეია გურგენაძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ესმა ხიზანიშვილი - 09:30')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>მედეია გურგენაძე - 11:00 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მედეია გურგენაძე"} disabled={(25 - group_1.length) <= 0} value='11:00'>11:00</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("subject") == "ფიზიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ესმა ხიზანიშვილი - 09:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ესმა ხიზანიშვილი"} disabled={(25 - group_2.length) <= 0} value='09:30'>09:30</MenuItem>
        </Select>
      </>
    }else {
      return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else if (localStorage.getItem("StudentClass") == 9) {
    const group_1 = students.filter((student) => {return student.group.includes('მედეია გურგენაძე - 09:00')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('ნონა თოდუა - 10:30')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>მედეია გურგენაძე - 09:00 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "მედეია გურგენაძე"} disabled={(25 - group_1.length) <= 0} value='09:00'>09:00</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("subject") == "ფიზიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ნონა თოდუა - 10:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ნონა თოდუა"} disabled={(25 - group_2.length) <= 0} value='10:30'>10:30</MenuItem>
        </Select>
      </>
    }else {
      return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else if (localStorage.getItem("StudentClass") == 10) {
    const group_1 = students.filter((student) => {return student.group.includes('ლელა ტრაპაიძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('თემურ გაჩეჩილაძე - 09:30')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ლელა ტრაპაიძე - 11:00 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ლელა ტრაპაიძე"} disabled={(25 - group_1.length) <= 0} value='11:00'>11:00</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("subject") == "ფიზიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>თემურ გაჩეჩილაძე - 09:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "თემურ გაჩეჩილაძე"} disabled={(25 - group_2.length) <= 0} value='09:30'>09:30</MenuItem>
        </Select>
      </>
    }else {
      return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else if (localStorage.getItem("StudentClass") == 11 || localStorage.getItem("StudentClass") == 12) {
    const group_1 = students.filter((student) => {return student.group.includes('ლელა ტრაპაიძე - 11:00')}).map((student, index) => {console.log(student)})
    const group_2 = students.filter((student) => {return student.group.includes('გიორგი კაკაბაძე - 09:30')}).map((student, index) => {console.log(student)})
    if (localStorage.getItem("subject") == "მათემატიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>ლელა ტრაპაიძე - 11:00 ({25 - group_1.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "ლელა ტრაპაიძე"} disabled={(25 - group_1.length) <= 0} value='11:00'>11:00</MenuItem>
        </Select>
      </>
    }else if (localStorage.getItem("subject") == "ფიზიკა") {
      return <>
        <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
          <MenuItem disabled>
            <em>გიორგი კაკაბაძე - 09:30 ({25 - group_2.length} ადგილი) - <b>ჯგუფის ასარჩევად გთხოვთ აირჩიოთ შესაბამისი მასწავლებელი</b></em>
          </MenuItem>
          <MenuItem style={{textAlign: "start"}} hidden={localStorage.getItem("TeacherName") != "გიორგი კაკაბაძე"} disabled={(25 - group_2.length) <= 0} value='09:30'>09:30</MenuItem>
        </Select>
      </>
    }else {
      return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროების ჩამოტვირთვა ვერ მოხერხდა</MenuItem>
      </Select>
    </>
    }
  }else{
    return <>
      <Select {...register("teachers", { required: true })} error={errors.teachers} id="teachers" name="teachers" value={localStorage.getItem("TeacherTime")} onChange={getTime} style={{textAlign: "start"}}>
        <MenuItem style={{textAlign: "start"}} disabled>დროის ასარჩევად გთხოვთ აირჩიოთ მასწავლებელი</MenuItem>
      </Select>
    </>
  }
}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        დროისა და მასწავლებლის არჩევა
      </Typography>
      <form noValidate onSubmit={handleSubmit(TeacherAndTime)} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label" style={{textAlign: "start"}}>მასწავლებელი</InputLabel>
              <DisplayTeachers/>
              {errors.class && <FormHelperText style={{color: "red"}}>მასწავლებლის არჩევა აუცილებელია</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl style={{textAlign: "start"}} className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">დროები მასწავლებლების მიხედვით</InputLabel>
              <SetTeacherGroup/>
              {errors.teachers && <FormHelperText style={{color: "red"}}>დროის არჩევა აუცილებელია</FormHelperText>}
            </FormControl>
          </Grid>
          {/* <Button type="submit" disabled={loading} variant="contained" color="primary">
            <SaveIcon/> <span> </span> <span style={{fontSize: "16px"}}>შენახვა</span>
          </Button> */}
        </Grid>
      </form>
    </React.Fragment>
  );
}