import Input from '../../components/Input';
import './Color.css'
const Color = ({handleChange}) =>{
  return (
    <div className='cl'>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label htmlFor="" className="sidebar-label-container">
        <input type="radio" onChange={handleChange} name="test3" value="" />
        <span className="checkmark all"></span>All 
      </label>

      <Input  
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3" 
        color="black"
      />
      <Input  
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3" 
        color="blue"
      />
      <Input  
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test3" 
        color="red"
      />
      <Input  
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3" 
        color="green"
      />
      {/* <Input  
        handleChange={handleChange}
        value="white"
        title="White"
        name="test3" 
        color="white"
      /> */}

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} name="test3" value="white" />
        <span className="checkmark" style={{background:'white',border:"2px solid black"}}></span> white
      </label>
    </div>
  )
}

export default Color;