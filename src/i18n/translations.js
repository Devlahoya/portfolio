// ─────────────────────────────────────────────────────────────
//  Portfolio copy — all languages.
//  `en` is the source of truth; other languages are deep-merged
//  on top of it (see LanguageContext), so missing keys fall back.
// ─────────────────────────────────────────────────────────────

const en = {
  nav: { home: 'Home', research: 'Research', about: 'About', experience: 'Experience', projects: 'Projects', certificates: 'Certificates', faq: 'FAQ', contact: 'Contact', hire: 'Hire me' },

  hero: {
    badge: 'J-1 Research Scholar · New Mexico State University',
    greeting: "Hi, I'm",
    name: 'Héctor Martínez',
    rolePrefix: 'Data &',
    roles: ['Machine Learning Engineer', 'HPC / Systems Engineer', 'Data Engineer', 'Full Stack Developer'],
    tagline: 'I design scalable ML pipelines, build GPU-accelerated computational engines, and run large-scale batch workloads on Linux/SLURM supercomputers — across national and international research centers.',
    ctaPrimary: 'Download CV',
    ctaSecondary: "Let's talk",
    location: 'Las Cruces, NM · Durango, MX',
    stats: [
      { value: '20×', label: 'faster than reference tools (custom GPU engine)' },
      { value: '2', label: 'supercomputing centers (NMSU · LNS-BUAP)' },
      { value: '6+', label: 'years in IT & software' },
      { value: 'C2', label: 'English — full professional proficiency' },
    ],
    terminal: {
      title: 'hector@discovery ~ (bash)',
      lines: [
        { type: 'cmd', text: 'sbatch --gres=gpu:a100:1 train_transformer.slurm' },
        { type: 'out', text: 'Submitted batch job 4821937' },
        { type: 'cmd', text: 'squeue -u hmartinez' },
        { type: 'out', text: 'JOBID    PARTITION  NAME      ST  TIME   NODES' },
        { type: 'out', text: '4821937  gpu        train_tr  R   0:42   1' },
        { type: 'cmd', text: 'tail -f logs/train.log' },
        { type: 'ok',  text: '[epoch 12/40] loss=0.183  acc=0.947  gpu_util=98%' },
        { type: 'ok',  text: '[fft-engine] checkpoint saved · 20.3× vs reference' },
      ],
    },
  },

  marquee: ['Python', 'PyTorch', 'Transformers', 'Linux', 'SLURM', 'HPC', 'GPU Computing', 'CUDA', 'Data Engineering', 'Deep Learning', 'React', 'JavaScript', 'Java', 'Git', 'PostgreSQL', 'Node.js', 'WordPress'],

  research: {
    tag: 'Research & Academia',
    title: 'Where I do my research',
    subtitle: 'Two institutions, two supercomputers, one cross-border ML pipeline.',
    nmsu: {
      short: 'NMSU',
      name: 'New Mexico State University',
      location: 'Las Cruces, New Mexico, USA',
      role: 'Research Assistant — Computational Systems',
      visa: 'J-1 Research Scholar',
      period: 'Aug 2026 — Dec 2026',
      status: 'Current',
      desc: 'Research Assistant to Dr. Efren Delgado, extending my ML-pipeline work to a new applied research setting in the United States.',
      bullets: [
        'Large-scale computational workflows on the Discovery supercomputing cluster',
        'Job scheduling, resource allocation and pipeline optimization on Linux/HPC',
        'Cross-border collaboration with U.S. faculty and researchers',
      ],
      tags: ['Discovery HPC', 'SLURM', 'Linux', 'PyTorch', 'Pipeline Optimization'],
    },
    itd: {
      short: 'ITD · TecNM',
      name: 'Durango Institute of Technology',
      subname: 'Tecnológico Nacional de México',
      location: 'Durango, Mexico',
      role: 'Machine Learning Engineer — Applied Research',
      degree: 'M.S. in Engineering (Systems Engineering)',
      period: 'Jan 2025 — Dec 2026',
      status: 'Graduate researcher',
      desc: 'End-to-end applied AI pipeline: from deep learning model design to distributed execution on a national supercomputer.',
      bullets: [
        'Designed and trained deep learning models (PyTorch, Transformer architectures)',
        'Built a GPU-accelerated FFT-based engine from scratch with checkpoint/resume — up to 20× faster than reference tools',
        'Managed distributed jobs on the LNS-BUAP Huapáctic supercomputer: SLURM scheduling, queue optimization, concurrency',
      ],
      tags: ['PyTorch', 'Transformers', 'GPU / FFT', 'Huapáctic HPC', 'SLURM', 'Systems Engineering'],
    },
    compute: {
      title: 'Compute I have worked on',
      items: [
        { name: 'Discovery', org: 'New Mexico State University', desc: 'Linux/SLURM cluster · GPU partitions · large-batch workloads', flag: '🇺🇸' },
        { name: 'Huapáctic', org: 'LNS-BUAP · Laboratorio Nacional de Supercómputo', desc: 'National supercomputer · distributed jobs · queue optimization', flag: '🇲🇽' },
        { name: 'Custom GPU engine', org: 'ITD applied research', desc: 'FFT-based, checkpoint/resume, 20× speed-up over reference tools', flag: '⚡' },
      ],
    },
  },

  about: {
    tag: 'About me',
    title: 'From IT infrastructure to\nsupercomputer-scale machine learning',
    bio1: "I'm Héctor Ramón Martínez de la Hoya — a Data Engineer and Machine Learning Engineer with a background in software development, distributed/HPC computing and applied AI.",
    bio2: 'I started managing enterprise IT infrastructure, moved into React development and project management, and today I engineer GPU-accelerated ML systems and manage large-scale batch workloads on Linux/SLURM supercomputers in Mexico and the United States.',
    bio3: 'I translate technical requirements into production-ready solutions and I thrive in multidisciplinary, cross-border teams.',
    skillsTitle: 'Technical skills',
    skillGroups: [
      { title: 'Programming', items: ['Python', 'JavaScript', 'Java', 'Bash'] },
      { title: 'Systems & HPC', items: ['Linux', 'SLURM job scheduling', 'Distributed / HPC computing', 'GPU-accelerated computing', 'Discovery (NMSU)', 'Huapáctic (LNS-BUAP)'] },
      { title: 'Data & AI', items: ['Machine Learning', 'Deep Learning', 'Transformers', 'Data Engineering', 'Data Analysis', 'ML Pipelines'] },
      { title: 'Frameworks & Tools', items: ['PyTorch', 'React', 'Node.js', 'Git', 'PostgreSQL', 'REST APIs'] },
      { title: 'Web', items: ['HTML', 'CSS', 'WordPress', 'Elementor / Divi', 'CMS integration'] },
      { title: 'Soft skills', items: ['Leadership', 'Cross-functional collaboration', 'Problem solving', 'Attention to detail'] },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'C2 · Full professional proficiency' },
    ],
    openTo: 'Open to relocation & remote work',
  },

  experience: {
    tag: 'Experience',
    title: 'Professional experience',
    subtitle: 'Six years across infrastructure, product engineering and applied AI research.',
    currentLabel: 'Current',
    items: [
      {
        period: 'Aug 2026 — Dec 2026', title: 'Research Assistant — Computational Systems', org: 'New Mexico State University', location: 'Las Cruces, NM, USA', badge: 'J-1 Research Scholar',
        bullets: [
          'Research Assistant to Dr. Efren Delgado, extending prior ML-pipeline work to a new applied research setting.',
          'Executing large-scale computational workflows on the Discovery supercomputing cluster: job scheduling, resource allocation and pipeline optimization in a Linux/HPC environment.',
          'Collaborating with U.S.-based faculty and researchers in a cross-border technical team.',
        ],
        tags: ['HPC', 'SLURM', 'Linux', 'PyTorch'], type: 'research', current: true,
      },
      {
        period: 'Jan 2025 — Dec 2026', title: 'Machine Learning Engineer — Applied Research', org: 'Durango Institute of Technology · TecNM', location: 'Durango, Mexico',
        bullets: [
          'Designed and trained deep learning models (Python, PyTorch, Transformer-based architectures) in an end-to-end applied AI pipeline.',
          'Engineered a custom GPU-accelerated computational engine from scratch (FFT-based, checkpoint/resume), outperforming reference tools by up to 20× in processing time.',
          'Managed large-scale distributed computing jobs on the LNS-BUAP Huapáctic supercomputer: SLURM scheduling, queue optimization and concurrency handling on Linux.',
        ],
        tags: ['PyTorch', 'Transformers', 'GPU', 'SLURM', 'HPC'], type: 'research', current: true,
      },
      {
        period: 'Nov 2022 — Aug 2024', title: 'React Developer · Project Manager', org: 'QACS', location: 'Durango, Mexico',
        bullets: [
          'Led development and optimization of React web applications focused on performance, scalability and UX.',
          'Worked across the full stack with JavaScript, HTML and CSS, integrating with CMS platforms such as WordPress (Elementor, Divi).',
          'Managed cross-functional teams and timelines, delivering digital solutions for private-sector and government clients.',
        ],
        tags: ['React', 'JavaScript', 'WordPress', 'Project Management'], type: 'work',
      },
      {
        period: 'Aug 2019 — Sep 2022', title: 'IT Systems Manager', org: 'Magdalena Construcciones', location: 'Durango, Mexico',
        bullets: [
          'Managed and maintained enterprise IT infrastructure: system deployment, upgrades and ongoing support.',
          'Strengthened network security and implemented best practices to protect sensitive business data.',
          'Developed and deployed internal software to improve operational efficiency and workflow automation.',
        ],
        tags: ['IT Infrastructure', 'Network Security', 'Internal Tools'], type: 'work',
      },
    ],
  },

  education: {
    tag: 'Education',
    title: 'Academic background',
    items: [
      { period: 'Jan 2025 — Dec 2026', title: 'M.S. in Engineering — Systems Engineering', place: 'Durango Institute of Technology · Tecnológico Nacional de México', note: 'Graduate research in applied AI & HPC', icon: '🎓', highlight: true },
      { period: 'Jun 2025 — Nov 2025', title: 'Graduate Certificate in Machine Learning with Python', place: 'CIMAT — Center for Research in Mathematics', note: 'Deep learning, model training & evaluation', icon: '🧠' },
      { period: 'Jan 2024 — Jun 2024', title: 'Oracle Next Education — Back-End Program', place: 'Alura · Oracle ONE', note: 'Java, OOP, back-end fundamentals', icon: '☕' },
      { period: 'Aug 2015 — Dec 2020', title: 'B.S. in Biochemical Engineering', place: 'Durango Institute of Technology · Tecnológico Nacional de México', note: 'Engineering foundations, quantitative analysis', icon: '📐' },
    ],
  },

  projects: { tag: 'Portfolio', title: 'Projects I have built', subtitle: 'Web apps, client sites and front-end experiments.' },
  courses: { tag: 'Credentials', title: 'Certificates & courses' },
  trusted: { tag: 'Trusted by', title: 'Companies and institutions I have worked with' },

  faq: {
    tag: 'FAQ',
    title: 'Common questions',
    subtitle: 'Everything a recruiter or collaborator might want to know.',
    items: [
      { question: 'What do you do right now?', answer: "I'm a J-1 Research Scholar at New Mexico State University (Research Assistant in Computational Systems) running large-scale ML workloads on the Discovery cluster, while finishing my M.S. in Systems Engineering at the Durango Institute of Technology." },
      { question: 'What is your core stack?', answer: 'Python and PyTorch for deep learning; Linux, SLURM and GPU computing for HPC; React, JavaScript and Node.js for web. Git everywhere.' },
      { question: 'What kind of roles are you looking for?', answer: 'Machine Learning Engineer, Data Engineer, HPC / Systems Engineer, or ML-oriented software roles — remote or on-site in the U.S., Mexico or abroad.' },
      { question: 'Are you open to relocation?', answer: 'Yes. I currently work in Las Cruces, NM (USA) and am open to relocating nationally or internationally, as well as fully remote positions.' },
      { question: 'What is your English level?', answer: 'C2 — full professional proficiency (official EF SET certificate). I work daily with U.S. faculty and write technical documentation in English.' },
      { question: 'Do you have production software experience?', answer: 'Yes: two years leading React development and project management at QACS for private and government clients, and three years managing enterprise IT infrastructure and internal tools.' },
    ],
  },

  banner: { tag: 'Open source & public work', title: 'Explore my code on GitHub', subtitle: 'Web projects, experiments and research tooling.', button: 'View GitHub profile' },

  contact: {
    tag: 'Get in touch', title: "Let's build something", subtitle: 'Open to ML / data / HPC roles, research collaborations and consulting.',
    name: 'Name', email: 'Email', message: 'Message',
    namePh: 'Your name', emailPh: 'your@email.com', messagePh: 'Tell me about the role or project...',
    send: 'Send message', sending: 'Sending...', required: 'All fields are required.',
    success: "Message sent! I'll get back to you soon.", error: 'Something went wrong. Try emailing me directly.',
    labels: { email: 'Email', whatsapp: 'WhatsApp', location: 'Location', linkedin: 'LinkedIn' },
    locationValue: 'Las Cruces, NM (USA) · Durango, MX',
  },

  footer: { role: 'Data Engineer · Machine Learning Engineer · HPC', nav: 'Navigation', contact: 'Contact', rights: 'All rights reserved', built: 'Built with React & styled-components' },
};

// ─────────────── ESPAÑOL ───────────────
const es = {
  nav: { home: 'Inicio', research: 'Investigación', about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', certificates: 'Certificados', faq: 'FAQ', contact: 'Contacto', hire: 'Contrátame' },
  hero: {
    badge: 'J-1 Research Scholar · New Mexico State University',
    greeting: 'Hola, soy',
    name: 'Héctor Martínez',
    rolePrefix: 'Ingeniero de',
    roles: ['Machine Learning', 'Datos', 'Sistemas HPC', 'Software Full Stack'],
    tagline: 'Diseño pipelines de ML escalables, construyo motores computacionales acelerados por GPU y ejecuto cargas batch a gran escala en supercomputadoras Linux/SLURM — en centros de cómputo nacionales e internacionales.',
    ctaPrimary: 'Descargar CV',
    ctaSecondary: 'Hablemos',
    location: 'Las Cruces, NM · Durango, MX',
    stats: [
      { value: '20×', label: 'más rápido que herramientas de referencia (motor GPU propio)' },
      { value: '2', label: 'centros de supercómputo (NMSU · LNS-BUAP)' },
      { value: '6+', label: 'años en TI y software' },
      { value: 'C2', label: 'Inglés — dominio profesional completo' },
    ],
    terminal: en.hero.terminal,
  },
  research: {
    tag: 'Investigación y academia',
    title: 'Dónde hago investigación',
    subtitle: 'Dos instituciones, dos supercomputadoras, un pipeline de ML transfronterizo.',
    nmsu: {
      short: 'NMSU',
      name: 'New Mexico State University',
      location: 'Las Cruces, Nuevo México, EE. UU.',
      role: 'Asistente de Investigación — Sistemas Computacionales',
      visa: 'J-1 Research Scholar',
      period: 'Ago 2026 — Dic 2026',
      status: 'Actual',
      desc: 'Asistente de investigación del Dr. Efrén Delgado, extendiendo mi trabajo en pipelines de ML a un nuevo entorno de investigación aplicada en Estados Unidos.',
      bullets: [
        'Flujos computacionales a gran escala en el clúster de supercómputo Discovery',
        'Programación de trabajos, asignación de recursos y optimización de pipelines en Linux/HPC',
        'Colaboración transfronteriza con profesores e investigadores de EE. UU.',
      ],
      tags: ['Discovery HPC', 'SLURM', 'Linux', 'PyTorch', 'Optimización de pipelines'],
    },
    itd: {
      short: 'ITD · TecNM',
      name: 'Instituto Tecnológico de Durango',
      subname: 'Tecnológico Nacional de México',
      location: 'Durango, México',
      role: 'Ingeniero de Machine Learning — Investigación aplicada',
      degree: 'Maestría en Ingeniería (Ingeniería de Sistemas)',
      period: 'Ene 2025 — Dic 2026',
      status: 'Investigador de posgrado',
      desc: 'Pipeline de IA aplicada de punta a punta: del diseño de modelos de deep learning a la ejecución distribuida en una supercomputadora nacional.',
      bullets: [
        'Diseño y entrenamiento de modelos de deep learning (PyTorch, arquitecturas Transformer)',
        'Motor computacional acelerado por GPU construido desde cero (FFT, checkpoint/resume) — hasta 20× más rápido que herramientas de referencia',
        'Gestión de trabajos distribuidos en la supercomputadora Huapáctic (LNS-BUAP): SLURM, optimización de colas y concurrencia',
      ],
      tags: ['PyTorch', 'Transformers', 'GPU / FFT', 'Huapáctic HPC', 'SLURM', 'Ingeniería de Sistemas'],
    },
    compute: {
      title: 'Cómputo en el que he trabajado',
      items: [
        { name: 'Discovery', org: 'New Mexico State University', desc: 'Clúster Linux/SLURM · particiones GPU · cargas batch grandes', flag: '🇺🇸' },
        { name: 'Huapáctic', org: 'LNS-BUAP · Laboratorio Nacional de Supercómputo', desc: 'Supercomputadora nacional · trabajos distribuidos · optimización de colas', flag: '🇲🇽' },
        { name: 'Motor GPU propio', org: 'Investigación aplicada ITD', desc: 'Basado en FFT, checkpoint/resume, 20× más rápido que herramientas de referencia', flag: '⚡' },
      ],
    },
  },
  about: {
    tag: 'Sobre mí',
    title: 'De la infraestructura TI al\nmachine learning a escala de supercómputo',
    bio1: 'Soy Héctor Ramón Martínez de la Hoya — Ingeniero de Datos y de Machine Learning con trayectoria en desarrollo de software, cómputo distribuido/HPC e inteligencia artificial aplicada.',
    bio2: 'Empecé administrando infraestructura TI empresarial, pasé al desarrollo React y la gestión de proyectos, y hoy construyo sistemas de ML acelerados por GPU y gestiono cargas batch a gran escala en supercomputadoras Linux/SLURM en México y Estados Unidos.',
    bio3: 'Traduzco requerimientos técnicos en soluciones listas para producción y trabajo muy bien en equipos multidisciplinarios y transfronterizos.',
    skillsTitle: 'Habilidades técnicas',
    skillGroups: [
      { title: 'Programación', items: ['Python', 'JavaScript', 'Java', 'Bash'] },
      { title: 'Sistemas y HPC', items: ['Linux', 'Programación de jobs SLURM', 'Cómputo distribuido / HPC', 'Cómputo acelerado por GPU', 'Discovery (NMSU)', 'Huapáctic (LNS-BUAP)'] },
      { title: 'Datos e IA', items: ['Machine Learning', 'Deep Learning', 'Transformers', 'Ingeniería de datos', 'Análisis de datos', 'Pipelines de ML'] },
      { title: 'Frameworks y herramientas', items: ['PyTorch', 'React', 'Node.js', 'Git', 'PostgreSQL', 'APIs REST'] },
      { title: 'Web', items: ['HTML', 'CSS', 'WordPress', 'Elementor / Divi', 'Integración CMS'] },
      { title: 'Habilidades blandas', items: ['Liderazgo', 'Colaboración multifuncional', 'Resolución de problemas', 'Atención al detalle'] },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'C2 · Dominio profesional completo' },
    ],
    openTo: 'Abierto a reubicación y trabajo remoto',
  },
  experience: {
    tag: 'Experiencia',
    title: 'Experiencia profesional',
    subtitle: 'Seis años entre infraestructura, ingeniería de producto e investigación en IA aplicada.',
    currentLabel: 'Actual',
    items: [
      {
        period: 'Ago 2026 — Dic 2026', title: 'Asistente de Investigación — Sistemas Computacionales', org: 'New Mexico State University', location: 'Las Cruces, NM, EE. UU.', badge: 'J-1 Research Scholar',
        bullets: [
          'Asistente de investigación del Dr. Efrén Delgado, extendiendo el trabajo previo en pipelines de ML a un nuevo entorno de investigación aplicada.',
          'Ejecución de flujos computacionales a gran escala en el clúster Discovery: programación de trabajos, asignación de recursos y optimización de pipelines en Linux/HPC.',
          'Colaboración con profesores e investigadores de EE. UU. en un equipo técnico transfronterizo.',
        ],
        tags: ['HPC', 'SLURM', 'Linux', 'PyTorch'], type: 'research', current: true,
      },
      {
        period: 'Ene 2025 — Dic 2026', title: 'Ingeniero de Machine Learning — Investigación aplicada', org: 'Instituto Tecnológico de Durango · TecNM', location: 'Durango, México',
        bullets: [
          'Diseño y entrenamiento de modelos de deep learning (Python, PyTorch, arquitecturas Transformer) en un pipeline de IA aplicada de punta a punta.',
          'Motor computacional acelerado por GPU construido desde cero (FFT, checkpoint/resume), hasta 20× más rápido que herramientas de referencia.',
          'Gestión de trabajos distribuidos a gran escala en la supercomputadora Huapáctic (LNS-BUAP): SLURM, optimización de colas y concurrencia en Linux.',
        ],
        tags: ['PyTorch', 'Transformers', 'GPU', 'SLURM', 'HPC'], type: 'research', current: true,
      },
      {
        period: 'Nov 2022 — Ago 2024', title: 'Desarrollador React · Project Manager', org: 'QACS', location: 'Durango, México',
        bullets: [
          'Lideré el desarrollo y optimización de aplicaciones web React enfocadas en rendimiento, escalabilidad y UX.',
          'Trabajo full-stack con JavaScript, HTML y CSS, integrando con plataformas CMS como WordPress (Elementor, Divi).',
          'Gestión de equipos multifuncionales y cronogramas, entregando soluciones digitales para clientes privados y gubernamentales.',
        ],
        tags: ['React', 'JavaScript', 'WordPress', 'Gestión de proyectos'], type: 'work',
      },
      {
        period: 'Ago 2019 — Sep 2022', title: 'Jefe de Sistemas TI', org: 'Magdalena Construcciones', location: 'Durango, México',
        bullets: [
          'Administración y mantenimiento de infraestructura TI empresarial: despliegue de sistemas, actualizaciones y soporte continuo.',
          'Fortalecimiento de la seguridad de red e implementación de buenas prácticas para proteger datos críticos del negocio.',
          'Desarrollo y despliegue de software interno para mejorar la eficiencia operativa y automatizar flujos de trabajo.',
        ],
        tags: ['Infraestructura TI', 'Seguridad de red', 'Herramientas internas'], type: 'work',
      },
    ],
  },
  education: {
    tag: 'Educación',
    title: 'Formación académica',
    items: [
      { period: 'Ene 2025 — Dic 2026', title: 'Maestría en Ingeniería — Ingeniería de Sistemas', place: 'Instituto Tecnológico de Durango · Tecnológico Nacional de México', note: 'Investigación de posgrado en IA aplicada y HPC', icon: '🎓', highlight: true },
      { period: 'Jun 2025 — Nov 2025', title: 'Diplomado en Machine Learning con Python', place: 'CIMAT — Centro de Investigación en Matemáticas', note: 'Deep learning, entrenamiento y evaluación de modelos', icon: '🧠' },
      { period: 'Ene 2024 — Jun 2024', title: 'Oracle Next Education — Programa Back-End', place: 'Alura · Oracle ONE', note: 'Java, POO, fundamentos de back-end', icon: '☕' },
      { period: 'Ago 2015 — Dic 2020', title: 'Ingeniería Bioquímica', place: 'Instituto Tecnológico de Durango · Tecnológico Nacional de México', note: 'Bases de ingeniería y análisis cuantitativo', icon: '📐' },
    ],
  },
  projects: { tag: 'Portafolio', title: 'Proyectos que he construido', subtitle: 'Apps web, sitios para clientes y experimentos front-end.' },
  courses: { tag: 'Credenciales', title: 'Certificados y cursos' },
  trusted: { tag: 'Confían en mí', title: 'Empresas e instituciones con las que he trabajado' },
  faq: {
    tag: 'FAQ',
    title: 'Preguntas frecuentes',
    subtitle: 'Todo lo que un reclutador o colaborador querría saber.',
    items: [
      { question: '¿Qué haces actualmente?', answer: 'Soy J-1 Research Scholar en New Mexico State University (Asistente de Investigación en Sistemas Computacionales) ejecutando cargas de ML a gran escala en el clúster Discovery, mientras termino mi Maestría en Ingeniería de Sistemas en el Instituto Tecnológico de Durango.' },
      { question: '¿Cuál es tu stack principal?', answer: 'Python y PyTorch para deep learning; Linux, SLURM y cómputo GPU para HPC; React, JavaScript y Node.js para web. Git en todo.' },
      { question: '¿Qué tipo de roles buscas?', answer: 'Machine Learning Engineer, Data Engineer, HPC / Systems Engineer o roles de software orientados a ML — remoto o presencial en EE. UU., México o el extranjero.' },
      { question: '¿Estás abierto a reubicación?', answer: 'Sí. Actualmente trabajo en Las Cruces, NM (EE. UU.) y estoy abierto a reubicación nacional o internacional, así como a posiciones totalmente remotas.' },
      { question: '¿Cuál es tu nivel de inglés?', answer: 'C2 — dominio profesional completo (certificado oficial EF SET). Trabajo a diario con profesores de EE. UU. y redacto documentación técnica en inglés.' },
      { question: '¿Tienes experiencia con software en producción?', answer: 'Sí: dos años liderando desarrollo React y gestión de proyectos en QACS para clientes privados y gubernamentales, y tres años administrando infraestructura TI empresarial y herramientas internas.' },
    ],
  },
  banner: { tag: 'Código abierto y trabajo público', title: 'Explora mi código en GitHub', subtitle: 'Proyectos web, experimentos y herramientas de investigación.', button: 'Ver perfil de GitHub' },
  contact: {
    tag: 'Contacto', title: 'Construyamos algo', subtitle: 'Abierto a roles de ML / datos / HPC, colaboraciones de investigación y consultoría.',
    name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje',
    namePh: 'Tu nombre', emailPh: 'tu@correo.com', messagePh: 'Cuéntame sobre el rol o proyecto...',
    send: 'Enviar mensaje', sending: 'Enviando...', required: 'Todos los campos son obligatorios.',
    success: '¡Mensaje enviado! Me pondré en contacto pronto.', error: 'Algo salió mal. Intenta escribirme directamente.',
    labels: { email: 'Correo', whatsapp: 'WhatsApp', location: 'Ubicación', linkedin: 'LinkedIn' },
    locationValue: 'Las Cruces, NM (EE. UU.) · Durango, MX',
  },
  footer: { role: 'Ingeniero de Datos · Ingeniero de Machine Learning · HPC', nav: 'Navegación', contact: 'Contacto', rights: 'Todos los derechos reservados', built: 'Construido con React & styled-components' },
};

// ─────────────── DEUTSCH ───────────────
const de = {
  nav: { home: 'Start', research: 'Forschung', about: 'Über mich', experience: 'Erfahrung', projects: 'Projekte', certificates: 'Zertifikate', faq: 'FAQ', contact: 'Kontakt', hire: 'Anfragen' },
  hero: {
    greeting: 'Hallo, ich bin',
    rolePrefix: 'Data &',
    roles: ['Machine Learning Engineer', 'HPC / Systems Engineer', 'Data Engineer', 'Full-Stack-Entwickler'],
    tagline: 'Ich entwerfe skalierbare ML-Pipelines, baue GPU-beschleunigte Rechen-Engines und betreibe große Batch-Workloads auf Linux/SLURM-Supercomputern — in nationalen und internationalen Rechenzentren.',
    ctaPrimary: 'Lebenslauf herunterladen',
    ctaSecondary: 'Kontakt aufnehmen',
    stats: [
      { value: '20×', label: 'schneller als Referenztools (eigene GPU-Engine)' },
      { value: '2', label: 'Supercomputing-Zentren (NMSU · LNS-BUAP)' },
      { value: '6+', label: 'Jahre in IT & Software' },
      { value: 'C2', label: 'Englisch — verhandlungssicher' },
    ],
  },
  research: {
    tag: 'Forschung & Hochschule', title: 'Wo ich forsche', subtitle: 'Zwei Institutionen, zwei Supercomputer, eine grenzüberschreitende ML-Pipeline.',
    nmsu: { location: 'Las Cruces, New Mexico, USA', role: 'Research Assistant — Computational Systems', period: 'Aug 2026 — Dez 2026', status: 'Aktuell', desc: 'Research Assistant bei Dr. Efren Delgado; Erweiterung meiner ML-Pipeline-Arbeit auf ein neues angewandtes Forschungsumfeld in den USA.', bullets: ['Große Rechen-Workflows auf dem Discovery-Supercomputing-Cluster', 'Job-Scheduling, Ressourcenzuweisung und Pipeline-Optimierung unter Linux/HPC', 'Grenzüberschreitende Zusammenarbeit mit US-Fakultät und Forschenden'] },
    itd: { name: 'Technologisches Institut Durango', location: 'Durango, Mexiko', role: 'Machine Learning Engineer — Angewandte Forschung', degree: 'M.Sc. Ingenieurwesen (Systems Engineering)', period: 'Jan 2025 — Dez 2026', status: 'Graduierten-Forscher', desc: 'End-to-End-Pipeline für angewandte KI: vom Deep-Learning-Modelldesign bis zur verteilten Ausführung auf einem nationalen Supercomputer.', bullets: ['Entwurf und Training von Deep-Learning-Modellen (PyTorch, Transformer-Architekturen)', 'GPU-beschleunigte FFT-Engine von Grund auf mit Checkpoint/Resume — bis zu 20× schneller als Referenztools', 'Verteilte Jobs auf dem Supercomputer Huapáctic (LNS-BUAP): SLURM, Queue-Optimierung, Nebenläufigkeit'] },
    compute: { title: 'Rechensysteme, mit denen ich gearbeitet habe', items: [
      { name: 'Discovery', org: 'New Mexico State University', desc: 'Linux/SLURM-Cluster · GPU-Partitionen · große Batch-Workloads', flag: '🇺🇸' },
      { name: 'Huapáctic', org: 'LNS-BUAP · Nationales Supercomputing-Labor', desc: 'Nationaler Supercomputer · verteilte Jobs · Queue-Optimierung', flag: '🇲🇽' },
      { name: 'Eigene GPU-Engine', org: 'Angewandte Forschung ITD', desc: 'FFT-basiert, Checkpoint/Resume, 20× schneller als Referenztools', flag: '⚡' },
    ] },
  },
  about: {
    tag: 'Über mich', title: 'Von IT-Infrastruktur zu\nMachine Learning im Supercomputer-Maßstab',
    bio1: 'Ich bin Héctor Ramón Martínez de la Hoya — Data Engineer und Machine Learning Engineer mit Hintergrund in Softwareentwicklung, verteiltem/HPC-Rechnen und angewandter KI.',
    bio2: 'Ich begann mit der Verwaltung von Unternehmens-IT, wechselte zu React-Entwicklung und Projektmanagement und entwickle heute GPU-beschleunigte ML-Systeme und betreibe große Batch-Workloads auf Linux/SLURM-Supercomputern in Mexiko und den USA.',
    bio3: 'Ich übersetze technische Anforderungen in produktionsreife Lösungen und arbeite gern in multidisziplinären, grenzüberschreitenden Teams.',
    skillsTitle: 'Technische Fähigkeiten',
    skillGroups: [
      { title: 'Programmierung', items: ['Python', 'JavaScript', 'Java', 'Bash'] },
      { title: 'Systeme & HPC', items: ['Linux', 'SLURM Job-Scheduling', 'Verteiltes / HPC-Rechnen', 'GPU-beschleunigtes Rechnen', 'Discovery (NMSU)', 'Huapáctic (LNS-BUAP)'] },
      { title: 'Daten & KI', items: ['Machine Learning', 'Deep Learning', 'Transformers', 'Data Engineering', 'Datenanalyse', 'ML-Pipelines'] },
      { title: 'Frameworks & Tools', items: ['PyTorch', 'React', 'Node.js', 'Git', 'PostgreSQL', 'REST APIs'] },
      { title: 'Web', items: ['HTML', 'CSS', 'WordPress', 'Elementor / Divi', 'CMS-Integration'] },
      { title: 'Soft Skills', items: ['Führung', 'Funktionsübergreifende Zusammenarbeit', 'Problemlösung', 'Sorgfalt'] },
    ],
    languagesTitle: 'Sprachen', languages: [{ name: 'Spanisch', level: 'Muttersprache' }, { name: 'Englisch', level: 'C2 · Verhandlungssicher' }],
    openTo: 'Offen für Umzug & Remote-Arbeit',
  },
  experience: {
    tag: 'Erfahrung', title: 'Berufserfahrung', subtitle: 'Sechs Jahre in Infrastruktur, Produktentwicklung und angewandter KI-Forschung.', currentLabel: 'Aktuell',
    items: [
      { period: 'Aug 2026 — Dez 2026', title: 'Research Assistant — Computational Systems', org: 'New Mexico State University', location: 'Las Cruces, NM, USA', badge: 'J-1 Research Scholar', bullets: ['Research Assistant bei Dr. Efren Delgado; Erweiterung früherer ML-Pipeline-Arbeit auf ein neues Forschungsumfeld.', 'Große Rechen-Workflows auf dem Discovery-Cluster: Job-Scheduling, Ressourcenzuweisung und Pipeline-Optimierung unter Linux/HPC.', 'Zusammenarbeit mit US-Fakultät und Forschenden in einem grenzüberschreitenden Team.'], tags: ['HPC', 'SLURM', 'Linux', 'PyTorch'], type: 'research', current: true },
      { period: 'Jan 2025 — Dez 2026', title: 'Machine Learning Engineer — Angewandte Forschung', org: 'Technologisches Institut Durango · TecNM', location: 'Durango, Mexiko', bullets: ['Entwurf und Training von Deep-Learning-Modellen (Python, PyTorch, Transformer) in einer End-to-End-KI-Pipeline.', 'Eigene GPU-beschleunigte Rechen-Engine (FFT-basiert, Checkpoint/Resume), bis zu 20× schneller als Referenztools.', 'Verteilte Großjobs auf dem Supercomputer Huapáctic (LNS-BUAP): SLURM, Queue-Optimierung, Nebenläufigkeit.'], tags: ['PyTorch', 'Transformers', 'GPU', 'SLURM', 'HPC'], type: 'research', current: true },
      { period: 'Nov 2022 — Aug 2024', title: 'React-Entwickler · Projektmanager', org: 'QACS', location: 'Durango, Mexiko', bullets: ['Leitung der Entwicklung und Optimierung von React-Webanwendungen mit Fokus auf Performance, Skalierbarkeit und UX.', 'Full-Stack-Arbeit mit JavaScript, HTML und CSS, Integration mit CMS wie WordPress (Elementor, Divi).', 'Führung funktionsübergreifender Teams und Zeitpläne für private und öffentliche Kunden.'], tags: ['React', 'JavaScript', 'WordPress', 'Projektmanagement'], type: 'work' },
      { period: 'Aug 2019 — Sep 2022', title: 'IT-Systemleiter', org: 'Magdalena Construcciones', location: 'Durango, Mexiko', bullets: ['Verwaltung und Wartung der Unternehmens-IT: Systembereitstellung, Upgrades und Support.', 'Stärkung der Netzwerksicherheit und Umsetzung von Best Practices zum Schutz sensibler Daten.', 'Entwicklung interner Software zur Steigerung der Effizienz und Workflow-Automatisierung.'], tags: ['IT-Infrastruktur', 'Netzwerksicherheit', 'Interne Tools'], type: 'work' },
    ],
  },
  education: {
    tag: 'Ausbildung', title: 'Akademischer Hintergrund',
    items: [
      { period: 'Jan 2025 — Dez 2026', title: 'M.Sc. Ingenieurwesen — Systems Engineering', place: 'Technologisches Institut Durango · TecNM', note: 'Graduiertenforschung in angewandter KI & HPC', icon: '🎓', highlight: true },
      { period: 'Jun 2025 — Nov 2025', title: 'Graduate Certificate Machine Learning mit Python', place: 'CIMAT — Zentrum für Mathematische Forschung', note: 'Deep Learning, Modelltraining & Evaluation', icon: '🧠' },
      { period: 'Jan 2024 — Jun 2024', title: 'Oracle Next Education — Back-End-Programm', place: 'Alura · Oracle ONE', note: 'Java, OOP, Back-End-Grundlagen', icon: '☕' },
      { period: 'Aug 2015 — Dez 2020', title: 'B.Sc. Biochemieingenieurwesen', place: 'Technologisches Institut Durango · TecNM', note: 'Ingenieurgrundlagen, quantitative Analyse', icon: '📐' },
    ],
  },
  projects: { tag: 'Portfolio', title: 'Projekte, die ich gebaut habe', subtitle: 'Web-Apps, Kundenseiten und Front-End-Experimente.' },
  courses: { tag: 'Nachweise', title: 'Zertifikate & Kurse' },
  trusted: { tag: 'Referenzen', title: 'Unternehmen und Institutionen, mit denen ich gearbeitet habe' },
  faq: {
    tag: 'FAQ', title: 'Häufige Fragen', subtitle: 'Alles, was Recruiter oder Partner wissen möchten.',
    items: [
      { question: 'Was machen Sie aktuell?', answer: 'Ich bin J-1 Research Scholar an der New Mexico State University (Research Assistant, Computational Systems) und betreibe große ML-Workloads auf dem Discovery-Cluster, während ich meinen M.Sc. in Systems Engineering am Technologischen Institut Durango abschließe.' },
      { question: 'Was ist Ihr Kern-Stack?', answer: 'Python und PyTorch für Deep Learning; Linux, SLURM und GPU-Computing für HPC; React, JavaScript und Node.js für Web. Überall Git.' },
      { question: 'Welche Rollen suchen Sie?', answer: 'Machine Learning Engineer, Data Engineer, HPC / Systems Engineer oder ML-orientierte Software-Rollen — remote oder vor Ort in den USA, Mexiko oder im Ausland.' },
      { question: 'Sind Sie umzugsbereit?', answer: 'Ja. Ich arbeite derzeit in Las Cruces, NM (USA) und bin offen für nationale oder internationale Umzüge sowie vollständig remote Positionen.' },
      { question: 'Wie gut ist Ihr Englisch?', answer: 'C2 — verhandlungssicher (offizielles EF SET-Zertifikat). Ich arbeite täglich mit US-Fakultät und schreibe technische Dokumentation auf Englisch.' },
      { question: 'Haben Sie Erfahrung mit Produktionssoftware?', answer: 'Ja: zwei Jahre Leitung der React-Entwicklung und des Projektmanagements bei QACS für private und öffentliche Kunden sowie drei Jahre Verwaltung von Unternehmens-IT und internen Tools.' },
    ],
  },
  banner: { tag: 'Open Source & öffentliche Arbeit', title: 'Mein Code auf GitHub', subtitle: 'Webprojekte, Experimente und Forschungs-Tooling.', button: 'GitHub-Profil ansehen' },
  contact: {
    tag: 'Kontakt', title: 'Lassen Sie uns etwas bauen', subtitle: 'Offen für ML- / Daten- / HPC-Rollen, Forschungskooperationen und Beratung.',
    name: 'Name', email: 'E-Mail', message: 'Nachricht', namePh: 'Ihr Name', emailPh: 'ihre@email.com', messagePh: 'Erzählen Sie mir von der Rolle oder dem Projekt...',
    send: 'Nachricht senden', sending: 'Wird gesendet...', required: 'Alle Felder sind erforderlich.',
    success: 'Nachricht gesendet! Ich melde mich bald.', error: 'Etwas ist schiefgelaufen. Schreiben Sie mir direkt.',
    labels: { email: 'E-Mail', whatsapp: 'WhatsApp', location: 'Standort', linkedin: 'LinkedIn' }, locationValue: 'Las Cruces, NM (USA) · Durango, MX',
  },
  footer: { role: 'Data Engineer · Machine Learning Engineer · HPC', nav: 'Navigation', contact: 'Kontakt', rights: 'Alle Rechte vorbehalten', built: 'Gebaut mit React & styled-components' },
};

// ─────────────── FRANÇAIS ───────────────
const fr = {
  nav: { home: 'Accueil', research: 'Recherche', about: 'À propos', experience: 'Expérience', projects: 'Projets', certificates: 'Certificats', faq: 'FAQ', contact: 'Contact', hire: 'Me contacter' },
  hero: {
    greeting: 'Bonjour, je suis',
    rolePrefix: 'Ingénieur',
    roles: ['Machine Learning', 'Data', 'Systèmes HPC', 'Logiciel Full Stack'],
    tagline: 'Je conçois des pipelines ML évolutifs, je construis des moteurs de calcul accélérés par GPU et j’exécute des charges batch à grande échelle sur des supercalculateurs Linux/SLURM — dans des centres de calcul nationaux et internationaux.',
    ctaPrimary: 'Télécharger le CV',
    ctaSecondary: 'Discutons',
    stats: [
      { value: '20×', label: 'plus rapide que les outils de référence (moteur GPU maison)' },
      { value: '2', label: 'centres de supercalcul (NMSU · LNS-BUAP)' },
      { value: '6+', label: 'années en IT & logiciel' },
      { value: 'C2', label: 'Anglais — maîtrise professionnelle complète' },
    ],
  },
  research: {
    tag: 'Recherche & université', title: 'Où je fais de la recherche', subtitle: 'Deux institutions, deux supercalculateurs, un pipeline ML transfrontalier.',
    nmsu: { location: 'Las Cruces, Nouveau-Mexique, États-Unis', role: 'Assistant de recherche — Systèmes computationnels', period: 'Août 2026 — Déc 2026', status: 'Actuel', desc: 'Assistant de recherche du Dr Efren Delgado, en étendant mes travaux sur les pipelines ML à un nouveau contexte de recherche appliquée aux États-Unis.', bullets: ['Workflows de calcul à grande échelle sur le cluster Discovery', 'Ordonnancement, allocation de ressources et optimisation de pipelines sous Linux/HPC', 'Collaboration transfrontalière avec des enseignants-chercheurs américains'] },
    itd: { name: 'Institut Technologique de Durango', location: 'Durango, Mexique', role: 'Ingénieur Machine Learning — Recherche appliquée', degree: 'Master en ingénierie (Ingénierie des systèmes)', period: 'Jan 2025 — Déc 2026', status: 'Chercheur diplômé', desc: 'Pipeline d’IA appliquée de bout en bout : de la conception de modèles deep learning à l’exécution distribuée sur un supercalculateur national.', bullets: ['Conception et entraînement de modèles deep learning (PyTorch, architectures Transformer)', 'Moteur de calcul accéléré par GPU conçu de zéro (FFT, checkpoint/reprise) — jusqu’à 20× plus rapide que les outils de référence', 'Gestion de jobs distribués sur le supercalculateur Huapáctic (LNS-BUAP) : SLURM, optimisation des files, concurrence'] },
    compute: { title: 'Infrastructures de calcul utilisées', items: [
      { name: 'Discovery', org: 'New Mexico State University', desc: 'Cluster Linux/SLURM · partitions GPU · grosses charges batch', flag: '🇺🇸' },
      { name: 'Huapáctic', org: 'LNS-BUAP · Laboratoire national de supercalcul', desc: 'Supercalculateur national · jobs distribués · optimisation des files', flag: '🇲🇽' },
      { name: 'Moteur GPU maison', org: 'Recherche appliquée ITD', desc: 'Basé FFT, checkpoint/reprise, 20× plus rapide que les outils de référence', flag: '⚡' },
    ] },
  },
  about: {
    tag: 'À propos', title: 'De l’infrastructure IT au\nmachine learning à l’échelle du supercalcul',
    bio1: 'Je suis Héctor Ramón Martínez de la Hoya — ingénieur data et machine learning avec un parcours en développement logiciel, calcul distribué/HPC et IA appliquée.',
    bio2: 'J’ai commencé par gérer une infrastructure IT d’entreprise, puis le développement React et la gestion de projet ; aujourd’hui je conçois des systèmes ML accélérés par GPU et je gère des charges batch à grande échelle sur des supercalculateurs Linux/SLURM au Mexique et aux États-Unis.',
    bio3: 'Je traduis des exigences techniques en solutions prêtes pour la production et je m’épanouis dans des équipes pluridisciplinaires et transfrontalières.',
    skillsTitle: 'Compétences techniques',
    skillGroups: [
      { title: 'Programmation', items: ['Python', 'JavaScript', 'Java', 'Bash'] },
      { title: 'Systèmes & HPC', items: ['Linux', 'Ordonnancement SLURM', 'Calcul distribué / HPC', 'Calcul accéléré GPU', 'Discovery (NMSU)', 'Huapáctic (LNS-BUAP)'] },
      { title: 'Données & IA', items: ['Machine Learning', 'Deep Learning', 'Transformers', 'Data Engineering', 'Analyse de données', 'Pipelines ML'] },
      { title: 'Frameworks & outils', items: ['PyTorch', 'React', 'Node.js', 'Git', 'PostgreSQL', 'API REST'] },
      { title: 'Web', items: ['HTML', 'CSS', 'WordPress', 'Elementor / Divi', 'Intégration CMS'] },
      { title: 'Soft skills', items: ['Leadership', 'Collaboration transverse', 'Résolution de problèmes', 'Rigueur'] },
    ],
    languagesTitle: 'Langues', languages: [{ name: 'Espagnol', level: 'Natif' }, { name: 'Anglais', level: 'C2 · Maîtrise professionnelle complète' }],
    openTo: 'Ouvert à la mobilité et au télétravail',
  },
  experience: {
    tag: 'Expérience', title: 'Expérience professionnelle', subtitle: 'Six ans entre infrastructure, ingénierie produit et recherche en IA appliquée.', currentLabel: 'Actuel',
    items: [
      { period: 'Août 2026 — Déc 2026', title: 'Assistant de recherche — Systèmes computationnels', org: 'New Mexico State University', location: 'Las Cruces, NM, États-Unis', badge: 'J-1 Research Scholar', bullets: ['Assistant de recherche du Dr Efren Delgado, en étendant les travaux ML antérieurs à un nouveau contexte de recherche appliquée.', 'Workflows de calcul à grande échelle sur le cluster Discovery : ordonnancement, allocation de ressources et optimisation de pipelines sous Linux/HPC.', 'Collaboration avec des chercheurs américains au sein d’une équipe technique transfrontalière.'], tags: ['HPC', 'SLURM', 'Linux', 'PyTorch'], type: 'research', current: true },
      { period: 'Jan 2025 — Déc 2026', title: 'Ingénieur Machine Learning — Recherche appliquée', org: 'Institut Technologique de Durango · TecNM', location: 'Durango, Mexique', bullets: ['Conception et entraînement de modèles deep learning (Python, PyTorch, Transformer) dans un pipeline d’IA de bout en bout.', 'Moteur de calcul GPU maison (FFT, checkpoint/reprise), jusqu’à 20× plus rapide que les outils de référence.', 'Gestion de jobs distribués sur le supercalculateur Huapáctic (LNS-BUAP) : SLURM, optimisation des files, concurrence sous Linux.'], tags: ['PyTorch', 'Transformers', 'GPU', 'SLURM', 'HPC'], type: 'research', current: true },
      { period: 'Nov 2022 — Août 2024', title: 'Développeur React · Chef de projet', org: 'QACS', location: 'Durango, Mexique', bullets: ['Direction du développement et de l’optimisation d’applications React (performance, scalabilité, UX).', 'Travail full-stack en JavaScript, HTML et CSS, intégration avec des CMS comme WordPress (Elementor, Divi).', 'Gestion d’équipes transverses et de plannings pour des clients privés et publics.'], tags: ['React', 'JavaScript', 'WordPress', 'Gestion de projet'], type: 'work' },
      { period: 'Août 2019 — Sep 2022', title: 'Responsable systèmes IT', org: 'Magdalena Construcciones', location: 'Durango, Mexique', bullets: ['Gestion et maintenance de l’infrastructure IT d’entreprise : déploiement, mises à niveau et support.', 'Renforcement de la sécurité réseau et mise en place de bonnes pratiques de protection des données.', 'Développement de logiciels internes pour améliorer l’efficacité et automatiser les flux.'], tags: ['Infrastructure IT', 'Sécurité réseau', 'Outils internes'], type: 'work' },
    ],
  },
  education: {
    tag: 'Formation', title: 'Parcours académique',
    items: [
      { period: 'Jan 2025 — Déc 2026', title: 'Master en ingénierie — Ingénierie des systèmes', place: 'Institut Technologique de Durango · TecNM', note: 'Recherche en IA appliquée & HPC', icon: '🎓', highlight: true },
      { period: 'Juin 2025 — Nov 2025', title: 'Certificat Machine Learning avec Python', place: 'CIMAT — Centre de recherche en mathématiques', note: 'Deep learning, entraînement & évaluation de modèles', icon: '🧠' },
      { period: 'Jan 2024 — Juin 2024', title: 'Oracle Next Education — Programme Back-End', place: 'Alura · Oracle ONE', note: 'Java, POO, fondamentaux back-end', icon: '☕' },
      { period: 'Août 2015 — Déc 2020', title: 'Licence en génie biochimique', place: 'Institut Technologique de Durango · TecNM', note: 'Bases d’ingénierie, analyse quantitative', icon: '📐' },
    ],
  },
  projects: { tag: 'Portfolio', title: 'Projets réalisés', subtitle: 'Applications web, sites clients et expérimentations front-end.' },
  courses: { tag: 'Certifications', title: 'Certificats & formations' },
  trusted: { tag: 'Ils me font confiance', title: 'Entreprises et institutions avec lesquelles j’ai travaillé' },
  faq: {
    tag: 'FAQ', title: 'Questions fréquentes', subtitle: 'Tout ce qu’un recruteur ou partenaire voudrait savoir.',
    items: [
      { question: 'Que faites-vous actuellement ?', answer: 'Je suis J-1 Research Scholar à la New Mexico State University (assistant de recherche en systèmes computationnels), exécutant des charges ML à grande échelle sur le cluster Discovery, tout en terminant mon master en ingénierie des systèmes à l’Institut Technologique de Durango.' },
      { question: 'Quel est votre stack principal ?', answer: 'Python et PyTorch pour le deep learning ; Linux, SLURM et calcul GPU pour le HPC ; React, JavaScript et Node.js pour le web. Git partout.' },
      { question: 'Quels rôles recherchez-vous ?', answer: 'Machine Learning Engineer, Data Engineer, HPC / Systems Engineer ou postes logiciels orientés ML — à distance ou sur site aux États-Unis, au Mexique ou ailleurs.' },
      { question: 'Êtes-vous mobile ?', answer: 'Oui. Je travaille actuellement à Las Cruces, NM (États-Unis) et je suis ouvert à une mobilité nationale ou internationale, ainsi qu’aux postes entièrement à distance.' },
      { question: 'Quel est votre niveau d’anglais ?', answer: 'C2 — maîtrise professionnelle complète (certificat officiel EF SET). Je travaille au quotidien avec des chercheurs américains et rédige la documentation technique en anglais.' },
      { question: 'Avez-vous de l’expérience en logiciel de production ?', answer: 'Oui : deux ans à diriger le développement React et la gestion de projet chez QACS pour des clients privés et publics, et trois ans à gérer une infrastructure IT d’entreprise et des outils internes.' },
    ],
  },
  banner: { tag: 'Open source & travaux publics', title: 'Découvrez mon code sur GitHub', subtitle: 'Projets web, expérimentations et outils de recherche.', button: 'Voir le profil GitHub' },
  contact: {
    tag: 'Contact', title: 'Construisons quelque chose', subtitle: 'Ouvert aux rôles ML / data / HPC, aux collaborations de recherche et au conseil.',
    name: 'Nom', email: 'E-mail', message: 'Message', namePh: 'Votre nom', emailPh: 'votre@email.com', messagePh: 'Parlez-moi du poste ou du projet...',
    send: 'Envoyer', sending: 'Envoi...', required: 'Tous les champs sont obligatoires.',
    success: 'Message envoyé ! Je vous réponds bientôt.', error: 'Une erreur est survenue. Écrivez-moi directement.',
    labels: { email: 'E-mail', whatsapp: 'WhatsApp', location: 'Localisation', linkedin: 'LinkedIn' }, locationValue: 'Las Cruces, NM (États-Unis) · Durango, MX',
  },
  footer: { role: 'Data Engineer · Machine Learning Engineer · HPC', nav: 'Navigation', contact: 'Contact', rights: 'Tous droits réservés', built: 'Construit avec React & styled-components' },
};

// ─────────────── 中文 ───────────────
const zh = {
  nav: { home: '首页', research: '科研', about: '关于我', experience: '经历', projects: '项目', certificates: '证书', faq: '常见问题', contact: '联系', hire: '联系我' },
  hero: {
    greeting: '你好，我是',
    rolePrefix: '数据与',
    roles: ['机器学习工程师', 'HPC / 系统工程师', '数据工程师', '全栈开发者'],
    tagline: '我设计可扩展的机器学习流水线，构建 GPU 加速的计算引擎，并在国内外超算中心的 Linux/SLURM 超级计算机上运行大规模批处理任务。',
    ctaPrimary: '下载简历',
    ctaSecondary: '联系我',
    stats: [
      { value: '20×', label: '比参考工具更快（自研 GPU 引擎）' },
      { value: '2', label: '个超算中心（NMSU · LNS-BUAP）' },
      { value: '6+', label: '年 IT 与软件经验' },
      { value: 'C2', label: '英语 — 专业级流利' },
    ],
  },
  research: {
    tag: '科研与学术', title: '我的科研所在', subtitle: '两所机构，两台超级计算机，一条跨境机器学习流水线。',
    nmsu: { name: '新墨西哥州立大学', location: '美国新墨西哥州拉斯克鲁塞斯', role: '研究助理 — 计算系统', period: '2026年8月 — 2026年12月', status: '在职', desc: '担任 Efren Delgado 博士的研究助理，将我的 ML 流水线工作扩展到美国的新应用研究场景。', bullets: ['在 Discovery 超算集群上运行大规模计算工作流', 'Linux/HPC 环境下的作业调度、资源分配与流水线优化', '与美国教师和研究人员开展跨境协作'] },
    itd: { name: '杜兰戈理工学院', subname: '墨西哥国家理工学院', location: '墨西哥杜兰戈', role: '机器学习工程师 — 应用研究', degree: '工程硕士（系统工程）', period: '2025年1月 — 2026年12月', status: '研究生研究员', desc: '端到端应用 AI 流水线：从深度学习模型设计到在国家超级计算机上的分布式执行。', bullets: ['设计并训练深度学习模型（PyTorch，Transformer 架构）', '从零构建 GPU 加速 FFT 引擎，支持断点续算 — 比参考工具快达 20 倍', '在 LNS-BUAP Huapáctic 超级计算机上管理分布式作业：SLURM 调度、队列优化与并发'] },
    compute: { title: '我使用过的计算平台', items: [
      { name: 'Discovery', org: '新墨西哥州立大学', desc: 'Linux/SLURM 集群 · GPU 分区 · 大规模批处理', flag: '🇺🇸' },
      { name: 'Huapáctic', org: 'LNS-BUAP · 国家超算实验室', desc: '国家超级计算机 · 分布式作业 · 队列优化', flag: '🇲🇽' },
      { name: '自研 GPU 引擎', org: 'ITD 应用研究', desc: '基于 FFT，断点续算，比参考工具快 20 倍', flag: '⚡' },
    ] },
  },
  about: {
    tag: '关于我', title: '从 IT 基础设施到\n超算级机器学习',
    bio1: '我是 Héctor Ramón Martínez de la Hoya — 数据工程师与机器学习工程师，拥有软件开发、分布式/HPC 计算与应用 AI 背景。',
    bio2: '我从管理企业 IT 基础设施起步，转向 React 开发与项目管理，如今在墨西哥和美国的 Linux/SLURM 超级计算机上构建 GPU 加速的 ML 系统并管理大规模批处理任务。',
    bio3: '我擅长把技术需求转化为可投入生产的方案，并乐于在跨学科、跨境团队中工作。',
    skillsTitle: '技术技能',
    skillGroups: [
      { title: '编程', items: ['Python', 'JavaScript', 'Java', 'Bash'] },
      { title: '系统与 HPC', items: ['Linux', 'SLURM 作业调度', '分布式 / HPC 计算', 'GPU 加速计算', 'Discovery (NMSU)', 'Huapáctic (LNS-BUAP)'] },
      { title: '数据与 AI', items: ['机器学习', '深度学习', 'Transformers', '数据工程', '数据分析', 'ML 流水线'] },
      { title: '框架与工具', items: ['PyTorch', 'React', 'Node.js', 'Git', 'PostgreSQL', 'REST API'] },
      { title: 'Web', items: ['HTML', 'CSS', 'WordPress', 'Elementor / Divi', 'CMS 集成'] },
      { title: '软技能', items: ['领导力', '跨职能协作', '问题解决', '注重细节'] },
    ],
    languagesTitle: '语言', languages: [{ name: '西班牙语', level: '母语' }, { name: '英语', level: 'C2 · 专业级流利' }],
    openTo: '接受搬迁与远程工作',
  },
  experience: {
    tag: '经历', title: '职业经历', subtitle: '六年横跨基础设施、产品工程与应用 AI 研究。', currentLabel: '在职',
    items: [
      { period: '2026年8月 — 2026年12月', title: '研究助理 — 计算系统', org: '新墨西哥州立大学', location: '美国新墨西哥州拉斯克鲁塞斯', badge: 'J-1 Research Scholar', bullets: ['担任 Efren Delgado 博士的研究助理，将此前的 ML 流水线工作扩展到新的应用研究场景。', '在 Discovery 超算集群上执行大规模计算工作流：Linux/HPC 环境下的作业调度、资源分配与流水线优化。', '在跨境技术团队中与美国教师和研究人员协作。'], tags: ['HPC', 'SLURM', 'Linux', 'PyTorch'], type: 'research', current: true },
      { period: '2025年1月 — 2026年12月', title: '机器学习工程师 — 应用研究', org: '杜兰戈理工学院 · TecNM', location: '墨西哥杜兰戈', bullets: ['在端到端应用 AI 流水线中设计并训练深度学习模型（Python、PyTorch、Transformer 架构）。', '从零构建自研 GPU 加速计算引擎（基于 FFT，支持断点续算），处理速度比参考工具快达 20 倍。', '在 LNS-BUAP Huapáctic 超级计算机上管理大规模分布式作业：SLURM 调度、队列优化与 Linux 并发处理。'], tags: ['PyTorch', 'Transformers', 'GPU', 'SLURM', 'HPC'], type: 'research', current: true },
      { period: '2022年11月 — 2024年8月', title: 'React 开发者 · 项目经理', org: 'QACS', location: '墨西哥杜兰戈', bullets: ['主导 React Web 应用的开发与优化，聚焦性能、可扩展性与用户体验。', '使用 JavaScript、HTML 和 CSS 进行全栈开发，并与 WordPress（Elementor、Divi）等 CMS 集成。', '管理跨职能团队与项目进度，为私营和政府客户交付数字化方案。'], tags: ['React', 'JavaScript', 'WordPress', '项目管理'], type: 'work' },
      { period: '2019年8月 — 2022年9月', title: 'IT 系统经理', org: 'Magdalena Construcciones', location: '墨西哥杜兰戈', bullets: ['管理并维护企业 IT 基础设施：系统部署、升级与持续支持。', '加强网络安全并落实最佳实践，保护敏感业务数据。', '开发并部署内部软件，提升运营效率与流程自动化。'], tags: ['IT 基础设施', '网络安全', '内部工具'], type: 'work' },
    ],
  },
  education: {
    tag: '教育', title: '学术背景',
    items: [
      { period: '2025年1月 — 2026年12月', title: '工程硕士 — 系统工程', place: '杜兰戈理工学院 · 墨西哥国家理工学院', note: '应用 AI 与 HPC 方向研究生研究', icon: '🎓', highlight: true },
      { period: '2025年6月 — 2025年11月', title: 'Python 机器学习研究生证书', place: 'CIMAT — 数学研究中心', note: '深度学习、模型训练与评估', icon: '🧠' },
      { period: '2024年1月 — 2024年6月', title: 'Oracle Next Education — 后端项目', place: 'Alura · Oracle ONE', note: 'Java、面向对象、后端基础', icon: '☕' },
      { period: '2015年8月 — 2020年12月', title: '生物化学工程学士', place: '杜兰戈理工学院 · 墨西哥国家理工学院', note: '工程基础与定量分析', icon: '📐' },
    ],
  },
  projects: { tag: '作品集', title: '我构建的项目', subtitle: 'Web 应用、客户网站与前端实验。' },
  courses: { tag: '资质', title: '证书与课程' },
  trusted: { tag: '合作方', title: '合作过的企业与机构' },
  faq: {
    tag: '常见问题', title: '常见问题解答', subtitle: '招聘方或合作者想了解的一切。',
    items: [
      { question: '您目前在做什么？', answer: '我是新墨西哥州立大学的 J-1 Research Scholar（计算系统研究助理），在 Discovery 集群上运行大规模 ML 任务，同时在杜兰戈理工学院完成系统工程硕士学位。' },
      { question: '您的核心技术栈是什么？', answer: '深度学习：Python 与 PyTorch；HPC：Linux、SLURM 与 GPU 计算；Web：React、JavaScript 与 Node.js。全程使用 Git。' },
      { question: '您在寻找什么样的职位？', answer: '机器学习工程师、数据工程师、HPC / 系统工程师，或面向 ML 的软件岗位 — 美国、墨西哥或海外，远程或现场均可。' },
      { question: '您接受搬迁吗？', answer: '接受。我目前在美国新墨西哥州拉斯克鲁塞斯工作，愿意在国内或国际搬迁，也接受完全远程的职位。' },
      { question: '您的英语水平如何？', answer: 'C2 — 专业级流利（EF SET 官方证书）。我每天与美国教师协作，并用英语撰写技术文档。' },
      { question: '您有生产级软件经验吗？', answer: '有：在 QACS 主导 React 开发与项目管理两年，服务私营与政府客户；此前管理企业 IT 基础设施与内部工具三年。' },
    ],
  },
  banner: { tag: '开源与公开项目', title: '在 GitHub 上查看我的代码', subtitle: 'Web 项目、实验与科研工具。', button: '查看 GitHub 主页' },
  contact: {
    tag: '联系我', title: '一起做点什么', subtitle: '欢迎 ML / 数据 / HPC 职位、科研合作与咨询。',
    name: '姓名', email: '电子邮件', message: '留言', namePh: '您的姓名', emailPh: '您的邮箱', messagePh: '请介绍职位或项目...',
    send: '发送消息', sending: '发送中...', required: '所有字段均为必填项。',
    success: '消息已发送！我会尽快回复。', error: '出现错误，请直接发邮件联系我。',
    labels: { email: '邮件', whatsapp: 'WhatsApp', location: '位置', linkedin: 'LinkedIn' }, locationValue: '美国拉斯克鲁塞斯 · 墨西哥杜兰戈',
  },
  footer: { role: '数据工程师 · 机器学习工程师 · HPC', nav: '导航', contact: '联系', rights: '版权所有', built: '使用 React & styled-components 构建' },
};

export const translations = { en, es, de, fr, zh };

export const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'ES', full: 'Español', flag: '🇲🇽' },
  { code: 'de', label: 'DE', full: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'FR', full: 'Français', flag: '🇫🇷' },
  { code: 'zh', label: 'ZH', full: '中文', flag: '🇨🇳' },
];

export const SUPPORTED_LANGS = ['en', 'es', 'de', 'fr', 'zh'];

export function detectBrowserLang() {
  const nav = navigator.language || navigator.userLanguage || 'en';
  const code = nav.split('-')[0].toLowerCase();
  return SUPPORTED_LANGS.includes(code) ? code : 'en';
}
