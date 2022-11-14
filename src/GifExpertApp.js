import React,{ useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{


    //const categories = ['One Puch','Samurai X','Dragon Ball'];
    const [ categories, setCategories ] = useState(['One Puch']);

    
    const handelAdd = () =>{

        //setCategories('HunterXHunter');

        //setCategories(['HunterXHunter', ...categories]);
        //setCategories( cats => [ ...cats, 'HunterXHunter' ] );
        
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>

            <hr></hr>


            <ol>
                {
                    categories.map( category => (
                       <GifGrid key={category} category={ category } />
                    ))
                }
            </ol>
        </div>
    )
}