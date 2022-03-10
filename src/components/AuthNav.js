import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "white",
  marginLeft: "20px",
  fontSize: "24px",
  fontWeight: 500,
};

export default function AuthNav() {
  return (
    <div>
      <NavLink style={styles} to="/register" exact>
        Registration
      </NavLink>
      <NavLink style={styles} to="/login" exact>
        Log in
      </NavLink>
    </div>
  );
}
