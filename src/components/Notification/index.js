import './index.css'

const Success = props => <div>{props.children}</div>
const Error = props => <div>{props.children}</div>
const Warning = props => <div>{props.children}</div>
const Info = props => <div>{props.children}</div>

export {Success, Error, Warning, Info}
