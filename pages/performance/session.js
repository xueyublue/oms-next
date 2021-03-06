import React, { useState, useEffect } from "react";
import { Table, Form, Button, Select, message, Tag } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Loading from "../../components/Loading";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 60,
    align: "center",
    render: (text) => <a style={{ color: "#1890FF" }}>{text}</a>,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Serial #",
    dataIndex: "serialNo",
    key: "serialNo",
    width: 80,
    sorter: (a, b) => a.serialNo - b.serialNo,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
    render: (status) => (
      <Tag
        color={status === "Active" ? "green" : "volcano"}
        icon={status === "Active" ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
        key={status}
      >
        {status}
      </Tag>
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 100,
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    width: 100,
  },
  {
    title: "OS User",
    dataIndex: "osUser",
    key: "osUser",
    width: 110,
  },
  {
    title: "Machine",
    dataIndex: "machine",
    key: "machine",
    width: 100,
  },
  {
    title: "Terminal",
    dataIndex: "terminal",
    key: "terminal",
    width: 100,
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
    width: 180,
  },
  {
    title: "Module",
    dataIndex: "module",
    key: "module",
    width: 150,
  },
  {
    title: "Process",
    dataIndex: "process",
    key: "process",
    width: 100,
    sorter: (a, b) => a.process - b.process,
  },
  {
    title: "Logon Time",
    dataIndex: "logonTime",
    key: "logonTime",
    width: 180,
  },
];

const getDistinctStatus = () => {
  return ["All", "Active", "Inactive"];
};

const getDistinctUserNames = (data) => {
  if (!data) return null;
  let usernames = [];
  data.map((row) => row.userName && usernames.push(row.userName));
  return ["All", ...new Set(usernames)];
};

const Sessions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const statusList = getDistinctStatus();
  const userNameList = getDistinctUserNames(data);
  const [status, setStatus] = useState("All");
  const [userName, setUserName] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}/sessions`);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;

  const filteredData = data
    .filter((row) => (userName === "All" ? true : row.userName === userName))
    .filter((row) => (status === "All" ? true : row.status === status));
  message.info(`${data.length} records found.`);

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
            type="primary"
            onClick={() => {
              setStatus("All");
              setUserName("All");
            }}
          >
            CLEAR
          </Button>
        </Form.Item>
      </Form>
      <Table
        style={{ marginTop: 10 }}
        columns={columns}
        dataSource={filteredData}
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
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Sessions;
