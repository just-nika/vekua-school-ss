import { firestore } from '../firebase/firebase.config';

function CheckPupil(personalNumber) {
        let promise = new Promise((res, rej) =>  {["7","8","9","10","11"].forEach(item => {
          firestore.collection(item).where("idNumber", "==", `${personalNumber}`)
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
