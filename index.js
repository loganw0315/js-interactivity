let message = document.querySelector('#message');

let addMovie = (event) => {
    event.preventDefault();

    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let deleteBtn = document.createElement('button');
    
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);

    movieTitle.textContent = inputField.value;
    deleteBtn.textContent = "X";

    document.querySelector("ul").appendChild(movie);
    
    
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.addEventListener('click', crossOffMovie)
    
    inputField.value = "";
}

let deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    console.log(event.target.parentNode);
    revealMessage();
}

let crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage();
}

let revealMessage = () =>{
    message.classList.remove('hide');
    setTimeout(() => {message.classList.add('hide')}, 1000);
}

document.querySelector('form').addEventListener('submit',addMovie);
