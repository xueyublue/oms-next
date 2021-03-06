import React, { useState, useEffect } from "react";
import { Table, message, Progress } from "antd";
import { Pie } from "react-chartjs-2";
import { formatNumberWithCommas } from "../../util/util";
import Loading from "../../components/Loading";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 300,
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

const SgaConfigurations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://10.33.1.168:8099/wse/restapi/oms/instance/sgaconfig");
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;

  message.info(`${data.table.length} records found.`);

  return (
    <div>
      <div style={{ width: 800 }}>
        <Table
          columns={columns}
          dataSource={data.table}
          bordered
          size="small"
          pagination={{ pageSize: 15, position: ["none"] }}
        />
      </div>
      <div style={{ height: "500" }}>
        <Pie
          data={{
            labels: data.chart.name,
            datasets: [
              {
                data: data.chart.data,
                backgroundColor: data.chart.backgroundColor,
              },
            ],
          }}
          options={{
            title: { display: false, text: "SGA Configuration (" + data.maxSgaSize + "MB In Total)" },
            maintainAspectRatio: false,
            scales: {
              yAxes: [{ ticks: { display: false }, gridLines: { display: false } }],
            },
            legend: { position: "right" },
          }}
          height={300}
          width={600}
        />
      </div>
    </div>
  );
};

export default SgaConfigurations;
