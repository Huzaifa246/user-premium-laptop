import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./contactus.css"

const ContactForm = () => {
    return (
        <div className="bg-color mt-5">
            <div className="contact-form-main">
                <h1 className="txt-white">
                    Contact form
                </h1>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        comment: ''
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required'),
                        email: Yup.string().email('Invalid email').required('Email is required'),
                        phone: Yup.string().matches(/^[0-9\-]*$/, 'Invalid phone number'),
                        comment: Yup.string()
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form id="ContactForm" className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="field">
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className="field__input"
                                        />
                                        <ErrorMessage name="name" component="div" className="error_msg" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="field">
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="field__input"
                                        />
                                        <ErrorMessage name="email" component="div" className="error_msg" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Field
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    className="field__input"
                                />
                                <ErrorMessage name="phone" component="div" className="error_msg" />
                            </div>
                            <div className="field">
                                <Field
                                    component="textarea"
                                    rows="4"
                                    name="comment"
                                    placeholder="Comment"
                                    className="text-area field__input"
                                />
                                <ErrorMessage name="comment" component="div" className="error_msg" />
                            </div>
                            <div>
                                <button type="submit" className="default-white-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactForm;
