import { secondaryApp } from '../firebase/firebase.config';

function CheckPupil(personalNumber) {
        let promise = new Promise((res, rej) =>  {["3p","4p","5p","6p","7p","8p","9p","10p","11p","12p"].forEach(item => {
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