import React from 'react';
import Player from './Player';

const buttons = [
  {
    icon: '/rain.png',
    url: 'https://www.youtube.com/watch?v=74b3Zb18UDM'
  },
  {
    icon: '/bird.png',
    url: 'https://www.youtube.com/watch?v=Qm846KdZN_c'
  },
  {
    icon: '/bonfire.png',
    url: 'https://www.youtube.com/watch?v=NUKKzdVy0EI'
  },
  {
    icon: '/ocean.png',
    url: 'https://www.youtube.com/watch?v=nPit8KqqFwI'
  },
]

export default function Sounds(props)  {
  const renderItem = (button, idx) => {
    return <Player key={idx} icon={button.icon} url={button.url} />
  };

  return (
    <div className="buttonWrapper">
      {buttons.map(renderItem)}
    </div>
  )
}