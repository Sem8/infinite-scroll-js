let url = `http://api.adorable.io/avatars/`

const addImageToDom = (imageNum) => {
    const container = document.querySelector('.container');

    // create div element and add it to DOM
    const imageDiv = document.createElement('div');
    imageDiv.className = 'one-fourth';

    // div element will contain image element with our image coming from adorable api service.
    const imgElement = document.createElement('img');
    imgElement.src= `${url}${imageNum}`;

    imageDiv.append(imgElement);
    container.append(imageDiv);
}

const addImagesToDom = (num) => {
    for (let i = 0; i < num; i++) {
        addImageToDom(i);
    }
}

addImagesToDom(15);

// Figure out if user is scrolling ot the end of the page, if they are then add more images to the DOM
window.addEventListener('scroll', function() {
    // value of window.scrollY + window.innerHeight = value of current scroll or where you are in the DOM at the moment

    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    // console.log(window.scrollY + window.innerHeight);
    // console.log(document.documentElement.scrollHeight);

    if (window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
        addImagesToDom(15)
    }
})

