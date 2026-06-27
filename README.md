# VRSpoof
Vencord plugin that makes your Discord session appear as a VR headset to everyone even if you're on the desktop app.

## How it works
Discord decides which platform indicator other users see (desktop, mobile, web, VR...) from the connection properties your client sends in its gateway IDENTIFY. A session is shown as VR only when it reports `os` as `android` together with `browser` as `Discord VR`.

VRSpoof patches those connection properties at the source:

1. It rewrites the gateway IDENTIFY (and `X-Super-Properties`) so your client reports `os: "android"` and `browser: "Discord VR"`.
2. Discord then classifies your whole session as a VR client.
3. The green VR headset indicator appears on your avatar and also your voice-channel row.

> [!WARNING]
> This plugin violates Discord's Terms of Service. Using client modifications and spoofing client properties can result in account termination. Use at your own risk.

## Installation

Because this is not an official Vencord plugin, you must build Vencord with the plugin from source before injecting Discord.

1. Install [Node.js](https://nodejs.org/en), [git](https://git-scm.com/install/), and [pnpm](https://pnpm.io/installation) if missing.

2. Clone Vencord's Github repository:
```sh
git clone https://github.com/Vendicated/Vencord
cd Vencord
pnpm install --frozen-lockfile
```
3. Navigate to the `src` folder in the cloned Vencord repository, create a new folder called `userplugins` if it dosen't already exist.

4. Inside `userplugins`, create a folder called `vrSpoof`, then download `index.tsx` from this repository and move it into that folder (so the path is `src/userplugins/vrSpoof/index.tsx`).

5. Build Vencord and inject Discord:

```sh
pnpm build
pnpm inject
```
6. If built and injected successfully, follow the remaining prompt(s) and restart Discord to apply changes.
7. In Discord's Vencord plugins menu, enable the VRSpoof Plugin.

[Offical Vencord custom plugin installation guide](https://docs.vencord.dev/installing/custom-plugins/)

## Usage

1. Enable **VRSpoof** in the Vencord plugins menu and fully restart Discord.

2. That's it!

# Credits

Gateway property patch technique based on the [PlatformEmulator](https://github.com/Loukious/Vencord/blob/main/src/plugins/platformEmulator/index.ts) plugin.
