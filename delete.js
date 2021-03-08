//supprimer une card dans l'api



document.querySelector("#formDelete").addEventListener("click", async () => {
    const input = document.querySelector(".inputTitleDelete");    
    const id = +input.value;
        console.log(id)

        if (id == "") {
            console.error("Invalid id!");
            return;
        }

        try {
            const response = await fetch(`//https://character-database.becode.xyz/characters${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const deletedCharacter=await response.json();

            console.log(deletedCharacter);
        } catch (err) {
            console.error(`Unknown hero with id: ${id}!`);
        }
});



/*
const idTable=[];
async function tablejson (){
    const response= await fetch("https://character-database.becode.xyz/characters")
    const allCharacter= await response.json()
    let idLength = allCharacter.length
    
    console.log(allCharacter)
    
    for(i=0;i<idLength;i++){
        let idCard = allCharacter[i].title
        idTable.push(idCard)
    }
}

tablejson()

document.querySelector("#formDelete").addEventListener("click", ()=> {
    const inputDelete = document.querySelector(".inputTitleDelete").value
}) */











// document.querySelector(".delete").addEventListener("click", async () => {
//     console.log("ok")
    //const inputDelete = document.querySelector(".nameDelete");
    
    // const nameDelete = +inputDelete.value;

    //     console.log(nameDelete)
    //     console.log(inputDelete.value)

        /*
        if (isNaN(id) || id === 0) {
            console.error("Invalid id!");
            return;
        } */

        // try {
        //     const response = await fetch(`https://character-database.becode.xyz/characters`, {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });

        //     const deletedHero=await response.json();

        //     console.log(deletedHero);
        // } catch (err) {
        //     console.error(`Unknown hero with id: ${id}!`);
        // }
//});

