import React from "react";
import { Table, Form, Button, Select, message, Tag } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    width: 200,
  },
  {
    title: "Table Name",
    dataIndex: "tableName",
    key: "tableName",
    width: 300,
  },
  {
    title: "Total Records",
    dataIndex: "totalRecords",
    key: "totalRecords",
    align: "right",
    width: 200,
    sorter: (a, b) => a.totalRecords - b.totalRecords,
    render: (totalRecords) => (
      <Tag color={totalRecords > 10000 ? "volcano" : "green"} key={totalRecords}>
        {totalRecords}
      </Tag>
    ),
  },
  {
    title: "Tablespace Name",
    dataIndex: "tablespace",
    key: "tablespace",
  },
];

const getDistinctOwners = (data) => {
  let owners = [];
  data.map((row) => row.owner && owners.push(row.owner));
  return ["All", ...new Set(owners)];
};

const TableRecords = ({ data }) => {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const ownerList = getDistinctOwners(data);
  const [owner, setOwner] = useState("All");
  const filteredData = data.filter((row) => (owner === "All" ? true : row.owner === owner));
  message.info(`${data.length} records found.`);

  return (
    <div>
      <Form form={form} layout={"inline"} size={"middle"}>
        <Form.Item label="Owner" style={{ width: 300 }}>
          <Select
            value={owner}
            onChange={(value) => {
              setOwner(value);
            }}
          >
            {ownerList.map((owner) => (
              <Select.Option value={owner} key={owner}>
                {owner}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            onClick={() => {
              setOwner("All");
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
        scroll={{ x: 1300 /*, y: 620 */ }}
      />
    </div>
  );
};

export default TableRecords;

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:8099/wse/restapi/oms/space/tablerecords");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
