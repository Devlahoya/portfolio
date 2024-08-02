import { useState, useEffect, useRef } from 'react';
import Error from './Error'
import emailjs from '@emailjs/browser';
import { IonIcon } from '@ionic/react';
import { mail, logoWhatsapp, location } from 'ionicons/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";

const EmailSection = (user) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
      if( Object.keys(user).length > 0  ) {
          setName(user.name)
          setEmail(user.email)
          setMessage(user.message)
      }
  }, [user])

  const contact_info = [
    { logo: `${mail}`, text: "devlahoya@gmail.com" },
    { logo: `${logoWhatsapp}`, text: "+52 (618) 234-35-29" },
    {
      logo: `${location}`,
      text: "Durango, MX",
    },
  ];
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if( [ name, email, message ].includes('') ) {

        setError(true)
        return;
    } 
    setError(false)
    
emailjs.sendForm('service_qhv6noc', 'template_ukfi4rb', form.current, 'CvKAhNJaQkagHQlHn')
.then((result) => {
      // Reiniciar el form
      setName('')
      setEmail('')
      setMessage('')
      toast.success('Your message has been sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}, (error) => {
  <Error><p>Ocurrio un error</p></Error>
});
}

  return (
    <Section id="contact" className=" text-black">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
        !Contactame!
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Enviame un Email</p>

        <div
          className="my-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-[#202020] md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
          { error &&  <Error><p>Todos los campos son requeridos</p></Error>}
            <p className="md:text-base text-sm  text-white break-words text-left">Nombre</p>
            <input className='rounded-sm p-2' id="name "type="text" name="from_name" placeholder="Nombre" value={name}
            onChange={ (e) => setName(e.target.value) }/>            
            <p className="md:text-base text-sm  text-white break-words text-left">Email</p>
            <input className='rounded-sm p-2' id="email" type="email" name="user_email" placeholder="Email" value={email}
            onChange={ (e) => setEmail(e.target.value) }/>            
            <p className="md:text-base text-sm  text-white break-words text-left">Mensaje</p>
            <textarea className='rounded-sm p-2' id="message" name="message" placeholder="Mensaje" rows={10} value={message}
            onChange={ (e) => setMessage(e.target.value) }></textarea>
            <ButtonContainer>
              <ThemeProvider theme={Dark}>
            <Button type="submit" text="Enviar"></Button>
            </ThemeProvider>
            </ButtonContainer>
          </form>


          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center bg-white rounded-full">
                  <IonIcon icon={contact.logo} ></IonIcon>
                </div>
                <p className="md:text-base text-sm  text-white break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </Section>
  );
};

const Section = styled.section`
width: 100%;
background-color: ${(props) => props.theme.body};
position: relative;
overflow: hidden;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    a {
      margin: 0 auto;
    }
  }
`;
export default EmailSection;