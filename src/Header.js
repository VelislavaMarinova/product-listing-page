import useFetch from "./hooks/useFetch";
import { Link } from 'react-router-dom';

const Headr = () => {
  const { data } = useFetch('http://localhost:3200/categories')
  console.log(data);

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
  )
}
export default Headr