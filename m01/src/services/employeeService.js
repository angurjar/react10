import axios from 'axios';


 const employeeService={
 getEmployees : async() => {
  return await axios.get();
},

addEmployee: async(employeeData) => {
  return await axios.post(   + 'add', employeeData);
}

 }
 export default employeeService