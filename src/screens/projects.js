import React, { useState, useEffect } from 'react'
import { Pagination } from "@material-ui/lab"
import usePagination from "./Pagination";
import { auth, firestore, firebase } from '../firebase/firebase.config'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@material-ui/core/TextField';
import { Helmet } from "react-helmet";

function Projects() {
    let [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [size, getSize] = useState([])
    const [value, onChange] = useState(new Date());
    useEffect(() => {
        getPosts();
    }, [])
    const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
    const getPosts = async () => {
        const data = await firestore.collection("projects").orderBy("number", "desc").get();
        console.log(data);
        setPosts(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
        console.log(data);
    }
    const useStyles = makeStyles({
        card: {
          display: 'flex',
        },
        cardDetails: {
          flex: 1,
        },
        cardMedia: {
          width: 160,
        },
      });
    const classes = useStyles();
    const PER_PAGE = 10;
    firestore.collection('projects').get().then(async function (querySnapshot) {
        const size = querySnapshot.size;
        getSize(size)
    });
    const count = Math.ceil(size / PER_PAGE);
    console.log(posts.lenght)
    const _DATA = usePagination(posts, PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const mainMonth = month + 1;
    const addPosts = async () => {
        firestore.collection('projects').get().then(async function (querySnapshot) {
            const size = querySnapshot.size;
            const id = size + 1;
            const title = document.getElementById("title").value;
            const url = document.getElementById("photo").value;
            const content = editorRef.current.getContent();
            const date = `${day}.${mainMonth}.${year} წ.`
            await firestore.collection("projects").add({
                title: title,
                url: url,
                date: date,
                number: `${id}`,
                content: content
            }).then(() => {
                document.getElementById("title").value = "";
                document.getElementById("photo").value = "";
            })
        });
    }
   
    var user = firebase.auth().currentUser;
    const signOut = async () => {
        firebase.auth().signOut().then(() => {<Redirect to="/" />}).catch((error) => {})
    }
    const editorRef = useRef(null)
    let { path, url } = useRouteMatch();
    if (user) {
        return <>
             <Route>
                <Helmet>
                    <title>პროექტები და პროგრამები</title>
                </Helmet>
                <br />
                <h2>პროექტები და პროგრამები</h2>
                <br />
                <Link to="/"><Button variant="contained" color="secondary" onClick={signOut}>გასვლა</Button></Link>
                <div className="post-form">
                    <form action="" className="add-post">
                        <br />
                        <br />
                        <h2 style={{textAlign: "center"}}>პროექტის დამატება</h2>
                        <br />
                        <br />
                        <TextField id="title" label="სათაური" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <TextField id="photo" label="ფოტოს URL" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <Editor
                            // initialValue="<p>Initial content</p>"
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor image | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            
                            id="content"
                            />
                        <Button variant="contained" fullWidth color="primary" onClick={() => addPosts()} style={{textAlign: "center"}}>დამატება</Button>
                    </form>
                </div>
                <div className="news">
                    <div className="other-staff">
                        <div className="quick-link">
                            <a href="https://mes.gov.ge" title="განათლების სამინისტრო" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/mes.png" style={{height: "70px"}} alt="" className="quck-img" /></div></a>
                            <a href="http://www.emis.ge/" title="განათლების მართვის საინფორმაციო სისტემა" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/emisi.png" alt="" className="quck-img" /></div></a>
                            <a href="https://www.naec.ge/" title="შეფასებისა და გამოცდების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/naeci.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.rustaveli.org.ge/" title="შოთა რუსთაველის ეროვნული სამეცნიერო ფონდი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/rustavel.png" alt="" className="quck-img" /></div></a>
                            <a href="http://mandaturi.gov.ge" title="საგანმანათლებლო დაწესებულების მანდატურის სამსახური" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/mandatur.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.tpdc.ge/" title="მასწავლებელთა პროფესიული განვითარების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/maswavlebel.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.eqe.ge/" title="განათლების ხარისხის განვითარების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px", marginBottom: "20px"}}><img src="/eqe.png" alt="" className="quck-img" /></div></a>
                        </div>
                        <Calendar 
                            value={dateState}
                            onChange={changeDate}
                            style={{margin: "auto"}}
                        />
                    </div>
                    <div className="news-container">
                        <br />
                        <br />
                        <br />
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            color="primary"
                            onChange={handleChange}
                        />
                        <br />
                            {_DATA.currentData().map(v => {
                            return (
                                // <ListItem key={v.number} listStyleType="disc">
                                // <span>{v.title}</span>{" "}
                                // <Divider display="inline" orientation="vertical" />
                                // <span> {v.content}</span>{" "}
                                // <Divider display="inline" orientation="vertical" />
                                // <span>
                                // </span>
                                // </ListItem>
                                <Grid item xs={12} md={6} >
                                    <Link to={`${url}/${v.id}`}>
                                        <CardActionArea component="a">
                                            <Card className={classes.card}>
                                            <div className={classes.cardDetails}>
                                                <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {v.title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {v.date}
                                                </Typography>
                                                {/* <Typography variant="subtitle1" paragraph>
                                                    {v.content}
                                                </Typography> */}
                                                <Typography variant="subtitle1" color="primary">
                                                    ვრცლად...
                                                </Typography>
                                                </CardContent>
                                            </div>
                                            <Hidden xsDown>
                                                <CardMedia className={classes.cardMedia} image={v.url} title={v.title} />
                                            </Hidden>
                                            </Card>
                                        </CardActionArea>
                                    </Link>
                                </Grid>
                            );
                            })}
                        <br />
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            color="primary"
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                </div>
            </Route>
        </>
    }else {
        return (
            <Route>
                <Helmet>
                    <title>პროექტები და პროგრამები</title>
                </Helmet>
                <br />
                <h2>პროექტები და პროგრამები</h2>
                <div className="news">
                    <div className="other-staff">
                        <div className="quick-link">
                            <a href="https://mes.gov.ge" title="განათლების სამინისტრო" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/mes.png" style={{height: "70px"}} alt="" className="quck-img" /></div></a>
                            <a href="http://www.emis.ge/" title="განათლების მართვის საინფორმაციო სისტემა" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/emisi.png" alt="" className="quck-img" /></div></a>
                            <a href="https://www.naec.ge/" title="შეფასებისა და გამოცდების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/naeci.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.rustaveli.org.ge/" title="შოთა რუსთაველის ეროვნული სამეცნიერო ფონდი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/rustavel.png" alt="" className="quck-img" /></div></a>
                            <a href="http://mandaturi.gov.ge" title="საგანმანათლებლო დაწესებულების მანდატურის სამსახური" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/mandatur.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.tpdc.ge/" title="მასწავლებელთა პროფესიული განვითარების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px"}}><img src="/maswavlebel.png" alt="" className="quck-img" /></div></a>
                            <a href="http://www.eqe.ge/" title="განათლების ხარისხის განვითარების ეროვნული ცენტრი" target="_blank" className="mes"><div className="quick" style={{clear: "both", marginTop: "20px", marginBottom: "20px"}}><img src="/eqe.png" alt="" className="quck-img" /></div></a>
                        </div>
                        <Calendar 
                            value={dateState}
                            onChange={changeDate}
                            style={{margin: "auto"}}
                        />
                    </div>
                    <div className="news-container" style={{width: "60%"}}>
                        <br />
                        <br />
                        <br />
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            color="primary"
                            onChange={handleChange}
                        />
                        <br />
                            {_DATA.currentData().map(v => {
                                if (v.status == 'enabled') {
                                    return (
                                        // <ListItem key={v.number} listStyleType="disc">
                                        // <span>{v.title}</span>{" "}
                                        // <Divider display="inline" orientation="vertical" />
                                        // <span> {v.content}</span>{" "}
                                        // <Divider display="inline" orientation="vertical" />
                                        // <span>
                                        // </span>
                                        // </ListItem>
                                        <Grid item xs={12} md={6} >
                                            <Link to={`${url}/${v.id}`}>
                                                <CardActionArea component="a">
                                                    <Card className={classes.card}>
                                                    <div className={classes.cardDetails}>
                                                        <CardContent>
                                                        <Typography component="h2" variant="h5">
                                                            {v.title}
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="textSecondary">
                                                            {v.date}
                                                        </Typography>
                                                        {/* <Typography variant="subtitle1" paragraph>
                                                            {v.content}
                                                        </Typography> */}
                                                        <Typography variant="subtitle1" color="primary">
                                                            ვრცლად...
                                                        </Typography>
                                                        </CardContent>
                                                    </div>
                                                    <Hidden xsDown>
                                                        <CardMedia className={classes.cardMedia} image={v.url} title={v.title} />
                                                    </Hidden>
                                                    </Card>
                                                </CardActionArea>
                                            </Link>
                                        </Grid>
                                    );
                                }
                            })}
                        <br />
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            color="primary"
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                </div>
            </Route>
        )
    }
}

export default Projects
