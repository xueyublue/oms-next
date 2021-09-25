import React from "react";

import { Table } from "antd";

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

const TopTables = ({ data }) => {
  return (
    <div>
      <Table title={() => <h3>Top Tables</h3>} columns={columns} dataSource={data} bordered size="small" />
    </div>
  );
};

export default TopTables;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/instance/details");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
