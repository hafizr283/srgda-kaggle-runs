# SR-GDA experiment archive

[Main dashboard](https://hafizr283.github.io/srgda-kaggle-runs/) · [HTML mirror](https://hafizr283.github.io/srgda-kaggle-runs/kaggle_runs.html) · [Kaggle notebooks](https://www.kaggle.com/hafizr283/code)

Updated 26 October 2026, Asia/Dhaka. The site preserves notebook versions, quality metrics, independent conditioning checks, class grids and experiment evidence. It is a saved snapshot; execution status and scientific verification are separate.

## Best results and latest verification

Reviewed 2026-10-26 20:44:51 Asia/Dhaka. **Best completed matched downstream baseline: Trial 3 requested uniform, 62.93% mean D_val accuracy across three seeds**, versus 55.99% real-only. No learned scale-pricing gain established.

**Strongest exploratory vNext candidate: fit4_plus, 64.98% versus 62.38% matched uniform on V_price only** (+2.60 pp). This was found after examining 13 policies and is not a promoted method or a full-D_val/held-out result. Highest single V_price observation is 67.30% for fit1_minus; a best seed is not a reliable method ranking.

**Best accepted compact-generator screen: Trial 2 eight-step student**, 93.45% independent class obedience / FID 28.53 at 2k fake / 5k real. **Best historical student FID: cap30 at 5k, 42.31**, under 8k/4k; these FIDs cannot be directly compared. Teacher and 45k-real evaluator references are separate.

Latest: pricing fit 39/39 classifiers complete but 3 of 4 gates fail; inference changes yield no qualifying winner and V_report stays closed; Astra 480 updates / 96 branches verified but all scientific gates fail, so no adaptive-controller / 5k promotion. Original failures and zero-update diagnostic remain linked.

[Best-results data and source hashes](best_run_review.json) · [Pricing audit](runs/2026-10-26_website_best_review/public/fit_audit.json) · [Astra audit](runs/2026-10-26_website_best_review/public/astra_audit.json).

## Current experiments

Trial 1 is artifact-verified: native pretrained conditioning versus reset class mapping, with 200 successful generator updates and 1,000 fake updates per arm. Fresh independent class accuracy is 17.6% versus 9.55%; FID is 282.21 versus 319.83. The copied multistep teacher is exact and 39/40 = 97.5% accurate in the migration check. Both one-step arms remain poor, with recall 0; retained conditioning misses the 30% early-progress gate. No one-step model or extension was accepted. [Evidence](instructions/runs/2026-10-26_plan1_native_v1_362163931.md).

Trial 2 is verified complete: the eight-step student passed its gates at 1,000 updates, with 93.45% independent class accuracy, 85% worst-class accuracy and FID 28.53. Generation took 106.64 seconds for 2,000 images versus 211.91 seconds for the 16-step teacher. The four-step stage failed at 500 updates (FID 40.15), so compression stopped. This is a single training-seed screen. [Evidence](instructions/runs/2026-10-26_trials23_v1_failure_and_trial2.md).

Trial 3 is verified complete: all five classifier arms and three matched seeds reached 1,000 successful updates. Requested SR-GDA minus uniform: -0.92 pp; pseudo: +2.17 pp. Two interrupted classifiers resumed from their saved 100-update states; all fitted teacher-pool artifacts were reused.

| Classifier | Mean accuracy | Seed std (pp) | Mean NLL |
|---|---:|---:|---:|
| Real-only | 55.99% | 3.70 | 1.2262 |
| Requested uniform | 62.93% | 3.35 | 1.0311 |
| Requested SR-GDA | 62.01% | 2.10 | 1.0556 |
| Pseudo uniform | 59.79% | 3.61 | 1.1159 |
| Pseudo SR-GDA | 61.96% | 2.77 | 1.0619 |

D_val was used for both price learning and reporting, and the public teacher may have seen it. Requested weights achieve ESS 0.8001. All pseudo-label prices clip to zero, so those weights only correct class priors; their comparison does not isolate scale pricing. These are descriptive screens, with no C_risk, D_test or certificate claim. [Verified evidence](instructions/runs/2026-10-26_trial3_classifiers_v1_140878808.md) · [Full metrics](runs/2026-10-26_trial3_classifiers/verified_artifacts/trial3/RESULT.json) · [Preserved recovery failure](instructions/runs/2026-10-26_trial3_recovery_v1_fit_verified_failure.md).

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
