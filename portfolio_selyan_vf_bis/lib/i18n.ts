export type Lang = "fr" | "en" | "es" | "ko";

const s: Record<string, Record<Lang, string>> = {
  /* ── UI chrome ── */
  portfolioTitle:   { fr: "Portfolio de Selyan", en: "Selyan's Portfolio", es: "Portafolio de Selyan", ko: "셀리안의 포트폴리오" },
  clickToExplore:   { fr: "Cliquez sur une icône pour explorer", en: "Click an icon to explore", es: "Haz clic en un icono para explorar", ko: "아이콘을 클릭하여 탐색하세요" },
  openToWork:       { fr: "Open to work - freelance", en: "Open to work - freelance", es: "Open to work - freelance", ko: "Open to work - freelance" },
  getInTouch:       { fr: "Freelance", en: "Freelance", es: "Freelance", ko: "Freelance" },
  contactDesc:      { fr: "N'hésitez pas à me contacter pour une collaboration, une opportunité de stage ou simplement pour échanger !", en: "Feel free to reach out for collaboration, internship opportunities or just to connect!", es: "¡No dudes en contactarme para una colaboración, oportunidades de prácticas o simplemente para conectar!", ko: "협업, 인턴십 기회, 또는 간단히 연결하고 싶으시면 편하게 연락해주세요!" },
  scanToConnect:    { fr: "Scannez pour vous connecter", en: "Scan to connect", es: "Escanea para conectar", ko: "스캔하여 연결하기" },
  comingSoonFor:    { fr: "Contenu à venir pour", en: "Content coming soon for", es: "Contenido próximo para", ko: "곧 콘텐츠가 추가됩니다:" },
  scrollDown:       { fr: "Scrollez pour explorer ↓", en: "Scroll to explore ↓", es: "Desplázate para explorar ↓", ko: "스크롤하여 탐색하기 ↓" },

  /* ── Icon labels ── */
  label_cubes:        { fr: "Projets", en: "Projects", es: "Proyectos", ko: "프로젝트" },
  label_phone:        { fr: "Expérience", en: "Experience", es: "Experiencia", ko: "경력" },
  label_textCard:     { fr: "Formation", en: "Education", es: "Formación", ko: "학력" },
  label_polyhedron:   { fr: "À propos", en: "About", es: "Acerca de", ko: "소개" },
  label_toggleStack:  { fr: "Tech & Compétences", en: "Tech Stack & Skills", es: "Tech & Habilidades", ko: "기술 스택 & 역량" },
  label_palette:      { fr: "Passions", en: "Passions", es: "Pasiones", ko: "관심사" },
  label_ai:           { fr: "Recherche de Stage", en: "Internship Search", es: "Búsqueda de Prácticas", ko: "인턴십 탐색" },
  label_dots:         { fr: "Certifications", en: "Certifications", es: "Certificaciones", ko: "자격증" },

  /* ── About ── */
  about_hello:        { fr: "Bonjour ! Je suis", en: "Hello! I'm", es: "¡Hola! Soy", ko: "안녕하세요! 저는" },
  about_desc:         { fr: ", étudiant en première année d'école d'ingénieur à l'Université de Technologie de Troyes. Curieux, rigoureux et motivé, j'aime construire des projets numériques, découvrir de nouvelles technologies et apprendre par la pratique.", en: ", a first-year engineering student at the University of Technology of Troyes. Curious, rigorous and motivated, I enjoy building digital projects, discovering new technologies and learning through hands-on experience.", es: ", estudiante de primer año de ingeniería en la Universidad de Tecnología de Troyes. Curioso, riguroso y motivado, disfruto creando proyectos digitales, descubriendo nuevas tecnologías y aprendiendo de forma práctica.", ko: ", 트루아 공과대학교 1학년 공학도입니다. 호기심, 꼼꼼함, 열정을 갖고 디지털 프로젝트를 만들고, 새로운 기술을 탐구하며, 실습을 통해 배우는 것을 즐깁니다." },
  about_skills:       { fr: "développement web, projets numériques & résolution de problèmes", en: "web development, digital projects & problem-solving", es: "desarrollo web, proyectos digitales y resolución de problemas", ko: "웹 개발, 디지털 프로젝트 & 문제 해결" },
  about_sub:          { fr: "Actuellement à la recherche d'expériences pratiques pour renforcer mes compétences dans l'ingénierie, la tech et les environnements orientés projets.", en: "Currently looking to strengthen my skills through practical experiences in engineering, tech and project-based environments.", es: "Actualmente buscando fortalecer mis habilidades a través de experiencias prácticas en ingeniería, tecnología y entornos basados en proyectos.", ko: "현재 공학, 기술 및 프로젝트 기반 환경에서의 실무 경험을 통해 역량을 강화하고자 합니다." },
  about_langTitle:    { fr: "Langues", en: "Languages", es: "Idiomas", ko: "언어" },
  lang_french:        { fr: "Français — Natif", en: "French — Native", es: "Francés — Nativo", ko: "프랑스어 — 원어민" },
  lang_english:       { fr: "Anglais — C1+ Linguaskill Cambridge", en: "English — C1+ Linguaskill Cambridge", es: "Inglés — C1+ Linguaskill Cambridge", ko: "영어 — C1+ Linguaskill Cambridge" },
  lang_spanish:       { fr: "Espagnol — B1 SIELE", en: "Spanish — B1 SIELE", es: "Español — B1 SIELE", ko: "스페인어 — B1 SIELE" },
  about_projects_combine: { fr: "", en: "", es: "", ko: "" },

  /* ── Experience ── */
  exp_nereides_role:      { fr: "Responsable Partenariat", en: "Partnership Manager", es: "Responsable de Alianzas", ko: "파트너십 매니저" },
  exp_nereides_period:    { fr: "Oct. 2025 – Aujourd'hui · Troyes", en: "Oct 2025 – Present · Troyes", es: "Oct. 2025 – Actualidad · Troyes", ko: "2025년 10월 – 현재 · 트루아" },
  exp_nereides_b1:        { fr: "Gestion et développement du réseau de partenaires.", en: "Managed and expanded the partner network.", es: "Gestión y desarrollo de la red de socios.", ko: "파트너 네트워크를 관리하고 확장했습니다." },
  exp_nereides_b2:        { fr: "Mise en place d'outils de suivi et optimisation des processus de communication interne.", en: "Set up monitoring tools and improved internal communication processes.", es: "Implementación de herramientas de seguimiento y optimización de procesos de comunicación interna.", ko: "추적 도구를 구축하고 내부 커뮤니케이션 프로세스를 최적화했습니다." },

  exp_icistore_role:      { fr: "Opérateur polyvalent en atelier", en: "Multi-skilled Workshop Operator", es: "Operador polivalente de taller", ko: "다기능 작업장 오퍼레이터" },
  exp_icistore_period:    { fr: "Août 2025 · Monteux", en: "Aug 2025 · Monteux", es: "Ago. 2025 · Monteux", ko: "2025년 8월 · 몽퇴" },
  exp_icistore_b1:        { fr: "Application stricte des protocoles de fabrication et des normes de sécurité.", en: "Strictly applied manufacturing protocols and safety standards.", es: "Aplicación estricta de protocolos de fabricación y normas de seguridad.", ko: "제조 프로토콜과 안전 기준을 엄격히 적용했습니다." },
  exp_icistore_b2:        { fr: "Participation aux opérations de production et de logistique en atelier.", en: "Contributed to production and workshop logistics operations.", es: "Participación en operaciones de producción y logística de taller.", ko: "작업장 생산 및 물류 운영에 참여했습니다." },

  exp_littlebagel_role:   { fr: "Équipier polyvalent", en: "Team Member", es: "Miembro de equipo", ko: "팀원" },
  exp_littlebagel_period: { fr: "Été 2023 & 2024 · Avignon", en: "Summer 2023 & 2024 · Avignon", es: "Verano 2023 y 2024 · Avignon", ko: "2023·2024 여름 · 아비뇽" },
  exp_littlebagel_b1:     { fr: "Accueil et service des clients.", en: "Welcoming and assisting customers.", es: "Atención y servicio al cliente.", ko: "고객 응대 및 서비스." },
  exp_littlebagel_b2:     { fr: "Préparation des commandes et service au bar.", en: "Order preparation and barista duties.", es: "Preparación de pedidos y servicio de bar.", ko: "주문 준비 및 바리스타 업무." },
  exp_littlebagel_b3:     { fr: "Développement de compétences en service client, réactivité et travail d'équipe.", en: "Developed customer service, responsiveness and teamwork skills.", es: "Desarrollo de habilidades en atención al cliente, capacidad de respuesta y trabajo en equipo.", ko: "고객 서비스, 대응력, 팀워크 역량 개발." },

  exp_helios_role:        { fr: "Assistant administratif", en: "Administrative Assistant", es: "Asistente administrativo", ko: "행정 보조" },
  exp_helios_period:      { fr: "2023 · Carpentras", en: "2023 · Carpentras", es: "2023 · Carpentras", ko: "2023 · 카르팡트라" },
  exp_helios_b1:          { fr: "Tri et classement de documents selon différents critères.", en: "Sorting and filing documents according to different criteria.", es: "Clasificación y archivo de documentos según distintos criterios.", ko: "다양한 기준에 따른 문서 분류 및 정리." },
  exp_helios_b2:          { fr: "Acquisition d'une expérience en organisation numérique et processus administratifs.", en: "Gained experience in digital file organization and administrative processes.", es: "Adquisición de experiencia en organización digital y procesos administrativos.", ko: "디지털 파일 관리 및 행정 프로세스 경험 습득." },

  exp_hospital_role:      { fr: "Stagiaire d'observation", en: "Observation Intern", es: "Pasante de observación", ko: "관찰 실습생" },
  exp_hospital_period:    { fr: "Juin 2022 · Avignon", en: "June 2022 · Avignon", es: "Junio 2022 · Avignon", ko: "2022년 6월 · 아비뇽" },
  exp_hospital_b1:        { fr: "Collaboration avec infirmiers, médecins et kinésithérapeutes.", en: "Collaborated with nurses, doctors and physiotherapists.", es: "Colaboración con enfermeros, médicos y fisioterapeutas.", ko: "간호사, 의사, 물리치료사와의 협업." },
  exp_hospital_b2:        { fr: "Développement de l'écoute active et du sens de l'observation en milieu professionnel.", en: "Developed active listening and observation skills in a professional environment.", es: "Desarrollo de la escucha activa y la observación en un entorno profesional.", ko: "전문 환경에서의 경청 및 관찰 능력 개발." },

  exp_pediatric_role:     { fr: "Stagiaire d'observation", en: "Observation Intern", es: "Pasante de observación", ko: "관찰 실습생" },
  exp_pediatric_period:   { fr: "Juillet 2022 · Carpentras", en: "July 2022 · Carpentras", es: "Julio 2022 · Carpentras", ko: "2022년 7월 · 카르팡트라" },
  exp_pediatric_b1:       { fr: "Utilisation de logiciels de planification de rendez-vous.", en: "Used appointment scheduling software.", es: "Uso de software de planificación de citas.", ko: "예약 일정 관리 소프트웨어 사용." },
  exp_pediatric_b2:       { fr: "Renforcement des compétences en communication interpersonnelle et contact humain.", en: "Strengthened interpersonal communication and human contact skills.", es: "Fortalecimiento de habilidades de comunicación interpersonal y contacto humano.", ko: "대인 커뮤니케이션 및 인간관계 역량 강화." },

  /* ── Education ── */
  edu_utt_title:      { fr: "Diplôme d'Ingénieur — UTT", en: "Engineering Degree — UTT", es: "Título de Ingeniero — UTT", ko: "공학 학위 — UTT" },
  edu_utt_period:     { fr: "2024 – Présent · Troyes, France", en: "2024 – Present · Troyes, France", es: "2024 – Presente · Troyes, Francia", ko: "2024 – 현재 · 트루아, 프랑스" },
  edu_utt_desc:       { fr: "Tronc commun ingénieur / Cycle préparatoire. Cours de mathématiques, informatique, physique, gestion de projet et langues vivantes.", en: "General Engineering Foundation / Preparatory Cycle. Courses in mathematics, computer science, physics, project management and modern languages.", es: "Ciclo preparatorio de ingeniería. Cursos de matemáticas, informática, física, gestión de proyectos e idiomas.", ko: "공학 예비과정. 수학, 컴퓨터 과학, 물리, 프로젝트 관리, 외국어 과정." },

  edu_mariepila_title:   { fr: "Baccalauréat Mention Bien — Marie Pila", en: "Baccalauréate with Honors — Marie Pila", es: "Bachillerato con Mención — Marie Pila", ko: "바칼로레아 우수 졸업 — Marie Pila" },
  edu_mariepila_period:  { fr: "2024 · Avignon, France", en: "2024 · Avignon, France", es: "2024 · Avignon, Francia", ko: "2024 · 아비뇽, 프랑스" },
  edu_mariepila_desc:    { fr: "Spécialités Mathématiques, Physique-Chimie. Lycée privé sous contrat, préparation solide aux études supérieures scientifiques.", en: "Major: Mathematics, Physics-Chemistry. Private high school providing strong preparation for scientific higher education.", es: "Especialidades: Matemáticas, Física-Química. Liceo privado con sólida preparación para estudios superiores científicos.", ko: "전공: 수학, 물리-화학. 과학 고등교육을 위한 탄탄한 준비과정." },

  edu_reynolds_title:    { fr: "Échange scolaire — Reynolds High School", en: "Student Exchange — Reynolds High School", es: "Intercambio — Reynolds High School", ko: "교환학생 — Reynolds High School" },
  edu_reynolds_period:   { fr: "2023 · Victoria BC, Canada", en: "2023 · Victoria BC, Canada", es: "2023 · Victoria BC, Canadá", ko: "2023 · 빅토리아 BC, 캐나다" },
  edu_reynolds_desc:     { fr: "Semestre d'échange international. Immersion anglophone complète, cours réguliers du système canadien et découverte culturelle.", en: "International exchange semester. Full English immersion, regular Canadian curriculum and cultural discovery.", es: "Semestre de intercambio internacional. Inmersión completa en inglés, currículo canadiense y descubrimiento cultural.", ko: "국제 교환 학기. 영어 완전 몰입, 캐나다 정규 교육과정 및 문화 체험." },

  /* ── Projects ── */
  proj_londres_desc:      { fr: "Site web thématique sur Londres axé sur la structuration du contenu, la présentation visuelle et l'expérience utilisateur.", en: "A London-themed website focused on content structure, visual presentation and user experience.", es: "Sitio web temático sobre Londres centrado en la estructura del contenido y la experiencia de usuario.", ko: "콘텐츠 구조와 사용자 경험에 중점을 둔 런던 테마 웹사이트." },
  proj_lo02_desc:         { fr: "Projet Java étudiant démontrant la logique de programmation orientée objet, le pattern MVC et la résolution de problèmes.", en: "A student Java project demonstrating OOP logic, MVC pattern and problem-solving.", es: "Proyecto Java estudiantil que demuestra lógica POO, patrón MVC y resolución de problemas.", ko: "OOP 논리, MVC 패턴, 문제 해결을 보여주는 학생 Java 프로젝트." },
  proj_natran_desc:       { fr: "Projet TypeScript explorant le développement structuré, les tests unitaires et les pratiques de code modernes.", en: "A TypeScript project exploring structured development, unit testing and modern coding practices.", es: "Proyecto TypeScript que explora desarrollo estructurado, testing y prácticas modernas.", ko: "구조화된 개발, 단위 테스트, 현대 코딩 방법론을 탐구하는 TypeScript 프로젝트." },
  proj_preview:           { fr: "Aperçu ↗", en: "Preview ↗", es: "Vista previa ↗", ko: "미리보기 ↗" },
  proj_visit:             { fr: "Voir ↗", en: "Visit ↗", es: "Ver ↗", ko: "방문 ↗" },

  /* ── Tech Stack ── */
  tech_intro:         { fr: "Technologies, frameworks & compétences avec lesquels je travaille.", en: "Technologies, frameworks & competencies I work with.", es: "Tecnologías, frameworks y competencias con las que trabajo.", ko: "제가 다루는 기술, 프레임워크 & 역량." },
  tech_frontend:      { fr: "Frontend", en: "Frontend", es: "Frontend", ko: "프론트엔드" },
  tech_backend:       { fr: "Backend", en: "Backend", es: "Backend", ko: "백엔드" },
  tech_aidata:        { fr: "IA & Data", en: "AI & Data", es: "IA & Data", ko: "AI & 데이터" },
  tech_tools:         { fr: "Outils & DevOps", en: "Tools & DevOps", es: "Herramientas & DevOps", ko: "도구 & DevOps" },
  tech_profSkills:    { fr: "Compétences Professionnelles", en: "Professional Skills", es: "Habilidades Profesionales", ko: "전문 기술" },
  tech_webMobile:     { fr: "Web & Mobile", en: "Web & Mobile", es: "Web & Mobile", ko: "웹 & 모바일" },
  tech_dataAnalytics: { fr: "Data & Analytics", en: "Data & Analytics", es: "Data & Analytics", ko: "데이터 & 분석" },
  tech_softSkills:    { fr: "Savoir-être", en: "Soft Skills", es: "Habilidades Blandas", ko: "소프트 스킬" },

  skill_teamwork:     { fr: "Travail d'équipe", en: "Teamwork", es: "Trabajo en equipo", ko: "팀워크" },
  skill_communication:{ fr: "Communication", en: "Communication", es: "Comunicación", ko: "커뮤니케이션" },
  skill_organization: { fr: "Organisation", en: "Organization", es: "Organización", ko: "조직력" },
  skill_adaptability: { fr: "Adaptabilité", en: "Adaptability", es: "Adaptabilidad", ko: "적응력" },
  skill_curiosity:    { fr: "Curiosité", en: "Curiosity", es: "Curiosidad", ko: "호기심" },
  skill_customer:     { fr: "Relation client", en: "Customer Interaction", es: "Atención al cliente", ko: "고객 응대" },

  /* ── Passions ── */
  passions_intro:     { fr: "Intérêts & passions qui me définissent au-delà du code.", en: "Interests & passions that shape who I am beyond code.", es: "Intereses y pasiones que me definen más allá del código.", ko: "코드 너머의 저를 형성하는 관심사 & 열정." },
  passion_karate:     { fr: "Karaté", en: "Karate", es: "Karate", ko: "가라테" },
  passion_karate_d:   { fr: "Ceinture noire — pratiquant depuis 10 ans. Compétiteur, plusieurs fois champion régional et interrégional. Discipline, concentration et persévérance.", en: "Black Belt — practicing for 10 years. Competitor, multiple times regional and inter-regional champion. Discipline, focus and perseverance.", es: "Cinturón negro — practicante desde hace 10 años. Competidor, varias veces campeón regional e interregional. Disciplina, concentración y perseverancia.", ko: "블랙벨트 — 10년간 수련. 지역 및 광역 대회 다회 우승. 규율, 집중, 인내." },
  passion_football:   { fr: "Football", en: "Football", es: "Fútbol", ko: "축구" },
  passion_football_d: { fr: "Passionné de ballon rond depuis 2 ans — esprit d'équipe, dépassement de soi et compétition.", en: "Playing for 2 years — team spirit, pushing limits and competition.", es: "Jugando desde hace 2 años — espíritu de equipo, superación y competición.", ko: "2년째 활동 중 — 팀 정신, 한계 돌파, 경쟁." },
  passion_motorsport: { fr: "Sport automobile", en: "Motorsport", es: "Automovilismo", ko: "모터스포츠" },
  passion_motorsport_d: { fr: "Passionné de course, d'ingénierie et de culture automobile.", en: "Passionate about racing, engineering and automotive culture.", es: "Apasionado por las carreras, la ingeniería y la cultura automotriz.", ko: "레이싱, 엔지니어링, 자동차 문화에 대한 열정." },
  passion_travel:     { fr: "Voyages", en: "Travelling", es: "Viajes", ko: "여행" },
  passion_travel_d:   { fr: "Canada, Suède, Pologne, Caraïbes, Panama… Découverte de nouvelles cultures et perspectives.", en: "Canada, Sweden, Poland, Caribbean, Panama… Discovering new cultures and perspectives.", es: "Canadá, Suecia, Polonia, Caribe, Panamá… Descubrimiento de nuevas culturas y perspectivas.", ko: "캐나다, 스웨덴, 폴란드, 카리브해, 파나마… 새로운 문화와 관점의 발견." },
  passion_economy:    { fr: "Économie, Géopolitique & Trading", en: "Economy, Geopolitics & Trading", es: "Economía, Geopolítica & Trading", ko: "경제, 지정학 & 트레이딩" },
  passion_economy_d:  { fr: "Passionné par les marchés financiers, la géopolitique et le trading.", en: "Passionate about financial markets, geopolitics and trading.", es: "Apasionado por los mercados financieros, la geopolítica y el trading.", ko: "금융 시장, 지정학, 트레이딩에 대한 열정." },
  passion_ai:         { fr: "IA, LLM & Machine Learning", en: "AI, LLM & Machine Learning", es: "IA, LLM & Machine Learning", ko: "AI, LLM & 머신러닝" },
  passion_ai_d:       { fr: "Fasciné par l'intelligence artificielle, les grands modèles de langage et l'apprentissage automatique.", en: "Fascinated by artificial intelligence, large language models and machine learning.", es: "Fascinado por la inteligencia artificial, los grandes modelos de lenguaje y el aprendizaje automático.", ko: "인공지능, 대규모 언어 모델, 머신러닝에 대한 관심." },


  /* ── Internship Search (replaces AI & Innovation) ── */
  intern_intro:       { fr: "Actuellement à la recherche d'opportunités pour compléter ma formation d'ingénieur par des expériences concrètes en entreprise.", en: "Currently looking for opportunities to complement my engineering studies with real-world professional experience.", es: "Actualmente en búsqueda de oportunidades para complementar mi formación con experiencia profesional real.", ko: "공학 학업을 보완할 실무 경험 기회를 찾고 있습니다." },
  intern_keyword:     { fr: "stage & summer programme", en: "internship & summer programme", es: "prácticas & programa de verano", ko: "인턴십 & 여름 프로그램" },
  intern_stage_title: { fr: "Stage ingénieur — Septembre 2027", en: "Engineering Internship — September 2027", es: "Prácticas de ingeniería — Septiembre 2027", ko: "공학 인턴십 — 2027년 9월" },
  intern_stage_desc:  { fr: "À la recherche d'un stage de 4 à 6 mois en ingénierie, développement ou gestion de projet technique.", en: "Looking for a 4-6 month internship in engineering, development or technical project management.", es: "En busca de prácticas de 4 a 6 meses en ingeniería, desarrollo o gestión de proyectos técnicos.", ko: "공학, 개발 또는 기술 프로젝트 관리 분야 4-6개월 인턴십을 찾고 있습니다." },
  intern_summer_title:{ fr: "Summer Programme — Été 2026 / 2027", en: "Summer Programme — Summer 2026 / 2027", es: "Programa de Verano — Verano 2026 / 2027", ko: "여름 프로그램 — 2026/2027 여름" },
  intern_summer_desc: { fr: "Intéressé par des programmes d'été en entreprise, en France ou à l'international, pour découvrir de nouveaux environnements professionnels.", en: "Interested in corporate summer programmes, in France or abroad, to discover new professional environments.", es: "Interesado en programas de verano corporativos, en Francia o en el extranjero, para descubrir nuevos entornos profesionales.", ko: "프랑스 또는 해외 기업 여름 프로그램에 관심이 있습니다." },
  intern_open:        { fr: "Ouvert à toute proposition — n'hésitez pas à me contacter !", en: "Open to any opportunity — feel free to reach out!", es: "Abierto a cualquier propuesta — ¡no dudes en contactarme!", ko: "모든 기회에 열려 있습니다 — 편하게 연락주세요!" },

  /* ── Certifications ── */
  cert_title:         { fr: "Certifications", en: "Certifications", es: "Certificaciones", ko: "자격증" },
  cert_karate:        { fr: "Ceinture noire de Karaté", en: "Black Belt in Karate", es: "Cinturón negro de Karate", ko: "가라테 블랙벨트" },
  cert_inrs:          { fr: "Prévention des risques professionnels — INRS", en: "Occupational Risk Prevention — INRS", es: "Prevención de riesgos laborales — INRS", ko: "산업 위험 예방 — INRS" },
  cert_inrs_detail:   { fr: "Attestation INRS · Santé et sécurité · ID 284831 · Janv. 2025", en: "INRS Certificate · Health & Safety · ID 284831 · Jan 2025", es: "Certificado INRS · Salud y seguridad · ID 284831 · Ene 2025", ko: "INRS 인증 · 보건 안전 · ID 284831 · 2025년 1월" },
  cert_lvmh:          { fr: "LVMH Inside Certificate", en: "LVMH Inside Certificate", es: "LVMH Inside Certificate", ko: "LVMH Inside 인증서" },
  cert_pse1:          { fr: "PSE1 — Premiers Secours en Équipe", en: "PSE1 — First Aid Team Responder", es: "PSE1 — Primeros Auxilios en Equipo", ko: "PSE1 — 팀 응급처치" },
  cert_linguaskill:   { fr: "Linguaskill Cambridge — C1+", en: "Linguaskill Cambridge — C1+", es: "Linguaskill Cambridge — C1+", ko: "Linguaskill Cambridge — C1+" },
  cert_siele:         { fr: "SIELE — Espagnol B1", en: "SIELE — Spanish B1", es: "SIELE — Español B1", ko: "SIELE — 스페인어 B1" },
};

export function t(key: string, lang: Lang): string {
  return s[key]?.[lang] ?? s[key]?.en ?? key;
}

/* Label map keyed by icon id */
const labelKeys: Record<string, string> = {
  cubes: "label_cubes",
  phone: "label_phone",
  "text-card": "label_textCard",
  polyhedron: "label_polyhedron",
  "toggle-stack": "label_toggleStack",
  palette: "label_palette",
  ai: "label_ai",
  dots: "label_dots",
};

export function getIconLabel(id: string, lang: Lang): string {
  const key = labelKeys[id];
  return key ? t(key, lang) : id;
}
