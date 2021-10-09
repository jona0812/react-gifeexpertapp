import React,{ useState } from 'react';

import ProptTypes from 'prop-types';

export const AddCategory= ( {setCategories} ) =>{

    const [inputValue, setInputValue]=useState('');

    const handleInputChange= (e) => {

        setInputValue(e.target.value);
        // setCategories(cate => [...cate, e.target.value])
        
        // console.log(setCategories, "desde la funcion handleInputchange");

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( inputValue.trim().length > 2 ) {

            setCategories(cate => [inputValue, ...cate])
            setInputValue('')
        }
    }

    return(
        
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange  }
            />
        </form>

    )
}

AddCategory.proptTypes={
    setCategories: ProptTypes.func.isRequired
}