import useFetch from "../hooks/useFetch";
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";
import LoadingError from "../components/LoadingError";
import HeaderCartButton from "./HeaderCartButton";

const Headr = ({onShowCart}) => {
  const { data, isLoading, error } = useFetch('http://localhost:3200/categories')
  console.log(data);

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
          <li ><HeaderCartButton onClick={onShowCart}/></li>
          <li  ><i className="fa-solid fa-user"></i><span > Welcomeusername</span></li>
          <li ><Link to="/auth/login">Login</Link></li>
          <li ><Link to="/auth/register">Register</Link></li>
          <li ><button >Logout</button></li>
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
export default Headr