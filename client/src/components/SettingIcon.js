import styled from 'styled-components';
import UserIcon from '../UserIcon.png'
import {Link} from 'react-router-dom';

const UserIconContainer = styled.div`
width: 20%;
height: 100%; 
display: flex; 
justify-content: center;
align-items: center;
`

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const SettingIcon = () => {

    return (
      <UserIconContainer>
        <Link to="/setting">
          <Icon src={UserIcon} alt="Go to setting" />
        </Link>
      </UserIconContainer>
    )

}

export default SettingIcon