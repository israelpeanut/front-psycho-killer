import React from "react";
import { Button, Form, Row, InputGroup, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { ItemList } from "./ItemList";
import {
  listItemAwaitForYou,
  morePointIf,
  someBenefits
} from "./../../utils/generalText";

import { getGift } from "../../helpers/createPostulation";

export const Vacant = () => {
  const router = useRouter();

  const onClickHandler = async () => {
    router.push("/postulacion/form");
  };
  return (
    <>
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#">
            <img
              src="https://res.cloudinary.com/dorrola/image/upload/v1630152665/Logo_Vectorial_khatse.svg"
              className="d-inline-block align-top ms-3"
              alt="Responsive image"
              width="87"
              height="32"
            />{" "}
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#">
              <img
                src="https://res.cloudinary.com/dorrola/image/upload/v1630155103/VectorMenu_v2k8ow.png"
                className="img-responsive d-flex align-items-end flex-column"
                alt="Responsive image"
                width="24"
                height="24"
              />{" "}
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container container-fluid">
        <div className="m-3">
          {/* <div className="d-flex flex-row menuHeaderVacant">
          <img
            src="https://res.cloudinary.com/dorrola/image/upload/v1630152665/Logo_Vectorial_khatse.svg"
            class="img-responsive"
            alt="Responsive image"
            width="87"
            height"32"=
          />
        </div> */}

          <div className="row">
            <span className="titleEspecialVacant">Developer Semi Senior</span>
          </div>
          <div className="row">
            <span className="subTitleVacant">Santiago • Semi Presencial</span>
          </div>
          <div className="row mb-5">
            <span className="titleDownVacant">$1.400.000 - $1.600.000</span>
          </div>
          <div className="row mb-5">
            <span className="text-parrf-vacant">
              En PeanutHub somos una consultora orientada a la transformación
              digital, con presencia en grandes corporaciones. Usamos como
              bandera, nuestra cultura ágil y la entrega tecnológica de alto
              nivel de forma simple, rápida y constante. Trabajamos en pos de la
              evolución profesional, conscientes de que cada nuevo reto es una
              oportunidad de crecimiento.
            </span>
          </div>
          <div className="row mb-3">
            <span className="sub-title-parrf-vacant">¿Qué haras?</span>
          </div>
          <div className="row mb-5">
            <span className="text-parrf-vacant">
              Como Fullstack Developer deberás ser capaz de integrarte y
              adaptarte a un equipo multidisciplinario en un entorno ágil, en
              algunos de nuestros importantes clientes.
              <br /> <br />
              El equipo que integrarás estará compuesto por distintos roles,
              como UX, Scrum Masters, QA y otros developers, de los cuales están
              a cargo de todo el ciclo de vida de un producto.
              <br /> <br />
              Dentro de este equipo debes ser capaz de desarrollar tanto
              Frontend (SPA en React) como Backend con arquitecturas de
              microservicios.
              <br /> <br />
              Deberás, además aprender a emplear los pipelines implementados en
              cada cliente, que te permitirán integrar tus desarrollos con el
              resto del equipo.
            </span>
          </div>

          <div className="row mb-3">
            <span className="sub-title-parrf-vacant">
              ¿Qué esperamos de ti?
            </span>
          </div>
          <div className="row mb-5">
            {listItemAwaitForYou.map((description, id) => (
              <ItemList
                id={"listItemAwaitForYou-" + id}
                key={id}
                description={description}
              />
            ))}
          </div>

          <div className="row mb-2">
            <span className="sub-title-parrf-vacant">
              Te da más puntos si...
            </span>
          </div>

          <div className="row mb-2">
            {morePointIf.map((description, id) => (
              <ItemList id={"morePointIf-" + id} description={description} key={id} />
            ))}
          </div>

          <div className="row mb-5">
            <span className="sub-title-parrf-vacant">Algunos Beneficios</span>
          </div>

          <div className="row mb-2">
            {someBenefits.map((description, id) => (
              <ItemList id={"someBenefits-" + id} description={description} key={id} />
            ))}
          </div>

          <div className="d-flex justify-content-center">
            <Button
              type="button"
              onClick={() => onClickHandler()}
              variant="dark"
              className="btn  btn-lg"
            >
              <div className="px-5">
                <span className="btnPostulationForm">Postularme </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
