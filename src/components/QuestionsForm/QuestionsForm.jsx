import { useState } from "react";
import { 
         Form,
         FormControl,
         Button,
         Row,
         Col
        } from "react-bootstrap";
import questions from '../../data/questions.json';

export const QuestionsForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <div className="p-3">
      <h4>Postula a este trabajo</h4>
    
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <div className="question-title">¿Tangananica o Tangananá? <span className="error">*</span></div>
            <Form.Check
              type='radio'
              label={`radio 1`}
              name='pregunta1'
              id={`disabled-default-radio`}
              className="question-option"
              required
            />
            <Form.Check
              type='radio'
              label={`radio 2`}
              name='pregunta1'
              id={`disabled-default-radio`}
              required
            />
            <div className="error error-label">Hey! No te olvides de esto!</div>
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <p>¿Qué impacto crees que tiene la tecnología en el mundo?</p>
            <FormControl as="textarea" aria-label="With textarea" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Button
          type="submit"
          disabled={!validated}
          className="peanut-button"
          >Enviar</Button>
        </Row>
      </Form> 
    </div>
  )
}