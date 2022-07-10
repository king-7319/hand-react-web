import axios from '../axios'
export default {
    register:(data:any)=>{
        return axios({
            method:"POST",
            url:'http://localhost/project_PHP/php-Server/register.php',
            data
        })
    },
    login:(data:any)=>{
        return axios({
            method:"POST",
            url:"http://localhost/project_PHP/php-Server/login.php",
            data
        })
    }
}