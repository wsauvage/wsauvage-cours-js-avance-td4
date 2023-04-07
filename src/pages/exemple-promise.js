function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 4,
                name: 'Salut ça va'
            });
        }, 2000);
    });
}

function fetchData2(data1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data1.name + ' success !');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const data = await fetchData()
    const data2 = await fetchData2(data)
    console.log(data2);
}

asyncCall()