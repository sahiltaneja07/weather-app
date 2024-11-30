import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import FavCities from "./pages/fav-cities";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
                <Layout>
                    <Routes>
                        <Route path="/" element={<WeatherDashboard />}/>
                        <Route path="/favourite-cities" element={<FavCities />}/>
                    </Routes>
                </Layout>  
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
