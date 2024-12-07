import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class ProductsList extends React.Component {
    state = {
        products: []
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/products`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log(products);
            })
    }
    render() {
        return (
            <ul>
                {
                    this.state.products
                        .map(product =>
                            <div key={product.id}>
                                <div key={product.id}>
                                    <h3>
                                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                                    </h3>
                                    <p>Price: ${product.price}</p>
                                    <hr />
                                </div>

                            </div>

                        )
                }
            </ul>
        )
    }
}