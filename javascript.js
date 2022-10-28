window.onload = () => {
  var images = [...document.getElementsByTagName('img')];
  var grid = document.getElementsByClassName('grid')[0];
  var btn = document.getElementsByTagName('button')[0];

  function hideOthers() {
    images.forEach((img) => {
      if (!img.classList.contains('selected')) img.classList.add('hide');
    });
    grid.style.gridTemplateColumns = '1fr';
    btn.style.display = 'block';
  }

  images.forEach((img) => {
    img.addEventListener('click', (e) => {
      img.classList.add('selected');
      hideOthers();
    });
  });

  btn.onclick = (e) => {
    images.forEach((img) => {
      if (img.classList.contains('selected')) img.classList.remove('selected');
      if (img.classList.contains('hide')) img.classList.remove('hide');
      grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    });
    btn.style.display = 'none';
  };
};
