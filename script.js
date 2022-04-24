'use strict';

const images = [
    {'id' : '1' , 'url' : '.img/chrono.jpg'},
    {'id' : '2' , 'url' : '.img/inuyasha.jpg'},
    {'id' : '3' , 'url' : '.img/tenchi.jpg'},
    {'id' : '4' , 'url' : '.img/tenjhotenge.jpg'},
    {'id' : '5' , 'url' : '.img/yuyuhakuhsho.jpg'},
    {'id' : '6' , 'url' : '.img/ippo.jpg'}
]

const container = document.querySelector('.container-items')

const loadImagens = (images , container) => {
    images.foreach (image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${Image.url}'>
        </div>`
    })
}

loadImagens ( images , container );