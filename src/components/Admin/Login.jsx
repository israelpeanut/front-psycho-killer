import { useState } from "react";
import { 
        Button,
        Row,
        Col,
        Form,
        Input
     } from "react-bootstrap"
import Image from 'next/image'

export const Login = () => {
    const [validated, setValidated] = useState(true);
    const [sent, setSent] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form.checkValidity())
        event.preventDefault();
        event.stopPropagation();
    
        setSent(true);
    
        if (!form.checkValidity()) {
          
        }
        else
        {
          alert("enviando form");
          console.log(answers)
        }
        
        setValidated(true);
      }



    const finish = () => {
        console.log("hemos terminado");
    }

return (
    <div className="admin-login-container">
        <div className="admin-login-left">
            <Image
                src="/img/admin/admin_side_logo.png"
                alt="Hirings Platform"
                width={291}
                height={128}
                className="admin-side-image"
                 />
        </div>
        <div className="admin-login-right">
            <div className="login-inner">
                <div className="admin-peguita-logo">
                    <Image
                        src="/img/admin/admin_logo.png"
                        alt="Peguita"
                        width={211}
                        height={53}
                    />
                </div>
                <Row className="admin-login-greetings">
                    <h2>¡Hola de nuevo!</h2>
                    <p>Bienvenid@</p>
                </Row>
                <Row>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="admin@correo.cl" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="contraseña" required />
                    </Form.Group>
                    
                    <div className="admin-login-footer">
                        <Button
                        type="submit"
                        className="peanut-button btn-dark admin-login-button"
                        >Iniciar Sesión</Button>

                        <br />
                        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>
                    </Form> 
                </Row>
            </div>
        </div>
    </div>
  )
}