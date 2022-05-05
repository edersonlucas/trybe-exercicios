function App() {
  const compromissos = ['Acordar', 'Trabalhar', 'Estudar', 'Praticar', 'Dormir']
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  return (
  compromissos.map((task) => Task(task))
  );
}

export default App;
