import { Spin } from "antd";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", height: "100%" }}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
