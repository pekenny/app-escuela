import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCarrerasStore = defineStore("carreras", () => {
    const carreras = ref([]);


    // Obtener las carreras
    onMounted(async () => {
        const request = await axios.get("http://localhost:3000/api/carreras")
        carreras.value = request.data
    })
    return {
        carreras
    }
})