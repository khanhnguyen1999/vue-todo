import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
    state: {
        todos:[
            {id:1,title:"Viec 1",completed:true},
            {id:2,title:"Viec 2",completed:false},
            {id:3,title:"Viec 3",completed:false},
        ],
        auth: {
            isAuthenticated: true
        }
    }
}

const store = new Vuex.Store(initialState)

export default store