import { useState, useEffect } from 'react'

const titleClassName: string = "bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-violet-700 text-6xl font-black"
const subTitleClassName: string = "bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-violet-700 text-4xl font-black"
const subSubTitleClassName: string =  "bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-violet-700 text-2xl font-black"
const highlightedTextClassName: string =  "bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-violet-700 text-lg font-black"

interface gameStateForm {
  [key: string]: {
    text: string,
    state: boolean
  }
}

const gameStateOptions: string[] = [
    "Shadow Dragons Rank 4",
    "Shadow Dragons Rank 3",
    "An Academic Interest",
    "Light House",
    "Slaying the FangScorcher",
    "Black Emporium",
    "The Soul of a City",
    "Sea of Blood",
    "Antivan Crows Rank 3",
    "Antivan Crows Rank 2",
    "Novelty Sword Seller",
    "The Siege of Weisshaupt",
    "For Gold and Glory",
    "Bloodbath",
    "In Entropy's Grasp",
    "Into the Crossroads",
    "Clara Seller",
    "Lords of Fortune Rank 2",
    "The Smuggled Relic Case",
    "Shadow of Minrathous",
    "The Snake Nest Deal",
    "The Tailor",
    "Grey Warden Rank 3",
    "Apothecary",
    "Crispin",
    "Entarus the Rekindled",
    "Quyn the Sparkwielder",
    "Elgar'Nan",
    "The Disciple-In-Ichor",
    "Elvhenan's Haven",
    "Blood of Arlathan",
    "The Forest of Spirits",
    "The Cauldron"
];

function App() {
  const [gameState, setGameState] = useState<Set<string>>(new Set())

  useEffect(() => {
    const storedGameState = localStorage.getItem("gameState")

    if (!storedGameState) return;
    
    setGameState(new Set(storedGameState.split(',')))
  }, [])

  function changeGameState(optionID: string) {
    
    if (gameState.has(optionID)) {
      
    } else {
      setGameState
    }
  }

  return (
    <div className="
      inset-0 -z-10 h-full w-full bg-violet-900
      [background:radial-gradient(125%_125%_at_50%_10%,#3c0061_40%,#63e_100%)]
      justify-center flex flex-col items-center"
    >
      <img src="public/logo.avif" className="py-10 w-5/6 px-10"/>
      <div className="h-5/6 w-3/4 bg-gray-800 rounded-lg border-2 border-violet-300 justify-center flex flex-col">
        <div className="text-center my-6">
          <h1 className={titleClassName}>
            Spellblade Build
          </h1>
        </div>
        <div className="text-white text-justify mx-6 mt-2 space-y-5"> <p>
            This guide contains all the gear, talents and companions that we used with my brother on our playthrough of Dragon Age: The Veilguard.
          </p>
          <p>
            Seeing as there is fundamental gear that can be missed during quests, and are SOL afterwards, it is separated by the Acts and Requirement to get each piece, as well as a checkbox to track what has already been completed
          </p>
          <h2 className={subTitleClassName}>
            Gear
          </h2>
          <h2 className={subSubTitleClassName}>
            Game State
          </h2>
          <div>
            <p className={highlightedTextClassName}>Faction Shops</p>
            <p> The Grey Wardens Rank 4</p>
            <p> The Grey Wardens Rank 3</p>
            <p> The Grey Wardens Rank 2</p>
            <p> The Grey Wardens Rank 1</p>
            <p> The Grey Wardens Rank 4</p>
          </div>
          <p className={highlightedTextClassName}>Act 1: The Veilguard</p>
        </div>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>  
    </div>
  );
}

export default App;
