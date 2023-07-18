import React from 'react';
import {useAuth} from "../../context/AuthContext";
import {useCart} from "../../context/CartContext";
import Layout from "../../Layout/Layout";

const CartPage = () => {
    const [auth, setAuth] = useAuth()
    const [cart, setCart] = useCart()

    // Remove Cart items
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart]
            let index = myCart.findIndex(item => item.id === pid)
            myCart.splice(index,1)
            setCart(myCart)
            //Reset local storage when remove item in cart
            localStorage.setItem('cart',JSON.stringify(myCart));

        } catch (error) {
            console.log(error);
        }
    };

    //Find Total Price
    const totalPrice = () => {
        try {
            let total = 0;

            cart.map(item=>{
                total+=item.price;
            })
            return total.toLocaleString('en-US',{
                style:'currency',
                currency:"USD"
            })
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center bg-light p-2 mb-1'>
                            {`Hello ${auth?.token && 'Customer'} 👋`}
                        </h1>
                        <h5 className="text-center text-success">
                            {cart?.length > 1 ? `You Have ${cart.length} items in Your Cart 
                                ${auth?.token ? "" : "Please login to Checkout !!"}` : "Your Cart is Empty 😥"}
                        </h5>
                    </div>
                </div>

                <div className="row mt-3">

                    <div className="col-md-6 mt-3">
                        {cart?.map(p => (
                            <div className='row mb-2 flex-row p-2 border border-warning shadow rounded-5'>
                                <div key={p.id} className="col-md-4 border-end">
                                    <img
                                        src={p.image}
                                        className="card-img-top"
                                        alt={p.title}
                                        style={{height:'150px'}}
                                    />
                                </div>
                                <div className='col-md-8 mt-3 ps-2'>
                                    <h5 className='text-center text-dark'>{p.title}</h5>
                                    <small>{p.description.substring(0,45)}</small>
                                    <p className='fw-bold'>Price : {p.price}$</p>
                                    <button
                                        className='btn btn-sm btn-danger'
                                        onClick={()=>
                                            removeCartItem(p.id)
                                        }
                                    >Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-6 mt-3 text-center">
                        <h4>Cart Summary</h4>
                        <p>Total | Checkout | Payment</p>
                        <hr/>
                        <h5>Total :<span className='text-danger'> {totalPrice()}</span></h5>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default CartPage;
