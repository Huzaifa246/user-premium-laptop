import React from 'react'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <>
            <div className="mainbox">
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="err">4</div>
                    <FontAwesomeIcon icon={faQuestionCircle} className="question-icon fa-spin" size="5x" />
                    <div className="err">4</div>
                </div>

                <Link to="/" className='d-flex justify-content-center align-items-center text-decoration-none'>
                    <button className="default-white-btn" >
                        Home Page
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ErrorPage