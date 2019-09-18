let url = `http://api.adorable.io/avatars/32131231`

const addImageToDom = () => {
    const container = document.querySelector('.container');

    // create div element and add it to DOM
    const imageDiv = document.createElement('div');
    imageDiv.className = 'one-fourth';

    // div element will contain image element with our image coming from adorable api service.
    const imgElement = document.createElement('img');
    imgElement.src= `${url}`;

    imageDiv.append(imgElement);
    container.append(imageDiv);
}

addImageToDom();