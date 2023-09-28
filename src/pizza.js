function Pizza({ pizzaObj }) {
	//This will be checking  all the data about the different types of foods.
	console.log(pizzaObj);

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
			</div>
		</li>
	);
}

export default Pizza;
