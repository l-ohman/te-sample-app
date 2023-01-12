import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMail, IoDocumentTextSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div id="footer">
      <p>Sample project by Jake Lohman for Trading Economics</p>
      <div id="footer-links-container">
        <a
          href="mailto:jakelohman7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail size={40} className="icon-link-inverted" />
        </a>

        <a
          href="https://www.linkedin.com/in/jake-lohman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} className="icon-link-inverted" />
        </a>

        <a
          href="https://github.com/l-ohman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={40} className="icon-link-inverted" />
        </a>

        <a
          href="https://l-ohman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentTextSharp size={40} className="icon-link-inverted" />
        </a>
      </div>
    </div>
  );
}
