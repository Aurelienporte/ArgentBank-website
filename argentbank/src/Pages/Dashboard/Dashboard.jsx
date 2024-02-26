import Account from "../../Components/Account/Account"
import "./Dashboard.css"

function Dashboard(){
    return(
        <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account 
            title="Argent Bank Checking (x8349)" 
            amount="$2,082.79" 
            description="Available Balance"
        ></Account>
        <Account 
            title="Argent Bank Checking (x8349)" 
            amount="$2,082.79" 
            description="Available Balance"
        ></Account>
        <Account 
            title="Argent Bank Checking (x8349)" 
            amount="$2,082.79" 
            description="Available Balance"
        ></Account>
      </main>
    )
}

export default Dashboard