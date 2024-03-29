import { Provider} from "react-redux";
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