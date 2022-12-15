import React from 'react';
import "./CheckBoxCart.css"
function CheckBoxCart(props) {
    return (
        <div  className="CheckCart">
            <div style={{textAlign:"center"}}>
            <button className='Cart_Button'>Use This Address</button><br/>
            <span>Choose a shipping address and payment method to calculate shipping, handling and tax.</span>
            </div>
            <hr/>
            <h3>Order Summary</h3><br/>
            <span>Items:</span><br/>
            <span>Delivery:</span>
            <hr/>
            <h2 style={{color:"#B12704"}}>Order Total:</h2>
            <hr/>
            <a className='Cart_A'>How are delivery costs calculated?</a>
            
            
        </div>
    );
}

export default CheckBoxCart;