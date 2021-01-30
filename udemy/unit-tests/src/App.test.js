import React from 'react'
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from './App'
import Character from './Character'


configure({
    adapter: new Adapter()
})

describe('<App/>', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('Должен отрендерить 3 персонажа белой стороны', () => {
        expect(wrapper.find(Character)).toHaveLength(3)
    })
    it('Должен отрендерить 2 персонажа черной стороны', () => {
        wrapper.setProps({
            side: 'dark'
        })
        expect(wrapper.find(Character)).toHaveLength(2)
    })


})