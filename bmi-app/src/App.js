import { Switch, Route } from "react-router-dom";
import BMICalculate from "./components/BMICalculate";
import BMI from "./components/BMI";
import Navbar from "./components/Navbar";
import { Container } from "./style";

function App() {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={BMICalculate} />
        <Route path="/bmi" component={BMI} />
      </Switch>
    </Container>
  );
}

export default App;
