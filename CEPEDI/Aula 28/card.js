import styles from './Card.module.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

import styled from 'styled-components';

// Container com prop dinâmica para variant (Desafio Extra)
const Container = styled.div`
  background-color: ${props => props.variant === 'dark' ? '#333' : '#fff'};
  color: ${props => props.variant === 'dark' ? '#fff' : '#333'};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-family: 'Arial', sans-serif;
  color: ${props => props.variant === 'dark' ? '#61dafb' : '#20232a'};
`;

const Description = styled.p`
  line-height: 1.6;
`;

const CardStyled = ({ variant, title, description }) => (
  <Container variant={variant}>
    <Title variant={variant}>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

const CardGrid = () => {
  return (
    // Desafio Extra: 1 col (mobile), 2 cols (md), 3 cols (lg)
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-100">
      
      {/* Exemplo de um item no Grid */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-blue-600 mb-2">Tailwind Card</h3>
        <p className="text-gray-700">Layout responsivo e rápido!</p>
      </div>
      
      {/* Repetir cards... */}
    </div>
  );
};