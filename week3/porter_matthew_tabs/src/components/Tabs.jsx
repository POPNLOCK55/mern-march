import React, { useState } from 'react';



const Tabs = () => {

    const tabs = {
        tab1: 'This is tab 1',
        tab2: 'This is tab 2',
        tab3: 'this is tab 3'
    }

    const [tabClick, setTabClick] = useState({
        tab1: true,
        tab2: false,
        tab3: false
    })

    const clickHandler = (tabIdx) => {
        if (tabIdx === 1) {
            setTabClick({
                tab1: true,
                tab2: false,
                tab3: false
            })
        } else if (tabIdx === 2) {
            setTabClick({
                tab1: false,
                tab2: true,
                tab3: false
            })
        } else if (tabIdx === 3) {
            setTabClick({
                tab1: false,
                tab2: false,
                tab3: true
            })
        }
        console.log("Tab object: ", tabClick)
    }
    //The goal is to create a set of tabs that will each render their own unique textbox instance.

    return (
        <main className="main">
            <div>
                <h1>Tabs!</h1>
            </div>
            <div>
                
                <button onClick={() => clickHandler(1)}>Tab 1</button>
                <button onClick={() => clickHandler(2)}>Tab 2</button>
                <button onClick={() => clickHandler(3)}>Tab 3</button>
            </div>
            <div>
                {tabClick.tab1 === true ?
                    <p>{tabs.tab1}</p> :
                    null}
                {tabClick.tab2 === true ?
                    <p>{tabs.tab2}</p> :
                    null}
                {tabClick.tab3 === true?
                <p>{tabs.tab3}</p>:
                null}
            </div>
        </main>
    )
}




export default Tabs