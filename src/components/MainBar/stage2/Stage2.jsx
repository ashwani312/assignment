import { useState } from 'react';
import './stage.scss';


const Stage2 = ({ stageObj }) => {
    const [expanded, setExpanded] = useState(false);
    const [expandOne, setExpendOne] = useState(false);

    const Info = () => {
        return (
            <div className="ms-otp-data">
                <div className='ms-otp-data-description'>
                    <span className='cloning'>Cloning Repositor...</span>
                    <span className='timer'> <h5>success</h5> Duration: 0m 11s</span>
                </div>
                <div className='ms-otp-data-description'>
                    <span className='cloning'>Pre Hook Execution</span>
                    <span className='timer'> <h5>success</h5> Duration: 0m__</span>
                </div>
                <div className='ms-otp-data-description'>
                    <span className='cloning'>Build Docker Ima....</span>
                    <span className='timer'> <h5>success</h5> Duration: 0m 7s</span>
                </div>
                <div className='ms-otp-data-description'>
                    <span className='cloning'>Push Docker Ima....</span>
                    <span className='timer'> <h5>success</h5> Duration: 0m__</span>
                </div>
                <div className='ms-otp-data-description'>
                    <span className='cloning'>Pre Hook Execution</span>
                    <span className='timer'> <h5>success</h5> Duration: 0m__</span>
                </div>
            </div>
        )
    }
    return (
        <>


            <div className='Stage'>
                <div className="pipelinetwo">

                </div>
                <div className="stageOne">
                    <div className="pipelinestage"></div>
                    <div className="stageOnebox">
                        <span>{stageObj.num}</span>
                        <div>
                            <h3 className="title">{stageObj.name}</h3>
                            {stageObj.desc && <div className="desc" style={{ color: "#A1A8D4" }}>
                                2 compleated, 0 running, 0 failed out of 2 jobs in 47sec
                            </div>}
                        </div>
                    </div>
                    <div className="pipelinestagejobone" ></div>
                    <div className="stageOneJob">
                        <div className="top">
                            <div className="stageOneJobleft">
                                job_1 : Job Type: Build
                            </div>
                            <div className="stageOneJobright">
                                46 sec
                                <i className={`fa-solid fa-angle-${expanded ? "up" : "down"}`} onClick={() => setExpanded(!expanded)}></i>
                            </div>
                        </div>
                        <div className="bottom">
                            <button>dev-one-v2</button>
                            <button>latest</button>
                        </div>
                    </div>
                    <div className="stageOneJobsubinfoboxespipeline"></div>
                    <span className='rightmarkonestagetworighticon' ><i class="fa-solid fa-check" style={{ color: "green" }}></i></span>
                    <div className="pipelinestagejobonebottom" style={{
                        display: expanded ? "block" : "none",
                        height: expanded ? "57px" : "0px"
                    }}></div>
                    <div className="stageOneJobsubinfo" style={{ display: expanded ? 'block' : 'none' }}>

                        <div className='stageOneJobsubinfoboxes'>

                            <div className='stageOneJobsubinfobox'>
                                <div>ms-otp-be</div>
                                <div className='description'>
                                    <span className='succces'>📄 SUCCESS</span>
                                    <span>45 sec</span>
                                    <i className={`fa-solid fa-angle-${expandOne ? "up" : "down"}`} onClick={() => setExpendOne(!expandOne)}></i>
                                </div>
                            </div>
                            {expandOne && <Info />}
                            <div className='stageOneJobsubinfobox'>
                                <div>Branch Name: master</div>
                                <div className='description'>
                                    <span className='succces'></span>
                                    <span></span>
                                    <i className="" onClick={() => setExpanded(!expanded)}></i>
                                </div>
                            </div>
                            <div className='stageOneJobsubinfobox'>
                                <div>Artifact: 7-2023234522524545: latest</div>
                                <div className='description'>
                                    <span className='succces'></span>
                                    <span></span>
                                    <i className="" onClick={() => setExpanded(!expanded)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pipelinestagejobtwo" style={{ top: expanded ? expandOne ? "660px" : "437px" : " 266px" }}></div>
                </div>
            </div>
        </>
    )
}

export default Stage2