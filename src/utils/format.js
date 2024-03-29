export const formatDate = (date) => {
    date = new Date(date);
    const currentDate = new Date();
    const dateDiff = (currentDate - date) / (1000 * 60 * 60); // Difference in hours

    if (dateDiff < 3) {
        return `${date.getMinutes()} min`;
    }
    else if (dateDiff < 24) {
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

export const formatCount = (counter) => {
    if (counter / 1000 > 1) {
        return (counter / 1000).toFixed(1) + 'k';
    }
    return counter;
}