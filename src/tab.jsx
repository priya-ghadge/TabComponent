import { useState } from "react"

const data = [
  {label : "Account", content: "This is the Account content"},
  {label : "Summary", content: "This is the Summary content"},
  {label : "Transaction", content: "This is the Transaction content"},
]

const Tab = ({defaultIndex = 0}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
return(
    <>
        <div className="container">
          <div className="tabList">
              {data.length > 0 &&  data.map((ele, index) => (
                <button className={index === activeIndex ? 'Active' : 'Tab'} 
                  key={`Tab-${index}`} onClick={() => setActiveIndex(index)}>{ele.label}</button>
              ))}
          </div>

          <div className="content" style={{textAlign: 'left', marginTop:'10px'}}>
            {data[activeIndex].content}
        </div>
        </div>
    </>
)
}

export default Tab