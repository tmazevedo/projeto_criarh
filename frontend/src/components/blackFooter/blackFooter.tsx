import React from 'react';
import logoCriarh from './../../../src/assets/criarhLogo.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './blackFooter.css'
import {
  FaWhatsapp, FaTelegramPlane,
  FaFacebookF, FaInstagram, FaTwitter,
} from "react-icons/fa";
import {
  Link
} from '@material-ui/core';

class BlackFooter extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = this.getCleanState();
  }

  getCleanState = () => {
    return {
      // teste:this.props.data;
    }
  }

  render() {
    return (


      <div className="logoBottom">
        <div className="boxImage">
          <img src={logoCriarh} className="logoCriarhBottom" alt='logo' />
        </div>
        <div className="box1">
          <Button className="homeButton" style={{ textAlign: 'left' }} disableRipple={true}>Home</Button>
          <Button className="aboutButton" disableRipple={true}>About</Button>
          <Button className="featuresButton" disableRipple={true}>Features</Button>
          <Button className="pricingButton" disableRipple={true}>Pricing</Button>
        </div>
        <div className="box2">
          <Button className="contactUsButton" disableRipple={true}>Contact Us</Button>
          <Button className="blogButton" disableRipple={true}>Blog</Button>
          <Button className="searchButton" disableRipple={true}>Search</Button>
          <Button className="privacyButton" disableRipple={true}>Privacy</Button>
        </div>
        <div className="box3">
          {/* <div className="textPlusTexfield">

            </div> */}
          <div className="newsletter">Get our newsletter</div>
          <div className="row1">
            <TextField
              className="subscribe"
              id="email"
              label="Enter your Email"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              variant="outlined"
            // margin="normal" 
            />
            <Button className="subscribeButton" type="submit" variant="contained">Subscribe</Button>
          </div>

          <div className="social_midia_icons">

            <div className="social_midia_icon">
              <Link
                href='https://www.facebook.com/tavaresbianca?ref=bookmarks'
                target="_blank"
                rel="noopener"                     >
                <FaFacebookF size={28} color="#3b5998" />
              </Link>

            </div>

            <div className="social_midia_icon">
              <Link
                href="https://www.instagram.com/biawar/"
                target="_blank"
                rel="noopener"
              >
                <FaInstagram size={28} color='#C13584' />
              </Link>
            </div>

            <div className="social_midia_icon">
              <Link
                href="https://twitter.com/biawart"
                target="_blank"
                rel="noopener"
              >
                <FaTwitter size={28} color='#1DA1F2' style={{ paddingTop: '2px' }} />
              </Link>
            </div>

            <div className="social_midia_icon">
              <Link
                href="https://wa.me/558199225228"
                target="_blank"
                rel="noopener"
              >
                <FaWhatsapp size={28} color='#4AC959' />
              </Link>
            </div>

            <div className="social_midia_icon" >
              <Link
                href="https://wa.me/558199225228"
                target="_blank"
                rel="noopener"
              >
                <FaTelegramPlane size={28} color='#0088CC' style={{ paddingRight: '2px' }} />
              </Link>
            </div>
          </div>

        </div>

      </div>


    );
  }

}
export default BlackFooter;