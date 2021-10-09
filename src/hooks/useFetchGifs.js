import { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGif = ( category ) => {

    const [state,setState] =useState({
        data:[],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
                    .then( img => {

                        setState( { 
                            data:img,
                            loading: false
                        } )

                    })
    },[category])

    return state;
}

// git remote set-url origin https://github.com/jona0812/react-gifeexpertapp.git
