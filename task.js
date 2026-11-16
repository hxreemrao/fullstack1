const palette = ['#e17055', '#b8005f', '#0984e3', '#5ce761', '#fdcb6e', '#7543e8'];
function additem(e) {
    e.preventDefault();
    let item = document.getElementById('searchinput').value;
    let item1 = document.createElement('li');
    item1.textContent = item;
      let color = palette[Math.floor(Math.random() * palette.length)];
       item1.style.color = color;
   document.getElementById('searchlist').appendChild(item1);
  }