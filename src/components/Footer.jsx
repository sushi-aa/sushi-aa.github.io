import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Created by {" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/sushi-aa"
          aria-label="GitHub"
        >
          Arushi
        </a>{" "}
        using <i className="fab fa-react" />
        {" "} with inspiration from {" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="GitHub"
        >
          Hashir
        </a>
        <p>
          <small className="text-muted">
            <a href='https://kxvin.com' target='_blank'>K ♡</a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
