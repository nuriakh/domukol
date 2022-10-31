import React ,{useState, useMemo} from "react";
import Total from "./Total";
import HomeShop from "./HomeShop";
import Time from "./Time";
import ToyShop from "./ToyShop";


class Counter extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      homeCount : 0,
      toyCount: 0
    }
  }

  // const [countTotal, setCount]= useState(0);

    render ()
  {
    return <div>
    <div className='border  my-8 mx-8' >
     <h1> celkovy pocet zakazniku v obchodu</h1>
     <p>{this.state.homeCount + this.state.toyCount}</p>
     {/* <p>{this.state.toyCount}</p> */}
     
      </div>

    <Time/>
    <HomeShop count={this.state.homeCount} onClick={(count) => {
      console.log(this)
      this.setState({
        homeCount : count
      })
    }}  />
    <ToyShop count1={this.state.toyCount} onClick={(count1) => {
      console.log(this)
      this.setState({
        toyCount : count1
      })
    }} />
  </div>;
  };
}
export default Counter;



// const Counter = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);
  
//   const memoizedValue = useMemo(() => (counter1 + counter2), [counter1, counter2]);
//   console.log(memoizedValue);
//   console.log(counter1);
  
//   return (
//     <div className="">
//       <Total />
//       <Time />
//       <HomeShop counter1={counter1}/>
//       <ToyShop counter2={counter2}/>
//     </div>
//   );
// };

// export default Counter;
