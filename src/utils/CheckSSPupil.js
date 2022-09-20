import { firestore } from '../firebase/firebase.config';

function CheckPupil(personalNumber) {
    let promise = new Promise((res, rej) => {
      firestore.collection(`${localStorage.getItem("subject")}`).where("StudentPersonalNumber", "==", `${personalNumber}`).get()
      .then((querySnapshot) => {
        if(querySnapshot.empty){
          res({
              status: false,
              data: null
          })
        }
        if(!querySnapshot.empty){
          querySnapshot.forEach((doc) => {
            if(JSON.stringify(doc.data()) !== "{}"){
                res({
                      status: true,
                      data: doc.data(),
                  })
              }
          });
        }
      })
      .catch((error) => {
          alert(error)
      });
  })
  return promise
}

export default CheckPupil
