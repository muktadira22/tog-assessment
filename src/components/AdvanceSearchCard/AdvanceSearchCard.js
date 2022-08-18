import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style.scss";

const AdvanceSearchCard = ({ children }) => {
  return (
    <Card className="advance-search-card">
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

AdvanceSearchCard.propTypes = {
  children: PropTypes.any.isRequired
};

export default AdvanceSearchCard;
