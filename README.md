This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

1. Node.js 18+ installed
2. Google Maps API Key (for map functionality)

### Environment Setup

1. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

2. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the **Maps JavaScript API**
   - Create credentials (API Key)
   - **Important:** Enable billing on your Google Cloud project (required for Maps API)
   - Add your domain to API key restrictions (optional but recommended)

3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Google Maps API Setup

If you encounter `ApiProjectMapError`, ensure:

1. ✅ **API Key is set** in `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
2. ✅ **Maps JavaScript API is enabled** in Google Cloud Console
3. ✅ **Billing is enabled** on your Google Cloud project
4. ✅ **API key restrictions** allow your domain (if restrictions are set)
5. ✅ **Restart your dev server** after adding the API key

**Note:** The Maps API requires a billing account, but Google provides $200 in free credits monthly, which covers most usage.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
