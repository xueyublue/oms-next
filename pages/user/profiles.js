import React from "react";
import { Table, Form, Button, Select, message } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Profile",
    dataIndex: "profile",
    key: "resourceName",
    width: 160,
  },
  {
    title: "Resource Name",
    dataIndex: "resourceName",
    key: "resourceName",
    width: 300,
  },
  {
    title: "Resource Type",
    dataIndex: "resourceType",
    key: "resourceName",
    width: 140,
  },
  {
    title: "Limit",
    dataIndex: "limit",
    key: "resourceName",
  },
];

const getDistinctProfiles = (data) => {
  let profiles = [];
  data.map((row) => row.profile && profiles.push(row.profile));
  return ["All", ...new Set(profiles)];
};

const Profiles = ({ data }) => {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const profileList = getDistinctProfiles(data);
  const [profile, setProfile] = useState("All");
  const filteredData = data.filter((row) => (profile === "All" ? true : row.profile === profile));
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Form form={form} layout={"inline"} size={"middle"}>
        <Form.Item label="Profile" style={{ width: 240 }}>
          <Select
            value={profile}
            onChange={(value) => {
              setProfile(value);
            }}
          >
            {profileList.map((profile) => (
              <Select.Option value={profile} key={profile}>
                {profile}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            onClick={() => {
              setProfile("All");
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

export default Profiles;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/user/profiles");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
