import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing"
import Logo from "../components/Logo";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            In mollit cillum ea adipisicing magna quis labore veniam proident
            elit fugiat sint nostrud. Magna in cupidatat eu laborum non culpa
            minim. Occaecat in id tempor deserunt ipsum et voluptate anim eu
            velit eiusmod ad sint. Qui aliquip dolore commodo dolor.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
