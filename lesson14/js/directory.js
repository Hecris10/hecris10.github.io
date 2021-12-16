const database = "../data/directory.json"
const dir = document.querySelector('#dir');

function changeList() {

    if (dir.classList.contains('l-list') == true) {
        console.log('True');
        dir.classList.remove('l-list');
        dir.classList.add('l-grid');
    } else {
        console.log('else');
    }
}

function changeGrid() {
    if (dir.classList.contains('l-grid') == true) {
        console.log('True');
        dir.classList.remove('l-grid');
        dir.classList.add('l-list');
    } else {
        console.log('else');
    }
}

fetch(database)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var div = document.querySelector('#dir');
        div.classList.add('l-list')
        for (var i = 0; i < jsObject['companies'].length; i++) {

            var comp = document.createElement('div');
            comp.setAttribute('class', 'comp comp' + (i + 1));


            var a = document.createElement('a')
            var h3 = document.createElement('h3');
            h3.textContent = (jsObject['companies'][i]['name']);
            a.appendChild(h3);
            a.setAttribute('href', jsObject['companies'][i]['link'])
            comp.appendChild(a);


            if (jsObject['companies'][i]['logo'] != 'none') {
                var img = document.createElement('img');
                img.setAttribute('alt', h3.textContent);
                img.setAttribute('src', jsObject['companies'][i]['logo']);
                comp.appendChild(img);
            }
            if (jsObject['companies'][i]['address'] != 'none') {
                var p = document.createElement('p');
                p.textContent = jsObject['companies'][i]['address'];
                comp.appendChild(p);
            }

            div.appendChild(comp);






        }
    });