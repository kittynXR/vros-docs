---
id: troubleshooting
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

Use this page for the fast checks that solve most release-era setup problems.

## First: try the system tray

Right-click the **vrOS icon in the Windows system tray** before anything else. The menu has two one-click recovery actions that solve most "I can't see the thing" problems:

- **Reset vrOS Dashboard Overlay** — recenters the in-VR dash if it drifted, ended up behind you, or won't show in SteamVR.
- **Reset Desktop Position** — recenters the Desktop Control Center window if it ended up off-screen after a monitor change or resolution swap.

Full tray menu is documented in [Shortcuts & Gestures](/shortcuts).

## vrOS does not appear in SteamVR

1. Restart SteamVR after the first install or update.
2. Launch vrOS from Steam and confirm the desktop control center opens.
3. Check SteamVR startup and shutdown settings for the vrOS entry.
4. If it still fails, report whether desktop control works while VR overlays do not.

## Capture overlays are black or frozen

- Make sure the source window is visible and not minimized.
- Test a normal desktop app before assuming the whole capture path is broken.
- Some protected media sources will not capture correctly.
- Reduce overlay count if the failure only appears under heavy load.

## Input or keyboard routing is wrong

- Focus the target app first.
- Re-open the keyboard overlay after switching apps.
- Keep vrOS and the target app at matching Windows privilege levels when possible.

## Performance drops

- Start with fewer active overlays.
- Lower capture count or capture resolution before changing everything else.
- Close heavy desktop apps or creator tools you are not actively using.
- Verify GPU drivers and SteamVR settings if stutter continues.

## Creator services will not connect

- Open OBS before connecting OBS controls.
- Re-check Twitch or VRChat credentials and local service availability.
- Include the exact failing workflow in your support request or bug report.

## More help

- Use the rebuilt [support center](https://support.vros.cat/).
- File a structured report at [support.vros.cat/report-bug](https://support.vros.cat/report-bug).
