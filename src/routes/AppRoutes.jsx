import { Routes, Route } from 'react-router-dom'
import GameDetails from '../pages/GameDetails/GameDetails'
import GamesPage from '../pages/GamesPage/GamesPage'
import NewGamePage from '../pages/NewGamePage/NewGamePage'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import SignUpPage from '../pages/SignupPage/SignupPage'
import LogInPage from '../pages/LogInPage/LogInPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/games-list" element={<GamesPage />} />
            <Route path="details/:game_id" element={<GameDetails />} />
            <Route path="/addGame" element={<NewGamePage />} />
            <Route path="/cart" element={<Cart />} />

        </Routes>

    )
}
export default AppRoutes