import React from 'react';
import { Card, Form, Input, message } from 'antd';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { uploadDataApi } from '../../Services/Services';





const AddRestaurant = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Restaurant name is required').max(30, 'Restaurant name must be at most 30 characters'),
        contact: Yup.string().required('Contact information is required').matches(/^\d{10}$/, 'Contact must be a 10-digit number'),
        address: Yup.string().required('Address is required').max(40, 'Address must be at most 40 characters'),
        image: Yup.string()
            .required('Image is required')
            .matches(
                /\.(png|jpeg|jpg)$/,
                'Image must be in PNG, JPEG, or JPG format'
            ),
    });

    const initialValues = {
        name: '',
        contact: '',
        address: '',
        image: '',
    };

    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            console.log('Submitted values:', values);
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('contact', values.contact);
            formData.append('address', values.address);

            if (values.image && values.image[0]) {
                formData.append('image', values.image[0]);
            }


            const response = await uploadDataApi(formData, headers);

            console.log(response);

            if (response?.status === 200) {
                navigate('/restaurants');
                message.success('Data Parsed Successfully');
            } else {
                message.error('Network error');
            }

            resetForm();
        } catch (err) {
            console.log(err)
            message.err()
        }

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
                                    Image URL
                                </label>
                                <Field
                                    type="file"
                                    id="image"
                                    name="image"
                                    as={Input}
                                    className="w-full p-2 border rounded-md"
                                />
                                <ErrorMessage name="image" component="div" className="text-red-500" />
                            </div>

                            <div className="mt-6">
                                <Button text="Submit" className='bg-[#f29e21] font-bold text-lg text-white  px-2 py-3' loading={isSubmitting}>
                                    Add Restaurant
                                </Button>
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </Card>
        </div>
    );
};

export default AddRestaurant;
