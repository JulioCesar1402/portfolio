import React from 'react';
import '../Style/Contact.css'

function Contact() {
  return (
    <div className="contact-body body">
      <div>
        <h1>Are you interested or want to get in touch?</h1>
        <h2 className="subTitle">Feel free to access my networks and I will reply as soon as possible.</h2>
      </div>
      <div>
        <h3 className="networkTitle">Networks:</h3>
        <div className="parhList">
          <a href="https://www.linkedin.com/in/julio-cesar-monteiro-alves/?locale=en_US" className="networks logoIcon">
            <i class='bx bxl-linkedin-square bx-md'></i>
            <p className="net-name "> Linkedin </p>
          </a>
          <a href="https://github.com/JulioCesar1402" className="networks logoIcon">
            <i class='bx bxl-github bx-md'></i>
            <p className="net-name "> GitHub </p>
          </a>
          <a href="https://wa.me/qr/LIZRD5VU23K2M1" className="networks logoIcon">
            <i class='bx bxl-whatsapp bx-md' ></i>
            <p className="net-name "> WhatsApp </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
