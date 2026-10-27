// Drop the Addy. Copyright (C) 2026 Callofdutygamer1950. Licensed under the GNU AGPL v3 with additional terms: see LICENSE and NOTICE.
// Service worker: makes Drop the Addy installable and shows push notifications
// sent through Firebase Cloud Messaging while the site is closed.
// Firebase config values are injected at deploy time by the GitHub Actions workflow.
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "__FIREBASE_API_KEY__",
  authDomain: "__FIREBASE_AUTH_DOMAIN__",
  projectId: "__FIREBASE_PROJECT_ID__",
  messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
  appId: "__FIREBASE_APP_ID__"
});

// Messages sent with a "notification" payload are displayed automatically by the SDK
if (firebase.messaging.isSupported()) {
  firebase.messaging();
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
