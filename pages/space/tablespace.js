import React from "react";
import { Table, Form, Progress } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "tablespace",
    width: 120,
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "tablespace",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "tablespace",
    width: 80,
  },
  {
    title: "Size (MB)",
    dataIndex: "size",
    key: "tablespace",
    width: 100,
    align: "right",
  },
  {
    title: "Free Size (MB)",
    dataIndex: "freeSize",
    key: "tablespace",
    width: 120,
    align: "right",
  },
  {
    title: "Occupancy",
    dataIndex: "occupancy",
    key: "tablespace",
    width: 140,
    render: (text) => (
      <Progress
        percent={text}
        status={text >= 80 ? "exception" : "normal"}
        strokeLinecap="square"
        format={(percent) => `${percent}%`}
      />
    ),
  },
  {
    title: "Auto Extend",
    dataIndex: "autoExtensible",
    key: "tablespace",
    width: 100,
  },
  {
    title: "Next Extend (MB)",
    dataIndex: "nextExtend",
    key: "tablespace",
    width: 140,
    align: "right",
  },
  {
    title: "Contents",
    dataIndex: "contents",
    key: "tablespace",
    width: 100,
  },
  {
    title: "Allocation Type",
    dataIndex: "allocationType",
    key: "tablespace",
    width: 120,
  },
];

const Tablespace = ({ data }) => {
  const [form] = Form.useForm();

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="small"
        pagination={{ pageSize: 15, position: ["none"] }}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Tablespace;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/space/tablespace");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
