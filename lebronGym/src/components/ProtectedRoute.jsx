import { Navigate} from "react-router-dom";
import useStore from "../store/useStore";

export default function ProtectedRoute({ children, role}){
    //obtiene el usuario del estado global
    const user = useStore((state) => state.user);

// si no hay usuario logueado, devuelve al login

if(!user){
return <Navigate to ="/" replace />;
}
//si el rol no coincide, devuelve al login
if(role && user.rol !== role){
    return <Navigate to="/" replace />;
}

// si todo esta correcto muestra la pagina
return children;
}