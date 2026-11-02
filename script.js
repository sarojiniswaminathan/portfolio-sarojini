/**
 * Sarojini Swaminathan Portfolio
 * Blank Card with Geometric Graphic Pattern on Back -> Hover to Flip -> Behance Projects
 */

// SVG Optical Pattern matching the playing card reference (concentric rings, chevrons, polka dots, optical stripes)
const cardGeometricPatternSVG = `
<svg class="card-pattern-svg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Diagonal Stripes Pattern -->
    <pattern id="diagStripes" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#FAF6EE" stroke-width="3" />
    </pattern>
    <!-- Polka Dots Pattern -->
    <pattern id="polkaDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="2.2" fill="#FAF6EE" />
    </pattern>
    <!-- Chevron Zig-Zag Pattern -->
    <pattern id="chevrons" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
      <path d="M 0 0 L 12 10 L 24 0" fill="none" stroke="#FAF6EE" stroke-width="2.5" />
      <path d="M 0 6 L 12 16 L 24 6" fill="none" stroke="#FAF6EE" stroke-width="2.5" />
    </pattern>
  </defs>

  <rect width="200" height="300" fill="#111111"/>

  <!-- Top-left Sector: Concentric Ripples -->
  <g>
    <path d="M 0 0 L 95 0 L 95 145 L 0 145 Z" fill="#111111"/>
    <circle cx="20" cy="70" r="15" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="20" cy="70" r="28" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="20" cy="70" r="42" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="20" cy="70" r="56" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="20" cy="70" r="70" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <path d="M 0 0 L 55 0 L 0 55 Z" fill="url(#polkaDots)"/>
  </g>

  <!-- Top-Right Sector: Optical Chevron Zig-Zags -->
  <g>
    <rect x="95" y="0" width="105" height="145" fill="url(#chevrons)"/>
    <circle cx="160" cy="40" r="30" fill="#FAF6EE"/>
    <circle cx="160" cy="40" r="24" fill="#111111"/>
    <circle cx="160" cy="40" r="14" fill="#FAF6EE"/>
    <rect x="100" y="115" width="100" height="30" fill="url(#diagStripes)"/>
  </g>

  <!-- Bottom-Left Sector: Dense Optical Bars & Dots -->
  <g>
    <rect x="0" y="145" width="105" height="155" fill="url(#diagStripes)"/>
    <circle cx="50" cy="245" r="35" fill="#111111" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="50" cy="245" r="22" fill="#FAF6EE"/>
    <circle cx="50" cy="245" r="10" fill="#111111"/>
    <rect x="0" y="270" width="105" height="30" fill="url(#polkaDots)"/>
  </g>

  <!-- Bottom-Right Sector: Arcs & Chevrons -->
  <g>
    <rect x="105" y="145" width="95" height="155" fill="#111111"/>
    <circle cx="180" cy="220" r="18" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="180" cy="220" r="34" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="180" cy="220" r="50" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <circle cx="180" cy="220" r="66" fill="none" stroke="#FAF6EE" stroke-width="3"/>
    <rect x="105" y="145" width="95" height="40" fill="url(#chevrons)"/>
  </g>

  <!-- Central Double-Shield Crest -->
  <g transform="translate(100, 150)">
    <ellipse cx="0" cy="0" rx="34" ry="24" fill="#FAF6EE" stroke="#111111" stroke-width="3"/>
    <ellipse cx="0" cy="0" rx="28" ry="18" fill="#111111"/>
    <!-- Central Grating -->
    <line x1="-15" y1="-10" x2="-15" y2="10" stroke="#FAF6EE" stroke-width="2"/>
    <line x1="-8" y1="-14" x2="-8" y2="14" stroke="#FAF6EE" stroke-width="2"/>
    <line x1="0" y1="-16" x2="0" y2="16" stroke="#FAF6EE" stroke-width="2.5"/>
    <line x1="8" y1="-14" x2="8" y2="14" stroke="#FAF6EE" stroke-width="2"/>
    <line x1="15" y1="-10" x2="15" y2="10" stroke="#FAF6EE" stroke-width="2"/>
  </g>
</svg>
`;

// Projects List derived directly from Sarojini's Behance & Verified Portfolio Categories
const creativeProjects = [
  {
    id: 1,
    title: "Continuity of Healthcare",
    category: "UI/UX DESIGN",
    role: "App & Product Design",
    year: "2024 — 2025",
    themeClass: "theme-uiux",
    brief: "A connected patient healthcare ecosystem app bridging chronic medical records and doctor continuity.",
    overview: "Designed an intuitive mobile healthcare interface bridging patient history, clinician handoffs, and vital monitoring to reduce medical fragmentation and improve care outcomes.",
    deliverables: [
      "User journey mapping across patient admissions and clinical discharges.",
      "High-fidelity responsive UI components and interactive mobile prototypes.",
      "Accessibility-compliant typography and data visualization dashboard."
    ],
    tags: ["UI/UX Design", "Healthcare", "Mobile App", "Figma", "User Flow"],
    behanceUrl: "https://www.behance.net/gallery/249136043/Continuity-of-Healthcare-App-Design"
  },
  {
    id: 2,
    title: "Hornbill into a Hairdryer",
    category: "OTHER PROJECTS",
    role: "Biomimicry & Product Design",
    year: "2024",
    themeClass: "theme-other",
    brief: "Translating the aerodynamic beak curvature and internal casque acoustics of a Hornbill bird into industrial form.",
    overview: "An experimental product design study applying biomimicry principles. The internal bone structure and aerodynamics of the hornbill casque were translated into high-efficiency airflow dynamics for consumer ergonomics.",
    deliverables: [
      "Biomimicry anatomical study and airflow aerodynamic sketches.",
      "3D form development and acoustic dissipation modeling.",
      "Ergonomic product renders and industrial specification sheet."
    ],
    tags: ["Biomimicry", "Industrial Design", "Form Study", "Product Ideation"],
    behanceUrl: "https://www.behance.net/sarojinis"
  },
  {
    id: 3,
    title: "Heritage Visual Identity",
    category: "GRAPHIC DESIGN",
    role: "Graphic & Print Designer",
    year: "2025",
    themeClass: "theme-graphic",
    brief: "Print ephemera, typography systems, and promotional exhibition posters for cultural spaces.",
    overview: "Crafted contemporary visual identities rooted in traditional South Indian craft motifs. Produced printed gallery collateral and exhibition posters balancing heritage aesthetics with modern typography.",
    deliverables: [
      "Exhibition print posters and visitor gallery catalogues.",
      "Editorial layout grids and bilingual typography standards.",
      "Marketing collateral designed to increase public visitor engagement."
    ],
    tags: ["Graphic Design", "Print Ephemera", "Typography", "Branding"],
    behanceUrl: "https://www.behance.net/sarojinis"
  },
  {
    id: 4,
    title: "SewnBySaro Upcycled Collection",
    category: "SEWING",
    role: "Founder & Garment Maker",
    year: "2024 — Present",
    themeClass: "theme-sewing",
    brief: "Handcrafted upcycled apparel and wearable accessories constructed from repurposed textiles.",
    overview: "An independent circular fashion label tackling textile waste. Every piece is drafted, cut, and constructed by hand using zero-waste pattern-making and sustainable fabrication techniques.",
    deliverables: [
      "Zero-waste pattern cutting and tailored garment construction.",
      "Bespoke wearable accessory collection fabrication.",
      "D2C brand management, photography, and digital marketing."
    ],
    tags: ["Sewing", "Textile Upcycling", "Garment Construction", "Fashion"],
    behanceUrl: "https://www.instagram.com/sewnbysaro/"
  },
  {
    id: 5,
    title: "Direct Filing Workflow",
    category: "UI/UX DESIGN",
    role: "Enterprise UI/UX",
    year: "2026",
    themeClass: "theme-uiux",
    brief: "Complex compliance navigation interface and interactive forms built for enterprise filings.",
    overview: "Structured the complete end-to-end user experience for a Direct Filing regulatory tool, simplifying compliance data entry and drafting developer-ready UI specifications.",
    deliverables: [
      "Information architecture and validation flows for heavy data entry.",
      "Developer handoff documentation and interactive wireframe components.",
      "Design system consistency across multiple enterprise modules."
    ],
    tags: ["Enterprise UI/UX", "Form UX", "Figma", "Design Systems"],
    behanceUrl: "https://www.behance.net/sarojinis"
  },
  {
    id: 6,
    title: "Discover India Documentary",
    category: "OTHER PROJECTS",
    role: "Field Researcher & Editor",
    year: "2026",
    themeClass: "theme-other",
    brief: "Collaborative ethnographic research, budget coordination, and final documentary film editing.",
    overview: "On-site ethnographic research documenting regional artisan communities, culminating in an academic monograph and a documentary film detailing indigenous craft traditions.",
    deliverables: [
      "Full documentary post-production and narrative video editing.",
      "Qualitative field interviews and ethnographic transcription.",
      "Publication layout and expenditure tracking."
    ],
    tags: ["Video Editing", "Ethnography", "Research", "Field Study"],
    behanceUrl: "https://www.behance.net/sarojinis"
  }
];

// Dedicated Internships Data
const internships = [
  {
    company: "DataTracks",
    role: "UI/UX Design Intern",
    year: "2026",
    badge: "Enterprise Tech",
    bullets: [
      "Designed the complete website and digital tool flow for Direct Filing compliance.",
      "Created rigorous design specifications and documentation for developer implementation."
    ],
    tags: ["UI/UX", "Specs Handoff", "Workflow Design"]
  },
  {
    company: "Creativano",
    role: "Design Intern",
    year: "2026",
    badge: "Agency",
    bullets: [
      "Designed client-facing decks and standardized internal presentation templates.",
      "Conducted foundational design research and strategic documentation."
    ],
    tags: ["Presentation Design", "Visual Decks", "Research"]
  },
  {
    company: "DakshinaChitra",
    role: "Design & Marketing Intern",
    year: "2025",
    badge: "Heritage Museum",
    bullets: [
      "Executed graphic design assets for heritage exhibition marketing and public visitors.",
      "Produced print and social media deliverables to enhance museum engagement."
    ],
    tags: ["Print & Digital", "Cultural Marketing", "Graphics"]
  }
];

// Render Dedicated Internships Segment
const internshipsGrid = document.getElementById("internshipsGrid");
function renderInternships() {
  internshipsGrid.innerHTML = internships.map(item => `
    <div class="intern-card">
      <div class="intern-top">
        <span class="intern-year">${item.year}</span>
        <span class="intern-badge">${item.badge}</span>
      </div>
      <h3 class="intern-company">${item.company}</h3>
      <p class="intern-role">${item.role}</p>
      <ul class="intern-bullets">
        ${item.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      <div class="intern-tags">
        ${item.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// Orbit Wheel Physics Setup
let activeFilter = "ALL";
let filteredCards = [...creativeProjects];
const orbitWheel = document.getElementById("orbitWheel");
const degReadout = document.getElementById("degReadout");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const recenterBtn = document.getElementById("recenterBtn");
const filterPills = document.querySelectorAll(".filter-pill");

let radius = getRadius();
function getRadius() {
  const w = window.innerWidth;
  if (w < 600) return 260;
  if (w < 1024) return 360;
  return 440;
}

window.addEventListener("resize", () => {
  radius = getRadius();
  renderCards();
});

// Build Flip Cards: Back = Optical Pattern, Front = Project Details (Revealed on hover)
function createOrbitCards() {
  orbitWheel.innerHTML = "";
  filteredCards.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "orbit-card-wrapper";
    wrapper.dataset.index = index;

    wrapper.innerHTML = `
      <div class="flip-card" onclick="openProjectModal(${item.id})">
        
        <!-- CARD BACK (Default face-down view): Geometric Pattern -->
        <div class="flip-face card-back-pattern">
          <div class="card-pattern-inner">
            ${cardGeometricPatternSVG}
          </div>
        </div>

        <!-- CARD FRONT (Revealed on hover): Specific Project Details -->
        <div class="flip-face card-front-content ${item.themeClass}">
          <div class="card-front-top">
            <span class="card-num-index">0${index + 1}</span>
            <span class="card-badge-pill">${item.category}</span>
          </div>
          
          <div class="card-front-center">
            <h4 class="card-front-title">${item.title}</h4>
            <p class="card-front-brief">${item.brief}</p>
            <div class="card-front-tags">
              ${item.tags.slice(0, 3).map(t => `<span>${t}</span>`).join("")}
            </div>
          </div>
          
          <div class="card-front-bottom">
            <span class="card-front-role">${item.role}</span>
            <span class="card-front-action">Explore &rarr;</span>
          </div>
        </div>

      </div>
    `;

    orbitWheel.appendChild(wrapper);
  });
}

// 3D Orbital Positioning
let currentAngle = 0;
let targetAngle = 0;
let isDragging = false;
let startX = 0;
let startAngle = 0;

function renderCards() {
  const cardElements = document.querySelectorAll(".orbit-card-wrapper");
  const count = cardElements.length;
  if (count === 0) return;

  const step = 360 / count;

  cardElements.forEach((el, index) => {
    const angleDeg = currentAngle + (index * step);
    const angleRad = (angleDeg * Math.PI) / 180;

    const x = Math.sin(angleRad) * radius;
    const y = -Math.cos(angleRad) * radius * 0.42;
    const z = Math.cos(angleRad) * 110;
    const rotZ = (angleDeg % 360) * 0.35;

    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotZ}deg)`;
    el.style.zIndex = Math.round(z + 200);
  });

  const normalized = Math.round(((targetAngle % 360) + 360) % 360);
  degReadout.textContent = `${normalized}°`;
}

function updatePhysics() {
  currentAngle += (targetAngle - currentAngle) * 0.08;
  renderCards();
  requestAnimationFrame(updatePhysics);
}

// Category Filtering
filterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    filterPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeFilter = pill.dataset.filter;

    if (activeFilter === "ALL") {
      filteredCards = [...creativeProjects];
    } else {
      filteredCards = creativeProjects.filter(p => p.category === activeFilter);
    }
    
    targetAngle = 0;
    currentAngle = 0;
    createOrbitCards();
  });
});

// Stage Interaction Handlers
const stage = document.getElementById("stage");

window.addEventListener("wheel", (e) => {
  if (modalBackdrop.classList.contains("open")) return;
  const rect = stage.getBoundingClientRect();
  if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
    e.preventDefault();
    targetAngle -= Math.sign(e.deltaY) * 10;
  }
}, { passive: false });

stage.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startAngle = targetAngle;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  targetAngle = startAngle + ((e.clientX - startX) * 0.35);
});

window.addEventListener("mouseup", () => { isDragging = false; });

stage.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startAngle = targetAngle;
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  targetAngle = startAngle + ((e.touches[0].clientX - startX) * 0.4);
});

window.addEventListener("touchend", () => { isDragging = false; });

prevBtn.addEventListener("click", () => { targetAngle += 360 / Math.max(1, filteredCards.length); });
nextBtn.addEventListener("click", () => { targetAngle -= 360 / Math.max(1, filteredCards.length); });
recenterBtn.addEventListener("click", () => { targetAngle = 0; });

// Modal Handlers
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategoryTag = document.getElementById("modalCategoryTag");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalOverview = document.getElementById("modalOverview");
const modalDeliverables = document.getElementById("modalDeliverables");
const modalTags = document.getElementById("modalTags");
const modalExternalLink = document.getElementById("modalExternalLink");

window.openProjectModal = function(id) {
  const project = creativeProjects.find(p => p.id === id);
  if (!project) return;

  modalCategoryTag.textContent = project.category;
  modalTitle.textContent = project.title;
  modalMeta.textContent = `${project.role} • ${project.year}`;
  modalOverview.textContent = project.overview;

  modalDeliverables.innerHTML = project.deliverables.map(d => `<li>${d}</li>`).join("");
  modalTags.innerHTML = project.tags.map(t => `<span>${t}</span>`).join("");
  
  modalExternalLink.href = project.behanceUrl || "https://www.behance.net/sarojinis";

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
renderInternships();
createOrbitCards();
requestAnimationFrame(updatePhysics);