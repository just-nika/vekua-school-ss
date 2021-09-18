import { secondaryApp } from '../firebase/firebase.config';

function CheckPupil(personalNumber, item) {
    let promise = new Promise((res, rej) => {
      secondaryApp.firestore().collection(`${item}`).where("idNumber", "==", `${personalNumber}`).get()
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
