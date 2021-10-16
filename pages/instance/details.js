import React from "react";
import { Table, message } from "antd";

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

const InstanceDetails = ({ data }) => {
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="small"
        pagination={{ pageSize: 15, position: ["none"] }}
      />
    </div>
  );
};

export default InstanceDetails;

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.API_ROOT_URL}/instance/details`);
  const data = await response.json();
  return {
    props: { data: data },
  };
}
