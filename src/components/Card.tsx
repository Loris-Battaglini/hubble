import { StyledCard } from "./styles/card.styled";
import type { ContentItem } from "./content";

interface CardProps {
  item: ContentItem;
}

export default function Card({ item }: CardProps) {
  return (
    <StyledCard $reverse={item.id % 2 === 0}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div>
        <img src={item.image} alt="" />
      </div>
    </StyledCard>
  );
}
