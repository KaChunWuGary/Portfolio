import React from 'react';
import './css/footer.css';
import githubmark from "../assets/githubmark.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/KaChunWuGary" target="_blank" rel="noopener noreferrer">
        <img src={githubmark} alt = "github link" className ="icons" ></img>
      </a>
      <a href ="https://linkedin.com/in/ka-chun-wu-1a7b0b2a7" target="_blank" rel="noopener noreferrer">
        <img src = {linkedin} alt = "linkedin link" className ="icons"></img>
      </a>
      <a href ="https://stock.adobe.com/search?k=work+in+progress&asset_id=517315479" target="_blank" rel="noopener noreferrer">
        <img src = {twitter} alt = "twitter link" className ="icons"></img>
      </a>
    </footer>
  );
};

export default Footer;
