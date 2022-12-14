import { useState } from 'react';
import DeckOfCardsAPI from '../services/deckofcardsapi';
import GameContext from './GameContext';

const GameProvider = ({ children }) => {
	const [idGame, setIdGame] = useState(null);
	const [win, setWin] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [winName, setWinName] = useState('');

		const [playerOne, setPlayerOne] = useState({
			name: '',
			cards: [],
		});
		const [playerTwo, setPlayerTwo] = useState({
			name: '',
			cards: [],
		});

	const playGame = async () => {
		setIdGame(await DeckOfCardsAPI.getIdGame());
	};

	let vAceA = 0;
	let v2A = 0;
	let v3A = 0;
	let v4A = 0;
	let v5A = 0;
	let v6A = 0;
	let v7A = 0;
	let v8A = 0;
	let v9A = 0;
	let v10A = 0;
	let vAJack = 0;
	let vAQueen = 0;
	let vAKing = 0;

	let vAceB = 0;
	let v2B = 0;
	let v3B = 0;
	let v4B = 0;
	let v5B = 0;
	let v6B = 0;
	let v7B = 0;
	let v8B = 0;
	let v9B = 0;
	let v10B = 0;
	let vBJack = 0;
	let vBQueen = 0;
	let vBKing = 0;

	const iniciar = async () => {
		const cards = await DeckOfCardsAPI.getCards(idGame);
		setPlayerOne({...playerOne, cards: [...playerOne.cards]});
		setPlayerTwo({...playerTwo, cards: [...playerTwo.cards]});
	}

	const requestCards = async () => {
		const cards = await DeckOfCardsAPI.getCards(idGame);
		setPlayerOne({ ...playerOne, cards: [cards[0], cards[2], cards[4], cards[6], cards[8], cards[10], cards[12], cards[14], cards[16], cards[18]]});
		setPlayerTwo({ ...playerTwo, cards: [cards[1], cards[3], cards[5], cards[7], cards[9], cards[11], cards[13], cards[15], cards[17], cards[19]]});

		for (let index = 0; index < 10; index++) {
			if (playerOne.cards[index].value == "ACE") {
				vAceA = vAceA + 1;
			}else if (playerOne.cards[index].value == 2) {
				v2A = v2A + 1;
			}else if (playerOne.cards[index].value == 3) {
				v3A = v3A + 1;
			}else if (playerOne.cards[index].value == 4) {
				v4A = v4A + 1;
			}else if (playerOne.cards[index].value == 5) {
				v5A = v5A + 1;
			}else if (playerOne.cards[index].value == 6) {
				v6A = v6A + 1;
			}else if (playerOne.cards[index].value == 7) {
				v7A = v7A + 1;
			}else if (playerOne.cards[index].value == 8) {
				v8A = v8A + 1;
			}else if (playerOne.cards[index].value == 9) {
				v9A = v9A + 1;
			}else if (playerOne.cards[index].value == 10) {
				v10A = v10A + 1;
			}else if (playerOne.cards[index].value == "JACK") {
				vAJack = vAJack + 1;
			}else if (playerOne.cards[index].value == "QUEEN") {
				vAQueen = vAQueen + 1;
			}else if (playerOne.cards[index].value == "KING") {
				vAKing = vAKing + 1;
			}
		}

		for (let index = 0; index < 10; index++) {
			if (playerTwo.cards[index].value == "ACE") {
				vAceB = vAceB + 1;
			}else if (playerTwo.cards[index].value == 2) {
				v2B = v2B + 1;
			}else if (playerTwo.cards[index].value == 3) {
				v3B = v3B + 1;
			}else if (playerTwo.cards[index].value == 4) {
				v4B = v4B + 1;
			}else if (playerTwo.cards[index].value == 5) {
				v5B = v5B + 1;
			}else if (playerTwo.cards[index].value == 6) {
				v6B = v6B + 1;
			}else if (playerTwo.cards[index].value == 7) {
				v7B = v7B + 1;
			}else if (playerTwo.cards[index].value == 8) {
				v8B = v8B + 1;
			}else if (playerTwo.cards[index].value == 9) {
				v9B = v9B + 1;
			}else if (playerTwo.cards[index].value == 10) {
				v10B = v10B + 1;
			}else if (playerTwo.cards[index].value == "JACK") {
				vBJack = vBJack + 1;
			}else if (playerTwo.cards[index].value == "QUEEN") {
				vBQueen = vBQueen + 1;
			}else if (playerTwo.cards[index].value == "KING") {
				vBKing = vBKing + 1;
			}
		}
	};

	const requestPar = async () => {
		const cardsP = await DeckOfCardsAPI.getPar(idGame);
		setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[0]]});
		setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[1]]});

		/*
		for (let i = 0; i < 10; i++) {
		if(vAceA <= 1 ){
		const busqueda = playerOne.cards.find(
			card => card.value == "ACE");
			setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v2A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 2);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v3A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 3);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v4A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 4);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v5A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 5);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v6A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 6);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v7A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 7);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v8A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 8);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v9A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 9);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(v10A <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == 10);
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(vAJack <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == "JACK");
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(vAQueen <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == "QUEEN");
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}else if(vAKing <= 1 ){
			const busqueda = playerOne.cards.find(
				card => card.value == "KING");
				setPlayerOne({ ...playerOne, cards: [...playerOne.cards, cardsP[card.index]]});
		}

				for (let i = 0; i < 10; i++) {
		if(vAceB <= 1 ){
		const busqueda = playerTwo.cards.find(
			card => card.value == "ACE");
			setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v2B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 2);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v3B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 3);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v4B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 4);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v5B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 5);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v6B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 6);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v7B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 7);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v8B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 8);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v9B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 9);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(v10B <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == 10);
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(vBJack <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == "JACK");
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(vBQueen <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == "QUEEN");
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}else if(vBKing <= 1 ){
			const busqueda = playerTwo.cards.find(
				card => card.value == "KING");
				setPlayerTwo({ ...playerTwo, cards: [...playerTwo.cards, cardsP[card.index]]});
		}*/

		if(vAceA || v2A || v3A || v4A || v5A || v6A || v7A || v8A || v9A || v10A || vAJack || vAQueen || vAKing == 4){
			console.log("User A tiene 1 cuarta")
			const cuartaA = 1;
		}
		if(vAceA && v2A && v3A && v4A && v5A && v6A && v7A && v8A && v9A && v10A && vAJack && vAQueen && vAKing == 3){
			console.log("User A tiene 2 ternas")
			const ternasA = 1;
		}
		if(vAceB || v2B || v3B || v4B || v5B || v6B || v7B || v8B || v9B || v10B || vBJack || vBQueen || vBKing == 4){
			console.log("User B 1 tiene cuarta")
			const cuartaB = 1;
		}
		if(vAceB && v2B && v3B && v4B && v5B && v6B && v7B && v8B && v9B && v10B && vBJack && vBQueen && vBKing == 3){
			console.log("User B tiene 2 ternas")
			const ternasB = 1;
		}
		if (cuartaA && ternasA == 1) {
			setWin(true);
			setShowToast(true);
			setWinName(playerOne.name);
		}else if (cuartaB && ternasB == 1){
			setWin(true);
			setShowToast(true);
			setWinName(playerTwo.name);
		}
	};

	return (
		<GameContext.Provider
			value={{
				playGame,
				iniciar,
				setPlayerOne,
				setPlayerTwo,
				requestCards,
				playerOne,
				playerTwo,
				requestPar,
				showToast,
				setShowToast,
				winName,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default GameProvider;
