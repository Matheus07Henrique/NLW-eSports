import {useState, useEffect} from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import logo from './assets/logo.svg';
import { GameBanner } from './components/Form/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/Form/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number,
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto my-20 flex flex-col items-center">
      <img src={logo} alt="logo nlw esports" />    

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner     
              key={game.id}   
              title={game.title} 
              bannerUrl={game.bannerUrl} 
              adsCount={game._count.ads}
            />
          )
        })}      
      </div>
    
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App