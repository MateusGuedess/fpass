import { CardContainer } from "./style";

interface CardProps {
  id: number;
  name: string;
  srcImage: string;
}

function Card({ id, name, srcImage }: CardProps) {
  return (
    <CardContainer>
      <img className="card__image" loading="lazy" src={srcImage} alt={name} />
      <p>{name}</p>
    </CardContainer>
  );
}

export default Card;
