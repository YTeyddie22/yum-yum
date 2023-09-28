function Footer() {
	const hour = new Date().getHours();
	const openHour = 8;
	const closingHour = 20;

	const isOpen = hour >= openHour && hour <= closingHour;
	console.log(isOpen);
	return (
		<div>
			<footer className="footer">
				{isOpen ? (
					<Order openHour={openHour} closingHour={closingHour} />
				) : (
					<p>
						We are happy to welcome you between {openHour}:00 and{" "}
						{closingHour}:00
					</p>
				)}
			</footer>
		</div>
	);
}

function Order({ openHour, closingHour }) {
	return (
		<div className="order">
			<p>
				We are open between {openHour}:00 and {closingHour}:00.
			</p>
		</div>
	);
}

export default Footer;
