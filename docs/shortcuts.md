---
id: shortcuts
title: Shortcuts & Gestures
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Shortcuts & Gestures

Stuck? Start here. Most things you'll want to do in vrOS are one gesture away — no menus, no desktop trip. The dash icon and your controllers do the work.

:::tip Lost the dash overlay or desktop window? Use the system tray icon.
**Right-click the vrOS icon in the Windows system tray** for instant recovery:

| Tray menu item | What it does |
|---|---|
| **Reset vrOS Dashboard Overlay** | Recenters the in-VR dash overlay to its default position. Use this if the dash drifted, ended up behind you, or won't show in SteamVR. |
| **Reset Desktop Position** | Recenters the Desktop Control Center window. Use this if the DCC ended up off-screen after a monitor change or resolution swap. |
| **Show Desktop** | Brings the DCC window to the front. |
| **VR: OpenVR Connected** | Status indicator — green dot means SteamVR is talking to vrOS. |
| **Quit vrOS** | Full shutdown. |

The tray icon is always available as long as vrOS is running, so it's the most reliable way out of a stuck state.
:::

## vrOS dash icon

The vrOS icon in the SteamVR dashboard is the fastest way to recover the dash, refresh overlays, and switch between full and compact layouts.

### Full dash

| Gesture | Action |
|---|---|
| Single-click | Refresh overlay titles |
| Double-click | Cycle overlays-tab layout (Titles → Icons → Hidden) |
| Long-hold | Switch to compact dash |

### Compact dash

| Gesture | Action |
|---|---|
| Single-click | Enter layout mode |
| Long-hold | Switch back to full dash |

Defaults live in **Desktop Control Center → Settings → OpenVR → UI**.

## Controllers

Defaults for the two main supported controller families. Customize in **Desktop Control Center → Settings → VR**.

<Tabs groupId="controller">
<TabItem value="touch" label="Meta / Oculus Touch" default>

| Input | Action |
|---|---|
| Left X — double-tap | Toggle Keyboard / Toggle Unpinned (pose disambiguates) |
| Left X — click | Drag playspace |
| Left Y — double-tap | Rotate playspace |
| Left Joystick — click | Right-click |
| Right A — click | Gesture / Drag playspace |
| Right B — double-tap | Rotate playspace |
| Right Joystick — click | Right-click |

</TabItem>
<TabItem value="knuckles" label="Valve Index / Knuckles">

| Input | Action |
|---|---|
| Left A — double-tap | Toggle Keyboard / Toggle Unpinned (pose disambiguates) |
| Left Trackpad — south | Drag playspace |
| Left Trackpad — east | Rotate playspace |
| Left Trackpad — north | Toggle gravity |
| Left Trackpad — west | Reset playspace |
| Left Thumbstick — click | Right-click |
| Left B — click | Right-click modifier |
| Right A — click | Gesture |
| Right Trackpad — south | Drag playspace |
| Right Trackpad — east | Reset playspace |
| Right Trackpad — north | Toggle gravity |
| Right Trackpad — west | Rotate playspace |
| Right Thumbstick — click | Right-click |
| Right B — click | Right-click modifier |

</TabItem>
</Tabs>

## Pose gestures

When **Toggle Keyboard** and **Toggle Unpinned Overlays** share the same input (default on Touch and Knuckles), a hand pose decides which one fires.

- **Modifier hand:** Right (configurable)
- **Modifier pose:** Hand Gun — index + thumb straight, others curled
- **Trigger with Hand Gun on the modifier hand →** Toggle Unpinned Overlays
- **Trigger without Hand Gun →** Toggle Keyboard

### Recognized poses

| Pose | Fingers |
|---|---|
| Fist | All curled |
| Open Hand | All straight |
| Point | Index straight, others curled |
| Hand Gun | Index + thumb straight, others curled |
| Thumbs Up | Thumb straight, others curled |
| Victory | Index + middle straight, ring + pinky curled |
| Rock N Roll | Index + pinky straight, middle + ring curled |

Pose detection works on skeletal-tracking controllers (Knuckles) and non-skeletal controllers (Touch). Set the **None** option to skip pose checks; **Disabled** turns the gesture off entirely.

## Click modes

### Right-click

| Mode | Trigger | Default |
|---|---|---|
| Action | Dedicated joystick or trackpad click | ✓ |
| Chord | Modifier button held + trigger pulled (threshold 0.5; hand mode: Both Hands) | |
| Grip | Grip value above 0.25 (legacy) | |

### Primary click

| Mode | Behavior | Default |
|---|---|---|
| Trigger Pull | Fires on squeeze | ✓ |
| Full Click | Requires full trigger detent (Knuckles-style) | |

## Customize defaults

All gestures and bindings ship with sensible defaults. To change them:

- **Desktop Control Center → Settings → VR** — controller bindings, primary click, right-click, unpinned-overlay gesture, keyboard gesture, SteamVR auto-connect.
- **Desktop Control Center → Settings → OpenVR** — playspace, gravity, vestibular motion (experimental), FPS, overlay defaults, UI (dash icon gestures, compact dashboard, clock).

## Still stuck?

- Run through [Troubleshooting](/troubleshooting) for fast checks.
- Open a structured report at [support.vros.cat](https://support.vros.cat/).
