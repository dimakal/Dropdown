import React from 'react'
import './DropdownListGroup.scss'
import DropdownListItem from "../DropdownListItem";

const DropdownListGroup = ({setSelectedItem, group, selectedItem, setIsListOpened}) => {

    return (
        <div className={'Dropdown__listGroup'}>
            <div className={'Dropdown__groupTitle'}> {group.title} </div>
            {
                group.items.map(item => <DropdownListItem
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    item={item}
                    danger={group.danger}
                    disabled={item.disabled}
                    setIsListOpened={setIsListOpened}
                    key={item.id}
                    selected={item.selected}
                />)
            }
        </div>
    )
}
;

export default DropdownListGroup