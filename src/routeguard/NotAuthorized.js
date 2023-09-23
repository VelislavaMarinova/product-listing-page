import './notAuthorized.css'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div>
      Please <Link  to="/auth/login">login</Link> in order to see this page!
    </div>
  );
};

export default NotAuthorized;
