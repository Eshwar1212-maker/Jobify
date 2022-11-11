import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from 'styled-components';
import Wrapper from "../assets/wrappers/Testing"


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="JobIt" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <div>
            
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
