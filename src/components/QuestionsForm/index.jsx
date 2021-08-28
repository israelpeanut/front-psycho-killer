import { useState } from "react";
import { 
         Form,
         Button,
         ButtonGroup,
         ToggleButton,
         Input,
         Row,
         Col
        } from "react-bootstrap";
import styles from '../../styles/Home.module.css'

export default function Questions({ }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };

    return (
      <div>
        <h1>Postula a este trabajo</h1>
      
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <h5>¿Tangananica o Tangananá?</h5>
            <label><input type="radio" id="html" name="fav_language" value="uno" /> Tangananica</label>
            <br />
            <label><input type="radio" id="html" name="fav_language" value="dos" /> Tangananá</label>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Row>
      </Form> 
    </div>
  )
}