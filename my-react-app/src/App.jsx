import Card from '/src/Card.jsx'
import Button from '/src/Button.jsx'
import Student from '/src/Student.jsx'

function App() {
  return (
    
    <>
      <Card/>
      <Button/>
      <Student name="Rexy" age={"3"} isStudent={"true"}/>
      <Student name="Truffle" age={2} isStudent={true}/>
      <Student name="Maple" age={10} isStudent={false}/>
      <Student name="Ducky" age={1} isStudent={true}/>
    </>
  );

}

export default App
