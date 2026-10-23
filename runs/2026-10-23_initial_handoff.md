# Initial handoff / evidence snapshot

Recorded: 2026-10-23 15:18 Asia/Dhaka. This imports historical evidence and records read-only status checks; it is not a new GPU experiment completion.

## Historical artifacts re-read [MEASURED]

Paths below are relative to `E:\sammo\_agent\downloads`.

| Kernel / experiment | Steps | FID / real reference | Artifact |
|---|---:|---|---|
| `hafizr283/srgda-eval-20k` / original student | 20,000 | 88.88135 / 12.74388 | `eval20k\quality_20k.json` |
| `hafizr283/srgda-a-b-5k-exact-dmd` / exact | 5,000 | 47.17456 / 12.74388 | `ab5k\quality_5k_exact.json` |
| same / old | 5,000 | 160.35184 / 12.74388 | `ab5k\quality_5k_old.json` |
| `hafizr283/srgda-two-gpu-arms` / cap30 | 5,000 | 42.30884 / 12.74389 | `twogpu1\quality_cap30.json` |
| same / tgf40 | 5,000 | 48.63894 / 12.74389 | `twogpu1\quality_tgf40.json` |
| `hafizr283/srgda-eval-teacher` / conditional EDM reference | N/A | 10.36183 / 12.80220 | `teacher4\teacher_quality.json` |

All JSONs report torchvision Inception pool3, 8,000 fake/4,000 real; source `quality_report()` splits the 8,000-image real reference into 4,000/4,000 halves. Historical paired screens use batch 32/seed 0 according to the runner/ledger. Kernel versions/dataset versions are not independently audited here; parent `RUNS.md` supplies the historical ledger. Completed-step counts above are checkpoint/result metadata, not a recount of every optimizer update.

Additional evidence: `swap2\label_swap_results.json` (label ratio 0.03570759), arm traces/logs and checkpoints beside the quality files, `distill20k\distill_info.json`. Old HTML reports remain in the project root. Review details: `E:\sammo\Thesis_Sammo\SRGDA_V8_REVIEW_2026-10-23.md`.

## Running job snapshot

- CLI at 2026-10-23 09:17 UTC / 15:17 Asia/Dhaka: `hafizr283/srgda-two-gpu-arms` RUNNING.
- Last ledger identifies v2, intended 18k steps for `cap30_18k` and `cap30nudge_18k`. Live version, pinned dataset and achieved steps: unknown.
- Quota: GPU 25.09 h used, 4.91 h remaining, refresh 2026-10-24 00:00 UTC / 06:00 Asia/Dhaka.
- Watcher PID 11832 was present; `watch_state.json` at 09:14:26 UTC reported RUNNING and destination `E:\sammo\_agent\downloads\twogpu2`. No outputs/READY file there yet at inspection.
- Decision: retain RUNNING/pending; verify both arms after outputs arrive. No run pushed, no source edited, no watcher started or stopped.

## Source identity at handoff

Working source BUILD_ID: `V8-1`; local dataset mirror's 19 Python modules match the working package. Runtime source identity for the existing Kaggle run is not verified by this local comparison.

SHA256:

```text
srgda/config.py    7c6454e3fdc511de3fb8ba97e8406060d88d62fd541670ccaa008a63aacc9dae
srgda/generator.py 36e3132be8d9450e643aa66bfa8d59ab361d479abfb3131a86c1b6329ee6f436
```

Next record must include its exact kernel/dataset version, source/config identity, validated completion/metrics, and changed fix statuses. Preserve this snapshot; correct mistakes with an explicit note rather than rewriting historical experiment results.
