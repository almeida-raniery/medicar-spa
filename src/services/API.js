import axios from "axios";

const RequestAPI = axios.create({
  baseURL:"https://bula.vercel.app",
  method:"get"
})

export default RequestAPI;