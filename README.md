# SR-GDA · Kaggle Runs Archive & Experiment Dashboard

> Interactive experiment archive, exact notebook versions, CIFAR-10 quality metrics (FID, KID, precision, recall), and generated sample grids for SR-GDA (Self-Regulated Generative Distillation Adaptation) research.

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-brightgreen)](https://hafizr283.github.io/srgda-kaggle-runs/)
[![Notebooks](https://img.shields.io/badge/Notebooks%20Section-View%20Here-blue)](https://hafizr283.github.io/srgda-kaggle-runs/#notebooks)
[![Kaggle](https://img.shields.io/badge/Kaggle-hafizr283-20BEFF?logo=kaggle)](https://www.kaggle.com/hafizr283/code)

---

## 🌐 Live Website

- **Main Dashboard**: [https://hafizr283.github.io/srgda-kaggle-runs/](https://hafizr283.github.io/srgda-kaggle-runs/)
- **Notebooks Section**: [https://hafizr283.github.io/srgda-kaggle-runs/#notebooks](https://hafizr283.github.io/srgda-kaggle-runs/#notebooks)
- **Direct HTML Mirror**: [https://hafizr283.github.io/srgda-kaggle-runs/kaggle_runs.html#notebooks](https://hafizr283.github.io/srgda-kaggle-runs/kaggle_runs.html#notebooks)

---

## 🔬 Overview

This repository hosts the static, offline-capable research dashboard for all Kaggle training runs, evaluations, and diagnostics conducted for the thesis.

### Key Sections:
1. **Overview**: Executive summary, run status counters, date of snapshot.
2. **Quality Comparison Table**: Standardized evaluation protocol on CIFAR-10 (FID, KID, precision, recall, label agreement, real-vs-real reference FID ~1.28).
3. **Sample Grid Viewer**: Interactive modal lightbox displaying 8x8 synthesized image pools with full zoom, navigation, and direct metric JSON links.
4. **Notebook Inventory & Versions ([#notebooks](https://hafizr283.github.io/srgda-kaggle-runs/#notebooks))**: Complete ledger of private and public Kaggle notebooks, version numbers, execution statuses, runtime, GPU hardware, logs, and outputs.
5. **Research Notes**: Technical findings, ablation outcomes, and evidence trails.

---

## 📁 Repository Structure

```text
.
├── index.html                           # Main hosted website
├── kaggle_runs.html                     # Exact HTML mirror
├── kaggle_runs_inventory.json           # Raw notebook inventory data
├── .nojekyll                            # Bypass Jekyll processing for static files
├── _agent/
│   └── downloads/                       # Downloaded metric JSONs & sample grids
│       ├── twogpu1/                     # Two GPU arms (5,000 steps)
│       ├── twogpu2_v2_361340540_20261023/ # Two GPU arms (18,000 steps)
│       ├── ab5k/                        # Exact vs Old DMD ablation
│       ├── eval20k/                     # 20k-step distilled student
│       ├── swap2/                       # Label-swap diagnostic
│       ├── teacher3/                    # Black sample pool check
│       └── teacher4/                    # Conditional EDM teacher reference
├── downloads/                           # Mirror without underscore
├── instructions/
│   └── runs/                            # Formal run evidence records
│       ├── 2026-10-23_initial_handoff.md
│       └── 2026-10-23_twogpu_v2_361340540.md
├── runs/                                # Mirror without prefix
└── kaggle_archive_assets/               # Layout, scripts, and CSS source
    ├── layout.html
    ├── script.js
    └── styles.css
```

---

## 📊 Summary of Evaluated Arms

| Model / Arm | Steps / State | FID ↓ | KID ↓ | Precision ↑ | Recall ↑ |
|---|---|---|---|---|---|
| **cap30 (18k)** | 18,000 steps (EMA logged step 10k) | **42.55** | 0.03816 | 0.707 | 0.407 |
| **Amplified nudge (18k)** | 18,000 steps (raw final) | 104.25 | 0.10332 | 0.718 | 0.143 |
| **Original student (20k)** | 20,000 steps | **42.45** | 0.03901 | 0.697 | 0.432 |
| **cap30 (5k)** | 5,000 steps | 49.33 | 0.04561 | 0.706 | 0.354 |
| **tgf40 (5k)** | 5,000 steps | 50.19 | 0.04680 | 0.708 | 0.345 |
| **Exact DMD coef (5k)** | 5,000 steps | 55.43 | 0.05244 | 0.705 | 0.301 |
| **Old DMD coef (5k)** | 5,000 steps | 55.77 | 0.05268 | 0.699 | 0.305 |
| **Conditional EDM Teacher** | Reference | **2.00** | 0.00067 | 0.811 | 0.771 |

---

## 🚀 Interactive Features

- **Instant search & filtering** across notebook titles, slugs, visibility (public/private), category (training/evaluation/diagnostic), and execution status.
- **Keyboard navigation**:
  - `/` opens the search box and scrolls directly to `#notebooks`.
  - `Left` / `Right` arrows navigate sample grids in the modal viewer.
  - `Escape` closes the lightbox.
- **Zero third-party CDN runtime dependencies**: Entire UI works 100% offline and in static environments.
