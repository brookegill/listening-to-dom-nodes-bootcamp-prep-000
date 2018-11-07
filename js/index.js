const input = document.querySelector('input');

input.addEventListener('mouseover', function(e) {
    alert('Hello there!');
});

input.addEventListener('keydown', function(e) {
  if (e.which === 20) {
    alert('Caps lock is on!')
  }
});

const divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
};

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
};
