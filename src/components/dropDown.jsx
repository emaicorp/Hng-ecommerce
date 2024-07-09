import React, { useState } from 'react';
import * as Icon from 'iconsax-react';

export default function DropDown({btnName, dropItems}) {
  const [isOpen, setIsOpen] = useState(false);

  function drop() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="drop">
      <div className="drop-btn d-flex justify-content-between align-items-center" onClick={drop}>
        <span>{btnName}</span>
        <Icon.ArrowDown2 className={`icon ${isOpen ? 'rotate' : ''}`} />
              </div>
      <div className={`drop-items ${isOpen ? 'open' : ''}`}>
       {dropItems}
      </div>
    </div>
  );
}
