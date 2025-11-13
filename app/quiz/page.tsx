export default function Quiz() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
        NeuraScent Quiz
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Coming Soon: Discover your perfect scent with our interactive quiz!
      </p>
      <a
        href="/"
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
      >
        Back to Home
      </a>
    </div>
  );
}