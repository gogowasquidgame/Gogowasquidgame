function copyAddress() {
    const address = "6KVcC37iUeYmAS...";
    navigator.clipboard.writeText(address).then(() => {
        alert("Address copied to clipboard!");
    });
}
