// An async function
async function fetchDataAsync() {
    try {
        const message = await fetchData(); // Wait for the Promise
        console.log(message); // Data fetched successfully!
    } catch (error) {
        console.error(error); // Failed to fetch data.
    }
}

// Call the async function
fetchDataAsync();
