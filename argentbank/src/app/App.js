import { Provider} from "react-redux";
// import Header from "../Components/Header/Header";
import Layout from "../utils/layout";
import store from "./mag";

function App (){
    return(
        <Provider store={store}>
            <Layout/>
        </Provider>
    )
}

export default App