import React from "react";
import { Table, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Resource Name",
    dataIndex: "resourceName",
    key: "resourceName",
    width: 300,
  },
  {
    title: "Current Utilization",
    dataIndex: "currentUtilization",
    key: "resourceName",
    width: 150,
    sorter: (a, b) => a.currentUtilization - b.currentUtilization,
  },
  {
    title: "Max Utilization",
    dataIndex: "maxUtilization",
    key: "resourceName",
    width: 150,
    sorter: (a, b) => a.maxUtilization - b.maxUtilization,
  },
  {
    title: "Initial Allocation",
    dataIndex: "initialAllocation",
    key: "resourceName",
    width: 150,
    sorter: (a, b) => a.initialAllocation - b.initialAllocation,
  },
  {
    title: "Limit Value",
    dataIndex: "limitValue",
    key: "resourceName",
    render: (limitValue) => (
      <Tag color={limitValue === "Unlimited" ? "green" : "geekblue"} key={limitValue}>
        {limitValue}
      </Tag>
    ),
  },
];

const ResourceLimit = ({ data }) => {
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

export default ResourceLimit;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/instance/resourcelimit");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
