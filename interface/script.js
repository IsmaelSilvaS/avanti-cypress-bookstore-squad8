const caseData = [
  {
    category: 'Registro',
    name: 'CT01',
    title: 'Registro com sucesso',
    description: 'Validação do fluxo de criação de conta com dados válidos.',
    status: 'Passou',
    badge: 'pass'
  },
  {
    category: 'Login',
    name: 'CT02',
    title: 'Todos os campos válidos',
    description: 'Fluxo principal de autenticação com credenciais válidas.',
    status: 'Passou',
    badge: 'pass'
  },
  {
    category: 'Busca',
    name: 'CT03',
    title: 'Busca por título completo',
    description: 'Validação da pesquisa por nome completo do livro.',
    status: 'Passou',
    badge: 'pass'
  },
  {
    category: 'Coleção',
    name: 'CT04',
    title: 'Exibição correta dos livros adicionados',
    description: 'Validação da listagem dos livros presentes na coleção do usuário.',
    status: 'Passou',
    badge: 'pass'
  }
];

const slides = [
  {
    title: 'QA Guardians | Projeto DemoQA Book Store',
    text: 'Nosso projeto teve como objetivo realizar testes na aplicação DemoQA Book Store, avaliando principalmente cadastro, login, busca e coleção.',
    meta: 'Slide 1 de 8'
  },
  {
    title: 'Definição do Sistema',
    text: 'O sistema simula uma livraria online, com visualização do acervo, pesquisa de livros, cadastro, autenticação e gerenciamento da coleção.',
    meta: 'Slide 2 de 8'
  },
  {
    title: 'Estratégia de Testes',
    text: 'A abordagem consolidou testes funcionais em nível de sistema, foco em interface, com técnica de caixa-preta e suporte de testes exploratórios.',
    meta: 'Slide 3 de 8'
  },
  {
    title: 'Resultados',
    text: 'O roteiro do projeto informa 57 casos listados e executados, 39 aprovados e 18 falhas identificadas, com destaque para cenários de cadastro e busca.',
    meta: 'Slide 4 de 8'
  },
  {
    title: 'Resultados (continuação)',
    text: 'As falhas destacaram problemas com espaços, limites de caracteres, caracteres especiais e atualização visual após ações na coleção.',
    meta: 'Slide 5 de 8'
  },
  {
    title: 'Automação com Cypress',
    text: 'O escopo de automação inclui fluxo de login, cadastro, busca e coleção, com execução baseada em comandos como cy.visit(), cy.get(), .type() e assertions com .should().',
    meta: 'Slide 6 de 8'
  },
  {
    title: 'Lições Aprendidas',
    text: 'A equipe reconheceu a importância de testar cenários negativos, documentar problemas e trabalhar de forma colaborativa em Git/GitHub.',
    meta: 'Slide 7 de 8'
  },
  {
    title: 'Encerramento',
    text: 'Qualidade não é apenas encontrar bugs, mas prevenir que eles cheguem ao usuário.',
    meta: 'Slide 8 de 8'
  }
];

const renderCases = () => {
  const grid = document.getElementById('testCasesGrid');

  if (!grid) {
    return;
  }

  grid.innerHTML = caseData
    .map(
      (test) => `
        <article class="case-card">
          <header>
            <h4>${test.category} · ${test.name}</h4>
            <span class="badge ${test.badge}">${test.status}</span>
          </header>
          <p>${test.title}</p>
          <div class="case-meta">
            <span class="small-tag">${test.description}</span>
          </div>
        </article>
      `
    )
    .join('');
};

const toggleSection = (sectionId) => {
  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === sectionId);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button.dataset.target === sectionId);
  });
};

const renderSlide = (index) => {
  const slide = slides[index];
  const title = document.getElementById('slideTitle');
  const text = document.getElementById('slideText');
  const meta = document.getElementById('slideMeta');
  const counter = document.getElementById('slideCounter');

  if (!slide || !title || !text || !meta || !counter) {
    return;
  }

  title.textContent = slide.title;
  text.textContent = slide.text;
  meta.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  counter.textContent = `Slide ${index + 1} de ${slides.length}`;
};

const initSlides = () => {
  let currentSlide = 0;

  const prev = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');

  const update = (nextIndex) => {
    currentSlide = (nextIndex + slides.length) % slides.length;
    renderSlide(currentSlide);
  };

  if (prev) {
    prev.addEventListener('click', () => update(currentSlide - 1));
  }

  if (next) {
    next.addEventListener('click', () => update(currentSlide + 1));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      update(currentSlide - 1);
    }

    if (event.key === 'ArrowRight') {
      update(currentSlide + 1);
    }
  });

  renderSlide(currentSlide);
};

const initNavigation = () => {
  document.querySelectorAll('[data-target]').forEach((element) => {
    const targetId = element.dataset.target;

    if (!targetId) {
      return;
    }

    element.addEventListener('click', () => {
      if (targetId === 'dashboard' || targetId === 'casos' || targetId === 'resultados' || targetId === 'apresentacao' || targetId === 'demonstracao' || targetId === 'github') {
        toggleSection(targetId);
      }
    });
  });
};

const initWorkflowButton = () => {
  const button = document.getElementById('runCypressButton');
  const status = document.getElementById('workflowStatus');

  if (!button || !status) {
    return;
  }

  button.addEventListener('click', () => {
    const pill = status.querySelector('.status-pill');
    const text = status.querySelector('p');

    if (pill) {
      pill.textContent = 'Redirecionando';
      pill.className = 'status-pill ready';
    }

    if (text) {
      text.textContent = 'Você está sendo direcionado para o GitHub Actions para iniciar a execução do Cypress.';
    }
  });
};

renderCases();
initNavigation();
initSlides();
initWorkflowButton();
