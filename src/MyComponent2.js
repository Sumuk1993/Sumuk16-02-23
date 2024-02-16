//1.import area

//import somthing from some library
import MyComponent3 from './MyComponent3';

//2.function definition area
function MyComponent2() {
  //Every function return somthing
  return (
    <div>
      <span>Hello React Project Work</span>
      <MyComponent3 />
    </div>
  );
  //JSX (JavaScript Xml) syntax
}

//export area
export default MyComponent2;
