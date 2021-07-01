import React, {useState} from 'react'
import  './Dropdown.scss'
import DropdownList from "./DropdownList";
import ArrowIcon from "../icons/ArrowIcon/ArrowIcon";

const Dropdown = ({disabled, maxWidth}) => {
    const [isHoverOrActive, setIsHoverOrActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState({id: 0, text: 'Default item', selected: true})
    const [isListOpened, setIsListOpened] = useState(false)
    let iconColor = '#121211'

    const data = [{
        title: 'Group 1',
        danger: false,
        items: [
            {id: 1, text: 'Item 1', disabled: true},
            {id: 2, text: 'Item 2', disabled: false},
            {id: 3, text: 'Item 3', disabled: false},
        ]
    }, {
        title: 'Group 2',
        danger: true,
        items: [
            {id: 4, text: 'Item 1', disabled: false},
            {id: 5, text: 'Item 2', disabled: true},
            {id: 6, text: 'Item 3', disabled: false},
        ]
    },
    ]

    if (isHoverOrActive) {
        iconColor = '#fff'
    } else if (disabled) {
        iconColor = '#bcbcbd'
    } else  {
        iconColor = '#121211'
    }

    return (
        <>
            <div className={'Dropdown'} disabled={disabled}
                 style={{ maxWidth: `${maxWidth}px` }}
                 onMouseEnter={() => setIsHoverOrActive(!disabled && true)}
                 onMouseLeave={() => setIsHoverOrActive(false)}
                 onMouseDown={() => setIsHoverOrActive(!disabled && true)}
                 onClick={() => setIsListOpened((prev) => !prev)}
            >
                {selectedItem.text}
                <ArrowIcon fill={iconColor} />
            </div>

            <DropdownList
                maxWidth={340}
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