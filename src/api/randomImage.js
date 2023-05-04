

const getRandomImage = () =>{
    const numImages = 90; 
    const width = 500; 
    const height = 500; 


    function getPicsumImageUrl(id) {
        return {
            0: `https://picsum.photos/id/${id}/${width}/${height}`,
            1: `https://picsum.photos/id/${id+1}/${width}/${height}`,
            2: `https://picsum.photos/id/${id+2}/${width}/${height}`,
        };
    }


    function getRandomPicsumImageId() {
        return Math.floor(Math.random() * 1000) + 1;
    }

    const imageUrls = [];

    for (let i = 0; i < numImages; i++) {
        const id = getRandomPicsumImageId();
        const url = getPicsumImageUrl(id);
        imageUrls.push(url);
    }

    return imageUrls;
    console.log(imageUrls); 
}

export default getRandomImage
