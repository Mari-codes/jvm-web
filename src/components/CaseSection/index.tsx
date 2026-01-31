import { Icon } from '@iconify/react';
import {
  CaseSectionContent,
  CaseSectionContentImage,
  CaseSectionContentWrapper,
  CaseSectionDots,
  CaseSectionLeftTopDetail,
  CaseSectionLinks,
  CaseSectionRightTopDetail,
  CaseSectionTitle,
  CaseSectionWrapper,
} from './styles';

export function CaseSection() {
  return (
    <CaseSectionWrapper>
      <CaseSectionTitle>
        <h3>Projeto</h3>
        <h1>APT 1006</h1>
        <p>O nosso maior case de sucesso</p>
      </CaseSectionTitle>

      <CaseSectionContentWrapper>
        <CaseSectionDots />
        <CaseSectionContent>
          <CaseSectionLeftTopDetail>
            <div></div>
            <div></div>
            <div></div>
          </CaseSectionLeftTopDetail>
          <CaseSectionRightTopDetail>
            <div></div>
          </CaseSectionRightTopDetail>
          <CaseSectionContentImage />
          <h3>
            Como ajudamos a APT 1006 a transformar
            <a> tecnologia </a> em <a> faturamento</a>
          </h3>
          <CaseSectionLinks>
            <span>
              <Icon
                icon="mingcute:link-line"
                width="24"
                height="24"
                style={{ color: '#004688' }}
              />
              <a>Link de afiliado</a>
            </span>
            <span>
              <Icon
                icon="streamline:credit-card-1-solid"
                width="24"
                height="24"
                style={{ color: '#004688' }}
              />
              <a>Sistema de pagamento</a>
            </span>
            <span>
              <Icon
                icon="solar:window-frame-bold"
                width="24"
                height="24"
                style={{ color: '#004688' }}
              />
              <a>Gestão de CRM</a>
            </span>
          </CaseSectionLinks>

          <p>Tecnologia que virou negócio</p>
        </CaseSectionContent>
      </CaseSectionContentWrapper>
    </CaseSectionWrapper>
  );
}
