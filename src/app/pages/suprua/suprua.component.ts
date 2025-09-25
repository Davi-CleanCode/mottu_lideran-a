import { Component } from '@angular/core';

interface CardItem {
  titulo: string;
  descricao: string;
  detalhes: string;
  expandido: boolean;
}

@Component({
  selector: 'app-atrib',
  templateUrl: './suprua.html',
  styleUrls: ['./suprua.css']
})
export class SupruaComponent {
    currentIndex = 0;
  cards: CardItem[] = [
    {
      titulo: 'Suporte de Rua',
      descricao: 'Gerar e analisar resultados D-1 (One Page)',
      detalhes: 'Responsável por analisar e gerar relatórios dos resultados do dia anterior (D-1) utilizando a ferramenta One Page. Este processo é essencial para o acompanhamento do desempenho operacional e tomada de decisões estratégicas. Inclui a compilação de métricas de desempenho, identificação de tendências e preparação de insights para a equipe de gestão.',
      expandido: false
    },
    {
      titulo: 'Disponibilidade',
      descricao: 'Garantir disponibilidade de frota e pessoas para realização de serviços (Rabbot e OnePage)',
      detalhes: 'Assegurar que tanto a frota de veículos quanto os colaboradores estejam disponíveis e preparados para a realização dos serviços. Utiliza-se as ferramentas Rabbot e OnePage para monitorar e gerenciar essa disponibilidade em tempo real. Inclui o planejamento de escala, monitoramento de manutenção preventiva e alocação eficiente de recursos humanos.',
      expandido: false
    },
    {
      titulo: 'Comunicação com Cliente',
      descricao: 'Garantir comunicação com o cliente (Telecom)',
      detalhes: 'Manter canais de comunicação eficientes com os clientes através do sistema Telecom. Isso inclui informar sobre status de serviços, resolver dúvidas, tratar reclamações e garantir uma experiência positiva com a empresa. A comunicação deve ser clara, oportuna e profissional, mantendo o cliente informado em todas as etapas do serviço.',
      expandido: false
    },
    {
      titulo: 'Metas e Prioridades',
      descricao: 'Assegurar que a meta do suporte seja atingida e priorizar serviços de rua sobre serviços em casa',
      detalhes: 'Monitorar constantemente o cumprimento das metas estabelecidas para o suporte, garantindo que os serviços de rua recebam prioridade em relação aos serviços realizados em casa, conforme as diretrizes operacionais. Envolve a análise de indicadores de performance, ajuste de estratégias em tempo real e realocação de recursos quando necessário para atingir os objetivos.',
      expandido: false
    },
    {
      titulo: 'Rotas e Serviços',
      descricao: 'Garantir rotas de serviços de suporte de maneira adequada e serviços adequados para motos corretamente atrelados',
      detalhes: 'Otimizar e garantir que as rotas de serviços sejam planejadas de maneira eficiente, atribuindo os serviços adequados para cada moto de acordo com sua capacidade e localização, maximizando a produtividade operacional. Inclui o uso de sistemas de roteirização, consideração de tráfego e distâncias, e balanceamento adequado da carga de trabalho entre os colaboradores.',
      expandido: false
    },
    {
      titulo: 'Resultados',
      descricao: 'Apresentar resultados do suporte de rua ao supervisor (Daily)',
      detalhes: 'Preparação e apresentação diária (Daily) dos resultados obtidos pelo suporte de rua ao supervisor. Inclui métricas de produtividade, eficiência, qualidade do serviço, tempo de resposta e quaisquer issues que necessitem de atenção gerencial. Os relatórios devem ser claros, objetivos e conter insights acionáveis para melhoria contínua.',
      expandido: false
    },
    {
      titulo: 'Domínio Operacional',
      descricao: 'Dominar processos para resolução de problemas da operação',
      detalhes: 'Compreensão profunda de todos os processos operacionais para identificar, analisar e resolver problemas de forma ágil e eficiente. Inclui conhecimento técnico das ferramentas e procedimentos utilizados na operação, capacidade de troubleshoot, tomada de decisão sob pressão e implementação de soluções preventivas para evitar recorrência de problemas.',
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
