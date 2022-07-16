	// Search history
	export const saveSearchHistory = (item: any) => {
	console.log('saving to local')
		localStorage.setItem('searchHistory', JSON.stringify(item));
	}

	export const getSearchHistory = () => {
		const savedSearchHistory: any = localStorage.getItem('searchHistory');
		const parsedSearchHistory = JSON.parse(savedSearchHistory);

    return parsedSearchHistory;
	}

	export const clearSearchHistory = () => {
		localStorage.removeItem('searchHistory');
	}