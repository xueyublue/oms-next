import React from "react";
import { Table, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Role",
    dataIndex: "role",
    key: "roleId",
    width: 300,
  },
  {
    title: "Role ID",
    dataIndex: "roleId",
    key: "roleId",
    width: 150,
  },
  {
    title: "Password Required?",
    dataIndex: "passwordRequired",
    key: "roleId",
    render: (passwordRequired) => (
      <Tag color={passwordRequired === "No" ? "green" : "geekblue"} key={passwordRequired}>
        {passwordRequired}
      </Tag>
    ),
  },
];

const Roles = ({ data }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="small"
        pagination={{
          page: page,
          pageSize: pageSize,
          position: ["topRight"],
          pageSizeOptions: [10, 15, 30, 100, 500],
          onChange: (p, size) => {
            setPage(p);
            setPageSize(size);
          },
        }}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Roles;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/user/roles");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
