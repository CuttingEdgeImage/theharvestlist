export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-2xl border border-zinc-200 p-10">
          <p className="text-sm font-medium text-zinc-600">TheHarvestList.com</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            The Harvest List
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            A nationwide farmers market directory. Search by location, day of week,
            products, and payment options. More features are coming soon.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/markets"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Explore markets
            </a>

            <a
              href="/submit"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Suggest a market
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-zinc-600 sm:grid-cols-3">
            <div className="rounded-xl bg-zinc-50 p-4">
              <p className="font-medium text-zinc-900">Location-first</p>
              <p className="mt-1">City, county, and state pages.</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4">
              <p className="font-medium text-zinc-900">Useful filters</p>
              <p className="mt-1">Days, products, and payment types.</p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4">
              <p className="font-medium text-zinc-900">Continuously updated</p>
              <p className="mt-1">Seeded from public datasets.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          Data sources and details will be listed on the site as we roll out the directory.
        </p>
      </div>
    </main>
  );
}
