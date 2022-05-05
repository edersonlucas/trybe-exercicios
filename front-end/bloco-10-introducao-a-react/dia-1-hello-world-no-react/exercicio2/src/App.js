import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="Main">
      <Header />
      <div className="Blocos">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
