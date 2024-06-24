import React, { forwardRef, useRef } from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import useForm from "../../Hooks/useForm";
import {
  createNewAdminAction,
  loginAdminAction,
} from "../../features/users/userAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Both input field must be filled");
    }

    //  call server to process the authentication

    dispatch(loginAdminAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Sam@email.com",
      forwardRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      forwardRef: passwordRef,
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark  ">
      <div className="" style={{ width: "450px" }}>
        <Form
          className="shadow-lg p-3 rounded bg-light "
          onSubmit={handleOnSubmit}
        >
          <h3 className="text-center">Admin Login</h3>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
