import axios from 'axios';


const attendanceService = {
  getAllAttendance: async () => {
    const response = await axios.get();
    return response.data;
  },
  addAttendance: async (attendance) => {
    const response = await axios.post( attendance);
    return response.data;
  }
};

export default attendanceService;
