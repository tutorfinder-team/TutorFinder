export const toCapital = (str) => {
	return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

export const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date).toDateString();
    return `${d.slice(4, 7)} ${d.slice(8, 10)}, ${d.slice(11, 15)}`;
}
