import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);    

    const {data:images,loading} =useFetchGif( category );

    // console.log(data)

    // useEffect( () => {
        
    //     getGifs(category)
    //             .then( setImages )
    //         // .then( img => setImages( img )) esto es lo mismo de arriba, pero arriba está optimizado;
    // },[ category ])
    // const [contador,setContador] =useState(0);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category}</h3>   
              
              {loading && <p className="animate__animated animate__flash" >Loading...</p>}

            <div className="card-grid">

                {images.map( img => (

                        <GifGridItem 
                        {...img}
                            key={img.id}
                        />

                ))}
            
            </div>
        </>

    ) 

}