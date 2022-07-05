import { firestore } from '../firebase/firebase.config';

function CheckPupilGrade(personalNumber) {
        let promise = new Promise((res, rej) =>  {["7_grade","8_grade","9_grade","10_grade","11_grade"].forEach(item => {
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

export default CheckPupilGrade
