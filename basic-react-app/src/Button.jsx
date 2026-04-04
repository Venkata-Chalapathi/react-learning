
function printSingleClick(event){
    console.log(event);
    console.log("Button Clicked!!!");
}

function printHover(){
    console.log("Mouse Hovered");
}

function printDoubleClick(){
    console.log("Button Clicked Double!!!");
}

export default function Button() {

    let styles = {
        backgroundColor : "pink"
    }

    return (
        <div>
            <button onClick={printSingleClick} onMouseOver={printHover} style={styles}>Click Me</button>
            <p onMouseOver = {printHover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi hic omnis magni! 
                Eaque voluptas corrupti magni pariatur quaerat vero dolores minus labore placeat nisi iusto recusandae aliquid, 
                tempore impedit hic?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore repellendus, architecto 
                nihil nemo eveniet possimus quia culpa. Voluptatibus reprehenderit dignissimos cum molestiae? Accusamus qui 
                quis aliquam quisquam deserunt labore?</p>

            <button onDoubleClick={printDoubleClick}>Double Click</button>
        </div>
    );

}