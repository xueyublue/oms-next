import React from "react";
import { Table, Form, Progress, message, Tag } from "antd";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { formatNumberWithCommas } from "../../util/util";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 120,
    sorter: (a, b) => a.name > b.name,
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "path",
    width: 200,
    sorter: (a, b) => a.path > b.path,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 80,
    render: (status) => (
      <Tag
        color={status === "Online" ? "green" : "volcano"}
        icon={status === "Online" ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
        key={status}
      >
        {status}
      </Tag>
    ),
  },
  {
    title: "Size (MB)",
    dataIndex: "size",
    key: "size",
    width: 100,
    align: "right",
    render: (value) => formatNumberWithCommas(value),
    sorter: (a, b) => a.size - b.size,
  },
  {
    title: "Free Size (MB) ",
    dataIndex: "freeSize",
    key: "freeSize",
    width: 120,
    align: "right",
    render: (value) => formatNumberWithCommas(value),
    sorter: (a, b) => a.freeSize - b.freeSize,
  },
  {
    title: "Occupancy",
    dataIndex: "occupancy",
    key: "occupancy",
    width: 140,
    render: (text) => (
      <Progress
        percent={text}
        status={text >= 80 ? "exception" : "normal"}
        strokeLinecap="square"
        format={(percent) => `${percent}%`}
      />
    ),
    sorter: (a, b) => a.occupancy - b.occupancy,
  },
  {
    title: "Auto Extend?",
    dataIndex: "autoExtensible",
    key: "autoExtensible",
    width: 100,
    render: (autoExtensible) => (
      <Tag color={autoExtensible === "Yes" ? "green" : "volcano"} key={autoExtensible}>
        {autoExtensible}
      </Tag>
    ),
  },
  {
    title: "Next Extend (MB)",
    dataIndex: "nextExtend",
    key: "nextExtend",
    width: 140,
    align: "right",
    render: (value) => formatNumberWithCommas(value),
  },
  {
    title: "Contents",
    dataIndex: "contents",
    key: "contents",
    width: 100,
  },
  {
    title: "Allocation Type",
    dataIndex: "allocationType",
    key: "allocationType",
    width: 120,
  },
];

const Tablespace = ({ data }) => {
  const [form] = Form.useForm();
  message.info(`${data.length} records found.`);

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
  const response = await fetch("http://localhost:8099/wse/restapi/oms/space/tablespace");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
