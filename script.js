// --- DATA CONFIGURATION: Skills and Projects (2 featured projects) ---
const portfolioData = {
    skills: [
        { title: "Python Core", subtitle: "OOP, Flask, Automation", iconClass: "fab fa-python", iconColor: "text-yellow-400" },
        { title: "AI/ML", subtitle: "TensorFlow, PyTorch, scikit-learn", iconClass: "fas fa-brain", iconColor: "text-purple-400" },
        { title: "Web/Full-Stack", subtitle: "PHP, MySQL, HTML/CSS/JS", iconClass: "fas fa-globe", iconColor: "text-red-400" },
        { title: "Data Tools", subtitle: "SQL, Pandas, Visualization", iconClass: "fas fa-database", iconColor: "text-green-400" },
    ],
    projects: [
        {
            title: "Vastra – E-Commerce Platform",
            description: "A multi-vendor textile e-commerce system featuring admin, seller, and buyer roles with product management and secure transactions. Built with PHP, MySQL, HTML, and CSS.",
            iconClass: "fas fa-store",
            iconColor: "text-red-400",
            link: "#"
        },
        {
            title: "Mintora (SmartFin) – AI Finance App",
            description: "An AI-powered personal finance system that analyzes transactions and provides budgeting insights. Built using Python, Flask, and SQL.",
            iconClass: "fas fa-piggy-bank",
            iconColor: "text-yellow-400",
            link: "#"
        }
        // The third project (Deep Learning Classifier) has been removed as requested.
    ]
};

// --- DYNAMIC RENDERING FUNCTIONS ---

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 card-glow transition-all duration-300 hover:scale-[1.05]">
            <i class="${skill.iconClass} text-5xl ${skill.iconColor} mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">${skill.title}</h3>
            <p class="text-slate-400 text-sm">${skill.subtitle}</p>
        </div>
    `).join('');
}


function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Use the first two projects only
    container.innerHTML = portfolioData.projects.slice(0, 3).map(project => `
        <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 card-glow transition-all duration-300 hover:scale-[1.05]">
            <div class="mb-4">
                <i class="${project.iconClass} text-3xl ${project.iconColor}"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
            <p class="text-slate-400 mb-4">${project.description}</p>
            <a href="${project.link}" class="text-blue-400 hover:text-blue-300 font-medium">View Details <i class="fas fa-arrow-right ml-1"></i></a>
        </div>
    `).join('');
}

// --- NAVIGATION AND INIT ---

// New JavaScript function to enforce smooth scroll and header offset
function handleSmoothScroll(e) {
    const hash = e.currentTarget.getAttribute('href');
    if (hash.startsWith('#') && hash.length > 1) {
        e.preventDefault();
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Header height is approximately 64px, using 80px for extra margin
            const headerHeight = 80; 
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL hash without forcing a jump
            history.pushState(null, null, hash);
        }
    }
}
// End of new JS function

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    
    // Toggle icon from bars to times (X)
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Render content from data
    renderSkills();
    renderProjects();

    // Apply smooth scroll handler to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
