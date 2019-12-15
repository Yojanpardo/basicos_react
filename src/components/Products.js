import React, { Component, Fragment} from 'react';
import Product from './Product';

class Products extends Component{
    state = {
        products : []
    }

    componentDidMount(){
        this.setState({
            products : [
                {id : 0, name : 'Mouse', price: 15},
                {id : 1, name : 'SSD Sabrent', price: 70},
                {id : 2, name : 'RAM DDR4', price: 31},
                {id : 3, name : 'Optane 32GB', price: 60},
            ]
        });
    }

    componentDidUpdate(){
        console.log('Component did update');
    }

    render(){
        const {products} = this.state;
        console.log(products);
        
        return(
            <Fragment>
                <h2>Products</h2>
                {products.map(product => (
                    <Product 
                        key = {product.id}
                        product = {product}
                        name = {product.name}
                        price = {product.price}
                    />
                ))}
            </Fragment>

        );
    }
}

export default Products;