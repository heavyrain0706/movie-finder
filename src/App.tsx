import { FC } from "react"; 
import '../src/App.scss'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

const App: FC = () => {

    return ( 
        <div className="wrapper"> 
            <Header />
            <AppRouter />
        </div> 
    ) 
} 
 
export default App;
