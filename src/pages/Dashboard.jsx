// // import { useEffect, useMemo, useState } from "react";
// // import axios from "axios";
// // // import "./index.css";

// // const API_URL = import.meta.env.VITE_API_URL;

// // const categories = [
// //   "work",
// //   "personal",
// //   "study",
// //   "important",
// //   "todo",
// //   "idea",
// //   "other",
// // ];

// // const categoryStyles = {
// //   work: "bg-blue-100 text-blue-700",
// //   personal: "bg-purple-100 text-purple-700",
// //   study: "bg-emerald-100 text-emerald-700",
// //   important: "bg-rose-100 text-rose-700",
// //   todo: "bg-amber-100 text-amber-700",
// //   idea: "bg-cyan-100 text-cyan-700",
// //   other: "bg-slate-100 text-slate-700",
// // };

// // const Dashboard = () => {
// //   const [notes, setNotes] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [tag, setTag] = useState("work");
// //   const [search, setSearch] = useState("");
// //   const [filterTag, setFilterTag] = useState("all");
// //   const [loading, setLoading] = useState(true);
// //   const [saving, setSaving] = useState(false);
// //   const [error, setError] = useState("");
// //   const [editingId, setEditingId] = useState(null);

// //   const fetchNotes = async () => {
// //     try {
// //       setError("");
// //       const response = await axios.get(`${API_URL}/notes`, {
// //         withCredentials: true,
// //       });
// //       setNotes(response.data.notes || []);
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.message || "Could not load your notes."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchNotes();
// //   }, []);

// //   const resetForm = () => {
// //     setTitle("");
// //     setDescription("");
// //     setTag("work");
// //     setEditingId(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!title.trim()) {
// //       setError("Please enter a note title.");
// //       return;
// //     }

// //     try {
// //       setSaving(true);
// //       setError("");

// //       if (editingId) {
// //         const response = await axios.put(
// //           `${API_URL}/notes/${editingId}`,
// //           { title: title.trim(), description, tag },
// //           { withCredentials: true }
// //         );

// //         setNotes((previous) =>
// //           previous.map((note) =>
// //             note._id === editingId ? response.data.data : note
// //           )
// //         );
// //       } else {
// //         const response = await axios.post(
// //           `${API_URL}/notes`,
// //           { title: title.trim(), description, tag },
// //           { withCredentials: true }
// //         );

// //         setNotes((previous) => [
// //           response.data.data,
// //           ...previous,
// //         ]);
// //       }

// //       resetForm();
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.message || "Could not save the note."
// //       );
// //     } finally {
// //       setSaving(false);
// //     }
// //   };

// //   const startEditing = (note) => {
// //     setEditingId(note._id);
// //     setTitle(note.title);
// //     setDescription(note.description || "");
// //     setTag(note.tag || "work");
// //     setError("");
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this note?")) {
// //       return;
// //     }

// //     try {
// //       setError("");
// //       await axios.delete(`${API_URL}/notes/${id}`, {
// //         withCredentials: true,
// //       });

// //       setNotes((previous) =>
// //         previous.filter((note) => note._id !== id)
// //       );

// //       if (editingId === id) resetForm();
// //     } catch (err) {
// //       setError(
// //         err.response?.data?.message || "Could not delete the note."
// //       );
// //     }
// //   };

// //   const filteredNotes = useMemo(() => {
// //     const query = search.trim().toLowerCase();

// //     return notes.filter((note) => {
// //       const matchesSearch =
// //         (note.title || "").toLowerCase().includes(query) ||
// //         (note.description || "").toLowerCase().includes(query);

// //       const matchesTag =
// //         filterTag === "all" || note.tag === filterTag;

// //       return matchesSearch && matchesTag;
// //     });
// //   }, [notes, search, filterTag]);

// //   return (
// //     <main className="min-h-screen bg-slate-50 text-slate-800">
// //       <header className="border-b border-slate-200 bg-white">
// //         <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
// //           <div className="flex items-center gap-3">
// //             <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-200">
// //               ✎
// //             </div>
// //             <div>
// //               <h1 className="text-xl font-bold tracking-tight text-slate-900">
// //                 NoteSpace
// //               </h1>
// //               <p className="text-xs text-slate-500">
// //                 Your thoughts, organized.
// //               </p>
// //             </div>
// //           </div>

// //           <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
// //             {notes.length} {notes.length === 1 ? "Note" : "Notes"}
// //           </span>
// //         </div>
// //       </header>

// //       <div className="mx-auto max-w-6xl px-5 py-10">
// //         <section className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-7 text-white shadow-xl shadow-indigo-100 sm:p-10">
// //           <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-100">
// //             Your personal workspace
// //           </p>
// //           <h2 className="text-3xl font-bold sm:text-4xl">
// //             Capture your ideas.
// //           </h2>
// //           <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
// //             Keep your tasks, study notes and everyday thoughts in one
// //             simple place.
// //           </p>
// //         </section>

// //         {error && (
// //           <div
// //             role="alert"
// //             className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
// //           >
// //             {error}
// //           </div>
// //         )}

// //         <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
// //           <div className="mb-6">
// //             <h2 className="text-xl font-bold text-slate-900">
// //               {editingId ? "Edit your note" : "Create a new note"}
// //             </h2>
// //             <p className="mt-1 text-sm text-slate-500">
// //               {editingId
// //                 ? "Update the details below."
// //                 : "Write down something you want to remember."}
// //             </p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             <div>
// //               <label
// //                 htmlFor="note-title"
// //                 className="mb-2 block text-sm font-semibold"
// //               >
// //                 Note title
// //               </label>
// //               <input
// //                 id="note-title"
// //                 type="text"
// //                 placeholder="e.g. JavaScript interview preparation"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //                 required
// //                 className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
// //               />
// //             </div>

// //             <div>
// //               <label
// //                 htmlFor="note-description"
// //                 className="mb-2 block text-sm font-semibold"
// //               >
// //                 Description
// //               </label>
// //               <textarea
// //                 id="note-description"
// //                 placeholder="Write your thoughts here..."
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 rows={4}
// //                 className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
// //               />
// //             </div>

// //             <div>
// //               <label
// //                 htmlFor="note-category"
// //                 className="mb-2 block text-sm font-semibold"
// //               >
// //                 Category
// //               </label>
// //               <select
// //                 id="note-category"
// //                 value={tag}
// //                 onChange={(e) => setTag(e.target.value)}
// //                 className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:max-w-xs"
// //               >
// //                 {categories.map((category) => (
// //                   <option key={category} value={category}>
// //                     {category.charAt(0).toUpperCase() +
// //                       category.slice(1)}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div className="flex flex-wrap gap-3">
// //               <button
// //                 type="submit"
// //                 disabled={saving}
// //                 className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
// //               >
// //                 {saving
// //                   ? "Saving..."
// //                   : editingId
// //                     ? "Save Changes"
// //                     : "+ Add Note"}
// //               </button>

// //               {editingId && (
// //                 <button
// //                   type="button"
// //                   onClick={resetForm}
// //                   className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-100"
// //                 >
// //                   Cancel
// //                 </button>
// //               )}
// //             </div>
// //           </form>
// //         </section>

// //         <section>
// //           <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
// //             <div>
// //               <h2 className="text-2xl font-bold text-slate-900">
// //                 Your Notes
// //               </h2>
// //               <p className="mt-1 text-sm text-slate-500">
// //                 Search and organize your notes.
// //               </p>
// //             </div>

// //             <span className="text-sm font-medium text-slate-500">
// //               Showing {filteredNotes.length} of {notes.length}
// //             </span>
// //           </div>

// //           <div className="mb-6 grid gap-3 sm:grid-cols-2">
// //             <input
// //               type="search"
// //               placeholder="Search by title or description..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
// //             />

// //             <select
// //               value={filterTag}
// //               onChange={(e) => setFilterTag(e.target.value)}
// //               className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
// //             >
// //               <option value="all">All categories</option>
// //               {categories.map((category) => (
// //                 <option key={category} value={category}>
// //                   {category.charAt(0).toUpperCase() +
// //                     category.slice(1)}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           {loading ? (
// //             <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">
// //               Loading your notes...
// //             </div>
// //           ) : filteredNotes.length === 0 ? (
// //             <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
// //               <div className="mb-3 text-4xl">📝</div>
// //               <h3 className="text-lg font-bold text-slate-800">
// //                 {notes.length === 0
// //                   ? "No notes yet"
// //                   : "No matching notes"}
// //               </h3>
// //               <p className="mt-2 text-sm text-slate-500">
// //                 {notes.length === 0
// //                   ? "Create your first note using the form above."
// //                   : "Try a different search or category."}
// //               </p>
// //             </div>
// //           ) : (
// //             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //               {filteredNotes.map((note) => (
// //                 <article
// //                   key={note._id}
// //                   className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
// //                 >
// //                   <div className="mb-4 flex items-start justify-between gap-3">
// //                     <span
// //                       className={`rounded-full px-3 py-1 text-xs font-bold ${
// //                         categoryStyles[note.tag] ||
// //                         categoryStyles.other
// //                       }`}
// //                     >
// //                       {note.tag || "other"}
// //                     </span>
// //                     <span className="text-lg text-slate-300 transition group-hover:text-indigo-500">
// //                       ✦
// //                     </span>
// //                   </div>

// //                   <h3 className="break-words text-lg font-bold text-slate-900">
// //                     {note.title}
// //                   </h3>

// //                   <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
// //                     {note.description || "No description added."}
// //                   </p>

// //                   <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
// //                     <button
// //                       type="button"
// //                       onClick={() => startEditing(note)}
// //                       className="flex-1 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
// //                     >
// //                       Edit
// //                     </button>

// //                     <button
// //                       type="button"
// //                       onClick={() => handleDelete(note._id)}
// //                       className="flex-1 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
// //                     >
// //                       Delete
// //                     </button>
// //                   </div>
// //                 </article>
// //               ))}
// //             </div>
// //           )}
// //         </section>

// //         <footer className="mt-14 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
// //           Made with care • NoteSpace
// //         </footer>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Dashboard;

// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

// const categories = [
//   "work",
//   "personal",
//   "study",
//   "important",
//   "todo",
//   "idea",
//   "other",
// ];

// const categoryStyles = {
//   work: "bg-blue-100 text-blue-700",
//   personal: "bg-purple-100 text-purple-700",
//   study: "bg-emerald-100 text-emerald-700",
//   important: "bg-rose-100 text-rose-700",
//   todo: "bg-amber-100 text-amber-700",
//   idea: "bg-cyan-100 text-cyan-700",
//   other: "bg-slate-100 text-slate-700",
// };

// const Dashboard = () => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [tag, setTag] = useState("work");
//   const [search, setSearch] = useState("");
//   const [filterTag, setFilterTag] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   // const [darkMode, setDarkMode] = useState(false);
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   useEffect(() => {
//   localStorage.setItem("darkMode", darkMode);
// }, [darkMode]);

//   const dark = darkMode;

//   const fetchNotes = async () => {
//     try {
//       setError("");
//       const response = await axios.get(`${API_URL}/notes`, {
//         withCredentials: true,
//       });
//       setNotes(response.data.notes || []);
//     } catch (err) {
//       setError(err.response?.data?.message || "Could not load your notes.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const resetForm = () => {
//     setTitle("");
//     setDescription("");
//     setTag("work");
//     setEditingId(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title.trim()) {
//       setError("Please enter a note title.");
//       return;
//     }

//     try {
//       setSaving(true);
//       setError("");

//       if (editingId) {
//         const response = await axios.put(
//           `${API_URL}/notes/${editingId}`,
//           { title: title.trim(), description, tag },
//           { withCredentials: true },
//         );

//         setNotes((previous) =>
//           previous.map((note) =>
//             note._id === editingId ? response.data.data : note,
//           ),
//         );
//       } else {
//         const response = await axios.post(
//           `${API_URL}/notes`,
//           { title: title.trim(), description, tag },
//           { withCredentials: true },
//         );

//         setNotes((previous) => [response.data.data, ...previous]);
//       }

//       resetForm();
//     } catch (err) {
//       setError(err.response?.data?.message || "Could not save the note.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const startEditing = (note) => {
//     setEditingId(note._id);
//     setTitle(note.title);
//     setDescription(note.description || "");
//     setTag(note.tag || "work");
//     setError("");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this note?")) {
//       return;
//     }

//     try {
//       setError("");
//       await axios.delete(`${API_URL}/notes/${id}`, {
//         withCredentials: true,
//       });

//       setNotes((previous) => previous.filter((note) => note._id !== id));

//       if (editingId === id) resetForm();
//     } catch (err) {
//       setError(err.response?.data?.message || "Could not delete the note.");
//     }
//   };

//   const filteredNotes = useMemo(() => {
//     const query = search.trim().toLowerCase();

//     return notes.filter((note) => {
//       const matchesSearch =
//         (note.title || "").toLowerCase().includes(query) ||
//         (note.description || "").toLowerCase().includes(query);

//       const matchesTag = filterTag === "all" || note.tag === filterTag;

//       return matchesSearch && matchesTag;
//     });
//   }, [notes, search, filterTag]);

//   const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
//     dark
//       ? "border-slate-600 bg-slate-800 text-white placeholder:text-slate-400"
//       : "border-slate-200 bg-slate-50 text-slate-800"
//   }`;

//   const cardClass = `rounded-2xl border p-6 shadow-sm ${
//     dark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
//   }`;

//   const headingClass = dark ? "text-white" : "text-slate-900";
//   const mutedClass = dark ? "text-slate-400" : "text-slate-500";

//   return (
//     <main
//       className={`min-h-screen transition-colors duration-300 ${
//         dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
//       }`}
//     >
//       <header
//         className={`border-b ${
//           dark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
//         }`}
//       >
//         <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
//           <div className="flex items-center gap-3">
//             <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-500/20">
//               ✎
//             </div>

//             <div>
//               <h1
//                 className={`text-xl font-bold tracking-tight ${headingClass}`}
//               >
//                 NoteSpace
//               </h1>
//               <p className={`text-xs ${mutedClass}`}>
//                 Your thoughts, organized.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
//               {notes.length} {notes.length === 1 ? "Note" : "Notes"}
//             </span>

//             <button
//               type="button"
//               onClick={() => setDarkMode((previous) => !previous)}
//               aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
//               className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
//                 dark
//                   ? "border-slate-600 bg-slate-800 text-amber-300 hover:bg-slate-700"
//                   : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
//               }`}
//             >
//               {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="mx-auto max-w-6xl px-5 py-10">
//         <section className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-7 text-white shadow-xl shadow-indigo-500/10 sm:p-10">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-100">
//             Your personal workspace
//           </p>
//           <h2 className="text-3xl font-bold sm:text-4xl">
//             Capture your ideas.
//           </h2>
//           <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
//             Keep your tasks, study notes and everyday thoughts in one simple
//             place.
//           </p>
//         </section>

//         {error && (
//           <div
//             role="alert"
//             className="mb-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
//           >
//             {error}
//           </div>
//         )}

//         <section className={`mb-10 ${cardClass} sm:p-8`}>
//           <div className="mb-6">
//             <h2 className={`text-xl font-bold ${headingClass}`}>
//               {editingId ? "Edit your note" : "Create a new note"}
//             </h2>
//             <p className={`mt-1 text-sm ${mutedClass}`}>
//               {editingId
//                 ? "Update the details below."
//                 : "Write down something you want to remember."}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label
//                 htmlFor="note-title"
//                 className="mb-2 block text-sm font-semibold"
//               >
//                 Note title
//               </label>
//               <input
//                 id="note-title"
//                 type="text"
//                 placeholder="e.g. JavaScript interview preparation"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="note-description"
//                 className="mb-2 block text-sm font-semibold"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="note-description"
//                 placeholder="Write your thoughts here..."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows={4}
//                 className={`${inputClass} resize-y`}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="note-category"
//                 className="mb-2 block text-sm font-semibold"
//               >
//                 Category
//               </label>
//               <select
//                 id="note-category"
//                 value={tag}
//                 onChange={(e) => setTag(e.target.value)}
//                 className={`${inputClass} sm:max-w-xs`}
//               >
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <button
//                 type="submit"
//                 disabled={saving}
//                 className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 {saving
//                   ? "Saving..."
//                   : editingId
//                     ? "Save Changes"
//                     : "+ Add Note"}
//               </button>

//               {editingId && (
//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   className={`rounded-xl border px-6 py-3 font-semibold transition ${
//                     dark
//                       ? "border-slate-600 text-slate-300 hover:bg-slate-800"
//                       : "border-slate-200 text-slate-600 hover:bg-slate-100"
//                   }`}
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </section>

//         <section>
//           <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className={`text-2xl font-bold ${headingClass}`}>
//                 Your Notes
//               </h2>
//               <p className={`mt-1 text-sm ${mutedClass}`}>
//                 Search and organize your notes.
//               </p>
//             </div>

//             <span className={`text-sm font-medium ${mutedClass}`}>
//               Showing {filteredNotes.length} of {notes.length}
//             </span>
//           </div>

//           <div className="mb-6 grid gap-3 sm:grid-cols-2">
//             <input
//               type="search"
//               placeholder="Search by title or description..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className={inputClass}
//             />

//             <select
//               value={filterTag}
//               onChange={(e) => setFilterTag(e.target.value)}
//               className={inputClass}
//             >
//               <option value="all">All categories</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {loading ? (
//             <div className={`${cardClass} p-10 text-center ${mutedClass}`}>
//               Loading your notes...
//             </div>
//           ) : filteredNotes.length === 0 ? (
//             <div
//               className={`rounded-2xl border border-dashed px-5 py-14 text-center ${
//                 dark
//                   ? "border-slate-700 bg-slate-900"
//                   : "border-slate-300 bg-white"
//               }`}
//             >
//               <div className="mb-3 text-4xl">📝</div>
//               <h3 className={`text-lg font-bold ${headingClass}`}>
//                 {notes.length === 0 ? "No notes yet" : "No matching notes"}
//               </h3>
//               <p className={`mt-2 text-sm ${mutedClass}`}>
//                 {notes.length === 0
//                   ? "Create your first note using the form above."
//                   : "Try a different search or category."}
//               </p>
//             </div>
//           ) : (
//             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//               {filteredNotes.map((note) => (
//                 <article
//                   key={note._id}
//                   className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg ${
//                     dark
//                       ? "border-slate-700 bg-slate-900 hover:shadow-indigo-950/30"
//                       : "border-slate-200 bg-white hover:shadow-indigo-100"
//                   }`}
//                 >
//                   <div className="mb-4 flex items-start justify-between gap-3">
//                     <span
//                       className={`rounded-full px-3 py-1 text-xs font-bold ${
//                         categoryStyles[note.tag] || categoryStyles.other
//                       }`}
//                     >
//                       {note.tag || "other"}
//                     </span>
//                     <span className="text-lg text-slate-300 transition group-hover:text-indigo-500">
//                       ✦
//                     </span>
//                   </div>

//                   <h3
//                     className={`break-words text-lg font-bold ${headingClass}`}
//                   >
//                     {note.title}
//                   </h3>

//                   <p
//                     className={`mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 ${
//                       dark ? "text-slate-300" : "text-slate-600"
//                     }`}
//                   >
//                     {note.description || "No description added."}
//                   </p>

//                   <div
//                     className={`mt-6 flex gap-3 border-t pt-4 ${
//                       dark ? "border-slate-700" : "border-slate-100"
//                     }`}
//                   >
//                     <button
//                       type="button"
//                       onClick={() => startEditing(note)}
//                       className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
//                         dark
//                           ? "bg-indigo-950 text-indigo-300 hover:bg-indigo-900"
//                           : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
//                       }`}
//                     >
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => handleDelete(note._id)}
//                       className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
//                         dark
//                           ? "bg-red-950 text-red-300 hover:bg-red-900"
//                           : "bg-red-50 text-red-600 hover:bg-red-100"
//                       }`}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}
//         </section>

//         <footer
//           className={`mt-14 border-t py-6 text-center text-sm ${
//             dark
//               ? "border-slate-800 text-slate-400"
//               : "border-slate-200 text-slate-500"
//           }`}
//         >
//           Made with care • NoteSpace
//         </footer>
//       </div>
//     </main>
//   );
// };

// export default Dashboard;




import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const categories = [
  "work",
  "personal",
  "study",
  "important",
  "todo",
  "idea",
  "other",
];

const categoryStyles = {
  work: "bg-blue-100 text-blue-700",
  personal: "bg-purple-100 text-purple-700",
  study: "bg-emerald-100 text-emerald-700",
  important: "bg-rose-100 text-rose-700",
  todo: "bg-amber-100 text-amber-700",
  idea: "bg-cyan-100 text-cyan-700",
  other: "bg-slate-100 text-slate-700",
};

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("work");
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("all");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Restore the saved theme when the dashboard opens.
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Save the theme whenever it changes.
  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const dark = darkMode;

  const fetchNotes = async () => {
    try {
      setError("");

      const response = await axios.get(`${API_URL}/notes`, {
        withCredentials: true,
      });

      setNotes(response.data.notes || []);
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not load your notes."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTag("work");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setSuccess("");
      setError("Please enter a note title.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      if (editingId) {
        const response = await axios.put(
          `${API_URL}/notes/${editingId}`,
          {
            title: title.trim(),
            description,
            tag,
          },
          { withCredentials: true }
        );

        setNotes((previous) =>
          previous.map((note) =>
            note._id === editingId ? response.data.data : note
          )
        );

        setSuccess("Note updated successfully!");
      } else {
        const response = await axios.post(
          `${API_URL}/notes`,
          {
            title: title.trim(),
            description,
            tag,
          },
          { withCredentials: true }
        );

        setNotes((previous) => [response.data.data, ...previous]);

        setSuccess("Note added successfully!");
      }

      resetForm();
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not save the note."
      );
    } finally {
      setSaving(false);
    }
  };

  const startEditing = (note) => {
    setEditingId(note._id);
    setTitle(note.title);
    setDescription(note.description || "");
    setTag(note.tag || "work");
    setError("");
    setSuccess("");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      await axios.delete(`${API_URL}/notes/${id}`, {
        withCredentials: true,
      });

      setNotes((previous) =>
        previous.filter((note) => note._id !== id)
      );

      if (editingId === id) {
        resetForm();
      }

      setSuccess("Note deleted successfully!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Could not delete the note."
      );
    }
  };

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notes.filter((note) => {
      const matchesSearch =
        (note.title || "").toLowerCase().includes(query) ||
        (note.description || "").toLowerCase().includes(query);

      const matchesTag =
        filterTag === "all" || note.tag === filterTag;

      return matchesSearch && matchesTag;
    });
  }, [notes, search, filterTag]);

  const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
    dark
      ? "border-slate-600 bg-slate-800 text-white placeholder:text-slate-400"
      : "border-slate-200 bg-slate-50 text-slate-800"
  }`;

  const cardClass = `rounded-2xl border p-6 shadow-sm ${
    dark
      ? "border-slate-700 bg-slate-900"
      : "border-slate-200 bg-white"
  }`;

  const headingClass = dark ? "text-white" : "text-slate-900";
  const mutedClass = dark ? "text-slate-400" : "text-slate-500";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Header */}
      <header
        className={`border-b ${
          dark
            ? "border-slate-800 bg-slate-900"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-500/20">
              ✎
            </div>

            <div>
              <h1 className={`text-xl font-bold tracking-tight ${headingClass}`}>
                NoteSpace
              </h1>
              <p className={`text-xs ${mutedClass}`}>
                Your thoughts, organized.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              {notes.length} {notes.length === 1 ? "Note" : "Notes"}
            </span>

            <button
              type="button"
              onClick={() => setDarkMode((previous) => !previous)}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                dark
                  ? "border-slate-600 bg-slate-800 text-amber-300 hover:bg-slate-700"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* Hero */}
        <section className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-7 text-white shadow-xl shadow-indigo-500/10 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-100">
            Your personal workspace
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Capture your ideas.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
            Keep your tasks, study notes and everyday thoughts in one simple
            place.
          </p>
        </section>

        {/* Error and success messages */}
        {error && (
          <div
            role="alert"
            className={`mb-6 rounded-xl border px-4 py-3 text-sm ${
              dark
                ? "border-red-800 bg-red-950 text-red-300"
                : "border-red-300 bg-red-50 text-red-700"
            }`}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            role="status"
            className={`mb-6 rounded-xl border px-4 py-3 text-sm ${
              dark
                ? "border-emerald-800 bg-emerald-950 text-emerald-300"
                : "border-green-300 bg-green-50 text-green-700"
            }`}
          >
            ✓ {success}
          </div>
        )}

        {/* Create or edit note */}
        <section className={`mb-10 ${cardClass} sm:p-8`}>
          <div className="mb-6">
            <h2 className={`text-xl font-bold ${headingClass}`}>
              {editingId ? "Edit your note" : "Create a new note"}
            </h2>

            <p className={`mt-1 text-sm ${mutedClass}`}>
              {editingId
                ? "Update the details below."
                : "Write down something you want to remember."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="note-title"
                className="mb-2 block text-sm font-semibold"
              >
                Note title
              </label>

              <input
                id="note-title"
                type="text"
                placeholder="e.g. JavaScript interview preparation"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="note-description"
                className="mb-2 block text-sm font-semibold"
              >
                Description
              </label>

              <textarea
                id="note-description"
                placeholder="Write your thoughts here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </div>

            <div>
              <label
                htmlFor="note-category"
                className="mb-2 block text-sm font-semibold"
              >
                Category
              </label>

              <select
                id="note-category"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className={`${inputClass} sm:max-w-xs`}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingId
                    ? "Save Changes"
                    : "+ Add Note"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setError("");
                    setSuccess("");
                  }}
                  className={`rounded-xl border px-6 py-3 font-semibold transition ${
                    dark
                      ? "border-slate-600 text-slate-300 hover:bg-slate-800"
                      : "border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Notes list */}
        <section>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className={`text-2xl font-bold ${headingClass}`}>
                Your Notes
              </h2>
              <p className={`mt-1 text-sm ${mutedClass}`}>
                Search and organize your notes.
              </p>
            </div>

            <span className={`text-sm font-medium ${mutedClass}`}>
              Showing {filteredNotes.length} of {notes.length}
            </span>
          </div>

          {/* Search and category filter */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            <input
              type="search"
              placeholder="Search by title or description..."
              aria-label="Search notes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={inputClass}
            />

            <select
              aria-label="Filter notes by category"
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className={inputClass}
            >
              <option value="all">All categories</option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className={`${cardClass} p-10 text-center ${mutedClass}`}>
              Loading your notes...
            </div>
          ) : filteredNotes.length === 0 ? (
            <div
              className={`rounded-2xl border border-dashed px-5 py-14 text-center ${
                dark
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-300 bg-white"
              }`}
            >
              <div className="mb-3 text-4xl">📝</div>

              <h3 className={`text-lg font-bold ${headingClass}`}>
                {notes.length === 0 ? "No notes yet" : "No matching notes"}
              </h3>

              <p className={`mt-2 text-sm ${mutedClass}`}>
                {notes.length === 0
                  ? "Create your first note using the form above."
                  : "Try a different search or category."}
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNotes.map((note) => (
                <article
                  key={note._id}
                  className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg ${
                    dark
                      ? "border-slate-700 bg-slate-900 hover:shadow-indigo-950/30"
                      : "border-slate-200 bg-white hover:shadow-indigo-100"
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        categoryStyles[note.tag] || categoryStyles.other
                      }`}
                    >
                      {note.tag || "other"}
                    </span>

                    <span className="text-lg text-slate-300 transition group-hover:text-indigo-500">
                      ✦
                    </span>
                  </div>

                  <h3 className={`break-words text-lg font-bold ${headingClass}`}>
                    {note.title}
                  </h3>

                  <p
                    className={`mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {note.description || "No description added."}
                  </p>

                  <div
                    className={`mt-6 flex gap-3 border-t pt-4 ${
                      dark ? "border-slate-700" : "border-slate-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => startEditing(note)}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        dark
                          ? "bg-indigo-950 text-indigo-300 hover:bg-indigo-900"
                          : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                      }`}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(note._id)}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        dark
                          ? "bg-red-950 text-red-300 hover:bg-red-900"
                          : "bg-red-50 text-red-600 hover:bg-red-100"
                      }`}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer
          className={`mt-14 border-t py-6 text-center text-sm ${
            dark
              ? "border-slate-800 text-slate-400"
              : "border-slate-200 text-slate-500"
          }`}
        >
          Made with care • NoteSpace
        </footer>
      </div>
    </main>
  );
};

export default Dashboard;
