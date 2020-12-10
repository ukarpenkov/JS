import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import Counter from './Conuter/Conuter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// function App() {

//   );
// }



class App extends Component {
  constructor(props) {
    console.log('app constuctor')
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'lada', year: 2021 },
        { name: 'vw', year: 2024 },
        { name: 'mers', year: 2026 },
      ],
      pageTitle: 'React Car',
      showCars: false
    }

  }



  toggleCarsHandler = () => {

    this.setState({
      showCars: !this.state.showCars
    })
  }


  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })

  }

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('рендер')
    console.log('был сделан рендер')
    const divStyle = {
      'text-align': 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }


    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <Counter />
        <h2>{this.props.title}</h2>

        <button
          onClick={this.toggleCarsHandler} > Toggle Cars</button>
        <button onClick={() => this.setState({ clicked: true })}>
          Change clcidefd </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>
      </div >
    )
  }
}

export default App;
