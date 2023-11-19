import { useNavigate } from 'react-router-dom';
import {
  Title,
  Section,
  Text,
  Conteiner,
  TextContainer,
  Button,
} from './Home.styled';

export default function Home() {
  const navigate = useNavigate();

  const direct = () => {
    navigate('/catalog');
  };

  return (
    <Conteiner>
      <Section>
        <TextContainer>
          <Title>Drive Your Dreams: Discover, Explore, Thrive!</Title>
          <Text>
            Welcome to our car rental company, where convenience meets
            adventure. Whether you're exploring a new city, embarking on a road
            trip, or simply need a reliable ride, we've got you covered. Choose
            from our diverse fleet of vehicles, and let the open road be your
            guide. Your next adventure awaits – let's drive it together!
          </Text>
        </TextContainer>
        <Button type="button" onClick={direct}>
          Go to catalog
        </Button>
      </Section>
    </Conteiner>
  );
}
