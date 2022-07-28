import * as reducers from './reducers'

import {createStore} from 'redux'

const store =createStore(reducers.questions)

export default store