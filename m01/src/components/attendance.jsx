import React, { useEffect, useState } from 'react';
import attendanceService from '../services/attendanceService';



 const Attendance=()=>{
    const [attendance,setAttendance]=useState([])
    const [status,setStatus]=useState('')


    useEffect(()=>{
const fetchAttendance=async ()=>{
    try{
    const response=await attendanceService.getAllattendence()
     setAttendance( response.data)
    }
    catch{

    }
}
fetchAttendance()
    },[])



    const handleAttendanceSubmit=async(e)=>{
        e.preventDefault()
        await attendanceService.addAttendance({attendance, status})
        const data=attendanceService.getAllattendence()
        setAttendance(data)
        
    }


    return(
        <div>
<form onSubmit={handleAttendanceSubmit}>
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        <button type="submit">Submit Attendance</button>
      </form>
            <ul>{
            attendance.map((record,index)=>(
                <li key={index}>{record.employeeId}:{record.status}</li>
            ))}</ul>
        </div>
    )
}

export default Attendance