import OptionEl from "./OptionEl";



function Heading(props) {
  return (
    <>
      <h1>TransportApp</h1>
      <p>The best place to buy vehicles online</p>
      <h3>Choose Options</h3>
      <div>
        <label>New Only</label>
        <input type="checkbox"/>
      </div>
      <label>Select Type  </label>
       
         <OptionEl   
            name="Cars"
            id="car"
            carVals={["volvo","saab","mercedez","audi"]}/> 
    </>
   
  )
}
export default Heading;