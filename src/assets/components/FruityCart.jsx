import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajouter, supprimer } from "../Features/fruitsCart";

export default function FruityCart() {
  const fruitsState = useSelector((state) => state.fruitsCart);
  const cart = (fruitsState && fruitsState.cart) || [];
  const dispatch = useDispatch();

  const total = cart.reduce(
    (s, f) => s + (f.price || 0) * (f.quantity || 1),
    0,
  );

  return (
    <div className="bg-slate-100 rounded">
      <p className="text-2xl p-5 border-b border-slate-400">
        votre chariot fruité
      </p>
      <ul>
        {cart.length > 0 ? (
          cart.map((fruit) => (
            <li
              className="px-5 py-2 text-xl flex items-center justify-between"
              key={fruit.id}
            >
              <div>
                {fruit.name} — {fruit.price}€
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => dispatch(supprimer(fruit.id))}
                  className="bg-red-500 text-white rounded px-2"
                >
                  -
                </button>
                <span className="px-2">{fruit.quantity || 1}</span>
                <button
                  onClick={() => dispatch(ajouter(fruit))}
                  className="bg-green-600 text-white rounded px-2"
                >
                  +
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="px-5 py-2 text-xl">Le panier est vide</li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400 ">
        prix total: {total}
      </p>
    </div>
  );
}
