var e=`/* Official brand colors and shared UI/clinical roles. */
:root {
  /* Canonical corporate color names, shared by screens and the catalog. */
  --oxford-blue: #021c3d;
  --polynesian-blue: #155094;
  --signal-teal: #45cfcd;
  --mist: #e7eced;
  --cloud: #f4f5f5;
  --white: #ffffff;
  /* Derived tints: sRGB base color percentage mixed with opaque white. */
  --signal-teal-5: #f6fdfd;
  --signal-teal-10: #ecfafa;
  --signal-teal-20: #daf5f5;
  --signal-teal-40: #b5eceb;
  --signal-teal-60: #8fe2e1;
  --signal-teal-80: #6ad9d7;
  --oxford-blue-5: #f2f4f5;
  --oxford-blue-10: #e6e8ec;
  --oxford-blue-20: #ccd2d8;
  --oxford-blue-40: #9aa4b1;
  --oxford-blue-60: #67778b;
  --oxford-blue-80: #354964;
  --polynesian-blue-5: #f3f6fa;
  --polynesian-blue-10: #e8eef4;
  --polynesian-blue-20: #d0dcea;
  --polynesian-blue-40: #a1b9d4;
  --polynesian-blue-60: #7396bf;
  --polynesian-blue-80: #4473a9;
  /* Text on light surfaces uses Oxford and its readable 80% tint. */
  --text-primary: var(--oxford-blue);
  --text-secondary: var(--oxford-blue-80);
  --text-inverse: var(--white);
  /* Functional extensions, not additional corporate palette swatches. */
  --interface-secondary-text: var(--text-secondary);
  --interface-control-border: #7d8995;
  --interface-selection: #edf3f8;
  --button-primary-background: var(--oxford-blue);
  --button-primary-foreground: var(--white);
  --primary-hover: var(--polynesian-blue);
  --signal-background: var(--signal-teal);
  --signal-foreground: var(--oxford-blue);
  --signal-on-dark: var(--signal-teal);
  --metric-emphasis-background: var(--oxford-blue);
  --metric-emphasis-foreground: var(--white);
  --metric-card-background: var(--white);
  --metric-card-foreground: var(--oxford-blue);
  --metric-card-supporting: var(--text-primary);
  --metric-card-border: var(--mist);
  --metric-card-hover: var(--white);
  --metric-card-selected: var(--oxford-blue);
  --metric-card-selected-foreground: var(--white);
  --metric-card-selected-supporting: var(--oxford-blue-10);
  --metric-card-indicator: var(--polynesian-blue);
  /* Shared application chrome and table geometry. */
  --shell-header-foreground: var(--text-inverse);
  --shell-navigation-foreground: var(--oxford-blue-10);
  --shell-navigation-active: var(--signal-teal);
  --shell-site-foreground: var(--oxford-blue-10);
  --shell-workspace-max-width: none;
  --shell-workspace-padding: 28px 35px 0;
  --table-header-background: var(--white);
  --table-header-foreground: var(--oxford-blue);
  --table-rule: var(--mist);
  --table-row-hover: var(--signal-teal-5);
  --table-row-selected: var(--signal-teal-20);
  --table-selection-indicator: var(--signal-teal);
  --table-cell-padding: 12px;
  --table-radius: 10px;
  --metric-gap: 16px;

  --palette-amber-50: #fffcf6;
  --palette-amber-100: #f4eedf;
  --palette-amber-200: #e9e0cf;
  --palette-amber-500: #a77729;
  --palette-amber-700: #8b601b;
  --palette-green-50: #f3f8f5;
  --palette-green-100: #edf5f0;
  --palette-green-200: #d5e5dc;
  --palette-green-500: #618a72;
  --palette-green-700: #436a54;
  --palette-blue-50: #f5f9fc;
  --palette-blue-100: #dfedf9;
  --palette-blue-200: #dce8f1;
  --palette-blue-500: #3c7dad;
  --palette-blue-700: #28658f;
  --palette-slate-50: #f6f8fa;
  --palette-slate-100: #edf2f6;
  --palette-slate-200: #d7e2ec;
  --palette-slate-500: #788c9c;
  --palette-slate-700: #596e7f;
  --palette-red-700: #9b4933;

  /* Clinical result semantics. Editable results use 5% background and 20% border tints mixed with white. */
  --result-suggestive-foreground: #7e1a5a;
  --result-suggestive-background: #f9f4f7;
  --result-suggestive-border: #e5d1de;
  --result-suggestive-indicator: var(--result-suggestive-foreground);
  --result-not-suggestive-foreground: #007b6f;
  --result-not-suggestive-background: #f2f8f8;
  --result-not-suggestive-border: #cce5e2;
  --result-not-suggestive-indicator: var(--result-not-suggestive-foreground);
  --result-processing-foreground: var(--palette-blue-700);
  --result-processing-background: var(--palette-blue-50);
  --result-processing-border: var(--palette-blue-200);
  --result-processing-indicator: var(--palette-blue-500);
  --result-unavailable-foreground: var(--palette-slate-700);
  --result-unavailable-background: var(--palette-slate-50);
  --result-unavailable-border: var(--palette-slate-200);
  --result-unavailable-indicator: var(--palette-slate-500);

  /* Workflow states stay separate from clinical findings, even when hues match. */
  --review-new-foreground: var(--oxford-blue);
  --review-new-background: var(--polynesian-blue-10);
  --review-new-indicator: var(--palette-blue-500);
  --review-reviewed-foreground: var(--text-primary);
  --review-reviewed-background: var(--palette-green-100);
  --review-not-ready-foreground: var(--text-secondary);
  --review-not-ready-background: var(--palette-slate-100);
  --action-success-foreground: var(--text-primary);
  --action-pending-foreground: var(--text-primary);
  --action-failed-foreground: var(--text-primary);
  /* Referral intent and EHR acknowledgements are independent workflow events. */
  --referral-suggested-foreground: var(--text-primary);
  --referral-suggested-background: var(--palette-slate-100);
  --referral-suggested-border: var(--palette-slate-200);
  --referral-created-foreground: var(--text-primary);
  --referral-created-background: var(--palette-blue-50);
  --referral-created-border: var(--palette-blue-200);
  --referral-scheduled-foreground: var(--text-primary);
  --referral-scheduled-background: var(--palette-green-50);
  --referral-scheduled-border: var(--palette-green-200);
  /* Independent clinical provenance; never mapped to personal review or AI result. */
  --finding-preliminary-foreground: var(--oxford-blue);
  --finding-preliminary-background: transparent;
  --finding-preliminary-border: var(--polynesian-blue-10);
  --diagnosis-confirmed-foreground: var(--text-primary);
  --diagnosis-confirmed-background: var(--palette-blue-50);
  --diagnosis-confirmed-border: var(--palette-blue-200);
  /* Cohort context is descriptive, independent of clinical result semantics. */
  --context-attention: var(--text-primary);
  --cohort-patient: var(--palette-blue-700);
  --cohort-band: var(--palette-blue-200);
  --cohort-median: var(--palette-slate-700);
  --cohort-grid: var(--palette-slate-200);
  --cohort-surface: var(--palette-slate-50);
  --cohort-muted: var(--text-secondary);
  --cohort-label: var(--text-secondary);
  --cohort-selected: var(--palette-blue-100);
  --history-heart-failure: var(--palette-blue-700);
  --history-amyloidosis: var(--palette-slate-700);
}

/* shadcn/Tailwind bridge for new screens using utility classes. */
@theme inline {
  --color-result-suggestive-foreground: var(--result-suggestive-foreground);
  --color-result-suggestive-background: var(--result-suggestive-background);
  --color-result-suggestive-border: var(--result-suggestive-border);
  --color-result-suggestive-indicator: var(--result-suggestive-indicator);
  --color-result-not-suggestive-foreground: var(
    --result-not-suggestive-foreground
  );
  --color-result-not-suggestive-background: var(
    --result-not-suggestive-background
  );
  --color-result-not-suggestive-border: var(--result-not-suggestive-border);
  --color-result-not-suggestive-indicator: var(
    --result-not-suggestive-indicator
  );
  --color-result-processing-foreground: var(--result-processing-foreground);
  --color-result-processing-background: var(--result-processing-background);
  --color-result-processing-border: var(--result-processing-border);
  --color-result-processing-indicator: var(--result-processing-indicator);
  --color-result-unavailable-foreground: var(--result-unavailable-foreground);
  --color-result-unavailable-background: var(--result-unavailable-background);
  --color-result-unavailable-border: var(--result-unavailable-border);
  --color-result-unavailable-indicator: var(--result-unavailable-indicator);
}

/* Shared state adapter: components consume --result-* without duplicating maps. */
:where([data-result='suggestive']) {
  --result-foreground: var(--result-suggestive-foreground);
  --result-background: var(--result-suggestive-background);
  --result-border: var(--result-suggestive-border);
  --result-indicator: var(--result-suggestive-indicator);
}
:where([data-result='not-suggestive']) {
  --result-foreground: var(--result-not-suggestive-foreground);
  --result-background: var(--result-not-suggestive-background);
  --result-border: var(--result-not-suggestive-border);
  --result-indicator: var(--result-not-suggestive-indicator);
}
:where([data-result='processing']) {
  --result-foreground: var(--result-processing-foreground);
  --result-background: var(--result-processing-background);
  --result-border: var(--result-processing-border);
  --result-indicator: var(--result-processing-indicator);
}
:where([data-result='unavailable']) {
  --result-foreground: var(--result-unavailable-foreground);
  --result-background: var(--result-unavailable-background);
  --result-border: var(--result-unavailable-border);
  --result-indicator: var(--result-unavailable-indicator);
}

:where([data-referral='suggested']) {
  --referral-foreground: var(--referral-suggested-foreground);
  --referral-background: var(--referral-suggested-background);
  --referral-border: var(--referral-suggested-border);
}
:where([data-referral='created']) {
  --referral-foreground: var(--referral-created-foreground);
  --referral-background: var(--referral-created-background);
  --referral-border: var(--referral-created-border);
}
:where([data-referral='scheduled']) {
  --referral-foreground: var(--referral-scheduled-foreground);
  --referral-background: var(--referral-scheduled-background);
  --referral-border: var(--referral-scheduled-border);
}

/* Hospital workflow states are independent of clinical finding states. */
[data-workflow='completed'],
[data-workflow='complete'] {
  --workflow-foreground: var(--text-primary);
  --workflow-background: var(--palette-green-50);
  --workflow-border: var(--palette-green-200);
}
[data-workflow='outstanding'],
[data-workflow='missing'] {
  --workflow-foreground: var(--text-primary);
  --workflow-background: var(--palette-amber-50);
  --workflow-border: var(--palette-amber-200);
}
[data-workflow='pending'] {
  --workflow-foreground: var(--text-primary);
  --workflow-background: var(--palette-blue-50);
  --workflow-border: var(--palette-blue-200);
}
`;export{e as t};