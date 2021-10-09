export const getGifs = async( category ) => {
    const urlGetData= `https://api.giphy.com/v1/gifs/search?api_key=3IeY0SQkvE9rRr1Rx16HXLZRMPpEVym4&q=${encodeURI(category)}&limit=10`;
    const getData= await fetch(urlGetData);
    const {data}= await getData.json();

    const gifs= data.map( img => {

        return{
        
            id: img.id,
            title: img.title,
            image: img.images?.downsized.url 
        }
    })

    console.log(gifs);

    return gifs;
    

}