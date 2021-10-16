import React from "react";
import { Table, Form, Button, Select, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    width: 300,
  },
  {
    title: "Privilege",
    dataIndex: "privilege",
    key: "privilege",
    width: 400,
  },
  {
    title: "Admin Option",
    dataIndex: "adminOption",
    key: "adminOption",
    render: (adminOption) => (
      <Tag color={adminOption === "No" ? "green" : "volcano"} key={adminOption}>
        {adminOption}
      </Tag>
    ),
  },
];

const getDistinctUserNames = (data) => {
  let userNameList = [];
  data.map((row) => row.userName && userNameList.push(row.userName));
  return ["All", ...new Set(userNameList)];
};

const UserPrivileges = ({ data }) => {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const userNameList = getDistinctUserNames(data);
  const [userName, setUserName] = useState("All");
  const filteredData = data.filter((row) => (userName === "All" ? true : row.userName === userName));
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Form form={form} layout={"inline"} size={"middle"}>
        <Form.Item label="User Name" style={{ width: 240 }}>
          <Select
            value={userName}
            onChange={(value) => {
              setUserName(value);
            }}
          >
            {userNameList.map((userName) => (
              <Select.Option value={userName} key={userName}>
                {userName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
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
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default UserPrivileges;

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.API_ROOT_URL}/user/userprivileges`);
  const data = await response.json();
  return {
    props: { data: data },
  };
}
