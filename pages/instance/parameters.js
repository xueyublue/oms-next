import React from "react";
import { Table, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Parameter Name",
    dataIndex: "name",
    key: "name",
    width: 300,
    fixed: "left",
  },
  /*{
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 150,
  },*/
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    fixed: "left",
    width: 300,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 500,
  },
  {
    title: "Default?",
    dataIndex: "isDefault",
    key: "isDefault",
    width: 160,
    render: (value) => (
      <Tag color={value === "True" ? "green" : "geekblue"} key={value}>
        {value}
      </Tag>
    ),
  },
  {
    title: "Session Modificable?",
    dataIndex: "isSessionModifiable",
    key: "isSessionModifiable",
    width: 180,
    render: (value) => (
      <Tag color={value === "True" ? "green" : "geekblue"} key={value}>
        {value}
      </Tag>
    ),
  },
  {
    title: "System Modifucable?",
    dataIndex: "isSystemModifiable",
    key: "isSystemModifiable",
    width: 180,
    render: (value) => (
      <Tag color={value === "True" ? "green" : "geekblue"} key={value}>
        {value}
      </Tag>
    ),
  },
  {
    title: "Instance Modificable?",
    dataIndex: "isInstanceModifiable",
    key: "isInstanceModifiable",
    width: 180,
    render: (value) => (
      <Tag color={value === "True" ? "green" : "geekblue"} key={value}>
        {value}
      </Tag>
    ),
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
          position: ["bottomRight"],
          pageSizeOptions: [10, 15, 30, 100, 500],
          onChange: (p, size) => {
            setPage(p);
            setPageSize(size);
          },
        }}
        scroll={{ x: 1700, y: 700 }}
      />
    </div>
  );
};

export default Parameters;

export async function getServerSideProps(context) {
  const response = await fetch(
    "http://localhost:8099/wse/restapi/oms/instance/parameters"
  );
  const data = await response.json();
  return {
    props: { data: data },
  };
}
