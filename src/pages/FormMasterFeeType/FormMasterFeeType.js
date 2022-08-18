import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { Button, Card, Col, Form as FormBootstrap, Row } from "react-bootstrap";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AdvanceSearchCard from "components/AdvanceSearchCard";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const MasterFeeScheme = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too Short!")
    .max(256, "Too Long!")
    .required("Fee Type Name is required."),
  description: Yup.string().min(1, "Too Short!").max(4000, "Too Long!"),
  code: Yup.number()
    .moreThan(0)
    .lessThan(37)
    .required("Fee Type Code is required.")
});

const MasterFeeType = () => {
  const history = useHistory();

  const { type, id } = useParams();
  const [formValue, setFormValue] = useState({
    name: "",
    description: "",
    code: ""
  });
  const breadcrumb = [
    { link: "/master-type", title: "Master Data Management" },
    { link: "/master-type", title: "Fee Type" },
    { link: "/master-type", title: "Create Fee Type" }
  ];

  // GET VALUE
  useEffect(() => {
    if (type) {
      axios
        .get(`https://62fcf7f26e617f88dea23afe.mockapi.io/api/fee-type/${id}`)
        .then((res) => {
          //Storing users detail in state array object
          const data = res.data;
          setFormValue((prev) => ({
            name: data.name,
            description: data.description,
            code: data.code
          }));
        });
    }
  }, []);

  const submitData = (values) => {
    if (type && type === "edit") {
      axios
        .put(
          `https://62fcf7f26e617f88dea23afe.mockapi.io/api/fee-type/${id}`,
          values
        )
        .then((res) => {
          //Storing users detail in state array object
          history.push("/");
        });
    } else {
      axios
        .post(
          `https://62fcf7f26e617f88dea23afe.mockapi.io/api/fee-type`,
          values
        )
        .then((res) => {
          //Storing users detail in state array object
          history.push("/");
        });
    }
  };

  return (
    <Layout breadcrumb={breadcrumb} title="Create Fee Type">
      <Card>
        <Card.Body>
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={MasterFeeScheme}
            onSubmit={(values) => {
              submitData(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Row>
                  <Col>
                    <FormBootstrap.Group
                      as={Row}
                      className="mb-2"
                      controlId="fee-type-name"
                    >
                      <FormBootstrap.Label column sm={2}>
                        Fee Type Name
                      </FormBootstrap.Label>
                      <Col sm={10}>
                        <Field
                          name="name"
                          className={`form-control ${
                            errors.name && touched.name && "is-invalid"
                          }`}
                          placeholder="Fee Type Name"
                        />
                        {errors.name && touched.name ? (
                          <FormBootstrap.Control.Feedback
                            type="invalid"
                            className="font-weight-bold"
                          >
                            {errors.name}
                          </FormBootstrap.Control.Feedback>
                        ) : null}
                      </Col>
                    </FormBootstrap.Group>
                    <FormBootstrap.Group
                      as={Row}
                      className="mb-2"
                      controlId="description"
                    >
                      <FormBootstrap.Label column sm={2}>
                        Description
                      </FormBootstrap.Label>
                      <Col sm={10}>
                        <Field
                          as="textarea"
                          name="description"
                          className={`form-control ${
                            errors.description &&
                            touched.description &&
                            "is-invalid"
                          }`}
                          placeholder="Description"
                        />
                        {errors.description && touched.description ? (
                          <FormBootstrap.Control.Feedback
                            type="invalid"
                            className="font-weight-bold"
                          >
                            {errors.description}
                          </FormBootstrap.Control.Feedback>
                        ) : null}
                      </Col>
                    </FormBootstrap.Group>
                  </Col>
                  <Col>
                    <AdvanceSearchCard>
                      <FormBootstrap.Group
                        as={Row}
                        className="mb-2"
                        controlId="fee-type-code"
                      >
                        <FormBootstrap.Label column sm={2}>
                          Fee Type Code
                        </FormBootstrap.Label>
                        <Col sm={10}>
                          <Field
                            name="code"
                            className={`form-control ${
                              errors.code && touched.code && "is-invalid"
                            }`}
                            placeholder="Code"
                          />
                          {errors.code && touched.code ? (
                            <FormBootstrap.Control.Feedback
                              type="invalid"
                              className="font-weight-bold"
                            >
                              {errors.code}
                            </FormBootstrap.Control.Feedback>
                          ) : null}
                        </Col>
                      </FormBootstrap.Group>
                    </AdvanceSearchCard>
                  </Col>
                </Row>
                {type !== "detail" && (
                  <Button variant="success" className="mr-2" type="submit">
                    Save
                  </Button>
                )}
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  {type !== "detail" ? "Cancel" : "Back"}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default MasterFeeType;
