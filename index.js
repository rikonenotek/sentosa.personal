function search() {
    let { value } = document.getElementById("searchInput")

    const baseUrl = "https://google.com/search?q=" 
    if(!value) value = "sentosa, timor tengah selatan"
    location.replace(baseUrl + value)
}
