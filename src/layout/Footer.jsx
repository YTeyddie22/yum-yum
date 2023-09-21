function Footer() {
	const hour = new Date().getHours();
	const openHour = 8;
	const closingHour = 16;

	const isOpen = hour >= openHour && hour <= closingHour;
	console.log(isOpen);
	return (
		<div>
			<footer className="footer">
				{new Date().toLocaleTimeString()}: We are currently open
			</footer>
		</div>
	);
}

export default Footer;
