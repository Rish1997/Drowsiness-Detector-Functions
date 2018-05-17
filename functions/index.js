const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendAlert = functions.https.onRequest((req,res) => {

    var message = {
      data : {
        mess : ""
      }
    };
    var token = "dJifgujh610:APA91bEi5Rmm6CUn4kv1zPQgb-zpgxOSlImDCCmMVtUHwiIEqj2w7mQYqWfjRu1ze9lSf31tM78rNOa2n-96gRkL2XityiXEfyZDL-hK5WyOFFUtvhciE9J4hvk1HmGJlQbvFneYh1If"
    
    var payload = {
      notification: {
          title: 'Alert',
          body: `Someone is Sleeping while driving at your nearby place.`,
          icon: 'https://goo.gl/Fz9nrQ'
      }
    }
    var options = {priority : "High", timeToLive : 5000}


    admin.messaging().sendToDevice(token ,payload ,options)
    .then((response)=>{
        console.log("Successfully Sent");
        console.log(response);
        res.status(200).send("It Worked!!");
      }).catch((error) => {
        console.log("Error sending message " , error);
        res.send("Didn't work!!");
      })
});

