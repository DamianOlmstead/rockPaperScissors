const parentDiv=document.querySelector(".container");
const genButton=document.querySelector("button");

genButton.addEventListener("click",() => {
rows=document.getElementById("rowInput");
columns=document.getElementById("columnInput");
parentDiv.replaceChildren();
setup(rows.valueAsNumber,columns.valueAsNumber);
}
)
function setup(r,c){
    for(i=0;i<r;i++){
        const rowHeader=document.createElement("div");
        rowHeader.classList.add("row");
        rowHeader.addEventListener('mouseenter',() => 
            {
                rowHeader.style.backgroundColor='black';
            })
        parentDiv.appendChild(rowHeader);
        for(y=0;y<c;y++){
            const columnDiv=document.createElement("div");
            columnDiv.classList.add("column");
            columnDiv.addEventListener('mouseenter',() => 
            {
                columnDiv.style.backgroundColor='black';
            })
            rowHeader.appendChild(columnDiv);
        }
    }
}


setup(16,16);