import React, {useState} from 'react'
import  './Dropdown.scss'
import DropdownList from "./DropdownList";
import ArrowIcon from "../icons/ArrowIcon/ArrowIcon";

const Dropdown = ({maxWidth,
                  disabled,
                  listMaxWidth,
                  data}) => {
    const initialSelectedItem = data[1].items[2]
    const [isHoverOrActive, setIsHoverOrActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState(initialSelectedItem)
    const [isListOpened, setIsListOpened] = useState(false)
    let iconColor = '#121211'

    if (isHoverOrActive) {
        iconColor = '#fff'
    } else if (disabled) {
        iconColor = '#bcbcbd'
    } else  {
        iconColor = '#121211'
    }

    return (
        <>
            <div className={`Dropdown ${!Object.keys(selectedItem).length ? 'empty' : ''}`}
                 disabled={disabled}
                 style={{ maxWidth: `${maxWidth}px` }}
                 onMouseEnter={() => setIsHoverOrActive(!disabled && true)}
                 onMouseLeave={() => setIsHoverOrActive(false)}
                 onMouseDown={() => setIsHoverOrActive(!disabled && true)}
                 onClick={() => setIsListOpened((prev) => !prev)}
            >
                {selectedItem.text || 'Please select a value...'}
                <ArrowIcon fill={iconColor} />
            </div>

            <DropdownList
                maxWidth={listMaxWidth}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                data={data}
                isListOpened={isListOpened}
                setIsListOpened={setIsListOpened}
            />
        </>
    )
}

export default Dropdown