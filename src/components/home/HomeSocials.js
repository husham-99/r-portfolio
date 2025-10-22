import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function HomeSocials() {
  return (
    <div className="home-socials">
      <a href="#" target="blank"><FaLinkedin /></a>
      <a href="#" target="blank"><FaGithub /></a>
      <a href="#" target="blank"><FaFacebook /></a>
    </div>
  );
}
