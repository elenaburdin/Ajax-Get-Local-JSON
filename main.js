document.getElementById('btn-1').addEventListener('click', loadHero);
document.getElementById('btn-2').addEventListener('click', loadHeroes);

// get hero.json
function loadHero() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'hero.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var hero = JSON.parse(this.responseText);

            var output = '';

            output += '<ul>' +
                '<li>ID: ' + hero.id + '</li>' +
                '<li>Name: ' + hero.name + '</li>' +
                '<li>Alter ego: ' + hero.alterEgo + '</li>' +
                '<li>Species: ' + hero.species + '</li>' +
                '<li>Place of origin: ' + hero.placeOfOrigin + '</li>' +
                '</ul>';
            document.getElementById('hero').innerHTML = output;
        } else if (this.status == 404) {
            document.getElementById('hero').innerHTML = "not Found";
        }

    }
    xhr.onerror = function () {
        console.log('Request Error')
    }
    xhr.send();
}



// get heroes.json
function loadHeroes() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'heroes.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            var heroes = JSON.parse(this.responseText);

            var output = '';
            for (var i in heroes) {

                output += '<ul>' +
                    '<li>ID: ' + heroes[i].id + '</li>' +
                    '<li>Name: ' + heroes[i].name + '</li>' +
                    '<li>Alter ego: ' + heroes[i].alterEgo + '</li>' +
                    '<li>Species: ' + heroes[i].species + '</li>' +
                    '<li>Place of origin: ' + heroes[i].placeOfOrigin + '</li>' +
                    '</ul>';
            }
            document.getElementById('heroes').innerHTML = output;
        } else if (this.status == 404) {
            document.getElementById('heroes').innerHTML = "not Found";
        }

    }
    xhr.onerror = function () {
        console.log('Request Error')
    }
    xhr.send();
}

