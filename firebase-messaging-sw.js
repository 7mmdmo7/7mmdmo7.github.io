importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBFOfIBJTtApnXr8QOtONnpkQFqimAbQvs",
    authDomain: "weewee-admin.firebaseapp.com",
    projectId: "weewee-admin",
    storageBucket: "weewee-admin.appspot.com",
    messagingSenderId: "638134686040",
    appId: "1:638134686040:web:fb13e402ee36fec2f1152d",
    measurementId: "G-1NSZS2YM88"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body,
        icon: '/assets/logo2.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});