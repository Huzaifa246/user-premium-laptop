import React from 'react';
import "../../App.css";
const Footer = () => {
    return (
        <footer className='bg-color'>
            <div className='d-flex justify-content-around txt-white-75 lh-lg pt-5'>
                <div className='list-none'>
                    <h4 className='mb-2'>AT ONLINE</h4>
                    <div>
                        <p className='ftSize-16 fw-bold'>
                            Unleash your productivity and
                            <br />
                            creativity with Us!<br />
                            📍Shop no LGF-63 ,Defence <br /> Shopping Mall, Lahore<br />
                            📞 0321 4107800
                        </p>
                    </div>
                </div>
                <div className='list-none'>
                    <h4 className='mb-2'>Brands</h4>
                    <ul className='list-none' style={{ paddingLeft: "0" }}>
                        <li className='ftSize-16 fw-bold'><a href="/collections/hp" className='txt-white-75 text-decoration-none'>HP</a></li>
                        <li className='ftSize-16 fw-bold'><a href="/collections/dell" className='txt-white-75 text-decoration-none'>DELL</a></li>
                        <li className='ftSize-16 fw-bold'><a href="/collections/lenovo" className='txt-white-75 text-decoration-none'>LENOVO</a></li>
                        <li className='ftSize-16 fw-bold'><a href="/collections/apple" className='txt-white-75 text-decoration-none'>APPLE</a></li>
                    </ul>
                </div>
                <div className='list-none'>
                    <h4 className='mb-2'>Help</h4>
                    <ul className='list-none'></ul>
                    <li className='ftSize-16 fw-bold'><a href="/pages/about-us" className='txt-white-75 text-decoration-none'>About Us</a></li>
                    <li className='ftSize-16 fw-bold'><a href="/pages/contact" className='txt-white-75 text-decoration-none'>Contact</a></li>
                </div>
                <div>
                    <a href="https://web.facebook.com/atonline.com.pk/" class="link list-social__link">
                        <svg
                            aria-hidden="true" focusable="false" className="icon-style" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z">
                            </path>
                        </svg>
                        <span class="visually-hidden">Facebook</span>
                    </a>
                    <a href="" className='px-2'>
                        <svg aria-hidden="true" focusable="false" className="icon-style"
                            viewBox="0 0 20 20">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="visually-hidden">Instagram</span>
                    </a>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{ padding: "4% 8% 4% 8%" }}>
                <div>
                    <h4 className='mb-2 txt-white'>Subscribe to our emails </h4>
                    <div className="col-md-12">
                        <div className="field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="field__input"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <a href="https://web.facebook.com/atonline.com.pk/" class="link list-social__link">
                        <svg
                            aria-hidden="true" focusable="false" className="icon-style" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z">
                            </path>
                        </svg>
                        <span class="visually-hidden">Facebook</span>
                    </a>
                    <a href="" className='px-2'>
                        <svg aria-hidden="true" focusable="false" className="icon-style"
                            viewBox="0 0 20 20">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="visually-hidden">Instagram</span>
                    </a>
                </div>
            </div>
            <hr className='txt-white'/>
            <div className='txt-white'>
                <p className='ft-bottom-spacing'>
                    ©Huzaifa 2024, AT Online Powered by MERN
                </p>
            </div>
        </footer>
    )
}

export default Footer