import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { Button, Col, Form, Row } from "react-bootstrap";
import Datatables from "components/Datatables";
import axios from "axios";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import AdvanceSearchCard from "components/AdvanceSearchCard/AdvanceSearchCard";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PrintIcon from "@mui/icons-material/Print";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useHistory } from "react-router-dom";

const MasterFeeType = () => {
  const history = useHistory();
  const [isAdvanceSearch, setIsAdvanceSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const breadcrumb = [
    { link: "/master-type", title: "Master Data Management" },
    { link: "/master-type", title: "Fee Type" }
  ];

  const initData = () => {
    axios
      .get("https://62fcf7f26e617f88dea23afe.mockapi.io/api/fee-type")
      .then((res) => {
        //Storing users detail in state array object
        setData(res.data);
      });
  };

  useEffect(() => {
    initData();
  }, []);

  const headerTable = [
    {
      label: "Fee Type Code",
      field: "code"
    },
    {
      label: "Name",
      field: "name"
    },
    {
      label: "Description",
      field: "description"
    },
    {
      label: "Status",
      field: "status",
      render: ({ data, row, object }) => {
        if (data) {
          return "Active";
        } else {
          return "Inactive";
        }
      }
    },
    {
      label: "Action",
      field: "id",
      render: ({ data, row, object }) => {
        return (
          <span>
            <span
              className="btn-icon"
              onClick={() => {
                history.push(`/${data}/edit`);
              }}
            >
              <EditIcon />
            </span>
            <span
              className="btn-icon"
              onClick={() => {
                history.push(`/${data}/detail`);
              }}
            >
              <VisibilityIcon />
            </span>
            <span className="btn-icon" onClick={() => deleteData(data)}>
              <DeleteIcon />
            </span>
          </span>
        );
      }
    }
  ];

  const deleteData = (id) => {
    axios
      .delete(`https://62fcf7f26e617f88dea23afe.mockapi.io/api/fee-type/${id}`)
      .then((res) => {
        initData();
      });
  };
  return (
    <Layout breadcrumb={breadcrumb} title="Fee Type">
      <Row className="mb-2">
        <Col>
          <Row>
            <Col xs={3}>
              <Form.Control
                placeholder="Search"
                size="sm"
                maxLength={256}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
            </Col>
            <Col>
              <span
                className="align-middle font-weight-bold cursor-pointer"
                onClick={() => setIsAdvanceSearch(!isAdvanceSearch)}
              >
                Advance Options{" "}
                {isAdvanceSearch ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardDoubleArrowDownIcon />
                )}
              </span>
            </Col>
          </Row>
        </Col>
        <Col className="text-right">
          <Button size="sm" variant="secondary">
            <FileDownloadIcon />
          </Button>{" "}
          <Button size="sm" variant="secondary">
            <PrintIcon />
          </Button>{" "}
          <Button
            size="sm"
            variant="primary"
            onClick={() => history.push("/add")}
          >
            <NoteAddIcon /> Create New
          </Button>{" "}
        </Col>
      </Row>
      {isAdvanceSearch && (
        <Row className="mb-3">
          <Col>
            <AdvanceSearchCard>
              <Form.Group controlId="status.ControlSelect1">
                <Form.Label className="font-weight-bold">Status</Form.Label>
                <Form.Control size="sm" as="select" className="w-auto">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Form.Control>
              </Form.Group>
            </AdvanceSearchCard>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Datatables data={data} header={headerTable} />
        </Col>
      </Row>
    </Layout>
  );
};

export default MasterFeeType;
