import { useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
import questions from "../../data/questions.json";
import { Header } from "../Header/index.js";
import { updateStepChallenger } from "../../helpers/updateStepChallenger.js";
import { useRouter } from "next/router";

const missingFieldError = "Hey! No te olvides de esto!";

export const QuestionsForm = ({ onBackHandler, onNextHandler }) => {
  const [validated, setValidated] = useState(true);
  const [sent, setSent] = useState(false);
  const [profile, setProfile] = useState({ ...questions.fullstack });
  const [answers, setAnswers] = useState({
    questions: [],
    long_question: { question: profile.long_question, answer: "" }
  });

  const router = useRouter();
  const { id: vacantId } = router.query;

  const handleSubmit = event => {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    event.preventDefault();
    event.stopPropagation();

    setSent(true);

    if (!form.checkValidity()) {
    } else {
      console.log(answers);
    }

    setValidated(true);

    const body = {
      id: vacantId
    };

    updateStepChallenger(body);

    onNextHandler();
  };

  const onChangeRadio = (selected, question) => {
    const tempAnswers = { ...answers };
    const item = findAnswer(tempAnswers, question);

    if (item) item.answer = selected;
    else
      tempAnswers.questions.push({
        question: question,
        answer: selected
      });

    setAnswers({ ...answers, ...tempAnswers });
  };

  const findAnswer = (origin, question) =>
    origin.questions.find(x => x.question === question);

  const onChangeText = event => {
    const tempAnswers = { ...answers };
    tempAnswers.long_question.answer = event.target.value;

    setAnswers({ answers, ...tempAnswers });
  };

  return (
    <>
      <Header
        onClickHandler={() => {
          onBackHandler();
        }}
      />
      <div className="p-3">
        <h4 className="questions-title">Postula a este trabajo</h4>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="needs-validation"
        >
          {profile.questions.map(question => (
            <Row className="mb-3 alternatives-question" key={question.id}>
              <Form.Group as={Col} md="4">
                <div className="question-title">
                  {question.title} <span className="error">*</span>
                </div>
                {question.alternatives.map(alternative => (
                  <Form.Check
                    key={`${question.id}${alternative.id}`}
                    type="radio"
                    label={alternative.text}
                    name={question.title}
                    className="question-option"
                    onChange={e =>
                      onChangeRadio(e.target.value, question.title)
                    }
                    value={alternative.text}
                    required
                  />
                ))}
                {sent && findAnswer(answers, question.title) === undefined && (
                  <div className="error error-label">{missingFieldError}</div>
                )}
              </Form.Group>
            </Row>
          ))}
          <Row className="mb-3 long-question">
            <Form.Group as={Col} md="4">
              <div className="question-title">
                {profile.long_question} <span className="error">*</span>
              </div>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={answers.long_question.answer}
                onChange={onChangeText}
                required
              />
              {sent && !answers.long_question.answer && (
                <div className="error error-label">{missingFieldError}</div>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Button type="submit" className="peanut-button btn-dark">
              Enviar
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
};
