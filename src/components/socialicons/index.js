import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon d-flex align-items-center gap-3">
      <p>Follow Me</p>
      <ul className="d-flex align-items-center">
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li className="py-3">
            <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
