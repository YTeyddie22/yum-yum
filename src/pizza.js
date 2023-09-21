function Pizza({ pizzaObj }) {
	console.log(pizzaObj);
	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
			</div>
		</li>
	);
}

export default Pizza;
