import React, {useEffect, useState}  from 'react';
import Layout from "../../../Layout/Layout";
import AdminMenu from "../../../Layout/adminmenu/AdminMenu";
import {Select} from 'antd'
import {toast} from 'react-toastify';
import {useFormik} from "formik";
import Input from "../../../components/UI/Input/input";
import { addNewProduct } from "../../../services/product";
import {useNavigate} from "react-router-dom";
import useCategory from "../../../hooks/useCategory";
const {Option} = Select;
const CreateProduct = () => {

    const navigate = useNavigate();
    const defaultImage = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
    const categories = useCategory();
    const [image, setImage] = useState('');

    /** check image URL Validity */
    const isValidImageUrl = (url) => {
        const regex = /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i;
        return regex.test(url);
    };

    /** Handle Image Url Changes */
    const handleImageChange = (e) => {
        const inputValue = e.target.value;
        setImage(inputValue);
        formik.setFieldValue('image', inputValue);
    };

    const initialValues = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    };

    const validate = (values) => {
        let errors = {};

        if (!values.title) {
            errors.title = 'Title  Can Not be Blank';
        }
        if (!values.price) {
            errors.price = 'Price is empty, Check Again!!';
        }
        if (!values.description) {
            errors.description = 'Description is empty, Check Again!!';
        }
        if (!values.category) {
            errors.category = 'Category is empty, Check Again!!';
        }
        if (!values.image || !isValidImageUrl(values.image)) {
            errors.image = 'Image URL is empty or invalid, Check Again!!';
        }
        return errors;
    };

    const onSubmit = async (values, { resetForm }) => {

        try {
            const newProductData = {
                title: values.title,
                price: values.price,
                description: values.description,
                image: values.image,
                category: values.category,
            };
            await addNewProduct(newProductData);

            toast.success('Product Added Successfully...');
            navigate("/home/admin/products")
            resetForm({ values: '' });

        } catch (error) {

            resetForm({ values: '' });
            toast.error('Authentication failed !!!');
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <Layout title={"Create Product - DashBoard"}>
            <div className="container-fluid  p-3">
                <div className="row">
                    <div className="col-md-3" style={{ minHeight: '78vh' }}>
                        <AdminMenu/>
                    </div>


                    <div className="col-md-9" style={{ borderLeft: '1px solid gray' }}style={{ borderLeft: '1px solid gray' }}>
                        <h2 className={'text-center pt-1 pb-2'} >Create New Product</h2>
                        <hr/>

                        <div className="row">
                            <div className="col-md-6">
                                <form onSubmit={formik.handleSubmit} className={'d-flex align-items-center justify-content-center'}>
                                    <div className='row shadow-lg rounded-5 w-100  p-5'>
                                        <div className="m-1">
                                            <Select
                                                bordered={false}
                                                placeholder="Select a Category"
                                                size='large'
                                                name="category"
                                                showSearch
                                                className ='form-select mb-3 text-dark'
                                                onChange={(value) => formik.setFieldValue('category', value)} // Update the selected value
                                                value={formik.values.category}
                                                onBlur={formik.handleBlur}
                                            >
                                                {/* Placeholder */}
                                                <Option value="">
                                                    Select a Category
                                                </Option>

                                                {categories?.map((category,index) =>(
                                                    <Option key={index} value={category}>
                                                        {category}
                                                    </Option>

                                                ))}

                                            </Select>
                                            {/* Helper text for not selected category */}
                                            {formik.errors.category && formik.touched.category && (
                                                <h6 className="small ps-3 text-danger">{formik.errors.category}</h6>
                                            )}


                                            <div className="mb-3">
                                                <Input
                                                    label="Title"
                                                    id="outlined-size-small"
                                                    name="title"
                                                    value={formik.values.title}
                                                    size="small"
                                                    fullWidth
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder='Input a Title'
                                                    helperText={formik.errors.title && formik.touched.title ?
                                                        <span className="small text-danger">{formik.errors.title}</span> : null}

                                                >
                                                </Input>
                                            </div>

                                            <div className="mb-3">
                                                <Input
                                                    label="Price"
                                                    id="outlined-size-small"
                                                    name="price"
                                                    value={formik.values.price}
                                                    size="small"
                                                    fullWidth
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder='Input a Price'
                                                    helperText={formik.errors.price && formik.touched.price ?
                                                        <span className="small text-danger">{formik.errors.price}</span> : null}

                                                ></Input>
                                            </div>

                                            <div className="mb-3">
                                                <Input
                                                    label="Description"
                                                    id="outlined-size-small"
                                                    name="description"
                                                    value={formik.values.description}
                                                    size="small"
                                                    fullWidth
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder='Input a Description'
                                                    helperText={formik.errors.description && formik.touched.description ?
                                                        <span className="small text-danger">{formik.errors.description}</span> : null}

                                                ></Input>
                                            </div>

                                            <div className="mb-3">
                                                <Input
                                                    label="Image URL"
                                                    id="outlined-size-small"
                                                    name="image"
                                                    value={image || formik.values.image}
                                                    size="small"
                                                    fullWidth
                                                    onChange={handleImageChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder='Input an Image URL'
                                                    helperText={formik.errors.image && formik.touched.image ?
                                                        <span className="small text-danger">{formik.errors.image}</span> : null}
                                                />
                                            </div>

                                            <div className="mt-3 text-center">
                                                <button
                                                    className='btn btn-lg btn-success w-100'
                                                    type='submit'
                                                >
                                                    ADD PRODUCT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-6 ps-5">
                                <h3 className={'text-center m-2 text-secondary'}>Image Preview</h3>
                                <div className={'d-flex align-items-center justify-content-center border border-info shadow rounded-5 m-4 h-75'}>
                                    <img src={image || defaultImage}style={{width:"370px", height:'280px'}}  alt='photo' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateProduct;
