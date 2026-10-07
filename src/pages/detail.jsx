import { Link, useParams } from "react-router";

const cards = {
  1: {
    title: "Card One",
    description: "Ini adalah halaman detail dari Card One.",
  },
  2: {
    title: "Card Two",
    description: "Ini adalah halaman detail dari Card Two.",
  },
  3: {
    title: "Card Three",
    description: "Ini adalah halaman detail dari Card Three.",
  },
};

export default function Detail() {
  const { id } = useParams();
  const card = cards[id];

  return (
    <div className="mx-auto max-w-xl py-12 px-4">
      
      <div className="rounded-2xl bg-white p-8 shadow-md">
  
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gary-700">
            ID Card: {id}
          </span>
          <span className="text-xs text-gray-400">Detail Info</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          {card.title}
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600">
          {card.description}
        </p>

        <div className="mt-8 pt-4 border-t border-gray-100">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}