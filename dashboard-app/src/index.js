import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import { Row, Col, Card, Layout, Spin } from "antd";

import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from "bizcharts";

const renderChart = resultSet => (
  <Chart height={400} data={resultSet.chartPivot()} forceFit>
    <Coord type="theta" radius={0.75} />
    <Axis name="Zips.count" />
    <Legend position="bottom" name="category" />
    <Tooltip showTitle={false} />
    <Geom type="intervalStack" position="Zips.count" color="x" />
  </Chart>
);

const cubejsApi = cubejs(
  // "f57d130c2da97a0eaa6cc3443d7c7c06b75d73c3debf9681adedc5328ce3d4f8977e4567f25d7a1888b7f2606654613615c730d06dd38ff71a752ea78428b8c7",
  // CUBEJS_API_SECRET,
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODg5MzQyOTYsImV4cCI6MTYwNDQ4NjI5Nn0.RVdHlpfubXDgwG1FRYbUm-UDLVBjnb-HSVTK5bEy-ZU",
  "abc",
  { apiUrl: "http://localhost:4000/cubejs-api/v1" }
);

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <Layout>
    <Header>
      <h2 style={{ color: "#fff" }}>MongoDB Dashboard</h2>
    </Header>
    <Content style={{ padding: "25px", margin: "25px" }}>
      <Row type="flex" justify="space-around" align="top" gutter={24}>
        <Col span={24} lg={12}>
          <Card title="Zip count by state" style={{ marginBottom: "24px" }}>
            <QueryRenderer
              query={{ measures: ["Zips.count"], dimensions: ["Zips.state"] }}
              cubejsApi={cubejsApi}
              render={({ resultSet, error }) =>
               (resultSet && renderChart(resultSet)) ||
(error && error.toString()) || <Spin />
              }
              />
          </Card>
        </Col>
      </Row>
    </Content>
  </Layout>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
