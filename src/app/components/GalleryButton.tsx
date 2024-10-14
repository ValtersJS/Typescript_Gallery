const GalleryButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="fixed bottom-8">
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out border border-gray-600"
    >
      <span className="text-xl font-serif">Shuffle</span>
    </button>
  </div>
);

export default GalleryButton;
