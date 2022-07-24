import React from 'react';
import '../styles/unlock-courses.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons"

const UnlockCourses = () =>{

    return (
      <div className="unlock-courses-wrapper">
        <div className="unlock-courses">
          <div>
            <FontAwesomeIcon className="lock-icon" icon={faLock} size="5x" />
            <img
              className="locked-course"
              src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img>
            <p className="locked-course-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ab corrupti iusto excepturi dolor itaque.</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="lock-icon unlocked"
              icon={faLockOpen}
              size="5x"
            />
            <img
              className="unlocked-course"
              src="https://images.unsplash.com/photo-1613926161474-fcc7a939e051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80"
            ></img>
            <p className="locked-course-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ab corrupti iusto excepturi dolor itaque.</p>
          </div>
          <div>
            <FontAwesomeIcon className="lock-icon" icon={faLock} size="5x" />
            <img
              className="locked-course"
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            ></img>
            <p className="locked-course-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ab corrupti iusto excepturi dolor itaque.</p>
          </div>
        </div>
      </div>
    );
}

export default UnlockCourses;