import { secondaryApp } from '../firebase/firebase.config';

function CheckPupil(personalNumber) {
        let promise = new Promise((res, rej) =>  {["3","4","5","6","7","8","9","10","11","12"].forEach(item => {
          secondaryApp.firestore().collection(item).where("id", "==", `${personalNumber}`)
          .get()
          .then((querySnapshot) => {
            if(item == "11" && querySnapshot.empty){
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
                        data: doc.data()
                    })
                  }
              });
            }
          })
          .catch((error) => {
              alert(error)
          });
        })
      })
      return promise
}

export default CheckPupil
