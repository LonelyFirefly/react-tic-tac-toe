import { useProducts } from "./hooks/products";
import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { IProduct } from "./models";
import { ModalContext } from "./context/ModalContext";
import { useContext } from "react";

function App() {
	const { loading, error, products, addProduct } = useProducts();
	const [modal, open, close] = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		close();
		addProduct(product);
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}

			{modal && (
				<Modal title="Create new Product" onClose={() => close()}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}

			<button
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-exl px-4 py-2"
				onClick={() => open()}>
				+
			</button>
		</div>
	);
}

export default App;
