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
          Meu perfil
        </div>
        <br/>
        <hr style={{marginTop: '0.5em',marginLeft: '109px'}} width="500"/>
        <br/>
        <br/>
        <div style={{display:"flex", justifyContent:"center", width: "100%", height: "100%", paddingTop:10, paddingBottom:10}}>
            <div style={{width: "165px", height: "50%"}}>
              <img src={user.picture}
              alt="imageProfile" style={{width: "100%"}} />
            </div>

            <div style={{width: "25%", height: "100%", flexDirection:"column"}}>
              <div style={{ display:"flex", justifyContent:"flex-end", paddingTop: "2px", marginRight: 3 , height:"32px", alignItems:"center"}}>
                <b>Nome Completo</b>
              </div>
              <div style={{ display:"flex", justifyContent:"flex-end", paddingTop: "30px", marginRight: 3 , height:"32px", alignItems:"center"}}>
                <b>Email</b>
              </div>
              <div style={{ display:"flex", justifyContent:"flex-end", paddingTop: "45px", marginRight: 3 , height:"32px", alignItems:"center"}}>
                <b>País</b>  
              </div>
            </div>

            <div style={{width: "35%", height: "100%"}}>
              <TextField style={{ paddingLeft: 5, boxSizing: 'border-box', border: "0.5px solid black", marginBottom: "12px" }} id="nameProfile" value={user.name} />
              <TextField style={{ paddingLeft: 5, boxSizing: 'border-box', border: "0.5px solid black", marginBottom: "12px" }} id="nameProfile" value={user.email} />
              <TextField style={{ paddingLeft: 5, boxSizing: 'border-box', border: "0.5px solid black", marginBottom: "12px" }} id="nameProfile" value={user.locale} />
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;