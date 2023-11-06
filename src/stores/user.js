import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const login = ref(false)

    return {
       login
    }
})