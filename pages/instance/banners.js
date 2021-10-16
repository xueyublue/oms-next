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
  const response = await fetch(`${process.env.API_ROOT_URL}/instance/banners`);
  const data = await response.json();
  return {
    props: { data: data },
  };
}
