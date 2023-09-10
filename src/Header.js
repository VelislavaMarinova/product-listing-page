import useFetch from "./hooks/useFetch";
import { Link } from 'react-router-dom';
import Loading from "./components/Loading";
import LoadingError from "./components/LoadingError";

const Headr = () => {
  const { data, isLoading, error } = useFetch('http://localhost:3200/categories')
  console.log(data);

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <LoadingError value={error.message} />
  }

  return (
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
  );
};
export default Headr