# SR-GDA experiment archive

[Main dashboard](https://hafizr283.github.io/srgda-kaggle-runs/) · [HTML mirror](https://hafizr283.github.io/srgda-kaggle-runs/kaggle_runs.html) · [Kaggle notebooks](https://www.kaggle.com/hafizr283/code)

Updated 26 October 2026, Asia/Dhaka. The site preserves notebook versions, quality metrics, independent conditioning checks, class grids and experiment evidence. It is a saved snapshot; execution status and scientific verification are separate.

## Current experiments

Trial 1 is artifact-verified: native pretrained conditioning versus reset class mapping, with 200 successful generator updates and 1,000 fake updates per arm. Fresh independent class accuracy is 17.6% versus 9.55%; FID is 282.21 versus 319.83. The copied multistep teacher is exact and 39/40 = 97.5% accurate in the migration check. Both one-step arms remain poor, with recall 0; retained conditioning misses the 30% early-progress gate. No one-step model or extension was accepted. [Evidence](instructions/runs/2026-10-26_plan1_native_v1_362163931.md).

Trials 2 and 3 share a running two-T4 job. GPU 0 tests progressive 16 → 8 → 4 → 2 → 1 step reduction with stage gates. GPU 1 builds a conditional teacher pool and compares real-only, uniform augmentation and SR-GDA across requested/pseudo labels and three classifier seeds. Outputs await verification; no results are reported for these trials. [Run](https://www.kaggle.com/code/hafizr283/srgda-trials23-progressive-teacher-20261026/versions/1) · [Preregistration](runs/2026-10-26_trials23/preregistration.md).

## Verified historical quality

These results use torchvision Inception-v3 pool3, with 8,000 fake / 4,000 real images. The historical reference includes D_val + D_test. Disjoint real-real FID is approximately 12.74 for students and 12.80 for the conditional teacher; this is a diagnostic, not a FID floor. New screens use 2,000 fake / 5,000 D_val and are shown separately.

| Model / exported state | FID | KID | Precision | Recall |
|---|---:|---:|---:|---:|
| cap30, 5k | 42.31 | 0.02669 | 0.6462 | 0.4195 |
| tgf40, 5k | 48.64 | 0.03309 | 0.6190 | 0.3963 |
| Exact DMD coefficient, 5k | 47.17 | 0.03171 | 0.6112 | 0.4048 |
| Old DMD coefficient, 5k | 160.35 | 0.16226 | 0.4822 | 0.1238 |
| cap30, 18k run / selected EMA at logged 10k | 42.55 | 0.02648 | 0.6156 | 0.4245 |
| Amplified nudge, raw 18k | 104.25 | 0.08188 | 0.5014 | 0.1480 |
| Original student, 20k | 88.88 | 0.07895 | 0.5482 | 0.2268 |
| Repaired conditional EDM teacher | 10.36 | 0.000496 | 0.7170 | 0.6240 |

The 5k cap30 remains the best saved historical student point. Nudge's 70.70% guidance-classifier agreement is not independent conditioning evidence; its quality/recall and original joint gates fail. Teacher v3's black pool is invalid. [Historical evidence](instructions/runs/2026-10-23_initial_handoff.md) · [18k evidence](instructions/runs/2026-10-23_twogpu_v2_361340540.md).

## Hosted files

`index.html` and `kaggle_runs.html` are identical, self-contained pages with embedded grids. `kaggle_runs_inventory.json` preserves the notebook snapshot. `category_experiments.json` separates independent conditioning screens from historical quality. `downloads/` contains metric JSONs and grids; `instructions/runs/` contains curated evidence. Full training checkpoints stay on Kaggle.

Search and filter the notebook library, expand version histories, or open sample grids in the keyboard-accessible viewer. Static hosting needs no build step or third-party runtime dependency. Internal artifact links resolve within this repository.

Verify source/asset identity, exits, achieved updates, requested arms, finite metrics, reference counts and grids before adding a verified result. Reserve C_risk for the frozen certificate and D_test for final reporting; public teacher exposure to D_val remains a limitation.
