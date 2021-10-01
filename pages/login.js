import React from "react";

const Login = ({ data }) => {
  return <div>Login</div>;
};

export default Login;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/user/roles");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
