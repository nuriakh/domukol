import React,{useState} from "react";

class ToyShop extends React.Component{

  constructor(props){
    super(props);
    this.state={
      count1: props.count1
    }
  }
  plus_1(){
    let newCount = this.state.count1 + 1;
    this.setState({
      count1: newCount
    })
    this.props.onClick(newCount)
  }
  render()
  {
    return (
      <div className="border my-8 mx-8">
        <h1>toy shop</h1>
        <button className=" rounded" 
        onClick={()=>this.plus_1()}>+1 </button>
        <div>{this.state.count1}</div>
      </div>
    )
  }
}
export default ToyShop;







// import React , {useState} from 'react'

// const ToyShop = () => {
//   const [count2, setCount]= useState(0);

//   const plus1 = ()=> {
//     setCount(count2+1)
//   }
//   console.log(count2);
//   return (
//     <div className='border my-8 mx-8  '>
//       <h1>toy shop</h1>
//       <button className='rounded-none'
//        onClick={plus1}>+1</button>
//        <div>{count2}</div>
//     </div>
    
//   )
// }

// export default ToyShop