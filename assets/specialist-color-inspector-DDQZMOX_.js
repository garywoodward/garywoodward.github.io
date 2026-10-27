import{c as e,d as t,t as n}from"./index-BCyTAFHO.js";import{t as r}from"./createLucideIcon-B79ZFFf4.js";import{n as i,t as a}from"./circle-check-P-9bZwyf.js";import{t as o}from"./download-DFKvZpUA.js";import{t as s}from"./x-DpuoJQru.js";import{t as c}from"./design-tokens-_SRZKzUU.js";var l=r(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),u=r(`crosshair`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]),d=r(`lock-keyhole`,[[`circle`,{cx:`12`,cy:`16`,r:`1`,key:`1au0dj`}],[`rect`,{x:`3`,y:`10`,width:`18`,height:`12`,rx:`2`,key:`6s8ecr`}],[`path`,{d:`M7 10V7a5 5 0 0 1 10 0v3`,key:`1pqi11`}]]),f=r(`mouse-pointer-2`,[[`path`,{d:`M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z`,key:`edeuup`}]]),p=r(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),m=t(e(),1),h=`@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';
@import './design-tokens.css';
@import './agent.css';
@import './prior-studies.css';
@import './brand-fonts.css';

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-sans);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

body {
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
:root {
  --background: var(--oxford-blue-5);
  --foreground: var(--oxford-blue);
  --card: var(--white);
  --card-foreground: var(--oxford-blue);
  --popover: var(--white);
  --popover-foreground: var(--oxford-blue);
  --primary: var(--polynesian-blue);
  --primary-foreground: var(--white);
  --secondary: var(--mist);
  --secondary-foreground: var(--oxford-blue);
  --muted: var(--cloud);
  --muted-foreground: var(--interface-secondary-text);
  --accent: var(--interface-selection);
  --accent-foreground: var(--oxford-blue);
  --border: var(--mist);
  --input: var(--interface-control-border);
  --ring: var(--polynesian-blue);
  --radius: 0.625rem;
  --font-interface:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-geist-sans: var(--font-interface);
  --font-geist-mono: ui-monospace, monospace;
}
body {
  margin: 0;
  font-family: var(--font-geist-sans);
  font-size: 16px;
}
button,
a,
input {
  -webkit-tap-highlight-color: transparent;
}
button,
a {
  transition:
    background 0.15s,
    color 0.15s,
    border-color 0.15s;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
button:disabled {
  cursor: not-allowed;
}
h1,
h2,
h3,
p {
  margin: 0;
}
.lab-home {
  max-width: 1360px;
  margin: auto;
  padding: 0 48px;
}
.lab-header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}
.lab-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 650;
  color: var(--text-primary);
}
.lab-logo {
  display: block;
  width: 232px;
  height: auto;
  mix-blend-mode: multiply;
}
.lab-brand span {
  border-left: 1px solid #c5d2dc;
  padding-left: 14px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-secondary);
}
.sample-label {
  font-size: 12px;
  color: var(--text-secondary);
}
.lab-intro {
  padding: 32px 0 24px;
}
.eyebrow {
  font-size: 11px !important;
  letter-spacing: 0.1em;
  font-weight: 650;
  color: var(--text-secondary);
  line-height: 1.5;
}
.lab-intro h1 {
  font-size: 44px;
  letter-spacing: -1.5px;
  margin: 14px 0;
}
.lab-section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0 16px;
}
.lab-section-heading h2 {
  font-size: 18px;
  font-weight: 600;
}
.lab-section-heading span {
  font-size: 13px;
  color: var(--text-secondary);
}
.prototype-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  display: grid;
  grid-template-columns: 64px 1fr 300px;
  align-items: center;
  gap: 24px;
  padding: 28px;
  margin-bottom: 14px;
}
.prototype-icon {
  width: 56px;
  height: 56px;
  background: #eaf2f8;
  border-radius: 13px;
  display: grid;
  place-items: center;
  color: var(--text-primary);
}
.prototype-card h2 {
  font-size: 23px;
  letter-spacing: -0.5px;
  margin: 6px 0 10px;
}
.prototype-card p {
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 440px;
}
.version-links {
  display: grid;
  gap: 8px;
}
.version-link {
  border: 1px solid #d7e2ec;
  border-radius: 8px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-primary);
}
.version-link:first-child {
  background: #eff6fb;
}
.version-link:hover {
  border-color: #78a6cb;
  background: #e7f1f9;
}
.version-link b {
  display: block;
  font-size: 14px;
  font-weight: 600;
}
.version-link small {
  font-size: 12px;
  color: var(--text-secondary);
}
.lab-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  color: var(--text-secondary);
  font-size: 13px;
}
.lab-footer span {
  display: flex;
  align-items: center;
  gap: 12px;
}
@media (max-width: 760px) {
  .lab-home {
    padding: 0 20px;
  }
  .lab-header {
    height: 76px;
  }
  .lab-brand span,
  .sample-label {
    display: none;
  }
  .lab-intro {
    padding: 35px 0 24px;
  }
  .lab-intro h1 {
    font-size: 34px;
  }
  .prototype-card {
    grid-template-columns: 44px 1fr;
    gap: 16px;
    padding: 20px;
  }
  .prototype-icon {
    width: 42px;
    height: 42px;
  }
  .version-links {
    grid-column: 1/-1;
  }
  .lab-footer {
    align-items: flex-start;
    gap: 15px;
  }
  .lab-footer span {
    display: none;
  }
}
.index-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 0 0 30px;
}
.role-tabs {
  height: auto !important;
  gap: 4px !important;
  flex-wrap: wrap !important;
  justify-content: flex-start !important;
  background: transparent !important;
  padding: 0 !important;
}
.role-tabs [data-slot='tabs-trigger'] {
  padding: 9px 11px;
  font-size: 13px;
  border: 1px solid transparent;
}
.role-tabs [data-active] {
  background: #e7f0f7 !important;
  border-color: #ccdeeb !important;
  box-shadow: none !important;
  color: var(--text-primary) !important;
}
.index-controls .search-box {
  min-width: 220px;
  max-width: 240px;
}
.planned-card {
  background: #f8fafc;
}
.planned-card .prototype-icon {
  background: #edf1f5;
  color: var(--text-secondary);
}
.planned-card h2 {
  font-size: 20px;
}
.planned-state {
  padding-left: 18px;
}
.planned-state span {
  display: inline-block;
  font-size: 12px;
  color: var(--text-secondary);
  background: #edf1f5;
  border: 1px solid #dce4eb;
  border-radius: 5px;
  padding: 4px 9px;
}
.planned-state small {
  display: block;
  font-size: 13px;
  margin-top: 9px;
  color: var(--text-secondary);
}
.connector {
  min-height: 100vh;
  background: var(--background);
}
.prototype-bar {
  height: 47px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  gap: 16px;
  background: #fff;
  border-bottom: 1px solid #dce5ed;
  font-size: 12px;
  color: var(--text-secondary);
}
.back-index {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 550;
  color: var(--text-primary);
}
.back-index:hover {
  color: var(--text-primary);
}
.bar-divider {
  height: 14px;
  width: 1px;
  background: #d6e0e8;
}
.prototype-bar-dismiss {
  flex-shrink: 0;
  color: var(--oxford-blue);
}
.prototype-bar-spacer {
  flex: 1;
}
.demo-pill {
  border-radius: 4px;
  font-size: 11px;
  padding: 3px 7px;
  background: #fff4d9;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.prototype-bar .filter-select {
  height: 28px !important;
  border: 0;
  font-size: 12px;
  background: #f4f7f9;
}
.prototype-bar [data-slot='button'] {
  font-size: 12px;
  height: 28px;
}
.prototype-bar [data-slot='button'] svg {
  width: 14px;
}
.app-header {
  height: 76px;
  background: var(--oxford-blue);
  color: var(--shell-header-foreground);
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 35px;
}
.app-brand {
  display: flex;
  align-items: center;
  gap: 11px;
  white-space: nowrap;
  color: var(--shell-header-foreground);
  font-size: 20px;
  letter-spacing: -0.4px;
}
.app-brand b {
  font-weight: 500;
}
.brand-symbol {
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
}
.brand-symbol img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.app-header nav {
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: stretch;
}
.app-header nav a {
  display: flex;
  align-items: center;
  border-bottom: 3px solid transparent;
  padding: 3px 3px 0;
  color: var(--shell-navigation-foreground);
  font-size: 14px;
}
.app-header nav a.active {
  border-color: var(--shell-navigation-active);
  color: var(--shell-header-foreground);
}
.site-name {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  color: var(--shell-site-foreground);
}
.user-avatar {
  display: grid;
  place-items: center;
  background: #315975;
  border: 1px solid #5b7c94;
  color: var(--text-inverse);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 600;
}
.workspace {
  max-width: var(--shell-workspace-max-width);
  margin: auto;
  padding: var(--shell-workspace-padding);
}
.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 0 26px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--text-secondary);
  font-size: 12px;
  margin-bottom: 13px;
}
.page-heading h1 {
  color: var(--foreground);
  font-size: 30px;
  font-weight: 650;
  letter-spacing: -0.8px;
  line-height: 1.3;
}
.page-heading p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 7px;
}
.download-button {
  height: 36px !important;
  background: white !important;
  color: var(--text-primary);
  padding: 0 13px !important;
  box-shadow: 0 1px 2px #16375206;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--metric-gap);
  margin-bottom: 25px;
}
.stat-card {
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;
  transition:
    box-shadow 150ms,
    border-color 150ms;
  border: 1px solid var(--metric-card-border);
  background: var(--metric-card-background);
  border-radius: 9px;
  padding: 16px 19px 14px;
  color: var(--metric-card-foreground);
}
.stat-card > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: var(--metric-card-foreground);
  font-size: 12px;
  font-weight: 500;
}
.stat-card strong {
  font-size: 30px;
  letter-spacing: -0.8px;
  display: block;
  color: var(--metric-card-foreground);
  margin: 7px 0 2px;
  font-weight: 600;
  line-height: 1.3;
}
.stat-card small {
  font-size: 11px;
  color: var(--metric-card-supporting);
}
.stat-card-help-wrap {
  position: relative;
  display: flex;
  min-width: 0;
}
.stat-card-help-wrap > .stat-card {
  width: 100%;
}
.stat-card-has-help > div {
  padding-right: 28px;
}
.stat-card-help-button {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--muted-foreground);
  cursor: pointer;
}
.stat-card-help-button:hover {
  background: var(--secondary);
  color: var(--foreground);
}
.stat-card-help-button:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
.metric-help-popover {
  width: 320px;
  max-width: calc(100vw - 32px);
  padding: 16px;
  font-size: 13px;
  line-height: 1.6;
}
.stat-card:hover {
  background: var(--metric-card-hover);
  border-color: var(--metric-card-indicator);
}
.stat-card[aria-pressed='true'] {
  --metric-card-foreground: var(--metric-card-selected-foreground);
  --metric-card-supporting: var(--metric-card-selected-supporting);
  background: var(--metric-card-selected);
  border-color: var(--metric-card-selected);
}
.stat-card-help-wrap:has(> .stat-card[aria-pressed='true']) .stat-card-help-button {
  color: var(--metric-card-selected-foreground);
}
.stat-card-help-wrap:has(> .stat-card[aria-pressed='true']) .stat-card-help-button:hover {
  color: var(--foreground);
}
.stat-card:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}
.summary-filter {
  gap: 6px;
  color: var(--text-primary);
  background: var(--accent);
}
.age-cell {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.age-cell span {
  color: var(--muted-foreground);
  font-size: 11px;
}

.patient-table-card td.age-cell,
.patient-table-card td.age-cell span {
  color: var(--oxford-blue);
}
.directory-toolbar {
  margin-bottom: 19px;
}
.result-tabs {
  height: 42px !important;
  gap: 14px !important;
}
.result-tabs [data-slot='tabs-trigger'] {
  padding: 8px 4px;
  height: 100%;
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}
.result-tabs [data-active] {
  color: var(--text-primary) !important;
}
.result-tabs [data-active]:after {
  background: var(--signal-teal) !important;
  bottom: 0 !important;
  height: 2px !important;
}
.result-tabs span {
  background: #dfeaf2;
  color: var(--text-primary);
  font-size: 11px;
  border-radius: 5px;
  padding: 0 5px;
}
.filter-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  flex-wrap: wrap;
}
.search-box {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 260px;
  max-width: 330px;
  flex: 1;
}
.search-box svg {
  position: absolute;
  left: 12px;
  z-index: 1;
  color: var(--text-secondary);
}
.search-box input {
  height: 36px;
  padding-left: 37px;
  background: white;
  font-size: 13px;
  box-shadow: none;
  border-radius: 7px;
}
.filter-select {
  height: 36px !important;
  background: #fff;
  font-size: 13px !important;
  padding: 0 11px !important;
  border-radius: 7px !important;
  gap: 6px !important;
}
.filter-label {
  color: var(--text-secondary);
  font-weight: 400;
}
.filter-row > [data-slot='button'] {
  height: 34px;
  font-size: 12px;
}
.directory-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(360px, 1fr);
  gap: 22px;
  align-items: start;
}
.patient-table-card {
  container-type: inline-size;
  min-width: 0;
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--table-radius);
  overflow: hidden;
}
.table-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  color: var(--text-secondary);
  font-size: 12px;
  border-bottom: 1px solid #e4ebf1;
}
.table-caption b {
  font-weight: 600;
  color: var(--text-primary);
}
.patient-table-card table {
  min-width: 655px;
}
.patient-table-card th {
  height: 39px;
  background: var(--table-header-background);
  color: var(--table-header-foreground);
  font-size: 11px;
  font-weight: 500;
  padding: 0 12px;
}
.column-sort {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  min-height: 39px;
  padding: 6px 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.column-sort span {
  white-space: normal;
}
.column-sort svg {
  flex-shrink: 0;
  opacity: 0.45;
}
.column-sort:hover,
.patient-table-card th[aria-sort='ascending'],
.patient-table-card th[aria-sort='descending'] {
  color: var(--table-header-foreground);
}
.patient-table-card th[aria-sort='ascending'] svg,
.patient-table-card th[aria-sort='descending'] svg {
  opacity: 1;
}
.column-sort:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  border-radius: 3px;
}
.patient-table-card td {
  height: 72px;
  padding: var(--table-cell-padding);
  font-size: 13px;
  vertical-align: baseline;
}
.patient-table-card tr {
  border-color: var(--table-rule);
}
.patient-row {
  cursor: pointer;
}
.patient-row[data-processing='true'] {
  background: var(--result-processing-background);
}
.patient-row:hover {
  background: var(--table-row-hover);
}
.patient-row[data-selected='true'] {
  background: var(--table-row-selected);
  box-shadow: inset 3px 0 0 var(--table-selection-indicator);
}
.check-cell {
  width: 35px;
  padding-right: 0 !important;
  padding-left: 14px !important;
}
.patient-name {
  color: var(--oxford-blue);
  font-size: 13px;
  white-space: nowrap;
  font-weight: 600;
  display: block;
  text-align: left;
}
.patient-name:hover {
  text-decoration: underline;
}
.patient-meta {
  display: block;
  font-size: 10px;
  color: var(--oxford-blue);
  white-space: nowrap;
  margin-top: 5px;
}
.patient-meta span {
  padding: 0 3px;
}
.study-date-cell {
  white-space: nowrap;
}
.study-date-cell time {
  color: var(--oxford-blue);
  font-size: 13px;
}
.finding-status {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}
.processing-estimate {
  display: block;
  color: var(--text-secondary);
  font-size: 11px;
  margin-top: 5px;
  line-height: 1.4;
  white-space: normal;
}
.processing-count {
  margin-left: 12px;
  color: var(--text-secondary);
  font-size: 11px;
}
.report-issue-hint {
  display: block;
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.4;
  margin-top: 5px;
}
.report-availability {
  display: grid;
  gap: 12px;
  margin: 0 20px 18px;
}
.evidence-content > .report-availability {
  margin: 0 0 18px;
}
.report-details-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  text-align: left;
  background: var(--result-unavailable-background);
  border: 1px solid var(--result-unavailable-border);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
}
.report-details-link span {
  display: grid;
  flex: 1;
  gap: 3px;
}
.report-details-link svg {
  flex-shrink: 0;
}
.report-details-link b {
  font-size: 12px;
  font-weight: 500;
}
.report-details-link small {
  font-size: 11px;
}
.result-details-link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-top: 9px;
  padding: 3px 0;
  color: var(--text-primary);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
}
.result-details-link:hover,
.report-details-link:hover b {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.result-details-link:focus-visible,
.report-details-link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
  border-radius: 3px;
}
.report-issue-details > p,
.service-findings p {
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 1.65;
  margin-top: 12px;
}
.report-issue-details .report-next-step {
  color: var(--text-secondary);
  margin-top: 8px;
}
.service-findings {
  margin-top: 12px;
  border-top: 1px solid #ece5d7;
  padding-top: 10px;
  color: var(--text-secondary);
  font-size: 11px;
}
.service-findings summary {
  cursor: pointer;
}
.report-issue-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}
.report-issue-actions button {
  flex: 1 1 130px;
  font-size: 12px;
}
.report-issue-details .report-support-reference {
  color: var(--text-secondary);
  font-size: 11px;
}
.report-details-dialog {
  max-width: min(540px, calc(100vw - 32px));
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
}
.report-details-dialog [data-slot='dialog-header'] {
  padding-right: 24px;
}
.report-issue-details > p:first-child {
  margin-top: 0;
}
.support-request-form,
.support-request-success {
  display: grid;
  gap: 14px;
  margin-top: 6px;
  color: var(--text-secondary);
  font-size: 13px;
}
.support-request-form dl,
.support-request-success dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border-radius: 8px;
  background: #f5f8fb;
}
.support-request-form dt,
.support-request-success dt {
  color: var(--text-secondary);
  font-size: 11px;
  margin-bottom: 4px;
}
.support-request-form dd,
.support-request-success dd {
  color: var(--text-primary);
}
.support-request-form label {
  margin-bottom: -8px;
}
.support-request-form > button,
.support-request-success > button {
  justify-self: end;
}
.support-request-success > svg {
  color: var(--action-success-foreground);
}
.support-request-success h3 {
  font-size: 18px;
  color: var(--text-primary);
  font-weight: 600;
}
.support-saved-message {
  white-space: pre-wrap;
  line-height: 1.6;
}
.finding {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  white-space: nowrap;
  color: var(--result-foreground);
  font-weight: 500;
}
.finding > span {
  width: 5px;
  height: 5px;
  background: var(--result-indicator);
  border-radius: 50%;
  flex: none;
}
.processing-spinner {
  flex-shrink: 0;
  animation: processing-spin 2s linear infinite;
}
@keyframes processing-spin {
  to {
    transform: rotate(360deg);
  }
}
.review-badge {
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  white-space: nowrap;
  padding: 4px 7px;
  border-radius: 5px;
  font-weight: 500;
}
.review-badge.new {
  color: var(--review-new-foreground);
  background: var(--review-new-background);
}
.status-dot {
  width: 4px;
  height: 4px;
  background: var(--review-new-indicator);
  border-radius: 50%;
}
.review-badge.reviewed {
  background: var(--review-reviewed-background);
  color: var(--review-reviewed-foreground);
}
.review-status-text {
  color: var(--review-not-ready-foreground);
}
.open-patient {
  display: flex;
  color: var(--text-secondary);
}
.selection-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  background: #f8fafc;
  border-top: 1px solid #e2eaf0;
  font-size: 11px;
  color: var(--text-secondary);
}
.selection-bar [data-slot='button'] {
  font-size: 11px;
  height: 28px;
  color: var(--text-primary);
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  font-size: 11px;
  color: var(--text-secondary);
}
.pagination > div {
  display: flex;
  align-items: center;
  gap: 11px;
}
.pagination [data-slot='button'] {
  width: 26px;
  height: 26px;
  background: white;
}
.pagination svg {
  width: 13px;
}
.directory-hint {
  padding: 13px 15px;
  display: flex;
  gap: 7px;
  align-items: center;
  background: #f9fbfc;
  border-top: 1px solid #eaf0f4;
  font-size: 11px;
  color: var(--text-secondary);
}
.patient-detail {
  min-width: 0;
  background: white;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 8px #12395004;
}
.detail-heading {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 22px 21px 12px;
}
.detail-heading > .close-patient {
  position: absolute;
  top: 7px;
  right: 8px;
  color: var(--text-secondary);
}
.detail-heading .eyebrow {
  font-size: 9px !important;
  letter-spacing: 0.07em;
  color: var(--text-secondary);
}
.detail-heading h2 {
  font-size: 23px;
  font-weight: 650;
  letter-spacing: -0.6px;
  margin: 5px 0 5px;
}
.detail-heading > div > p:last-child {
  font-size: 11px;
  color: var(--text-secondary);
}
.detail-heading > .review-badge {
  margin-top: 17px;
}
.study-caption {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-secondary);
  margin: 0 21px 15px;
}
.study-caption span {
  font-size: 10px;
  margin-left: auto;
  color: var(--text-secondary);
  background: #f3f7fa;
  padding: 3px 6px;
  border-radius: 4px;
}
.patient-information {
  padding: 21px 20px 0;
}
.patient-information-heading {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.patient-information-heading > div:first-child {
  min-width: 0;
}
.patient-information-heading .eyebrow {
  color: var(--text-secondary);
  font-size: 10px;
  letter-spacing: 0.07em;
}
.patient-information-heading h1,
.patient-information-heading h2 {
  margin-top: 5px;
  color: var(--text-primary);
  font-size: 23px;
  line-height: 1.3;
  font-weight: 650;
  letter-spacing: -0.6px;
}
.report-inline-retry {
  margin-right: 8px;
  margin-top: 8px;
}
.patient-name-status {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 5px;
  padding-right: 20px;
}
.patient-name-status h1,
.patient-name-status h2 {
  margin: 0;
}
.patient-prior-count {
  cursor: pointer;
  background: var(--polynesian-blue-10);
  color: var(--text-primary);
  border-radius: 4px;
}
.patient-prior-count:hover {
  background: var(--polynesian-blue-20);
}
.patient-information-heading > .close-patient {
  position: absolute;
  top: -14px;
  right: -12px;
  color: var(--text-secondary);
}
.patient-demographics,
.patient-study-fields {
  display: grid;
  gap: 14px 16px;
}
.patient-demographics {
  grid-template-columns: 1.35fr 1fr 1fr;
  padding: 18px 0;
}
.patient-demographics > div,
.patient-study-fields > div {
  min-width: 0;
}
.patient-information dt {
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.5;
  margin-bottom: 3px;
}
.patient-information dd {
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
}
.patient-study-information {
  border-block: 1px solid #e3ebf2;
  padding: 14px 0 17px;
}
.patient-mrn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: relative;
  white-space: nowrap;
}
.patient-mrn-copy {
  color: var(--muted-foreground);
  margin-block: -3px;
}
.patient-mrn-copy:hover {
  color: var(--text-primary);
}
.patient-mrn-feedback {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 10px;
  line-height: 1.3;
  color: var(--text-primary);
  background: var(--card);
  white-space: normal;
  width: max-content;
  max-width: 180px;
  z-index: 1;
}
.patient-study-heading {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-bottom: 10px;
}
.patient-study-information h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
}
.patient-study-fields {
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
}
.patient-study-fields dd {
  font-size: 12px;
}
.patient-information-pending {
  color: var(--text-secondary);
  font-weight: 400;
}
.patient-information-full {
  padding: 24px 24px 0;
}
.patient-information-full .patient-information-heading h1 {
  font-size: 30px;
}
.patient-information-full .patient-demographics {
  grid-template-columns: 1.35fr repeat(5, 1fr);
  padding: 20px 0;
}
.patient-information-full .patient-study-fields {
  grid-template-columns: 1fr 1.6fr;
}
.patient-page .page-heading {
  margin-bottom: 18px;
}
@media (max-width: 600px) {
  .patient-information,
  .patient-information-full {
    padding: 20px 17px 0;
  }
  .patient-information-full .patient-demographics {
    grid-template-columns: 1.35fr 1fr 1fr;
  }
  .patient-information-full .patient-study-fields {
    grid-template-columns: 1fr 1fr;
  }
  .patient-information dd {
    font-size: 12px;
  }
}
.detail-tabs {
  width: 100% !important;
  justify-content: flex-start !important;
  border-bottom: 0;
  box-shadow: inset 0 -1px 0 #e5ecf2;
  padding: 0 21px !important;
  height: 39px !important;
  gap: 19px !important;
  border-radius: 0;
}
.detail-tabs [data-slot='tabs-trigger'] {
  height: 100%;
  border-block: 0;
  font-size: 12px;
  padding: 8px 0;
  flex: none;
  color: var(--text-secondary);
}
.detail-tabs [data-slot='tabs-trigger']:disabled,
.detail-tabs [data-slot='tabs-trigger'][aria-disabled='true'] {
  color: var(--text-secondary);
  opacity: 1;
  cursor: default;
}
.prior-study-count {
  min-width: 17px;
  padding: 1px 4px;
  border-radius: 4px;
  background: #e8f0f5;
  color: var(--text-secondary);
  font-size: 10px;
  line-height: 1.4;
  text-align: center;
}
.detail-tabs [data-active] {
  color: var(--text-primary) !important;
}
.detail-tabs [data-active]:after {
  background: var(--signal-teal) !important;
  bottom: 0 !important;
  height: 3px !important;
}
.patient-detail [data-slot='tabs-content'] {
  margin-top: 0;
}
.patient-detail [data-slot='tabs'] {
  gap: 0;
}
.result-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 19px 20px;
}
.result-preview-clips {
  grid-column: 1 / -1;
  min-width: 0;
  container-type: inline-size;
}
.result-preview-clips .product-evidence-columns {
  margin-bottom: 0;
}
.evidence-content > .clinical-context {
  margin: 0 0 20px;
}
.result-cards-learn-more {
  grid-column: 1 / -1;
  justify-self: stretch;
  width: 100%;
}
.result-card {
  padding: 8px 0;
  background: transparent;
  border: 0;
  border-radius: 0;
}
.product-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--oxford-blue);
  display: block;
}
.result-heading {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 8px;
  margin: 8px 0 7px;
}
.result-card .result-heading:has(+ .echo-score) {
  margin-bottom: 2px;
}
.result-card .echo-score-value {
  margin-top: 0;
}
.result-card h3 {
  font-size: 16px;
  letter-spacing: -0.3px;
  font-weight: 600;
  margin: 0;
  color: var(--result-foreground);
  line-height: 1.4;
}
.result-card[data-result='processing'] h3 {
  display: flex;
  align-items: center;
  gap: 7px;
}
.processing-notice {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 19px 20px;
  padding: 16px;
  border: 1px solid var(--result-processing-border);
  border-radius: 8px;
  background: var(--result-processing-background);
  color: var(--text-primary);
}
.processing-notice h3 {
  font-size: 13px;
  font-weight: 600;
}
.processing-notice p {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-secondary);
}
.result-card p {
  font-size: 10px;
  line-height: 1.5;
  color: var(--text-secondary);
}
.result-card p b {
  color: var(--text-secondary);
  font-size: 12px;
  margin-left: 4px;
  font-weight: 550;
}
.echo-score-label {
  display: block;
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.5;
}
.echo-score-value {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 3px 6px;
  margin-top: 3px;
}
.echo-score-value strong {
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}
.echo-score-uncertainty {
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.5;
}
.hf-findings {
  margin: 0 20px 18px;
  padding: 15px;
  border: 1px solid #e0e9f0;
  border-radius: 8px;
  background: #fff;
}
.hf-findings-text {
  margin-top: 12px;
  color: var(--text-primary);
  font-size: 13px;
  line-height: 1.65;
}
.hf-findings-text strong {
  font-weight: 600;
  color: var(--result-foreground);
}
.hf-report-interpretation {
  margin-top: 13px;
  color: var(--text-secondary);
  font-size: 11px;
}
.hf-report-interpretation summary {
  cursor: pointer;
  color: var(--text-secondary);
}
.hf-report-interpretation p {
  margin-top: 11px;
  line-height: 1.65;
}
.findings-comparison {
  padding: 15px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card);
  container-type: inline-size;
}
.reader-findings {
  margin: 0 20px 18px;
}
.reader-findings-text {
  margin-top: 12px;
  color: var(--foreground);
  font-size: 13px;
  line-height: 1.65;
}
.reader-findings-source {
  display: grid;
  gap: 4px;
  margin-top: 13px;
  padding-top: 11px;
  border-top: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 11px;
  line-height: 1.5;
}
.reader-findings-empty {
  margin-top: 12px;
  color: var(--muted-foreground);
  font-size: 12px;
  line-height: 1.6;
}
.reader-findings-empty > p {
  margin-top: 8px;
}
.evidence-content > .hf-findings,
.evidence-content > .reader-findings {
  margin: 0 0 18px;
}
.patient-page [data-slot='tabs-content'] > .hf-findings,
.patient-page [data-slot='tabs-content'] > .reader-findings {
  margin-left: 24px;
  margin-right: 24px;
}
.patient-summary-content {
  padding-top: 20px;
}
.clinical-context {
  background: var(--card);
  color: var(--foreground);
  margin: 0 20px 17px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px;
}
.section-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.section-label h3 {
  font-size: 12px;
  font-weight: 600;
  color: var(--foreground);
}
.section-label > span {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--foreground);
  background: var(--secondary);
  padding: 3px 5px;
  border-radius: 3px;
}
.hospital-ef {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}
.hospital-ef > div {
  display: flex;
  align-items: center;
  gap: 12px;
}
.hospital-ef span {
  font-size: 11px;
  color: var(--foreground);
}
.hospital-ef strong {
  font-size: 19px;
  font-weight: 600;
  color: var(--foreground);
  letter-spacing: -0.4px;
}
.hospital-ef p {
  font-size: 10px;
  color: var(--text-primary);
  text-align: right;
}
.hospital-ef small {
  display: block;
  font-size: 9px;
  margin-top: 3px;
  color: var(--text-primary);
}
.context-conditions {
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.context-conditions h4 {
  font-size: 11px;
  font-weight: 500;
  color: var(--foreground);
}
.condition-tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin: 9px 0 7px;
}
.condition-tags span {
  font-size: 10px;
  background: var(--secondary);
  color: var(--foreground);
  padding: 4px 7px;
  border-radius: 4px;
}
.context-conditions > p {
  font-size: 9px;
  color: var(--text-primary);
  margin-top: 8px;
}
.care-context {
  padding-top: 13px;
}
.care-context > span {
  font-size: 11px;
  color: var(--text-secondary);
}
.care-context p {
  font-size: 11px;
  color: var(--text-secondary);
  margin: 7px 0 3px;
}
.care-context small {
  font-size: 9px;
  color: var(--text-secondary);
}
.evidence-link {
  border-top: 1px solid #e6edf2;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 21px;
  text-align: left;
  color: var(--text-secondary);
  background: #fbfcfd;
}
.summary-echo {
  margin: 0 20px 18px;
  padding: 14px;
  border: 1px solid #e0e9f0;
  border-radius: 8px;
  background: #fff;
}
.summary-echo-preview {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
}
.summary-echo-preview > img,
.summary-echo-preview > .echo-image-trigger {
  width: 126px;
  height: 96px;
  flex-shrink: 0;
  object-fit: contain;
  background: #05080c;
  border-radius: 6px;
}
.summary-echo-preview > div {
  min-width: 0;
}
.summary-echo-preview h4 {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text-primary);
}
.summary-echo-preview p,
.summary-echo-preview small {
  font-size: 11px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-top: 5px;
}
.evidence-link:hover {
  background: #f1f7fb;
}
.evidence-link > span {
  flex: 1;
}
.evidence-link b {
  font-size: 12px;
  display: block;
  font-weight: 550;
}
.evidence-link small {
  font-size: 10px;
  display: block;
  color: var(--text-secondary);
  margin-top: 3px;
}
.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 17px 20px;
  border-top: 1px solid #e5ecf2;
}
.detail-actions > [data-slot='button'] {
  flex: 1;
  font-size: 12px;
  height: 34px;
  background-clip: padding-box;
}
.detail-actions > [data-variant='outline'] {
  background: white;
}
.detail-actions > .patient-contact-support {
  flex-basis: 100%;
}
.patient-support-recipient {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
}
.patient-support-recipient > span {
  color: var(--muted-foreground);
}
.patient-support-recipient strong {
  font-weight: 600;
}
.patient-support-recipient small {
  margin-left: auto;
  color: var(--muted-foreground);
  font-size: 11px;
}
.full-record-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--text-secondary);
  font-size: 11px;
  padding-top: 5px;
}
.full-record-link:hover {
  color: var(--text-primary);
}
.workspace-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0 0;
  padding: 17px 0 22px;
  border-top: 1px solid #e0e8ef;
  font-size: 11px;
  color: var(--text-secondary);
}
.workspace-footer > span {
  display: flex;
  align-items: center;
  gap: 7px;
}
.workspace-footer button {
  color: var(--text-secondary);
}
.connected-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #91ad9e;
}
.evidence-content,
.history-content {
  padding: 20px;
}
.source-clip {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 14px;
  border: 1px solid #e0e9f0;
  border-radius: 7px;
  padding: 8px;
  width: 100%;
  text-align: left;
  background: #f8fafc;
}
.source-clip > img,
.source-clip > .echo-image-trigger {
  width: 115px;
  height: 85px;
  object-fit: cover;
  border-radius: 5px;
  background: #091523;
}
.source-clip .eyebrow {
  font-size: 8px !important;
}
.source-clip h4 {
  font-size: 12px;
  margin: 6px 0;
  font-weight: 600;
}
.source-clip p {
  font-size: 10px;
  color: var(--text-secondary);
  line-height: 1.5;
}
.view-clips-button[data-slot='button'] {
  min-height: 36px;
  height: auto;
  padding: 8px 12px;
  margin-top: 8px;
  font-size: 12px;
  gap: 8px;
  white-space: normal;
}
.echo-image-trigger {
  position: relative;
  display: block;
  width: 126px;
  height: 96px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  border-radius: 6px;
  overflow: hidden;
  background: var(--muted);
  cursor: zoom-in;
}
.echo-image-trigger > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.echo-image-expand {
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: grid;
  place-items: center;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  color: var(--foreground);
  background: var(--card);
  opacity: 0.85;
}
.echo-image-trigger:hover .echo-image-expand,
.echo-image-trigger:focus-visible .echo-image-expand {
  opacity: 1;
}
.echo-image-trigger:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}
.echo-image-dialog {
  max-width: min(760px, calc(100vw - 32px)) !important;
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  padding: 24px !important;
}
.echo-image-dialog [data-slot='dialog-header'] {
  padding-right: 28px;
}
.echo-image-enlarged {
  display: block;
  width: 100%;
  height: auto;
  max-height: calc(100dvh - 180px);
  object-fit: contain;
  border-radius: 6px;
  background: var(--muted);
}
.report-preview {
  display: flex;
  gap: 11px;
  align-items: center;
  width: 100%;
  text-align: left;
  border: 1px solid #dbe6ee;
  padding: 9px;
  border-radius: 7px;
  margin: 12px 0 18px;
  background: white;
}
.report-preview:hover {
  background: #f7fafc;
}
.report-preview img {
  width: 80px;
  height: 61px;
  object-fit: cover;
  border-radius: 4px;
}
.report-preview > span {
  flex: 1;
}
.report-preview b {
  display: block;
  font-size: 12px;
  font-weight: 550;
  color: var(--text-secondary);
}
.report-preview small {
  display: block;
  font-size: 9px;
  color: var(--text-secondary);
  margin-top: 5px;
}
.report-preview > svg {
  color: var(--text-secondary);
}
.reference-chart-card {
  margin-top: 16px;
  padding: 15px;
  border: 1px solid #dbe6ee;
  border-radius: 8px;
  background: #fff;
}
/* Result context: compact summary and focused evidence details. */
.result-context { margin: 0 20px 20px; border: 1px solid var(--cohort-grid); border-radius: 8px; background: var(--card); overflow: hidden; }
.result-context-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 16px 11px; }
.result-context-heading h3 { font-size: 13px; font-weight: 600; }
.context-demo-label { color: var(--cohort-muted); background: var(--cohort-surface); padding: 3px 6px; border-radius: 3px; font-size: 9px; font-weight: 500; letter-spacing: .2px; white-space: nowrap; }
.result-context-products { display: flex; gap: 3px; padding: 3px; border: 1px solid var(--cohort-grid); border-radius: 6px; background: var(--cohort-surface); }
.result-context > .result-context-products { margin: 0 16px; }
.result-context-products button { flex: 1; padding: 6px 10px; border-radius: 4px; font-size: 12px; color: var(--cohort-muted); white-space: nowrap; cursor: pointer; }
.result-context-products button[aria-pressed='true'] { background: var(--card); color: var(--cohort-label); box-shadow: 0 1px 3px var(--cohort-grid); font-weight: 600; }
.result-context button:focus-visible, .context-table-scroll:focus-visible, .context-method summary:focus-visible { outline: 2px solid var(--cohort-patient); outline-offset: -2px; }
.context-history-preview { display: block; width: 100%; padding: 15px 16px 12px; text-align: left; cursor: pointer; }
.context-history-preview:hover, .context-entry-links button:hover { background: var(--cohort-surface); }
.context-entry-heading { display: flex; align-items: center; gap: 8px; color: var(--cohort-label); font-size: 12px; }
.context-entry-heading > svg:last-child { margin-left: auto; }
.context-trend-summary { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 4px 10px; margin-top: 8px; font-size: 12px; }
.context-history-preview > small { display: block; color: var(--cohort-muted); font-size: 11px; margin-top: 5px; }
.context-history-visual { margin-top: 10px; }
.context-history-visual.is-compact { margin-top: 6px; }
.context-history-scroll { max-width: 100%; overflow-x: auto; }
.context-history-scroll:focus-visible { outline: 2px solid var(--cohort-patient); outline-offset: -2px; }
.context-history-chart { display: block; width: 100%; overflow: visible; }
.context-history-band { fill: var(--result-background); stroke: var(--result-border); stroke-width: .7; }
.context-history-band-label { fill: var(--result-foreground); font-size: 12px; font-weight: 600; }
.context-history-date { fill: var(--cohort-label); font-size: 12px; font-weight: 500; }
.context-history-chart-note { display: block; color: var(--cohort-muted); font-size: 11px; line-height: 1.5; margin-top: 2px; }
.context-chart-grid { stroke: var(--cohort-grid); stroke-width: 1; }
.context-history-line { stroke: var(--cohort-patient); stroke-width: 2; stroke-linecap: round; }
.context-history-point { fill: var(--card); stroke: var(--cohort-patient); stroke-width: 2; }
[data-current='true'] .context-history-point { fill: var(--cohort-patient); stroke: var(--card); }
.context-history-score rect { fill: var(--card); stroke: var(--cohort-grid); }
.context-history-score text { fill: var(--cohort-label); font-size: 12px; font-weight: 600; }
[data-current='true'] .context-history-score rect { fill: var(--oxford-blue); stroke: var(--oxford-blue); }
[data-current='true'] .context-history-score text { fill: var(--shell-header-foreground); }
.context-axis-label { font-size: 11px; fill: var(--cohort-muted); }
.context-chart-value { font-size: 13px; font-weight: 600; fill: var(--foreground); }
.context-classification-history { display: flex; gap: 12px; margin-top: 15px; overflow-x: auto; }
.context-classification-history > div { flex: 1; min-width: 110px; display: grid; gap: 5px; padding: 9px 0; border-top: 2px solid var(--result-indicator); }
.context-classification-history span { color: var(--cohort-muted); font-size: 10px; }
.context-classification-history strong { color: var(--result-foreground); font-size: 12px; }
.context-entry-links { border-top: 1px solid var(--cohort-grid); }
.context-entry-links button { width: 100%; display: flex; align-items: center; gap: 11px; padding: 13px 16px; text-align: left; cursor: pointer; color: var(--cohort-label); }
.context-entry-links button + button { border-top: 1px solid var(--cohort-grid); }
.context-entry-links button > span { flex: 1; min-width: 0; }
.context-entry-links strong, .context-entry-links small { display: block; }
.context-entry-links strong { font-size: 12px; font-weight: 600; }
.context-entry-links small { font-size: 11px; color: var(--cohort-muted); margin-top: 3px; line-height: 1.5; }
.context-entry-links svg { flex-shrink: 0; }
.result-context-dialog { width: calc(100vw - 32px) !important; max-width: 940px !important; max-height: 90dvh; overflow-y: auto; padding: 26px !important; gap: 0 !important; }
.result-context-dialog > [data-slot='tabs'] { min-width: 0; }
.result-context-dialog [data-slot='dialog-header'] { padding-right: 28px; }
.result-context-dialog [data-slot='dialog-title'] { font-size: 23px; font-weight: 600; letter-spacing: -.5px; }
.result-context-dialog [data-slot='dialog-description'] { color: var(--cohort-muted); font-size: 12px; margin-top: 5px; }
.context-dialog-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 24px; }
.context-dialog-toolbar .result-context-products { min-width: 275px; }
.context-source-line { font-size: 11px; line-height: 1.6; color: var(--cohort-muted); margin: 10px 0 15px; }
.context-detail-tabs { width: 100%; justify-content: flex-start; border-bottom: 1px solid var(--cohort-grid); gap: 22px !important; }
.context-detail-tabs [data-slot='tabs-trigger'] { font-size: 12px; padding-bottom: 12px; white-space: nowrap; }
.context-detail-body { padding-top: 22px; }
.context-introduction h3 { font-size: 16px; font-weight: 600; letter-spacing: -.15px; }
.context-introduction p { font-size: 12px; color: var(--cohort-muted); line-height: 1.65; max-width: 710px; margin-top: 6px; }
.context-range-legend { display: flex; flex-wrap: wrap; gap: 12px 22px; font-size: 11px; color: var(--cohort-muted); padding: 17px 0; }
.context-range-legend span { display: flex; align-items: center; gap: 7px; }
.context-range-legend i { display: inline-block; width: 19px; }
.legend-patient { height: 3px; background: var(--cohort-patient); }
.legend-common { height: 10px; background: var(--cohort-band); border-radius: 2px; }
.legend-observed { height: 3px; background: var(--cohort-grid); }
.context-variable-group { margin: 5px 0 20px; }
.context-variable-group h4 { padding: 9px 12px; background: var(--cohort-surface); border-radius: 4px; color: var(--cohort-label); font-size: 11px; font-weight: 600; }
.context-variable-row { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 24px; align-items: center; padding: 14px 12px; border-bottom: 1px solid var(--cohort-grid); }
.context-variable-label strong { display: block; font-size: 12px; font-weight: 500; }
.context-variable-label small { display: block; font-size: 10px; color: var(--cohort-muted); margin-top: 3px; }
.context-variable-heading { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 4px 10px; }
.context-variable-heading b { font-size: 12px; color: var(--text-primary); font-weight: 600; font-variant-numeric: tabular-nums; }
.context-coverage-label { font-size: 10px; color: var(--cohort-muted); }
.context-coverage-label[data-coverage='outside'], .context-coverage-label[data-coverage='less-common'] { color: var(--context-attention); font-weight: 600; }
.context-range-plot { display: block; width: 100%; height: 48px; margin-top: 3px; }
.context-observed-range { stroke: var(--cohort-grid); stroke-width: 3; }
.context-common-range { fill: var(--cohort-band); }
.context-patient-marker { stroke: var(--cohort-patient); stroke-width: 2; }
.context-patient-dot { fill: var(--cohort-patient); }
.context-category-count, .context-missing-reference { font-size: 11px; color: var(--cohort-muted); margin-top: 7px; }
.context-inline-note { display: flex; align-items: flex-start; gap: 8px; font-size: 11px; line-height: 1.6; color: var(--cohort-muted); margin-top: 18px; }
.context-inline-note svg { flex-shrink: 0; margin-top: 2px; }
.context-method { border-top: 1px solid var(--cohort-grid); padding-top: 14px; margin-top: 18px; font-size: 11px; color: var(--cohort-muted); line-height: 1.7; }
.context-method summary { color: var(--cohort-label); cursor: pointer; }
.context-method p { margin-top: 9px; }
.context-performance-key { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px; margin: 18px 0 10px; font-size: 10px; color: var(--cohort-muted); }
.context-table-scroll { width: 100%; overflow-x: auto; }
.context-performance-table { width: 100%; min-width: 620px; border-collapse: collapse; font-size: 12px; text-align: left; }
.context-performance-table thead { background: var(--cohort-surface); color: var(--table-header-foreground); }
.context-performance-table th, .context-performance-table td { padding: 12px; border-bottom: 1px solid var(--cohort-grid); vertical-align: top; }
.context-performance-table thead th { font-size: 11px; font-weight: 500; }
.context-performance-table small { display: block; font-size: 10px; line-height: 1.6; color: var(--cohort-muted); font-weight: 400; }
.context-performance-table th:first-child { width: 27%; }
.context-performance-table th > strong { display: block; font-weight: 500; font-size: 12px; margin-top: 3px; }
.context-performance-table td:last-child { white-space: nowrap; }
.context-performance-table td:last-child strong { font-size: 11px; font-weight: 600; }
.context-muted { display: block; font-size: 10px; color: var(--cohort-muted); font-weight: 400; margin-top: 3px; }
.context-performance-metric { min-width: 135px; display: grid; grid-template-columns: auto 1fr; align-items: baseline; gap: 3px 8px; font-variant-numeric: tabular-nums; }
.context-performance-metric strong { color: var(--text-primary); font-size: 14px; font-weight: 600; }
.context-performance-metric > span { font-size: 10px; color: var(--cohort-muted); }
.context-performance-metric svg { width: 100%; height: 22px; grid-column: 1 / -1; }
.context-chart-caption { color: var(--cohort-muted); font-size: 11px; margin: 20px 0 0; }
.context-history-studies { margin-top: 18px; border-top: 1px solid var(--cohort-grid); }
.context-history-study { display: grid; grid-template-columns: 1fr 1fr auto; align-items: center; gap: 12px; padding: 13px 0; border-bottom: 1px solid var(--cohort-grid); font-size: 12px; }
.context-history-study > span small { display: block; font-size: 10px; color: var(--cohort-muted); margin-top: 3px; }
.context-history-study strong { color: var(--result-foreground); font-size: 12px; font-weight: 500; }
.context-history-study b { color: var(--cohort-label); font-size: 12px; font-weight: 600; }
.context-history-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 18px; }
.result-context > .context-history-actions { margin: 0 16px 14px; }
.context-empty-note { color: var(--cohort-muted); font-size: 12px; margin-top: 12px; }
.patient-page .context-history-chart.is-compact { max-height: 130px; }
@media (max-width: 620px) {
  .result-context-dialog { padding: 19px !important; max-height: 94dvh; }
  .context-dialog-toolbar { flex-wrap: wrap; }
  .context-dialog-toolbar .result-context-products { width: 100%; min-width: 0; }
  .context-detail-tabs { gap: 9px !important; height: auto; align-items: stretch; }
  .context-detail-tabs [data-slot='tabs-trigger'] { font-size: 11px; min-width: 0; height: auto; padding-inline: 4px; white-space: normal; }
  .context-variable-row { grid-template-columns: 1fr; gap: 10px; }
  .context-variable-label { display: flex; flex-wrap: wrap; gap: 6px; align-items: baseline; }
  .context-delta { display: block; margin: 8px 0 0; }
  .context-history-study { grid-template-columns: 1fr 1fr; }
  .context-history-study b { grid-column: 2; }
}
.reference-chart-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 4px 12px;
  align-items: center;
}
.reference-chart-heading > div {
  display: contents;
}
.reference-chart-heading > div > span {
  grid-column: 1;
  grid-row: 1;
  display: block;
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--text-secondary);
  font-weight: 600;
}
.reference-chart-heading h3 {
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.reference-chart-heading button {
  grid-column: 2;
  grid-row: 1;
  color: var(--text-secondary);
}
.reference-patient-score {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin: 16px 0 12px;
}
.reference-patient-score span {
  display: block;
  font-size: 11px;
  color: var(--text-secondary);
}
.reference-patient-score strong {
  display: block;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.6px;
  line-height: 1.3;
  color: var(--text-primary);
  margin-top: 3px;
}
.reference-patient-range {
  text-align: right;
  padding-bottom: 3px;
}
.reference-patient-range b {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 5px;
}
.reference-chart-surface {
  background: var(--card);
  border-radius: 7px;
  padding: 13px 10px 12px;
  overflow: hidden;
}
.reference-chart-canvas {
  width: 100%;
  min-width: 0;
}
.reference-chart-canvas svg {
  display: block;
  width: 100%;
  overflow: visible;
}
.reference-gridline {
  stroke: var(--cohort-grid);
  stroke-width: 1;
}
.reference-axis-tick {
  stroke: var(--cohort-muted);
}
.reference-threshold {
  stroke: var(--context-attention);
}
.reference-tick {
  font-size: 10px;
  fill: var(--cohort-muted);
}
.reference-axis-caption {
  font-size: 11px;
  fill: var(--foreground);
  font-weight: 500;
}
.reference-disease-percent {
  fill: var(--cohort-muted);
}
.reference-patient-marker {
  pointer-events: none;
  color: var(--foreground);
}
.reference-chart-legend {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 14px;
  padding: 12px 2px 1px;
  border-top: 1px solid var(--cohort-grid);
  font-size: 10px;
  color: var(--foreground);
}
.reference-chart-legend > span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.reference-chart-legend i {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 1px;
}
.reference-chart-legend .legend-without {
  background: var(--result-not-suggestive-foreground);
}
.reference-chart-legend .legend-with {
  background: var(--result-suggestive-foreground);
}
.reference-chart-legend .legend-patient {
  border: 1.5px solid var(--foreground);
  background: transparent;
}
.reference-chart-legend .legend-threshold {
  width: 13px;
  height: 0;
  border-top: 2px dashed var(--context-attention);
}
.reference-chart-note {
  font-size: 10px;
  color: var(--cohort-muted);
  line-height: 1.6;
  margin-top: 10px;
}
.reference-chart-dialog {
  width: calc(100vw - 32px) !important;
  max-width: 980px !important;
  max-height: 90vh;
  overflow-y: auto;
  padding: 26px !important;
  gap: 0 !important;
}
.reference-chart-dialog [data-slot='dialog-header'] {
  padding-right: 24px;
}
.reference-chart-dialog .reference-chart-surface {
  padding: 20px 18px 17px;
}
.reference-chart-dialog .reference-chart-legend {
  font-size: 12px;
  gap: 12px 22px;
}
.reference-chart-dialog .reference-chart-note {
  font-size: 12px;
}
.reference-data-details {
  margin-top: 14px;
  border-top: 1px solid #e1e9f0;
  padding-top: 14px;
}
.reference-data-details summary {
  cursor: pointer;
  font-size: 12px;
  color: var(--text-secondary);
}
.reference-data-details > div {
  max-height: 260px;
  overflow: auto;
  margin-top: 12px;
}
.reference-data-details table {
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
}
.reference-data-details th,
.reference-data-details td {
  padding: 8px;
  border-bottom: 1px solid #e6edf2;
  text-align: right;
}
.reference-data-details th {
  color: var(--table-header-foreground);
}
.reference-data-details th:first-child {
  text-align: left;
}
.reference-data-details caption {
  text-align: left;
  color: var(--text-secondary);
  padding-bottom: 10px;
}
@media (max-width: 600px) {
  .reference-chart-card {
    padding: 12px;
  }
  .reference-chart-dialog {
    padding: 18px !important;
  }
  .reference-chart-dialog .reference-chart-surface {
    padding: 13px 10px;
  }
}
.echo-clip-group {
  margin-top: 14px;
  border: 1px solid var(--border);
  border-radius: 7px;
  overflow: hidden;
}
.echo-clip-group > .source-clip {
  margin-top: 0;
  border: 0;
  border-radius: 0;
}
.echo-clip-group > .clip-comparison {
  padding: 16px;
  border-top: 1px solid var(--border);
}
.clip-comparison {
  padding: 17px 0 0;
}
.small-muted {
  color: var(--text-secondary);
  font-size: 11px;
  line-height: 1.6;
}
.clip-comparison > .small-muted {
  font-size: 10px;
  margin: 7px 0 10px;
}
.clip-row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 9px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: left;
  cursor: zoom-in;
}
.clip-thumbnail {
  width: 54px;
  height: 42px;
  object-fit: contain;
  background: #05080c;
  border-radius: 4px;
  flex-shrink: 0;
}
.clip-comparison:focus-visible {
  outline: 2px solid #7ba6c7;
  outline-offset: 4px;
  border-radius: 5px;
}
.clip-row:hover,
.clip-row:focus-visible {
  background: var(--cohort-surface);
  border-color: var(--cohort-grid);
}
.clip-row:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
.clip-row > span {
  width: 56px;
  font-size: 11px;
  color: var(--text-secondary);
}
.clip-row small {
  display: block;
  color: var(--text-secondary);
  font-size: 9px;
  margin-top: 3px;
}
.output-track {
  height: 5px;
  background: #ecf1f5;
  flex: 1;
  border-radius: 3px;
  overflow: hidden;
}
.output-track i {
  display: block;
  height: 100%;
  background: #709bbb;
  border-radius: 3px;
}
.clip-row strong {
  font-size: 12px;
  width: 28px;
  color: var(--text-secondary);
}
.history-item {
  position: relative;
  display: flex;
  gap: 15px;
  padding: 22px 0 4px;
}
.timeline-dot {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: #5090bb;
  margin-top: 4px;
  box-shadow: 0 0 0 4px #edf5fa;
}
.timeline-dot.muted {
  background: #c1d2de;
  box-shadow: 0 0 0 4px #f4f7f9;
}
.history-item b {
  font-size: 12px;
  color: var(--text-secondary);
}
.history-item p {
  font-size: 11px;
  color: var(--text-secondary);
  margin: 7px 0 10px;
}
.history-item > div {
  width: 100%;
}
.history-item [data-slot='button'] {
  display: flex;
  margin-top: 14px;
  font-size: 11px;
  background: white;
}
.available,
.request-state {
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--action-success-foreground);
}
.request-state {
  color: var(--action-pending-foreground);
}
.request-state.failed {
  color: var(--action-failed-foreground);
}
.prior-result {
  border: 1px solid #e3ebf1;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
  background: #f8fafb;
}
.prior-result small {
  display: block;
  color: var(--text-secondary);
  font-size: 10px;
  margin-bottom: 5px;
}
.prior-study-loading {
  display: inline-flex;
  align-items: center;
  color: var(--text-primary);
}
.baseline-detail .source-clip {
  margin: 16px 20px;
  width: calc(100% - 40px);
}
.baseline-ef {
  margin: 0 20px;
  color: var(--text-secondary);
  font-size: 12px;
}
.baseline-ef b {
  margin-left: 10px;
  color: var(--text-secondary);
}
.record-layout {
  display: block;
  min-width: 0;
}
.patient-page .detail-heading {
  display: none;
}
.patient-page .study-caption {
  margin-top: 23px;
  font-size: 13px;
}
.patient-page .clinical-context {
  margin: 0 24px 20px;
  padding: 20px;
}
.patient-page .result-cards {
  margin: 22px 24px;
  gap: 20px;
}
.patient-page .result-card {
  padding: 8px 0;
}
.patient-page .result-card h3 {
  font-size: 23px;
}
.patient-page .result-card .product-label {
  font-size: 13px;
}
.patient-page .clinical-context p,
.patient-page .clinical-context span {
  font-size: 13px;
}
.patient-page .clinical-context small {
  font-size: 11px;
}
.patient-page .context-conditions h4,
.patient-page .section-label h3 {
  font-size: 14px;
}
.patient-page .detail-actions {
  justify-content: flex-end;
}
.patient-page .detail-actions > [data-slot='button'] {
  flex: none;
  padding-left: 25px;
  padding-right: 25px;
}
.patient-page .evidence-content,
.patient-page .history-content {
  padding: 24px;
}
.back-patients {
  font-size: 12px;
  margin-bottom: 12px;
}
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text-primary);
  font-size: 12px;
}
.review-dialog {
  max-width: 600px !important;
  max-height: 85vh;
  overflow-y: auto;
  padding: 26px !important;
}
.review-dialog [data-slot='dialog-title'] {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.5px;
  padding-right: 25px;
}
.review-dialog [data-slot='dialog-description'] {
  font-size: 12px;
  line-height: 1.6;
}
.review-notes {
  display: grid;
  gap: 22px;
  padding-top: 10px;
}
.review-notes > section {
  display: flex;
  gap: 15px;
}
.review-notes > section > span {
  font-size: 11px;
  color: var(--text-secondary);
  background: #edf4f9;
  padding: 4px 7px;
  height: 25px;
  min-width: 42px;
  border-radius: 4px;
}
.review-notes h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
}
.review-notes p {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.7;
}
.report-dialog {
  max-width: min(1100px, 95vw) !important;
  max-height: 92vh;
  overflow-y: auto;
  padding: 24px !important;
}
.full-report {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.dialog-body {
  display: grid;
  gap: 18px;
  padding-top: 8px;
}
.dialog-body > p {
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-secondary);
}
.inline-info {
  display: flex;
  gap: 9px;
  padding: 13px;
  background: #eef5fa;
  border: 1px solid #dce9f2;
  border-radius: 7px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-secondary);
}
.inline-info svg {
  flex: none;
  margin-top: 2px;
}
.field-label {
  display: grid;
  gap: 9px;
  color: var(--text-secondary);
  font-size: 12px;
}
.field-label textarea {
  width: 100%;
  min-height: 95px;
  border: 1px solid #cfdee9;
  border-radius: 6px;
  padding: 12px;
  font: inherit;
  resize: vertical;
  outline-color: #75a4c4;
}
.dialog-body > [data-slot='button'] {
  height: 37px;
  justify-self: end;
  padding: 0 15px;
}
.notice {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 80;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 30px);
  padding: 14px 17px;
  border: 1px solid #d0e0d7;
  background: white;
  color: var(--text-secondary);
  border-radius: 9px;
  font-size: 13px;
  box-shadow: 0 5px 30px #2148381a;
  animation: notice-in 0.2s ease-out;
}
.notice > svg {
  flex: none;
}
.notice button {
  margin-left: 10px;
  display: flex;
  color: var(--text-secondary);
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 60px 20px;
  color: var(--text-secondary);
}
.empty-state h3 {
  font-size: 17px;
  color: var(--text-secondary);
}
.empty-state p {
  font-size: 13px;
}
@keyframes notice-in {
  from {
    opacity: 0;
    bottom: 12px;
  }
  to {
    opacity: 1;
    bottom: 24px;
  }
}
@media (min-width: 1600px) {
  .patient-table-card td {
    font-size: 14px;
    height: 79px;
  }
  .patient-name {
    font-size: 14px;
  }
  .patient-meta {
    font-size: 11px;
  }
  .finding {
    font-size: 12px;
  }
  .review-badge {
    font-size: 11px;
  }
  .result-card h3 {
    font-size: 19px;
  }
  .product-label {
    font-size: 11px;
  }
  .context-conditions h4,
  .hospital-ef span,
  .care-context > span,
  .care-context p {
    font-size: 12px;
  }
}
@media (max-width: 1200px) {
  .directory-layout {
    grid-template-columns: minmax(0, 1.45fr) minmax(340px, 1fr);
    gap: 16px;
  }
  .workspace {
    padding-left: 24px;
    padding-right: 24px;
  }
  .app-header {
    padding: 0 24px;
    gap: 25px;
  }
  .patient-table-card table {
    min-width: 600px;
  }
  .patient-table-card td,
  .patient-table-card th {
    padding-left: 9px;
    padding-right: 9px;
  }
  .site-name {
    font-size: 12px;
  }
  .detail-heading {
    padding-left: 17px;
    padding-right: 17px;
  }
  .result-cards {
    margin-left: 16px;
    margin-right: 16px;
  }
  .clinical-context {
    margin-left: 16px;
    margin-right: 16px;
  }
  .index-controls {
    flex-wrap: wrap;
  }
  .lab-section-heading span {
    max-width: 55%;
    text-align: right;
  }
  .prototype-card {
    grid-template-columns: 56px 1fr 260px;
  }
  .role-caption {
    display: none;
  }
  .stat-card small {
    font-size: 10px;
  }
}
@media (max-width: 950px) {
  .directory-layout {
    grid-template-columns: 1fr;
  }
  .patient-detail {
    max-width: none;
  }
  .patient-table-card table {
    min-width: 650px;
  }
  .patient-detail .result-card h3 {
    font-size: 20px;
  }
  .patient-detail .product-label {
    font-size: 12px;
  }
  .patient-detail .clinical-context p,
  .patient-detail .clinical-context span {
    font-size: 12px;
  }
  .prototype-card {
    grid-template-columns: 52px 1fr;
  }
  .prototype-card .version-links {
    grid-column: 2;
  }
  .site-name {
    display: none;
  }
  .user-avatar {
    margin-left: auto;
  }
  .stat-grid {
    gap: 10px;
  }
  .stat-card {
    padding: 13px;
  }
  .stat-card > div {
    font-size: 11px;
  }
  .stat-card > div svg {
    display: none;
  }
  .detail-heading h2 {
    font-size: 25px;
  }
  .detail-tabs [data-slot='tabs-trigger'] {
    font-size: 13px;
  }
  .hospital-ef small,
  .context-conditions > p {
    font-size: 11px !important;
  }
  .source-clip > img,
  .source-clip > .echo-image-trigger {
    width: 145px;
    height: 105px;
  }
  .source-clip h4 {
    font-size: 14px;
  }
  .source-clip p {
    font-size: 12px;
  }
  .lab-section-heading span {
    display: none;
  }
}
@media (max-width: 600px) {
  .prototype-bar {
    height: auto;
    min-height: 47px;
    flex-wrap: wrap;
    padding: 8px 14px;
    gap: 8px;
  }
  .prototype-bar .back-index span {
    display: none;
  }
  .prototype-bar .bar-divider {
    display: none;
  }
  .prototype-bar .filter-label {
    display: none;
  }
  .prototype-bar [data-slot='button'] span {
    display: none;
  }
  .app-header {
    height: 65px;
    padding: 0 16px;
    gap: 20px;
  }
  .app-brand {
    font-size: 17px;
    gap: 7px;
  }
  .brand-symbol {
    width: 34px;
    height: 34px;
  }
  .app-header nav {
    gap: 14px;
  }
  .app-header nav a {
    font-size: 12px;
  }
  .app-header nav a:last-child:not(:first-child) {
    display: none;
  }
  .workspace {
    padding: 20px 15px 0;
  }
  .page-heading {
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 21px;
  }
  .page-heading h1 {
    font-size: 26px;
  }
  .page-heading p {
    font-size: 12px;
    line-height: 1.6;
  }
  .breadcrumb {
    font-size: 11px;
  }
  .download-button {
    width: 34px;
    padding: 0 !important;
    font-size: 0 !important;
    gap: 0 !important;
    flex: none;
    margin-top: 32px;
  }
  .download-button svg {
    width: 16px;
  }
  .stat-grid {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 15px;
  }
  .stat-card strong {
    font-size: 26px;
  }
  .stat-card small {
    font-size: 10px;
  }
  .stat-card > div {
    font-size: 11px;
  }
  .result-tabs {
    max-width: calc(100vw - 30px);
    overflow-x: auto;
    justify-content: flex-start !important;
    gap: 17px !important;
  }
  .result-tabs [data-slot='tabs-trigger'] {
    font-size: 12px;
  }
  .filter-row {
    gap: 8px;
  }
  .filter-row .search-box {
    min-width: 100%;
    max-width: none;
  }
  .filter-row .filter-select {
    font-size: 11px !important;
    padding: 0 8px !important;
    flex: 1;
  }
  .filter-row .filter-label {
    font-size: 10px;
  }
  .table-caption {
    padding: 8px 12px;
  }
  .directory-hint {
    font-size: 10px;
  }
  .workspace-footer {
    font-size: 9px;
  }
  .detail-heading h2 {
    font-size: 23px;
  }
  .patient-detail .clinical-context span {
    font-size: 11px;
  }
  .notice {
    font-size: 12px;
    width: max-content;
    max-width: calc(100vw - 30px);
  }
  .lab-section-heading {
    margin-top: 35px;
  }
  .prototype-card .version-links {
    grid-column: 1/-1;
  }
  .prototype-card p {
    font-size: 14px;
  }
  .lab-intro h1 {
    font-size: 32px;
    letter-spacing: -1px;
  }
  .index-controls {
    gap: 15px;
  }
  .role-tabs [data-slot='tabs-trigger'] {
    font-size: 12px;
    padding: 7px 9px;
  }
  .index-controls .search-box {
    width: 100%;
    max-width: none;
  }
  .lab-footer {
    font-size: 11px;
  }
  .review-dialog {
    padding: 22px !important;
  }
  .report-dialog {
    padding: 18px !important;
  }
  .report-dialog [data-slot='dialog-title'] {
    padding-right: 20px;
  }
  .review-notes p {
    font-size: 13px;
  }
  .source-clip > img,
  .source-clip > .echo-image-trigger {
    width: 110px;
    height: 85px;
  }
  .source-clip h4 {
    font-size: 12px;
  }
  .source-clip p {
    font-size: 10px;
  }
  .patient-page .result-cards {
    gap: 10px;
    margin: 17px;
  }
  .patient-page .result-card {
    padding: 8px 0;
  }
  .patient-page .result-card h3 {
    font-size: 18px;
  }
  .patient-page .clinical-context {
    margin: 0 17px 17px;
    padding: 14px;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *:before,
  *:after {
    animation: none !important;
    transition: none !important;
  }
}
/* Working controls and clinical content stay readable at ordinary laptop widths. */
.patient-name,
.finding,
.review-badge,
.finding-review-tag,
.review-status-text,
.patient-table-card td,
.filter-select,
.result-tabs [data-slot='tabs-trigger'],
.detail-tabs [data-slot='tabs-trigger'],
.detail-actions > [data-slot='button'] {
  font-size: 13px !important;
}
.patient-table-card th {
  font-size: 12px;
}
.patient-meta,
.product-label,
.result-card p,
.section-label h3,
.context-conditions h4,
.hospital-ef span,
.care-context > span,
.care-context p,
.evidence-link b,
.source-clip h4,
.report-preview b {
  font-size: 12px !important;
}
.hospital-ef p,
.hospital-ef small,
.context-conditions > p,
.condition-tags span,
.care-context small,
.evidence-link small,
.study-caption,
.detail-heading > div > p:last-child,
.report-preview small,
.source-clip p {
  font-size: 11px !important;
}
.row-status {
  display: grid;
  justify-items: start;
  gap: 4px;
}
.review-badge,
.finding-review-tag,
.review-status-text {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: normal;
}
.clinical-status-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 11px;
  line-height: 1.35;
  font-weight: 500;
  text-align: left;
  white-space: normal;
  cursor: pointer;
}
.clinical-status-tag svg {
  flex-shrink: 0;
}
.clinical-status-tag:hover {
  filter: brightness(0.96);
}
.clinical-status-tag:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
.finding-review-tag {
  line-height: 1.4;
  color: var(--finding-preliminary-foreground);
  background: var(--finding-preliminary-background);
  border-color: var(--finding-preliminary-border);
}
.diagnosis-confirmed-tag {
  color: var(--diagnosis-confirmed-foreground);
  background: var(--diagnosis-confirmed-background);
  border-color: var(--diagnosis-confirmed-border);
  white-space: nowrap;
}
.finding-with-confirmation {
  display: flex;
  align-items: center;
  gap: 6px;
}
.diagnosis-confirmed-icon {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  justify-content: center;
  padding: 0;
  border-color: transparent;
  background: transparent;
}
.diagnosis-confirmed-icon:hover {
  background: var(--diagnosis-confirmed-background);
}
.clinical-status-popover {
  padding: 16px;
  max-width: calc(100vw - 24px);
}
.clinical-status-popover [data-slot='popover-title'] {
  font-size: 13px;
  font-weight: 600;
}
.clinical-status-popover p,
.clinical-status-popover dd {
  font-size: 12px;
  line-height: 1.6;
}
.clinical-status-popover small,
.clinical-status-popover dt {
  color: var(--muted-foreground);
  font-size: 11px;
}
.clinical-status-popover dt:not(:first-child) {
  margin-top: 9px;
}
.echo-reader-status {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  border-top: 1px solid var(--border);
  padding-top: 12px;
  margin-top: 14px;
  font-size: 11px;
}
.echo-reader-status > span,
.echo-reader-status small {
  color: var(--muted-foreground);
}
.echo-reader-status b {
  font-weight: 500;
}
.echo-reader-status small {
  flex-basis: 100%;
  font-size: 10px;
}
.patient-table-card table {
  min-width: 780px;
}
@container (max-width: 820px) {
  .patient-table-card table {
    min-width: 680px;
    table-layout: fixed;
  }
  .patient-table-card th,
  .patient-table-card td {
    padding: 10px 6px;
    white-space: normal;
  }
  .patient-table-card th.check-cell,
  .patient-table-card th.action-cell {
    width: 4%;
  }
  .patient-table-card th.identity-cell {
    width: 18%;
  }
  .patient-table-card th.age-cell {
    width: 8%;
  }
  .patient-table-card th.study-date-cell {
    width: 14%;
  }
  .patient-table-card th.review-cell {
    width: 16%;
  }
  .patient-table-card th.finding-cell {
    width: 18%;
  }
  .patient-table-card th.provider-cell {
    width: 24%;
  }
  .patient-table-card .check-cell {
    padding-left: 9px !important;
  }
  .patient-table-card .patient-name,
  .patient-table-card .finding,
  .patient-table-card .review-badge {
    white-space: normal;
  }
  .patient-table-card .age-cell {
    white-space: nowrap;
  }
}
.detail-heading > .row-status {
  margin-top: 15px;
}
.clinical-context {
  padding: 15px;
}
.condition-tags {
  gap: 6px;
}
.result-card {
  min-width: 0;
}
.stat-card > div {
  font-size: 13px;
}
.stat-card small {
  font-size: 11px;
}
.source-clip {
  flex-wrap: wrap;
}
.source-clip > div {
  flex: 1;
  min-width: 120px;
}
.detail-heading .eyebrow {
  font-size: 10px !important;
}
@media (max-width: 600px) {
  .stat-card > div {
    font-size: 12px;
  }
  .finding,
  .review-badge,
  .finding-review-tag,
  .review-status-text {
    font-size: 12px !important;
  }
  .result-tabs [data-slot='tabs-trigger'] {
    font-size: 12px !important;
  }
}

.directory-layout.no-patient {
  grid-template-columns: minmax(0, 1fr);
}

.product-filter {
  max-width: 100%;
}
.product-filter-trigger {
  min-width: 150px;
  justify-content: flex-start;
  font-weight: 400;
}
.product-filter-trigger > svg {
  margin-left: auto;
  color: var(--text-secondary);
  width: 14px;
  height: 14px;
}
.product-filter-options {
  width: 245px;
  padding: 6px;
  gap: 2px;
}
.product-filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 13px;
  color: var(--text-primary);
  border-radius: 5px;
  cursor: pointer;
}
.product-filter-option:hover {
  background: #f1f6fa;
}
@media (max-width: 600px) {
  .product-filter {
    flex: 1;
  }
  .product-filter-trigger {
    width: 100%;
  }
}

/* Referral suggestion, creation and scheduling share a component across V3 views. */
.referral-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--referral-border);
  background: var(--referral-background);
  color: var(--referral-foreground);
  border-radius: 5px;
  padding: 3px 6px;
  font-size: 10px;
  line-height: 1.4;
  font-weight: 500;
  max-width: 100%;
}
.referral-tag svg {
  flex-shrink: 0;
}
.patient-table-card .referral-tag {
  margin-top: 6px;
}
.summary-referral {
  margin: 0 20px 20px;
}
.patient-page .summary-referral {
  margin: 0 24px 20px;
}
.referral-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  font-size: 12px;
}
.referral-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.referral-heading h3 {
  font-size: 13px;
  font-weight: 600;
}
.referral-recipient {
  margin: 8px 0 14px;
  color: var(--muted-foreground);
  font-size: 11px;
}
.referral-appointment {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 14px 0;
  padding: 12px;
  border-radius: 6px;
  background: var(--referral-scheduled-background);
  color: var(--referral-scheduled-foreground);
}
.referral-appointment strong {
  display: block;
  font-size: 17px;
  font-weight: 600;
}
.referral-appointment span {
  display: block;
  margin-top: 2px;
  font-size: 11px;
}
.referral-progress {
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 14px 0;
  padding: 0;
}
.referral-progress li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--muted-foreground);
}
.referral-progress li > svg,
.referral-step {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  padding: 2px;
  font-size: 9px;
}
.referral-progress li[data-complete='true'] > svg,
.referral-progress li[data-complete='true'] > .referral-step {
  color: var(--referral-created-foreground);
  background: var(--referral-created-background);
  border-color: var(--referral-created-border);
}
.referral-progress b {
  display: block;
  font-size: 11px;
  font-weight: 500;
}
.referral-progress li[data-complete='true'] b {
  color: var(--foreground);
}
.referral-progress li span:not(.referral-step) {
  display: block;
  font-size: 10px;
  margin-top: 2px;
}
.referral-note {
  padding-top: 12px;
  border-top: 1px solid var(--border);
}
.referral-note h4 {
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 6px;
}
.referral-note p {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: 12px;
  line-height: 1.65;
}
.referral-pending-copy,
.referral-source {
  color: var(--muted-foreground);
  margin-top: 12px;
  font-size: 10px;
  line-height: 1.6;
}
.referral-source summary {
  cursor: pointer;
}
.referral-source p {
  padding-top: 6px;
}
.referral-form {
  padding-top: 20px;
  display: grid;
  gap: 12px;
  font-size: 13px;
}
.referral-recipient-field {
  display: flex;
  gap: 16px;
  padding: 12px;
  background: var(--muted);
  border-radius: 6px;
}
.referral-recipient-field span {
  color: var(--muted-foreground);
}
.referral-form > p {
  line-height: 1.7;
  color: var(--muted-foreground);
}
.referral-form label {
  font-weight: 600;
  margin-top: 4px;
}
.referral-form textarea {
  min-height: 116px;
  line-height: 1.6;
  resize: vertical;
}
.referral-note-help {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 10px;
  color: var(--muted-foreground);
}
.referral-form-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 8px;
}
.referral-dialog-details {
  margin-top: 16px;
}
.referral-removal-error {
  color: var(--text-primary);
  font-size: 12px;
  margin-top: 12px;
}
.patient-page .referral-progress {
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
@media (max-width: 640px) {
  .patient-page .referral-progress {
    grid-template-columns: 1fr;
  }
}

/* Specialist-clinic coordination shares the patient and referral model. */
.summary-coordination {
  margin: 20px;
}
.patient-page .summary-coordination {
  margin: 22px 24px;
}
.care-coordination-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  background: var(--card);
}
.care-coordination-card > .section-label {
  margin-bottom: 16px;
}
.care-coordination-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 16px;
  margin: 0;
}
.care-coordination-fields dt {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 11px;
  color: var(--muted-foreground);
  line-height: 1.5;
  margin-bottom: 6px;
}
.care-coordination-fields dt svg {
  flex-shrink: 0;
}
.care-coordination-fields dd {
  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.care-coordination-fields dd[data-unavailable='true'] {
  color: var(--muted-foreground);
  font-weight: 500;
}
.care-coordination-fields small {
  display: block;
  margin-top: 4px;
  color: var(--muted-foreground);
  font-size: 10px;
  line-height: 1.5;
  font-weight: 400;
}
.care-coordination-source {
  font-size: 10px;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-top: 16px;
}
.care-coordination-source summary {
  cursor: pointer;
}
.care-coordination-source p {
  margin-top: 6px;
}
.care-coordination-card > .referral-card {
  border: 0;
  border-radius: 0;
  border-top: 1px solid var(--border);
  margin-top: 16px;
  padding: 16px 0 0;
}
.patient-page .care-coordination-fields {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.referral-recipient-field small {
  display: block;
  font-size: 11px;
  color: var(--muted-foreground);
  margin-top: 3px;
}
.care-coordination-compact {
  padding: 12px;
}
.care-coordination-compact .care-coordination-fields {
  gap: 12px 20px;
}
.care-coordination-compact .care-coordination-fields dd {
  font-size: 12px;
}
.care-coordination-compact .care-coordination-fields dt {
  font-size: 10px;
}
.care-coordination-compact > .section-label {
  margin-bottom: 12px;
}
@media (max-width: 760px) {
  .patient-page .care-coordination-fields {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 450px) {
  .care-coordination-fields,
  .patient-page .care-coordination-fields {
    grid-template-columns: 1fr;
  }
}

/* Shared product components: all V3 role pages and the live catalog. */
.shared-dialog {
  max-width: 640px !important;
  max-height: 88vh;
  overflow-y: auto;
}
.shared-dialog [data-slot='dialog-header'] {
  padding-bottom: 12px;
}
.shared-detail-section {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--table-radius);
  padding: 20px;
  margin-bottom: 20px;
}
.shared-detail-section h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 16px;
}
.shared-detail-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.shared-detail-heading h3 { margin: 0; }
.shared-dialog .shared-detail-section {
  padding: 14px;
  margin-bottom: 8px;
}
.shared-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  font-size: 13px;
}
.shared-details dt {
  color: var(--muted-foreground);
}
.shared-details dd {
  margin: 0;
}
.demo-settings-note,
.demo-reset p {
  font-size: 13px;
  color: var(--muted-foreground);
  line-height: 1.6;
}
.demo-navigation {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--text-primary);
  margin: 12px 0;
}
.demo-reset {
  border-top: 1px solid var(--border);
  padding-top: 20px;
}
.demo-reset h3 {
  font-size: 15px;
  font-weight: 600;
}
.demo-reset p {
  margin: 10px 0 16px;
}
.demo-error {
  background: var(--card);
  color: var(--action-failed-foreground);
  border: 1px solid var(--border);
  padding: 16px;
  border-radius: var(--table-radius);
  font-size: 13px;
}
.demo-version {
  color: var(--muted-foreground);
}
.admin-stat-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.admin-product {
  padding: 10px 0;
}
.admin-product h4 {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}
.catalog-workspace {
  max-width: 1440px;
}
.catalog-button-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  margin: 16px 0;
}
.catalog-button-examples > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.catalog-button-examples > div > span {
  color: var(--text-secondary);
  font-size: 12px;
}
.catalog-variants {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 18px;
}
.catalog-states {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: center;
}
.patient-name:disabled {
  color: inherit;
  cursor: default;
}
@media (max-width: 700px) {
  .admin-stat-grid,
  .catalog-states {
    grid-template-columns: 1fr;
  }
  .shared-details {
    grid-template-columns: 1fr;
  }
}

.workflow-badge {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  color: var(--workflow-foreground);
  background: var(--workflow-background);
  border: 1px solid var(--workflow-border);
  padding: 5px 9px;
  border-radius: 5px;
  font-size: 11px;
  line-height: 1.3;
  font-weight: 600;
}
.admin-workspace .page-heading {
  gap: 18px;
  flex-wrap: wrap;
}
.admin-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.admin-filters {
  margin-bottom: 22px;
}
.admin-case-scope {
  margin-bottom: 12px;
}
.admin-filters .filter-row {
  flex-wrap: wrap;
  gap: 10px;
}
.admin-filters .search-box {
  width: 290px;
  flex: 1 1 260px;
  max-width: 400px;
}
.admin-date-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted-foreground);
}
.admin-date-label input {
  width: 150px;
  background: var(--card);
}
.admin-scope-note {
  margin-top: 10px;
  font-size: 11px;
  color: var(--muted-foreground);
}
.admin-workspace .admin-stat-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.admin-case-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.admin-case-toolbar .filter-row {
  flex-wrap: wrap;
}
.admin-study-caption {
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
}
.admin-table-caption-settings {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}
.admin-table-settings-trigger { color: var(--muted-foreground); }
.admin-table-settings-dialog {
  width: min(540px, calc(100vw - 32px));
  max-width: 540px;
  max-height: 88dvh;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  overflow: hidden;
}
.admin-table-settings-dialog [data-slot='dialog-header'] {
  padding: 24px 40px 20px 24px;
  border-bottom: 1px solid var(--border);
}
.admin-table-settings-body { padding: 20px 24px; overflow-y: auto; }
.admin-processing-setting {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 14px;
  background: var(--muted);
  border-radius: var(--radius-md);
  margin-bottom: 24px;
}
.admin-processing-setting label { font-weight: 500; cursor: pointer; }
.admin-processing-setting p,
.admin-column-settings-help {
  color: var(--muted-foreground);
  font-size: 12px;
  line-height: 1.5;
  margin: 5px 0 0;
}
.admin-column-settings-heading { display: flex; justify-content: space-between; align-items: center; }
.admin-column-settings-heading h3 { font-size: 14px; font-weight: 600; }
.admin-column-settings-heading span { font-size: 12px; color: var(--muted-foreground); }
.admin-column-settings-list { list-style: none; padding: 0; margin: 12px 0 0; }
.admin-column-settings-list li {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--border);
}
.admin-column-settings-list li[data-visible='false'] { color: var(--muted-foreground); }
.admin-column-settings-list label { flex: 1; cursor: pointer; font-size: 13px; }
.admin-column-drag-handle { cursor: grab; color: var(--muted-foreground); touch-action: none; user-select: none; }
.admin-column-drag-handle:active { cursor: grabbing; }
.admin-column-settings-list li[data-dragging='true'] { opacity: 0.45; }
.admin-column-settings-list li[data-drop-edge]::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  pointer-events: none;
}
.admin-column-settings-list li[data-drop-edge='before']::after { top: -1px; }
.admin-column-settings-list li[data-drop-edge='after']::after { bottom: -1px; }
.admin-table-settings-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid var(--border);
  background: var(--muted);
}
.admin-table-settings-footer > div { display: flex; gap: 8px; margin-left: auto; }
.table-export-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0;
  border: 0;
  border-radius: 3px;
  background: transparent;
  color: var(--text-primary);
  font: inherit;
  white-space: nowrap;
  text-decoration: none;
}
.table-export-link:hover { text-decoration: underline; }
.table-export-link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
}
.table-export-link:disabled { opacity: 0.5; cursor: not-allowed; }
.table-export-link:disabled:hover { text-decoration: none; }
.admin-filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 12px;
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 6px;
}
.admin-selection-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 12px;
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
}
.admin-workspace .patient-table-card table {
  min-width: 1040px;
  table-layout: auto;
}
.admin-workspace .patient-table-card th {
  width: auto;
}
.admin-workspace .patient-table-card .check-cell {
  width: 35px;
}
.admin-workspace .patient-table-card .action-cell {
  width: 85px;
  min-width: 85px;
}
.admin-workspace .patient-table-card .provider-cell {
  min-width: 130px;
  white-space: normal;
}
.admin-workspace .patient-table-card .finding-cell {
  white-space: normal;
}
.admin-workspace .patient-table-card .accession-cell {
  font-size: 11px;
  min-width: 120px;
}
.admin-workspace .patient-table-card .workflow-cell {
  min-width: 110px;
}
.patient-table-card .ultromics-id-cell { min-width: 175px; font-size: 11px; }
.patient-table-card .hospital-ef-cell { min-width: 100px; }
.patient-table-card .physician-statement-cell {
  min-width: 300px;
  max-width: 380px;
  white-space: normal;
  line-height: 1.6;
}
.provider-link,
.admin-count-link {
  color: var(--text-primary);
  font-size: inherit;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
}
.provider-link:hover,
.admin-count-link:hover {
  text-decoration-color: currentColor;
}
.admin-row-actions {
  display: flex;
  gap: 5px;
}
.admin-row-actions button {
  border-radius: 5px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 30px;
  color: var(--muted-foreground);
}
.admin-row-actions button:hover {
  background: var(--secondary);
  color: var(--text-primary);
}
.catalog-patient-panel {
  max-width: 460px;
  margin-top: 20px;
}
.admin-directory-layout > #admin-patient-panel {
  min-width: 0;
  scroll-margin-top: 20px;
}
.patient-detail .detail-tabs {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
}
.patient-detail[data-billing='true'] .detail-tabs {
  padding: 0 14px !important;
  gap: 12px !important;
}
.patient-detail[data-billing='true'] .detail-tabs [data-slot='tabs-trigger'] {
  font-size: 12px !important;
}
.billing-content {
  padding: 2px 20px 22px;
}
.billing-status-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.billing-status-grid > .shared-detail-section {
  min-width: 0;
  margin-bottom: 0;
  padding: 16px;
  overflow-wrap: anywhere;
}
.billing-content .shared-details dd {
  overflow-wrap: anywhere;
}
.billing-content .shared-details {
  grid-template-columns: 104px minmax(0, 1fr);
}
.billing-content .shared-details .text-link {
  font-size: inherit;
  text-align: left;
}
.provider-utilization-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  max-width: 100%;
  margin-top: 6px;
  padding: 4px 6px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: var(--cohort-surface);
  color: var(--text-primary);
  font-size: 11px;
  line-height: 1.4;
  text-align: left;
}
.provider-utilization-indicator strong,
.provider-utilization-indicator svg {
  flex-shrink: 0;
}
.provider-utilization-indicator:hover {
  background: var(--muted);
}
.provider-utilization-indicator:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
.provider-utilization-popover {
  width: min(320px, calc(100vw - 32px));
  padding: 16px;
}
.provider-utilization-period {
  font-size: 11px;
  color: var(--muted-foreground);
}
.provider-utilization-summary {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-primary);
  font-size: 12px;
}
.provider-utilization-summary strong {
  font-size: 28px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.provider-utilization-explanation {
  font-size: 12px;
  line-height: 1.6;
}
@media (max-width: 950px) {
  .admin-directory-layout > #admin-patient-panel {
    grid-row: 1;
  }
}
.admin-evidence-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.admin-evidence-grid > .shared-detail-section {
  min-width: 0;
}
.admin-evidence-grid h4 {
  font-size: 12px;
  font-weight: 600;
  margin: 0 0 12px;
}
.admin-evidence-note {
  font-size: 12px;
  color: var(--muted-foreground);
  line-height: 1.65;
  margin: 10px 0;
}
.admin-source {
  font-size: 11px;
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-top: 10px;
  overflow-wrap: anywhere;
}
.admin-example-label {
  display: inline-block;
  font-size: 10px;
  color: var(--muted-foreground);
  margin: 4px 8px;
  border-bottom: 1px dotted var(--border);
}
.admin-statement {
  font-size: 13px;
  line-height: 1.65;
  margin: 8px 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.admin-support-form {
  display: grid;
  gap: 18px;
}
.admin-support-form > label {
  font-size: 13px;
  display: grid;
  gap: 8px;
}
.support-message-starters {
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}
.support-message-starters legend {
  padding: 0;
  margin-bottom: 8px;
  font-size: 13px;
}
.support-message-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.support-message-options button[aria-pressed='true'] {
  border-color: var(--primary);
  background: var(--secondary);
  color: var(--text-primary);
}
.admin-ticket-context {
  max-height: 180px;
  overflow: auto;
  padding: 12px;
  background: var(--secondary);
  border-radius: 6px;
  font-size: 12px;
}
.admin-ticket-context p {
  margin-top: 12px;
}
.admin-ticket-context small {
  display: block;
  color: var(--muted-foreground);
  margin-top: 4px;
}
.admin-ticket-item {
  border-bottom: 1px solid var(--border);
  padding-bottom: 16px;
}
.admin-ticket-item h3 {
  font-size: 15px;
  font-weight: 600;
}
.admin-ticket-item summary {
  font-size: 12px;
  cursor: pointer;
}
.admin-trend-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 22px 0 10px;
}
.admin-trend-summary > div { display: grid; gap: 6px; }
.admin-trend-summary strong {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1.1;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
}
.admin-trend-summary span { color: var(--muted-foreground); font-size: 12px; }
.admin-trend-legend { display: inline-flex; align-items: center; gap: 9px; }
.admin-trend-legend i { width: 24px; height: 3px; background: var(--primary); border-radius: 2px; }
.admin-trend-scroll { overflow-x: auto; }
.admin-trend-chart { width: 100%; height: 260px; aspect-ratio: auto; }
.admin-trend-hint { margin-top: 10px; color: var(--muted-foreground); font-size: 12px; }
.admin-workspace .admin-provider-card table {
  min-width: 850px;
}
.admin-provider-card .table-caption {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.admin-provider-card td,
.admin-provider-card th {
  padding: 14px 20px;
}
.admin-provider-utilization-cell {
  width: 28%;
}
.admin-provider-utilization {
  display: grid;
  width: 100%;
  min-width: 180px;
  gap: 8px;
  padding: 4px 0;
  text-align: left;
  color: var(--text-primary);
  border-radius: 4px;
}
.admin-provider-utilization-value {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  font-variant-numeric: tabular-nums;
}
.admin-provider-utilization-value strong {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
}
.admin-provider-utilization-value > span {
  font-size: 12px;
  color: var(--muted-foreground);
  white-space: nowrap;
}
.admin-provider-utilization-track {
  display: block;
  height: 8px;
  overflow: hidden;
  border-radius: 3px;
  background: var(--palette-slate-200);
}
.admin-provider-utilization-track > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--primary);
}
.admin-count-link {
  font-weight: 600;
  min-width: 32px;
  padding: 4px;
}
.admin-count-note {
  margin-top: 18px;
}
@media (max-width: 900px) {
  .admin-workspace .admin-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .admin-workspace .admin-stat-grid,
  .admin-evidence-grid {
    grid-template-columns: 1fr;
  }
  .admin-trend-summary { align-items: flex-start; flex-direction: column; gap: 12px; }
}

/* Shared V6 product evidence. */
.product-evidence-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--result-foreground);
}
.product-clips {
  min-width: 0;
}
.product-clips > .section-label {
  margin: 16px 0 10px;
}
.section-label h3.clip-product-heading {
  color: var(--foreground);
  font-size: 13px;
  font-weight: 600;
}
.product-clips .source-clip > div {
  min-width: 0;
}
.product-clips .source-clip small {
  display: block;
  color: var(--muted-foreground);
  font-size: 11px;
}
.product-clip-row .clip-identity {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 3px 8px;
}
.product-clip-row .clip-identity small {
  margin-top: 0;
}
.product-clip-row .clip-output {
  flex: 1;
  min-width: 0;
}
.clip-output-label {
  display: block;
  color: var(--muted-foreground);
  font-size: 10px;
  margin-bottom: 4px;
}
.clip-score-value {
  display: flex;
  align-items: center;
  gap: 10px;
}
.product-clip-row .clip-output strong {
  width: auto;
  font-size: 12px;
  white-space: normal;
}
.product-clip-row .clip-finding {
  display: block;
  color: var(--result-foreground);
}
.summary-device-evidence {
  margin: 0 20px 18px;
}
.summary-findings {
  margin-top: 20px;
}
.product-evidence-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 14px;
  margin-bottom: 20px;
}
.product-evidence-column {
  min-width: 0;
  overflow-wrap: anywhere;
}
.echogo-findings {
  margin-bottom: 18px;
}
.summary-findings .echogo-findings {
  margin-bottom: 0;
}
.echogo-findings .hf-findings {
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.echogo-findings .hf-findings-text {
  margin-top: 7px;
}
.product-evidence-column .section-label {
  flex-wrap: wrap;
  gap: 6px;
}
.product-evidence-column .product-clips > .section-label {
  margin-top: 0;
}
.product-evidence-column .summary-echo {
  margin: 0;
  padding: 0;
  border: 0;
}
.product-evidence-column .source-clip,
.product-evidence-column .summary-echo-preview {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.product-evidence-column .source-clip > .echo-image-trigger,
.product-evidence-column .summary-echo-preview > .echo-image-trigger {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
}
.product-evidence-column .view-clips-button {
  width: 100%;
  padding-inline: 8px;
}
.product-evidence-column .clip-comparison {
  padding: 12px 8px;
}
.product-evidence-column .product-clip-row {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 4px 12px;
  padding: 8px 3px;
}
.product-evidence-column .clip-thumbnail {
  grid-column: 1;
  grid-row: 1 / 3;
  width: 128px;
  height: 96px;
}
.all-clips-toggle {
  width: fit-content;
  height: auto;
  min-height: 28px;
  padding: 0;
  border: 0;
  border-radius: 0;
}
.product-evidence-comparison[data-mode='evidence'] {
  margin-bottom: 20px;
}
.clip-scoring-help {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--oxford-blue);
  cursor: help;
}
.clip-scoring-help:focus-visible {
  outline: 2px solid var(--oxford-blue);
  outline-offset: 3px;
  border-radius: 50%;
}
.product-evidence-column .clip-identity {
  grid-column: 2;
  grid-row: 1;
  width: auto;
}
.product-evidence-column .clip-output {
  grid-column: 2;
  grid-row: 2;
}
.evidence-content,
.summary-device-evidence,
.prior-dual-evidence,
.prior-report-summary {
  container-type: inline-size;
}
.prior-dual-evidence {
  padding: 18px 0;
}
@container (max-width: 360px) {
  .product-evidence-columns {
    grid-template-columns: minmax(0, 1fr);
  }
  .product-evidence-column {
    display: flex;
    flex-direction: column;
    grid-row: auto;
  }
  .product-evidence-column > * {
    width: 100%;
  }
}
@media (min-width: 951px) {
  .directory-layout:not(.record-layout):has(.patient-detail[data-detail-tab='evidence']) {
    grid-template-columns: minmax(0, 1fr) minmax(500px, 1.2fr);
  }
}

.patient-table-card[hidden] {
  display: none;
}
.patient-navigator {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--table-radius);
  background: var(--card);
}
.patient-navigator-heading {
  display: grid;
  gap: 10px;
  padding: 14px 12px;
  border-bottom: 1px solid var(--table-rule);
}
.patient-navigator-heading > button {
  justify-content: flex-start;
  padding: 0;
  color: var(--text-primary);
  font-size: 13px;
}
.patient-navigator-heading > span {
  color: var(--muted-foreground);
  font-size: 12px;
}
.patient-navigator-list {
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: min(680px, 65dvh);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}
.patient-navigator-list > li + li {
  border-top: 1px solid var(--table-rule);
}
.patient-navigator-row {
  width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  padding: 14px 12px 8px;
  border-left: 3px solid transparent;
  text-align: left;
  cursor: pointer;
}
.patient-navigator-list > li:hover {
  background: var(--table-row-hover);
}
.patient-navigator-row[aria-current='true'] {
  background: var(--table-row-selected);
  border-left-color: var(--table-selection-indicator);
}
.patient-navigator-row:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: -3px;
}
.patient-navigator-identity {
  display: grid;
  gap: 4px;
  min-width: 0;
}
.patient-navigator-identity strong {
  color: var(--foreground);
  font-size: 13px;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.patient-navigator-identity > span,
.patient-navigator-row > svg {
  color: var(--muted-foreground);
  font-size: 11px;
}
.patient-navigator-status {
  padding: 0 12px 14px;
  border-left: 3px solid transparent;
}
.patient-navigator-status[data-selected='true'] {
  background: var(--table-row-selected);
  border-left-color: var(--table-selection-indicator);
}
.patient-navigator-status .review-badge,
.patient-navigator-status .clinical-status-tag {
  font-size: 10px;
  padding: 2px 5px;
  min-height: 0;
}
@media (min-width: 951px) {
  .directory-layout.evidence-focused:not(.record-layout):has(.patient-detail[data-detail-tab='evidence']) {
    grid-template-columns: clamp(220px, 22vw, 280px) minmax(0, 1fr);
  }
  .patient-navigator {
    position: sticky;
    top: 20px;
  }
}
@media (max-width: 950px) {
  .patient-navigator-list {
    max-height: 210px;
  }
}

/* Device findings share a two-column comparison card. */
.findings-comparison-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 14px;
}
.findings-comparison-columns > section { min-width: 0; }
.findings-comparison-columns h4 { font-size: 13px; font-weight: 600; }
@container (max-width: 360px) {
  .findings-comparison-columns { grid-template-columns: minmax(0, 1fr); }
}

/* A compact comparison keeps both products visible without stretching charts. */
.result-context { container-type: inline-size; }
.context-overview-grid { display: grid; min-width: 0; padding: 0 16px 16px; gap: 18px; }
.context-combined-history { min-width: 0; }
.context-combined-history .context-entry-heading { justify-content: space-between; }
.context-combined-history .context-entry-heading :is(h3, h4) { font-size: 13px; font-weight: 600; }
.result-context[data-variant='history'] .context-overview-grid { grid-template-columns: minmax(0, 1fr); padding: 16px 20px; }
.context-combined-history .context-entry-heading button { margin-left: auto; padding: 0; height: 28px; }
.combined-history { min-width: 0; }
.combined-history-legend { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 6px 0 8px; font-size: 12px; }
[data-history-product='hf'] { --history-series: var(--history-heart-failure); }
[data-history-product='amyloid'] { --history-series: var(--history-amyloidosis); }
.combined-history-legend span { display: inline-flex; align-items: center; gap: 7px; }
.combined-history-legend i { width: 24px; height: 0; border-top: 2px solid var(--history-series); position: relative; }
.combined-history-legend i::after { content: ''; width: 6px; height: 6px; position: absolute; top: -4px; left: 9px; border-radius: 50%; background: var(--history-series); }
.combined-history-legend [data-history-product='amyloid'] i { border-top-style: dashed; }
.combined-history-legend [data-history-product='amyloid'] i::after { border-radius: 0; transform: rotate(45deg); }
.combined-history-scroll { max-width: 100%; overflow-x: auto; }
.combined-history-scroll svg { display: block; max-width: none; }
.combined-history-scroll:focus-visible { outline: 2px solid var(--cohort-patient); outline-offset: -2px; }
.combined-history-grid { stroke: var(--cohort-grid); stroke-dasharray: 3 4; }
.combined-history-label,
.combined-history-date,
.combined-history-current { fill: var(--muted-foreground); font-size: 11px; }
.combined-history-date { fill: var(--foreground); }
.combined-history-current { font-size: 10px; }
.combined-history-line { stroke: var(--history-series); stroke-width: 2; fill: none; }
[data-history-product='amyloid'] .combined-history-line { stroke-dasharray: 5 4; }
.combined-history-marker { fill: var(--card); stroke: var(--history-series); stroke-width: 2; }
[data-current='true'] .combined-history-marker { fill: var(--history-series); }
.context-product-trends { display: flex; flex-wrap: wrap; gap: 6px 20px; margin-top: 10px; }
.context-product-trends button { display: flex; align-items: center; gap: 6px; font-size: 11px; text-align: left; cursor: pointer; }
.context-product-trends strong { font-weight: 500; }
.context-product-trends span { color: var(--muted-foreground); }
.context-product-trends svg { flex-shrink: 0; }
.context-evidence-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.context-evidence-links h4 { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; margin-bottom: 4px; }
.context-evidence-links button { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; padding: 8px 0; text-align: left; cursor: pointer; }
.context-evidence-links button:hover strong, .context-product-trends button:hover strong { text-decoration: underline; }
.context-evidence-links button strong { display: block; font-size: 12px; font-weight: 500; color: var(--cohort-label); }
.context-evidence-links button small { display: block; margin-top: 3px; font-size: 11px; color: var(--muted-foreground); line-height: 1.4; }
.context-evidence-links button svg { flex-shrink: 0; }
@container (min-width: 900px) {
  .context-overview-grid { grid-template-columns: minmax(0, 2fr) minmax(245px, 1fr); gap: 24px; }
  .context-evidence-links { grid-template-columns: 1fr; gap: 12px; border-left: 1px solid var(--border); padding-left: 22px; }
}
@container (max-width: 390px) {
  .context-evidence-links { grid-template-columns: 1fr; }
  .context-product-trends { flex-direction: column; }
  .context-product-trends button { flex-wrap: wrap; }
}


.reader-statement-list { display: grid; gap: 20px; margin-top: 16px; }
.reader-statement { min-width: 0; }
.reader-statement h4 { font-size: 13px; font-weight: 600; color: var(--foreground); }
.reader-statement .reader-findings-text { max-width: 110ch; margin-top: 8px; }
.reader-statement + .reader-statement { border-top: 1px solid var(--border); padding-top: 18px; }
.reader-statement-na { margin-top: 14px; font-size: 12px; color: var(--muted-foreground); }
.reader-statement-na span { font-weight: 500; margin-right: 8px; }

/* Shared brand-track controls: solid focus, distinct from pale decorative rules. */
[data-slot='button']:focus-visible,
[data-slot='input']:focus-visible,
[data-slot='select-trigger']:focus-visible,
.connector a:focus-visible,
.brand-dialog-actions a:focus-visible,
.brand-strategy select:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 3px;
  box-shadow: 0 0 0 2px var(--card);
}
.lab-header-links { display: flex; flex-wrap: wrap; gap: 20px; }

.specialist-stat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
@media (max-width: 650px) { .specialist-stat-grid { grid-template-columns: 1fr; } }

/* Text fields use one continuous 2px focus border without changing their size. */
[data-slot='input']:focus-visible,
[data-slot='textarea']:focus-visible,
[data-slot='input-group']:has([data-slot='input-group-control']:focus-visible) {
  --field-focus-border: var(--ring);
  border-color: var(--field-focus-border);
  outline: none;
  box-shadow: inset 0 0 0 1px var(--field-focus-border);
}
[data-slot='input'][aria-invalid='true']:focus-visible,
[data-slot='textarea'][aria-invalid='true']:focus-visible,
[data-slot='input-group']:has([aria-invalid='true']):has([data-slot='input-group-control']:focus-visible) {
  --field-focus-border: var(--destructive);
}
`,g=[`color`,`background-color`,`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`,`outline-color`,`text-decoration-color`,`fill`,`stroke`,`background-image`,`box-shadow`,`text-shadow`],_=new Set([`color`,`fill`,`stroke`,`text-shadow`]),v=e=>`--ds-audit-${e}`,y=/(?:rgba?|hsla?|oklch|oklab|lch|lab|color)\([^)]*\)|#[\da-f]{3,8}\b|\b(?:black|white|transparent)\b/gi,b=e=>[...new Set([...e.matchAll(/var\(\s*(--[\w-]+)/g)].map(e=>e[1]))],x={token:`Token reference`,literal:`Literal · matches token`,outside:`Outside tokens`,unknown:`Source unresolved`};function S(e){return/^--(?:(?:oxford-blue|polynesian-blue|signal-teal)(?:-\d+)?|mist|cloud|white)$/.test(e)?`Brand palette`:/^--(?:result|review|finding|referral|workflow|palette|action)-/.test(e)?`Clinical / workflow`:`Interface`}function C(e,t,n,r){return t.length&&n?`token`:e.length?t.length?`unknown`:r?`literal`:`unknown`:`outside`}function w(e){let t=e.createElement(`canvas`);t.width=t.height=1;let n=t.getContext(`2d`,{willReadFrequently:!0}),r=new Map;return e=>{if(r.has(e))return r.get(e);if(!e||!CSS.supports(`color`,e)||/^(?:none|currentcolor|inherit|initial|unset|revert.*)$/i.test(e))return null;n.clearRect(0,0,1,1),n.fillStyle=e,n.fillRect(0,0,1,1);let t=[...n.getImageData(0,0,1,1).data],i=t[3]===0?null:`#`+t.slice(0,t[3]===255?3:4).map(e=>e.toString(16).padStart(2,`0`)).join(``).toUpperCase();return r.set(e,i),i}}function T(e,t){let n=[t];(t===`background-color`||t===`background-image`)&&n.push(`background`),t.startsWith(`border-`)&&n.push(t.replace(`-color`,``),`border-color`,`border`),t===`outline-color`&&n.push(`outline`),t===`text-decoration-color`&&n.push(`text-decoration`);for(let t of n){let n=e.getPropertyValue(t);if(n)return{value:n,important:e.getPropertyPriority(t)===`important`}}return null}function E(e,t,n){let r=e.defaultView,i=w(e),a=new Map,o=0;function s(e,t,n){return g.map(r=>{let i=T(e,r);if(!i)return``;let s=`d${++o}`;return a.set(s,{value:i.value,selector:t,source:n}),`${v(r)}:${s}${i.important?`!important`:``};`}).join(``)}function c(e,t,n=``){return[...e].map(e=>{if(e instanceof r.CSSStyleRule){let r=n?`${n} { ${e.selectorText} }`:e.selectorText,i=s(e.style,r,t),a=e.cssRules?.length?c(e.cssRules,t,r):``;return i||a?`${e.selectorText}{${i}${a}}`:``}if(e.constructor.name===`CSSNestedDeclarations`&&`style`in e)return s(e.style,n,t);if(`cssRules`in e&&!/keyframes/i.test(e.constructor.name)){let r=c(e.cssRules,t,n);return r?`${e.cssText.slice(0,e.cssText.indexOf(`{`))}{${r}}`:``}return``}).join(`
`)}let l=[...e.styleSheets],u=e.createElement(`style`);u.dataset.audit=`provenance`,u.textContent=g.map(e=>`@property ${v(e)} { syntax: "*"; inherits: ${_.has(e)}; }`).join(`
`)+l.map(e=>c(e.cssRules,e.ownerNode?.dataset.source||`captured stylesheet`)).join(`
`),e.head.append(u);let d=[...e.querySelectorAll(`#root, #root *`)],f=new Map;d.forEach((t,n)=>{if(t.dataset.auditId=String(n),f.set(n,t),t.style.length){let n=t.style.cssText,r=e.createElement(`span`);r.style.cssText=n,t.style.cssText+=s(r.style,`[style]`,`inline style`)}});let p=new Set(t);function m(e,t,n,i=0){if(i>20)return;let o=r.getComputedStyle(e,n),s=a.get(o.getPropertyValue(v(t)).trim());if(s&&/^(inherit|unset)$/i.test(s.value)&&e.parentElement&&_.has(t))return m(e.parentElement,t,void 0,i+1);if(s&&/currentcolor/i.test(s.value)&&t!==`color`)return m(e,`color`,n,i+1);if(!s&&[`fill`,`stroke`].includes(t)){let r=e.getAttribute(t);if(r)return/currentcolor/i.test(r)?m(e,`color`,n,i+1):{value:r,selector:e.tagName,source:`SVG attribute`}}return!s&&t.endsWith(`-color`)&&t!==`background-color`?m(e,`color`,n,i+1):s}function h(e){let t=[],a=e.getAttribute(`aria-label`)||(e.textContent||``).trim().replace(/\s+/g,` `).slice(0,95)||e.tagName.toLowerCase(),o=e.tagName.toLowerCase()+(e.id?`#${e.id}`:``)+[...e.classList].filter(e=>!e.includes(`:`)).slice(0,2).map(e=>`.${e}`).join(``);for(let a of[void 0,`::before`,`::after`]){let o=r.getComputedStyle(e,a);if(a&&[`none`,`normal`,``].includes(o.content))continue;let s=!!a||[...e.childNodes].some(e=>e.nodeType===3&&e.textContent?.trim())||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName);for(let r of g){if(r===`color`&&!s||r===`text-decoration-color`&&o.textDecorationLine===`none`||r.startsWith(`border-`)&&(parseFloat(o.getPropertyValue(r.replace(`-color`,`-width`)))===0||o.getPropertyValue(r.replace(`-color`,`-style`))===`none`)||r===`outline-color`&&(e.hasAttribute(`data-audit-issue`)||parseFloat(o.outlineWidth)===0||o.outlineStyle===`none`)||[`fill`,`stroke`].includes(r)&&(!e.closest(`svg`)||![`path`,`circle`,`rect`,`polygon`,`polyline`,`line`,`ellipse`,`text`,`use`].includes(e.tagName.toLowerCase()))||r===`stroke`&&parseFloat(o.strokeWidth)===0)continue;let c=o.getPropertyValue(r),l=[`background-image`,`box-shadow`,`text-shadow`].includes(r)?c.match(y)||[]:[c],u=m(e,r,a),d=b(u?.value||``),f=d.some(e=>p.has(e)&&!!o.getPropertyValue(e).trim());for(let e of new Set(l)){let o=i(e);if(!o)continue;let s=n.filter(e=>e.color===o);t.push({property:(a?a+` `:``)+r,color:o,value:e,status:C(s,d,f,!!u),tokens:s,references:d,declaration:u})}}}return{id:Number(e.getAttribute(`data-audit-id`)),label:a,selector:o,paints:t,asset:[`IMG`,`VIDEO`,`CANVAS`].includes(e.tagName)}}function x(){let e=[];for(let t of d){let n=t.getBoundingClientRect();if(!n.width&&!n.height||!t.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}))continue;let r=h(t);for(let t of r.paints)e.push({...t,elementId:r.id,label:r.label,selector:r.selector})}return e}return{inspect:h,scan:x,byId:f,sourceCount:a.size,dispose:()=>u.remove()}}var D=n(),O=[...new Set([...`${c}\n${h}`.matchAll(/(--[\w-]+)\s*:/g)].map(e=>e[1]))].filter(e=>!e.startsWith(`--tw-`));function k(e){let t=new DOMParser().parseFromString(`<div id="root">${e.html}</div>`,`text/html`);return t.querySelectorAll(`script,iframe,object,embed,link,meta,base`).forEach(e=>e.remove()),t.querySelectorAll(`*`).forEach(e=>{[...e.attributes].forEach(t=>{(t.name.startsWith(`on`)||t.name===`srcdoc`||/^(javascript|vbscript):/i.test(t.value))&&e.removeAttribute(t.name)}),e.hasAttribute(`contenteditable`)&&e.removeAttribute(`contenteditable`)}),`<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="script-src 'none'; connect-src 'none'; form-action 'none'; object-src 'none'"><title>Captured Specialist reference</title>`+e.styles.map(e=>`<style data-source="${e.source.replace(/["<>]/g,``)}">${e.css.replace(/<\/style/gi,`<\\/style`)}</style>`).join(``)+`<style>html{scroll-behavior:auto!important}*,*::before,*::after{animation:none!important;transition:none!important}</style></head><body>`+t.body.innerHTML+`</body></html>`}function A({matches:e,compact:t=!1}){let n=e?a:l,r=e?`Palette match`:`No palette match`;return(0,D.jsxs)(`span`,{className:`audit-palette-match ${e?`matches`:`no-match`}`,"aria-label":t?r:void 0,title:t?r:void 0,children:[(0,D.jsx)(n,{size:17,strokeWidth:2,"aria-hidden":`true`}),!t&&(0,D.jsx)(`strong`,{children:r})]})}function ee({paint:e}){return(0,D.jsxs)(`div`,{className:`audit-paint`,children:[(0,D.jsxs)(`div`,{className:`audit-paint-top`,children:[(0,D.jsx)(`span`,{className:`audit-swatch`,style:{background:e.color}}),(0,D.jsx)(`strong`,{children:e.color}),(0,D.jsx)(`span`,{children:e.property})]}),(0,D.jsx)(`span`,{className:`audit-status ${e.status}`,children:x[e.status]}),e.references.length>0&&(0,D.jsx)(`code`,{className:`audit-reference`,children:e.references.join(`, `)}),(0,D.jsx)(A,{matches:e.tokens.length>0}),e.status===`token`&&!e.tokens.length&&(0,D.jsx)(`p`,{children:`Derived from a registered token; no exact palette swatch.`}),e.tokens.length>0&&(0,D.jsxs)(`p`,{children:[e.tokens.slice(0,4).map(e=>e.name).join(`, `),e.tokens.length>4?` +${e.tokens.length-4}`:``]}),e.declaration&&(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`CSS source`}),(0,D.jsx)(`code`,{children:e.declaration.selector}),(0,D.jsx)(`code`,{children:e.declaration.value}),(0,D.jsx)(`p`,{children:e.declaration.source})]})]})}function j(){let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(``),[a,c]=(0,m.useState)(``),[l,h]=(0,m.useState)([]),[g,_]=(0,m.useState)(null),[v,y]=(0,m.useState)(!1),[b,C]=(0,m.useState)(`outside`),[T,j]=(0,m.useState)(``),[M,N]=(0,m.useState)(!1),[P,F]=(0,m.useState)(`fit`),[I,L]=(0,m.useState)(1),[R,z]=(0,m.useState)(720),[B,V]=(0,m.useState)(!1),[H,U]=(0,m.useState)(`audit`),W=(0,m.useRef)(null),G=(0,m.useRef)(null),K=(0,m.useRef)(null),q=(0,m.useRef)(!1),J=(0,m.useRef)(()=>{}),Y=(0,m.useRef)([]),X=(0,m.useRef)(null),Z=(0,m.useRef)(()=>{});(0,m.useEffect)(()=>{let e=new AbortController;return fetch(`/design-system/specialist-reference.json`,{signal:e.signal}).then(e=>{if(!e.ok)throw Error(`Reference could not be loaded.`);return e.json()}).then(e=>{t(e),r(k(e))}).catch(e=>{e.name!==`AbortError`&&c(e.message)}),()=>{e.abort(),J.current()}},[]),(0,m.useEffect)(()=>{let t=G.current;if(!t||!e)return;let n=()=>{let n=P===`fit`?Math.min(1,(t.clientWidth-32)/e.viewport.width):Number(P);L(n),z(Math.max(e.viewport.height,Math.floor((t.clientHeight-32)/n)))},r=new ResizeObserver(n);return r.observe(t),n(),()=>r.disconnect()},[e,P]),(0,m.useEffect)(()=>{Y.current.forEach(e=>e.removeAttribute(`data-audit-issue`)),Y.current=[],M&&K.current&&new Set(l.filter(e=>(b===`all`||e.status===b)&&`${e.color} ${e.label} ${e.property} ${e.references.join(` `)} ${e.declaration?.value||``}`.toLowerCase().includes(T.toLowerCase())).map(e=>e.elementId)).forEach(e=>{let t=K.current?.byId.get(e);t&&(t.dataset.auditIssue=`true`,Y.current.push(t))})},[M,l,b,T]);function te(){let t=W.current?.contentDocument;if(!(!t||!e)){J.current();try{[...t.querySelectorAll(`input,select,textarea`)].forEach((t,n)=>{let r=e.controls[n];r&&(t.value=r.value,`checked`in t&&r.checked!==void 0&&(t.checked=r.checked),`selectedIndex`in t&&r.selectedIndex!==void 0&&(t.selectedIndex=r.selectedIndex))});let n=w(document),r=getComputedStyle(document.documentElement);K.current=E(t,O,O.flatMap(e=>{let t=n(r.getPropertyValue(e).trim());return t?[{name:e,color:t,family:S(e)}]:[]}));let i=t.createElement(`div`);i.setAttribute(`aria-hidden`,`true`),i.dataset.auditOverlay=`true`,Object.assign(i.style,{position:`fixed`,pointerEvents:`none`,zIndex:`2147483647`,border:`2px solid #45CFCD`,boxShadow:`0 0 0 1px #021C3D`,display:`none`}),t.body.append(i);let a=t.createElement(`style`);a.textContent=`[data-audit-issue="true"]{outline:1px dashed #155094!important;outline-offset:2px!important}`,t.head.append(a);let o=e=>{let t=e.getBoundingClientRect();Object.assign(i.style,{display:`block`,left:t.left+`px`,top:t.top+`px`,width:t.width+`px`,height:t.height+`px`})};Z.current=(e,t=!1)=>{e.closest(`#root`)&&(X.current=e,o(e),_(K.current.inspect(e)),U(`element`),t&&(q.current=!0,y(!0)))};let s=null,c=e=>{let t=e.target;q.current||t===s||!t.closest(`#root`)||(s=t,Z.current(t))},l=e=>{e.preventDefault(),e.stopPropagation(),Z.current(e.target,!0)},u=e=>e.preventDefault(),d=e=>{if(e.key===`Escape`){q.current=!1,y(!1);return}e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&Z.current(e.target,!0))},f=e=>{q.current||Z.current(e.target)},p=()=>{X.current&&o(X.current)};t.addEventListener(`mousemove`,c),t.addEventListener(`click`,l,!0),t.addEventListener(`pointerdown`,u,!0),t.addEventListener(`submit`,u,!0),t.addEventListener(`beforeinput`,u,!0),t.addEventListener(`keydown`,d,!0),t.addEventListener(`focusin`,f),t.addEventListener(`scroll`,p,!0),h(K.current.scan()),V(!0),J.current=()=>{t.removeEventListener(`mousemove`,c),t.removeEventListener(`click`,l,!0),t.removeEventListener(`pointerdown`,u,!0),t.removeEventListener(`submit`,u,!0),t.removeEventListener(`beforeinput`,u,!0),t.removeEventListener(`keydown`,d,!0),t.removeEventListener(`focusin`,f),t.removeEventListener(`scroll`,p,!0),i.remove(),a.remove(),K.current?.dispose()}}catch(e){c(e instanceof Error?e.message:`Could not inspect the reference.`)}}}function ne(){K.current&&(Y.current.forEach(e=>e.removeAttribute(`data-audit-issue`)),N(!1),h(K.current.scan()))}function re(e){let t=K.current?.byId.get(e.elementId);t&&(t.scrollIntoView({block:`center`,inline:`nearest`}),Z.current(t,!0))}function ie(){let t=new Blob([JSON.stringify({reference:e?.title,capturedAt:e?.capturedAt,auditedAt:new Date().toISOString(),scope:`Captured rendered DOM; CSS paint colors only; no image pixel audit.`,entries:l},null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`specialist-color-audit.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}let Q=new Map;l.filter(e=>(b===`all`||e.status===b)&&`${e.color} ${e.label} ${e.property} ${e.references.join(` `)} ${e.declaration?.value||``}`.toLowerCase().includes(T.toLowerCase())).forEach(e=>{let t=e.status+e.color;Q.has(t)||Q.set(t,{entry:e,occurrences:[]}),Q.get(t).occurrences.push(e)});let $=e=>new Set(l.filter(t=>t.status===e).map(e=>e.color)).size;return(0,D.jsxs)(`div`,{className:`color-inspector`,children:[(0,D.jsxs)(`header`,{className:`audit-header`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsxs)(`a`,{href:`/components`,children:[(0,D.jsx)(i,{size:14}),` Design system`]}),(0,D.jsxs)(`h1`,{children:[`Color inspector `,(0,D.jsx)(`span`,{children:`v6`})]})]}),(0,D.jsxs)(`nav`,{children:[(0,D.jsx)(`a`,{href:`/brand-colors`,children:`Color strategy`}),(0,D.jsxs)(`button`,{onClick:ie,disabled:!B,children:[(0,D.jsx)(o,{size:15}),` Export audit`]})]})]}),(0,D.jsxs)(`div`,{className:`audit-context`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`strong`,{children:`Specialist / selected patient`}),(0,D.jsx)(`span`,{children:`Abigail Young · Summary · Studies with results`})]}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(d,{size:13}),` Captured reference ·`,` `,e?new Date(e.capturedAt).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}):`Loading`]})]}),(0,D.jsxs)(`main`,{className:`audit-workbench`,children:[(0,D.jsxs)(`section`,{className:`audit-canvas`,"aria-label":`Captured Specialist screen`,children:[(0,D.jsxs)(`div`,{className:`audit-canvas-toolbar`,children:[(0,D.jsxs)(`span`,{children:[(0,D.jsx)(f,{size:14}),` Hover to inspect · Click to pin`]}),(0,D.jsxs)(`label`,{children:[`Zoom`,` `,(0,D.jsxs)(`select`,{value:P,onChange:e=>F(e.target.value),children:[(0,D.jsxs)(`option`,{value:`fit`,children:[`Fit (`,Math.round(I*100),`%)`]}),(0,D.jsx)(`option`,{value:`1`,children:`100%`}),(0,D.jsx)(`option`,{value:`0.8`,children:`80%`}),(0,D.jsx)(`option`,{value:`0.6`,children:`60%`})]})]})]}),(0,D.jsxs)(`div`,{className:`audit-stage`,ref:G,children:[a?(0,D.jsx)(`div`,{role:`alert`,className:`audit-error`,children:a}):e&&(0,D.jsx)(`div`,{className:`audit-frame-size`,style:{width:e.viewport.width*I,height:R*I},children:(0,D.jsx)(`iframe`,{ref:W,title:`Read-only captured Specialist reference`,sandbox:`allow-same-origin`,srcDoc:n,onLoad:te,style:{width:e.viewport.width,height:R,transform:`scale(${I})`}})}),!B&&!a&&(0,D.jsx)(`p`,{className:`audit-loading`,children:`Preparing the reference and color audit…`})]}),(0,D.jsxs)(`footer`,{className:`audit-canvas-footer`,children:[`Read-only copy · Scroll inside the screen to inspect the full page. Original width `,e?.viewport.width??`…`,`px. Prototype actions and storage are disconnected.`]})]}),(0,D.jsxs)(`aside`,{className:`audit-sidebar`,"aria-label":`Color inspection tools`,children:[(0,D.jsxs)(`div`,{className:`audit-sidebar-tabs`,children:[(0,D.jsx)(`button`,{"aria-pressed":H===`element`,onClick:()=>U(`element`),children:`Element`}),(0,D.jsxs)(`button`,{"aria-pressed":H===`audit`,onClick:()=>U(`audit`),children:[`Color audit `,(0,D.jsx)(`span`,{children:$(`outside`)})]})]}),H===`element`?(0,D.jsxs)(`div`,{className:`audit-element-panel`,children:[(0,D.jsxs)(`div`,{className:`audit-panel-heading`,children:[(0,D.jsx)(`h2`,{children:v?`Pinned element`:`Under pointer`}),v&&(0,D.jsx)(`button`,{"aria-label":`Unpin element`,onClick:()=>{q.current=!1,y(!1)},children:(0,D.jsx)(s,{size:16})})]}),g?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`p`,{className:`audit-element-name`,children:g.label}),(0,D.jsx)(`code`,{className:`audit-selector`,children:g.selector}),(0,D.jsx)(`button`,{className:`audit-parent`,onClick:()=>{let e=K.current?.byId.get(g.id)?.parentElement;e?.closest(`#root`)&&Z.current(e,!0)},children:`Inspect parent element`}),g.asset&&(0,D.jsx)(`p`,{className:`audit-note`,children:`Image pixels are not CSS tokens. The image itself is excluded; its surrounding styles can still be inspected.`}),g.paints.length?g.paints.map((e,t)=>(0,D.jsx)(ee,{paint:e},e.property+e.color+t)):(0,D.jsx)(`p`,{className:`audit-note`,children:`No visible CSS paint on this element. Inspect its parent for the background, or hover the text or icon itself.`})]}):(0,D.jsxs)(`div`,{className:`audit-empty`,children:[(0,D.jsx)(u,{size:30}),(0,D.jsx)(`h3`,{children:`Point to any element`}),(0,D.jsx)(`p`,{children:`Hover the copied screen to see its colors. Click to pin the details, or select an occurrence from the color audit.`})]})]}):(0,D.jsxs)(`div`,{className:`audit-report-panel`,children:[(0,D.jsxs)(`div`,{className:`audit-counts`,children:[(0,D.jsxs)(`button`,{onClick:()=>C(`outside`),"aria-pressed":b===`outside`,children:[(0,D.jsx)(`strong`,{children:$(`outside`)}),(0,D.jsx)(`span`,{children:`Outside tokens`})]}),(0,D.jsxs)(`button`,{onClick:()=>C(`literal`),"aria-pressed":b===`literal`,children:[(0,D.jsx)(`strong`,{children:$(`literal`)}),(0,D.jsx)(`span`,{children:`Literal matches`})]}),(0,D.jsxs)(`button`,{onClick:()=>C(`token`),"aria-pressed":b===`token`,children:[(0,D.jsx)(`strong`,{children:$(`token`)}),(0,D.jsx)(`span`,{children:`Token references`})]})]}),(0,D.jsx)(`p`,{className:`audit-note`,children:`Counts are distinct color values per category. A literal can match the palette without using a token.`}),(0,D.jsxs)(`div`,{className:`audit-report-controls`,children:[(0,D.jsxs)(`select`,{"aria-label":`Audit category`,value:b,onChange:e=>C(e.target.value),children:[(0,D.jsx)(`option`,{value:`outside`,children:`Outside tokens`}),(0,D.jsx)(`option`,{value:`literal`,children:`Literals matching tokens`}),(0,D.jsx)(`option`,{value:`token`,children:`Token references`}),(0,D.jsx)(`option`,{value:`all`,children:`All colors and sources`})]}),(0,D.jsx)(`button`,{onClick:ne,"aria-label":`Rescan reference`,children:(0,D.jsx)(p,{size:15})})]}),(0,D.jsx)(`input`,{"aria-label":`Search audit`,placeholder:`Search color, element or token`,value:T,onChange:e=>j(e.target.value)}),(0,D.jsxs)(`label`,{className:`audit-highlight`,children:[(0,D.jsx)(`input`,{type:`checkbox`,checked:M,onChange:e=>N(e.target.checked)}),` `,`Outline matching elements`]}),(0,D.jsxs)(`div`,{className:`audit-color-list`,children:[[...Q.values()].map(({entry:e,occurrences:t})=>(0,D.jsxs)(`details`,{className:`audit-color-group`,children:[(0,D.jsxs)(`summary`,{children:[(0,D.jsx)(`span`,{className:`audit-swatch`,style:{background:e.color}}),(0,D.jsx)(`strong`,{children:e.color}),(0,D.jsx)(A,{matches:e.tokens.length>0,compact:!0}),(0,D.jsxs)(`span`,{children:[t.length,` uses`]})]}),(0,D.jsx)(`p`,{children:x[e.status]}),t.map((e,t)=>(0,D.jsxs)(`button`,{onClick:()=>re(e),children:[(0,D.jsx)(`span`,{children:e.label}),(0,D.jsx)(`small`,{children:e.property}),(0,D.jsx)(u,{size:13})]},t))]},e.status+e.color)),B&&!Q.size&&(0,D.jsx)(`p`,{className:`audit-note`,children:`No colors match this filter.`})]})]}),(0,D.jsxs)(`details`,{className:`audit-method`,children:[(0,D.jsx)(`summary`,{children:`What this tool checks`}),(0,D.jsx)(`p`,{children:`Text, surfaces, visible borders, outlines, SVG fills/strokes, CSS gradients, shadows, and generated before/after content. Transparent paint is skipped. Alpha colors are compared as RGBA values, before compositing.`}),(0,D.jsx)(`p`,{children:`The reference contains captured DOM and styles. Matching tokens come from the current brand sandbox. CSS source is traced using the browser’s cascade, including layers and inheritance; unresolved cases are labeled. This is a color audit, not an accessibility certification.`}),(0,D.jsx)(`p`,{children:`Image pixels, native form-control internals, animations, inaccessible stylesheets, and states not present in this capture are outside the audit. No clinical actions execute in the copy.`})]})]})]})]})}export{j as SpecialistColorInspector};