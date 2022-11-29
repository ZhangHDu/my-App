import {defineStore} from 'pinia'
export const useStore = defineStore(
    'main',
    {
        state:()=>{
            return { 
                appType:0,
                thisPath:'Index'
            }
        },
       actions:{
            
       }
    }
)