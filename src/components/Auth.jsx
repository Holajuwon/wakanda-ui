import React from "react";
import { Button } from "@chakra-ui/core";
import GoogleLogin from "react-google-login";
import { FaGoogle } from "react-icons/fa";
import Layout from "./Layout";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
const port = process.env.PORT || 9000;

export const Login = ({ text, color, hidden }) => {
  const history = useHistory();

  const responseGoogle = (response) => {
    if (response.profileObj)
      axios
        .get(
          `http://localhost:${port}/users?googleId=${response.profileObj.googleId}`
        )
        .then((res) => {
          history.push({
            pathname: "/dashboard",
            state: res.data[0],
          });
          localStorage.setItem("user", JSON.stringify(res.data[0].id));
        })
        .catch((err) => console.error(err));
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      render={(renderProps) => (
        <Button
          leftIcon={FaGoogle}
          onClick={renderProps.onClick}
          _disabled={renderProps.disabled}
          variantColor={color}
          variant="solid"
          hidden={hidden}
        >
          {text}
        </Button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      theme="dark"
    />
  );
};

export const Register = ({ text, color, hidden }) => {
  const history = useHistory();

  const responseGoogle = (response) => {
    axios
      .post(`http://localhost:${port}/users`, response.profileObj)
      .then((res) => {
        history.push({
          pathname: "/dashboard",
          state: res.data[0],
        });
        localStorage.setItem("user", JSON.stringify(res.data[0].id));
      })
      .catch((err) => console.error(err));
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      render={(renderProps) => (
        <Button
          leftIcon={FaGoogle}
          onClick={renderProps.onClick}
          _disabled={renderProps.disabled}
          variantColor={color}
          variant="solid"
          hidden={hidden}
        >
          {text}
        </Button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};

Login.defaultProps = {
  text: "Login",
  color: "pink",
  hidden: false,
};

Login.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  hidden: PropTypes.bool,
};

const Auth = () => {
  return (
    <Layout>
      {console.log(process.env.REACT_APP_CLIENT_ID)}
      <Login />
    </Layout>
  );
};

export default Auth;
