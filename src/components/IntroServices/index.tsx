import { ServiceCard } from '../ServicesCards';
import { LogoSection } from '../LogoSection';
import { HeroServices } from '../HeroServices';
import { HeroWrapper, LeftWrapper, RightWrapper, CardWrapper, InfoTitle } from './style';

export const IntroServices = () => {
    return (
        <>
            <HeroWrapper>
                <LeftWrapper>
                    <HeroServices />
                </LeftWrapper>

                <CardWrapper>
                    <InfoTitle>clique para saber mais</InfoTitle>
                    <RightWrapper>
                        <ServiceCard
                            top
                            left
                            icon={'ri:whatsapp-fill'}
                            title={'Automação de Whatsapp'}
                        />
                        <ServiceCard
                            top
                            right
                            icon={'material-symbols:sell'}
                            title={'Página de vendas'}
                        />
                        <ServiceCard
                            bottom
                            left
                            icon={'eos-icons:ai'}
                            title={'Automação de IA'}
                        />
                        <ServiceCard
                            bottom
                            right
                            icon={'mdi:web'}
                            title={'Websites e plataformas'}
                        />
                    </RightWrapper>
                </CardWrapper>
            </HeroWrapper>
            <LogoSection />
        </>
    );
};
