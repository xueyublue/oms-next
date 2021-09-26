import React from "react";
import { Table, Form, Button, Select, message, Tag } from "antd";
import { useState } from "react";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userId",
    width: 200,
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
    width: 120,
  },
  {
    title: "Status",
    dataIndex: "accountStatus",
    key: "userId",
    width: 140,
    render: (status) => (
      <Tag
        color={status === "OPEN" ? "green" : "volcano"}
        icon={status === "OPEN" ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
        key={status}
      >
        {status}
      </Tag>
    ),
  },
  {
    title: "Profile",
    dataIndex: "profile",
    key: "userId",
    width: 100,
  },
  {
    title: "Default Tablespace",
    dataIndex: "defaultTablespace",
    key: "userId",
    width: 150,
  },
  {
    title: "Temp Tablespace",
    dataIndex: "temporaryTablespace",
    key: "userId",
    width: 150,
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "userId",
    width: 170,
  },
  {
    title: "Expiry Date",
    dataIndex: "expiryDate",
    key: "userId",
    width: 170,
  },
  {
    title: "Lock Date",
    dataIndex: "lockDate",
    key: "userId",
    width: 170,
  },
  {
    title: "Last Login Date",
    dataIndex: "lastLogin",
    key: "userId",
  },
];

const getDistinctStatus = (data) => {
  let statusList = [];
  data.map((row) => row.accountStatus && statusList.push(row.accountStatus));
  return ["All", ...new Set(statusList)];
};

const Users = ({ data }) => {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const statusList = getDistinctStatus(data);
  const [status, setStatus] = useState("All");
  const filteredData = data.filter((row) => (status === "All" ? true : row.accountStatus === status));
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Form form={form} layout={"inline"} size={"middle"}>
        <Form.Item label="Status" style={{ width: 240 }}>
          <Select
            value={status}
            onChange={(value) => {
              setStatus(value);
            }}
          >
            {statusList.map((status) => (
              <Select.Option value={status} key={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            onClick={() => {
              setStatus("All");
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
        scroll={{ x: 1640 }}
      />
    </div>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/user/users");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
