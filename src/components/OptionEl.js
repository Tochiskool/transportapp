

 function OptionEl(props) {
    //Destructure it
const [car1,car2,car3,car4] = props.carVals;
console.log(car1,car2,car3,car4)
  return (
   <>
    <select name={props.name} id={props.id}>
        <option name={car1}>{car1}</option>
        <option name={car2}>{car2}</option>
        <option name={car3}>{car3}</option>
        <option name={car4}>{car4}</option>   
    </select>
   </>
  )
}
export default OptionEl;