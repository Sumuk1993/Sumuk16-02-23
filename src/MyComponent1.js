//1.import area

//import something from somelibrary/somelocation
import MyComponent2 from "./MyComponent2";

//2.function definition area
function MyComponent1() {
  //Every function return somthing
  return (
    <div>
      <h1>Welcome to React Project Work</h1>
      <MyComponent2 />
    </div>
  );
}

//3.export area
export default MyComponent1;
