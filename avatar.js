let nomeEl = document.querySelector("#nome");
let corPeleEl = document.querySelector('#cor-da-pele');
let cabeloEl = document.querySelector('#cabelo');
let oculosEl = document.querySelector('#oculos');
let lacinhosEl = document.querySelector('#lacinhos');
let bandanaEl = document.querySelector('#bandana');
let avatar = {
  cabecaEl: document.querySelector('#avatar-cabeca'),
  corpoEl: document.querySelector('#avatar-corpo'),
  nomeEl: document.querySelector('#avatar-nome'),
  cabeloEl: document.querySelector('#avatar-cabelo'),
  oculosEl: document.querySelector('#avatar-oculos'),
  lacinhosEl: document.querySelector('#avatar-lacinhos'),
  bandanaEl: document.querySelector('#avatar-bandana'),
};

nomeEl.addEventListener('input', function (e) {
  avatar.nomeEl.innerHTML = e.target.value;
});

corPeleEl.addEventListener('input', function (e) {
  avatar.cabecaEl.style.backgroundColor = e.target.value;
  avatar.corpoEl.style.backgroundColor = e.target.value;
});

cabeloEl.addEventListener('change', function (e) {
  avatar.cabeloEl.src = e.target.value;
})


let acessorios = [oculosEl, lacinhosEl, bandanaEl];
acessorios.forEach(function (el) {
  el.addEventListener('change', function (e) {
    let acessorioEl = document.querySelector('#avatar-' + e.currentTarget.value);
    acessorioEl.classList.toggle('visivel');
  });
});



// desafio de baixar imagem
let baixarEl = document.querySelector('#baixar');
let avatarEl = document.querySelector('#avatar-preview');
baixarEl.addEventListener('click', e => {
  html2canvas(avatarEl).then(canvas => {
    let contextoGrafico = canvas.getContext('2d');
    contextoGrafico.imageSmoothingEnabled = false;
    let imagemCodificadaEmURL = canvas.toDataURL();
    let link = document.createElement('a');
    link.download = 'avatar.png';
    link.href = imagemCodificadaEmURL;
    document.body.appendChild(link);
    link.click();
  });
});