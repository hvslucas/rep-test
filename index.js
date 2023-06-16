const main = document.querySelector('main');
const button = document.createElement('button');
button.innerHTML = "Clique aqui";
button.setAttribute('id', 'button');
button.addEventListener('click', function() {
    main.setAttribute('id', 'changemain');
})
main.appendChild(button);