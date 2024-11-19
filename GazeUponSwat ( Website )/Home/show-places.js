let btn = document.querySelector('.see-all');
let hiddenPlaces = document.querySelector('.hidden-places');
isHidden = true;

btn.addEventListener('click', () => {
  if (isHidden === true) {
    hiddenPlaces.style.display = 'grid';
    btn.style.display = "none"
    isHidden = false;
  } else {
    hiddenPlaces.style.display = 'none';
    btn.textContent = "See All"
    isHidden = true;
  }
});
