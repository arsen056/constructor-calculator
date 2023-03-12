import { Constructor } from 'features/constructor';
import { Runtime } from 'features/runtime';

function App() {
  return (
    <div draggable={true} className="container">
      <Constructor />
      <Runtime />
    </div>
  );
}

export default App;
