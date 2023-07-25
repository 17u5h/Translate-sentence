export const insertKeyframesElement = (style: string) => {
  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)

  const styleSheet = styleElement.sheet
  styleSheet?.insertRule(style, 0)

  return styleElement
}
