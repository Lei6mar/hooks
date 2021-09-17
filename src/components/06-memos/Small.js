import React from 'react'

export const Small = React.memo(({value}) => {
  console.log('llamado...');
  return (
    <small>
      {value}
    </small>
  )
}
)