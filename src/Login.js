import img from './Images/01.jpg'
import imgg from './Images/02.jpg'
import { useNavigate } from "react-router-dom";
import Shop from './Shop';
function Login(){
    const navigate = useNavigate()
    return(
        <div>
        
            <img src={img} style={{height:'1000px'}}></img>
           <img src={imgg} style={{height:'1000px'}}></img>

            
        </div>
    )



}
export default Login