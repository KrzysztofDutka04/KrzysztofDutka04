const h1 = document.querySelector('h1'); //pobieramy h1 ze strony
const div = document.querySelector('.sekcja'); //pobieramy div o klasie sekcja
const h2 = document.querySelector('#tytul'); //pobieramy h2 o id tytul
const akapity = document.querySelectorAll('p'); // pobieramy wszystkie p ze strony
//zmiana zawartosci p
//akapity[0].innerHTML = '<b>Nowa tresc p</b>';
//zmiana textu p
//akapity[0].textContent = '<b>Nowa tresc p</b>';
//zmiana obrazu
const obraz = document.querySelector('img');
obraz.setAttribute('src', 'data:image/jpeg;base64,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');
//zmiana koloru h1
h1.style.color = 'red';
//dodajemy klase zmiana do p
//akapity[0].classList.add('zmiana');
akapity.forEach(akapit =>{akapit.classList.add('zmiana');})
//usuwamy obraz
obraz.remove();
//tworzymy nowy element html i wstawiamy
const nowyObraz = document.createElement('img');
nowyObraz.src = 'data:image/png;base64,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';
document.body.appendChild(nowyObraz);