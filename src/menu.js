import Pizza from "./pizza";
import pizzaData from "./data/data";
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<ul className="pizzas">
				{pizzaData.map((pizza) => (
					<Pizza pizzaObj={pizza} key={pizza.name} />
				))}
			</ul>

			{/** How to write a comment.
			 * <Pizza name="Pizza Spinaci" photoName="foodImg/spinaci.jpg" />
			 */}
		</main>
	);
}

export default Menu;
