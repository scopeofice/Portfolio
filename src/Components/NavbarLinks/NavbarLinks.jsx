import React from 'react'

export default function NavbarLinks({href, label, active, onClick}) {
  return (
    <li>
      <a href={href} className={active ? 'active' : ''} onClick={onClick}>{label}</a>
    </li>
  )
}
