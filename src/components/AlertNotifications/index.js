import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import './index.css'
import {Success, Warning, Info, Error} from '../Notification'

const AlertNotifications = () => (
  <>
    <h1 className="jdfsakl">Alert Notifications</h1>
    <Success>
      <div className="success-row">
        <AiFillCheckCircle color="green" className="success-icon-style" />
        <div className="jdsfalk">
          <h1 className="h1-success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
        <GrFormClose className="fdjas" />
      </div>
    </Success>
    <Error>
      <div className="error-row">
        <RiErrorWarningFill color="#ff0b37" className="error-icon-style" />
        <div className="jdsfalk">
          <h1 className="h1-error">Error</h1>
          <p>
            Sorry, you are not authorized to have access to delete the file{' '}
          </p>
        </div>
        <GrFormClose className="fdjas" />
      </div>
    </Error>
    <Warning>
      <div className="warning-row">
        <MdWarning color="#ffb800" className="warning-icon-style" />
        <div className="jdsfalk">
          <h1 className="h1-warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
        <GrFormClose className="fdjas" />
      </div>
    </Warning>
    <Info>
      <div className="info-row">
        <MdInfo color="#0f81e0" className="info-icon-style" />
        <div className="jdsfalk">
          <h1 className="h1-info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
        <GrFormClose className="fdjas" />
      </div>
    </Info>
  </>
)

export default AlertNotifications
