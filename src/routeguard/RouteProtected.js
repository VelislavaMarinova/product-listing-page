import NotAuthorized from '../notAutorized/NotAuthorized'
import { useAuth } from '../store/auth-context'

const RouteProtected = ({ children }) => {
  const {auth} = useAuth()

  if(!auth){

    return <NotAuthorized />
  }

  return children;
}

export default RouteProtected;