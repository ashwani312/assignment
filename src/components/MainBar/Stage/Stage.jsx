import { useState } from 'react';
import './Stage.scss';


const Stage = ({ stageObj }) => {
    // console.log(stageArr)
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
            <div className="pipeline" style={{ height: expanded ? expandOne ? "628px" : "405px" : "232px" }}>

            </div>
            <div className="pipelinetwo">
                {/* 405 */}
            </div>
            <div className='Stage'>
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
                    <div className="pipelinestagejobonebottom" style={{ display: expanded ? "block" : "none" }}></div>
                    <div className="stageOneJobsubinfo" style={{ display: expanded ? 'block' : 'none' }}>
                        <div className="stageOneJobsubinfoboxespipeline"></div>
                        <div className='stageOneJobsubinfoboxes'>
                            {/* {stageArr?.subdata.map((item, index) => ( */}

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
                            {/* ))} 437*/}

                        </div>
                    </div>
                    <div className="pipelinestagejobtwo" style={{ top: expanded ? expandOne ? "660px" : "437px" : " 266px" }}></div>
                    <div className="stageTwoJob">
                        <div className="top">
                            <div className="stageOneJobleft">
                                job_2 : Job Type: Rest API
                            </div>
                            <div className="stageOneJobright">
                                46 sec
                            </div>
                        </div>
                        <div className="bottom">
                            <button>Get</button>
                            <button style={{ display: "none" }}>latest</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stage