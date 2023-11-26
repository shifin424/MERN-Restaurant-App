import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, message } from 'antd';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { RestaurantUploadApi } from '../../Services/Services';


const AddRestaurant = () => {

    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false)

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

    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            console.log('Submitted values:', values);

            if (!selectedImage) {
                message.error('Please select an image.');
                return;
            }

            const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];

            if (!allowedFormats.includes(selectedImage.type)) {
                message.error('Invalid file format. Only JPEG, PNG, or JPG files are allowed.');
                return;
            }

            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('contact', values.contact);
            formData.append('address', values.address);
            formData.append('image', selectedImage);

            const response = await RestaurantUploadApi(formData, headers);
            if (response?.status === 201) {
                navigate('/restaurants');
                message.success('Restaurant Added Successfully');
            } else {
                message.error('Network error');
            }
            resetForm();
        } catch (err) {
            console.log(err)
        }finally{
            setLoading(false)
        }

    };

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];
        setSelectedImage(file);
    };



    return (
        <div className="container mx-auto mt-5 p-8">
            <Card className="w-full md:w-1/3 mx-auto p-6 rounded-md border bg-[#fcca80] border-gray-300">
                <h1 className="text-4xl font-bold text-gray-600 text-center mb-6">Add New Restaurant</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
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
                                <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                                    Image
                                </label>
                                <Field
                                    type="file"
                                    id="image"
                                    name="image"
                                    as={Input}
                                    onChange={handleImageChange}

                                    className="w-full bg-white p-2 border rounded-md"
                                />
                            </div>
                            <div className="mt-6">
                            <Button text={loading ? 'Submitting...' : 'Submit'} className="bg-[#f29e21] font-bold text-lg text-white px-2 py-3" loading={loading || isSubmitting} />
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </Card>
        </div>
    );
};

export default AddRestaurant;
