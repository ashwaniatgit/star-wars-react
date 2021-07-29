export const filter = (data, filterTerm, keyword='') => {
    let filteredData = []
    if(keyword.length > 2) {
        filteredData = data && data.filter((item) => {
            return item[filterTerm].toLowerCase().includes(keyword.toLowerCase());
        })
    } else {
        filteredData = [...data];
    }
    return filteredData;
}