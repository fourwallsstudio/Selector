export const renderLog = (type, obj) => {
  console.group(`%c ${type} render`, 'color:blue;font-size:14px;')
    console.count(type)
    console.log(`%c ${type}`, 'color:green', obj)
  console.groupEnd()
}

export const nextPropsLog = (type, props) => {
  console.group(`%c ${type} nextProps`, 'color:red;font-size:14px;')
    console.count(type)
    console.log(`%c ${type}`, 'color:green', props)
  console.groupEnd()
}

export const fired = (type) => {
  console.group(`%c ${type} fired`, 'color:cornflowerblue;font-size:14px;')
    console.count(type)
  console.groupEnd()
}
