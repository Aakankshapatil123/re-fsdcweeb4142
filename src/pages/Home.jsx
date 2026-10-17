// import { useNavigate } from "react-router"

// const Home = () => {
//    const navigate = useNavigate();

//   return (
//     <div>
//        <h1>Notes Application</h1>
//       <p>
//         Welcome to the Notes Application! This app allows you to create, edit, and manage your notes efficiently. You can organize your thoughts, ideas, and important information all in one place. Start by adding a new note and explore the features available to enhance your note-taking experience.
//       </p>

//       <button onClick={() => navigate('/register')}>Register</button> &nbsp;
//       <button onClick={() => navigate("/login")}>Login</button>
//     </div>
//   )
// }

// export default Home




import { useNavigate } from "react-router";

const features = [
  {
    icon: "✍️",
    title: "Create Notes",
    description:
      "Capture your thoughts, ideas and important information in seconds.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: "🗂️",
    title: "Stay Organized",
    description:
      "Group your notes into categories and find what matters quickly.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: "🔎",
    title: "Find Anything",
    description:
      "Search your notes by title or description whenever you need them.",
    color: "bg-sky-100 text-sky-700",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* Hero section */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Your personal space for ideas
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Every great idea
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                deserves a place.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Meet NoteSpace — a simple, organized home for your notes,
              study plans, daily tasks and brilliant ideas. Write things down,
              keep them organized and find them whenever you need them.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("/Register")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/Login")}
                className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              >
                Sign In
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                Simple to use
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                Organized categories
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-emerald-600">✓</span>
                Quick search
              </span>
            </div>
          </div>

          {/* Decorative notes preview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-300 to-violet-300 opacity-40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-indigo-200/50 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xl text-white">
                    ✎
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">NoteSpace</h2>
                    <p className="text-xs text-slate-500">
                      Your workspace
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  Organized
                </span>
              </div>

              <div className="mb-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-5 text-white">
                <p className="text-sm text-indigo-100">
                  Your daily inspiration
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Make room for ideas.
                </h3>
                <p className="mt-2 text-sm leading-6 text-indigo-100">
                  One place for everything on your mind.
                </p>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-slate-800">Recent notes</h3>
                <span className="text-xs font-medium text-indigo-600">
                  Preview
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-100 p-4 transition hover:border-indigo-200">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-slate-800">
                      Interview Preparation
                    </h4>
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      Study
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Practice JavaScript and React questions.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 p-4 transition hover:border-violet-200">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-slate-800">
                      Project Ideas
                    </h4>
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                      Ideas
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Collect ideas and plan the next project.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 p-4 transition hover:border-emerald-200">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-slate-800">
                      Daily Tasks
                    </h4>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      To-do
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Keep track of things to complete today.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <span className="text-emerald-600">●</span>
                A calmer way to organize your thoughts
              </div>
            </div>

            <div className="absolute -left-3 top-1/3 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs text-slate-500">Stay focused</p>
              <p className="mt-1 font-bold text-indigo-700">
                One note at a time ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Made for everyday life
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to stay organized
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Spend less time searching and more time doing what matters.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${feature.color}`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to clear your mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
              Start building your personal collection of notes with NoteSpace.
            </p>
            <button
              type="button"
              onClick={() => navigate("/Register")}
              className="mt-6 rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Create Your Account →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="font-bold text-slate-800">
            Note<span className="text-indigo-600">Space</span>
          </p>
          <p className="text-sm text-slate-500">
            A little space for all your big ideas.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;

