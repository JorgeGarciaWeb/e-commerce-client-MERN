import axios from 'axios'

class GameServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/games`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getGames() {
        return this.api.get('/getAllGames')
    }


    getOneGame(game_id) {
        return this.api.get(`/getOneGame/${game_id}`)
    }


    addGame(gameData) {
        return this.api.post('/addGame', gameData)
    }


    updateGame(game_id, gameData) {
        return this.api.put(`/updateGame/${game_id}`, gameData)
    }


    deleteGame = itemId => {
        return this.api.put('/deleteGame', { game_id: itemId })
    }
}

const gameServices = new GameServices()

export default gameServices