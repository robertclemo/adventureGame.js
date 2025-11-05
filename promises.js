// A function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the Promise
fetchData()
    .then((message) => {
        console.log(message); // Data fetched successfully!
    })
    .catch((error) => {
        console.error(error); // Failed to fetch data.
    });