import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { Add, Fridge, IngredientDiv, IngredientImg, IngredientName, ListDiv, ListName, RemoveBtn, Search, WhisperDiv, WhisperUl,} from "../styles/MyFridge.styles";

export default function MyFridge() {
	const [query, setQuery] = useState("");
	const [autocomplete, setAutocomplete] = useState([]);
	const [ingredient, setIngredient] = useState("");
	const [ingredientId, setIngredientId] = useState("");
	const [ingredientImage, setIngredientImage] = useState("");
	const [fridgeList, setFridgeList] = useState([]);

	useEffect(() => {
		const loadIngredients = async () => {
			const response = await axios.get(
				`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=88749994321f4e4eaa03a853e6edf42c&query=${query}&metaInformation=true`
			);
			setAutocomplete(response.data);
		};
		loadIngredients();
	}, [query]);

    

	const handleOnChange = (e) => {
		// e.preventDefault()
		setQuery(e.target.value);
		document.getElementById("whisper").style.display = "block";
	};

	const temporaryList = (id, name, image) => {
		setIngredientId(id);
		setIngredient(name);
		setIngredientImage(image);
		document.getElementById("searchInput").value = name;
		document.getElementById("whisper").style.display = "none";
	};

	const sendToFridgeList = () => {
		if (ingredientId !== "") {
			setFridgeList((oldArray) => [
				...oldArray,
				{ id: ingredientId, name: ingredient, image: ingredientImage },
			]);
			setIngredient("");
			setIngredientId("");
			setIngredientImage("");
			document.getElementById("searchInput").value = "";
		}
	};

	const deleteFromFridgeList = (id) => {
		setFridgeList((oldArray) => oldArray.filter((item) => item.id !== id));
	};

	return (
		<Fridge>
			<ListName>My Fridge</ListName>
			<form>
				<Search
					type="text"
					id="searchInput"
					list="pol"
					autoComplete="off"
					placeholder="Search"
					onChange={(e) => handleOnChange(e)}
				/>
				<Add type="button" value="Add" onClick={() => sendToFridgeList()} />
				<WhisperUl b={autocomplete.length ? 1 : 0} id="whisper">
					{autocomplete.map((item, i) => (
						<WhisperDiv

							onClick={() => temporaryList(item.id, item.name, item.image)}
							key={item.id}
						>
							{item.name}
						</WhisperDiv>
					))}
				</WhisperUl>
			</form>
			<ListDiv>
				{fridgeList.map((item, i) => (
					<IngredientDiv key={item.id}>
						<IngredientImg
							alt={item.name}
							src={
								"https://spoonacular.com/cdn/ingredients_100x100/" + item.image
							}
						/>
						<IngredientName> {item.name} </IngredientName>
						<RemoveBtn onClick={() => deleteFromFridgeList(item.id)}>
							{" "}
							Remove{" "}
						</RemoveBtn>
					</IngredientDiv>
				))}
			</ListDiv>
		</Fridge>
	);
}
