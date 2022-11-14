export const getGifs = async (category) =>{
    //EJQa6mt1zukNx6KHvHSRR9A27wTAgwYm
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EJQa6mt1zukNx6KHvHSRR9A27wTAgwYm&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gif = data.map( img => {
         return {
            id : img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
         }
    });

    return gif;
    //setImages(gif)
}