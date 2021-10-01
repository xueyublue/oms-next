import React from "react";

import { Table, message, Progress } from "antd";
import { formatNumberWithCommas } from "../../util/util";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 400,
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
    width: 180,
    align: "right",
    render: (value) => formatNumberWithCommas(value),
    sorter: (a, b) => a.size - b.size,
  },
  {
    title: "Percentage%",
    dataIndex: "percentage",
    key: "percentage",
    render: (percentage) => (
      <div>
        <Progress
          percent={percentage}
          status={percentage >= 80 ? "exception" : "normal"}
          strokeLinecap="square"
          format={(percentage) => `${percentage}`}
        />
      </div>
    ),
    sorter: (a, b) => a.percentage - b.percentage,
  },
];

const SgaConfigurations = ({ data }) => {
  message.info(`${data.table.length} records found.`);

  return (
    <div>
      <Table
        title={() => <h3>SGA Configuration</h3>}
        columns={columns}
        dataSource={data.table}
        bordered
        size="small"
        pagination={{ pageSize: 15, position: ["none"] }}
      />
    </div>
  );
};

export default SgaConfigurations;

export async function getServerSideProps(context) {
  const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/instance/sgaconfig");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
