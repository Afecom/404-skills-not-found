
function fetchData(){
    return new Promise((resolve, reject) => {
        const success = true;
        if (success){
            resolve("data fetched successfully")
        }
        else{
            reject("couldnt fetch data")
        }
    })
}

// fetchData()
// .then((data) => {
//     console.log(data)
// })
// .catch((data) => {
//     console.log(data)
// })

async function fetcher(){
    try{
        const response = await fetchData()
        console.log(response)
    }
    catch{(error) => {
        console.log(error)
    }}
}
fetcher()
