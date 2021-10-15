import { List, Card, Tag } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const data = [
    {
      title: "Instance Status",
      content: (
        <Tag icon={<CheckCircleOutlined />} color="success">
          Online
        </Tag>
      ),
    },
    {
      title: "SGA Occupancy",
      content: (
        <Tag icon={<CheckCircleOutlined />} color="success">
          45%
        </Tag>
      ),
    },
    {
      title: "Session",
      content: (
        <div>
          <Tag icon={<CheckCircleOutlined />} color="success">
            57 Active
          </Tag>
          <Tag icon={<ClockCircleOutlined />} color="warning">
            13 Inactive
          </Tag>
        </div>
      ),
    },
    {
      title: "Tablespace Occupancy",
      content: (
        <div>
          <Tag icon={<CheckCircleOutlined />} color="success">
            8 Normal
          </Tag>
          <Tag icon={<ExclamationCircleOutlined />} color="error">
            2 High
          </Tag>
        </div>
      ),
    },
    {
      title: "Table Records",
      content: (
        <div>
          <Tag icon={<CheckCircleOutlined />} color="success">
            1574 Normal
          </Tag>
          <Tag icon={<ExclamationCircleOutlined />} color="error">
            36 High
          </Tag>
        </div>
      ),
    },
    {
      title: "Alerts",
      content: (
        <Tag icon={<ExclamationCircleOutlined />} color="error">
          4 Alerts
        </Tag>
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
          <Card title={item.title}>{item.content}</Card>
        </List.Item>
      )}
    />
  );
};

export default Dashboard;
