// ---------------------- MASTER SKILL DICTIONARY (for tooltips on BOTH overlap and gap) ----------------------
const validSkillsSet = new Set([
  "Blender", "Maya", "3ds Max", "ZBrush", "Texturing", "Sculpting", "After Effects", "Spine", "Motion Graphics", "Storyboarding",
  "Java", "Swift", "Kotlin", "Android SDK", "REST APIs", "Python", "TensorFlow", "PyTorch", "LLMs", "MLOps", "Node.js", "Go",
  "Databases", "AWS", "Illustrator", "Photoshop", "Brand Strategy", "Typography", "Figma", "SQL", "Power BI", "Tableau", "Excel",
  "Data Viz", "ETL", "SSIS", "Data Warehousing", "Terraform", "Kubernetes", "CI/CD", "HTML/CSS", "JavaScript", "React", "Git",
  "Agile", "JIRA", "Leadership", "Customer Service", "Problem Solving", "SEO", "Copywriting", "Grammar", "AP Style", "Proofreading",
  "CMS", "Attention to Detail", "Research", "Prototyping", "User Research", "Selenium", "Automation", "Video Editing", "Social Media",
  "Scriptwriting", "Analytics", "Persuasive Writing", "Storytelling", "Brand Voice"
]);
const allValidSkills = Array.from(validSkillsSet).sort();

// Skill definitions for tooltips
const skillDefinitions = {
  "Blender": "Free 3D creation suite for modeling, animation, and rendering.",
  "Maya": "Professional 3D animation software used in films/games.",
  "3ds Max": "3D modeling & rendering tool for games and arch-viz.",
  "ZBrush": "Digital sculpting tool that feels like working with real clay.",
  "Texturing": "Applying colors, patterns, and surface details to 3D models.",
  "Sculpting": "Digitally shaping organic 3D forms like characters.",
  "After Effects": "Motion graphics and visual effects for video post-production.",
  "Spine": "2D skeletal animation tool for games.",
  "Motion Graphics": "Animating graphic design elements for videos.",
  "Storyboarding": "Drawing rough panels to plan video or animation scenes.",
  "Java": "Object-oriented language for Android apps & backend systems.",
  "Swift": "Apple’s language for building iOS/macOS apps.",
  "Kotlin": "Modern Android development language.",
  "Android SDK": "Tools to build Android applications.",
  "REST APIs": "Rules for software systems to communicate over the web.",
  "Python": "Beginner-friendly language for AI, data, and web dev.",
  "TensorFlow": "Google’s library for machine learning.",
  "PyTorch": "Facebook’s deep learning framework.",
  "LLMs": "Large Language Models like GPT that understand text.",
  "MLOps": "Practices for deploying & maintaining ML models.",
  "Node.js": "JavaScript runtime for servers.",
  "Go": "Google’s language for high-performance backend systems.",
  "Databases": "Organized data collections, often managed with SQL.",
  "AWS": "Amazon’s cloud platform for computing & storage.",
  "Illustrator": "Vector graphics editor for logos and scalable art.",
  "Photoshop": "Image editing & digital painting software.",
  "Brand Strategy": "Long-term plan to develop a successful brand identity.",
  "Typography": "Art of arranging type to be readable & appealing.",
  "Figma": "Collaborative design tool for UI/UX and prototyping.",
  "SQL": "Language to query and manage relational databases.",
  "Power BI": "Microsoft’s interactive dashboard tool.",
  "Tableau": "Data visualization software for easy-to-read graphs.",
  "Excel": "Spreadsheet program for data analysis & formulas.",
  "Data Viz": "Presenting data graphically to reveal insights.",
  "ETL": "Extract, Transform, Load – moving data to a warehouse.",
  "SSIS": "SQL Server tool for data migration and ETL.",
  "Data Warehousing": "Central storage for analysis from multiple sources.",
  "Terraform": "Infrastructure-as-code to manage cloud resources.",
  "Kubernetes": "Automates deployment & scaling of containerized apps.",
  "CI/CD": "Automated software release pipeline.",
  "HTML/CSS": "Structure (HTML) and styling (CSS) for web pages.",
  "JavaScript": "Language that makes websites interactive.",
  "React": "Library for building user interfaces with components.",
  "Git": "Version control to track code changes & collaborate.",
  "Agile": "Flexible project management with iterative delivery.",
  "JIRA": "Issue tracking tool for Agile teams.",
  "Leadership": "Ability to guide, motivate, and influence a team.",
  "Customer Service": "Helping customers effectively & ensuring satisfaction.",
  "Problem Solving": "Finding solutions to complex challenges.",
  "SEO": "Optimizing content to rank higher in search results.",
  "Copywriting": "Writing persuasive text for ads & marketing.",
  "Grammar": "Rules of language for clear, correct writing.",
  "AP Style": "Standardized guidelines for journalists & editors.",
  "Proofreading": "Checking text for spelling, grammar, & formatting errors.",
  "CMS": "Content Management System like WordPress.",
  "Attention to Detail": "Carefully checking work to avoid mistakes.",
  "Research": "Gathering & analyzing information to inform decisions.",
  "Prototyping": "Creating early product samples to test ideas.",
  "User Research": "Studying user behaviors to improve product design.",
  "Selenium": "Tool for automating web browser testing.",
  "Automation": "Using software to perform repetitive tasks automatically.",
  "Video Editing": "Cutting, arranging, and enhancing video footage.",
  "Social Media": "Managing platforms like Instagram, TikTok for engagement.",
  "Scriptwriting": "Writing scripts for videos, podcasts, or presentations.",
  "Analytics": "Interpreting data to measure performance and trends.",
  "Persuasive Writing": "Crafting compelling text to influence readers.",
  "Storytelling": "Using narrative techniques to engage an audience.",
  "Brand Voice": "Consistent personality and tone in brand communications."
};

function getTooltipText(skill) { return skillDefinitions[skill] || `Learn more about ${skill} — a valuable industry skill.`; }

// Career library
const careerLibrary = {
  "3D Modeler": { baseMatch: 70, requiredSkills: ["Blender","Maya","3ds Max","ZBrush","Texturing","Sculpting"], salary: "$55k-$95k", demand: "Moderate", remoteFlex: "Often Remote", creativity: "Very High", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 3 },
  "Animator": { baseMatch: 68, requiredSkills: ["After Effects","Spine","Maya","Motion Graphics","Storyboarding"], salary: "$52k-$88k", demand: "Studio hubs", remoteFlex: "Hybrid", creativity: "Very High", stress: "High", remotePreferenceMatch: false, salaryTier: 1, workLifeBalance: 2 },
  "Application Developer": { baseMatch: 74, requiredSkills: ["Java","Swift","Kotlin","Android SDK","REST APIs"], salary: "$75k-$125k", demand: "Very High", remoteFlex: "High remote", creativity: "Medium", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 3, workLifeBalance: 3 },
  "Artificial Intelligence Engineer": { baseMatch: 78, requiredSkills: ["Python","TensorFlow","PyTorch","LLMs","Data Structures","MLOps"], salary: "$110k-$180k", demand: "Extreme", remoteFlex: "High", creativity: "High", stress: "High", remotePreferenceMatch: true, salaryTier: 4, workLifeBalance: 2 },
  "Backend Developer": { baseMatch: 75, requiredSkills: ["Node.js","Python","Go","Databases","REST APIs","AWS"], salary: "$80k-$140k", demand: "Very High", remoteFlex: "Very High", creativity: "Medium", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 3, workLifeBalance: 3 },
  "Brand Designer": { baseMatch: 67, requiredSkills: ["Illustrator","Photoshop","Brand Strategy","Typography","Figma"], salary: "$60k-$100k", demand: "Steady", remoteFlex: "Flexible", creativity: "Very High", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 3 },
  "Business Intelligence Analyst": { baseMatch: 72, requiredSkills: ["SQL","Power BI","Tableau","Excel","Data Viz"], salary: "$70k-$115k", demand: "High", remoteFlex: "High", creativity: "Low-Medium", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 3, workLifeBalance: 4 },
  "Business Intelligence Developer": { baseMatch: 73, requiredSkills: ["SQL","ETL","SSIS","Power BI","Data Warehousing"], salary: "$80k-$130k", demand: "High", remoteFlex: "High", creativity: "Low", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 3, workLifeBalance: 3 },
  "Cloud Engineer": { baseMatch: 76, requiredSkills: ["AWS","Terraform","Kubernetes","CI/CD","Python"], salary: "$95k-$155k", demand: "Very High", remoteFlex: "High", creativity: "Low-Medium", stress: "High", remotePreferenceMatch: true, salaryTier: 4, workLifeBalance: 2 },
  "Content Creator": { baseMatch: 65, requiredSkills: ["Video Editing","SEO","Social Media","Scriptwriting","Analytics"], salary: "$45k-$120k", demand: "Growing", remoteFlex: "Fully Remote", creativity: "Very High", stress: "High", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 2 },
  "Copy Editor": { baseMatch: 69, requiredSkills: ["Grammar","AP Style","Proofreading","CMS","Attention to Detail"], salary: "$50k-$80k", demand: "Stable", remoteFlex: "High remote", creativity: "Medium", stress: "Low-Medium", remotePreferenceMatch: true, salaryTier: 1, workLifeBalance: 4 },
  "Copywriter": { baseMatch: 68, requiredSkills: ["Persuasive Writing","SEO","Research","Storytelling","Brand Voice"], salary: "$55k-$95k", demand: "High", remoteFlex: "High", creativity: "High", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 3 },
  "UI/UX Designer": { baseMatch: 82, requiredSkills: ["Figma","User Research","HTML/CSS","Problem Solving","Prototyping"], salary: "$65k-$110k", demand: "High demand", remoteFlex: "Fully Remote", creativity: "Very High", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 3 },
  "Frontend Developer": { baseMatch: 68, requiredSkills: ["JavaScript","React","Git","HTML/CSS","Problem Solving"], salary: "$70k-$120k", demand: "Very High", remoteFlex: "Occasional Remote", creativity: "High", stress: "High", remotePreferenceMatch: false, salaryTier: 3, workLifeBalance: 2 },
  "Data Analyst": { baseMatch: 71, requiredSkills: ["SQL","Tableau","Stats","Python","Problem Solving"], salary: "$68k-$115k", demand: "High", remoteFlex: "High remote", creativity: "Moderate", stress: "Moderate", remotePreferenceMatch: true, salaryTier: 2, workLifeBalance: 3 },
  "QA Engineer": { baseMatch: 59, requiredSkills: ["Automation","Selenium","JIRA","Customer Service","Problem Solving"], salary: "$60k-$95k", demand: "Stable", remoteFlex: "Hybrid", creativity: "Low-Medium", stress: "Moderate", remotePreferenceMatch: false, salaryTier: 2, workLifeBalance: 3 },
  "Project Manager": { baseMatch: 64, requiredSkills: ["Agile","JIRA","Leadership","Customer Service","Problem Solving"], salary: "$75k-$130k", demand: "Very High", remoteFlex: "Flexible", creativity: "Medium", stress: "High", remotePreferenceMatch: true, salaryTier: 3, workLifeBalance: 2 }
};

const allCareers = Object.keys(careerLibrary).sort();
function populateDropdowns() {
  const s1 = document.getElementById("career1Select"), s2 = document.getElementById("career2Select");
  allCareers.forEach(c => { s1.appendChild(new Option(c, c)); s2.appendChild(new Option(c, c)); });
}
populateDropdowns();

let currentSkills = [];
let selectedLeft = "UI/UX Designer";
let selectedRight = "Frontend Developer";

function computeDynamicScore(careerKey, userSkills, salaryWLB, remoteSlider) {
  const career = careerLibrary[careerKey];
  if (!career) return 50;
  let match = 0;
  for (let req of career.requiredSkills) if (userSkills.includes(req)) match++;
  const ratio = career.requiredSkills.length === 0 ? 0.8 : match / career.requiredSkills.length;
  let raw = 45 + (ratio * 45);
  let wlbBonus = 0;
  if (salaryWLB <= 40) wlbBonus = (career.salaryTier - 2) * 3;
  else if (salaryWLB >= 60) wlbBonus = (career.workLifeBalance - 2) * 3;
  else wlbBonus = ((career.salaryTier - 2) * 1.5 + (career.workLifeBalance - 2) * 1.5) / 2;
  let remoteBonus = 0;
  if (remoteSlider <= 40 && career.remotePreferenceMatch) remoteBonus = 10;
  else if (remoteSlider <= 60 && career.remotePreferenceMatch) remoteBonus = 4;
  else if (remoteSlider > 70 && !career.remotePreferenceMatch) remoteBonus = 3;
  else if (remoteSlider > 70 && career.remotePreferenceMatch) remoteBonus = -2;
  let final = Math.min(96, Math.max(38, Math.floor(raw + wlbBonus + remoteBonus)));
  if (career.baseMatch) final = Math.floor((final + career.baseMatch) / 2);
  return Math.min(96, Math.max(38, final));
}

function getSkillProfile(careerKey, userSkills) {
  const career = careerLibrary[careerKey];
  const overlapping = [], gaps = [];
  for (let req of career.requiredSkills) {
    if (userSkills.includes(req)) overlapping.push(req);
    else gaps.push(req);
  }
  return { overlapping, gaps };
}

// ----- TOOLTIP: unified for BOTH .green-tag (overlap) and .warning-tag (gap) -----
const tooltipEl = document.getElementById("floatingTooltip");
let tooltipTimer;
function positionTooltip(element, text) {
  const rect = element.getBoundingClientRect();
  tooltipEl.innerHTML = text;
  tooltipEl.style.display = "block";
  tooltipEl.style.opacity = "0";
  const w = tooltipEl.offsetWidth, h = tooltipEl.offsetHeight;
  let left = rect.left + rect.width/2 - w/2;
  let top = rect.top - h - 12;
  // clamp horizontally to viewport
  if (left < 8) left = 8;
  if (left + w > window.innerWidth - 8) left = window.innerWidth - w - 8;
  // if not enough space above, place below the element
  const placedBelow = (top < 8);
  if (placedBelow) top = rect.bottom + 12;

  // set position
  tooltipEl.style.left = left + "px";
  tooltipEl.style.top = top + "px";

  // compute arrow horizontal offset relative to tooltip left
  const arrowOffset = Math.round((rect.left + rect.width/2) - left);
  tooltipEl.style.setProperty('--arrow-left', arrowOffset + 'px');

  // flip arrow direction class
  tooltipEl.classList.remove('above', 'below');
  tooltipEl.classList.add(placedBelow ? 'below' : 'above');

  tooltipEl.style.opacity = "1"; tooltipEl.classList.add("visible");
}
function showTooltip(e, el) { if (tooltipTimer) clearTimeout(tooltipTimer); const txt = el.getAttribute("data-tooltip"); if (txt) positionTooltip(el, txt); }
function hideTooltip() { tooltipTimer = setTimeout(() => { tooltipEl.classList.remove("visible"); tooltipEl.style.opacity = "0"; tooltipEl.style.display = "none"; }, 100); }

function attachTooltipsToAllSkillTags() {
  // For green tags (overlapping)
  document.querySelectorAll(".green-tag").forEach(tag => {
    const skill = tag.innerText.trim();
    tag.setAttribute("data-tooltip", getTooltipText(skill));
    tag.removeEventListener("mouseenter", tag._enter);
    tag.removeEventListener("mouseleave", tag._leave);
    const enter = (e) => showTooltip(e, tag);
    const leave = () => hideTooltip();
    tag.addEventListener("mouseenter", enter);
    tag.addEventListener("mouseleave", leave);
    tag._enter = enter; tag._leave = leave;
  });
  // For warning tags (gaps)
  document.querySelectorAll(".warning-tag").forEach(tag => {
    const skill = tag.innerText.trim();
    tag.setAttribute("data-tooltip", getTooltipText(skill));
    tag.removeEventListener("mouseenter", tag._enter);
    tag.removeEventListener("mouseleave", tag._leave);
    const enter = (e) => showTooltip(e, tag);
    const leave = () => hideTooltip();
    tag.addEventListener("mouseenter", enter);
    tag.addEventListener("mouseleave", leave);
    tag._enter = enter; tag._leave = leave;
  });
}

function buildCareerCard(careerName, score, skillProfile, careerData, isPrimary, remoteMatchText) {
  const gapPercent = 100 - score;
  const buttonHtml = isPrimary ? `<button class="btn-match-primary" data-career="${careerName}">✨ You're ${score}% ready! View 14 Entry-Level Roles</button>` : `<button class="btn-gap-secondary" data-career="${careerName}">📚 Bridge the ${gapPercent}% Gap: See Micro-Courses</button>`;
  const gapsHtml = skillProfile.gaps.length ? skillProfile.gaps.map(s => `<span class="warning-tag">${s}</span>`).join('') : '<span class="green-tag">🎉 No critical gaps!</span>';
  const overlappingHtml = skillProfile.overlapping.length ? skillProfile.overlapping.map(s => `<span class="green-tag">${s}</span>`).join('') : '<span class="empty-skill-message">✨ No overlapping skills yet — add matching skills above</span>';
  return `<div class="career-card"><div class="card-header">${careerName === selectedLeft ? "📌" : "💻"} ${careerName}</div><div class="card-body"><div class="gauge-area"><svg width="110" height="110" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="${isPrimary ? '#10b981' : '#f97316'}" stroke-width="10" stroke-dasharray="${2*Math.PI*52}" stroke-dashoffset="${2*Math.PI*52*(1-score/100)}" transform="rotate(-90 60 60)" stroke-linecap="round"/><text x="60" y="70" text-anchor="middle" fill="#0f172a" font-size="22" font-weight="bold">${score}%</text><text x="60" y="88" text-anchor="middle" fill="#64748b" font-size="8">Pivot</text></svg></div><div class="skills-subgrid"><div class="skill-category"><h4>✅ Overlapping Skills (You Have)</h4><div>${overlappingHtml}</div></div><div class="skill-category"><h4>⚠️ Skills to Acquire (Gap)</h4><div>${gapsHtml}</div></div></div><div class="lifestyle-table"><div class="lifestyle-row"><strong>💰 Salary Range</strong><span>${careerData.salary}</span></div><div class="lifestyle-row"><strong>📈 Market Demand</strong><span>${careerData.demand}</span></div><div class="lifestyle-row"><strong>🏡 Remote Flexibility</strong><span class="badge-match">${remoteMatchText}</span></div><div class="lifestyle-row"><strong>🎨 Creativity Level</strong><span>${careerData.creativity}</span></div><div class="lifestyle-row"><strong>⚡ Stress/Burnout</strong><span>${careerData.stress}</span></div></div><div class="footer-action">${buttonHtml}</div></div></div>`;
}

function renderDashboard() {
  const wlb = parseInt(document.getElementById("prioritySlider1").value);
  const remote = parseInt(document.getElementById("prioritySlider2").value);
  const leftScore = computeDynamicScore(selectedLeft, currentSkills, wlb, remote);
  const rightScore = computeDynamicScore(selectedRight, currentSkills, wlb, remote);
  const leftProfile = getSkillProfile(selectedLeft, currentSkills);
  const rightProfile = getSkillProfile(selectedRight, currentSkills);
  const leftData = careerLibrary[selectedLeft], rightData = careerLibrary[selectedRight];
  const isLeftHigher = leftScore >= rightScore;
  const remotePref = remote <= 50;
  const leftMatch = (remotePref && leftData.remotePreferenceMatch) ? "✓ Matching Preference" : (leftData.remotePreferenceMatch ? "Remote Friendly" : "Less Remote");
  const rightMatch = (remotePref && rightData.remotePreferenceMatch) ? "✓ Matching Preference" : (rightData.remotePreferenceMatch ? "Remote Friendly" : "Occasional Remote");
  document.getElementById("comparisonGrid").innerHTML = buildCareerCard(selectedLeft, leftScore, leftProfile, leftData, isLeftHigher, leftMatch) + buildCareerCard(selectedRight, rightScore, rightProfile, rightData, !isLeftHigher, rightMatch);
  attachTooltipsToAllSkillTags();
  document.querySelectorAll(".btn-match-primary").forEach(btn => btn.addEventListener("click", () => alert("🔍 Explore 14 entry-level roles — great alignment!")));
  document.querySelectorAll(".btn-gap-secondary").forEach(btn => btn.addEventListener("click", () => alert("🎓 Micro-courses recommended to close skill gaps.")));
}

function refreshPills() {
  const container = document.getElementById("skillPillsContainer");
  container.innerHTML = currentSkills.map(skill => `<div class="skill-pill">${skill} <span class="pill-remove" data-skill="${skill}">✕</span></div>`).join('');
  document.querySelectorAll('.pill-remove').forEach(el => el.addEventListener('click', () => { currentSkills = currentSkills.filter(s => s !== el.getAttribute('data-skill')); refreshPills(); renderDashboard(); }));
  renderDashboard();
}

// Suggestion & error handling
const inputEl = document.getElementById("newSkillInput");
const suggestionsDiv = document.getElementById("suggestionsList");
const errorMsgSpan = document.getElementById("skillErrorMsg");

function updateSuggestions() {
  const query = inputEl.value.trim().toLowerCase();
  if (query.length === 0) { suggestionsDiv.style.display = "none"; return; }
  const matches = allValidSkills.filter(skill => skill.toLowerCase().startsWith(query)).slice(0, 8);
  if (matches.length === 0) { suggestionsDiv.style.display = "none"; return; }
  suggestionsDiv.innerHTML = matches.map(m => `<div class="suggestion-item" data-skill="${m}">${m}</div>`).join('');
  suggestionsDiv.style.display = "block";
  document.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("click", () => { inputEl.value = item.getAttribute("data-skill"); suggestionsDiv.style.display = "none"; inputEl.focus(); });
  });
}
function hideSuggestions(e) { if (!suggestionsDiv.contains(e.target) && e.target !== inputEl) setTimeout(() => suggestionsDiv.style.display = "none", 150); }
inputEl.addEventListener("input", updateSuggestions);
document.addEventListener("click", hideSuggestions);

function addSkill() {
  const raw = inputEl.value.trim();
  if (!raw) return;
  const capitalized = raw.charAt(0).toUpperCase() + raw.slice(1);
  if (!validSkillsSet.has(capitalized)) {
    errorMsgSpan.innerText = `Error: Skill "${raw}" not found. Please select from suggestions.`;
    errorMsgSpan.style.display = "block";
    setTimeout(() => { errorMsgSpan.style.display = "none"; }, 2500);
    return;
  }
  errorMsgSpan.style.display = "none";
  if (!currentSkills.includes(capitalized)) {
    currentSkills.push(capitalized);
    refreshPills();
    renderDashboard();
    inputEl.value = "";
    suggestionsDiv.style.display = "none";
  } else {
    errorMsgSpan.innerText = `Skill "${capitalized}" already added.`;
    errorMsgSpan.style.display = "block";
    setTimeout(() => errorMsgSpan.style.display = "none", 1500);
  }
}

document.getElementById("confirmAddSkillBtn").addEventListener("click", addSkill);
inputEl.addEventListener("keypress", (e) => { if (e.key === "Enter") addSkill(); });

function bindSliders() { document.getElementById("prioritySlider1").addEventListener("input", () => renderDashboard()); document.getElementById("prioritySlider2").addEventListener("input", () => renderDashboard()); }

// Landing duplicate check
const landingErrorDiv = document.getElementById("landingError");
document.getElementById("generateBtn").addEventListener("click", () => {
  const c1 = document.getElementById("career1Select").value, c2 = document.getElementById("career2Select").value;
  if (!c1 || !c2) { landingErrorDiv.innerText = "⚠️ Please select both career paths."; landingErrorDiv.style.display = "block"; setTimeout(() => landingErrorDiv.style.display = "none", 3000); return; }
  if (c1 === c2) { landingErrorDiv.innerText = "❌ Cannot compare the same career. Choose two different paths."; landingErrorDiv.style.display = "block"; setTimeout(() => landingErrorDiv.style.display = "none", 3000); return; }
  landingErrorDiv.style.display = "none";
  selectedLeft = c1; selectedRight = c2;
  refreshPills(); renderDashboard();
  document.getElementById("landingView").classList.add("hidden-view");
  document.getElementById("dashboardView").classList.remove("hidden-view");
});
document.getElementById("backToLandingBtn").addEventListener("click", () => { document.getElementById("dashboardView").classList.add("hidden-view"); document.getElementById("landingView").classList.remove("hidden-view"); });

refreshPills(); bindSliders(); renderDashboard();
document.getElementById("dashboardView").classList.add("hidden-view");
document.getElementById("landingView").classList.remove("hidden-view");
