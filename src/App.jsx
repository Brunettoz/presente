import ButtonStart from "./components/ButtonStart";
import EventPhoto from "./components/EventPhoto";
import Timeline from "./components/Timeline";
import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  const [eventPhoto] = useState([
    {
      id: 1,
      title: "Quando falamos que gostávamos um do outro",
      photo: import.meta.env.BASE_URL + "images/descoberta.jpeg",
      date: "25/07/2024",
      focus: "object-center",
    },
    {
      id: 2,
      title: "Primeiro encontro",
      photo: import.meta.env.BASE_URL + "images/primeiroencontro.jpeg",
      date: "04/08/2024",
      focus: "object-top",
    },
    {
      id: 3,
      title: "Primeiro selinho",
      photo: import.meta.env.BASE_URL + "images/maquiage.jpeg",
      date: "10/08/2024",
      focus: "object-top",
    },
    {
      id: 4,
      title: "Primeira festa juntinhos",
      photo: import.meta.env.BASE_URL + "images/primeiraFesta.jpeg",
      date: "17/08/2024",
      focus: "object-right",
    },
    {
      id: 5,
      title: "Primeira vez que veio na minha casa",
      photo: import.meta.env.BASE_URL + "images/quarto.jpeg",
      date: "07/09/2024",
      focus: "object-center",
    },
    {
      id: 6,
      title: "Primeiro beijo",
      photo: import.meta.env.BASE_URL + "images/skincare.jpeg",
      date: "07/09/2024",
      focus: "object-left",
    },
    {
      id: 7,
      title: "Pedido de namoro",
      photo: import.meta.env.BASE_URL + "images/pedidoNamoro.jpeg",
      date: "20/10/2024",
      focus: "object-center",
    },
    {
      id: 8,
      title: "Formatura juntinhos",
      photo: import.meta.env.BASE_URL + "images/formatura.jpeg",
      date: "14/12/2024",
      focus: "object-center",
    },
    {
      id: 9,
      title: "Quando conheceu minha família toda",
      photo: import.meta.env.BASE_URL + "images/conheceuFamilia.jpeg",
      date: "26/01/2025",
      focus: "object-center",
    },
    {
      id: 10,
      title: "Parque das águas juntinhos",
      photo: import.meta.env.BASE_URL + "images/passeio.jpeg",
      date: "04/03/2025",
      focus: "object-center",
    },
    {
      id: 11,
      title: "Quando eu conheci boa parte da sua família",
      photo: import.meta.env.BASE_URL + "images/conheciFamilia.jpeg",
      date: "23/03/2025",
      focus: "object-left-top",
    },
    {
      id: 12,
      title: "Primeiro dia dos namorados juntos (2 dias depois)",
      photo: import.meta.env.BASE_URL + "images/diaNamorados.jpeg",
      date: "17/06/2025",
      focus: "object-center",
    },
    {
      id: 13,
      title:
        "1 ano que falamos que gostavamos um do outro (e aniver do Matteo)",
      photo: import.meta.env.BASE_URL + "images/umAnoGostamos.jpeg",
      date: "25/07/2025",
      focus: "object-center",
    },
    {
      id: 14,
      title: "E finalmente o 1 ano de namoro",
      photo: import.meta.env.BASE_URL + "images/decadas[.jpeg",
      date: "20/10/2025",
      focus: "object-center",
    },
  ]);

  const [showTimeline, setShowTimeline] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < eventPhoto.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // chegou na última imagem → mostra a timeline
      setShowTimeline(true);
    }
  };

  const currentPhoto = eventPhoto[currentIndex];

  return (
    <div className="w-screen h-screen bg-rose-100 ">
      {!started ? (
        <ButtonStart onClick={() => setStarted(true)} />
      ) : !showTimeline ? (
        <EventPhoto photo={currentPhoto} nextPhoto={handleNext} />
      ) : (
        <Timeline photos={eventPhoto} currentIndex={currentIndex} />
      )}
    </div>
  );
}

export default App;
