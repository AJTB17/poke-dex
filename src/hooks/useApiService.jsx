import { searchPokemon } from "../services/api"

const useApiService = async (name = "", limit = "20", offSet = "0") => {
    const data = await searchPokemon(name, limit, offSet)
    return data.results
}

export default useApiService