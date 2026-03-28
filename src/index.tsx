// Modules
import {render} from 'react-dom'
import {BrowserRouter} from "react-router-dom";
// Components
import {App} from "./App";
import {ThemeProvider} from "./theme";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)