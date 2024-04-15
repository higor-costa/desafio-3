import React from 'react';

// Components
import Input from './Input';
import Textarea from './Textarea';

// Styles
import { StyledForm, StyledButton } from '../styles/components/Form';
import styles from '../styles/components/Form.module.css';

const Footer = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <footer>
      <div className="conteinerConteudo">
        <h2>Entre em contato</h2>
        <StyledForm>
          <Input
            type="text"
            name={name}
            id={name}
            value={name}
            setValue={setName}
            placeholder="Nome"
            className={styles.campo}
          />
          <Input
            type="text"
            name={email}
            id={email}
            value={email}
            setValue={setEmail}
            placeholder="E-mail"
            className={styles.campo}
          />
          <Textarea
            id={message}
            name={message}
            rows="10"
            setValue={setMessage}
            placeholder="Assunto da mensagem"
            className={styles.campo}
          />
          <StyledButton type="submit" value="Enviar" />
        </StyledForm>
      </div>
    </footer>
  );
};

export default Footer;
