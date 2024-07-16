import './App.css';
import Counter from './components/counter/Counter';
// import LearningComponent from './components/learning-examples/LearningComponent';


function App() {
  return (
    <div className="App">
      <div style={{fontSize:"100px", fontWeight:"100px",fontFamily:"-moz-initial"}}>COUNTER</div>
      {/* <PlayingWithProps property1="value1" property2="value2" /> */}
      <Counter />

    </div>
  );
}
//older
// function PlayingWithProps(properties){
//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);
//   return(
//     <div>Props</div>
//   )
// }
// mordern js
// function PlayingWithProps({property1, property2}){
//   console.log(property1);
//   console.log(property2);
//   return(
//     <div>Props</div>
//   )
// }

// Funtion components
// function SecondComponent() {
//   return (
//     <>
//       <div className="SecondComponent">
//         Second Component
//       </div>
//       <div className="SecondComponent">
//         Second Component
//       </div>
//     </>
//   );
// }

// class components
// class ThirdComponent extends Component {
//   render() {
//     return (
//       <div>
//         <div className="ThirdComponent">
//           Third Component
//         </div>
//         <div className="ThirdComponent">
//           Third Component
//         </div>
//       </div>
//     )
//   }
// }



export default App;
