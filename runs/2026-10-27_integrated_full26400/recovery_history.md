# Preserved execution history

- Original 141047550/v1: the generator reached 1,000 updates and the 25k pool completed; profiling hit the 5,000-index bound.
- Recovery 141077545/v1: transfer failed before training because internet access was disabled.
- Network recovery 141097500/v1: profiling and pricing completed; the real-only classifier aborted on AMP overflow at attempt 18,560. Both first-seed 5,000-update checkpoints survived.
- AMP recovery 141124122/v1: forced-overflow and two-GPU restore checks passed. All six eligible classifiers reached 26,400 updates, with 17 safely rolled-back overflow retries. The report completed, and checkpoint/prediction evidence was audited.

Historical failures are retained. Only the final recovery is a completed eligible-classifier result. Weighted policies were skipped under failed scientific gates.
