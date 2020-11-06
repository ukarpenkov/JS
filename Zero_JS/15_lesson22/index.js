let car1 = {
  name: 'Reno Logan',
  isTurnOn: false,
  speed: 0,
  engine: {
    v: 1.6,
    horsesPower: 160,
    isTurnOn: false
  },
  start: function () {
    this.isTurnOn = true
    this.speed = 10
    this.engine.isTurnOn = true
  }
}

