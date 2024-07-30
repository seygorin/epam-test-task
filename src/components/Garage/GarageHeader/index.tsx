import { Row, Col } from "antd";
import CatForm from "@components/Cat/CatForm";
import CatControls from "@components/Cat/CatControls";
import CatGenerate from "@components/Cat/CatGenerate";
import Title from "@components/common/Title";

import "./index.css";

function GarageHeader() {
  return (
    <>
      <Title text="Catage" />
      <Row className="garage-header">
        <Col>
          <CatForm />
        </Col>
        <Col flex={1}>
          <CatGenerate />
        </Col>
        <Col>
          <CatControls />
        </Col>
      </Row>
    </>
  );
}

export default GarageHeader;
