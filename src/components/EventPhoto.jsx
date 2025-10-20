function EventPhoto({ photo, nextPhoto }) {
  return (
    <div key={photo.id} className="fade-in w-screen h-screen flex flex-col items-center justify-center">
      <h2 className="font-sans text-xl font-bold mb-3 text-black">{photo.title}</h2>
      <img
        src={photo.photo}
        alt={photo.title}
        className={`w-80 h-80 object-cover ${photo.focus} rounded-xl shadow-lg mb-3`}
      />
      <p className="text-black font-bold mb-3">{photo.date}</p>
      <button
        onClick={nextPhoto}
        className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all"
      >
        Próximo
      </button>
    </div>
  );
}

export default EventPhoto;


