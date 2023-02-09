import React from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}

			{/* <Product product={products[0]} />
			<Product product={products[1]} /> */}
		</div>
	);
}

export default App;
