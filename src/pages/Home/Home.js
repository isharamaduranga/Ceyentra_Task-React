import React, {useEffect, useState} from 'react';
import Layout from "../../Layout/Layout";
import {getAllProducts} from "../../services/product";
import {Checkbox} from "antd";
import {useNavigate} from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import {useCart} from "../../context/CartContext";
import {toast} from "react-toastify";

function Home() {
    const navigate=useNavigate();
     const[products,setProducts]=useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const categories = useCategory();
    const [checked, setChecked] = useState([]);
    const [total, setTotal] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useCart();


    useEffect(() => {
        fetchProducts();

    },[])

    /** Get All Products */
    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            setProducts(data)
            setAllProducts(data); // Set the original list of all products
            setTotal(data.length) //firstly set product count
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    /** Handle Filter Checked Box */
    const handleFilter = (value, name) => {
        let all = [...checked]

        if (value) {
            all.push(name)
        } else {
            all = all.filter(c => c !== name)
        }
        setChecked(all);
        /** If no checkboxes are selected (all are unselected), show all products again */
        if (all.length === 0) {
            setProducts(allProducts);
            setTotal(allProducts.length); // Update the total count with all products count
        } else {
            filterProduct(all);
        }
    };

    /** Get Filtered Product data */
    const filterProduct = (checkedCategories) => {
        /** Filter products based on selected categories from the original list of all products */
        const filteredProducts = allProducts.filter((product) => {
            return checkedCategories.includes(product.category);
        });
        setProducts(filteredProducts);
        setTotal(filteredProducts.length); // Update the total count
    }

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            // If the search query is empty, reset the products to show all products
            setProducts(allProducts);
            setTotal(allProducts.length);
        } else {
            // Filter products based on the search query in title and price
            const filteredProducts = allProducts.filter((product) => {
                const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
                const priceMatch = product.price.toString().includes(searchQuery);
                return titleMatch || priceMatch;
            });
            setProducts(filteredProducts);
            setTotal(filteredProducts.length);
        }
    };

    return (
        <Layout title={'All Products - Best Offers'}>
            <div className="row" style={{width:'99.5vw'}}>
                <div className="col-md-2" style={{borderRight:'1px solid gray'}}>
                    <div className="text-center mt-5">
                        <h4 className='mt-1'>Search Product</h4>
                        <hr className='ms-2'/>
                        <input
                            className="form-control m-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={handleSearch}
                        >Search🔎
                        </button>
                    </div>

                    <br/><br/>
                    {/* Category vise Filter */}
                    <h4 className='ps-4 mt-4'>Filter By Category</h4>
                    <hr className='ms-2'/>
                    <div className="d-flex flex-column">
                        {categories.map((category,index)=> (
                            <Checkbox
                                className='ps-3 fw-bold pt-4'
                                key={index}
                                onChange={(e) => handleFilter(e.target.checked, category)}
                            >
                                {`🔗${category.toUpperCase()}`}
                            </Checkbox>
                        ))}
                    </div>
                </div>

                <div className="col-md-10">
                    <hr/>
                    <h2 className={'text-center mt-2'}>{`All Products - ${total} Results Found 😍`}</h2>
                    <hr/>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {products?.map(p => (
                            <div key={p.id} className="card m-2 border  shadow border-info rounded-5"
                                 style={{width: '18rem', height: '27rem'}}>

                                <img src={p.image}
                                     className="card-img-top  mt-2"
                                     alt={p.title}
                                     style={{height:'12rem',width:'12rem',margin:'auto'}}
                                />
                                <hr className={'m-2'}/>
                                <div className="card-body">
                                    <h5 className="card-text">{p.title.substring(0, 20)}</h5>
                                    <small className="card-text">{p.description.substring(0, 45)}</small>
                                    <br/>
                                    <h1 className="card-text badge badge-pill badge-danger mt-2 fs-5">{`${p.price} $`}</h1>


                                    <div className={'pt-2'}>
                                        <button
                                            className="btn btn-info btn-sm me-1"
                                            onClick={()=>{
                                                navigate(`admin/product/${p.id}`);
                                            }}
                                        >More Details
                                        </button>

                                        <button
                                            className="btn btn-primary btn-sm ms-1"
                                            onClick={()=> {
                                                setCart([...cart,p])
                                                //Create & set Cart items to save in local Storage using JSON Array format
                                                localStorage.setItem('cart',JSON.stringify([...cart,p]));

                                                toast.success('Item Added to Cart ✅')
                                            }}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Home;