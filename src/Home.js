import React, { useEffect, useState } from 'react';
import Word from './Word';

const Home = () => {
  const printStatement = () => {
    return 'this is a sample react application.'
  }

  const [text, setText] = useState('');

  const changeColors = (p) => {
    const array = p.split(' ')
    const coloredArray = array.map((word, index) => {
      const letters = '1234567890ABCDEF'
      let color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return <Word color={color} word={word} key={index} />
    })
    setText(coloredArray)
  }
  
  const paragraph = `Text to play with for this question.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  
  useEffect(() => {
    const interval = setInterval(() => {
      changeColors(paragraph)
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <h1>Hello, {printStatement()}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Home;