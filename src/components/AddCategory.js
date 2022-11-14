import React,{ useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) =>{

   const [ inputValue , setInputValue ]  = useState('');

   const handelInputChange = (e)=>{
       console.log(e.target.value);
       setInputValue( e.target.value );
   }

   const handelSubmit = (e) =>{
         e.preventDefault();
         if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats ])
            setInputValue('');
         }
         
   }

    return (
        <form onSubmit={ handelSubmit }>
            <div>
                <input type="text" value={ inputValue } onChange={ handelInputChange }>
                </input>
            </div>
        </form>
    )


}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}