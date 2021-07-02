import React, {useState} from 'react'
import CheckIcon from "../../icons/CheckIcon/CheckIcon";
import './DropdownListItem.scss'

const DropdownListItem = ({item, setSelectedItem, selectedItem, danger, disabled, setIsListOpened, selected}) => {

    const [isHoverOrActive, setIsHoverOrActive] = useState(false)

    let iconColor = '#121211'

    if (isHoverOrActive) {
        iconColor = '#fff'
    } else if (disabled) {
        iconColor = '#bcbcbd'
    } else  {
        iconColor = '#121211'
    }

    const onSelectItem = (item) => {
        if (disabled) return
        setSelectedItem(item)
        setIsListOpened(false)
    }
// debugger
    return (
        <div
            onClick={() => onSelectItem(item)}
            onMouseEnter={() => setIsHoverOrActive(!disabled && true)}
            onMouseLeave={() => setIsHoverOrActive(false)}
            onMouseDown={() => setIsHoverOrActive(!disabled && true)}
            className={`Dropdown__listItem ${danger ? 'danger' : ''}`}
            disabled={disabled}
        > {item.text}
            <CheckIcon
                fill={iconColor}
                hidden={item.id !== selectedItem.id}
            />
        </div>
    )
};

export default DropdownListItem