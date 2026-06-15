import {useState} from 'react';
import './App.css';
//import Courses from './components/Courses'
interface Course {
  id: string;
  name: string;
  day: string;     // Storing readable string values like "Sun", "Mon"
  start: string;   // Storing readable string values like "9:00 AM"
  duration: number;
}     
export default function App() { 

  
    
    const [courses, setCourses] = useState([
    { id: "c1", name: "BIO 1101", day: 0, start: 2,  duration: 4 },
    { id: "c2", name: "MAT 1275", day: 3, start: 4, duration: 3 },
    { id: "c3", name: "CIS 1200", day: 5, start: 1, duration: 2 },
]);

    const [placedCourses, setPlacedCourses] = useState<any[]>([]);

    const totalDays = 7
    const rowHeightPx = 50;

    const handlePlaceCourse = (course: any) => {
    const style = {
      position: "absolute" as const,
      left: `calc(100px + (${course.day} * ((100% - 100px) / 7)))`,
      width: `calc((100% - 100px) / 7)`,
      top: `${course.start * rowHeightPx}px`,
      height: `${course.duration * rowHeightPx}px`,
    };

        if (placedCourses.some(item => item.id === course.id)) return;
        setPlacedCourses(prev => [...prev, { ...course, style }]);
    };


    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const timeSlots = ['9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM',
        '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM',
        '9:00 PM',
    ]

    return <>
    <h1 className="CSBtitle"> College Schedule Builder </h1>
    <div className="dashboard_layout"> 

        <div className="sidebar_panel">
            <h2 className="sidebar_title">Add Course</h2>
            <div className="course_list">
                {courses.map(course => (
                    <div key={course.id} className="course_item" onClick={() => handlePlaceCourse(course)} >
                        {course.name}
                    </div>
                ))}
            </div>
        </div>
    
  
        <div className="calender_container">

            <div className="week_grid">
                <div className="header_space"></div>
                    {dayLabels.map((day,index) => (
                        <div key={index} className="day_column">
                            <span className="day_name">{day}</span>
                    </div>
                    ))}
            </div>

        <div className="schedule_body">
        {timeSlots.map((time, timeIndex) => (
            <div key={timeIndex} className="schedule_grid_row" style={{height: `${rowHeightPx}px`}}>
                <div className="time_label_cell">
                    {time}
                </div>
                {dayLabels.map((_,dayIndex) => (
                    <div key={dayIndex} className="time_slot_box">
                    </div>
                ))}
            </div>
        ))} 

        {placedCourses.map(event => (
            <div key={event.id} className="course_block" style={event.style}>
                {event.name}
            </div>
        ))}
            
        </div>
        </div>
        </div>
    {/* <h1 className="CSBtitle">College Schedule Builder</h1> */}
    </>;
};

