/**
 * Sarojini Swaminathan Portfolio
 * Circular Orbit Dial & Momentum Scroll Physics
 */

const portfolioItems = [
  {
    id: 1,
    title: "DataTracks Direct Filing Flow",
    category: "UI/UX DESIGN",
    role: "UI/UX Design Intern",
    year: "2026",
    colorTheme: "theme-tangelo",
    brief: "Engineered comprehensive direct filing flows and technical documentation for enterprise developer support.",
    overview: "Designed an end-to-end direct financial filing website and workflow tool, streamlining compliance operations and translating complex enterprise tax/regulatory filings into intuitive interactions.",
    deliverables: [
      "Engineered entire Direct Filing navigation flow and interactive form components.",
      "Produced design system documentation and UI specifications for frontend developer handoff.",
      "Conducted usability testing across data-heavy enterprise reporting interfaces."
    ],
    tags: ["UI/UX", "Enterprise Systems", "Specs & Specs Handoff", "Figma", "Design Systems"]
  },
  {
    id: 2,
    title: "SewnBySaro Upcycled Label",
    category: "ENTREPRENEURSHIP",
    role: "Founder & Creative Director",
    year: "2024 — Present",
    colorTheme: "theme-chocolate",
    brief: "Founded a circular sustainable fashion brand. Directed end-to-end design, sewing, sales, and marketing.",
    overview: "Launched and scaled an independent upcycled apparel and accessory label, bridging physical craftsmanship with digital brand curation, digital marketing, and sustainable materials.",
    deliverables: [
      "Designed and hand-sewed exclusive collections from post-consumer textiles.",
      "Managed full e-commerce operations, Instagram storefront, and product launches.",
      "Developed visual brand identity, packaging design, and campaign content."
    ],
    tags: ["Fashion Design", "Pattern Making", "Brand Strategy", "Content Direction", "Upcycling"]
  },
  {
    id: 3,
    title: "Discover India Program",
    category: "RESEARCH & EDITING",
    role: "Field Researcher & Lead Editor",
    year: "2026",
    colorTheme: "theme-botticelli",
    brief: "Field research, financial allocation, documentary film editing, and multi-disciplinary publication design.",
    overview: "Spearheaded collaborative on-site cultural field research across regional heritage ecosystems, synthesizing qualitative field interviews into an academic documentary and monograph publication.",
    deliverables: [
      "Directed and edited comprehensive documentary film footage and narratives.",
      "Managed project logistics, expenditure budgeting, and field schedules.",
      "Authored primary analytical research papers and compiled final field reports."
    ],
    tags: ["Ethnographic Research", "Video Editing", "Field Logistics", "Publication Design"]
  },
  {
    id: 4,
    title: "DakshinaChitra Museum",
    category: "CULTURAL GRAPHICS",
    role: "Design & Marketing Intern",
    year: "2025",
    colorTheme: "theme-tangelo",
    brief: "Crafted visual identities, visitor promotional ephemera, and print campaigns for heritage craft exhibits.",
    overview: "Collaborated with museum curators to create educational and promotional print materials, social media campaigns, and visual marketing assets honouring South Indian art and architectural history.",
    deliverables: [
      "Designed event posters, gallery brochures, and exhibition marketing collateral.",
      "Curated social media promotional campaigns boosting seasonal visitor footfall.",
      "Maintained cultural heritage aesthetic standards across print and digital media."
    ],
    tags: ["Graphic Design", "Print Ephemera", "Cultural Branding", "Marketing"]
  },
  {
    id: 5,
    title: "Creativano Decks & Brand",
    category: "VISUAL SYSTEMS",
    role: "Design Intern",
    year: "2026",
    colorTheme: "theme-chocolate",
    brief: "Designed high-impact internal presentation systems, brand guides, and strategic research briefs.",
    overview: "Produced high-converting presentation systems, visual narratives, and design research decks for corporate clients and internal strategy alignments.",
    deliverables: [
      "Constructed modular presentation slide templates and infographic kits.",
      "Synthesized visual documentation to support strategic agency decisions.",
      "Standardized typography and layout hierarchies for client-facing assets."
    ],
    tags: ["Pitch Decks", "Infographics", "Visual Hierarchy", "Adobe Creative Suite"]
  },
  {
    id: 6,
    title: "Code, Script & Interactive Tech",
    category: "ENGINEERING",
    role: "Design Technologist",
    year: "2024 — 2026",
    colorTheme: "theme-botticelli",
    brief: "Creative computational prototypes built using Python, HTML, JavaScript, and C++.",
    overview: "Bridging the gap between software engineering and human-centered design. Developing interactive web experiences, algorithms, and micro-tools to enhance user interaction.",
    deliverables: [
      "Programmed custom web interactions using vanilla JavaScript and CSS transforms.",
      "Built automation scripts and logic prototypes with Python and C++.",
      "Explored generative layout and digital-physical interface boundaries."
    ],
    tags: ["JavaScript", "HTML/CSS", "Python", "C++", "Creative Coding"]
  },
  {
    id: 7,
    title: "Athletics & Global Leadership",
    category: "LEADERSHIP",
    role: "School Captain & Athlete",
    year: "2022 — 2024",
    colorTheme: "theme-tangelo",
    brief: "Represented India at ISF International Games (14th Globally); 1st Place ISSO Nationals.",
    overview: "High-performance discipline developed through national and international basketball competitions, combined with serving as High School Captain (HLC International 2023–2024).",
    deliverables: [
      "ISF International Games (2024) — Represented India (Ranked 14th Globally).",
      "ISSO Nationals (2022) — 1st Place Champion, U18 Category.",
      "HLC International School Captain — Organized team initiatives and public speeches."
    ],
    tags: ["Team Leadership", "Resilience", "Public Speaking", "Global Representation"]
  }
];

// DOM Elements
const orbitWheel = document.getElementById("orbitWheel");
const stage = document.getElementById("stage");
const degReadout = document.getElementById("degReadout");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const recenterBtn = document.getElementById("recenterBtn");

// Modal Elements
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategoryTag = document.getElementById("modalCategoryTag");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalOverview = document.getElementById("modalOverview");
const modalDeliverables = document.getElementById("modalDeliverables");
const modalTags = document.getElementById("modalTags");

// Orbit Geometry Setup
const totalCards = portfolioItems.length;
const angleStep = 360 / totalCards;
let radius = calculateRadius();

function calculateRadius() {
  const w = window.innerWidth;
  if (w < 600) return 260;
  if (w < 1024) return 380;
  return 460;
}

window.addEventListener("resize", () => {
  radius = calculateRadius();
  renderCards();
});

// Render cards into orbit
function createCardElements() {
  orbitWheel.innerHTML = "";
  portfolioItems.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "orbit-card-wrapper";
    wrapper.dataset.index = index;

    wrapper.innerHTML = `
      <div class="flip-card" onclick="openProjectModal(${item.id})">
        <!-- Face Front (Solid Color, Clean Minimalist) -->
        <div class="flip-face card-front ${item.colorTheme}">
          <div class="front-top">
            <span class="card-num">0${index + 1}</span>
            <span class="card-category-badge">${item.category}</span>
          </div>
          <div class="front-center">
            <h4 class="front-project-name">${item.title}</h4>
          </div>
          <div class="front-bottom">
            <span>${item.role}</span>
            <span>${item.year}</span>
          </div>
        </div>

        <!-- Face Back (Hover Brief) -->
        <div class="flip-face card-back">
          <div class="back-header">
            <span class="back-role">${item.category}</span>
            <p style="font-weight:700; font-size:0.95rem; margin-top:2px;">${item.title}</p>
          </div>
          <p class="back-body">${item.brief}</p>
          <div class="back-tags">
            ${item.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}
          </div>
          <div class="back-click-hint">Click for dossier &rarr;</div>
        </div>
      </div>
    `;

    orbitWheel.appendChild(wrapper);
  });
}

// Orbit Rotation Physics & Animation
let currentAngle = 0;
let targetAngle = 0;
let isDragging = false;
let startX = 0;
let startAngle = 0;

function renderCards() {
  const cardElements = document.querySelectorAll(".orbit-card-wrapper");
  cardElements.forEach((el, index) => {
    const angleDeg = currentAngle + (index * angleStep);
    const angleRad = (angleDeg * Math.PI) / 180;

    // Distribute along circular X / Y coordinate
    const x = Math.sin(angleRad) * radius;
    const y = -Math.cos(angleRad) * radius * 0.45; // Subtle perspective foreshortening
    const z = Math.cos(angleRad) * 120; // 3D depth

    // Tangential card tilt to face center
    const rotationZ = (angleDeg % 360) * 0.4;

    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotationZ}deg)`;
    el.style.zIndex = Math.round(z + 200);
  });

  const normalized = Math.round(((targetAngle % 360) + 360) % 360);
  degReadout.textContent = `${normalized}°`;
}

// Smooth RAF Animation Loop
function updatePhysics() {
  // Smooth lerp easing
  currentAngle += (targetAngle - currentAngle) * 0.08;
  renderCards();
  requestAnimationFrame(updatePhysics);
}

// Event Listeners for Rotation
// Mouse Wheel / Trackpad Scroll
window.addEventListener("wheel", (e) => {
  if (modalBackdrop.classList.contains("open")) return;
  e.preventDefault();
  const delta = Math.sign(e.deltaY) * 9;
  targetAngle -= delta;
}, { passive: false });

// Drag to Rotate
stage.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startAngle = targetAngle;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  targetAngle = startAngle + (dx * 0.35);
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch Events for Mobile
stage.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startAngle = targetAngle;
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - startX;
  targetAngle = startAngle + (dx * 0.4);
});

window.addEventListener("touchend", () => {
  isDragging = false;
});

// Keyboard Arrows
window.addEventListener("keydown", (e) => {
  if (modalBackdrop.classList.contains("open")) {
    if (e.key === "Escape") closeModal();
    return;
  }
  if (e.key === "ArrowLeft") targetAngle += angleStep;
  if (e.key === "ArrowRight") targetAngle -= angleStep;
});

// Buttons
prevBtn.addEventListener("click", () => { targetAngle += angleStep; });
nextBtn.addEventListener("click", () => { targetAngle -= angleStep; });
recenterBtn.addEventListener("click", () => { targetAngle = 0; });

// Project Modal Logic
window.openProjectModal = function(id) {
  const project = portfolioItems.find(p => p.id === id);
  if (!project) return;

  modalCategoryTag.textContent = project.category;
  modalTitle.textContent = project.title;
  modalMeta.textContent = `${project.role} • ${project.year}`;
  modalOverview.textContent = project.overview;

  modalDeliverables.innerHTML = project.deliverables
    .map(d => `<li>${d}</li>`)
    .join("");

  modalTags.innerHTML = project.tags
    .map(t => `<span>${t}</span>`)
    .join("");

  modalBackdrop.classList.add("open");
};

function closeModal() {
  modalBackdrop.classList.remove("open");
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

// Initialization
createCardElements();
requestAnimationFrame(updatePhysics);