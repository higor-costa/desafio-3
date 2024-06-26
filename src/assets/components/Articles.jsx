import React from 'react';

import {
  StyledImg,
  StyledCard,
  StyledTitle,
  StyledDescription,
} from '../styles/components/Card';
import styles from '../styles/components/Articles.module.css';

import img1 from '../img/img-1.jpeg';
import img2 from '../img/img-2.jpeg';
import img3 from '../img/img-3.jpeg';
import img4 from '../img/img-4.jpeg';
import img5 from '../img/img-5.jpeg';
import img6 from '../img/img-6.jpeg';

const Artigos = () => {
  return (
    <main>
      <section className="conteinerConteudo">
        <header>
          <h2 className={styles.sectionTitle} >Artigos recomendados</h2>
        </header>
        <div className={styles.conteinerCards}>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img1} alt="Artigo 1" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                O que é linguagem de programação? Conheça as principais
              </StyledTitle>
              <StyledDescription>
                Uma das mais populares vertentes da tecnologia da informação, a
                área de...
              </StyledDescription>
            </div>
          </StyledCard>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img2} alt="Artigo 2" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                Python: por que a linguagem é tão usada para Data Science e finanças?
              </StyledTitle>
              <StyledDescription>
                O mundo da programação conta com algumas opções de linguagem para...
              </StyledDescription>
            </div>
          </StyledCard>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img3} alt="Artigo 3" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários
              </StyledTitle>
              <StyledDescription>
                O popular serviço de repositório de código GitHub foi adquirido pela...
              </StyledDescription>
            </div>
          </StyledCard>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img4} alt="Artigo 4" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários
              </StyledTitle>
              <StyledDescription>
                O popular serviço de repositório de código GitHub foi adquirido pela...
              </StyledDescription>
            </div>
          </StyledCard>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img5} alt="Artigo 5" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                15 comandos no GIT que os desenvolvedores precisam saber
              </StyledTitle>
              <StyledDescription>
                Dominar os comandos GIT é uma habilidade que se conquista com...
              </StyledDescription>
            </div>
          </StyledCard>
          <StyledCard>
            <div className={styles.imagem}>
              <StyledImg src={img6} alt="Artigo 6" />
            </div>
            <div className={styles.texto}>
              <StyledTitle>
                GitHub Copilot ganha integração com GPT-4 e interface conversacional
              </StyledTitle>
              <StyledDescription>
                O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...
              </StyledDescription>
            </div>
          </StyledCard>
        </div>
      </section>
    </main>
  );
};

export default Artigos;
