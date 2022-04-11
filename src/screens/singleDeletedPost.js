import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import { firebase, firestore, auth } from '../firebase/firebase.config'
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from "react-helmet";
import { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@material-ui/core/TextField';
import Error from './error';
import swal from 'sweetalert';

function SingleDeletedPost() {
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        const data = await firestore.collection("posts").get();
        console.log(data);
        setPosts(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
        console.log(data);
    }
    const updatePost = async (id) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const title = document.getElementById("title").value;
        const url = document.getElementById("url").value;
        const content = editorRef.current.getContent();
        const mainMonth = month + 1;
        const date = `${day}.${mainMonth}.${year} წ.`
        await firestore.collection("posts").doc(id).update({
            title: title,
            url: url,
            content: content
        }).then(() => getPosts());
    }
    console.log(posts)
    var user = firebase.auth().currentUser;
    const editorRef = useRef(null);
    const disPost = async (id) => {
        await firestore.collection("posts").doc(id).update({status: 'enabled'}).then(() => {getPosts(); swal("პოსტი წარმატებით განახლდა!", "", "success")});
    }
    if (user) {
        return (
            <div>
                {
                    posts.map((post, index) => {
                        if (post.id == id) {
                        const html = post.content
                        if (post.url == "") {
                            return (
                                <div>
                                    <br />
                                    <br />
                                    <Helmet>
                                        {/* <meta property="og:title" content="vekua" />
                                        <meta property="og:image" content="https://i.postimg.cc/3RBbXVRq/TV.png"/>
                                        <meta property="og:description" content="DESCRIPTION OF YOUR SITE" />
                                        <meta property="og:url" content="URL OF YOUR WEBSITE"/>
                                        <meta property="og:image:width" content="1200" />
                                        <meta property="og:image:height" content="627" /> */}
                                        <title>{post.title}</title>
                                    </Helmet>
                                    <form action="" style={{padding: "30px"}}>
                                        <TextField id="title" defaultValue={`${post.title}`} label="სათაური" variant="filled" style={{width: "100%"}}/>
                                        <br />
                                        <br />
                                        <TextField id="url" defaultValue={`${post.url}`} label="ფოტოს URL" variant="filled" style={{width: "100%"}}/>
                                        <br />
                                        <br />
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue={`${html}`}
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
                                        />
                                            {/* { ReactHtmlParser(html) } */}
                                        <br />
                                        <div className="edit-group" style={{display: "flex", justifyContent: "space-around"}}>
                                            <Button variant="contained" style={{width: "45%", textAlign: "center"}} fullWidth color="primary" onClick={() => updatePost(post.id)}>პოსტის ჩასწორება</Button>
                                            <Button variant="contained" style={{width: "45%", textAlign: "center"}} fullWidth color="secondary" onClick={() => disPost(post.id)}>პოსტის წაშლა</Button>
                                        </div>
                                    </form>
                                    <br />
                                    <br />
                                    <p style={{textAlign: "right", padding: "20px"}}><small><i>{post.date}</i></small></p>
                                </div>
                            )
                        }else {
                            return (
                                <div>
                                    <br />
                                    <br />
                                    <Helmet>
                                        {/* <meta property="og:title" content="vekua" />
                                        <meta property="og:image" content="https://i.postimg.cc/3RBbXVRq/TV.png"/>
                                        <meta property="og:description" content="DESCRIPTION OF YOUR SITE" />
                                        <meta property="og:url" content="URL OF YOUR WEBSITE"/>
                                        <meta property="og:image:width" content="1200" />
                                        <meta property="og:image:height" content="627" /> */}
                                        <title>{post.title}</title>
                                    </Helmet>
                                    <div style={{backgroundImage: `url(${post.url})`, maxWidth: "100%", height: "700px", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                                    <form action="" style={{padding: "30px"}}>
                                        <TextField id="title" defaultValue={`${post.title}`} label="სათაური" variant="filled" style={{width: "100%"}}/>
                                        <br />
                                        <br />
                                        <TextField id="url" defaultValue={`${post.url}`} label="ფოტოს URL" variant="filled" style={{width: "100%"}}/>
                                        <br />
                                        <br />
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue={`${html}`}
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
                                        />
                                            {/* { ReactHtmlParser(html) } */}
                                        <br />
                                        <div className="edit-group" style={{display: "flex", justifyContent: "space-around"}}>
                                            <Button variant="contained" style={{width: "45%", textAlign: "center"}} fullWidth color="primary" onClick={() => updatePost(post.id)}>პოსტის ჩასწორება</Button>
                                            <Button variant="contained" style={{width: "45%", textAlign: "center"}} fullWidth onClick={() => disPost(post.id)}>პოსტის თავიდან დადება</Button>
                                        </div>
                                    </form>
                                    <br />
                                    <br />
                                    <p style={{textAlign: "right", padding: "20px"}}><small><i>{post.date}</i></small></p>
                                </div>
                            )
                        }
                    }
                })
                }
            </div>
        )
    }
}

export default SingleDeletedPost