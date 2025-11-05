function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Network request successful!");
            } else {
                reject("Network request failed.");
            }
        }, 3000);
    });
}

simulateNetworkRequest()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


async function performRequest() {
    try {
        const message = await simulateNetworkRequest();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

performRequest();