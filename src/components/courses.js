import React from 'react';
import '../styles/courses.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFilePdf, faVideo, faMicrophone} from "@fortawesome/free-solid-svg-icons"

const Courses = () =>{

    return(
        <div className="courses-wrapper">
            <div className="courses">
                <div className="course">
                    <div>
                        <img className="course-image" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                    </div>
                    <div className="course-details-wrapper">
                        <h2>Self Growth</h2>
                        <div className="course-details">
                            <FontAwesomeIcon className="course-icons" icon={faFilePdf} size="5x"/>
                            <FontAwesomeIcon className="course-icons" icon={faVideo} size="5x"/>
                            <FontAwesomeIcon className="course-icons" icon={faMicrophone} size="5x"/>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint maxime adipisci dolores officia consequatur, ipsum a, suscipit illum delectus nesciunt neque molestiae quidem. Odio fugiat eos mollitia, optio quasi ea?</p>
                    </div>
                    
                </div>
                <div className="course">
                    <div>
                        <img className="course-image" src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                    </div>
                    <div className="course-details-wrapper">
                        <h2>Boost your business</h2>
                        <div className="course-details">
                            <FontAwesomeIcon className="course-icons" icon={faFilePdf} size="5x"/>
                            <FontAwesomeIcon className="course-icons" icon={faVideo} size="5x"/>
                            <FontAwesomeIcon className="course-icons" icon={faMicrophone} size="5x"/>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint maxime adipisci dolores officia consequatur, ipsum a, suscipit illum delectus nesciunt neque molestiae quidem. Odio fugiat eos mollitia, optio quasi ea?</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Courses;