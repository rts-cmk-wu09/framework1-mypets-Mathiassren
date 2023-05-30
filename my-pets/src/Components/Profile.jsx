import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const StyledProfile = styled.div`
  display: flex;
`;

const StyledFaMap = styled(FaMapMarkerAlt)`
  color: #57419d;
  font-size: 20px;
  margin-left: 18px;
  margin-top: 72px;
`;

const StyledProfilePicture = styled.div`
  width: 44px;
  height: 44px;
  background: #f5f5fa;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  -webkit-box-shadow: 6px 3px 7px 3px #cecece;
  -moz-box-shadow: 6px 3px 7px 3px #c9c9c9;
  box-shadow: 6px 3px 7px 3px #cecece;
`;

const StyledLocation = styled.p`
  margin-top: 72px;
  margin-left: 4px;
  color: black;
`;

const Profile = () => {
  return (
    <StyledProfile>
      <StyledProfilePicture className="ProfilePicture" />
      <StyledFaMap />
      <StyledLocation>New York City</StyledLocation>
    </StyledProfile>
  );
};

export default Profile;
