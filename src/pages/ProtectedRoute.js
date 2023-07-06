import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const sessionToken = localStorage.getItem("token");
  if (sessionToken) {
    return props.outlet;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
