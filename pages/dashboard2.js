import Router from "next/router";
import { List, Card, Tag, Statistic } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import * as Constants from "../util/constants";

const Dashboard2 = () => {
  const data = [
    {
      content: (
        <Statistic
          title="Instance Status"
          value={"Running"}
          valueStyle={{ color: "#3f8600" }}
          prefix={<CheckCircleOutlined />}
        />
      ),
    },
    {
      content: (
        <Statistic
          title="SGA Occupancy"
          value={"45"}
          valueStyle={{ color: "#3f8600" }}
          prefix={<CheckCircleOutlined />}
          suffix={"%"}
        />
      ),
      handleClick: () => {
        Router.push(Constants.ROUTE_INSTANCE_SGA);
      },
    },
    {
      content: (
        <Statistic
          title="Session"
          valueStyle={{ color: "white" }}
          prefix={
            <div>
              <Tag icon={<CheckCircleOutlined />} color="success">
                57 Active
              </Tag>
              <Tag icon={<ClockCircleOutlined />} color="warning">
                13 Inactive
              </Tag>
            </div>
          }
        />
      ),
      handleClick: () => {
        Router.push(Constants.ROUTE_PERFORMANCE_SESSION);
      },
    },
    {
      content: (
        <Statistic
          title="Tablespace Occupancy"
          valueStyle={{ color: "white" }}
          prefix={
            <div>
              <Tag icon={<CheckCircleOutlined />} color="success">
                8 Normal
              </Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="error">
                2 High
              </Tag>
            </div>
          }
        />
      ),
      handleClick: () => {
        Router.push(Constants.ROUTE_SPACE_TABLESPACE);
      },
    },
    {
      content: (
        <Statistic
          title="Table Records"
          valueStyle={{ color: "white" }}
          prefix={
            <div>
              <Tag icon={<CheckCircleOutlined />} color="success">
                1574 Normal
              </Tag>
              <Tag icon={<ExclamationCircleOutlined />} color="error">
                36 High
              </Tag>
            </div>
          }
        />
      ),
      handleClick: () => {
        Router.push(Constants.ROUTE_SPACE_TABLE_RECORDS);
      },
    },
    {
      content: (
        <Statistic title="Alerts" value={4} valueStyle={{ color: "red" }} prefix={<ExclamationCircleOutlined />} />
      ),
    },
  ];

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 4,
        xl: 4,
        xxl: 6,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card onClick={item.handleClick}>{item.content}</Card>
        </List.Item>
      )}
    />
  );
};

export default Dashboard2;
