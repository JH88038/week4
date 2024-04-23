// palindrome check & responses

document.getElementById('checkButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    if (userInput) {
      var isPalindrome = userInput.split('').reverse().join('') === userInput;
      alert(isPalindrome ? 'The word is a palindrome!' : 'The word is not a palindrome.');
      document.getElementById('userInput').value = ''; 
      
      // Clear the input box
    }
  });

  

  // Function to check if the string is a palindrome

function checkPalindrome() {

    // Get the string from the input box
    let userString = document.getElementById('userInput').value;
    if (userString) {

      // Remove spaces and convert to lowercase
      let formattedString = userString.replace(/\s+/g, '').toLowerCase();

      // Check if the string is spelled the same forwards and backwards
      let isPalindrome = formattedString === formattedString.split('').reverse().join('');
      
      // Notify the user if the string is a palindrome or not
      alert(isPalindrome ? 'The string is a palindrome!' : 'The string is not a palindrome.');
    }
    // Clear the input box after checking
    document.getElementById('userInput').value = '';
  }


function playAudio() {
     // start & stop birds chirping
     
    <audio> id src="C:\Users\DELL\Downloads\9PBX76J-birds.mp3" type="audio/mpeg">
    
    </audio>
    <button onclick="document.getElementById('templeSound').play()">Play Sound</button>
    <button onclick="document.getElementById('templeSound').pause()">Stop Sound</button>
}
  <div class="center">

{}