import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const persons=
    [
            {fname:'Zakaria',Mname:'Iqbal',Deptname:'CSE'},
            {fname:'Nimil',  Mname:'Islam',Deptname:'CSE'},
            {fname:'Biddut', Mname:'Kanti',Deptname:'EEE'},
            {fname:'Partho', Mname:'Deb',  Deptname:'Civil'}

    ]
    const products = 
    [

                    {name:'Photoshop',price:'$99.9'},
                    {name:'After Effect',price:'$80.9'},
                    {name:'Illustrator',price:'$98.3'},
                    {name:'Cloud',price:'$249'},
                    {name:'PDF',price:'Free'}

     ]
 
    return (
    <div className="App">
      <header className="App-header">
          <Users></Users>
          <Counter></Counter>
          
          {products.map(pd=><Product product={pd}></Product>)}

         


         <ul>
            {products.map(products =><li>{products.name}</li>)}
        </ul>


      <Me person = {persons[0]}></Me>
      <Me person = {persons[1]}></Me>
      <Me person = {persons[2]}></Me>
      <Me person = {persons[3]}></Me>
      
       <p>Let's learn React</p>
      </header>
    </div>
  );
}

function Users()
{
    const[users,setUsers]=useState([]);
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data=>setUsers(data))

    },[])

    return(
        <div>

        <h3>Dynamic Users:{users.length} </h3>
        {console.log(setUsers)}
        <ul>
            {users.map(users =><li>{users.name}</li>)}
            {users.map(users =><li>{users.email}</li>)}
        </ul> 
        </div>
    )

}

function Counter(props) 
{   
    const [count,setCount]= useState(0);
    const handleIncrease =()=>{setCount(count+1); };
  
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        </div>
    )


}


function Product(props){

    const productStyle={
        margin: '4px',
        border :'2px solid gray',
        Color :'lightgray',
        padding : '20px',
        height:'200px',
        width :'300px',
        float:'left'

    }
    const {name,price}=props.product

    console.log(props)
    return(
        <div style = {productStyle}>
        <h3>Name: {name} </h3>
        <h5>price: {price} </h5>
        <button>Buy now</button>
        </div>
    )
}





function Me(props){
    const MeStyle=
    {
        border: '2px solid black',
        margin: '10px',
        padding :'20px',
        width :'800px'
    }
    
    console.log(props)
    return( 
    <div style={MeStyle}>
    <h1>Name: {props.person.fname} {props.person.Mname}</h1>
    <h2>Student:{props.person.Deptname} 3rd Year</h2>
    
    </div>
    )
}
export default App;
