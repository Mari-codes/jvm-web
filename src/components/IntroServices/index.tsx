import { ServiceCard } from "../ServicesCards"
import { LogoSection } from "../LogoSection"
import { HeroServices } from "../HeroServices"

export const IntroServices = () => {
    return (
        <>
            <HeroServices />

            <ServiceCard top left icon={'ri:whatsapp-fill'} title={'Automação de Whatsapp'} />

            <ServiceCard top right icon={'material-symbols:sell'} title={'Página de vendas'} />

            <ServiceCard bottom left icon={'eos-icons:ai'} title={'Automação de IA'} />

            <ServiceCard bottom right icon={'mdi:web'} title={'Websites e plataformas'} />

            <LogoSection />

        </>
    );
};
