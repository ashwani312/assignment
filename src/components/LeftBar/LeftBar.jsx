import './LeftBar.scss';
import { data } from './data/leftbardata';


const LeftBar = () => {
  return (
    <div className='LeftBar'>
      <div className="leftbartop">
        <span> <i class="fa-solid fa-house"></i> Home: DashBoard</span>
      </div>
      <div className="leftbarcenter">
        <div className='yourapp'>YOUR APPS</div>
        {data.map((item, index) => (
          <div className="testapp" key={index}>
            <div className="testappContent">
              <img src={item.url} alt="" />

              <span>{item.title}</span>
            </div>
            <i class={item.expand}></i>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftBar