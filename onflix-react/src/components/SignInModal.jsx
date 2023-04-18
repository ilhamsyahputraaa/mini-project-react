import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const SignInModal = () => {
  const navigate = useNavigate();
  

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const getTokenResponse = await axios.get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_APIKEY}`
        );
        const request_token = getTokenResponse.data.request_token;
        const validateTokenResponse = await axios.post(
          `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_APIKEY}`,
          {
            username: values.username,
            password: values.password,
            request_token: request_token,
          }
        );
        const getSessionResponse = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_APIKEY}`,
          {
            request_token: request_token,
          }
        );
        const session_id = getSessionResponse.data.session_id;
        if (session_id) {
          localStorage.setItem("SID", session_id);
          navigate("/");
          alert(`Joining with session_id: ${session_id}`);
        }
      } catch (error) {
        alert(error.message);
      }
    },
  });

  return (
    <>
      <div className="login-bg login-page header-tenet" style={{backgroundColor:"darkgray"}}>
        <div className="login-bubble signin-modal modal-body-sign ">
          <h1 style={{ marginBottom: "24px" }}>Sign In</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 " controlId="username">
              <Form.Control
                required
                type="text"
                placeholder="Username"
                style={{ marginBottom: "24px" }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                style={{ marginBottom: "24px" }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </Form.Group>
            <Button type="submit" className="login-btn">
              Sign In
            </Button>
          </Form>
          <p className="login-help-text">Need help?</p>
        </div>
      </div>

    </>
  );
};

export default SignInModal;