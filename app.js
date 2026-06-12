// HABIT DATABASE DEFINITION
const HABIT_DATABASE = [
  // TRANSPORT HABITS
  {
    id: 'habit-bike',
    name: 'Biked / Walked Commute',
    category: 'transport',
    saved: 6.2,
    xp: 20,
    difficulty: 'high',
    icon: `<svg viewBox="0 0 24 24"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/><path d="M15 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-3 5.5v-4L9.5 14H6M12 11.5L15 17h3.5"/></svg>`,
    description: 'Replaced a driving trip with a bike ride or walk.'
  },
  {
    id: 'habit-transit',
    name: 'Took Public Transit',
    category: 'transport',
    saved: 4.8,
    xp: 15,
    difficulty: 'medium',
    icon: `<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="18" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><path d="M9 22v-2M15 22v-2"/></svg>`,
    description: 'Used train, metro, or bus instead of a private petrol vehicle.'
  },
  {
    id: 'habit-carpool',
    name: 'Carpouled with Others',
    category: 'transport',
    saved: 3.1,
    xp: 10,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: 'Shared a commute with coworkers or friends.'
  },
  // ENERGY HABITS
  {
    id: 'habit-led',
    name: 'Switched off Unused Appliances',
    category: 'energy',
    saved: 0.9,
    xp: 5,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16"/></svg>`,
    description: 'Unplugged vampire loads or shut off devices completely.'
  },
  {
    id: 'habit-thermostat',
    name: 'Adjusted Thermostat by 2°F',
    category: 'energy',
    saved: 2.5,
    xp: 10,
    difficulty: 'medium',
    icon: `<svg viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
    description: 'Lowered heating in winter or raised AC setting in summer.'
  },
  {
    id: 'habit-coldwash',
    name: 'Washed Laundry in Cold Water',
    category: 'energy',
    saved: 1.4,
    xp: 8,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 1 0 8 0"/></svg>`,
    description: 'Avoided heating washing machine water.'
  },
  {
    id: 'habit-linedry',
    name: 'Line-dried Clothes',
    category: 'energy',
    saved: 2.1,
    xp: 12,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><path d="M3 7l9 5 9-5M3 17l9 5 9-5"/></svg>`,
    description: 'Avoided using the energy-intensive clothes dryer.'
  },
  // DIET HABITS
  {
    id: 'habit-plantmeal',
    name: 'Fully Plant-based Day',
    category: 'diet',
    saved: 5.4,
    xp: 20,
    difficulty: 'high',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>`,
    description: 'Ate vegetarian/vegan meals all day, avoiding all meats.'
  },
  {
    id: 'habit-leftovers',
    name: 'Ate leftovers (Zero Food Waste)',
    category: 'diet',
    saved: 1.2,
    xp: 5,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>`,
    description: 'Reduced organic food waste by finishing existing meals.'
  },
  {
    id: 'habit-local',
    name: 'Bought Local/Organic Food',
    category: 'diet',
    saved: 0.8,
    xp: 8,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    description: 'Minimized food transport miles and synthetic fertilizer impact.'
  },
  // WASTE & CONSUMPTION
  {
    id: 'habit-reusable',
    name: 'Used Reusable Containers',
    category: 'waste',
    saved: 0.5,
    xp: 5,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5" rx="1"/><line x1="12" y1="22" x2="12" y2="7"/></svg>`,
    description: 'Skipped single-use plastic bags, cups, or containers.'
  },
  {
    id: 'habit-nobuy',
    name: 'Fasting from Purchases (No-Buy)',
    category: 'waste',
    saved: 3.2,
    xp: 15,
    difficulty: 'medium',
    icon: `<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    description: 'Avoided buying clothing, trends, or non-essential goods today.'
  },
  {
    id: 'habit-compost',
    name: 'Composted Food Scraps',
    category: 'waste',
    saved: 1.1,
    xp: 10,
    difficulty: 'low',
    icon: `<svg viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><polyline points="8 12 12 16 16 12"/></svg>`,
    description: 'Diverted organic waste from landfills to reduce methane gas emissions.'
  }
];

// STATE MANAGEMENT
let state = {
  hasCalculated: false,
  calculatorBaseline: {
    transport: 0, // annual kg CO2
    energy: 0,
    diet: 0,
    waste: 0,
    total: 0
  },
  reductionTargetPercent: 20,
  loggedHabitsToday: [],
  totalSavedCO2: 0, // cumulative grams/kg offset over time
  points: 0,
  habitCounts: {
    transport: 0,
    energy: 0,
    diet: 0,
    waste: 0
  },
  historicalLogs: [] // { date: 'YYYY-MM-DD', savedCO2: 0 }
};

// MOCK REGIONAL DATA
const REGIONAL_AVG_ANNUAL = 6500; // Average global individual emission in kg CO2 per year

// DOM ELEMENTS
const tabButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// ONBOARDING SCREEN DOMS
const onboardingBanner = document.getElementById('onboarding-banner');
const dashboardMainContent = document.getElementById('dashboard-main-content');
const btnStartCalcBanner = document.getElementById('btn-start-calculator-banner');

// CALCULATOR DOMS
const calcStepPanels = document.querySelectorAll('.step-panel');
const calcStepBubbles = document.querySelectorAll('.step-bubble');
const btnCalcPrev = document.getElementById('btn-calc-prev');
const btnCalcNext = document.getElementById('btn-calc-next');

// INPUT SLIDERS & SELECTORS
const inputCommuteDistance = document.getElementById('input-commute-distance');
const lblCommuteDistance = document.getElementById('lbl-commute-distance');
const inputFlights = document.getElementById('input-flights');
const lblFlights = document.getElementById('lbl-flights');
const inputHouseholdSize = document.getElementById('input-household-size');
const inputElectricity = document.getElementById('input-electricity');
const lblElectricity = document.getElementById('lbl-electricity');
const inputCleanEnergy = document.getElementById('input-clean-energy');
const lblCleanEnergy = document.getElementById('lbl-clean-energy');
const inputFoodWaste = document.getElementById('input-food-waste');
const inputShopping = document.getElementById('input-shopping');
const chkRecyclePaper = document.getElementById('chk-recycle-paper');
const chkRecyclePlastic = document.getElementById('chk-recycle-plastic');
const chkRecycleGlass = document.getElementById('chk-recycle-glass');

// SELECTION CARD OPTIONS
const commuteCards = document.querySelectorAll('#commute-type-grid .option-card');
const dietCards = document.querySelectorAll('#diet-type-grid .option-card');

// DASHBOARD VALS
const dashFootprintVal = document.getElementById('dash-footprint-value');
const dashGoalVal = document.getElementById('dash-goal-value');
const dashSavedVal = document.getElementById('dash-saved-value');
const dashLevelNum = document.getElementById('dash-level-num');
const dashLevelXP = document.getElementById('dash-level-xp');
const dashLevelName = document.getElementById('dash-level-name');
const dashLevelProgress = document.getElementById('dash-level-progress');
const dashboardChartContainer = document.getElementById('dashboard-chart-container');
const dashboardInsightsList = document.getElementById('dashboard-insights-list');
const dashboardQuickHabits = document.getElementById('dashboard-quick-habits');
const targetDailyLimit = document.getElementById('target-daily-limit');

// BREAKDOWN DONUT DOMS
const ringTransport = document.getElementById('breakdown-ring-transport');
const ringEnergy = document.getElementById('breakdown-ring-energy');
const ringDiet = document.getElementById('breakdown-ring-diet');
const ringWaste = document.getElementById('breakdown-ring-waste');
const legendPctTransport = document.getElementById('legend-pct-transport');
const legendPctEnergy = document.getElementById('legend-pct-energy');
const legendPctDiet = document.getElementById('legend-pct-diet');
const legendPctWaste = document.getElementById('legend-pct-waste');
const breakdownCenterNum = document.getElementById('breakdown-center-num');

// HABITS DOMS
const habitsLogList = document.getElementById('habits-log-list');
const sidebarSavedScore = document.getElementById('sidebar-saved-score');
const sidebarSavedDesc = document.getElementById('sidebar-saved-desc');
const sidebarHistoryList = document.getElementById('sidebar-history-list');
const noHistoryMsg = document.getElementById('no-history-msg');
const btnDashboardAllHabits = document.getElementById('btn-dashboard-all-habits');

// BADGES DOMS
const badgeLevelName = document.getElementById('badge-level-name');
const badgeXpRemaining = document.getElementById('badge-xp-remaining');
const badgeXpFraction = document.getElementById('badge-xp-fraction');
const badgeXpTotal = document.getElementById('badge-xp-total');
const badgeLevelProgressBar = document.getElementById('badge-level-progress-bar');
const badgeLevelNum = document.getElementById('badge-level-num');
const levelRingPercent = document.getElementById('level-ring-percent');

// INTERNAL CALCULATOR FORM STATE
let calcSelectedCommute = 'car-petrol';
let calcSelectedDiet = 'meat-heavy';
let currentCalcStep = 1;

// INITIALIZE THE APPLICATION
function init() {
  loadStateFromLocalStorage();
  setupEventListeners();
  renderApp();
}

// LOAD STATE
function loadStateFromLocalStorage() {
  const savedState = localStorage.getItem('ecostep_user_state');
  if (savedState) {
    try {
      state = JSON.parse(savedState);
      // Fallbacks for missing state properties
      if (!state.habitCounts) {
        state.habitCounts = { transport: 0, energy: 0, diet: 0, waste: 0 };
      }
      if (!state.points) state.points = state.totalSavedCO2;
      if (!state.historicalLogs) state.historicalLogs = [];
    } catch (e) {
      console.error('Error parsing LocalStorage state:', e);
    }
  }
}

// SAVE STATE
function saveStateToLocalStorage() {
  localStorage.setItem('ecostep_user_state', JSON.stringify(state));
}

// SETUP EVENT LISTENERS
function setupEventListeners() {
  // Navigation Tabs Toggling
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  document.getElementById('nav-logo').addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('dashboard');
  });

  btnStartCalcBanner.addEventListener('click', () => {
    switchTab('calculator');
  });

  btnDashboardAllHabits.addEventListener('click', () => {
    switchTab('habits');
  });

  // Option Cards - Commuter Type Selection
  commuteCards.forEach(card => {
    card.addEventListener('click', () => {
      commuteCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      calcSelectedCommute = card.getAttribute('data-value');
      
      // Toggle mileage slider visibility if they commute via public transport
      const mileageGroup = document.getElementById('group-mileage');
      if (calcSelectedCommute === 'public-transport') {
        mileageGroup.style.display = 'block';
      }
    });
  });

  // Option Cards - Diet Preference Selection
  dietCards.forEach(card => {
    card.addEventListener('click', () => {
      dietCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      calcSelectedDiet = card.getAttribute('data-value');
    });
  });

  // Input Sliders Updates
  inputCommuteDistance.addEventListener('input', () => {
    lblCommuteDistance.textContent = `${inputCommuteDistance.value} km`;
  });

  inputFlights.addEventListener('input', () => {
    lblFlights.textContent = `${inputFlights.value} flight${inputFlights.value == 1 ? '' : 's'}`;
  });

  inputElectricity.addEventListener('input', () => {
    lblElectricity.textContent = `$${inputElectricity.value}`;
  });

  inputCleanEnergy.addEventListener('input', () => {
    lblCleanEnergy.textContent = `${inputCleanEnergy.value}%`;
  });

  // Calculator Navigation Buttons
  btnCalcPrev.addEventListener('click', () => {
    navigateCalc(-1);
  });

  btnCalcNext.addEventListener('click', () => {
    navigateCalc(1);
  });

  // Habits Filter Buttons
  const filterButtons = document.querySelectorAll('[id^="filter-habit-"]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('logged'));
      btn.classList.add('logged');
      const categoryFilter = btn.getAttribute('data-filter');
      renderHabitsList(categoryFilter);
    });
  });
}

// NAVIGATION BETWEEN TABS
function switchTab(tabId) {
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  tabContents.forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  // Render content of respective tab when visible
  if (tabId === 'dashboard') {
    renderDashboard();
  } else if (tabId === 'habits') {
    // Sync active filter and list
    const activeFilterBtn = document.querySelector('[id^="filter-habit-"].logged');
    const filter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
    renderHabitsList(filter);
    renderHabitSidebar();
  } else if (tabId === 'badges') {
    renderBadges();
  }
}

// CALCULATOR NAVIGATION ENGINE
function navigateCalc(direction) {
  const activeStepPanel = document.getElementById(`calc-step-${currentCalcStep}`);
  activeStepPanel.classList.remove('active');
  
  calcStepBubbles[currentCalcStep - 1].classList.remove('active');
  if (direction > 0) {
    calcStepBubbles[currentCalcStep - 1].classList.add('completed');
  } else {
    calcStepBubbles[currentCalcStep - 2].classList.remove('completed');
  }

  currentCalcStep += direction;

  const nextStepPanel = document.getElementById(`calc-step-${currentCalcStep}`);
  nextStepPanel.classList.add('active');
  calcStepBubbles[currentCalcStep - 1].classList.add('active');

  // Disable/Enable buttons depending on steps
  btnCalcPrev.disabled = currentCalcStep === 1;

  if (currentCalcStep === 4) {
    btnCalcNext.textContent = 'Calculate & Finish ✓';
  } else {
    btnCalcNext.textContent = 'Next →';
  }

  // Handle calculation if it moves past step 4 (i.e. click Calculate & Finish)
  if (currentCalcStep > 4) {
    finishCalculation();
  }
}

// CARBON FOOTPRINT CALCULATION MATH
function finishCalculation() {
  // Collect transportation inputs
  const mileageWeekly = parseFloat(inputCommuteDistance.value);
  const flightsPerYear = parseFloat(inputFlights.value);
  
  let transportCO2 = 0;
  if (calcSelectedCommute === 'car-petrol') {
    transportCO2 += mileageWeekly * 52 * 0.175; // 0.175kg CO2 per km
  } else if (calcSelectedCommute === 'car-electric') {
    transportCO2 += mileageWeekly * 52 * 0.052; // 0.052kg CO2 per km (electric charging mix)
  } else if (calcSelectedCommute === 'public-transport') {
    transportCO2 += mileageWeekly * 52 * 0.028; // 0.028kg CO2 per km
  }
  transportCO2 += flightsPerYear * 480; // 480kg CO2 per flights

  // Collect Home energy inputs
  const householdSize = parseInt(inputHouseholdSize.value);
  const electricityBill = parseFloat(inputElectricity.value);
  const cleanEnergyPct = parseFloat(inputCleanEnergy.value) / 100;
  
  // Calculate electricity kWh: assumes average $0.16 per kWh
  const annualElectricityKWh = (electricityBill / 0.16) * 12;
  let energyCO2 = annualElectricityKWh * 0.38; // 0.38kg CO2 per kWh
  // Subtract clean energy reduction
  energyCO2 = energyCO2 * (1 - cleanEnergyPct);
  // Shared household divider
  energyCO2 = energyCO2 / Math.sqrt(householdSize);

  // Diet inputs
  let dietCO2 = 0;
  if (calcSelectedDiet === 'meat-heavy') {
    dietCO2 = 2400; // kg CO2/year
  } else if (calcSelectedDiet === 'meat-moderate') {
    dietCO2 = 1600; // kg CO2/year
  } else if (calcSelectedDiet === 'vegetarian') {
    dietCO2 = 900; // kg CO2/year
  }

  const wasteLevel = inputFoodWaste.value;
  if (wasteLevel === 'average') {
    dietCO2 *= 1.15;
  } else if (wasteLevel === 'above-average') {
    dietCO2 *= 1.30;
  }

  // Consumption and Waste inputs
  let wasteCO2 = 0;
  const shoppingLevel = inputShopping.value;
  if (shoppingLevel === 'frugal') {
    wasteCO2 += 550;
  } else if (shoppingLevel === 'average') {
    wasteCO2 += 1100;
  } else if (shoppingLevel === 'shopper') {
    wasteCO2 += 1800;
  }

  // Deduct recycling
  if (chkRecyclePaper.checked) wasteCO2 -= 90;
  if (chkRecyclePlastic.checked) wasteCO2 -= 95;
  if (chkRecycleGlass.checked) wasteCO2 -= 80;
  if (wasteCO2 < 100) wasteCO2 = 100; // Floor limit for minimum waste footprint

  const totalCO2 = transportCO2 + energyCO2 + dietCO2 + wasteCO2;

  // Set calculator state
  state.calculatorBaseline = {
    transport: Math.round(transportCO2),
    energy: Math.round(energyCO2),
    diet: Math.round(dietCO2),
    waste: Math.round(wasteCO2),
    total: Math.round(totalCO2)
  };
  state.hasCalculated = true;
  
  // Calculate daily baseline & target
  const dailyBaseline = state.calculatorBaseline.total / 365;
  
  // Reset logged habits for the new footprint
  state.loggedHabitsToday = [];
  state.totalSavedCO2 = 0;
  state.points = 0;
  state.habitCounts = { transport: 0, energy: 0, diet: 0, waste: 0 };
  state.historicalLogs = [];

  // Reset calculator screen back to step 1
  document.getElementById(`calc-step-${currentCalcStep}`).classList.remove('active');
  calcStepBubbles.forEach(b => {
    b.classList.remove('active');
    b.classList.remove('completed');
  });
  
  currentCalcStep = 1;
  document.getElementById('calc-step-1').classList.add('active');
  calcStepBubbles[0].classList.add('active');
  btnCalcPrev.disabled = true;
  btnCalcNext.textContent = 'Next →';

  saveStateToLocalStorage();
  switchTab('dashboard');
}

// REDRAW ENTIRE DASHBOARD VIEW
function renderDashboard() {
  if (!state.hasCalculated) {
    onboardingBanner.style.display = 'block';
    dashboardMainContent.style.display = 'none';
    return;
  }

  onboardingBanner.style.display = 'none';
  dashboardMainContent.style.display = 'block';

  // Annual Footprint
  const totalTons = state.calculatorBaseline.total / 1000;
  dashFootprintVal.innerHTML = `${totalTons.toFixed(1)} <span class="stats-unit">t CO₂e / yr</span>`;

  // Reduction target
  dashGoalVal.innerHTML = `${state.reductionTargetPercent}<span class="stats-unit">% Saved</span>`;

  // Savings today
  let todaySaved = 0;
  state.loggedHabitsToday.forEach(habitId => {
    const habitObj = HABIT_DATABASE.find(h => h.id === habitId);
    if (habitObj) todaySaved += habitObj.saved;
  });
  dashSavedVal.innerHTML = `${todaySaved.toFixed(1)} <span class="stats-unit">kg CO₂</span>`;

  // Update level system based on points
  updateXPSystem();

  // Update Concentric/Donut Breakdown Charts
  renderDonutChart();

  // Render Recommendations Insights
  renderInsightsList();

  // Render SVG Weekly Trend Graph
  renderWeeklyChart(todaySaved);

  // Render Dashboard Quick-Habits checklist
  renderQuickHabitsList();
}

// CALCULATE AND UPDATE LEVEL SYSTEM
function updateXPSystem() {
  const points = state.points;
  
  // Levels:
  // L1: 0 - 100 XP
  // L2: 100 - 250 XP (150 width)
  // L3: 250 - 500 XP (250 width)
  // L4: 500 - 800 XP (300 width)
  // L5: 800+ XP
  let level = 1;
  let minXP = 0;
  let maxXP = 100;
  let levelName = 'Eco Seeker';

  if (points >= 800) {
    level = 5;
    minXP = 800;
    maxXP = 9999; // cap
    levelName = 'Eco Warrior';
  } else if (points >= 500) {
    level = 4;
    minXP = 500;
    maxXP = 800;
    levelName = 'Green Guardian';
  } else if (points >= 250) {
    level = 3;
    minXP = 250;
    maxXP = 500;
    levelName = 'Climate Conscious';
  } else if (points >= 100) {
    level = 2;
    minXP = 100;
    maxXP = 250;
    levelName = 'Carbon Reducer';
  }

  dashLevelNum.textContent = level;
  dashLevelName.textContent = levelName;
  
  let pct = 0;
  if (level === 5) {
    pct = 100;
    dashLevelXP.textContent = `${points} XP`;
  } else {
    const xpInLevel = points - minXP;
    const levelRange = maxXP - minXP;
    pct = (xpInLevel / levelRange) * 100;
    dashLevelXP.textContent = `${xpInLevel}/${levelRange} XP`;
  }
  
  dashLevelProgress.style.width = `${pct}%`;

  // Sync to Badges tab if active
  if (badgeLevelNum) {
    badgeLevelNum.textContent = level;
    badgeLevelName.textContent = levelName;
    badgeXpTotal.textContent = `${points} XP`;
    
    if (level === 5) {
      badgeXpRemaining.textContent = "Max Level Achieved!";
      badgeXpFraction.textContent = `${points} XP`;
      badgeLevelProgressBar.style.width = '100%';
      levelRingPercent.style.strokeDashoffset = 0;
    } else {
      const remaining = maxXP - points;
      badgeXpRemaining.textContent = `${remaining} XP`;
      badgeXpFraction.textContent = `${points - minXP} / ${maxXP - minXP} XP`;
      badgeLevelProgressBar.style.width = `${pct}%`;
      // SVG Circle perimeter for radius=40 is 251.2
      const strokeOffset = 251.2 - (251.2 * pct) / 100;
      levelRingPercent.style.strokeDashoffset = strokeOffset;
    }
  }
}

// RENDER DONUT / CONCENTRIC PERCENTAGE BREAKDOWN
function renderDonutChart() {
  const baseline = state.calculatorBaseline;
  if (baseline.total === 0) return;

  const pTrans = (baseline.transport / baseline.total) * 100;
  const pEnergy = (baseline.energy / baseline.total) * 100;
  const pDiet = (baseline.diet / baseline.total) * 100;
  const pWaste = (baseline.waste / baseline.total) * 100;

  legendPctTransport.textContent = `${Math.round(pTrans)}%`;
  legendPctEnergy.textContent = `${Math.round(pEnergy)}%`;
  legendPctDiet.textContent = `${Math.round(pDiet)}%`;
  legendPctWaste.textContent = `${Math.round(pWaste)}%`;

  // Center percentage vs global average
  // e.g. user total / regional average
  const pctComparison = Math.round((baseline.total / REGIONAL_AVG_ANNUAL) * 100);
  breakdownCenterNum.textContent = `${pctComparison}%`;

  // Draw concentric donut segments
  // Perimeter of radius 70 is 440 (2 * 3.14169 * 70 = 439.82)
  const perimeter = 440;

  const offsetTrans = 440;
  const strokeTrans = (pTrans / 100) * perimeter;
  ringTransport.style.strokeDashoffset = offsetTrans;
  ringTransport.style.strokeDasharray = `${strokeTrans} ${perimeter - strokeTrans}`;

  const offsetEnergy = offsetTrans - strokeTrans;
  const strokeEnergy = (pEnergy / 100) * perimeter;
  ringEnergy.style.strokeDashoffset = offsetEnergy;
  ringEnergy.style.strokeDasharray = `${strokeEnergy} ${perimeter - strokeEnergy}`;

  const offsetDiet = offsetEnergy - strokeEnergy;
  const strokeDiet = (pDiet / 100) * perimeter;
  ringDiet.style.strokeDashoffset = offsetDiet;
  ringDiet.style.strokeDasharray = `${strokeDiet} ${perimeter - strokeDiet}`;

  const offsetWaste = offsetDiet - strokeDiet;
  const strokeWaste = (pWaste / 100) * perimeter;
  ringWaste.style.strokeDashoffset = offsetWaste;
  ringWaste.style.strokeDasharray = `${strokeWaste} ${perimeter - strokeWaste}`;
}

// PERSONALIZED INSIGHTS LOGIC
function renderInsightsList() {
  const baseline = state.calculatorBaseline;
  const insights = [];

  const maxCategory = Object.keys(baseline).reduce((a, b) => {
    if (b === 'total') return a;
    return baseline[a] > baseline[b] ? a : b;
  });

  const percentReductionTarget = state.reductionTargetPercent / 100;
  const recommendedDailySave = (baseline.total * percentReductionTarget) / 365;

  if (maxCategory === 'transport') {
    insights.push({
      icon: '🚗',
      text: `Your <strong>commuting footprint</strong> makes up the largest segment (${Math.round((baseline.transport / baseline.total) * 100)}%). Try replacing 2 car commutes with public transit or biking to save up to <strong>10 kg CO₂/week</strong>.`
    });
  } else if (maxCategory === 'energy') {
    insights.push({
      icon: '⚡',
      text: `Your <strong>home utility energy usage</strong> is your major carbon driver. Consider washing laundry in cold water or upgrading to green electric options to reduce energy emissions by up to <strong>15%</strong>.`
    });
  } else if (maxCategory === 'diet') {
    insights.push({
      icon: '🥗',
      text: `Your <strong>eating habits</strong> contribute significantly to greenhouse gases. Replacing beef/pork with plant-based alternatives just 2 days a week will offset over <strong>500 kg CO₂ annually</strong>.`
    });
  } else {
    insights.push({
      icon: '🛍️',
      text: `Your <strong>shopping and retail waste</strong> is substantial. Buying items second-hand and practicing packaging-free buying can reduce consumption footprint by <strong>300+ kg CO₂/year</strong>.`
    });
  }

  // Compare to global average
  const difference = baseline.total - REGIONAL_AVG_ANNUAL;
  if (difference > 0) {
    insights.push({
      icon: '🌎',
      text: `Your footprint is <strong>${Math.round(difference)} kg CO₂ higher</strong> than the average global citizen. Aim to log <strong>${recommendedDailySave.toFixed(1)} kg</strong> of habit offsets daily to reach your goal.`
    });
  } else {
    insights.push({
      icon: '🌱',
      text: `Great job! Your footprint is <strong>${Math.round(Math.abs(difference))} kg CO₂ lower</strong> than the average global citizen. Keep it up by logging green habits daily!`
    });
  }

  // Additional static tips
  insights.push({
    icon: '💡',
    text: `Did you know? Adjusting your climate thermostat by just 2 degrees saves around <strong>2.5 kg CO₂</strong> daily. Simple, low-effort adjustments create big aggregate offsets!`
  });

  // Render to DOM
  dashboardInsightsList.innerHTML = insights.map(ins => `
    <div class="insight-item">
      <div class="insight-icon" style="font-size: 1.25rem;">${ins.icon}</div>
      <div class="insight-text">${ins.text}</div>
    </div>
  `).join('');
}

// RENDER DYNAMIC WEEKLY SVG BAR CHART
function renderWeeklyChart(todaySaved) {
  const containerWidth = dashboardChartContainer.clientWidth || 550;
  const containerHeight = 250;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 30;

  const baselineDaily = state.calculatorBaseline.total / 365;
  const targetDaily = baselineDaily * (1 - state.reductionTargetPercent / 100);
  
  targetDailyLimit.textContent = `${targetDaily.toFixed(1)} kg`;

  // Build weekly data: past 6 days are static fluctuated variations
  // today's actual emission is daily baseline - logged habits today
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Use a pseudo-random seed based on total baseline to keep historical values consistent
  let pseudoRand = state.calculatorBaseline.total % 100;
  const weeklyData = [];
  
  for (let i = 0; i < 6; i++) {
    // Generate values between (baselineDaily - 8kg) and (baselineDaily + 3kg)
    pseudoRand = (pseudoRand * 123 + 456) % 1000;
    const variance = (pseudoRand / 1000) * 11 - 8;
    // Cap at 0
    let val = Math.max(0, baselineDaily + variance);
    weeklyData.push(val);
  }
  // Day 7 is Today
  const todayActual = Math.max(0, baselineDaily - todaySaved);
  weeklyData.push(todayActual);

  // Compute scale based on maximum value
  const maxVal = Math.max(baselineDaily * 1.3, ...weeklyData, 10);
  
  // Generate SVG Code
  const width = containerWidth;
  const height = containerHeight;
  const plotWidth = width - paddingLeft - paddingRight;
  const plotHeight = height - paddingTop - paddingBottom;

  const barWidth = Math.max(15, (plotWidth / 7) * 0.5);
  const colSpacing = plotWidth / 7;

  // Grid lines
  let gridLines = '';
  const yLines = 4;
  for (let i = 0; i <= yLines; i++) {
    const val = (maxVal / yLines) * i;
    const y = height - paddingBottom - (val / maxVal) * plotHeight;
    gridLines += `
      <line class="chart-grid" x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" />
      <text class="chart-text" x="${paddingLeft - 8}" y="${y + 4}" text-anchor="end">${Math.round(val)}</text>
    `;
  }

  // Draw target and baseline reference lines
  const yTarget = height - paddingBottom - (targetDaily / maxVal) * plotHeight;
  const yBaseline = height - paddingBottom - (baselineDaily / maxVal) * plotHeight;

  let referenceLines = `
    <!-- Baseline Line -->
    <line x1="${paddingLeft}" y1="${yBaseline}" x2="${width - paddingRight}" y2="${yBaseline}" stroke="var(--accent-red)" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6" />
    <text x="${width - paddingRight - 5}" y="${yBaseline - 5}" fill="var(--accent-red)" font-size="10" font-weight="700" text-anchor="end">Daily Baseline</text>
    
    <!-- Target Line -->
    <line x1="${paddingLeft}" y1="${yTarget}" x2="${width - paddingRight}" y2="${yTarget}" stroke="var(--primary)" stroke-width="1.5" stroke-dasharray="4 2" />
    <text x="${width - paddingRight - 5}" y="${yTarget - 5}" fill="var(--primary)" font-size="10" font-weight="700" text-anchor="end">Goal Target</text>
  `;

  // Draw Bars
  let bars = '';
  weeklyData.forEach((val, index) => {
    const barHeight = (val / maxVal) * plotHeight;
    const x = paddingLeft + (colSpacing * index) + (colSpacing - barWidth) / 2;
    const y = height - paddingBottom - barHeight;

    // Gradient or color changes if under target
    const isTargetMet = val <= targetDaily;
    const colorStyle = isTargetMet ? 'fill: var(--primary);' : 'fill: hsla(223, 20%, 30%, 0.8); stroke: var(--border-color);';
    
    // Animate height
    bars += `
      <g>
        <rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" style="${colorStyle}" />
        <text class="chart-text" x="${x + barWidth/2}" y="${height - 10}" text-anchor="middle">${weekdays[index]}</text>
        <text class="chart-text" x="${x + barWidth/2}" y="${y - 8}" text-anchor="middle" font-weight="700" style="opacity: 0.8; font-size: 10px;">${val.toFixed(1)}</text>
      </g>
    `;
  });

  const svgHTML = `
    <svg class="chart-svg" width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      ${gridLines}
      ${referenceLines}
      ${bars}
    </svg>
  `;

  dashboardChartContainer.innerHTML = svgHTML;
}

// RENDERING QUICK HABITS FOR DASHBOARD (PULLS 3 RECOMMENDATIONS)
function renderQuickHabitsList() {
  const quickList = HABIT_DATABASE.slice(0, 3);
  
  dashboardQuickHabits.innerHTML = quickList.map(habit => {
    const isLogged = state.loggedHabitsToday.includes(habit.id);
    const difficultyText = habit.difficulty.charAt(0).toUpperCase() + habit.difficulty.slice(1);
    
    return `
      <div class="habit-row">
        <div class="habit-main">
          <div class="habit-icon">
            ${habit.icon}
          </div>
          <div class="habit-details">
            <span class="habit-name">${habit.name}</span>
            <span class="habit-impact-badge ${habit.difficulty}">${difficultyText} Impact</span>
          </div>
        </div>
        <div class="habit-action-right">
          <span class="habit-savings">-${habit.saved.toFixed(1)} kg CO₂</span>
          <button class="btn-log ${isLogged ? 'logged' : ''}" data-id="${habit.id}" onclick="toggleHabit('${habit.id}')">
            ${isLogged ? 'Logged' : 'Log'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// RENDER FULL HABIT LIST IN ACTIONS CENTER
function renderHabitsList(categoryFilter = 'all') {
  let filteredList = HABIT_DATABASE;
  if (categoryFilter !== 'all') {
    filteredList = HABIT_DATABASE.filter(habit => habit.category === categoryFilter);
  }

  habitsLogList.innerHTML = filteredList.map(habit => {
    const isLogged = state.loggedHabitsToday.includes(habit.id);
    const difficultyText = habit.difficulty.charAt(0).toUpperCase() + habit.difficulty.slice(1);

    return `
      <div class="habit-row">
        <div class="habit-main">
          <div class="habit-icon">
            ${habit.icon}
          </div>
          <div class="habit-details">
            <span class="habit-name">${habit.name}</span>
            <span style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 2px;">${habit.description}</span>
            <span class="habit-impact-badge ${habit.difficulty}">${difficultyText} Impact</span>
          </div>
        </div>
        <div class="habit-action-right">
          <span class="habit-savings">-${habit.saved.toFixed(1)} kg CO₂</span>
          <button class="btn-log ${isLogged ? 'logged' : ''}" onclick="toggleHabit('${habit.id}', '${categoryFilter}')">
            ${isLogged ? 'Logged' : 'Log'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// TOGGLE DAILY ECO-HABIT LOG
function toggleHabit(habitId, activeFilter = 'all') {
  const index = state.loggedHabitsToday.indexOf(habitId);
  const habitObj = HABIT_DATABASE.find(h => h.id === habitId);

  if (!habitObj) return;

  if (index === -1) {
    // Add logged habit
    state.loggedHabitsToday.push(habitId);
    state.points += habitObj.xp;
    state.totalSavedCO2 += habitObj.saved;
    state.habitCounts[habitObj.category]++;
  } else {
    // Remove logged habit
    state.loggedHabitsToday.splice(index, 1);
    state.points = Math.max(0, state.points - habitObj.xp);
    state.totalSavedCO2 = Math.max(0, state.totalSavedCO2 - habitObj.saved);
    state.habitCounts[habitObj.category] = Math.max(0, state.habitCounts[habitObj.category] - 1);
  }

  saveStateToLocalStorage();

  // Re-render current page states
  const activeTabBtn = document.querySelector('.nav-btn.active');
  const activeTabId = activeTabBtn ? activeTabBtn.getAttribute('data-tab') : 'dashboard';

  if (activeTabId === 'dashboard') {
    renderDashboard();
  } else if (activeTabId === 'habits') {
    renderHabitsList(activeFilter);
    renderHabitSidebar();
  }
}

// HABITS SIDEBAR UPDATE
function renderHabitSidebar() {
  let todaySaved = 0;
  let loggedItemsCount = 0;
  const historyListHTML = [];

  state.loggedHabitsToday.forEach(habitId => {
    const habitObj = HABIT_DATABASE.find(h => h.id === habitId);
    if (habitObj) {
      todaySaved += habitObj.saved;
      loggedItemsCount++;

      // Create history lists item (assumes active date is Today)
      historyListHTML.push(`
        <div class="history-item">
          <div>
            <div class="history-name">${habitObj.name}</div>
            <div class="history-time">Today, ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          </div>
          <span class="history-amount">-${habitObj.saved.toFixed(1)} kg</span>
        </div>
      `);
    }
  });

  sidebarSavedScore.textContent = todaySaved.toFixed(1);

  if (loggedItemsCount > 0) {
    sidebarSavedDesc.innerHTML = `Awesome! You have logged <strong>${loggedItemsCount} action${loggedItemsCount === 1 ? '' : 's'}</strong> today and successfully reduced your carbon footprint!`;
    noHistoryMsg.style.display = 'none';
    sidebarHistoryList.innerHTML = historyListHTML.join('');
  } else {
    sidebarSavedDesc.textContent = `You haven't logged any actions today. Complete some green habits to offset your daily baseline!`;
    noHistoryMsg.style.display = 'block';
    sidebarHistoryList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; margin-top: 1.5rem;" id="no-history-msg">No actions logged yet today.</p>`;
  }
}

// RENDER GAMIFIED BADGES & ACCOMPLISHMENT CARDS
function renderBadges() {
  updateXPSystem(); // update level metrics and values in Badges UI

  // Unlock requirements calculations
  const isCommuteUnlocked = state.habitCounts.transport >= 3;
  const isDietUnlocked = state.habitCounts.diet >= 1; // logged vegetarian meals
  const isEnergyUnlocked = state.habitCounts.energy >= 3;
  const isWasteUnlocked = state.habitCounts.waste >= 3;
  
  // Level unlocks
  const userLevel = parseInt(dashLevelNum.textContent) || 1;
  const isLevel3Unlocked = userLevel >= 3;
  const isLevel5Unlocked = userLevel >= 5;

  // Sync state to card nodes
  toggleBadgeCardState('badge-commute', isCommuteUnlocked);
  toggleBadgeCardState('badge-diet', isDietUnlocked);
  toggleBadgeCardState('badge-energy', isEnergyUnlocked);
  toggleBadgeCardState('badge-waste', isWasteUnlocked);
  toggleBadgeCardState('badge-earth', isLevel3Unlocked);
  toggleBadgeCardState('badge-neutral', isLevel5Unlocked);
}

function toggleBadgeCardState(badgeId, isUnlocked) {
  const cardNode = document.getElementById(badgeId);
  if (!cardNode) return;

  if (isUnlocked) {
    cardNode.classList.add('unlocked');
    // Swap icon indicator to something fully resolved or adjust inline styling
  } else {
    cardNode.classList.remove('unlocked');
  }
}

// BIND GLOBAL FUNCTIONS TO WINDOW FOR INLINE HTML ONCLICK HANDLERS
window.toggleHabit = toggleHabit;

// RUN ON LOAD
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', () => {
  // Redraw chart when window resizes to ensure width responsiveness
  const activeTabBtn = document.querySelector('.nav-btn.active');
  if (activeTabBtn && activeTabBtn.getAttribute('data-tab') === 'dashboard' && state.hasCalculated) {
    let todaySaved = 0;
    state.loggedHabitsToday.forEach(habitId => {
      const habitObj = HABIT_DATABASE.find(h => h.id === habitId);
      if (habitObj) todaySaved += habitObj.saved;
    });
    renderWeeklyChart(todaySaved);
  }
});
