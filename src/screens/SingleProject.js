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

function SingleProject() {
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
        useEffect(() => {
            getPosts();
        }, [])
        const getPosts = async () => {
            const data = await firestore.collection("projects").get();
            console.log(data);
            setPosts(data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })))
            console.log(data);
        }
        const editorRef = useRef(null)
    const updatePost = async (id) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const title = document.getElementById("title").value;
        const url = document.getElementById("url").value;
        const content = editorRef.current.getContent();
        const mainMonth = month + 1;
        const date = `${day}.${mainMonth}.${year} წ.`
        await firestore.collection("projects").doc(id).update({
            title: title,
            url: url,
            content: content
        }).then(() => getPosts());
    }
    const enablePost = async () => {
        const status = 'enabled'
        const id = id;
        await firestore.collection("projects").doc(id).update({
            status: status
        }).then(() => getPosts());
    }
    const disablePost = async () => {
        const status = 'disabled'
        const id = id;
        await firestore.collection("projects").doc(id).update({
            status: status
        }).then(() => getPosts());
    }
    var user = firebase.auth().currentUser;
    console.log(posts)
    if (user) {
        return <>
        {
            posts.map((post, index) => {
                function Delete() {
                    if (post.status === "enabled") {
                        return (
                            <a href="/projects"><Button variant="contained" color="secondary" fullWidth onClick={disablePost}>პოსტის დაბლოკვა</Button></a>
                        );
                    }else if (post.status === "disabled") {
                        return (
                            <a href="/projects"><Button variant="contained" fullWidth onClick={enablePost}>პოსტის გააქტიურება</Button></a>
                        );
                    }
                }
                const html = `${post.content}`;
                if (post.id == id) {
                    return (
                        <div className="full">
                            <Helmet>
                                <title>
                                    {post.title}
                                </title>
                            </Helmet>
                            <div style={{backgroundImage: `url(${post.url})`, width: "100%", height: "500px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
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
                                <Button variant="contained" style={{width: "auto !important"}} fullWidth color="primary" onClick={() => updatePost(post.id)} style={{textAlign: "center"}}>პოსტის ჩასწორება</Button>
                                <br />
                                <br />
                            </form>
                            <br />
                            <br />
                            <p style={{textAlign: "right", padding: "20px"}}><small><i>{post.date}</i></small></p>
                        </div>
                        )
                    }
            })
        }  
        </>
    }else {
        return (
            <div>
                {
                posts.map((post, index) => {
                    if (post.id == id) {
                        if (post.status == 'enabled') {
                            const html = post.content;
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
                                        <h2>{post.title}</h2>
                                        <div className="post-text" style={{textAlign: "start", padding: "20px", width: "100%"}}>
                                            <p>{ ReactHtmlParser(html) }</p>
                                        </div>
                                        <br />
                                        <br />
                                        <p style={{textAlign: "right", padding: "20px"}}><small><i>{post.date}</i></small></p>
                                    </div>
                                );
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
                                        <div style={{backgroundImage: "url('https://i.postimg.cc/XNKCLj1F/No-Background.png')", width: "100%", height: "300px", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                        <br />
                                        <h2>{post.title}</h2>
                                        <div className="post-text" style={{textAlign: "start", padding: "20px", width: "100%"}}>
                                            <p>{ ReactHtmlParser(html) }</p>
                                        </div>
                                        <br />
                                        <br />
                                        <p style={{textAlign: "right", padding: "20px"}}><small><i>{post.date}</i></small></p>
                                    </div>
                                );
                            }
                        }else if(post.status == 'disabled') {
                            return <Error />
                        }
                    }
                })
                }
            </div>
        )
    }
}

export default SingleProject