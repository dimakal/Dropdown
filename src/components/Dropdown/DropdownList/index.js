import React, {useState} from 'react'
import  './DropdownList.scss'
import DropdownListGroup from "../DropdownListGroup";

const DropdownList = ({maxWidth, setSelectedItem, data, selectedItem, isListOpened, setIsListOpened}) => {

    return (
        <div
            className={`Dropdown__list`}
            style={{ maxWidth: `${maxWidth}px` }}
            hidden={!isListOpened}
        >
            {
                data.map(group => <DropdownListGroup
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    group={group}
                    setIsListOpened={setIsListOpened}
                />)
            }
        </div>
    )
};

export default DropdownList