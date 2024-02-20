import { useDirection } from '@endeavorpal/hooks'
import React from 'react'
import EndeavorFancySVG, { Props } from './EndeavorFancySVG'

const ChatIcon: React.FC<Props> = (props: Props) => {
  const { isRTL } = useDirection()
  const transform = isRTL ? 'rotate(0)matrix(-1, 0, 0, 1, 0, 0)' : 'rotate(0)matrix(1, 0, 0, 1, 0, 0)'
  const svgProps = {
    width: props.width || '32',
    height: props.height || '32',
    viewBox: props.viewBox || '0 0 32 32',
    fill: props.fill || '#08786B',
    transform: props.transform || transform,
  }
  return (
    <EndeavorFancySVG
      width={svgProps.width}
      height={svgProps.height}
      viewBox={svgProps.viewBox}
      fill={svgProps.fill}
      transform={svgProps.transform}
    >
      <g id='chat 1'>
        <g id='Icon'>
          <path
            id='Vector'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.66666 20.3693C9.64399 20.38 9.62266 20.3947 9.60266 20.4107L5.97332 23.4347C5.67599 23.6827 5.25999 23.7373 4.90932 23.572C4.55732 23.408 4.33332 23.0547 4.33332 22.6667V20.1947C3.73732 20.0253 3.18666 19.7053 2.73999 19.26C2.05332 18.572 1.66666 17.6387 1.66666 16.6667V6.66667C1.66666 5.69467 2.05332 4.76133 2.73999 4.07333C3.42799 3.38667 4.36132 3 5.33332 3H17.3333C18.3053 3 19.2387 3.38667 19.9267 4.07333C20.6133 4.76133 21 5.69467 21 6.66667V7H14.6667C13.34 7 12.0693 7.52667 11.1307 8.464C10.1933 9.40267 9.66666 10.6733 9.66666 12V20.3693Z'
            fill={svgProps.fill}
          />
          <path
            id='Vector_2'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11 12C11 11.028 11.3867 10.0947 12.0733 9.40671C12.7613 8.72004 13.6947 8.33337 14.6667 8.33337H26.6667C27.6387 8.33337 28.572 8.72004 29.26 9.40671C29.9467 10.0947 30.3333 11.028 30.3333 12V22C30.3333 22.972 29.9467 23.9054 29.26 24.5934C28.8133 25.0387 28.2627 25.3587 27.6667 25.528V28C27.6667 28.388 27.4427 28.7414 27.0907 28.9054C26.74 29.0707 26.324 29.016 26.0267 28.768L22.3973 25.744C22.3373 25.6947 22.2613 25.6667 22.184 25.6667H14.6667C13.6947 25.6667 12.7613 25.28 12.0733 24.5934C11.3867 23.9054 11 22.972 11 22V12ZM17.3333 15.6667H21.3333C21.8853 15.6667 22.3333 15.2187 22.3333 14.6667C22.3333 14.1147 21.8853 13.6667 21.3333 13.6667H17.3333C16.7813 13.6667 16.3333 14.1147 16.3333 14.6667C16.3333 15.2187 16.7813 15.6667 17.3333 15.6667ZM17.3333 19.6667H24C24.552 19.6667 25 19.2187 25 18.6667C25 18.1147 24.552 17.6667 24 17.6667H17.3333C16.7813 17.6667 16.3333 18.1147 16.3333 18.6667C16.3333 19.2187 16.7813 19.6667 17.3333 19.6667Z'
            fill={svgProps.fill}
          />
        </g>
      </g>
    </EndeavorFancySVG>
  )
}

export default ChatIcon
