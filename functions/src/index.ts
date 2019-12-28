import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);


exports.newProjectAdded=functions.firestore.document("projects/{projectsId}")
.onCreate(async (event,context) =>{
    //const data =    event.data();
    
    try{
                var snap= await admin.firestore().collection("projects").doc(context.params.projectsId).get();



            const projectname = snap.data()?.name;
            const clientuid = snap.data()?.client;
            const manager = snap.data()?.manager;
            

            
            var token="";
            var managername=""
            
            // ref to the device collection for the user
            const db = admin.firestore()
            var clientRef = db.collection('users').where('uid', '==', clientuid)
            var manageRef = db.collection('users').where('uid', '==', manager)
            token=(await clientRef.get()).docs[0].data().token;
            managername=(await manageRef.get()).docs[0].data().username;
            
            // Notification content
            const payload = {
            notification: {
                title: `New project ${projectname}`,
                body: `${managername} is adding to new project`,
                icon: 'https://goo.gl/Fz9nrQ'
            }
            }

            

            return admin.messaging().sendToDevice(token, payload)
    }catch(e){
        return null;
    }
})




