let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Artista digital // Desarrolladora Font-end Jr.')
  .deleteChars(20)
  .pauseFor(300)
  .deleteChars(20)
  .start();
  