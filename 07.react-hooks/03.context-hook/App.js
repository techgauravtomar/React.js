import React from 'react'
import ComponentC from "./Context/ComponentC";

export const UserContext = React.createContext()
export const UserChanel = React.createContext()

function App() {
  return (
    <div>
      <UserContext.Provider value={'Gaurav'}>
        <UserChanel.Provider value="MainFlow">
            <ComponentC />
          </UserChanel.Provider>
      </UserContext.Provider>
    </div>
  )
}
export default App;
