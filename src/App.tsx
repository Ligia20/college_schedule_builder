import {useState} from 'react';
import './App.css';
//import Courses from './components/Courses'
/*
interface Course { 
    id: string;
    name: string;
    dayIndex: number;
    startTimeIndex: number;
    durationRows: number;
}

interface scheduleEvent {
    courseId: string;
}

interface CalenderWeek {
    date: Date;
    dayName: string;
}
*/
export default function App() { 

        
          
       /* const [courses, setCourses] = useState([]);
        const [courseName, setCourseName] = useState('');
        const [selectedDay, setSelectedDay] useState(1);
        const [selectTime, setSelectedTime] = useState(0);
        const [duration, setDuration] = useState(1);

        const handleAddCourse = (e: React.FormEvent) => {
            e.preventDefault();
            if (!courseName.trim()) return;

            const newCourse: Course = {
                id: Date.now().toString(),
                name: courseName,
                dayIndex: Number (selectedTime),
                durationRows: Nunmbers (duration)
            };

            setCourses ([...courses, newCourse]);
            setCourseName('');
        } 

    const eventSettings = {
        left: `calc(70px + (${2 * columnWidthPercent}%))`,
        width: `calc(${2* columnWidthPercent}%)`,
        top: `${1 * rowHeightPx}px`,
        height: `${3 * rowHeightPx}px`,
    }; 
    */
    const [courses, setCourses] = useState([
    { id: "c1", name: "BIO 1101", day: 1, start: 2,  duration: 3 },
    { id: "c2", name: "MAT 1275", day: 4, start: 4, duration: 3 },
    { id: "c3", name: "CIS 1200", day: 5, start: 1, duration: 2 },
]);

    const [placedCourses, setPlacedCourses] = useState<any[]>([]);

    const totalDays = 7
    const columnWidthPercent = 100 / totalDays;
    const rowHeightPx = 50;

    const handlePlaceCourse = (course: any) => {
        const style = {
        position: "absolute" as const,
      /* 100px matches the explicit time label width column track set in CSS */
        left: `calc(100px + ${course.day * columnWidthPercent}%)`,
        width: `${columnWidthPercent}%`,
         top: `${course.start * rowHeightPx}px`,
        height: `${course.duration * rowHeightPx}px`,
        };

        if (placedCourses.some(item => item.id === course.id)) return;

        setPlacedCourses(prev => [...prev, { ...course, style }]);
    };


    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    /*const [messages, setMessages] = useState<string[]>([]); */
    const timeSlots = ['9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM',
        '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM',
        '9:00 PM',
    ]

    return <>
    {/*
       courses.map(
            (text, index) => <Message key={index} text={text} index={index} />
        )
 
    */}
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
            <div key={event.id} className="course_block" style={event.Style}>
                {event.name}
            </div>
        ))}
            
        </div>
        </div>
        </div>
    {/* <h1 className="CSBtitle">College Schedule Builder</h1> */}
    </>;
};

