import React from 'react';
import {useAuth} from "../../context/AuthContext";
import {useCart} from "../../context/CartContext";
import Layout from "../../Layout/Layout";
import payment_method from '../../assets/payment_method.png'

const CartPage = () => {
    const [auth, setAuth] = useAuth()
    const [cart, setCart] = useCart()

    // Remove Cart items
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart]
            let index = myCart.findIndex(item => item.id === pid)
            myCart.splice(index, 1)
            setCart(myCart)
            //Reset local storage when remove item in cart
            localStorage.setItem('cart', JSON.stringify(myCart));

        } catch (error) {
            console.log(error);
        }
    };

    //Find Total Price
    const totalPrice = () => {
        try {
            let total = 0;

            cart.map(item => {
                total += item.price;
            })
            return total.toLocaleString('en-US', {
                style: 'currency',
                currency: "USD"
            })
        } catch (error) {
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

                <div className="row mt-2">

                    <div
                        className="col-md-6 mt-1 border border-info rounded-5 p-3"
                        style={{overflowY: 'scroll', height: '63vh'}}
                    >
                        {cart?.map(p => (
                            <div className='row mb-2 flex-row p-2 ms-4 me-4 border border-warning shadow rounded-5'>
                                <div key={p.id} className="col-md-3 border-end">
                                    <img
                                        src={p.image}
                                        className="card-img-top"
                                        alt={p.title}
                                        style={{height: '120px'}}
                                    />
                                </div>
                                <div className='col-md-9 mt-1 ps-5'>
                                    <h6 className='fw-bold text-dark'>{p.title}</h6>
                                    <small>{p.description.substring(0, 45)}</small>
                                    <p className='fw-bold m-1'>Price : {p.price}$</p>
                                    <button
                                        className='btn btn-sm btn-danger '
                                        onClick={() =>
                                            removeCartItem(p.id)
                                        }
                                    >Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-6  text-center">
                        <hr/>
                        <h4>Cart Summary</h4>
                        <p className={'text-secondary fw-bold'}>Total | Checkout | Payment</p>
                        <hr/>
                        <h5>Total :<span className='text-danger'> {totalPrice()}</span></h5>
                        <hr/>
                        <div className="mt-4">
                            <img
                                src={payment_method}
                                alt={'payment image'}
                                className={'w-50 mt-5'}

                            />

                            <br/><br/>
                           <button className={'btn btn-success btn-sm'}>Make Payment</button>
                            <hr/>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
);
};

export default CartPage;
