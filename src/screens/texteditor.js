import React, { Component, useState, useEffect, Fragment } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';
import {
    firestore
} from '../firebase/firebase.config'

function TextEditor() {
    const [law] = useState([]);

    useEffect(() => {
    }, [])
  
    const addDoc = async () => {
      const law = document.getElementsByClassName("ck-content").value;
      await firestore.collection("ck-content").add({
        law: law
      }).then(() => {
        document.getElementsByClassName("ck-content").value = "";
      })
    }

    return (
        <div className="editor">
            <div id="firepad-container"></div>
            <Fragment>
                <CKEditor
                    editor={ ClassicEditor }
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    id="laws"
                />
                <Button variant="contained" color="primary" component="span" onClick={() => addDoc()}>ატვირთვა</Button>
            </Fragment>
        </div>
    )
}

export default TextEditor;
