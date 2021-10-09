import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";


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