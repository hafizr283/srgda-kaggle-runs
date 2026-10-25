# Two-T4 category comparison — verified completion

Updated: 2026-10-25 19:43:14 Asia/Dhaka.

[MEASURED] Kernel `hafizr283/srgda-category-comparison-two-t4-20261025`, version 1, session **362112157**. Launched 2026-10-25 17:23:43 Dhaka. Kaggle successful runtime **666.4 seconds**; controller **660.195 seconds**. Two T4s concurrently, one process per device; 45-minute hard budget; no extension. Both child exits 0 and all 200 requested iterations completed.

## Identity and method

Frozen source: project `runs/2026-10-25_conditional_compare/source_manifest.json` (30 files), exact source hashes checked by local audit. Bootstrap SHA256 `9da65879284c530be9f0ec58c9416e7106d71c1710c21f7c4b2ecd3663f8f972`. Preregistration and actual runners are preserved beside it.

Inputs: benchmark v1 pinned inputs, recovery v3 evaluator, conditional teacher eval-teacher v4. Teacher SHA256 `b27385e4f2f8d4d1e2e2c03864c5a9574a0c58ba81eb11625ae6d15c401f4796`; independent D_train-only ResNet18 SHA256 `cc0f083b56562ebd8d2ea1e0fe7d39de8c63524425d017e0372b6c599ef5eaec` (D_val 95.18%). Exact mounted input identities are in original `downloads/comparison_inputs.json`.

GPU0: conditional EDM→VP teacher plus conditional fake DMD. GPU1: direct MSE regression on 1,000 balanced conditional-teacher endpoints (18-step Heun, 35 NFE). Both students start from unconditional DDPM weights with zero new class embeddings. Seed20261025, batch32, backbone lr5e-6, class multiplier200, fixed5000-step cosine horizon, raw-final weights. Probes: seed20261024, 50 shared latents ×10 labels. Pair targets seed2026102502; fresh quality seed2026102503.

## Results [MEASURED]

| Arm | G updates | Independent accuracy | FID | KID (subset std) | P / R | Image std | Label/latent RMS |
|---|---:|---:|---:|---|---|---:|---:|
| Conditional DMD | 191 | 49/500 =9.8% | 227.4160 | .230434 (.003395) | .644 / .0038 | .466038 | .011719 |
| Teacher pairs | 200 | 59/500 =11.8% | 177.4456 | .159136 (.002638) | .822 / .0046 | .345863 | .029393 |

DMD: 1,000 fake updates, 9 early AMP generator skips. All losses/samples finite; pinned GPU checker reports finite complete states for both arms. Teacher preflight **485/500=97%**, std .469502, passes80% gate. DMD predicts frogs for373/500 images. Student grids visually show near-invariant requested-class rows; pair outputs lower contrast/blurrier. Teacher training-target grid shows recognizable class rows.

Quality: torchvision Inception-v3 pool3 2048d, FP32 preprocessing; **2,000 fresh fake / all5,000 D_val**, split seed12345, indices SHA256 `db86a8ea5119e6e0701e6e45062579cb90dd1d0fab14a8ee6ba0a401f19c7925`. Separate disjoint2500/2500 real-real FID20.0782 is a diagnostic, not a floor. KID100 subsets1000, std descriptive not confidence interval. No D_test/C_risk access. Public teacher may have seen D_val. Historical8k/4k FID is not directly comparable.

## Decision and next change

Neither passes the frozen joint gates: both accuracy<15%; DMD also fails two classes≥20% and RMS≥.02; pairs fails std .45–.55. **No usable winner, no extension.** Teacher pairs is descriptively better by49.97FID and2 percentage points accuracy; one seed/shared probes do not establish statistical superiority or long-run failure.

[HYPOTHESIS] Investigate compatible initialization that preserves a pretrained model's learned class conditioning; do not load incompatible EDM weights into Diffusers. Current zero class embeddings are a candidate bottleneck, not proven root cause. Pair MSE reduction with low contrast motivates a distribution/perceptual objective only after initialization is controlled. Do not simply increase classifier guidance.

## Artifact verification

Local base: `SRGDA_V8_1_PC_THESIS_FINAL_VERIFIED2/runs/2026-10-25_conditional_compare/`. Original JSON, traces, identity, probes, quality samples, training pairs and class grids are under `downloads/`; `verify_outputs.py`, `verification_console.json`, `downloads/validation.json`, and `downloads/artifact_manifest.json` retain checks and hashes. Requested counts, seeds, labels, confusion counts, swap statistics, source identities, exits and completed steps checked. Derived teacher-target grid is a rendering of training targets, not the preflight probe.

Full checkpoints remain remote; finiteness and digests are GPU-runner evidence, not local checkpoint reloads. DMD SHA256 `dbc7a0d4f058e7ae267bd18b6150eacc0f59bc012effbe710c2f8258c990db5b`; pair `f64400660df4cdbd7ef26690769b62334ec52e9d97705f74eb30215c5c53d9ab`. Browser saved raw PyTorch bytes under .zip names; copied without extracting. Probe mapping checked against exact reported std/swaps; quality mapping uses logged download order plus seed/count/labels checks. A remote browser asset retrieval stalled after GPU completion; no additional GPU training occurred.

Final CPU regression **76 passed in42.21s**, `local_regression_checks.txt`. Website updated with separate category table and grids, historical results preserved. CLI2.2.5 installed in isolated drive-local venv; user deferred API authentication. No owned GPU job remains.
