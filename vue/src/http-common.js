import axios from 'axios'

export default axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost/course-t5' : '/course-t5'
    ,headers: { 'Content-Type': 'application/json' }
});