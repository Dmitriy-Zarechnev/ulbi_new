// Modules
import {render} from 'react-dom'
import {BrowserRouter} from "react-router-dom";
// Components
import {App} from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)