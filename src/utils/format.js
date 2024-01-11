export const formatDate = (date) => {
    date = new Date(date);
    const currentDate = new Date();
    const dateDiff = (currentDate - date) / (1000 * 60 * 60); // Difference in hours

    if (dateDiff < 24) {
        return `${Math.floor(dateDiff)} hours ago`;
    } else if (dateDiff < 24 * 7) {
        return `${Math.floor(dateDiff / 24)} days ago`;
    } else if (dateDiff < 24 * 30 * 6) {
        return `${Math.floor(dateDiff / (24 * 30))} months ago`;
    } else {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
}