import { useEffect } from "react";
import dataStructure from "./utils/index";

import "./App.css"

function App() {

  const init = () => {

    const consoleTitle = (propRepeat: number, flag?: string) => {
      return (propSymbol: string) => {
        return (title: string) => {
          console.log(flag || "" + title + propSymbol.repeat(propRepeat))
        }
      }
    }

    const fiftyConsole = consoleTitle(50);
    const oneHundredConsole =  consoleTitle(100,"🇨🇴");

    const lineSeparator = (callback: () => void, title: string) => {
      console.log(title + " -".repeat(100))
      callback()
    }

    dataStructure.Maps(fiftyConsole("# "))
    dataStructure.Objects(oneHundredConsole("| "))
    dataStructure.Sets(fiftyConsole("@ "))
    dataStructure.arrays(oneHundredConsole("~ "))
    dataStructure.expBinaryTree(fiftyConsole("½ "))
    dataStructure.expGraph(oneHundredConsole("¬ "))
    lineSeparator(dataStructure.expHashTable, "HASH TABLE")
    lineSeparator(dataStructure.expLinkedList, "LINKED LIST")
    lineSeparator(dataStructure.expQueues, "QUEUES")
    lineSeparator(dataStructure.expStack, "STACK")
    lineSeparator(dataStructure.expTries, "TRIES")
  }

  useEffect(() => {
    init()
  },[])


  return (
    <>
    <h3>Hello World!</h3>
    </>
  )
}

export default App
