import React from 'react';
import './App.css';
import UnderConstruction from 'react-under-construction'
import 'react-under-construction/build/css/index.css'

function App() {
  return (
<UnderConstruction
    background={{
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: 'https://image.flaticon.com/icons/png/512/2909/2909653.png',
      alt: 'alt text'
    }}
    title={{
      text: 'Codaspace Indonesia'
    }}
    description={{
      text: 'Our website is under construction. We\'ll be here soon.',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://www.instagram.com/codespace.id/?hl=en',
        image: 'https://image.flaticon.com/icons/svg/2111/2111463.svg',
      },
      {
        url: 'https://api.whatsapp.com/send?phone=6281231486465&text=%20Apakah%20ada%20yang%20bisa%20kami%20bantu?%20%20:)',
        image: 'https://image.flaticon.com/icons/svg/1384/1384055.svg',
      },
    ]}
  />
  )
}

export default App;
