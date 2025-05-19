const scenes = document.querySelectorAll('.scene');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.6;

  scenes.forEach(scene => {
    const sceneTop = scene.getBoundingClientRect().top;

    if (sceneTop < trigger) {
      scene.classList.add('active');
    } else {
      scene.classList.remove('active');
    }
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}