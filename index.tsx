/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin, { StartAt } from "@utils/types";

export default definePlugin({
  name: "VRSpoof",
  description:
    "Makes your Discord session report as a VR client, so the VR headset indicator shows on your avatar and in voice channels.",
  authors: [{ name: "Aurick", id: 1348025017233047634n }],

  // Identify this session as a VR client: os "android" + browser "Discord VR".
  patches: [
    {
      find: 'browser:"Discord Client"',
      replacement: {
        match: /os:[^,]+,browser:"Discord Client"/,
        replace: 'os:"android",browser:"Discord VR"',
      },
    },
  ],

  // The desktop app pre-connects the gateway as a desktop client and stashes it on
  // window._ws before we load; null it at Init so the gateway connects fresh and sends
  // the VR identify above (otherwise the spoof only applies after an account switch).
  startAt: StartAt.Init,
  start() {
    try {
      (window as any)._ws?.ws?.close?.(1000);
      Object.defineProperty(window, "_ws", {
        configurable: true,
        get: () => null,
        set: v => v?.ws?.close?.(1000),
      });
    } catch { /* already neutralized */ }
  },
});
