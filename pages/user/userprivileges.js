import React from "react";

import { Table } from "antd";

const columns = [
  {
    title: "Field",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
];

const UserPrivileges = ({ data }) => {
  return (
    <div>
      <Table title={() => <h3>User Privileges</h3>} columns={columns} dataSource={data} bordered size="small" />
    </div>
  );
};

export default UserPrivileges;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/instance/details");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
