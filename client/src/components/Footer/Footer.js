import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Made with <HeartTwoTone twoToneColor="#f7792a" /> By{" "}
      <a
        className="footer__link"
        href="https://github.com/shivam-m-7/ravendrishti"
        target="_blank"
        style={{ color: "#f7572a" }}
        rel="noreferrer"
      >
        Shivam Mishra
      </a>
    </footer>
  );
};

export default Footer;
