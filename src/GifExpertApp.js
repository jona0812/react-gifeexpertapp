
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( ) =>{

    // const categories= ['One Punch','Samurai X','Dragon Ball'];
    // useState 
    const [categories, setCategories]=useState(['One Punch'])

    // const handleAdd= () =>{
    //     const otroValor='Hoolk';
    //     // setCategories(categories.concat(otroValor));
    //     // setCategories(['New value', ...categories])
    //     setCategories( cate => [...cate , 'Un nuevo valor']);
    // }
    return(
        <>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => 
                         <GifGrid 
                            key= { category }
                            category= { category }
                         />
                    )
                }
            </ol>
        </>
    )
  
} 