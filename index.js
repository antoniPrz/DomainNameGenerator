


let pronoum = ["the","our"]
let adj = ["great","big","fast","cool","chic"]
let noun = ["site","web","place","pont","spot"]


for (let x of pronoum)
{

    // console.log(x)
        for( let a of adj){
            // console.log(a)
                for(let e of noun){
                    console.log(x+a+e+".com");
                }

        }


}

