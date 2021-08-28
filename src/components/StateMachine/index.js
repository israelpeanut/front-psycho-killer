import React from "react";
import { PersonalForm } from "../PersonalForm/PersonalForm";
import { QuestionsForm } from "../QuestionsForm/QuestionsForm";

export const StateMachine = () => {
  const stateMachineStep = [
    {
      steep: 1,
      nextStep: 2,
      component: <PersonalForm />
    },
    {
      steep: 1,
      nextStep: 2,
      component: <QuestionsForm />
    }
  ];

  return (
    <>
      <PersonalForm />
    </>
  );
};
