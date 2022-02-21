import { API, Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  async function callApi(){
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log({token})

    const requestInfo = {
      headers: {
        Authorisation: token
      }
    }

    const data = await API.get('mplifyreactapi', '/path', requestInfo )
    console.log({data})
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
