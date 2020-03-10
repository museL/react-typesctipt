import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import { Hello } from "./components/Hello";
// export interface Props {
// 	name: string;
// 	enthusiasmLevel?: number;
//   }
  
class App extends React.Component<object> {
	render() {
	//   const { name, enthusiasmLevel = 1 } = this.props;
  
	//   if (enthusiasmLevel <= 0) {
	// 	throw new Error('You could be a little more enthusiastic. :D');
	//   }
  
	  return (
		<div className="hello">
		  <div className="greeting">
			Hello 
		  </div>
		  <Hello name="1213" enthusiasmLevel={10}></Hello>
		</div>
	  );
	}
  }

export default App;
