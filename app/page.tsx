export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
        NeuraScent: Discover Your Scent Journey
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Find the perfect scent ritual to elevate your everyday experience.
      </p>
      <a
        href="/quiz"
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Take the Quiz
      </a>
      <footer className="mt-8 text-gray-500">
        <p>
          Follow us: <a href="#" className="text-purple-600">@NeuraScent</a>
        </p>
      </footer>
    </div>
  );
}