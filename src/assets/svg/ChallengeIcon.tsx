import { useDirection } from '@/hooks'
import React from 'react'
import EndeavorFancySVG, { Props } from './EndeavorFancySVG'

const ChallengeIcon: React.FC<Props> = (props: Props) => {
  const { isRTL } = useDirection()
  const svgProps = {
    width: props.width || '32',
    height: props.height || '32',
    viewBox: props.viewBox || '0 0 32 32',
    fill: props.fill || '#FFFFFF',
    transform: props.transform || isRTL ? 'scale(-1, 1)' : 'scale(1, 1)',
  }
  return (
    <EndeavorFancySVG
      width={svgProps.width}
      height={svgProps.height}
      viewBox={svgProps.viewBox}
      fill={svgProps.fill}
      transform={svgProps.transform}
    >
      <path
        d='M6.23298 1.43998L6.14698 1.35448L6.85298 0.646484L6.93948 0.732484C7.43576 1.22621 7.8292 1.81345 8.09706 2.46022C8.36492 3.10698 8.50186 3.80045 8.49998 4.50048H7.49998C7.50162 3.93192 7.39048 3.36867 7.173 2.84334C6.95552 2.31801 6.63602 1.84102 6.23298 1.43998Z'
        fill={svgProps.fill}
      />
      <path
        d='M2.6465 10.1465C3.16714 9.62282 3.78652 9.20763 4.46876 8.925C5.151 8.64237 5.88254 8.49792 6.621 8.50002H7.5V9.50002H6.621C6.01391 9.49833 5.41252 9.61709 4.85165 9.84942C4.29078 10.0818 3.78157 10.423 3.3535 10.8535L2.6465 10.1465Z'
        fill={svgProps.fill}
      />
      <path
        d='M2.50002 4.00002C3.20004 3.99802 3.8935 4.13497 4.54022 4.40292C5.18693 4.67088 5.77404 5.06451 6.26752 5.56102L6.85352 6.14652L6.14651 6.85352L5.56051 6.26802C5.15956 5.8648 4.68261 5.54511 4.15728 5.32746C3.63194 5.10981 3.06865 4.99852 2.50002 5.00002V4.00002Z'
        fill={svgProps.fill}
      />
      <path
        d='M22.4995 4.50048H21.4995C21.4977 3.80033 21.6347 3.10676 21.9026 2.4599C22.1706 1.81305 22.5641 1.22575 23.0605 0.731984L23.1465 0.646484L23.8525 1.35448L23.767 1.43948C23.3639 1.84054 23.0442 2.31759 22.8267 2.84301C22.6091 3.36844 22.4979 3.9318 22.4995 4.50048Z'
        fill={svgProps.fill}
      />
      <path
        d='M22.5 8.50002H23.379C24.1175 8.49792 24.849 8.64237 25.5313 8.925C26.2135 9.20763 26.8329 9.62282 27.3535 10.1465L26.6465 10.8535C26.2184 10.423 25.7092 10.0818 25.1484 9.84942C24.5875 9.61709 23.9861 9.49833 23.379 9.50002H22.5V8.50002Z'
        fill={svgProps.fill}
      />
      <path
        d='M23.8535 6.85352L23.1465 6.14652L23.7325 5.56102C24.226 5.06451 24.8131 4.67088 25.4598 4.40292C26.1065 4.13497 26.8 3.99802 27.5 4.00002V5.00002C26.9314 4.99852 26.3681 5.10981 25.8427 5.32746C25.3174 5.54511 24.8405 5.8648 24.4395 6.26802L23.8535 6.85352Z'
        fill={svgProps.fill}
      />
      <path d='M22.5 19L21.5 18L23 16L24.5 17L24 18.5L22.5 19Z' fill={svgProps.fill} />
      <path d='M29 18L28 17L29.5 15L31 16L30.5 17.5L29 18Z' fill={svgProps.fill} />
      <path d='M5.5 13.5L7 14.5L6.5 16L5 16.5L4 15.5L5.5 13.5Z' fill={svgProps.fill} />
      <path d='M25.5 23.5L24.5 22.5L26 20.5L27.5 21.5L27 23L25.5 23.5Z' fill={svgProps.fill} />
      <path
        d='M10.25 10.5C10.0511 10.5 9.86032 10.421 9.71967 10.2803C9.57902 10.1397 9.5 9.94891 9.5 9.75V6.25C9.5 6.05109 9.57902 5.86032 9.71967 5.71967C9.86032 5.57902 10.0511 5.5 10.25 5.5C10.4489 5.5 10.6397 5.57902 10.7803 5.71967C10.921 5.86032 11 6.05109 11 6.25V9.75C11 9.94891 10.921 10.1397 10.7803 10.2803C10.6397 10.421 10.4489 10.5 10.25 10.5Z'
        fill={svgProps.fill}
      />
      <path
        d='M11.5234 24.4525L9.72339 23.5525C9.65412 23.518 9.57779 23.5 9.50039 23.5H7.39089L6.98539 21.8785C6.96235 21.7868 6.91375 21.7034 6.84525 21.6382C6.77675 21.573 6.69115 21.5285 6.59839 21.51L4.49839 21.09V19H12.3254L15.1504 21.26L13.9004 21.51C13.7875 21.5331 13.686 21.5944 13.6131 21.6837C13.5402 21.773 13.5004 21.8847 13.5004 22V23.6615L11.5234 24.4525Z'
        fill={svgProps.fill}
      />
      <path
        d='M21 28.5C21.1326 28.5 21.2598 28.4473 21.3536 28.3536C21.4473 28.2598 21.5 28.1326 21.5 28V26H28.3245L30.5 27.74V30.5H15.9345L17.2675 28.5H21Z'
        fill={svgProps.fill}
      />
      <path
        d='M18.3125 15.746C18.2202 15.7833 18.1412 15.8473 18.0856 15.9298C18.0299 16.0123 18.0001 16.1095 18 16.209V22H17.6755L12.813 18.1095C12.7241 18.0385 12.6137 17.9998 12.5 18H12V16.209C11.9999 16.1095 11.9701 16.0123 11.9144 15.9298C11.8587 15.8473 11.7797 15.7833 11.6875 15.746C11.04 15.4859 10.4854 15.0375 10.0954 14.4588C9.70543 13.8802 9.49802 13.1978 9.49999 12.5V11.3245C9.82782 11.485 10.1982 11.5373 10.5576 11.4738C10.9171 11.4102 11.247 11.2342 11.5 10.971C11.6623 11.1384 11.8566 11.2714 12.0713 11.3623C12.2861 11.4531 12.5168 11.4999 12.75 11.4999C12.9831 11.4999 13.2139 11.4531 13.4286 11.3623C13.6434 11.2714 13.8376 11.1384 14 10.971C14.1623 11.1384 14.3566 11.2714 14.5713 11.3623C14.7861 11.4531 15.0168 11.4999 15.25 11.4999C15.4831 11.4999 15.7139 11.4531 15.9286 11.3623C16.1434 11.2714 16.3376 11.1384 16.5 10.971C16.6907 11.1702 16.9266 11.3205 17.1877 11.4091C17.4488 11.4977 17.7275 11.522 18 11.48V11.5355C17.1674 11.6568 16.4062 12.0736 15.8554 12.7096C15.3047 13.3457 15.001 14.1586 15 15H16C16.0008 14.3372 16.2644 13.7018 16.7331 13.2331C17.2018 12.7644 17.8372 12.5008 18.5 12.5C18.6326 12.5 18.7598 12.4473 18.8535 12.3536C18.9473 12.2598 19 12.1326 19 12V9C19 8.86739 18.9473 8.74021 18.8535 8.64645C18.7598 8.55268 18.6326 8.5 18.5 8.5H16.75C16.5511 8.5 16.3603 8.42098 16.2197 8.28033C16.079 8.13968 16 7.94891 16 7.75C16 7.55109 16.079 7.36032 16.2197 7.21967C16.3603 7.07902 16.5511 7 16.75 7H19C19.3978 7 19.7793 7.15804 20.0606 7.43934C20.342 7.72064 20.5 8.10218 20.5 8.5V12.5C20.502 13.1978 20.2945 13.8802 19.9046 14.4588C19.5146 15.0375 18.96 15.4859 18.3125 15.746Z'
        fill={svgProps.fill}
      />
      <path
        d='M17.75 10.5C17.5511 10.5 17.3603 10.421 17.2197 10.2803C17.079 10.1397 17 9.94891 17 9.75V9.5H18V10.455C17.9199 10.4843 17.8353 10.4995 17.75 10.5Z'
        fill={svgProps.fill}
      />
      <path
        d='M3.49997 19V21.5C3.49995 21.6153 3.53975 21.727 3.61264 21.8163C3.68553 21.9056 3.78703 21.9669 3.89997 21.99L6.08997 22.428L6.51297 24.1215C6.54014 24.23 6.60287 24.3262 6.69115 24.3948C6.77943 24.4634 6.88816 24.5004 6.99997 24.5H9.38197L11.2765 25.45C11.3396 25.4815 11.4087 25.4993 11.4791 25.5023C11.5496 25.5052 11.62 25.4932 11.6855 25.467L14.1855 24.467C14.2787 24.4297 14.3586 24.3653 14.4147 24.282C14.4708 24.1987 14.5005 24.1004 14.5 24V22.41L16.1695 22.076L17.1875 22.8905C17.2762 22.9614 17.3864 23.0001 17.5 23H21.293L23.293 25H21C20.8674 25 20.7402 25.0527 20.6464 25.1464C20.5526 25.2402 20.5 25.3674 20.5 25.5V27.5H17C16.9177 27.5 16.8366 27.5203 16.7641 27.5591C16.6915 27.5979 16.6296 27.654 16.584 27.7225L14.733 30.5H1.49997V19H3.49997Z'
        fill={svgProps.fill}
      />
      <path
        d='M17 5.25C17 5.05109 17.079 4.86032 17.2197 4.71967C17.3603 4.57902 17.5511 4.5 17.75 4.5C17.9489 4.5 18.1397 4.57902 18.2803 4.71967C18.421 4.86032 18.5 5.05109 18.5 5.25V6H17V5.25Z'
        fill={svgProps.fill}
      />
      <path
        d='M15 7.75C15.0013 8.08003 15.0958 8.40299 15.2727 8.68158C15.4497 8.96018 15.7018 9.18306 16 9.3245V9.75C16 9.94891 15.921 10.1397 15.7803 10.2803C15.6397 10.421 15.4489 10.5 15.25 10.5C15.0511 10.5 14.8603 10.421 14.7197 10.2803C14.579 10.1397 14.5 9.94891 14.5 9.75V4.25C14.5 4.05109 14.579 3.86032 14.7197 3.71967C14.8603 3.57902 15.0511 3.5 15.25 3.5C15.4489 3.5 15.6397 3.57902 15.7803 3.71967C15.921 3.86032 16 4.05109 16 4.25V6.1755C15.7018 6.31694 15.4497 6.53982 15.2727 6.81842C15.0958 7.09701 15.0013 7.41997 15 7.75Z'
        fill={svgProps.fill}
      />
      <path
        d='M12.75 10.5C12.5511 10.5 12.3603 10.421 12.2197 10.2803C12.079 10.1397 12 9.94891 12 9.75V5.25C12 5.05109 12.079 4.86032 12.2197 4.71967C12.3603 4.57902 12.5511 4.5 12.75 4.5C12.9489 4.5 13.1397 4.57902 13.2803 4.71967C13.421 4.86032 13.5 5.05109 13.5 5.25V9.75C13.5 9.94891 13.421 10.1397 13.2803 10.2803C13.1397 10.421 12.9489 10.5 12.75 10.5Z'
        fill={svgProps.fill}
      />
    </EndeavorFancySVG>
  )
}

export default ChallengeIcon
