import Buttons from "../components/Buttons";
import "./Rec.css"

const Rec = ({ handleClick }) =>{
  return (
    <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        
        <Buttons onClickHandle={handleClick} value="" title="All of Products" />
        <Buttons onClickHandle={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandle={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandle={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandle={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
    </>
  )
}

export default Rec;