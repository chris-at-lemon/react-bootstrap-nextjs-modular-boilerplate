	// permissions and gheolocation
	const [currentPermission, setCurrentPermission] = useState<string>('')
	console.log('currentPermission', currentPermission)

	// Check for permissions, if granted run geoLocation, if not offer alternative.
	useEffect(() => {
		navigator.permissions.query({name:'geolocation'}).then(function(result) {
			if (result.state === 'granted') {
				console.log('granted permission');
				getCurrentPosition();
				setCurrentPermission('granted')
			}
			if (result.state === 'prompt') {
				console.log('prompt for permission');
				getCurrentPosition();
				setCurrentPermission('prompt')
			}
			if (result.state === 'denied') {
				console.log('permission denied')
				setCurrentPermission('denied')
			}
		});
	}, [currentPermission])

		// Get current position
		const getCurrentPosition = () => navigator.geolocation.getCurrentPosition(onSuccess, onError);

		// set new coordinates, city and weather
		function onSuccess(position: any) {
			const {
				latitude,
				longitude
			} = position.coords;
	
			// set new city
			let newCoordinates = { ...currentCoord };
			newCoordinates = {
				lat: latitude,
				lon: longitude
			}
	
			setCurrentCoord(newCoordinates);
			fetchCity(newCoordinates.lat, newCoordinates.lon);
			fetchWeather(newCoordinates.lat, newCoordinates.lon)
			setCurrentPermission('granted')
		}
		// Catch error / not really needed as permissions were sniffed above
		function onError() {
			console.log('not allowed');
			setCurrentPermission('denied')
		}