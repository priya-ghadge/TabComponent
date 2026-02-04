import { useState,useRef } from "react"

const data = [
  {label : "Account", content: "This is the Account content"},
  {label : "Summary", content: "This is the Summary content"},
  {label : "Transaction", content: "This is the Transaction content"},
]

const Tab = ({defaultIndex = 0}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const tabRef = useRef([])

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % data.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + data.length) % data.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = data.length - 1;
    }

    if (newIndex !== index) {
      setActiveIndex(newIndex);
      tabRef.current[newIndex].focus(); 
    }
  };

return(
    <>
        <div className="container">
          <div className="tabList">
              {data.length > 0 &&  data.map((ele, index) => (
                <button className={index === activeIndex ? 'Active' : 'Tab'} 
                  key={`Tab-${index}`} 
                  ref={(el) => (tabRef.current[index] = el)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => setActiveIndex(index)}>{ele.label}</button>
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