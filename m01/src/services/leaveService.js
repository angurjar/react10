import  axios from  'axios'
const LeaveServices={
getLeaves:async()=>{
    const response=await axios.get()
    return response.data
}
,
 addLeaves:async(leaves)=>{
    const response=await axios.post( leaves)
    return response.data
}
}
export default LeaveServices