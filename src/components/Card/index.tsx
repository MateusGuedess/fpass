import { CardContainer } from "./style";

interface CardProps {
  id: number;
  name: string;
  srcImage: string;
  description: string;
}

function Card({ id, name, srcImage, description }: CardProps) {
  return (
    <CardContainer>
      <img className="card__image" loading="lazy" src={srcImage} alt={name} />
      <p className="card__title">{name}</p>
      <p className="card__description">{description}</p>
    </CardContainer>
  );
}

export default Card;
