import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import SelectedCity from "./pages/selected-city";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
                <Layout>
                    <Routes>
                        <Route path="/" element={<WeatherDashboard coordinates={null} />}/>
                        <Route path="/city/:name" element={<SelectedCity />}/>
                    </Routes>
                </Layout>  
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
