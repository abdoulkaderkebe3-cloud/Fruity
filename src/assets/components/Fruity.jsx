import React from "react";
import FruityCart from "./FruityCart";
import { useDispatch, useSelector } from "react-redux";
import { ajouter, supprimer } from "../Features/fruitsCart";

export default function Fruity() {
  const fruitslist = useSelector((state) => state.Fruits);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
      <p className="text-slate-200">
        choissez votre fruit et faites-vous livrer le lendemain.🍋
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {fruitslist.list.map((fruit) => (
          <li key={fruit.id} className="bg-slate-100 p-4 rounded">
            <img
              src={fruit.url}
              alt="fruit"
              className="object-cover mb-3 w-full sm:h-40 md:h-48"
            />
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold mb-2">{fruit.name}</h2>
              <p className="text-lg font font-semibold">
                {" "}
                unité: {fruit.price}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-green-600 hover:bg-green-500 rounded-md w-full py-1 text-slate-200 active:translate-y-1 cursor-pointer
               "
                onClick={() => dispatch(ajouter(fruit))}
              >
                Ajouter
              </button>
              <button
                onClick={() => dispatch(supprimer(fruit.id))}
                className="bg-red-600 hover:bg-red-500 rounded-md w-full active:translate-y-1  py-1 text-slate-200  cursor-pointer"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
      <FruityCart />
    </>
  );
}
