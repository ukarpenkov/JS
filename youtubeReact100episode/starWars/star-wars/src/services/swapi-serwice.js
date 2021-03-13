export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received!!! ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._tranformPerson)
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`)
        return this._tranformPerson(person)
    }
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._tranformPLanet)
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._tranformPLanet(planet)
    }
    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._tranformStarship)
    }
    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`)
        return this._tranformStarship(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _tranformPLanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    _tranformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
    _tranformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    }
}


const swapi = new SwapiService()

swapi.getPerson(3).then((p) => {
    console.log(p.name)
})
swapi.getPlanet(3).then((p) => {
    console.log(p.name)
})
swapi.getStarship(3).then((p) => {
    console.log(p.name)
})