


let pronoum = ["the","our"]
let adj = ["great","big","fast","cool","chic"]
let noun = ["site","web","place","pont","spot"]

let arrDomain = [];
for (let x of pronoum)
{

    // console.log(x)
        for( let a of adj){
            // console.log(a)
                for(let e of noun){
                    // console.log(x+a+e+".com");
                    arrDomain.push(x+a+e+".com");
                }

        }

}

let myList = document.getElementById("list");

for (let i of arrDomain){

    let li = document.createElement("LI");
    let text = document.createTextNode(i);
    li.appendChild(text);
    myList.appendChild(li);
}





