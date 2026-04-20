---
title: First Run
sidebar_position: 3
---

# First Run

The fastest way to learn vrOS is to treat it as a desktop-first runtime with VR overlays attached, not the other way around.

## Recommended first-run order

1. Open the desktop control center and verify vrOS is running.
2. Start SteamVR and confirm the overlay entry is visible.
3. Open one simple overlay first, usually a dashboard or capture surface.
4. Test pointer focus and keyboard routing before adding more overlays.
5. Add creator integrations only after the core overlay path feels stable.

## What to check first

### Desktop control center

- Can you open the app on Windows?
- Do settings changes stick?
- Can you see the main control surfaces for overlays and integrations?

### SteamVR visibility

- Does vrOS appear in the dashboard?
- Can you open at least one overlay without it disappearing immediately?
- If not, restart SteamVR once before deeper debugging.

### Input path

- Click a captured app from desktop control first.
- Open the keyboard overlay only after the target app is focused.
- Keep vrOS and the target app at the same Windows privilege level when possible.

## First overlay suggestion

Start with one capture surface. It proves the runtime, the overlay path, and basic interaction without adding integration complexity too early.

## Next

- Learn the [Desktop Control Center](/desktop-control-center).
- Read [VR Overlays](/vr-overlays).
