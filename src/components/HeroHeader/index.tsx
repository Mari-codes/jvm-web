import { Anchor } from "../Anchor";
import { HearoHeaderContentWrapper, HeroHeaderImageContent, HeroHeaderLogo, HeroHeaderLogoWrapper, HeroHeaderNav, HeroHeaderNavWrapper, HeroHeaderTextContent, HeroHeaderWrapper, HeroHeaderWrapperButtons, HeroHeaderWrapperImageContent } from "./styles";


export function HeroHeader() {

    return (
        <HeroHeaderWrapper>
            <HeroHeaderNavWrapper>
                <HeroHeaderLogoWrapper>
                    <HeroHeaderLogo />
                    <p>JVM WEBMARKETING</p>
                </HeroHeaderLogoWrapper>

                <HeroHeaderNav>
                    <Anchor text="Serviços" />
                    <Anchor text="Projetos" />
                    <Anchor text="Blog" />
                    <Anchor text="Contato" $variant="secondary" />

                </HeroHeaderNav>

            </HeroHeaderNavWrapper>

            <HearoHeaderContentWrapper>

                <HeroHeaderTextContent>
                    <h1>
                        Sua solução WEB.
                    </h1>
                    <p>
                        Plataformas exclusivas, funcionais e de alto desempenho.
                    </p>
                    <HeroHeaderWrapperButtons>
                        <Anchor text="Portfólio" $variant="tertiary" />
                        <Anchor text="Contato" $variant="quaternary"/>

                    </HeroHeaderWrapperButtons>

                </HeroHeaderTextContent>

                <HeroHeaderWrapperImageContent>
                    <HeroHeaderImageContent />

                </HeroHeaderWrapperImageContent>

            </HearoHeaderContentWrapper>

        </HeroHeaderWrapper>
    )
}