import { Link } from "react-router";

const cards = [
  {
    id: 1,
    title: "Card One",
    description: "Ini adalah card pertama.",
  },
  {
    id: 2,
    title: "Card Two",
    description: "Ini adalah card kedua.",
  },
  {
    id: 3,
    title: "Card Three",
    description: "Ini adalah card ketiga.",
  },
];

const Home = () => {
  return (
    <div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Home</h1>
        <p className="mt-1 text-gray-500">
          Pilih salah satu card untuk melihat detail.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-lg border border-gray-300 bg-gray-50 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {card.description}
            </p>

            <Link
              to={`/detail/${card.id}`}
              className="mt-5 inline-block rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Lihat Detail →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;