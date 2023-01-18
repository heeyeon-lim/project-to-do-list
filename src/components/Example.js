import React, { useState } from 'react';


const MemoApp = () => {
  const [divs, setDivs] = useState([
    { key: 1, text: 'Div 1', condition: 'default' },
    { key: 2, text: 'Div 2', condition: 'default' },
    { key: 3, text: 'Div 3', condition: 'default' },
  ]);

  const handleDivClick = (index) => {
    const updatedDivs = [...divs];
    updatedDivs[index].condition = 'clicked';
    setDivs(updatedDivs);
  }

  return (
    <div>
      {divs.map((div, index) => (
        <div key={div.key} onClick={() => handleDivClick(index)}>
          {div.text} - {div.condition}
        </div>
      ))}
    </div>
  );
}

export default MemoApp;