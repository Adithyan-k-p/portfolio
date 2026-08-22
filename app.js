/**
 * Software Engineer Terminal Portfolio
 * Pure Vanilla JavaScript Application Logic
 */

/// DATASETS
const ENGINEER_PROFILE = {
  name: 'Adithyan K P',
  displayName: 'ADITHYAN K P',
  handle: 'Adithyan-k-p',
  title: 'Software Developer',
  company: 'Elrics Wisdom Private Limited',
  shortBio: 'Software Developer at Elrics Wisdom Private Limited, focused on backend development, full-stack applications, enterprise software, and building practical software solutions.',
  longBio: 'I am a Software Developer at Elrics Wisdom Private Limited, where I work on real-world software development and application projects. My development experience includes Python, Django, Django REST Framework, PostgreSQL, JavaScript, Flutter, Linux, Docker, Redis, and related technologies. I am particularly interested in backend development, APIs, databases, enterprise applications, and practical software engineering. Alongside my professional work, I am pursuing a Master of Computer Applications (MCA) through distance education at Indira Gandhi National Open University (IGNOU).',
  location: 'Kerala, India',
  statusText: 'CURRENTLY WORKING // SOFTWARE DEVELOPER',
  email: 'adithyankphere@gmail.com',
  github: 'https://github.com/Adithyan-k-p',
  linkedin: 'https://www.linkedin.com/in/adithyankp',
  twitter: 'https://x.com/AdithyanKP05',
  gpgKey: '4A8F 9C21 73E0 5B1D 88FA  01C4 3290 FAE8 6620 9B1C',
  sshFingerprint: 'SHA256:adithyanKP2026+elricsWisdomDevKey',
  educationCurrent: {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    mode: 'Distance Education',
    status: 'Currently Pursuing',
    period: '2026 — Present'
  },
  educationPrevious: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'BVM Holy Cross College Cherpunkal',
    university: 'Mahatma Gandhi University Kottayam',
    status: 'Completed'
  },
  achievement: {
    title: '1st Prize — DevByZero Hackathon',
    event: 'DMCON Kerala 2025',
    team: 'Team Mission Control',
    project: 'FlowLens',
    description: 'Secured first place at the DevByZero Hackathon at DMCON Kerala 2025 as part of Team Mission Control with FlowLens, a live code-to-production visualization platform.'
  },
  stats: {
    yearsExp: '2+ Months',
    commitsTotal: 'Active',
    reposContributed: 'Python / Django / PHP',
    prodUptime: '100%'
  }
};

const INITIAL_BOOT_LOGS = [
  { id: '1', text: 'Initializing developer environment...', type: 'info', delay: 250 },
  { id: '2', text: 'Loading engineer profile: Adithyan K P... [OK]', type: 'success', delay: 450 },
  { id: '3', text: 'Connecting to Elrics Wisdom Private Limited runtime...', type: 'info', delay: 200 },
  { id: '4', text: 'Mounting stack modules: Python, Django, PostgreSQL, Flutter...', type: 'info', delay: 350 },
  { id: '5', text: 'Verifying MCA status: IGNOU (Distance Education)...', type: 'success', delay: 300 },
  { id: '6', text: 'Loading hackathon achievements: DMCON 2025 1st Place [OK]', type: 'highlight', delay: 400 },
  { id: '7', text: 'System ready. Currently working as Software Developer.', type: 'accent', delay: 500 },
];

const PROJECTS_DATA = [
  {
    id: 'qwik',
    filename: 'Qwik_Django.py',
    title: 'Qwik',
    description: 'Real-time micro-moment social media platform built with Django, PostgreSQL, Django Channels, Redis, and WebSockets.',
    category: 'backend',
    permissions: 'rw-r--r--',
    visualType: 'neural_graph',
    activityHistory: [14, 16, 18, 12, 15, 18, 20, 16, 14, 18, 22, 20],
    activityStatus: 'Active',
    tags: ['Python', 'Django', 'PostgreSQL', 'Django Channels', 'Redis', 'WebSockets'],
    latency: '12ms WS',
    throughput: 'Real-Time',
    indexSize: 'PostgreSQL',
    stars: 48,
    githubUrl: 'https://github.com/Adithyan-k-p/qwik-website',
    liveDemoUrl: 'https://github.com/Adithyan-k-p/qwik-website',
    longDescription: 'Qwik is a real-time social media platform designed around short-lived and persistent content. The platform supports temporary posts with 24-hour expiry, permanent posts, likes, comments, following, private accounts, saved posts, search, explore, reporting, authentication, password recovery, and real-time chat. The backend was developed using Django and PostgreSQL, with Django Channels and Redis used to support real-time communication and WebSocket-based features.',
    highlights: [
      'User registration and email/username authentication with OTP password reset',
      'Temporary 24-hour expiring posts and permanent posts',
      'Real-time WebSocket chat with typing indicators and read/unread status',
      'Private accounts, explore/search, saved posts, and administrative reporting'
    ],
    techStackDetailed: ['Python 3.11', 'Django 5.0', 'Django REST Framework', 'PostgreSQL', 'Django Channels', 'Redis', 'Daphne / WebSockets', 'HTML/CSS/JS'],
    codeSnippet: `// Django Channels Consumer for real-time WebSocket chat
class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def chat_message(self, event):
        await self.send(text_data=json.dumps({
            'message': event['message'],
            'sender': event['sender'],
            'timestamp': event['timestamp']
        }))`
  },
  {
    id: 'vastra',
    filename: 'Vastra_ECommerce.php',
    title: 'Vastra',
    description: 'Community-driven textile e-commerce platform developed using PHP, MySQL, HTML, CSS, and JavaScript.',
    category: 'fullstack',
    permissions: 'rw-r--r--',
    visualType: 'ui_wireframe',
    activityHistory: [10, 12, 15, 14, 16, 18, 12, 10, 8, 14, 12, 10],
    activityStatus: 'Completed',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Razorpay', 'PHPMailer'],
    latency: '45ms',
    throughput: 'E-Commerce',
    indexSize: 'MySQL InnoDB',
    stars: 36,
    githubUrl: 'https://github.com/Adithyan-k-p/vastra',
    liveDemoUrl: 'https://github.com/Adithyan-k-p/vastra',
    longDescription: 'Vastra is a community-driven textile e-commerce platform developed using PHP, MySQL, HTML, CSS, and JavaScript. The platform provides separate workflows for administrators, sellers, and buyers. It includes seller verification, buyer-to-seller conversion, product management, e-commerce workflows, payment integration, and transactional email functionality.',
    highlights: [
      'Multi-role workflow with Admin, Seller, and Buyer modules',
      'Seller verification and seamless buyer-to-seller account conversion',
      'Razorpay payment gateway integration for checkout workflows',
      'Automated email notifications via PHPMailer integration'
    ],
    techStackDetailed: ['PHP 8.2', 'MySQL', 'JavaScript (ES6)', 'Razorpay API', 'PHPMailer', 'HTML5 & CSS3'],
    codeSnippet: `<?php
// Payment verification & transaction logging with Razorpay API
$api = new Api($keyId, $keySecret);
try {
    $attributes = array(
        'razorpay_order_id' => $_POST['razorpay_order_id'],
        'razorpay_payment_id' => $_POST['razorpay_payment_id'],
        'razorpay_signature' => $_POST['razorpay_signature']
    );
    $api->utility->verifyPaymentSignature($attributes);
    updateOrderStatus($db, $_POST['order_id'], 'PAID');
} catch(SignatureVerificationError $e) {
    logError("Payment verification failed: " . $e->getMessage());
}`
  },
  {
    id: 'flowlens',
    filename: 'FlowLens_Visualizer',
    title: 'FlowLens',
    description: 'Live code-to-production mapper developed during DevByZero Hackathon at DMCON Kerala 2025.',
    category: 'tools',
    permissions: 'rwxr-xr-x',
    visualType: 'search_daemon',
    activityHistory: [20, 24, 28, 30, 25, 20, 18, 15, 12, 10, 8, 6],
    activityStatus: '1st Prize Winner',
    tags: ['YugabyteDB', 'Flutter', 'Real-Time Data', 'Visualization'],
    latency: '<5ms Stream',
    throughput: 'Live Mapper',
    indexSize: 'YugabyteDB',
    stars: 85,
    githubUrl: 'https://github.com/Adithyan-k-p',
    liveDemoUrl: 'https://github.com/Adithyan-k-p',
    longDescription: 'FlowLens is a live code-to-production mapper developed during the DevByZero Hackathon at DMCON Kerala 2025. The project provides a real-time visualization of development and deployment workflows, including pull request tracking and code movement toward production. Won 1st Place at DevByZero Hackathon with Team Mission Control. (Private Repository)',
    highlights: [
      '🏆 1st Place Winner — DevByZero Hackathon at DMCON Kerala 2025 (Team Mission Control)',
      'Real-time visualization of git pull requests and CI/CD code movement',
      'Distributed YugabyteDB backend for ultra-low latency event streaming',
      'Cross-platform Flutter visual UI dashboard (Private Repo)'
    ],
    techStackDetailed: ['YugabyteDB', 'Flutter', 'Dart', 'WebSockets', 'Git API Hooks'],
    codeSnippet: `// Flutter real-time code pipeline stream renderer
StreamBuilder<PipelineEvent>(
  stream: flowLensService.eventStream,
  builder: (context, snapshot) {
    if (!snapshot.hasData) return const LoadingIndicator();
    final event = snapshot.data!;
    return PipelineVisualNode(
      commitHash: event.commitHash,
      stage: event.pipelineStage,
      status: event.status,
    );
  },
)`
  }
];

const SKILLS_DATA = [
  // Backend
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    percentage: 92,
    pid: 3012,
    memory: '450MB',
    cpuOrIo: 'CPU: 5%',
    status: 'running',
    description: 'Backend development, scripting, application logic, automation, and software engineering.',
    version: 'v3.11',
    tags: ['Python 3', 'Backend', 'Scripting', 'Automation', 'Algorithms']
  },
  {
    id: 'django',
    name: 'Django & DRF',
    category: 'backend',
    percentage: 90,
    pid: 3014,
    memory: '620MB',
    cpuOrIo: 'CPU: 8%',
    status: 'running',
    description: 'Web application development, authentication, REST APIs, ORM, database-driven applications, and business logic.',
    version: 'v5.0',
    tags: ['Django', 'Django REST Framework', 'ORM', 'Auth', 'Channels']
  },
  {
    id: 'java',
    name: 'Java & Spring Boot',
    category: 'backend',
    percentage: 75,
    pid: 3016,
    memory: '850MB',
    cpuOrIo: 'CPU: 10%',
    status: 'running',
    description: 'Object-oriented programming, enterprise backend concepts, and active Spring Boot learning.',
    version: 'v21',
    tags: ['Java', 'Spring Boot', 'OOP', 'Enterprise Systems']
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    percentage: 82,
    pid: 3018,
    memory: '380MB',
    cpuOrIo: 'CPU: 4%',
    status: 'running',
    description: 'Server-side web application development and e-commerce platform architecture.',
    version: 'v8.2',
    tags: ['PHP 8', 'Server-Side', 'E-Commerce', 'PHPMailer']
  },
  // Frontend
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    percentage: 88,
    pid: 4010,
    memory: '410MB',
    cpuOrIo: 'CPU: 3%',
    status: 'running',
    description: 'Interactive web applications, DOM manipulation, asynchronous programming, and API integration.',
    version: 'ES2024',
    tags: ['JavaScript', 'Async/Await', 'DOM', 'Fetch API', 'WebSockets']
  },
  {
    id: 'flutter',
    name: 'Flutter & Dart',
    category: 'frontend',
    percentage: 80,
    pid: 4012,
    memory: '550MB',
    cpuOrIo: 'CPU: 6%',
    status: 'running',
    description: 'Cross-platform application interfaces, dynamic state management, and real-time visualization dashboards.',
    version: 'v3.24',
    tags: ['Flutter', 'Dart', 'Cross-Platform', 'UI Widgets']
  },
  // Database & Infrastructure
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'backend',
    percentage: 88,
    pid: 5010,
    memory: '1.1GB',
    cpuOrIo: 'IO: 18MB/s',
    status: 'running',
    description: 'Relational database design, queries, transactions, data modeling, and Django integration.',
    version: 'v16.0',
    tags: ['PostgreSQL', 'SQL', 'Database Design', 'Indexing', 'Transactions']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'backend',
    percentage: 82,
    pid: 5012,
    memory: '780MB',
    cpuOrIo: 'IO: 12MB/s',
    status: 'running',
    description: 'Relational database development used in PHP-based web applications.',
    version: 'v8.0',
    tags: ['MySQL', 'Relational DB', 'E-Commerce Schema']
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'devops',
    percentage: 80,
    pid: 5014,
    memory: '320MB',
    cpuOrIo: 'CPU: 2%',
    status: 'running',
    description: 'Caching, channel layers, and real-time WebSocket session management with Django Channels.',
    version: 'v7.2',
    tags: ['Redis', 'Caching', 'Pub/Sub', 'Channel Layer']
  },
  // DevOps & Tools
  {
    id: 'linux-docker',
    name: 'Linux & Docker',
    category: 'devops',
    percentage: 84,
    pid: 6010,
    memory: '1.4GB',
    cpuOrIo: 'CONTAINERS: 6',
    status: 'running',
    description: 'Linux CLI, shell navigation, containerization, Docker images, and application infrastructure.',
    version: 'v27.0',
    tags: ['Linux', 'Docker', 'Bash', 'Containers', 'DevOps']
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'devops',
    percentage: 90,
    pid: 6012,
    memory: '210MB',
    cpuOrIo: 'CPU: 1%',
    status: 'running',
    description: 'Version control, branching, merging, pull requests, and collaborative git workflows.',
    version: 'v2.46',
    tags: ['Git', 'GitHub', 'Version Control', 'CI/CD']
  }
];

// AUDIO SYNTHESIZER
let audioCtx = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (!soundEnabled) return null;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
};

const playKeyClick = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  } catch (e) {}
};

const playBeep = (freq = 880, duration = 0.08) => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
};

const playSuccessChime = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }, idx * 60);
    });
  } catch (e) {}
};

const playCommandLaunch = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
};

// GLOBAL APP STATE
let activeTab = 'home';
let isCrtEnabled = true;
let selectedCategory = 'all';
let searchQuery = '';
let showingAllProjects = false;
let cliHistory = [
  {
    id: 'init-1',
    command: 'systemctl status portfolio-shell.service',
    outputHtml: `
      <div class="text-xs space-y-1">
        <p className="text-[#72ff70]" style="color: #72ff70;">● portfolio-shell.service - Cyber Interactive Shell v2.4.1</p>
        <p style="color: rgba(255,255,255,0.7);">Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)</p>
        <p style="color: rgba(255,255,255,0.7);">Active: <span style="color: #72ff70;">active (running)</span> since session boot</p>
        <p style="color: rgba(255,255,255,0.5); padding-top: 4px;">Type <span style="color: #00daf3; font-weight: bold;">help</span> to view available terminal commands, or <span style="color: #00daf3; font-weight: bold;">ls</span> to inspect projects.</p>
      </div>`
  }
];
let cliCommandList = [];
let cliHistoryIndex = -1;

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHomeView();
  initProjectsView();
  initStackView();
  initContactView();
  initModals();
  initKeyboardListeners();
  initTelemetryTicker();
});

// NAVIGATION
function setActiveTab(tab) {
  playKeyClick();
  activeTab = tab;

  document.querySelectorAll('.screen-section').forEach(s => s.classList.remove('active'));
  const activeEl = document.getElementById(`screen-${tab}`);
  if (activeEl) activeEl.classList.add('active');

  // Update header nav buttons
  document.querySelectorAll('.nav-link').forEach(btn => {
    if (btn.dataset.tab === tab) {
      btn.style.color = '#00ff66';
    } else {
      btn.style.color = '#666666';
    }
  });

  // Update bottom nav buttons
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    const isCurrent = btn.dataset.tab === tab;
    btn.className = `flex flex-col items-center gap-1 py-1.5 px-3 transition-all duration-150 cursor-pointer relative group ${
      isCurrent ? 'text-[#00ff66] font-bold' : 'text-[#888888] hover:text-white'
    }`;
    const indicator = btn.querySelector('.active-indicator');
    if (indicator) {
      indicator.style.display = isCurrent ? 'block' : 'none';
    }
  });

  window.scrollTo(0, 0);
}

function initNavigation() {
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;
      if (tab) setActiveTab(tab);
    });
  });

  // CRT Toggle Button
  const crtBtn = document.getElementById('crt-toggle-btn');
  if (crtBtn) {
    crtBtn.addEventListener('click', () => {
      playKeyClick();
      isCrtEnabled = !isCrtEnabled;
      const wrapper = document.getElementById('app-wrapper');
      if (isCrtEnabled) {
        wrapper.classList.add('crt-overlay');
        crtBtn.className = 'p-2 border transition-colors bg-[#00ff66]/10 border-[#00ff66] text-[#00ff66]';
      } else {
        wrapper.classList.remove('crt-overlay');
        crtBtn.className = 'p-2 border transition-colors bg-[#141414] border-[#333333] text-white/60 hover:text-white';
      }
    });
  }

  // Audio Toggle Button
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) playSuccessChime();
      audioBtn.className = `p-2 border transition-colors ${
        soundEnabled ? 'bg-[#00ff66]/10 border-[#00ff66] text-[#00ff66]' : 'bg-[#141414] border-[#333333] text-white/40 hover:text-white'
      }`;
      audioBtn.innerHTML = soundEnabled
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    });
  }
}

// HOME VIEW
function initHomeView() {
  // Scramble text title
  const roles = ['HELLO_WORLD', 'SYSTEMS_ENGINEER', 'FULLSTACK_ARCHITECT', 'DISTRIBUTED_CORE'];
  let currentRoleIdx = 0;
  const scrambleEl = document.getElementById('glitch-title');
  const heroGroup = document.getElementById('hero-title-group');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/';
  let scrambleInterval = null;

  function scrambleText(targetText) {
    let iterations = 0;
    if (scrambleInterval) clearInterval(scrambleInterval);

    scrambleInterval = setInterval(() => {
      if (!scrambleEl) return;
      scrambleEl.textContent = targetText
        .split('')
        .map((l, idx) => {
          if (idx < iterations) return targetText[idx];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');

      if (iterations >= targetText.length) {
        clearInterval(scrambleInterval);
      }
      iterations += 1 / 3;
    }, 28);
  }

  if (heroGroup) {
    heroGroup.addEventListener('click', () => {
      playKeyClick();
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      scrambleText(roles[currentRoleIdx]);
    });
    heroGroup.addEventListener('mouseenter', () => {
      scrambleText(roles[currentRoleIdx]);
    });
  }

  // Boot Logs simulation
  const logsContainer = document.getElementById('home-boot-logs');
  const bootStatusEl = document.getElementById('home-boot-status');
  if (logsContainer) {
    logsContainer.innerHTML = `<div style="color: #666666; margin-bottom: 4px;">SYSTEM(0) starting up kernel version 6.11-custom...</div>`;
    let accumulatedDelay = 250;

    INITIAL_BOOT_LOGS.forEach((log, idx) => {
      setTimeout(() => {
        let textColor = 'color: rgba(255, 255, 255, 0.8);';
        if (log.type === 'success') textColor = 'color: #00ff66;';
        if (log.type === 'warning') textColor = 'color: #ffb4ab; font-weight: bold;';
        if (log.type === 'highlight') textColor = 'color: #00daf3;';
        if (log.type === 'accent') textColor = 'color: #d7baff; font-weight: bold;';

        const line = document.createElement('div');
        line.className = 'flex gap-2 items-start animate-fade-in';
        line.innerHTML = `
          <span style="color: rgba(255, 255, 255, 0.3); flex-shrink: 0;">[${(idx + 1).toString().padStart(4, '0')}]</span>
          <span style="${textColor} word-break: break-all;">${log.text}</span>
        `;
        logsContainer.appendChild(line);
        logsContainer.scrollTop = logsContainer.scrollHeight;

        if (idx === INITIAL_BOOT_LOGS.length - 1) {
          setTimeout(() => {
            if (bootStatusEl) bootStatusEl.style.opacity = '1';
            playSuccessChime();
          }, 350);
        }
      }, accumulatedDelay);
      accumulatedDelay += log.delay;
    });
  }

  // Run Portfolio Button
  const runBtn = document.getElementById('home-run-btn');
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      playCommandLaunch();
      setActiveTab('projects');
    });
  }
}

// PROJECTS VIEW & CANVAS VISUALIZERS
function initProjectsView() {
  // Typing path effect
  const typedEl = document.getElementById('projects-typed-path');
  const targetPath = '~/projects/portfolio $ ls -la --sort=time';
  if (typedEl) {
    let i = 0;
    typedEl.textContent = '';
    const interval = setInterval(() => {
      if (i < targetPath.length) {
        typedEl.textContent += targetPath.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
  }

  // Category filter
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      playKeyClick();
      selectedCategory = e.currentTarget.dataset.cat;
      document.querySelectorAll('.cat-filter-btn').forEach(b => {
        b.className = 'cat-filter-btn px-3 py-1.5 text-xs font-mono font-bold transition-colors whitespace-nowrap cursor-pointer bg-[#181818] text-[#888888] hover:text-white border border-[#333333]';
      });
      e.currentTarget.className = 'cat-filter-btn px-3 py-1.5 text-xs font-mono font-bold transition-colors whitespace-nowrap cursor-pointer bg-[#00ff66] text-[#0d0d0d]';
      renderProjects();
    });
  });

  // Search input
  const searchInput = document.getElementById('projects-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Load More Button
  const loadMoreBtn = document.getElementById('load-more-projects-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      playCommandLaunch();
      loadMoreBtn.innerHTML = `
        <span class="text-xs font-mono text-[#00ff66] flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#00ff66] animate-ping"></span>
          Executing ./load_more_projects.sh ...
        </span>`;
      setTimeout(() => {
        showingAllProjects = true;
        loadMoreBtn.style.display = 'none';
        renderProjects();
      }, 600);
    });
  }

  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const loadMoreBtn = document.getElementById('load-more-projects-btn');
  if (loadMoreBtn && PROJECTS_DATA.length <= 3) {
    loadMoreBtn.style.display = 'none';
  }

  const currentList = PROJECTS_DATA;

  const filtered = currentList.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  container.innerHTML = '';

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'group flex flex-col bg-[#111111] hover:bg-[#161616] border border-[#333333] hover:border-[#00ff66] overflow-hidden transition-all duration-300 cursor-pointer relative';
    card.addEventListener('click', () => {
      playKeyClick();
      openProjectModal(p);
    });

    // Sparkline points
    const points = p.activityHistory
      .map((val, idx) => `${(idx / (p.activityHistory.length - 1)) * 100},${val}`)
      .join(' ');
    const areaPath = `M0,20 L${points} L100,20 Z`;

    const tagsHtml = p.tags.slice(0, 3).map(t => `
      <span class="text-[10px] font-mono text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 border border-[#00ff66]/30 font-semibold">
        [${t}]
      </span>
    `).join('') + (p.tags.length > 3 ? `<span class="text-[10px] font-mono text-[#666666] px-1 py-0.5">+${p.tags.length - 3}</span>` : '');

    card.innerHTML = `
      <div class="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-[#333333]">
        <div class="flex gap-1.5">
          <div class="w-2 h-2 rounded-full" style="background: rgba(239,68,68,0.8);"></div>
          <div class="w-2 h-2 rounded-full" style="background: rgba(0,218,243,0.8);"></div>
          <div class="w-2 h-2 rounded-full" style="background: rgba(0,255,102,0.8);"></div>
        </div>
        <span class="text-[11px] text-[#888888] font-mono font-medium">${p.permissions}</span>
      </div>

      <div class="w-full h-36 relative overflow-hidden bg-[#0d0d0d] border-b border-[#333333]">
        <canvas class="project-canvas w-full h-full" data-visual="${p.visualType}"></canvas>
      </div>

      <div class="flex flex-col p-5 gap-4 flex-1 justify-between">
        <div>
          <h3 class="font-bold text-base sm:text-lg text-white group-hover:text-[#00ff66] transition-colors truncate font-display">
            ${p.filename}
          </h3>
          <p class="text-xs text-[#bbbbbb] line-clamp-2 mt-1.5 leading-relaxed font-sans">
            ${p.description}
          </p>
        </div>

        ${p.latency ? `
        <div class="grid grid-cols-2 gap-2 bg-[#0d0d0d] p-2.5 border border-[#333333] text-xs font-mono">
          <div>
            <span class="text-[10px] text-[#666666] uppercase tracking-wider block">Latency</span>
            <span class="text-[#00ff66] font-bold">${p.latency}</span>
          </div>
          <div>
            <span class="text-[10px] text-[#666666] uppercase tracking-wider block">Index / Binary</span>
            <span class="text-[#00daf3] font-bold">${p.indexSize}</span>
          </div>
        </div>` : ''}

        <div class="flex flex-col gap-1.5 mt-auto">
          <div class="flex items-center justify-between text-[11px] font-mono text-[#888888]">
            <span>ACTIVITY</span>
            <span class="text-[#00daf3] font-bold">${p.activityStatus}</span>
          </div>
          <svg class="w-full h-8 text-[#00ff66] opacity-70 group-hover:opacity-100 transition-opacity" preserveAspectRatio="none" viewBox="0 0 100 20">
            <polyline fill="none" points="${points}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="${areaPath}" fill="currentColor" fill-opacity="0.1"/>
          </svg>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-[#333333]">
          ${tagsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
    const canvas = card.querySelector('.project-canvas');
    if (canvas) renderGenerativeCanvas(canvas, p.visualType);
  });
}

function renderGenerativeCanvas(canvas, type) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
  let height = (canvas.height = canvas.parentElement?.clientHeight || 140);

  const nodeCount = type === 'neural_graph' ? 20 : type === 'distributed_mesh' ? 16 : 12;
  const nodes = Array.from({ length: nodeCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2 + 1.5,
  }));

  let tick = 0;
  function draw() {
    tick++;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#101010';
    ctx.fillRect(0, 0, width, height);

    // Grid backdrop
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    if (type === 'neural_graph' || type === 'distributed_mesh') {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x, dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.strokeStyle = type === 'neural_graph' ? `rgba(114, 255, 112, ${0.4 - dist / 175})` : `rgba(215, 186, 255, ${0.4 - dist / 175})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();
          }
        }
        ctx.fillStyle = type === 'neural_graph' ? '#72ff70' : '#d7baff';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill();
      }
    } else if (type === 'search_daemon') {
      const barCount = 16;
      const barWidth = width / barCount;
      for (let i = 0; i < barCount; i++) {
        const h = (Math.sin(tick * 0.05 + i * 0.6) * 0.4 + 0.5) * (height - 30);
        ctx.fillStyle = i % 3 === 0 ? 'rgba(114, 255, 112, 0.4)' : 'rgba(0, 218, 243, 0.25)';
        ctx.fillRect(i * barWidth + 2, height - h - 10, barWidth - 4, h);
      }
      const scanY = (tick * 1.5) % height;
      ctx.strokeStyle = 'rgba(114, 255, 112, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(width, scanY); ctx.stroke();
    } else {
      // ui_wireframe / kernel_vm
      const boxCount = 4;
      const bw = (width - 30) / boxCount;
      for (let i = 0; i < boxCount; i++) {
        const bx = 15 + i * bw;
        ctx.strokeStyle = i === 1 ? 'rgba(0, 218, 243, 0.6)' : 'rgba(255, 255, 255, 0.15)';
        ctx.strokeRect(bx, 15, bw - 6, height - 30);
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

// TECH STACK VIEW
function initStackView() {
  renderStackSection('stack-frontend-list', SKILLS_DATA.filter(s => s.category === 'frontend'), 'green');
  renderStackSection('stack-backend-list', SKILLS_DATA.filter(s => s.category === 'backend'), 'cyan');
  renderStackSection('stack-devops-list', SKILLS_DATA.filter(s => s.category === 'devops'), 'purple');
  renderStackSection('stack-ai-list', SKILLS_DATA.filter(s => s.category === 'ai_systems'), 'green');

  // Terminal CLI form
  const cliForm = document.getElementById('stack-cli-form');
  const cliInput = document.getElementById('stack-cli-input');
  const feedbackEl = document.getElementById('stack-cli-feedback');

  if (cliForm) {
    cliForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = cliInput ? cliInput.value.trim() : '';
      if (!val) return;
      playKeyClick();

      const lower = val.toLowerCase();
      let msg = `service manager: '${val}' executed successfully.`;
      if (lower.startsWith('kill') || lower.startsWith('restart')) {
        msg = `Process daemon signaled: OK. System state synchronized.`;
      } else if (lower.includes('top') || lower.includes('htop')) {
        msg = `CPU Load: 12.4% | Memory: 4.8GB/16GB | Tasks: 12 running | Swp: 0MB`;
      }

      if (feedbackEl) {
        feedbackEl.textContent = msg;
        feedbackEl.parentElement.classList.remove('hidden');
        setTimeout(() => feedbackEl.parentElement.classList.add('hidden'), 3500);
      }
      if (cliInput) cliInput.value = '';
    });
  }
}

function renderStackSection(containerId, skills, theme) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  let barColor = 'bg-[#72ff70]';
  let textColor = 'text-[#72ff70]';
  if (theme === 'cyan') { barColor = 'bg-[#00daf3]'; textColor = 'text-[#00daf3]'; }
  if (theme === 'purple') { barColor = 'bg-[#d7baff]'; textColor = 'text-[#d7baff]'; }

  skills.forEach(s => {
    const card = document.createElement('div');
    card.className = 'bg-[#111111] p-4 flex flex-col gap-3 hover:bg-[#161616] border border-[#333333] hover:border-[#00ff66]/50 transition-all cursor-pointer relative group';
    
    card.innerHTML = `
      <div class="flex justify-between items-center text-xs sm:text-sm">
        <div class="flex items-center gap-2">
          <span class="text-white font-bold font-sans tracking-wide">${s.name}</span>
          <span class="text-[10px] text-[#666666] font-mono hidden sm:inline">${s.version}</span>
        </div>
        <div class="flex items-center gap-2">
          <button class="restart-service-btn opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 text-[#888888] hover:text-white transition-all cursor-pointer" title="Restart Daemon (systemctl restart)">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
          </button>
          <span class="${textColor} font-bold font-mono text-xs">${s.percentage}%</span>
        </div>
      </div>

      <div class="w-full h-1.5 bg-[#222222] overflow-hidden">
        <div class="h-full ${barColor} transition-all duration-700" style="width: ${s.percentage}%"></div>
      </div>

      <div class="flex justify-between items-center text-[10px] text-[#666666] font-mono">
        <span>PID: ${s.pid}</span>
        <span>MEM: ${s.memory}</span>
        <span>${s.cpuOrIo}</span>
      </div>

      <div class="detail-panel hidden mt-2 pt-2.5 border-t border-[#333333] text-xs text-[#cccccc] space-y-2 animate-fade-in font-sans">
        <p class="text-[#aaaaaa] leading-relaxed">${s.description}</p>
        <div class="flex flex-wrap gap-1">
          ${s.tags.map(t => `<span class="text-[9px] font-mono bg-[#181818] text-[#00daf3] px-1.5 py-0.5 border border-[#333333]">${t}</span>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.restart-service-btn')) return;
      playKeyClick();
      const detail = card.querySelector('.detail-panel');
      if (detail) detail.classList.toggle('hidden');
    });

    const restartBtn = card.querySelector('.restart-service-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playKeyClick();
        restartBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 animate-spin text-[#00ff66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`;
        setTimeout(() => {
          restartBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`;
          playSuccessChime();
        }, 800);
      });
    }

    container.appendChild(card);
  });
}

// CONTACT VIEW
function initContactView() {
  const form = document.getElementById('contact-form');
  const successOverlay = document.getElementById('contact-success-overlay');
  const resetBtn = document.getElementById('contact-reset-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      playCommandLaunch();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Transmitting packet over TCP/IP...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>./execute_send</span>`;
        }
        if (successOverlay) successOverlay.classList.remove('hidden');
        playSuccessChime();
      }, 1200);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      playKeyClick();
      if (form) form.reset();
      if (successOverlay) successOverlay.classList.add('hidden');
    });
  }

  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = e.currentTarget.dataset.copy;
      if (text) {
        navigator.clipboard.writeText(text);
        playSuccessChime();
        const orig = e.currentTarget.textContent;
        e.currentTarget.textContent = 'Copied!';
        setTimeout(() => e.currentTarget.textContent = orig, 2000);
      }
    });
  });
}

// MODALS (PROFILE, PROJECT DETAIL, CLI SHELL)
function initModals() {
  // Profile Modal
  const profileAvatarBtn = document.getElementById('header-avatar-btn');
  const profileModal = document.getElementById('profile-modal');
  const profileCloseBtn = document.getElementById('profile-modal-close');

  if (profileAvatarBtn && profileModal) {
    profileAvatarBtn.addEventListener('click', () => {
      playKeyClick();
      profileModal.classList.remove('hidden');
    });
  }
  if (profileCloseBtn && profileModal) {
    profileCloseBtn.addEventListener('click', () => {
      profileModal.classList.add('hidden');
    });
  }

  // Project Detail Modal Close
  const projectModal = document.getElementById('project-detail-modal');
  const projectCloseBtn = document.getElementById('project-modal-close');
  if (projectCloseBtn && projectModal) {
    projectCloseBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
    });
  }

  // Terminal CLI Modal Open/Close
  const cliTriggerBtn = document.getElementById('header-cli-btn');
  const cliModal = document.getElementById('cli-modal');
  const cliCloseBtn = document.getElementById('cli-modal-close');

  if (cliTriggerBtn && cliModal) {
    cliTriggerBtn.addEventListener('click', () => {
      playKeyClick();
      openCliModal();
    });
  }
  if (cliCloseBtn && cliModal) {
    cliCloseBtn.addEventListener('click', () => {
      cliModal.classList.add('hidden');
    });
  }

  // CLI Command Form & Quick Pills
  const cliForm = document.getElementById('cli-input-form');
  const cliInput = document.getElementById('cli-input-field');
  if (cliForm && cliInput) {
    cliForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!cliInput.value.trim()) return;
      handleCliCommand(cliInput.value.trim());
      cliInput.value = '';
    });

    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (cliCommandList.length > 0) {
          cliHistoryIndex = cliHistoryIndex === -1 ? cliCommandList.length - 1 : Math.max(0, cliHistoryIndex - 1);
          cliInput.value = cliCommandList[cliHistoryIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (cliHistoryIndex !== -1) {
          cliHistoryIndex++;
          if (cliHistoryIndex < cliCommandList.length) {
            cliInput.value = cliCommandList[cliHistoryIndex];
          } else {
            cliHistoryIndex = -1;
            cliInput.value = '';
          }
        }
      }
    });
  }

  document.querySelectorAll('.cli-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      handleCliCommand(e.currentTarget.dataset.cmd);
    });
  });
}

function openCliModal() {
  const cliModal = document.getElementById('cli-modal');
  if (cliModal) {
    cliModal.classList.remove('hidden');
    const input = document.getElementById('cli-input-field');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function openProjectModal(p) {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  document.getElementById('pm-permissions').textContent = p.permissions;
  document.getElementById('pm-filename').textContent = p.filename;
  document.getElementById('pm-category').textContent = p.category;
  document.getElementById('pm-title').textContent = p.title;
  document.getElementById('pm-status').textContent = `STATUS: ${p.activityStatus}`;
  document.getElementById('pm-stars').textContent = p.stars ? `★ ${p.stars.toLocaleString()} STARS` : '';
  document.getElementById('pm-synopsis').textContent = p.longDescription;
  document.getElementById('pm-latency').textContent = p.latency || 'Sub-millisecond';
  document.getElementById('pm-throughput').textContent = p.throughput || 'Scale-to-Zero';
  document.getElementById('pm-size').textContent = p.indexSize || 'Lightweight';
  document.getElementById('pm-activity-status').textContent = p.activityStatus;
  document.getElementById('pm-code-snippet').textContent = p.codeSnippet || '// No extract provided';
  document.getElementById('pm-repo-link').href = p.githubUrl || 'https://github.com';
  document.getElementById('pm-live-link').href = p.liveDemoUrl || '#';

  // Highlights list
  const highlightsContainer = document.getElementById('pm-highlights');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = p.highlights.map((h, i) => `
      <div class="flex items-start gap-3 bg-[#111111] p-3.5 border border-[#333333]">
        <span class="text-[#00daf3] text-xs font-mono font-bold mt-0.5">[0${i + 1}]</span>
        <span class="text-[#dddddd] text-xs sm:text-sm leading-relaxed">${h}</span>
      </div>
    `).join('');
  }

  // Modal tabs
  const tabBtns = document.querySelectorAll('.pm-tab-btn');
  const panels = document.querySelectorAll('.pm-tab-panel');
  tabBtns.forEach(btn => {
    btn.onclick = () => {
      playKeyClick();
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.className = 'pm-tab-btn px-4 py-2.5 text-xs font-bold transition-colors border-b-2 text-[#888888] border-transparent hover:text-white cursor-pointer');
      btn.className = 'pm-tab-btn px-4 py-2.5 text-xs font-bold transition-colors border-b-2 text-[#00ff66] border-[#00ff66] bg-[#181818] cursor-pointer';

      panels.forEach(p => p.classList.add('hidden'));
      const targetPanel = document.getElementById(`pm-panel-${target}`);
      if (targetPanel) targetPanel.classList.remove('hidden');
    };
  });

  const canvas = modal.querySelector('.project-modal-canvas');
  if (canvas) renderGenerativeCanvas(canvas, p.visualType);

  modal.classList.remove('hidden');
}

function handleCliCommand(cmdStr) {
  const trimmed = cmdStr.trim();
  if (!trimmed) return;

  playKeyClick();
  cliCommandList.push(trimmed);
  cliHistoryIndex = -1;

  const parts = trimmed.split(' ');
  const mainCmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(' ').toLowerCase();

  let outputHtml = '';

  switch (mainCmd) {
    case 'help':
      outputHtml = `
        <div class="space-y-1.5 text-xs text-white/80">
          <p style="color: #72ff70; font-weight: bold;">AVAILABLE SYSTEM COMMANDS:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 font-mono">
            <div><span style="color: #00daf3; font-weight: 600;">projects / ls</span> - List engineering projects</div>
            <div><span style="color: #00daf3; font-weight: 600;">stack / skills</span> - Inspect tech stack resources</div>
            <div><span style="color: #00daf3; font-weight: 600;">contact / msg</span> - Launch contact terminal</div>
            <div><span style="color: #00daf3; font-weight: 600;">home</span> - Navigate to Home screen</div>
            <div><span style="color: #00daf3; font-weight: 600;">cat bio.txt</span> - Display engineer biography</div>
            <div><span style="color: #00daf3; font-weight: 600;">whoami</span> - Identity & credentials readout</div>
            <div><span style="color: #00daf3; font-weight: 600;">sound [on|off]</span> - Toggle synthesized audio</div>
            <div><span style="color: #00daf3; font-weight: 600;">crt</span> - Toggle CRT scanlines effect</div>
            <div><span style="color: #00daf3; font-weight: 600;">date / uptime</span> - Show system time & uptime</div>
            <div><span style="color: #00daf3; font-weight: 600;">clear</span> - Clear terminal buffer</div>
            <div><span style="color: #00daf3; font-weight: 600;">exit</span> - Close interactive terminal</div>
          </div>
        </div>`;
      break;

    case 'ls':
    case 'projects':
      outputHtml = `
        <div class="space-y-2 text-xs font-mono">
          <p style="color: rgba(255,255,255,0.6);">total ${PROJECTS_DATA.length} projects in ~/projects/portfolio:</p>
          <div class="space-y-1">
            ${PROJECTS_DATA.map(p => `
              <div class="flex items-center gap-3 hover:bg-white/5 px-1 py-0.5 rounded cursor-pointer" onclick="setActiveTab('projects'); document.getElementById('cli-modal').classList.add('hidden');">
                <span style="color: rgba(255,255,255,0.4);">${p.permissions}</span>
                <span style="color: #72ff70; font-weight: 600;">${p.filename}</span>
                <span style="color: rgba(255,255,255,0.6);" class="truncate hidden sm:inline">- ${p.description.slice(0, 45)}...</span>
                <span style="color: #00daf3; font-size: 10px; margin-left: auto;">[${p.category}]</span>
              </div>
            `).join('')}
          </div>
        </div>`;
      break;

    case 'stack':
    case 'skills':
      outputHtml = `
        <div class="space-y-2 text-xs font-mono">
          <p style="color: #72ff70; font-weight: bold;">SYSTEM RESOURCE ALLOCATION TABLE:</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
            ${SKILLS_DATA.map(s => `
              <div class="p-1.5 bg-black/40 border border-white/10 rounded">
                <div class="flex justify-between font-bold" style="color: #00daf3;">
                  <span>${s.name}</span>
                  <span>${s.percentage}%</span>
                </div>
                <div style="color: rgba(255,255,255,0.5); font-size: 10px;">PID: ${s.pid} | ${s.cpuOrIo}</div>
              </div>
            `).join('')}
          </div>
        </div>`;
      break;

    case 'cat':
      if (arg === 'bio.txt' || arg === 'about.txt' || arg === 'bio') {
        outputHtml = `
          <div class="text-xs space-y-1 text-white/80 border-l-2 border-[#72ff70] pl-3 py-1 bg-white/5 font-mono">
            <p style="color: #72ff70; font-weight: bold;">${ENGINEER_PROFILE.name} // ${ENGINEER_PROFILE.title}</p>
            <p>${ENGINEER_PROFILE.shortBio}</p>
            <p style="color: rgba(255,255,255,0.6);">Location: ${ENGINEER_PROFILE.location}</p>
          </div>`;
      } else {
        outputHtml = `<p style="color: #ff5555;" class="text-xs font-mono">cat: ${arg || 'file'}: No such file or directory. Try \`cat bio.txt\`</p>`;
      }
      break;

    case 'whoami':
      outputHtml = `
        <div class="text-xs space-y-1 text-white/90 font-mono">
          <p style="color: #72ff70;">user: ${ENGINEER_PROFILE.handle} (uid=1000 gid=1000)</p>
          <p style="color: rgba(255,255,255,0.7);">Role: ${ENGINEER_PROFILE.title}</p>
          <p style="color: rgba(255,255,255,0.7);">Organization: ${ENGINEER_PROFILE.company}</p>
          <p style="color: rgba(255,255,255,0.7);">Location: ${ENGINEER_PROFILE.location}</p>
          <p style="color: rgba(255,255,255,0.7);">Education: MCA — IGNOU (Currently Pursuing)</p>
          <p style="color: #00daf3;">Status: ${ENGINEER_PROFILE.statusText}</p>
        </div>`;
      break;

    case 'achievements':
    case 'awards':
      outputHtml = `
        <div class="text-xs space-y-1.5 font-mono text-white/90">
          <p style="color: #72ff70; font-weight: bold;">[01] HACKATHON ACHIEVEMENT:</p>
          <p style="color: #00daf3; font-weight: bold;">1st Prize — DevByZero Hackathon (DMCON Kerala 2025)</p>
          <p class="text-white/70">Team: Team Mission Control | Project: FlowLens</p>
          <p class="text-white/60">${ENGINEER_PROFILE.achievement.description}</p>
        </div>`;
      break;

    case 'education':
      outputHtml = `
        <div class="text-xs space-y-2 font-mono text-white/90">
          <div>
            <p style="color: #72ff70; font-weight: bold;">[01] CURRENT EDUCATION</p>
            <p class="text-white font-bold">${ENGINEER_PROFILE.educationCurrent.degree}</p>
            <p class="text-white/70">${ENGINEER_PROFILE.educationCurrent.institution} (${ENGINEER_PROFILE.educationCurrent.mode})</p>
            <p style="color: #00daf3;">Status: ${ENGINEER_PROFILE.educationCurrent.status} (${ENGINEER_PROFILE.educationCurrent.period})</p>
          </div>
          <div class="pt-1">
            <p style="color: #72ff70; font-weight: bold;">[02] PREVIOUS EDUCATION</p>
            <p class="text-white font-bold">${ENGINEER_PROFILE.educationPrevious.degree}</p>
            <p class="text-white/70">${ENGINEER_PROFILE.educationPrevious.institution} / ${ENGINEER_PROFILE.educationPrevious.university}</p>
            <p style="color: #00ff66;">Status: ${ENGINEER_PROFILE.educationPrevious.status}</p>
          </div>
        </div>`;
      break;

    case 'home':
      setActiveTab('home');
      document.getElementById('cli-modal').classList.add('hidden');
      return;

    case 'contact':
    case 'msg':
      setActiveTab('contact');
      document.getElementById('cli-modal').classList.add('hidden');
      return;

    case 'clear':
      cliHistory = [];
      renderCliHistory();
      return;

    case 'exit':
    case 'quit':
      document.getElementById('cli-modal').classList.add('hidden');
      return;

    default:
      playBeep(440, 0.1);
      outputHtml = `<p style="color: #ff5555;" class="text-xs font-mono">zsh: command not found: ${trimmed}. Type 'help' for commands.</p>`;
      break;
  }

  cliHistory.push({ id: Math.random().toString(), command: trimmed, outputHtml });
  renderCliHistory();
}

function renderCliHistory() {
  const container = document.getElementById('cli-history-container');
  if (!container) return;

  container.innerHTML = cliHistory.map(item => `
    <div class="space-y-1">
      <div class="flex items-center gap-2 text-xs text-white/60 font-mono">
        <span style="color: #00daf3;">adithyan@portfolio</span>
        <span style="color: #444444;">:</span>
        <span style="color: #d7baff;">~</span>
        <span style="color: #00ff66;">$</span>
        <span class="text-white font-medium">${item.command}</span>
      </div>
      <div class="pl-3">${item.outputHtml}</div>
    </div>
  `).join('');

  container.scrollTop = container.scrollHeight;
}

// KEYBOARD SHORTCUTS
function initKeyboardListeners() {
  window.addEventListener('keydown', (e) => {
    const target = e.target;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      if (e.key === 'Escape') {
        const cliModal = document.getElementById('cli-modal');
        if (cliModal && !cliModal.classList.contains('hidden')) {
          cliModal.classList.add('hidden');
        }
      }
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const cliModal = document.getElementById('cli-modal');
      if (cliModal) {
        if (cliModal.classList.contains('hidden')) openCliModal();
        else cliModal.classList.add('hidden');
      }
    } else if (e.key === '/') {
      e.preventDefault();
      openCliModal();
    } else if (e.key === '1') {
      setActiveTab('home');
    } else if (e.key === '2') {
      setActiveTab('projects');
    } else if (e.key === '3') {
      setActiveTab('stack');
    } else if (e.key === '4') {
      setActiveTab('contact');
    } else if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
    }
  });
}

// TELEMETRY TICKER
function initTelemetryTicker() {
  const pingEl = document.getElementById('ticker-ping');
  const loadEl = document.getElementById('ticker-load');
  const ioEl = document.getElementById('ticker-io');

  setInterval(() => {
    if (pingEl) pingEl.textContent = `PING: ${Math.floor(16 + Math.random() * 6)}ms`;
    if (loadEl) loadEl.textContent = `LOAD: ${(0.12 + Math.random() * 0.05).toFixed(2)}`;
    if (ioEl) ioEl.textContent = `IO: ${(12.1 + Math.random() * 0.8).toFixed(1)}k/s`;
  }, 3000);
}
