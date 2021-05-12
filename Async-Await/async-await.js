const fs = require('fs')

// A primeira versão usa funções de retorno de chamada.

// fs.readFile('./files/txtOne.txt', 'utf-8', (err, data) => {
//     const oneText = data.toUpperCase();

//     fs.readFile('./files/txtSecond.txt', 'utf-8', (err, data) => {
//         const secondText = data.toUpperCase()
//         console.log(oneText, secondText)
//     })

// })


// A segunda versão usa sintaxe de promise nativa

const myPromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./files/txtOne.txt', 'utf-8', (err, data) => {

            setTimeout(() => {
                resolve(data)
            }, 3000)

            if (err) {
                reject(err)
            }
        })

    })

}
myPromise()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.warn(error)
    })



// A terceira versão usa async...await.

const functionAsync = async () => {
    let firstSentence = await myPromise();
    let secondSentence = await myPromise();

    console.log(firstSentence, secondSentence)
}
functionAsync()