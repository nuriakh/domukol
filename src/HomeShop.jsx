// import React from 'react'

// const HomeShop = (counter1) => {
//   const plus1 = ()=>{
//     setCounter1(counter1 + 1);
    
//   };

//   return (
//     <div className='border'>
//       <h1>home shop</h1>
//       <button onClick={plus1}>+1</button>
      
//     </div>
//   )
// }

// export default HomeShop

import React , {useState} from 'react';

class HomeShop extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count : props.count
    }
  }

  plus1 () {
    let newCount = this.state.count + 1;

    this.setState({
      count: newCount
    })
    this.props.onClick(newCount);
  
  }

  render(
  ){
  return (
    <div className='border my-8 mx-8  '>
      <h1>home shop</h1>
      <button className='rounded-none'
       onClick={() => this.plus1()}>+1</button>
       <div>{this.state.count}</div>
    </div>
  );
  }

}

export default HomeShop;
