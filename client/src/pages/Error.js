import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
        <h1>404 ERROR PAGE NOT FOUND</h1>

        <h3>Please navigate back to the home page</h3>
        <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}

export default Error