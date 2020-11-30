import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

// function App() {

//   );
// }

class App extends Component {

  state = {
    cars: [
      { name: 'lada', year: '2021' },
      { name: 'vw', year: '2024' },
      { name: 'mers', year: '2026' },
    ],
    pageTitle: 'React Car',
    showCars: false
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

  render() {
    console.log('был сделан рендер')
    const divStyle = {
      'text-align': 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (<Car
          key={index}
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(event) => this.onChangeName(event.target.value, index)}
        />
        )
      })
    }


    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler} > Toggle Cars</button>
        { cars}
      </div >
    )
  }
}

export default App;
