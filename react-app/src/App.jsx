import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boolean from './components/Boolean'
import Default from './components/Default'
import EffectOnce from './components/EffectOnce'
import Previous from './components/Previous'
import StateWithReset from './components/StateWithReset'
import Toggle from './components/Toggle'
import Breakpoint from './components/Breakpoint'
import ClickOutside from './components/ClickOutside'

function App() {

  return (
    <>
      {/* 1. хук useBoolean
      <Boolean/>  <br />
      2. хук useDefault
      <Default/> <br />
      3. хук useEffecOnce
      <EffectOnce/> <br />
      4. хук usePrevious
      <Previous/> <br />
      5. хук useStateWithReset
      <StateWithReset/> <br />
      6. хук useToggle
      <Toggle/> */}
      7. хук useBreakpoint
      <Breakpoint/>
      8. хук useClickOutside
      <ClickOutside/>
    </>
  );
}

export default App
