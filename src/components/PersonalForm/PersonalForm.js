import React, { useState } from "react";
import { Button, Form, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { Header } from "./../Header";

export const PersonalForm = ({ onBackHandler, onNextHandler }) => {
  const [item, setItem] = useState({ cbkResidencia: undefined });

  const { cbkResidencia } = item;

  const handleChangeRadio = e => {
    e.persist();
    console.log(e.target.value);
    setItem(prevState => ({
      ...prevState,
      cbkResidencia: e.target.value
    }));
  };
  const schema = yup.object().shape({
    fullName: yup.string().required("Hey! Se te olvido esto!"),
    email: yup
      .string()
      .email("Hey! tu correo no es válido. ")
      .required("Hey! Se te olvido esto!"),
    phone: yup.string().required("Hey! No te olvides de esto! "),
    city: yup.string().required("Hey! No te olvides de esto! "),
    file: yup.mixed().required("¡Espera un poco! Esto falta"),
    nationality: yup.string().required("Hey! No te olvides de esto! ")
  });

  return (
    <div>
      <Header
        onClickHandler={() => {
          onBackHandler();
        }}
      />
      <div className="row p-3">
        <h4 className="">Postula a este trabajo</h4>
      </div>

      <div className="row p-3">
        <Formik
          validationSchema={schema}
          onSubmit={event => {
            if (!cbkResidencia) {
              setItem(prevState => ({
                ...prevState,
                cbkResidencia: ""
              }));
              return;
            }

            console.log("here", event);
            onNextHandler();
          }}
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            file: null,
            city: "",
            nationality: "",
            cbkResidencia: ""
          }}
        >
          {({ handleSubmit, handleChange, values, isValid, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                {/* inicio input */}
                <Form.Group
                  md="6"
                  className="mb-3"
                  controlId="validationFormik03"
                >
                  <Form.Label>
                    Nombre Completo <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="angel la niña de la flower"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* fin */}

                {/* inicio input */}
                <Form.Group
                  md="6"
                  className="mb-3"
                  controlId="validationFormik03"
                >
                  <Form.Label>
                    Correo <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="angelsevencolors@correo.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* fin */}
                {/* inicio input */}
                <Form.Group
                  md="6"
                  className="mb-3"
                  controlId="validationFormik03"
                >
                  <Form.Label>
                    Teléfono <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+56 9"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* fin */}

                <Form.Group className="position-relative mb-3">
                  <Form.Label>
                    Currículum / CV <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    className="custom-file-upload "
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* inicio input */}
                <Form.Group
                  md="6"
                  className="mb-3"
                  controlId="validationFormik03"
                >
                  <Form.Label>
                    Residencia (Ciudad) <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Temuco"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* fin */}

                {/* inicio input */}
                <Form.Group
                  md="6"
                  className="mb-3"
                  controlId="validationFormik03"
                >
                  <Form.Label>
                    Nacionalidad <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Chilena"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    isInvalid={!!errors.nationality}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.nationality}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* fin */}

                {/* inicio input */}
                <Form.Group md="6" className="mb-3" controlId="cbkResidencia">
                  <Form.Label>
                    ¿Tienes permiso para trabajar en Chile?*{" "}
                    <span className="textRed">*</span>
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    name="cbkPermision"
                    className="pb-2"
                    id={`default-radio`}
                    onChange={handleChangeRadio}
                    checked={cbkResidencia === "si"}
                    value="si"
                    feedback={errors.nationality}
                    label={`Si`}
                  />
                  <Form.Check
                    type="radio"
                    name="cbkPermision"
                    id={`default-radio1`}
                    label={`No`}
                    value="no"
                    onChange={handleChangeRadio}
                    checked={cbkResidencia === "no"}
                  />
                  {cbkResidencia === "" && (
                    <div className="alertRed">¡Espera un poco! Esto falta</div>
                  )}
                </Form.Group>
                {/* fin */}
              </Row>

              {/* boton siguiente */}
              <div className="d-flex justify-content-center">
                <Button type="submit" variant="dark" className="btn  btn-lg">
                  <div className="px-5">
                    <span className="btnPostulationForm">Siguiente </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                  </div>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
