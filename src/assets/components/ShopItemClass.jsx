import React, { Component } from 'react'

class ShopItemClass extends Component {

    render() {

        return (
            <div className="main-content">


                <h2> {this.props.item.brand} </h2>
                <h1> {this.props.item.title} </h1>
                <h3> {this.props.item.description} </h3>


                <div className="description">{this.props.item.descriptionFull}</div>
                <div className="divider"></div>

                <div className="">
                    <div className="options">
                        <div className="price">{this.props.item.currency}{this.props.item.price.toFixed(2)} </div>
                        <button className="button"><a href="#"></a> Добавить в корзину</button>
                    </div>

                </div>

            </div>
        )
    }
}
export default ShopItemClass