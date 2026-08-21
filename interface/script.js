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
  { image: 'slides/slide_1.webp' },
  { image: 'slides/slide_2.webp' },
  { image: 'slides/slide_3.webp' },
  { image: 'slides/slide_4.webp' },
  { image: 'slides/slide_5.webp' },
  { image: 'slides/slide_6.webp' },
  { image: 'slides/slide_7.webp' },
  { image: 'slides/slide_8.webp' },
  { image: 'slides/Slide_9.webp' }
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
  const image = document.getElementById('slideImage');
  const meta = document.getElementById('slideMeta');
  const counter = document.getElementById('slideCounter');
  const modalImage = document.getElementById('fullscreenImage');

  if (!slide || !image || !meta || !counter) {
    return;
  }

  image.src = slide.image;
  image.alt = `Slide ${index + 1} da apresentação`;
  meta.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  counter.textContent = `Slide ${index + 1} de ${slides.length}`;

  if (modalImage) {
    modalImage.src = slide.image;
    modalImage.alt = `Slide ${index + 1} em tela cheia`;
  }
};

const initSlides = () => {
  let currentSlide = 0;

  const prev = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');
  const imageButton = document.getElementById('slideImageButton');
  const fullscreenModal = document.getElementById('fullscreenModal');
  const closeFullscreen = document.getElementById('closeFullscreen');

  const update = (nextIndex) => {
    currentSlide = (nextIndex + slides.length) % slides.length;
    renderSlide(currentSlide);
  };

  const openFullscreen = () => {
    if (!fullscreenModal) {
      return;
    }

    fullscreenModal.classList.remove('hidden');
  };

  const closeFullscreenView = () => {
    if (!fullscreenModal) {
      return;
    }

    fullscreenModal.classList.add('hidden');
  };

  if (prev) {
    prev.addEventListener('click', () => update(currentSlide - 1));
  }

  if (next) {
    next.addEventListener('click', () => update(currentSlide + 1));
  }

  if (imageButton) {
    imageButton.addEventListener('click', openFullscreen);
  }

  if (closeFullscreen) {
    closeFullscreen.addEventListener('click', closeFullscreenView);
  }

  if (fullscreenModal) {
    fullscreenModal.addEventListener('click', (event) => {
      if (event.target === fullscreenModal) {
        closeFullscreenView();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      update(currentSlide - 1);
    }

    if (event.key === 'ArrowRight') {
      update(currentSlide + 1);
    }

    if (event.key === 'Escape') {
      closeFullscreenView();
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
