/**
 * Sarojini Swaminathan Portfolio
 * Scroll-Scrubbed Hand Flick Sequence -> Arranges Cards into 4 Category Decks
 */

const handDrawnLoopSVG = `
<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 48,15 
           C 74,14 88,32 86,54 
           C 84,76 68,88 46,86 
           C 25,84 14,68 15,48 
           C 16,28 32,15 52,16 
           C 66,17 78,28 78,40" 
        stroke-width="2.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>
`;

// Existing 4 Decks & All Project Information Preserved
const skillDecks = [
  {
    id: "uiux",
    title: "UI/UX",
    rimText: "SAROJINI / SELECTED WORK",
    colorClass: "color-tangelo",
    deckClass: "deck-uiux",
    projects: [
      {
        id: "uiux-1",
        title: "Continuity of Healthcare",
        category: "UI/UX DESIGN",
        role: "Mobile Product Designer",
        year: "2024 — 2025",
        brief: "Patient healthcare ecosystem app bridging chronic medical records and clinician handoffs.",
        overview: "Designed an intuitive mobile healthcare interface bridging patient history, clinician handoffs, and vital monitoring to reduce medical fragmentation and improve care continuity.",
        deliverables: [
          "User journey mapping across patient admissions and clinical discharges.",
          "High-fidelity responsive UI components and interactive mobile prototypes.",
          "Accessible typography and data visualization dashboard."
        ],
        tags: ["UI/UX Design", "Healthcare App", "Figma", "User Journey"],
        link: "https://www.behance.net/gallery/249136043/Continuity-of-Healthcare-App-Design"
      },
      {
        id: "uiux-2",
        title: "Direct Filing Workflow",
        category: "ENTERPRISE UX",
        role: "UI/UX Design Intern",
        year: "2026",
        brief: "High-density navigation flow and interactive form design for compliance filing.",
        overview: "Structured the complete end-to-end user experience for a Direct Filing regulatory tool, simplifying compliance data entry and drafting developer-ready UI specifications.",
        deliverables: [
          "Information architecture and validation flows for heavy data entry.",
          "Developer handoff documentation and interactive wireframe components.",
          "Design system consistency across multiple enterprise modules."
        ],
        tags: ["Enterprise UX", "Form UX", "Figma", "Design Systems"],
        link: "https://www.behance.net/sarojinis"
      },
      {
        id: "uiux-3",
        title: "Micro-Interaction Engine",
        category: "DESIGN SYSTEM",
        role: "Interaction Designer",
        year: "2025",
        brief: "Interactive component states, tactile card physics, and motion design tokens.",
        overview: "Researched and coded motion guidelines bridging tangible spatial design with web interfaces, exploring accessible micro-interactions.",
        deliverables: [
          "Interactive Figma components with smart animate variables.",
          "Handoff specifications for CSS transforms and timing functions.",
          "Component library for rapid prototype iteration."
        ],
        tags: ["Micro-interactions", "Motion", "Prototyping", "Design Tokens"],
        link: "https://github.com/sarojiniswaminathan"
      }
    ]
  },
  {
    id: "graphic",
    title: "Graphic Design",
    rimText: "SAROJINI / SELECTED WORK",
    colorClass: "color-botticelli",
    deckClass: "deck-graphic",
    projects: [
      {
        id: "graphic-1",
        title: "Heritage Visual Identity",
        category: "GRAPHIC DESIGN",
        role: "Visual & Print Designer",
        year: "2025",
        brief: "Cultural exhibition posters, bilingual typography systems, and print marketing collateral.",
        overview: "Crafted contemporary visual identities rooted in traditional South Indian craft motifs. Produced printed gallery collateral and exhibition posters balancing heritage aesthetics with modern typography.",
        deliverables: [
          "Exhibition print posters and visitor gallery catalogues.",
          "Editorial layout grids and bilingual typography standards.",
          "Social media graphic systems for public campaigns."
        ],
        tags: ["Graphic Design", "Print Ephemera", "Typography", "Branding"],
        link: "https://www.behance.net/sarojinis"
      },
      {
        id: "graphic-2",
        title: "Creativano Strategic Decks",
        category: "EDITORIAL DESIGN",
        role: "Design Intern",
        year: "2026",
        brief: "High-converting corporate presentation decks and modular infographic slide kits.",
        overview: "Produced high-converting presentation systems, visual narratives, and design research decks for corporate clients and internal strategy alignments.",
        deliverables: [
          "Constructed modular presentation slide templates and infographic kits.",
          "Synthesized visual documentation to support strategic agency decisions.",
          "Standardized typography and layout hierarchies for client-facing assets."
        ],
        tags: ["Infographics", "Pitch Decks", "Layout Hierarchy"],
        link: "https://www.behance.net/sarojinis"
      },
      {
        id: "graphic-3",
        title: "Optical Typographic Studies",
        category: "VISUAL SYSTEMS",
        role: "Graphic Designer",
        year: "2024",
        brief: "Explorations into high-contrast geometric linework, poster series, and editorial pacing.",
        overview: "A series of self-initiated graphic prints exploring optical illusions, halftone printing dots, and geometric rhythm inspired by modernism.",
        deliverables: [
          "Silk-screen printed poster editions.",
          "Experimental vector patterns and optical glyphs.",
          "Typography layout book."
        ],
        tags: ["Poster Design", "Printmaking", "Experimental Grid"],
        link: "https://www.behance.net/sarojinis"
      }
    ]
  },
  {
    id: "sewing",
    title: "Sewing Projects",
    rimText: "SAROJINI / SELECTED WORK",
    colorClass: "color-chocolate",
    deckClass: "deck-sewing",
    projects: [
      {
        id: "sewing-1",
        title: "SewnBySaro Upcycled Label",
        category: "SEWING & FASHION",
        role: "Founder & Garment Maker",
        year: "2024 — Present",
        brief: "Sustainable zero-waste apparel and wearable accessories crafted from repurposed textiles.",
        overview: "An independent circular fashion label tackling textile waste. Every piece is drafted, cut, and constructed by hand using zero-waste pattern-making and sustainable fabrication techniques.",
        deliverables: [
          "Zero-waste pattern cutting and tailored garment construction.",
          "Bespoke wearable accessory collection fabrication.",
          "D2C brand management, photography, and digital marketing."
        ],
        tags: ["Fashion Design", "Pattern Drafting", "Upcycling", "Sewing"],
        link: "https://www.instagram.com/sewnbysaro/"
      },
      {
        id: "sewing-2",
        title: "Patchwork Denim Overshirt",
        category: "TEXTILE UPCYCLING",
        role: "Apparel Construction",
        year: "2024",
        brief: "Bespoke outerwear tailored from reclaimed denim remnants with contrast sashiko stitching.",
        overview: "Engineered a structured modular overshirt utilizing five discarded denim jeans, applying Japanese sashiko reinforcement for durability and graphic visual texture.",
        deliverables: [
          "Textile sorting and weight gradient mapping.",
          "Structural flat-felled seam construction.",
          "Hand-embroidered sashiko detailing."
        ],
        tags: ["Denim Craft", "Sashiko Stitching", "Zero-Waste"],
        link: "https://www.instagram.com/sewnbysaro/"
      },
      {
        id: "sewing-3",
        title: "Modular Utility Tote",
        category: "ACCESSORY DESIGN",
        role: "Product & Sewing",
        year: "2025",
        brief: "Functional heavy-duty canvas tote with modular detachable internal pockets.",
        overview: "Designed and hand-sewed an everyday utilitarian bag using industrial canvas cutoffs, tested for laptop weight distribution and everyday commuter ergonomics.",
        deliverables: [
          "Ergonomic weight testing and reinforced bar tacking.",
          "Detachable internal zipper compartments.",
          "Water-resistant wax finish application."
        ],
        tags: ["Bags & Carry", "Heavy Canvas", "Utility"],
        link: "https://www.instagram.com/sewnbysaro/"
      }
    ]
  },
  {
    id: "others",
    title: "Others",
    rimText: "SAROJINI / SELECTED WORK",
    colorClass: "color-others",
    deckClass: "deck-others",
    projects: [
      {
        id: "others-1",
        title: "Hornbill into a Hairdryer",
        category: "PRODUCT & BIOMIMICRY",
        role: "Biomimicry & Product Design",
        year: "2024",
        brief: "Applying the aerodynamic curvature and internal casque acoustics of a hornbill bird into consumer appliance ergonomics.",
        overview: "An experimental product design study applying biomimicry principles. The internal bone structure and aerodynamics of the hornbill casque were translated into high-efficiency airflow dynamics for consumer ergonomics.",
        deliverables: [
          "Biomimicry anatomical study and airflow aerodynamic sketches.",
          "3D form development and acoustic dissipation modeling.",
          "Ergonomic product renders and industrial specification sheet."
        ],
        tags: ["Biomimicry", "Product Design", "Industrial Form", "Acoustics"],
        link: "https://www.behance.net/sarojinis"
      },
      {
        id: "others-2",
        title: "Discover India Documentary",
        category: "RESEARCH & FILM",
        role: "Field Researcher & Editor",
        year: "2026",
        brief: "Field ethnography, budget coordination, and final video documentary editing.",
        overview: "On-site ethnographic research documenting regional artisan communities, culminating in an academic monograph and a documentary film detailing indigenous craft traditions.",
        deliverables: [
          "Full documentary post-production and narrative video editing.",
          "Qualitative field interviews and ethnographic transcription.",
          "Publication layout and expenditure tracking."
        ],
        tags: ["Video Editing", "Ethnography", "Research", "Field Study"],
        link: "https://www.behance.net/sarojinis"
      },
      {
        id: "others-3",
        title: "Computational UI Experiments",
        category: "CREATIVE CODING",
        role: "Design Technologist",
        year: "2024 — 2026",
        brief: "Front-end card distribution physics engines, Python automations, and C++ prototypes.",
        overview: "Bridging software engineering and human-centered design. Developing interactive web experiences, algorithms, and micro-tools to enhance user interaction.",
        deliverables: [
          "Front-end dynamic web animations and layouts.",
          "Automation scripts in Python for daily workflow enhancement.",
          "Exploratory algorithms written in C++."
        ],
        tags: ["JavaScript", "Python", "C++", "Creative Coding"],
        link: "https://github.com/sarojiniswaminathan"
      },
      {
        id: "others-4",
        title: "ISF Athletics & Leadership",
        category: "LEADERSHIP",
        role: "India Representative & Athlete",
        year: "2022 — 2024",
        brief: "Represented India at the ISF International Games (14th Globally); 1st Place ISSO Nationals.",
        overview: "High-performance discipline developed through national and international basketball competitions, combined with serving as High School Captain.",
        deliverables: [
          "ISF International Games (2024) — Ranked 14th Globally.",
          "ISSO Nationals (2022) — 1st Place, U18 Category.",
          "HLC International School Captain (2023–2024)."
        ],
        tags: ["Team Leadership", "Athletics", "Public Speaking"],
        link: "https://www.behance.net/sarojinis"
      }
    ]
  }
];

const internships = [
  {
    company: "DataTracks",
    role: "UI/UX Design Intern",
    year: "2026",
    badge: "Enterprise Tech",
    bullets: [
      "Designed the complete website and digital tool flow for Direct Filing compliance.",
      "Created rigorous design specifications and documentation for developer implementation."
    ]
  },
  {
    company: "Creativano",
    role: "Design Intern",
    year: "2026",
    badge: "Agency",
    bullets: [
      "Designed client-facing decks and standardized internal presentation templates.",
      "Conducted foundational design research and strategic documentation."
    ]
  },
  {
    company: "DakshinaChitra",
    role: "Design & Marketing Intern",
    year: "2025",
    badge: "Cultural Institution",
    bullets: [
      "Executed graphic design assets for heritage exhibition marketing and public visitors.",
      "Produced print and social media deliverables to enhance museum engagement."
    ]
  }
];

// DOM References
const scrollTrack = document.getElementById("scrollTrack");
const stickyViewport = document.getElementById("stickyViewport");
const handActor = document.getElementById("handActor");
const heldCard = document.getElementById("heldCard");
const flickLines = document.getElementById("flickLines");
const arrangedStage = document.getElementById("arrangedStage");
const decksRow = document.getElementById("decksRow");
const scrollHint = document.getElementById("scrollHint");

// Render the 4 Skillset Decks
function renderDecks() {
  decksRow.innerHTML = skillDecks.map((deck) => {
    const cardsHTML = deck.projects.map((proj, pIndex) => `
      <div class="project-fan-card" data-index="${pIndex}" onclick="event.stopPropagation(); openModal('${deck.id}', '${proj.id}')">
        
        <div class="flip-face card-front-face ${deck.colorClass}">
          <div class="card-rim-text">${deck.rimText}</div>
          <div class="card-handdrawn-circle">
            ${handDrawnLoopSVG}
          </div>
          <h2 class="card-deck-title">${deck.title}</h2>
        </div>

        <div class="flip-face card-back-face">
          <div>
            <div class="back-top">
              <span>${proj.category}</span>
              <span>${proj.year}</span>
            </div>
            <h3 class="back-project-name">${proj.title}</h3>
            <p class="back-brief">${proj.brief}</p>
            <div class="back-tags">
              ${proj.tags.slice(0, 3).map(t => `<span>${t}</span>`).join("")}
            </div>
          </div>
          <div class="back-click-indicator">
            Click card to open &rarr;
          </div>
        </div>

      </div>
    `).join("");

    return `
      <div class="deck-stack-wrapper ${deck.deckClass}" onclick="toggleDeckMobile(this)">
        <div class="deck-cards-container">
          ${cardsHTML}
        </div>
      </div>
    `;
  }).join("");

  attachScopedDimmerListeners();
}

// Scoped Stage Dimmer (Dulls only the stage area behind the hovered deck)
function attachScopedDimmerListeners() {
  const deckWrappers = document.querySelectorAll(".deck-stack-wrapper");
  deckWrappers.forEach(deck => {
    deck.addEventListener("mouseenter", () => {
      if (arrangedStage.classList.contains("is-revealed")) {
        stickyViewport.classList.add("has-active-deck");
      }
    });
    deck.addEventListener("mouseleave", () => {
      stickyViewport.classList.remove("has-active-deck");
    });
  });
}

window.toggleDeckMobile = function(element) {
  if (!arrangedStage.classList.contains("is-revealed")) return;
  const wasOpen = element.classList.contains("is-open");
  document.querySelectorAll(".deck-stack-wrapper").forEach(d => d.classList.remove("is-open"));
  
  if (!wasOpen) {
    element.classList.add("is-open");
    stickyViewport.classList.add("has-active-deck");
  } else {
    stickyViewport.classList.remove("has-active-deck");
  }
};

// =========================================================
// SCROLL-DRIVEN HAND FLICK SEQUENCE (Frames 2 -> 7 -> 8 -> 9 -> 10)
// =========================================================
function updateScrollSequence() {
  const rect = scrollTrack.getBoundingClientRect();
  const scrollableDistance = rect.height - window.innerHeight;
  if (scrollableDistance <= 0) return;

  // Normalized scroll progress [0..1] across the sticky track
  const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));

  // Fade out scroll prompt once user starts scrolling
  scrollHint.style.opacity = progress > 0.08 ? "0" : "0.65";

  // 1. Hand & Wrist Motion across the 5 storyboard frames:
  // Frame 2 (0.0): Upright at top-right (0px, 0px, 0deg)
  // Frame 7 (0.25): Tilts forward (-18deg)
  // Frame 8 (0.50): Sweeps lower and tilts (-34deg)
  // Frame 9 (0.72): Drops toward lower-right table area (+34vh, -26deg)
  // Frame 10 (0.85+): Settles at bottom-right corner after flicking cards
  const translateY = Math.min(progress / 0.78, 1) * (window.innerHeight * 0.42);
  const translateX = Math.sin(Math.min(progress / 0.85, 1) * Math.PI) * -32;
  const rotateDeg = progress < 0.55
    ? -(progress / 0.55) * 34
    : -34 + ((progress - 0.55) / 0.45) * 14;

  handActor.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateDeg}deg)`;

  // 2. Card Release & Flick Trigger at 72% Scroll
  if (progress >= 0.72) {
    // Flick motion lines appear around the hand
    flickLines.style.opacity = "1";
    // Held card shoots out of the fingers onto the table
    heldCard.style.transform = "translate(-95px, 45px) rotate(-38deg) scale(0.85)";
    heldCard.style.opacity = "0";
    // 4 category decks fan out into their arc positions
    arrangedStage.classList.add("is-revealed");
  } else {
    flickLines.style.opacity = "0";
    heldCard.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
    heldCard.style.opacity = "1";
    arrangedStage.classList.remove("is-revealed");
    stickyViewport.classList.remove("has-active-deck");
  }
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateScrollSequence);
}, { passive: true });

window.addEventListener("resize", updateScrollSequence);

// Render Internships
const internshipsGrid = document.getElementById("internshipsGrid");
function renderInternships() {
  internshipsGrid.innerHTML = internships.map(item => `
    <div class="intern-item">
      <div class="intern-meta">
        <span>${item.year}</span>
        <span>${item.badge}</span>
      </div>
      <h3 class="intern-title">${item.company}</h3>
      <p class="intern-role">${item.role}</p>
      <ul class="intern-list">
        ${item.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

// Modal Logic
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalOverview = document.getElementById("modalOverview");
const modalDeliverables = document.getElementById("modalDeliverables");
const modalTags = document.getElementById("modalTags");
const modalExternalLink = document.getElementById("modalExternalLink");

window.openModal = function(deckId, projectId) {
  const deck = skillDecks.find(d => d.id === deckId);
  if (!deck) return;

  const proj = deck.projects.find(p => p.id === projectId);
  if (!proj) return;

  modalCategory.textContent = proj.category;
  modalTitle.textContent = proj.title;
  modalRole.textContent = `${proj.role} • ${proj.year}`;
  modalOverview.textContent = proj.overview;

  modalDeliverables.innerHTML = proj.deliverables.map(d => `<li>${d}</li>`).join("");
  modalTags.innerHTML = proj.tags.map(t => `<span>${t}</span>`).join("");
  modalExternalLink.href = proj.link;

  modalBackdrop.classList.add("open");
};

modalClose.addEventListener("click", () => modalBackdrop.classList.remove("open"));
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) modalBackdrop.classList.remove("open");
});

// Initialize
renderDecks();
renderInternships();
updateScrollSequence();