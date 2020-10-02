import devReducer from './devReducer'
import designReducer from './designReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dev: devReducer,
    design: designReducer,
    projects: projectReducer
})

export default rootReducer;