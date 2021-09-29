import React from "react";
import { Table, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 300,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 150,
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    render: (value) => (
      <Tag color={value === "No" ? "green" : "geekblue"} key={value}>
        {value}
      </Tag>
    ),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 300,
  },
  {
    title: "Is Default?",
    dataIndex: "isDefault",
    key: "isDefault",
    width: 200,
  },
  {
    title: "Session Modificable?",
    dataIndex: "isSessionModifiable",
    key: "isSessionModifiable",
    width: 200,
  },
  {
    title: "System Modifucable?",
    dataIndex: "isSystemModifiable",
    key: "isSystemModifiable",
    width: 200,
  },
  {
    title: "Instance Modificable?",
    dataIndex: "isInstanceModifiable",
    key: "isInstanceModifiable",
    width: 200,
  },
];

const Parameters = ({ data }) => {
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

export default Parameters;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/instance/parameters");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
