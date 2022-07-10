import React, {useEffect, useState} from 'react';
import { firestore, auth } from '../firebase/firebase.config';
import Data from './classesScroll';

function AddGrade() {
    const [posts, setPosts] = useState([]);
    if (auth.currentUser) {
        const SaturdaySchoolGrade = async () => {
            const id = document.getElementById("idNumber").value;
            const ClassNumber = document.getElementById("class").value;
            const code = document.getElementById("UniqueNumber").value;
            if (ClassNumber == 7) {
                const p = document.getElementById("p").value;
                const m = document.getElementById("m").value;
                await firestore.collection(`${ClassNumber}`).add({
                    idNumber: id,
                    code: code,
                    m: m,
                    class: ClassNumber
                }).then(() => {
                    document.getElementById("idNumber").value = "";
                    document.getElementById("UniqueNumber").value = "";
                    document.getElementById("m").value = "";
                    document.getElementById("p").value = "";
                })
            }
            else if (ClassNumber == 8 || ClassNumber == 9 || ClassNumber == 10 || ClassNumber == 11) {
                const p = document.getElementById("p").value;
                const m = document.getElementById("m").value;
                await firestore.collection(`${ClassNumber}`).add({
                    idNumber: id,
                    code: code,
                    p: p,
                    m: m,
                    class: ClassNumber
                }).then(() => {
                    document.getElementById("idNumber").value = "";
                    document.getElementById("UniqueNumber").value = "";
                    document.getElementById("p").value = "";
                    document.getElementById("m").value = "";
                })
            }
        }
        const OthersGrade = async () => {
            const ClassNumber = document.getElementById("classNumber").value;
            const code = document.getElementById("uniqueNumber").value;
            if (ClassNumber == 7) {
                const m = document.getElementById("math").value;
                await firestore.collection(ClassNumber).where("code", "==", code).get().then(async () => {
                    const data = await firestore.collection(ClassNumber).get();
                    setPosts(data.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    })))
                    posts.map(async (post, index) => {
                        if (post.code == code) {
                            await firestore.collection(ClassNumber).doc(post.id).update({
                                m: m,
                            }).then(() => {
                                document.getElementById("uniqueNumber").value = "";
                                document.getElementById("math").value = "";
                            })
                        }
                    })
                });
            }
            else if (ClassNumber == 8 || ClassNumber == 9 || ClassNumber == 10 || ClassNumber == 11) {
                const p = document.getElementById("physics").value;
                const m = document.getElementById("math").value;
                await firestore.collection(ClassNumber).where("code", "==", code).get().then(async () => {
                    const data = await firestore.collection(ClassNumber).get();
                    setPosts(data.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    })))
                    posts.map(async (post, index) => {
                        if (post.code == code) {
                            await firestore.collection(ClassNumber).doc(post.id).update({
                                p: p,
                                m: m,
                            }).then(() => {
                                document.getElementById("uniqueNumber").value = "";
                                document.getElementById("physics").value = "";
                                document.getElementById("math").value = "";
                            })
                        }
                    })
                });
            }
        }
        const AppealGrade = async () => {
            const ClassNumber = document.getElementById("grade").value;
            const code = document.getElementById("code").value;
            if (ClassNumber == 7) {
                const m = document.getElementById("MathAppeal").value;
                await firestore.collection(ClassNumber).where("code", "==", code).get().then(async () => {
                    const data = await firestore.collection(ClassNumber).get();
                    setPosts(data.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    })))
                    posts.map(async (post, index) => {
                        if (post.code == code) {
                            await firestore.collection(ClassNumber).doc(post.id).update({
                                ap_m: m,
                            }).then(() => {
                                document.getElementById("code").value = "";
                                document.getElementById("MathAppeal").value = "";
                            })
                        }
                    })
                });
            }
            else if (ClassNumber == 8 || ClassNumber == 9 || ClassNumber == 10 || ClassNumber == 11) {
                const p = document.getElementById("PhysicsAppeal").value;
                const m = document.getElementById("MathAppeal").value;
                await firestore.collection(ClassNumber).where("code", "==", code).get().then(async () => {
                    const data = await firestore.collection(ClassNumber).get();
                    setPosts(data.docs.map(doc => ({
                        ...doc.data(),
                        id: doc.id
                    })))
                    posts.map(async (post, index) => {
                        if (post.code == code) {
                            await firestore.collection(ClassNumber).doc(post.id).update({
                                ap_p: p,
                                ap_m: m,
                            }).then(() => {
                                document.getElementById("code").value = "";
                                document.getElementById("PhysicsAppeal").value = "";
                                document.getElementById("MathAppeal").value = "";
                            })
                        }
                    })
                });
            }
        }
        return <>
            <Data/>
            <br />
            <form action="">
                <p>საშაბათოს მოსწავლეების ქულები</p>
                <input type="number" id='class' placeholder='კლასი' /> <br /><br />
                <input type="number" id='UniqueNumber' placeholder='უნიკალური ნომერი' /> <br /><br />
                <input type="text" id='idNumber' placeholder='პირადი ნომერი' /> <br /><br />
                <input type="number" id='m' placeholder='მათემატიკის ქულა' /> <br /><br />
                <input type="number" id='p' placeholder='ფიზიკა ქულა' /> <br /><br />
                <input type="button" onClick={SaturdaySchoolGrade} value="ქულის მინიჭება" />
            </form>
            <hr />
            <form action="">
                <p>არასაშაბათოების ქულები</p>
                <input type="text" id='classNumber' placeholder='კლასი' /> <br /><br />
                <input type="number" id='uniqueNumber' placeholder='უნიკალური ნომერი' /> <br /><br />
                <input type="number" id='math' placeholder='მათემატიკის ქულა' /> <br /><br />
                <input type="number" id='physics' placeholder='ფიზიკა ქულა' /> <br /><br />
                <input type="button" onClick={OthersGrade} value="ქულის მინიჭება" />
            </form>
            <hr />
            <form action="">
                <p>აპელაციის ქულის შეტანა</p>
                <input type="text" id='grade' placeholder='კლასი' /> <br /><br />
                <input type="number" id='code' placeholder='უნიკალური ნომერი' /> <br /><br />
                <input type="number" id='MathAppeal' placeholder='მათემატიკის აპელაციის ქულა' /> <br /><br />
                <input type="number" id='PhysicsAppeal' placeholder='ფიზიკის აპელაციის ქულა' /> <br /><br />
                <input type="button" onClick={AppealGrade} value="ქულის მინიჭება" />
            </form>
        </>
    }else {
        return ""
    }
}

export default AddGrade