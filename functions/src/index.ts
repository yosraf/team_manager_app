import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


import * as admin from 'firebase-admin';


admin.initializeApp(functions.config().firebase);

var image="https://firebasestorage.googleapis.com/v0/b/gestioncollab.appspot.com/o/logo_1.png?alt=media&token=75690521-fe12-4ab3-9528-05099d098783"

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
                body: `${managername} assigned you  to a new project`,
                route:"/homes/clientProjects",
                icon: image
            }
            }

            console.log(payload);
            

            return admin.messaging().sendToDevice(token, payload)
    }catch(e){
        return null;
    }
})

exports.newPropositionAdded=functions.firestore.document("propositions/{propositionId}")
.onCreate(async (event,context) =>{
    //const data =    event.data();
    
    try{
                var snap= await admin.firestore().collection("propositions").doc(context.params.propositionId).get();



            const projectname = snap.data()?.name;
            const clientuid = snap.data()?.client;
            const manager = snap.data()?.manager;
            

            
            var token="";
            var clientname=""
            
            // ref to the device collection for the user
            const db = admin.firestore()
            var clientRef = db.collection('users').where('uid', '==', clientuid)
            var manageRef = db.collection('users').where('uid', '==', manager)
            token=(await manageRef.get()).docs[0].data().token;
            clientname=(await clientRef.get()).docs[0].data().username;
            
            // Notification content
            const payload = {
            notification: {
                title: `New project ${projectname}`,
                body: `${clientname} assigned you  to a new project`,
                route:"/client-propositions",
                icon: image
            }
            }

            console.log(payload);
            

            return admin.messaging().sendToDevice(token, payload)
    }catch(e){
        return null;
    }
})

exports.propsitionRefused=functions.firestore.document("refusedprops/{propositionId}")
.onCreate(async (event,context) =>{
    //const data =    event.data();
    
    try{
                var snap= await admin.firestore().collection("refusedprops").doc(context.params.propositionId).get();



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
                body: `${managername} refused your propositon`,
                route:"/rejected-propositions",
                icon: image
            }
            }
            console.log(payload);
            

            return admin.messaging().sendToDevice(token, payload)
    }catch(e){
        return null;
    }
})


