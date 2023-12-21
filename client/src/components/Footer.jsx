import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} @Kewal Krishna Pandey</p>
    </footer>
  );
}

export default Footer;
