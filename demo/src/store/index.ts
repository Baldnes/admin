import {defineStore} from "pinia"
import {names} from "./pinia-d";

export let useTestStore = defineStore(names.TEST,{
    state:() => {
        return {
            name:"admin",
            password:"123456"
        }
    }
})