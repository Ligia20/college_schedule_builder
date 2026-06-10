import {useState} from 'react';
import './App.css';
//import Courses from './components/Courses'

/*interface Course { 
    id: string;
    name: string;
    code: string;
    defaultTime: string;
    deaultDayIndex: number;
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

        const totalDays = 7
        const columnWidthPercent = 100 / totalDays;
        const rowHeightPx = 57;
    
    //const [courses, setCourses] = useState([])
    const eventSettings = {
        left: `calc(70px + (${2 * columnWidthPercent}%))`,
        width: `calc(${2* columnWidthPercent}%)`,
        top: `${1 * rowHeightPx}px`,
        height: `${3 * rowHeightPx}px`,
    };
    
    const dayLabels = [' ', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

    <div className="calender_container">
        <div className="week_grid">
            {dayLabels.map((day, index) => (
                <div key={index} className="day_column">
                    <span className="day_name">{day}</span>
                </div>
            ))}
        </div>
        <div className="schedule_body">
        {timeSlots.map((time, timeIndex) => (
            <div key={timeIndex} className="schedule_grid_row" style={{height: `${rowHeightPx}`}}>
                <div className="time_label_cell">
                    {time}
                </div>
            
                {dayLabels.map((_,dayIndex) => (
                    <div key={dayIndex} className="time_slot_box">
                    </div>
                ))}
            </div>
        ))} 
            <div className="wrapper" style={eventSettings}>
                <div>one</div>
            </div>
        </div>
    </div>
        
    {/* <h1 className="CSBtitle">College Schedule Builder</h1> */}
    </>;

}


