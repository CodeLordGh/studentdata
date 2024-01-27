import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Herocomponent = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          EDUFLOW
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Unlocking the true potential of education with Eduflow
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Say goodbye to data silos and hello to seamless management, connected
          communication, and data-driven insights. Eduflow is the all-in-one
          platform that streamlines school operations, empowers teachers,
          engages parents, and propels student success
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Get Started
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://unsplash.com/photos/O5EMzfdxedg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJsYWNrJTIwc2Nob29sc3xlbnwwfHx8fDE3MDYzNjQ2Nzl8MA&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    src: "https://unsplash.com/photos/QrTfAOrq-L0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGJsYWNrJTIwc2Nob29sc3xlbnwwfHx8fDE3MDYzNjQ2Nzl8MA&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://unsplash.com/photos/83tkHLPgg2Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGJsYWNrJTIwc2Nob29sc3xlbnwwfHx8fDE3MDYzNjQ2Nzl8MA&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://unsplash.com/photos/n9R0MN3XGvY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fGJsYWNrJTIwc2Nob29sc3xlbnwwfHx8fDE3MDYzNjQ2OTV8MA&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://unsplash.com/photos/4U1x6459Q-s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDN8fGJsYWNrJTIwc2Nob29sc3xlbnwwfHx8fDE3MDYzNjUxMTZ8MA&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1534597422092-8a84f1b45a9c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1547226706-af7e2c20bcea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Herocomponent;
