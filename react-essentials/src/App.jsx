import reactLogo from "./assets/react-core-concepts.png"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

/*new line*/
function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
