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
  const [validated, setValidated] = useState(true);
  const [profile, setProfile] = useState({...questions.fullstack})
  const [answers, setAnswers] = useState({
    questions:[],
    long_question: {question:profile.long_question, answer: ""},
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form.checkValidity())
    event.preventDefault();
    event.stopPropagation();
    
    if (!form.checkValidity()) {
      
    }
    alert("enviando form");
    setValidated(true);
  }

  const onChangeRadio = (selected, question) => {
    const tempAnswers = {...answers};
    const item = tempAnswers.questions.find(x => x.question === question)

    if(item)
      item.answer = selected
    else
      tempAnswers.questions.push({question:question, answer:selected})
    
    setAnswers({answers, ...tempAnswers});
    console.log(answers);
  }

  const onChangeText = (event) => {
    const tempAnswers = {...answers};
    tempAnswers.long_question.answer = event.target.value;
    
    setAnswers({answers, ...tempAnswers});
    console.log(answers);
  }

  return (
    <div className="p-3">
      <h4>Postula a este trabajo</h4>
    
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
        {profile.questions.map((question) => (
          <Row className="mb-3" key={question.id}>
            <Form.Group as={Col} md="4">
              <div className="question-title">{question.title} <span className="error">*</span></div>
                {question.alternatives.map((alternative) => (
                  <Form.Check
                    key={`${question.id}${alternative.id}`}
                    type='radio'
                    label={alternative.text}
                    name={question.title}
                    id={`disabled-default-radio`}
                    className="question-option"
                    onChange={(e) => onChangeRadio(e.target.value, question.title)}
                    value={alternative.text}
                    required
                  />
                ))}
              {!validated && <div className="error error-label">Hey! No te olvides de esto!</div>}
            </Form.Group>
          </Row>
        ))}
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <div className="question-title">{profile.long_question} <span className="error">*</span></div>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={answers.long_question.answer}
              onChange={onChangeText}
              required
            />
            {!validated && <div className="error error-label">Hey! No te olvides de esto!</div>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Button
          type="submit"
          className="peanut-button"
          >Enviar</Button>
        </Row>
      </Form> 
    </div>
  )
}