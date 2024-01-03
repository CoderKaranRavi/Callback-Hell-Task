document.addEventListener('DOMContentLoaded', function () {
    // Initial countdown value
    let count = 10;
  
    // Start the countdown
    countdown(count, function () {
      // Callback when the countdown completes
      displayMessage("Happy 77th Independence Day");
    });
  });
  
  // Countdown function with callback
  function countdown(number, callback) {
    if (number > 0) {
      // Display the current countdown value
      document.getElementById('countdown').innerText = number;
  
      // Decrease the countdown value
      number--;
  
      // Use setTimeout for asynchronous delay
      setTimeout(function () {
        // Recursive call to countdown function with the updated value
        countdown(number, callback);
      }, 1000);
    } else {
      // When countdown completes, execute the callback
      callback();
    }
  }
  
  // Function to display a message
  function displayMessage(message) {
    document.getElementById('countdown').innerText = message;
  }