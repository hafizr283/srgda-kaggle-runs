# Full CIFAR-10 training run — verified completion

Notebook 141124122, version 1. All six eligible classifiers completed 26,400 successful optimizer updates. Both T4 workers exited successfully, and all six final full-state checkpoints were independently validated.

| Frozen three-seed ensemble | V_report accuracy | NLL |
|---|---:|---:|
| Real-only | 96.20% | 0.1316 |
| Uniform synthetic augmentation | 96.73% | 0.1130 |

The reporting split contains 1,500 images. The observed accuracy gain is 0.53 percentage points (19 newly correct predictions and 11 newly incorrect). An exploratory exact paired check gives p=0.20049. This small difference does not establish a reliable general improvement. These ensemble results are distinct from individual-model V_select metrics.

## Scope and verification

The matched policies use 45,000 real training images, a frozen 25,000-image native eight-step synthetic pool, ResNet18, three seeds (2026102701, 2026102702, 2026102703), and the same 26,400-update schedule. First-seed checkpoints resume from 5,000 committed updates; other seeds start fresh. No final-test or certificate data was opened.

The AMP repair passed forced-overflow parity and both actual GPU checkpoint-restore checks before full training. Seventeen overflows were safely rolled back and retried at reduced scale. All final BatchNorm counters equal 26,400. Saved model/optimizer/RNG state is finite, and byte hashes and full-state digests match the reporting checkpoint registration.

The audit checked 187 compact artifacts and six final checkpoint tensors. Saved probabilities, labels, accuracy, NLL, confusion matrices and per-class metrics were independently recomputed and checked against pinned official TRAIN labels. There was no independent GPU model-forward replay; the verification boundary is documented in the audit.

## Scientific decision

Predictive, stability and signal price gates failed. All learned weighted policies were skipped, so this result is about uniform synthetic augmentation rather than learned scale weighting. D_val has historical and teacher exposure. D_test and C_risk remain closed. The earlier 5,000-step study has a different budget, split and estimator and is not directly comparable.

The final recovery script took 97 minutes. Cumulative script wall time across the original run and recoveries was 4.66 hours, within the original 10.5-hour cap.

[Audit](audit_verified.json) · [Full metrics](metrics.json) · [Frozen reporting registration](preregistration.json) · [Evidence hashes](evidence_manifest.json) · [Recovery history](recovery_history.md) · [Exact Kaggle version](https://www.kaggle.com/code/hafizr283/srgda-integrated-submit-amp-recovery-20261027/versions/1) (private; owner access required).
