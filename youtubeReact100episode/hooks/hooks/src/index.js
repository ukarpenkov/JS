import React, { useState, Component, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}
        >+
        </button>

        <button
          onClick={() => setVisible(false)}
        >hide
        </button>

        <PlanetInfo id={value} />
      </div>
    )
  }
  else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class mount')
  }
  componentDidUpdate() {
    console.log('class update')
  }
  componentWillUnmount() {
    console.log('class unmount')
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then(res => res.json())
    .then(data => data)
}

const useRequest = (request) => {
  const [dataState, setDataState] = useState({
    data: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    setDataState({
      data: null,
      loading: true,
      error: null
    })
    let cancel = false
    request().then(data => !cancel && setDataState({
      data: data,
      loading: false,
      error: null
    }))
      .catch(error => !cancel && setDataState({
        data: null,
        loading: false,
        error: error
      }))
    return () => cancel = true
  }, [request])

  return dataState
}

const usePlanetInfo = (id) => {

  const request = useCallback(() => getPlanet(id), [id])
  return useRequest(request)
}

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id)

  if (error) {
    return <div>Some ERROR!!!!1</div>
  }
  if (loading) {
    return <div>Loading....</div>
  }
  return (
    <div>{id} - {data.name}</div>
  )
}







ReactDOM.render(<App />,
  document.getElementById('root'));