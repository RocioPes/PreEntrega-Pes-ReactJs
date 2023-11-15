import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {products} from "../data/products";

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState (null);
    const [loading , setLoading] = useState (true);

    const {id} = useParams();
    

     useEffect(() => {
        const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {resolve(products)},2000)
            ;

        })
        promise.then((response) => {
            
        const filter = response.find(item => item.id == id)
                setItem(filter); 
            })
    }, [id]) 
if (!item){
    return <>Loading</>
}
    return <div><h1>{item.title}</h1><img src={item.picture} width={200} /><p>{item.description}</p><p>${item.price}</p></div>
}