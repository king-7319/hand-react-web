import axios from '../axios'
const url='http://localhost';
export default {
    login:(data:any)=>{
        return axios({
            method:"POST",
            url:url+'/login.php',
            data
        })
    }
}