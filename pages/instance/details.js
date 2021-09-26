import React from "react";
import { Table, message } from "antd";

const columns = [
  {
    title: "Field",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "key",
  },
];

const InstanceDetails = ({ data }) => {
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Table title={() => <h3>Instance Details</h3>} columns={columns} dataSource={data} bordered size="small" />
    </div>
  );
};

export default InstanceDetails;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/instance/details");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
