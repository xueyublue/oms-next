import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Session ID",
    dataIndex: "id",
    key: "id",
    width: 100,
    align: "center",
    render: (text) => <a style={{ color: "#1890FF" }}>{text}</a>,
  },
  {
    title: "Serial #",
    dataIndex: "serialNo",
    key: "id",
    width: 80,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "id",
    width: 100,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "id",
    width: 100,
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "id",
    width: 100,
  },
  {
    title: "OS User",
    dataIndex: "osUser",
    key: "id",
    width: 100,
  },
  {
    title: "Machine",
    dataIndex: "machine",
    key: "id",
    width: 100,
  },
  {
    title: "Terminal",
    dataIndex: "terminal",
    key: "id",
    width: 100,
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "id",
    width: 180,
  },
  {
    title: "Module",
    dataIndex: "module",
    key: "id",
    width: 100,
  },
  {
    title: "Process",
    dataIndex: "process",
    key: "id",
    width: 100,
  },
  {
    title: "Logon Time",
    dataIndex: "logonTime",
    key: "id",
    width: 180,
  },
];

const Sessions = ({ data }) => {
  return (
    <div>
      <Table
        title={() => <h3>Session</h3>}
        columns={columns}
        dataSource={data}
        bordered
        size="small"
        pagination={{ pageSize: 15, position: ["topLeft"] }}
        scroll={{ x: 1300, y: 600 }}
      />
    </div>
  );
};

export default Sessions;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/sessions");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
