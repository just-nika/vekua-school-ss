import React, {Fragment, useEffect, useState} from 'react';
import { firebase, auth, firestore } from '../firebase/firebase.config';

function Single() {  
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, [])
    const {id} = "aJpnMvmNSRU3IkBGn6Gu"
    const getPosts = async () => {
        const data = await firestore.collection("posts").get();
        setPosts(data.docs.map(doc => ({
          ...doc.data(),
          id: id
        })))
    }
    {
        posts.map((post, index) => {
            const html = `${post.content}`;
            return (
                <div key="index">
                    <div className="single-background" ></div>
                    <p>ა</p>
                </div>
            )
        })
    }
}
export default Single