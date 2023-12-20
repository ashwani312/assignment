import './MainBar.scss'
import Stage from './Stage/Stage'


const MainBar = () => {
  return (
    <div className='MainBar'>
      <div className="maintopbar">
        {/* first */}
        <div className="maintopbaritem1">
          <button className='PTbutton'>PT</button>
          <div className="pipelinetestcontent">
            <h3>pipeline-test</h3>
            <span>Trigger: <h4>Manual</h4> Retention: <h4>4</h4> Last Run: <h4>Tue Dec 19 2023 14:35:07</h4> Duration: <h4>47 sec</h4></span>
          </div>
        </div>
        {/* second */}
        <div className="maintopbaritem2">
          <span>Service for the pipeline to run on:</span>
          <div className="maintopbaritembuttons">
            <button>ms-otp-be</button>
            <button>ms-otp-be</button>
          </div>
        </div>

        <div className="maintopbaritem3">
          <button>View Run Parameters</button>
        </div>

      </div>

      <div className="maincenter">
        {/* <div className="pipeline">

        </div> */}
        <div className="maincenterstage-one">
          <Stage stageObj={{ name: "Stage-One", num: "1", desc: true }} />
        </div>
        <button className='nextarrowBtn'><i class='far fa-arrow-alt-circle-right'></i></button>

        {/* <div className="pipelinetwo">

        </div> */}
        <div className="maincenterstage-two">
          <Stage stageObj={{ name: "Stage-two", num: "2", desc: false }} />
        </div>
        <div className="maincenterbottom">
          <button> <img src="https://cdn-icons-png.flaticon.com/128/1187/1187778.png" alt="" />Manage Failures BETA</button>
          <img src="https://cdn-icons-png.flaticon.com/128/9144/9144353.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainBar