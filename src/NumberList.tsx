import React from 'react';

const NumberList: React.FC = () => {
  const numbers = Array.from({length: 100}, (_, i) => i + 1);
  
  return (
    <div>
      {numbers.map((number) => {
        let output = number.toString();

        if (number % 3 === 0 || number % 5 === 0) {
          output = `${number % 3 === 0 ? 'Falabella' : ''}${number % 5 === 0 ? 'IT' : ''}`;
          output = output === 'FalabellaIT' ? 'Marketplace' : output;
        }

        return <div key={number}>{output}</div>;
      })}
    </div>
  );
};

export default NumberList;
