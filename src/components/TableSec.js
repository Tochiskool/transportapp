import Tabels from "./Tabels";

function TableSec(props) {
const [type1,type2,type3,type4] = props.typeCars;

  return (
    <>
        <>  
        <h2>{type1}</h2>
       <Tabels company={["Biz Johnson","0039-344-8890"]}/>
       <Tabels  company={["Candro Biggy", "0039-344-8890"]}/>
       <Tabels  company={["YoungBo", "0039-432-898"]}/>
       </>
       <>  
        <h2>{type2}</h2>
       <Tabels company={["Biz Johnson","0039-344-8890"]}/>
       <Tabels company={["Candro Biggy", "0039-344-8890"]}/>
       <Tabels company={["YoungBo", "0039-432-898"]}/>
       </>
       <>  
        <h2>{type3}</h2>
       <Tabels company={["Biz Johnson","0039-344-8890"]}/>
       <Tabels company={["Candro Biggy", "0039-344-8890"]}/>
       <Tabels company={["YoungBo", "0039-432-898"]}/>
       </>
       <>  
        <h2>{type4}</h2>
       <Tabels company={["Biz Johnson","0039-344-8890"]}/>
       <Tabels company={["Candro Biggy", "0039-344-8890"]}/>
       <Tabels company={["YoungBo", "0039-432-898"]}/>
       </>

    </>
   
  )
}
export default TableSec;