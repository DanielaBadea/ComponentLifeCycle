import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComp from './MyComponent/DerivedStateFromProps'
import CompDidMount from './MyComponent/DidMount'
import ShouldComponentUpdate from './MyComponent/shouldComponentUpdate'
import GetSnapshotBeforeUpdate from './MyComponent/getSnapshotBeforeUpdate'

class App extends Component {

render(){
  return (
    <>
    {/* <MyComp/> */}
    {/* <CompDidMount/> */}
    {/* <ShouldComponentUpdate/> */}
   <GetSnapshotBeforeUpdate/>
    </>
  )
}
}
 


export default App
