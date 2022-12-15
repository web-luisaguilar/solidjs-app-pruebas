import { createStore } from 'solid-js/store'
import { defaultState } from './defaults'

const [state, setState] = createStore(defaultState)

setState('active', false)
