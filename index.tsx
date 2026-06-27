/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
  name: "VRSpoof",
  description:
    "Makes your Discord session report as a VR client, so the VR headset indicator shows on your avatar and in voice channels.",
  authors: [{ name: "Aurick", id: 1348025017233047634n }],

  // Spoof the gateway IDENTIFY: a "vr" session needs os "android" + browser "Discord VR".
  patches: [
    {
      find: 'browser:"Discord Client"',
      replacement: {
        match: /os:[^,]+,browser:"Discord Client"/,
        replace: 'os:"android",browser:"Discord VR"',
      },
    },
  ],
});
