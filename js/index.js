const input = document.querySelector('input');

input.addEventListener('mouseover', function(e) {
    alert('Hello there!');
});

// Prevent numbers in input
input.addEventListener('keydown', function(e) {
  if (e.which === 20 ) {
    e.preventDefault()
    console.log("Caps lock is on")
  } else {
    console.log(e.which)
    }
  }
}
