import React, {useContext} from 'react';
import courses from '../data/courses.js';
import course1 from '../images/course1.jpg';
import course2 from '../images/course2.jpg';
import './EnrolledCourses.css';

function EnrolledCourse(props){
    //we edited this to be props.course.name instead
    let courseName = props.course.name;
    let courseCreditHours = props.course.creditHours;
    let courseImage = props.course.image;
    

    function drop(course){
        let tempArray = []
        for(let i = 0; i < props.enrolledCourses.length; i++){
            //here we changed props.id to be course.id
            if(course.id != props.enrolledCourses[i].id){
                tempArray.push(props.enrolledCourses[i]);
            }
        }
        props.setEnrolledCourses(tempArray);
    }
    return(
        <td>
        <div>
            <h2>{courseName}</h2>
            <img src= {courseImage ? course1 : course2} alt="Course image"></img>
            <p>Credit Hours: {courseCreditHours}</p>
            <button onClick={()=>drop(props.course)}>Drop</button>
        </div>
        </td>
    );
}

export default EnrolledCourse;
