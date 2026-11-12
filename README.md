# Gift announcement

A public Next.js App Router + TypeScript website with cream and forest-green styling, the supplied package and truck photos, an editable form, and a congratulations letter.

The form is prefilled with:

- Recipient: Eduardo Valdez
- Sender: Evan Kate
- Gifts: package and truck
- Proposed delivery date: November 12

Visitors can edit these details and click **Confirm Package** to open `/congratulations`. The letter uses the entered details. No login, email credentials, database, environment variables, or external services are required. This is a simple navigation flow: no confirmation is stored and no notification is sent. Fee and monetary winnings claims are omitted as agreed.

## Run locally

Use Node.js 22 or later:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/`. To view it on a phone on the same Wi-Fi, open the **Network** URL printed by Next.js, such as `http://YOUR_COMPUTER_IP:3000/`. No special access link is needed. Keep the development server running while viewing locally.

## Photos and content

The supplied photos are already included:

- `assets/photos/package.jpeg`
- `assets/photos/truck.jpeg`

Replace those files with new JPEGs using the same filenames. The Next.js configuration includes them in Vercel deployments. Photo cards appear side by side on desktop and stack on mobile.

Edit the prefilled form values in `src/lib/gift-details.ts`. Main-page text is in `src/components/gift-content.tsx`. The letter is in `src/components/congratulations-content.tsx`. Entered form details travel in the congratulations page URL, so reloading the letter preserves them; nothing is stored in a server database.

## Deploy on Vercel and get your live link

1. **Upload this project to a GitHub repository.** Include the code and both files in `assets/photos`. The provided `.gitignore` excludes `node_modules`, `.next`, and test output.
2. **Open [vercel.com/new](https://vercel.com/new)** and sign in. Connect GitHub and import your repository. [Vercel's Git guide](https://vercel.com/docs/git) explains this process.
3. **Select the Next.js preset.** Use this project folder as the root directory. Leave the build command as `npm run build` and the output directory at its default. Use Node.js 22 or later.
4. **Click Deploy.** You do not need to add environment variables, email credentials, or database settings.
5. **Copy the live URL.** After deployment succeeds, click **Visit**, or open **Project → Settings → Domains**. Vercel provides a production address such as `https://your-project.vercel.app`. Share that address directly.
6. **Check public access.** Open the production link in an incognito window. If Vercel asks visitors to sign in, check **Settings → Deployment Protection** and ensure production-domain access is unrestricted. See [Vercel's protection settings](https://vercel.com/docs/deployment-protection).

Your local network URL only works while your computer and dev server are running. The Vercel production URL is the live internet link. Pushing future changes to the connected production branch triggers another deployment.

## Check the project

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm test
```

Browser tests check the actual announcement and congratulations pages on desktop and mobile, both photos, prefilled fields, editing the details, and clicking through to the letter without any email or save request. They use your running local dev server if one is already available; otherwise they start one.
