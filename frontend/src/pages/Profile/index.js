import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import TextField from '@material-ui/core/TextField';
// import { Container } from './styles';

function Profile() {
  const { loading, user } = useAuth0();

  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '720px' }}>
      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#ffff", paddingTop: '10 %', width: '55%', margin: 'auto', overflow: 'visible', height: "67%" }}>
        <br />
        <br />
        <div style={{fontSize: '30px',textAlign: 'center'}}>
          Editar perfil
        </div>
        <br/>
        <hr style={{marginTop: '0.5em',marginLeft: '109px'}} width="500"/>
        <br/>
        <br/>
        <div style={{ marginLeft: "62px" }}>
          <b style={{ verticalAlign: '-11px' }}>Nome Completo</b>  <TextField style={{ boxSizing: 'border-box', border: "0.5px solid black" }} id="nameProfile" value={user.name} />
        </div>

        <img src={user.picture}
          alt="imageProfile" style={{
            borderRadius: '4px',
            padding: '11px',
            width: '150px',
            margin: '70px',

          }} />
      </div>
    </div>
  );
}

export default Profile;