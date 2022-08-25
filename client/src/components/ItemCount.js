import { useState } from "react"

const ItemCount = ({title, img, stock, quantity, onAdd}) => {

	const [count, setCount] = useState(quantity)

	function restar() {
		count > 0 && setCount(currentState => currentState - 1)
	}

	function sumar() {
		count < stock && setCount(currentState => currentState + 1)
	}


	return (
		
		<div data-theme="lofi">

			<label htmlFor="my-modal-4" className="cursor-pointer mt-6 flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent"> Add to cart </label>

			<input type="checkbox" id="my-modal-4" className="modal-toggle" />

			<label htmlFor="my-modal-4" className="modal modal-bottom sm:modal-middle">
				<label className="modal-box relative" htmlFor="">
					<h3 className="font-bold text-lg">{"You're adding '" + title + "' to the cart..."} </h3>
					<img src={img} className="w-full h-full object-center object-cover"/>

					<div className="modal-action place-content-center">

						<button className="btn btn-circle btn-secondary text-lg text-white" onClick={() => restar()}>-</button>
						<input type="text" value={count} readOnly className="input input-bordered input-secondary text-center"/>
						<button className="btn btn-circle btn-secondary text-lg text-white" onClick={() => sumar()}>+</button>

					</div>

					<div className="modal-action">
						<label htmlFor="my-modal-4" className="btn" onClick={() => onAdd(count)}>Add to cart</label>
					</div>

				</label>
			</label>

		</div>
	)

}

export default ItemCount