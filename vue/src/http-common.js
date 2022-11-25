import axios from "axios";
export default axios.create({

  // baseURL: process.env.NODE_ENV === 'development' ? "http://localhost/course-t5" : "/course-t5",
	//baseURL: '/courselist',
  baseURL: 'https://localhost:8080/',
  headers: { "Content-type": "application/json" }
});