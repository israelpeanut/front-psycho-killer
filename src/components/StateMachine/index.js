import React from "react";
import { useRouter } from "next/router";
import { PersonalForm } from "../PersonalForm/PersonalForm";
import { QuestionsForm } from "../QuestionsForm/QuestionsForm";
import { ThankYouScreen } from "../QuestionsForm/ThankYouScreen";

export const StateMachine = () => {
  const router = useRouter();

  const { step = "form" } = router.query;
  console.log(step);

  const stateMachineStep = [
    {
      steep: 1,
      name: "form",
      nextStep: 2,
      component: (
        <PersonalForm
          onBackHandler={() => {
            console.log("onbackhandler PersonalForm");
            router.push("/vacante");
          }}
          onNextHandler={() => {
            console.log("onbackhandler PersonalForm");
            router.push("/postulacion/question", undefined, {
              shallow: true
            });
          }}
        />
      )
    },
    {
      steep: 2,
      name: "question",
      nextStep: 3,
      component: (
        <QuestionsForm
          onBackHandler={() => {
            console.log("onbackhandler QuestionsForm");
            router.push("/postulacion");
          }}
          onNextHandler={() => {
            console.log("onNextHandler QuestionsForm");
            router.push("/postulacion/exito", undefined, {
              shallow: true
            });
          }}
        />
      )
    },
    {
      steep: 3,
      name: "exito",
      nextStep: 4,
      component: (
        <ThankYouScreen
          onNextHandler={() => {
            console.log("onNextHandler ThankYouScreen");
            router.push("/", undefined, {
              shallow: true
            });
          }}
        />
      )
    }
  ];

  return (
    <>
      <div className="container container-fluid">
        {stateMachineStep.find(state => state.name === step).component}
      </div>
    </>
  );
};
