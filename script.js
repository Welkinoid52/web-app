document.getElementById('changeBtn').addEventListener('click', function() {
    var msg = document.getElementById('message');
    if (msg.textContent === 'Welcome to the Simple Web App!') {
        msg.textContent = 'You clicked the button!';
    } else {
        msg.textContent = 'Welcome to the Simple Web App!';
    }
});
