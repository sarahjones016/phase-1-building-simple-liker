// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Grab all of the hearts
const hearts = document.getElementsByClassName("like-glyph")

//Run a loop to iterate over all of the hearts.
for (const heart of hearts) {
  heart.addEventListener("click", function() {
    
    //If the heart is empty when clicked, have it fill red.
    if (heart.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(function () {
        console.log("successful response")
        heart.textContent = "♥"
        heart.className = "activated-heart"
      })

      //Grab the modal. Show the modal and an error message if fetch returns an error.
      .catch(function () {
        const modal = document.getElementById("modal")
        console.log("error message")
        modal.className = "show"
        const modalMessage = document.getElementById("modal-message")
        modalMessage.textContent = "Random server error. Try again."

        //Hide the modal 3 seconds after firing.
        setTimeout(function() {
          const modal = document.getElementById("modal")
          console.log("error message")
          modal.className = "hidden"
        }, 3000)
      })

    //If the heart is full and red when clicked, have it empty.
    } else if (heart.textContent === FULL_HEART) {
        heart.textContent = '♡'
        heart.className = "like-glyph"
    }
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
