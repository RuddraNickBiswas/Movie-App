import React, {useState} from 'react'
import Tab from '../tabs/Tab.component'
import './tabs.style.scss'
const Tabs = (props) => {
    const {children} = props
    const [activeTab, setActiveTab] = useState(children[0].props.label)
    
    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className = 'tabs'>
           <ol className = "tab-list">
           {
                    children.map((child) =>  {
                        const {label}  = child.props
                        
                        return <Tab activeTab = {activeTab} key = {label} label ={label} onClick={onClickTabItem}/>
                    } )
                }
            </ol> 
            <div className="tab-content">
                {
                    children.map((child) =>  {
                        if(child.props.label !== activeTab ) return undefined;
                        console.log(child.props.label)
                        return child.props.children
                    } )
                }
            </div>
        </div>
    )
}

export default Tabs
