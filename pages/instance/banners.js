import React from "react";

import { Table } from "antd";

const columns = [
  {
    title: "Banner",
    dataIndex: "banner",
    key: "banner",
  },
];

const Banners = ({ data }) => {
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

export default Banners;

export async function getServerSideProps(context) {
  const response = await fetch(
    "http://localhost:8099/wse/restapi/oms/instance/banners"
  );
  const data = await response.json();
  return {
    props: { data: data },
  };
}
