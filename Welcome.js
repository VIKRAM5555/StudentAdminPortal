import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
export function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="Welcome" >

<span><Button type='submit' onClick={()=>navigate("/StudentPortal")} variant="contained"><div>Student</div></Button></span>
<span><Button type='submit' onClick={()=>navigate("/Admin")} variant="contained"><div>Admin</div></Button></span>
    </div>
  );

}
