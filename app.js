/*
=================================================
=================================================
Pokemon Choice
=================================================
=================================================
*/
const select = document.querySelector('select');
const paragraph = document.querySelector('p');
const image = document.querySelector('img');

select.addEventListener('change', choseStarter);

function choseStarter() {
    let starter = select.value;

    if (starter === 'squirtle') {
        paragraph.textContent = `The wet one.`;
        image.src = 'images/squirtle.png';
    } else if (starter === 'bulbasaur') {
        paragraph.textContent = `The hippy.`;
        image.src = 'images/bulbasaur.png';
    } else if (starter === 'charmander') {
        paragraph.textContent = `The hot one.`;
        image.src = 'images/charmander.png';
    } else if (starter === 'pikachu') {
        paragraph.textContent = `The one you can just catch in Viridian forest, but you just want to pretend to be Ash.`;
        image.src = 'images/pikachu.png';
    } else {
        paragraph.textContent = ``;
    }
}

/*
=================================================
=================================================
Theme Choice
=================================================
=================================================
*/

const themeSelect = document.getElementById('theme');
const body = document.querySelector('body');

themeSelect.addEventListener('change', setTheme);

function setTheme() {
    let choice = themeSelect.value;

    if (choice === 'light-mode') {
        body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        body.style.color = "rgba(0, 0, 0, 1)";
    } else if (choice === 'dark-mode') {
        body.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        body.style.color = 'rgba(255, 255, 255, 1)';
    } 
}