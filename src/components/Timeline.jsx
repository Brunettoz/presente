function Timeline({ photos}) {
  return (
    <div className="fade-in relative w-full min-h-screen flex flex-col items-center py-10 bg-rose-100 text-white">
      {/* Linha central */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-pink-500 transform -translate-x-1/2"></div>

      <div className="flex flex-col gap-12 w-full max-w-4xl relative z-10">
        {photos.map((event, index) => (
          <div
            key={event.id}
            className={`flex items-center w-full ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            {/* Caixa do evento */}
            <div
              className={`relative w-72 p-4 bg-pink-500 ${photos.focus} rounded-xl shadow-lg ${
                index % 2 === 0 ? "mr-2" : "ml-2"
              }`}
            >
              <img
                src={event.photo}
                alt={event.title}
                className={`w-full h-44 object-cover ${event.focus} rounded-lg mb-2`}
              />
              <p className="text-center text-gray-300 text-sm">{event.date}</p>

              {/* Bolinha de ligação com a linha */}
              <div
                className={`absolute top-1/2 w-4 h-4 bg-pink-500 rounded-full -translate-y-1/2 ${
                  index % 2 === 0 ? "-left-40" : "-right-40" 
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
