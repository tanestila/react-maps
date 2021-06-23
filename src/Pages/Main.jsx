import {
  Button,
  Typography,
  Layout,
  Menu,
  Row,
  Col,
  Space,
  Card,
  Form,
  Input,
  InputNumber,
} from "antd";
import { NavLink } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import ScrollToTop from "../Components/ScrollToTop";
import { HeaderMain } from "../Components/MainComponents/Header";
import { FooterMain } from "../Components/MainComponents/Footer";
const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const Main = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <ScrollToTop />
      <HeaderMain />
      <Content>
        <section className="intro" id="intro">
          <Row justify="center">
            <Col>
              <Title>Interactive maps for your business</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Title level={3}>
                Integrate maps and geocoding in your websites and mobile apps{" "}
              </Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Button>learn more</Button>
            </Col>
          </Row>
        </section>
        <section className="main" id="features">
          <Row justify="center">
            <Col>
              <Title>Features</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Space>
              <div className="features">
                <Row justify="center">
                  <Col>
                    <DesktopOutlined className="icon" />
                  </Col>
                </Row>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, velit accusamus recusandae labore, expedita magnam
                  soluta maxime officiis error in temporibus vero quod. Nobis
                  expedita, quibusdam maxime pariatur iusto unde.
                </Paragraph>
              </div>
              <div className="features">
                <Row justify="center">
                  <Col>
                    <DesktopOutlined className="icon" />
                  </Col>
                </Row>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, velit accusamus recusandae labore, expedita magnam
                  soluta maxime officiis error in temporibus vero quod. Nobis
                  expedita, quibusdam maxime pariatur iusto unde.
                </Paragraph>
              </div>
              <div className="features">
                <Row justify="center">
                  <Col>
                    <DesktopOutlined className="icon" />
                  </Col>
                </Row>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, velit accusamus recusandae labore, expedita magnam
                  soluta maxime officiis error in temporibus vero quod. Nobis
                  expedita, quibusdam maxime pariatur iusto unde.
                </Paragraph>
              </div>
            </Space>
          </Row>
        </section>
        <section className="main" id="pricing">
          <Row justify="center">
            <Col>
              <Title>Pricing</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Space>
              <Card title="Free" style={{ width: 300 }}>
                <Paragraph>Bandwidth: 1GB</Paragraph>
                <Paragraph>Onlinespace : 50MB</Paragraph>
                <Paragraph>Support: No</Paragraph>
                <Paragraph>Domain: 1</Paragraph>
                <Paragraph>Hidden Fees: No</Paragraph>
                <Row justify="center">
                  <Col>
                    <Button>learn more</Button>
                  </Col>
                </Row>
              </Card>
              <Card title="Professional" style={{ width: 300 }}>
                <Paragraph>Bandwidth: 1GB</Paragraph>
                <Paragraph>Onlinespace : 50MB</Paragraph>
                <Paragraph>Support: No</Paragraph>
                <Paragraph>Domain: 1</Paragraph>
                <Paragraph>Hidden Fees: No</Paragraph>
                <Row justify="center">
                  <Col>
                    <Button>learn more</Button>
                  </Col>
                </Row>
              </Card>
              <Card title="Enterprise" style={{ width: 300 }}>
                <Paragraph>Bandwidth: 1GB</Paragraph>
                <Paragraph>Onlinespace : 50MB</Paragraph>
                <Paragraph>Support: No</Paragraph>
                <Paragraph>Domain: 1</Paragraph>
                <Paragraph>Hidden Fees: No</Paragraph>
                <Row justify="center">
                  <Col>
                    <Button>learn more</Button>
                  </Col>
                </Row>
              </Card>
              <Card title="Tailor-made" style={{ width: 300 }}>
                <Paragraph>Bandwidth: 1GB</Paragraph>
                <Paragraph>Onlinespace : 50MB</Paragraph>
                <Paragraph>Support: No</Paragraph>
                <Paragraph>Domain: 1</Paragraph>
                <Paragraph>Hidden Fees: No</Paragraph>
                <Row justify="center">
                  <Col>
                    <Button>learn more</Button>
                  </Col>
                </Row>
              </Card>
            </Space>
          </Row>
        </section>
        <section className="main" id="contact">
          <Row justify="center">
            <Col>
              <Title>Contact us</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                className="main"
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </section>
      </Content>
      <FooterMain />
    </>
  );
};
