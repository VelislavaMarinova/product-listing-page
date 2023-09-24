import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../components/Loading";
import LoadingError from "../components/LoadingError";
import HeaderCartButton from "./HeaderCartButton";
import { useAuth } from "../store/auth-context";

const Headr = ({onShowCart}) => {
  const {auth, logout}=useAuth();
  console.log(auth,'auth');
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch('http://localhost:3200/categories')
  console.log(data);
  const onLogoutHandler=()=>{
  logout();
  navigate('/');
  }

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <LoadingError value={error.message} />
  }

  return (<>
    <div >
      <div >
        <div ><Link to={'/'}>Timeless<strong>Trends</strong></Link></div>
        <ul >
          { auth && <li ><HeaderCartButton onClick={onShowCart}/></li>}
          
          {auth &&  <li  ><i className="fa-solid fa-user"></i><span > Welcome <strong>{auth.user.username}</strong></span></li>}
         {!auth && <li ><Link to="/auth/signin">Sign In</Link></li>}
         {!auth && <li ><Link to="/auth/signup">Sign Up</Link></li>}
          {auth &&  <li ><button variant="link" onClick={onLogoutHandler}>Logout</button></li> }
         
        </ul>
      </div>
    </div>
    <div>
      <ul>  {data && data.length > 0 ? (
        data.map(categoryInfo => (
          <li key={categoryInfo.id}><Link to={`/categories/${categoryInfo.category}`}>{categoryInfo.category}</Link>
          </li>
        ))
      ) : (
        <li>No categories available</li>
      )}</ul>
    </div>
  </>
  );
};

export default Headr;