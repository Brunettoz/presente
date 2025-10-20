function ButtonStart({ onClick }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        onClick={onClick}
        className="bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-pink-600 transition-all"
      >
        Começar
      </button>
    </div>
  );
}

export default ButtonStart;
