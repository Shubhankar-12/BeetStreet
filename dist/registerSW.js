if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/BeetStreet/sw.js', { scope: '/BeetStreet/' })})}