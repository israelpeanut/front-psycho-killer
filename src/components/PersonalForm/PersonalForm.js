import React from "react";

export const PersonalForm = () => {
  return (
    <div>
      <div className="container container-fluid">
        <div class="row p-3"> menu</div>
        <div className="row p-3">
          <h4 className="">Postula a este trabajo</h4>
        </div>
        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Nombre Completo *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Hey! Se te olvido esto!
            </small>
          </div>
        </div>
        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Correo *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Hey! tu correo no es válido.
            </small>
          </div>
        </div>
        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Teléfono *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Hey! No te olvides de esto!
            </small>
          </div>
        </div>
        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Currículum / CV *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              ¡Espera un poco! Esto falta
            </small>
          </div>
        </div>
        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Residencia (Ciudad) *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Hey! No te olvides de esto!
            </small>
          </div>
        </div>

        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              Nacionalidad *
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Hey! No te olvides de esto!
            </small>
          </div>
        </div>

        <div className="row p-3">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="pb-2">
              ¿Tienes permiso para trabajar en Chile?*
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <small id="emailHelp" className="form-text text-muted">
              Hey! No te olvides de esto!
            </small>
          </div>
        </div>

        <div className="row p-3 justify-content-center w-100">
          <div className="form-group justify-content-center">
            <button
              type="button"
              className="btn btn-dark justify-content-center"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
