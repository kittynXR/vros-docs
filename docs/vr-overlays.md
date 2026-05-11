---
id: vr-overlays
title: VR Overlays
sidebar_position: 5
---

# VR Overlays

Overlay management lives **in VR**, not in the Desktop Control Center. The vrOS dash overlay is the primary surface for refreshing, re-laying-out, and switching between full and compact dash modes.

:::tip Manage overlays from the vrOS dash icon
- **Single-click** — refresh overlay titles
- **Double-click** — cycle layout (Titles / Icons / Hidden)
- **Long-hold** — switch between full and compact dash
- **Compact mode single-click** — enter layout mode

Full reference: [Shortcuts & Gestures](/shortcuts).
:::

vrOS ships an overlay stack for practical control rather than novelty windows.

## Common overlay roles

### Capture

Bring app windows or displays into VR so they can be positioned and interacted with in-space.

### Dashboard and tools

Use dashboard and tool overlays for quick control, utility actions, and workflow management.

### Keyboard

Use the in-VR keyboard when a physical keyboard is inconvenient, but verify focus first so text lands in the correct target.

### Chat and utility surfaces

Chat, audio, and other creator-adjacent tools are meant to stay close to your active workflow rather than becoming separate full-screen tasks.

## Practical guidance

- Start with fewer active overlays and add them gradually.
- Keep overlay count and capture resolution reasonable on midrange GPUs.
- If a single overlay misbehaves, rebuild that overlay before restarting the entire stack.
- Treat overlay placement and readability as comfort decisions, not just space-filling decisions.

## If the dash is unreachable

Right-click the **vrOS icon in the Windows system tray → Reset vrOS Dashboard Overlay**. This recenters the dash to its default position and is the canonical recovery when the dash isn't visible in SteamVR.
