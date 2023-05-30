import styled from "styled-components";
import Animal from "../assets/Animal.jpg";
import Step from "../assets/Step.jpg";

const StyledP = styled.p`
  color: #9c9c9c;
  margin-left: 4px;
  margin-top: 16px;
`;

const StyledBtn = styled.button`
  width: 327px;
  height: 44px;
  background-color: #57419d;
  color: white;
  border-radius: 32px;
  border: none;
`;

const StyledDiv = styled.div``;

const StyledH1 = styled.h1`
  color: black;
  font-size: 2rem;
`;

const Rating = () => {
  return (
    <StyledDiv>
      <img src={Animal} alt="" />
      <StyledH1>My Pets</StyledH1>
      <StyledP>
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </StyledP>
      <StyledBtn className="PurpleBtn">Skip</StyledBtn>
    </StyledDiv>
  );
};

export default Rating;
