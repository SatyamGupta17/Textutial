function Navmenu(props){
    const list = props.menuitems;
    const updatedList = list.map((listItems) => {
        return <li key = {listItems.toString()}>{listItems}</li> 
    })
    return (
        <ul>{updatedList}</ul>
    )
}
const menuItems = [1, 2, ,3 ,4 ,5];
export default function List(){
    const  numbers = [1, 2, 3, 4, 5];
    const updatedNums = numbers.map((number)=>{
        return <li>{number}</li>
    });

    return(
        <>
            <Navmenu menuitems = {menuItems}/>
            {updatedNums}
        </>
    )
}