import React, {useState, useEffect} from 'react';
import EnrolledCourse from './EnrolledCourses';
import './EnrollmentList.css';
import courses from '../data/courses';

function EnrollmentList({enrolledCourses, setEnrolledCourses}){
    const [enrollmentHours, setEnrollmentHours] = useState(0);
    

    useEffect(() => {
        // load
        let data = [];
        for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            data.push(value);
            
        setEnrolledCourses(data)
        }

    },[])

    useEffect(() => {
        let enrolledHoursCount = 0;
        if(enrolledCourses.length > 0){
            for(let i = 0; i < enrolledCourses.length; i++){
                let valueToAdd = enrolledCourses[i];
                let keyToAdd = valueToAdd.toString();

                localStorage.setItem(keyToAdd, valueToAdd);
                enrolledHoursCount += enrolledCourses[i].creditHours;
            }
        }
        setEnrollmentHours(enrolledHoursCount);

    },[enrolledCourses])

    function renderCourse(){
        let count = 0;
        let rows = [];
        let coursesToRender = [];
        

        for(let i = 0; i < enrolledCourses.length; i++){
            //here we changed the variable to be called course instead of id as that is what lead to the orginal confusion
            let course = enrolledCourses[i]
            //enrolledHoursCount += courses[id].creditHours;
            coursesToRender.push(
                <EnrolledCourse course= {course} enrolledCourses={enrolledCourses} setEnrolledCourses={setEnrolledCourses}> </EnrolledCourse>
            )
            count += 1;
            if(count === 3){
                rows.push(
                    <tr>
                        {coursesToRender}
                    </tr>
                )
                coursesToRender = [];
                count = 0;
            }
        }
        rows.push(
            <tr>
                {coursesToRender}
            </tr>
        )
        //setEnrollmentHours(enrolledHoursCount);
        return rows;
    }

    return(
        <div>
            <h1>Enrollment List</h1>
            <h3>Total Credit Hours: {enrollmentHours} </h3>
            <table className = "cv">
                {renderCourse()}
            </table>
        </div>
    );
}

export default EnrollmentList;
