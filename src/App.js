import CardItem from "./components/CardItem";

function App() {
  return (
    <div className="App">
       <CardItem
          src='https://static.news.bitcoin.com/wp-content/uploads/2018/04/koinex-banner.png'
          text='my text'
          label='Adventure'
          path='/products'
          description={["someText1", "someText2", "someText3", "someText4"]}
        />
    </div>
  );
}

export default App;
