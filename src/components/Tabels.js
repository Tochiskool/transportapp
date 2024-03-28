import Button from "./Button";

function Tabels(props) {
    const [company,contact] = props.company;
  return (
    <>
     <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>{company}</td>
                <td>{contact}</td>
                <td><Button biz = "Buy now"/></td>
            </tr>

</table>
    </>
  )
}
export default Tabels;