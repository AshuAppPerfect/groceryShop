import React from 'react'
import ProCard from './ProCard';
const Products = (props) => {
    function removeHandler(id){
        console.groupCollapsed(id);
        props.removeProducts(id);
    }

    return (
        <div className='container'>
            <div className='cards'>
                {
                    props.products.map((products) => {
                        return <ProCard {...products} key={products.id} removeProduct={removeHandler}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Products;