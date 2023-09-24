import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div>
      Please <Link  to="/auth/signin">sign in</Link> in order to see this page!
    </div>
  );
};

export default NotAuthorized;
