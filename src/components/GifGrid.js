import React,{ useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) =>{

    const { data, loading} = useFetchGifs(category);

    //const [ images, setImages ] = useState([]);


    /*
    useEffect( ()=>{
        //getGifs(category).then(imgs => setImages(imgs));
        getGifs(category).then( setImages );
    },[ category ])
    */

    
     return (
         <div>
                <h3> { category } </h3>
                {  loading && 'Cargando..' }
                <div className="card-grid">
                    {
                        
                        data.map(( img ) => (
                            <GifGridItem key={img.id} {...img} />
                        ))
                        
                    }
                </div> 
                
         </div>
     )
 
 }
 
 /*
 GifGrid.propTypes = {
     setCategories: PropTypes.func.isRequired
 }
 */