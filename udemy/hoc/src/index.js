import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';


const starWarsChars = [
  { name: 'Вейдер', side: 'dark' },
  { name: 'Люк', side: 'light' },
  { name: 'Палпатин', side: 'dark' },
  { name: 'Йода', side: 'light' },
]
const App = ({ list }) => (
  <ul>
    {list.map((char, index) => {
      return <li key={char.name + index}>
        {char.name}-{char.side}
      </li>
    })}
  </ul>
)


const withFilteredProps = Component => ({ list, side }) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list={starWarsChars} side='light' />,
  document.getElementById('root'));
