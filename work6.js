const RB=ReactBootstrap;
const {Alert, Card, Button, Table} = ReactBootstrap;


class App extends React.Component {
    title = (
      <Alert variant="info">
        <b>Work6 :</b> Firebase
      </Alert>
    );
    footer = (
      <div>
        By 643021345-9 Arreerak Klangindet <br />
        College of Computing, Khon Kaen University
      </div>
    );
    state = {
        scene: 0,
    }      
    render() {
      return (
        <Card>
          <Card.Header>{this.title}</Card.Header>  
          <Card.Body></Card.Body>
          <Card.Footer>{this.footer}</Card.Footer>
        </Card>          
      );
    }      
  }

  const firebaseConfig = {
    apiKey: "AIzaSyAA5uXrhE-FU4N3cfxUJZzmMA43UEjvlZA",
    authDomain: "web2566-2bf26.firebaseapp.com",
    projectId: "web2566-2bf26",
    storageBucket: "web2566-2bf26.appspot.com",
    messagingSenderId: "370703544481",
    appId: "1:370703544481:web:a6fcc90c5df1fae85a80e0"
  };
firebase.initializeApp(firebaseConfig);      
const db = firebase.firestore();
db.collection("students").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`,doc.data());
  });
});


  const container = document.getElementById("myapp");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
