# Astra's plan mechanism probe: verified completion, scientific stop

Updated: 2026-10-26 20:29:37 Asia/Dhaka. Decision: **STOP this two-control version; no adaptive-controller screen or5k promotion**.

## Exact execution lineage

1. [Initial probe140994825/v1](https://www.kaggle.com/code/hafizr283/srgda-astra-mechanism-20261026): overallERROR. Worker0's240updates/12groups/48branches independently verified and preserved. Worker1 stopped before training on the FP32 gradient-equivalence assertion.313.612125091s, cap600s.
2. [Isolation diagnostic140997033/v1](https://www.kaggle.com/code/hafizr283/srgda-astra-isolation-diagnostic-20261026): COMPLETE,0optimizerupdates. All3 FP64 derivative comparisons agree about1e-15; original firstseedFP32relative gradienterror .00016285 exceeds .0001 while logits differ3.34e-6. Original failure retained.77.052816381s, cap180s. See actual audit for exact time; this lineage is a precision proof, not accuracy evidence.
3. [Recovery140998054/v1](https://www.kaggle.com/code/hafizr283/srgda-astra-mechanism-recovery-20261026): COMPLETE, only missing240updates computed,240verifiedupdates reused byte-for-byte through private recovery data. New worker/controller/bootstrap exit0.305.212398588s, cap600s. Scientific registration unchanged; explicit operational addendum retains FP32failure and requires its exact replay plus independently verified FP64 proof.

All full-state source/parent hashes, successful counts, optimizer horizon/learning-rate steps, streams/indices/anchor exclusions, finite outputs and saved probabilities/losses/labels are checked.96branches x5updates =480,24matchedgroups across seeds2026102901/902/903. Zero AMPskips. Parents are exact step200 states from sanity/fit v1, original1000-step horizon; each explicit fork runs steps200..204, not a silent new training resume.

## Registered scientific results

| Gate | Measured | Decision |
|---|---|---|
| Pooled held-anchor prediction | Two-channel MSE 0.000668521944219, best rival/zero 0.000176920479732; ratio 3.778658, required<=.9 | FAIL |
| Each-seed improvement vs best rival | No seed improves | FAIL |
| Stable opposing loss/normalization effects |2/8,1/8,1/8groups; required>=2/8 EACHseed, stable signsA/B and magnitudes>.001NLL | FAIL |

Other pooled MSEs: tied .000571935061; loss-only .000324481119; normalization-only .000601510508; LOO-global-two-channel .000264884944. The zero-effect baseline is best. All numbers/branches remain in the saved analysis; no cherry-picked success or winner.

[MEASURED/DERIVED] Mixed BN can change real logits/gradients with zero synthetic loss, but these short utility contrasts do not transfer reliably between disjoint TRAIN-anchor batches. That known graph mechanism does not establish a useful adaptive controller. These are trained-on D_train anchors, not held-out generalization; no V_select/V_report result is produced by this probe. Failed practical gates do not prove all future normalization or weighting methods useless.

## Cost, assets and limitations

- Cumulative script/bootstrap wall 695.877340060s (11.60min), within1800s discovery ceiling. Platform provisioning, API retrieval and inactive-chat time are separate/unknown; script wall is not complete end-to-end or billed GPUhours. Latest quota observed27.28h remaining; cannot attribute all quota changes exclusively to this job.
- CIFAR-stem ResNet18, pinned5kreal/5ksynthetic pool, real/synth128/128, loss coefficient0/.2, moment mass0/.5, matched crop/flip, original SGD/momentum/scaler. Source/protocol pins in each kernelbuild. Protocol digest `30f98487f9253f614c3906a74929cd66e1b7c33c287c7553b8084bcb2e925cf0`.
- Primary comparison after identical full5000-real BN recalibration; native buffers secondary. Recalibration changes only BNbuffers. Both200-example anchors excluded from update minibatches but included as unlabeled images in fullTRAINcalibration; not independent untouched data.
- No D_val tensors constructed, D_test/C_risk closed. No new generation/FID/real-real/KID/P/R/sample-grid measurement applies to the unchanged teacher pool. GPUdevicehours unknown. No publication/novelty or classifieraccuracy improvement established.
- Full parent/restored/fork contents, parameter immutability and full gradients remain GPU-runner evidence. Independent local audit checks pinned byte inventories, officialTRAINtruth, all saved per-example arrays, exact workload/trace and separate mathematical recomputation. No local real-model inference.

## Durable evidence and implementation

All paths below under `SRGDA_V8_1_PC_THESIS_FINAL_VERIFIED2/experiments/astras_plan/`:

- `PLAN_ASTRA_ORIGINAL.md`, `protocol.json`: preserved research and frozen mechanism registration.
- `normalization.py`, `runner.py`, `data.py`, `analysis.py`: initial implementation; original helper source tree remains unchanged.
- `evidence/partial_verified.json`, `evidence/retrieval_v1_140994825/`: independently verified partial attempt and its failure.
- `diagnostic_isolation_v1/evidence/verified.json`: independently verified zero-update FP32/FP64 diagnostic; no retroactive repair claim.
- `recovery_v1/recovery_rules.json`: explicit operational-only addendum, original scientific protocol/dataset/source provenance.
- `recovery_v1/evidence/verified.json`: final independent combined audit;443compactfiles/4,464,049bytes; exact before/after version/source and filehashes checked. ManifestSHA256 `bce72cb25d1f4de675e40737e90fe7cd884cfd8bb7de626ec23eac382f9eb5c7`.
- `recovery_v1/evidence/retrieval_v1_140998054/astra/analysis.json`: all registered metrics/effects.
- `verify.py`: separate saved-array/gate verifier. Original10CPUtests pass; recovery copy10tests pass; two separate verifier checks agree on constructed pass/fail cases. Counts overlap; not22distincttests.

Decision: requested folder/implementation/bounded execution are complete through the plan's first scientific gate. Because that gate fails, remaining adaptive-controller/strong-baseline/5k stages are stopped, not queued. Overall higher-accuracy goal remains unmet; future work needs a different frozen hypothesis. Preserve simple baseline and previous completed experiments. No task-owned cron/automation or activeGPUjob remains from this task.
