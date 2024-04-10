import React from 'react';

// Estilos
import styles from '../styles/components/Header.module.css';
import StyledButton from '../styles/components/Button';

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.conteinerConteudo}>
        <div className={styles.texto}>
          <h1>
            Encontre os <span className={styles.textoDestaque}>melhores artigos</span> <br /> de programação em um só lugar
          </h1>
          <p>
            Explore o topo da programação em um só lugar! <br /> Seu destino único
            para dicas e tendências atuais.
          </p>
          <StyledButton as="a" href="#">Buscar artigos</StyledButton>
          <StyledButton type="submit">Enviar</StyledButton>
        </div>
        <div className={styles.imagem}>
          <img src="src\assets\img\image.svg" alt="Caixas de presentes" />
        </div>
      </div>
    </header>
  )
};

export default Header;
