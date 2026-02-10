import { useState } from 'react';
import apointment from '../../assets/img/apointment.png';
import finished from '../../assets/img/finished-training.png';
import goal from '../../assets/img/goal.png';
import android from '../../assets/img/sergio-android.png';
import setup from '../../assets/img/set-up-training.png';
import treatment from '../../assets/img/treatment.png';
import week from '../../assets/img/week-1.png';
import {
  CarouselWrapper,
  Track,
  Item,
  ImageContainer,
  Container,
  Title,
} from './styles';
import { RevealOnScroll } from '../RevealOnScroll';

export const InfiniteCarousel = () => {
  const images = [apointment, finished, goal, android, setup, treatment, week];

  const extendedImages = [...images, ...images, ...images];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <RevealOnScroll>
      <Container>
        <Title>Nossos Projetos</Title>
        <CarouselWrapper
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Track $isPaused={isPaused}>
            {extendedImages.map((img, i) => (
              <Item key={i}>
                <ImageContainer
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <img src={img} alt={`Project ${i}`} draggable={false} />
                </ImageContainer>
              </Item>
            ))}
          </Track>
        </CarouselWrapper>
      </Container>
    </RevealOnScroll>
  );
};
