import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import facebook from '../../assets/face.png'
import twitter from '../../assets/twitter.png'
import apple from '../../assets/apple.png'
import criaRh from '../../assets/criarhLogo.png'
import { Redirect, Link } from "react-router-dom";
import { Button } from '@material-ui/core';



// import { Container } from './styles';

export default function Dashboard() {
  const setLocalStotageCompany = (value) => {
    if (localStorage.getItem('company')) {
           
      localStorage.removeItem('company');
      localStorage.setItem('company', value);
    }


  }
  // function graphCompany() {
  //   localStorage.setItem("company", "facebook");
  //   return <Redirect to='/charts' />
  // }



  return (
    <div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <p style={{ textAlign: "center", fontSize: "20px" }}><b>Empresas</b></p>
      <div style={{
        height: "100px",
        margin: "194px",
        marginLeft: "301px"
      }} >
        <Link
          to="/charts" onClick={setLocalStotageCompany('facebook')}
        >
          <Grid item xs={12} sm={6}>
            <img src={facebook} alt="Face" style={{
              width: "100px"
            }} />
          </Grid>
        </Link>
      </div>

      <div style={{
        height: "100px",
        margin: "-294px 227px 152px 615px",
      }} >

        <Link
          to="/charts" onClick={setLocalStotageCompany('twitter')}
        >
          <Grid item xs={12} sm={6}>
            <img src={twitter} alt="twitter" style={{
              width: "100px"
            }} />
          </Grid>
        </Link>
      </div>

      <div style={{
        height: "100px",
        margin: "-252px 227px 152px 870px",
      }} >

        <Link
          to="/charts" onClick={setLocalStotageCompany("apple")}
        >
          <Grid item xs={12} sm={6}>
            <img src={apple} alt="apple" style={{
              width: "100px"
            }} />
          </Grid>
        </Link>
      </div>

      <div style={{
        height: "100px",
        margin: "-216px 227px 152px 1073px",
      }} >

        <Link
          to="/charts" onClick={setLocalStotageCompany("criarh")}
        >
          <Grid item xs={12} sm={6}>
            <img src={criaRh} alt="criarh" style={{
              width: "100px"
            }} />
          </Grid>
        </Link>
      </div>
    </div >
  );
}
