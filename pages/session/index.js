import React from "react";
import { Table, Form, Input, Button, Select } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 60,
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
    width: 110,
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
    width: 150,
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

const getDistinctStatus = () => {
  return ["All", "Active", "Inactive"];
};

const getDistinctUserNames = (data) => {
  let usernames = [];
  data.map((row) => row.userName && usernames.push(row.userName));
  return ["All", ...new Set(usernames)];
};

const Sessions = ({ data }) => {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const statusList = getDistinctStatus();
  const userNameList = getDistinctUserNames(data);
  const [status, setStatus] = useState("All");
  const [userName, setUserName] = useState("All");
  const filteredData = data
    .filter((row) => (userName === "All" ? true : row.userName === userName))
    .filter((row) => (status === "All" ? true : row.status === status));

  return (
    <div>
      <Form form={form} layout={"inline"} size={"middle"}>
        <Form.Item label="Status">
          <Select
            value={status}
            onChange={(value) => {
              setStatus(value);
            }}
            style={{ width: 100 }}
          >
            {statusList.map((status) => (
              <Select.Option value={status} key={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="User Name" style={{ width: 200 }}>
          <Select
            value={userName}
            onChange={(value) => {
              setUserName(value);
            }}
          >
            {userNameList.map((username) => (
              <Select.Option value={username} key={username}>
                {username}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            onClick={() => {
              setStatus("All");
              setUserName("All");
            }}
          >
            Clear
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={filteredData}
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

export default Sessions;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/sessions");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
