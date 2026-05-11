---
id: desktop-control-center
title: Desktop Control Center
sidebar_position: 4
---

# Desktop Control Center

The desktop control center (DCC) is your **creator surface** and **settings panel** for vrOS. It runs on Windows alongside SteamVR — keep it on a second monitor while you work.

:::info Overlays are managed in VR, not here
The DCC has **no Overlays tab**. Overlay management — placement, layout, refresh, compact/full layout switching — happens from the **vrOS dash overlay in VR**. See [Shortcuts & Gestures](/shortcuts) for the gestures that drive it.
:::

:::tip DCC window off-screen?
Right-click the **vrOS icon in the Windows system tray** and pick **Reset Desktop Position** to recenter the window. Same menu has **Reset vrOS Dashboard Overlay** for the in-VR dash. See [Shortcuts & Gestures](/shortcuts) for the full tray menu.
:::

## What the DCC is for

### Creator tabs

- **Soundboard** — trigger sound cues, manage your board, and route audio without leaving your VR workflow.
- **Live** — stream-side controls and live-session tooling that pair with OBS and Twitch.

### Settings

All vrOS preferences are configured here. The settings panel is organized into tabs and subtabs covering input, runtime, comfort, and creator integrations.

- **VR tab** — controller bindings, primary click, right-click, unpinned-overlay gesture, keyboard gesture, SteamVR auto-connect, keyboard positioning.
- **OpenVR tab** — playspace, gravity, vestibular motion (experimental), FPS, overlay defaults, UI (dash icon gestures, compact dashboard, clock).
- Plus the rest of the settings surface for integrations, comfort, and accounts.

For the actual default values that ship with vrOS, see [Shortcuts & Gestures](/shortcuts).

## When to open the DCC

- Configuring or tuning settings before a session.
- Running the Soundboard or Live tabs during a creator session.
- Toggling integrations (OBS, Twitch, VRChat OSC).
- Filing a support report — confirm whether an issue reproduces from the DCC side or only in VR. That distinction makes bug reports far more useful.

## Best practice

Set your preferences in the DCC once, then drive the session from VR using the [dash icon gestures and controller bindings](/shortcuts). The DCC stays out of your way until you need to flip a setting or run the creator tabs.
