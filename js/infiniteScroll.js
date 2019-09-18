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

