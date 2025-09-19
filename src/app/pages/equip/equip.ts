import { Component } from '@angular/core';

interface CardItem {
  titulo: string;
  descricao: string;
  detalhes: string;
  expandido: boolean;
}

@Component({
  selector: 'app-equip',
  templateUrl: './equip.html',
  styleUrls: ['./equip.css']
})
export class EquipComponent {
  // Use o array de cards para controlar o estado de expansão
  cards: CardItem[] = [
    {
      titulo: 'Suporte de Rua',
      descricao: 'Gerar resultados D-1, garantir frota e comunicação com clientes, assegurar metas e apresentar dados ao supervisor.',
      detalhes: `
        <h3>Atribuições do Suporte de Rua</h3>
        <p>O suporte de rua é responsável por garantir a eficiência operacional no campo, assegurando que todos os processos estejam alinhados com as metas estabelecidas.</p>

        <div class="step">
          <h4>Análise de Resultados D-1</h4>
          <ul>
            <li>Coletar e analisar os dados do dia anterior (D-1)</li>
            <li>Identificar pontos de melhoria e oportunidades</li>
            <li>Preparar relatórios concisos para a gestão</li>
          </ul>
        </div>

        <div class="step">
          <h4>Gestão de Frota</h4>
          <ul>
            <li>Garantir que a frota esteja em condições adequadas de uso</li>
            <li>Monitorar a disponibilidade de veículos e equipamentos</li>
            <li>Coordenar manutenções preventivas e corretivas</li>
          </ul>
        </div>

        <div class="step">
          <h4>Comunicação com Clientes</h4>
          <ul>
            <li>Manter canal de comunicação aberto com clientes</li>
            <li>Resolver problemas e dúvidas de forma ágil</li>
            <li>Garantir satisfação e fidelização</li>
          </ul>
        </div>

        <div class="step">
          <h4>Apresentação de Resultados</h4>
          <ul>
            <li>Preparar e apresentar dados ao supervisor</li>
            <li>Participar de reuniões diárias (Daily)</li>
            <li>Propor planos de ação para melhorias</li>
          </ul>
        </div>

        <div class="conclusion">
          <p>O suporte de rua é essencial para a operação, atuando como elo entre a equipe de campo, gestão e clientes, garantindo que todos os processos estejam alinhados e as metas sejam atingidas.</p>
        </div>
      `,
      expandido: false
    },
    {
      titulo: 'Gestão de Pessoas',
      descricao: 'Contratação e demissão, engajamento, redução de absenteísmo, treinamentos e integração de novos colaboradores.',
      detalhes: `
        <h3>Gestão de Pessoas: Estratégias e Práticas</h3>
        <p>A gestão de pessoas é fundamental para manter uma equipe motivada, produtiva e alinhada com os objetivos organizacionais.</p>

        <div class="step">
          <h4>Processos de Admissão e Demissão</h4>
          <ul>
            <li>Conduzir processos seletivos alinhados com a cultura organizacional</li>
            <li>Orientar e acompanhar a integração de novos colaboradores</li>
            <li>Gerir processos de desligamento de forma ética e transparente</li>
          </ul>
        </div>

        <div class="step">
          <h4>Engajamento e Motivação</h4>
          <ul>
            <li>Desenvolver programas de reconhecimento e valorização</li>
            <li>Promover clima organizacional positivo</li>
            <li>Implementar pesquisas de satisfação e clima organizacional</li>
          </ul>
        </div>

        <div class="step">
          <h4>Redução de Absenteísmo</h4>
          <ul>
            <li>Monitorar indicadores de frequência e pontualidade</li>
            <li>Identificar causas raízes do absenteísmo</li>
            <li>Implementar ações preventivas e corretivas</li>
          </ul>
        </div>

        <div class="step">
          <h4>Treinamento e Desenvolvimento</h4>
          <ul>
            <li>Identificar necessidades de treinamento</li>
            <li>Planejar e executar programas de capacitação</li>
            <li>Acompanhar a efetividade dos treinamentos realizados</li>
          </ul>
        </div>

        <div class="conclusion">
          <p>Uma gestão de pessoas eficaz contribui diretamente para os resultados organizacionais, criando um ambiente onde os colaboradores possam desenvolver seu potencial máximo.</p>
        </div>
      `,
      expandido: false
    },
    {
      titulo: 'Inadimplência',
      descricao: 'Controle de ligações, investigações, relatórios rotineiros e comunicação dos resultados.',
      detalhes: `
        <h3>Gestão de Inadimplência: Estratégias e Controle</h3>
        <p>O controle da inadimplência é crucial para a saúde financeira da organização, requerendo processos sistemáticos e eficientes.</p>

        <div class="step">
          <h4>Controle de Ligações</h4>
          <ul>
            <li>Estabelecer protocolos para contato com clientes inadimplentes</li>
            <li>Monitorar a efetividade das abordagens utilizadas</li>
            <li>Treinar a equipe para comunicação assertiva e eficaz</li>
          </ul>
        </div>

        <div class="step">
          <h4>Processos de Investigação</h4>
          <ul>
            <li>Desenvolver métodos para análise de casos de inadimplência</li>
            <li>Utilizar ferramentas e sistemas para rastreamento de informações</li>
            <li>Identificar padrões e tendências na inadimplência</li>
          </ul>
        </div>

        <div class="step">
          <h4>Relatórios e Comunicação</h4>
          <ul>
            <li>Elaborar relatórios periódicos sobre a carteira inadimplente</li>
            <li>Comunicar resultados à gestão e equipes envolvidas</li>
            <li>Estabelecer indicadores de performance para acompanhamento</li>
          </ul>
        </div>

        <div class="step">
          <h4>Estratégias de Recuperação</h4>
          <ul>
            <li>Desenvolver planos de negociação personalizados</li>
            <li>Implementar ações preventivas para reduzir a inadimplência</li>
            <li>Estabelecer parcerias com áreas jurídicas quando necessário</li>
          </ul>
        </div>

        <div class="conclusion">
          <p>Uma gestão eficiente da inadimplência combina processos bem estruturados, comunicação eficaz e análise constante de dados para minimizar perdas e manter a saúde financeira.</p>
        </div>
      `,
      expandido: false
    }
  ];

  toggleDetalhes(index: number): void {
    this.cards[index].expandido = !this.cards[index].expandido;
  }

  voltar(): void {
    window.history.back();
  }
}
