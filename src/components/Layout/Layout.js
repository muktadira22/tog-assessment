import React from "react";

import PropTypes from "prop-types";

import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const Layout = ({ children, breadcrumb, title }) => {
  return (
    <Container fluid className="py-3">
      {breadcrumb && (
        <Row className="mb-3">
          <Col>
            <Breadcrumb bsPrefix="nav">
              {breadcrumb.map((item, key) => (
                <Breadcrumb.Item
                  active={key + 1 === breadcrumb.length}
                  href={item.link}
                  key={key}
                >
                  {item.title}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Col>
        </Row>
      )}
      {title && <h4 className="display-5 mb-3">{title}</h4>}
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  breadcrumb: PropTypes.array,
  title: PropTypes.string
};

export default Layout;
