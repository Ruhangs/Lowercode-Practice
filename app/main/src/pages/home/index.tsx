import { Col, Row, Space, Typography } from "antd";
import { NotifyCard } from "./notify-card";
import { AppDashBoardTable } from "./apps";

const HomePage = () => {
  return (
    <div>
        <Row>
          <Col flex="auto">
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <Space size={0} direction="vertical">
                <Typography.Title level={3}>
                  早上好，欢迎来到 lowcode
                </Typography.Title>
                <Typography.Text type="secondary">
                  lowcode 拥有丰富的业务组件、模板，帮助你快速完成产品研发。
                </Typography.Text>
              </Space>
              <NotifyCard />
              <AppDashBoardTable />
            </Space>
          </Col>
          <Col flex="300px"></Col>
        </Row>
    </div>
  );
};

export default HomePage;
