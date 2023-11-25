import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, message } from 'antd';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { RestaurantListingApi, RestaurantUpdateApi } from '../../Services/Services';


const UpdateRestaurant = () => {

    const navigate = useNavigate();
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantListingApi();
                if (response && response.data) {
                    setRestaurantData(response.data);
                } else {
                    message.error('Network error');
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Restaurant name is required').max(30, 'Restaurant name must be at most 30 characters'),
        contact: Yup.string().required('Contact information is required').matches(/^\d{10}$/, 'Contact must be a 10-digit number'),
        address: Yup.string().required('Address is required').max(40, 'Address must be at most 40 characters'),
    });

    const initialValues = {
        name: '',
        contact: '',
        address: '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {

            const response = await RestaurantUpdateApi(values?.id, values);
            if (response?.status === 200) {
                navigate('/restaurants');
                message.success('Restaurant Updated Successfully');
            } else {
                message.error('Network error');
            }
            resetForm();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container mx-auto mt-5 p-8">
            {restaurantData.map((restaurant) => (
                <Card key={restaurant?.id} className="w-full md:w-1/3 mx-auto p-6 rounded-md border bg-[#fcca80] border-gray-300 mb-4">
                    <h1 className="text-4xl font-bold text-gray-600 text-center mb-6">Update Restaurant</h1>

                    <Formik initialValues={{ ...initialValues, ...restaurant }} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                        Restaurant Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        as={Input}
                                        className="w-full p-2 border rounded-md"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                        Address
                                    </label>
                                    <Field
                                        type="text"
                                        id="address"
                                        name="address"
                                        as={Input}
                                        className="w-full p-2 border rounded-md"
                                    />
                                    <ErrorMessage name="address" component="div" className="text-red-500" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
                                        Contact Information
                                    </label>
                                    <Field
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        as={Input}
                                        className="w-full p-2 border rounded-md"
                                    />
                                    <ErrorMessage name="contact" component="div" className="text-red-500" />
                                </div>
                                <Field type="hidden" id="id" name="id" value={restaurant?.id} />
                                <div className="mb-4">
                                    <img src={restaurant?.imageUrl} alt="Restaurant Image" className="w-full h-auto" />
                                </div>
                                
                                <div className="mt-6">
                                    <Button text="Submit" className="bg-[#f29e21] font-bold text-lg text-white px-2 py-3" loading={isSubmitting}>
                                        Update Restaurant
                                    </Button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                </Card>
            ))}
        </div>
    );
};

export default UpdateRestaurant;
