import Toast from 'react-bootstrap/Toast';
import useGame from '../hooks/useGame';
import { TfiGame } from 'react-icons/tfi';
import ToastContainer from 'react-bootstrap/ToastContainer';
import DeckOfCardsAPI from '../services/deckofcardsapi';

const ToastWinner = () => {
	const Game = async () => {
		setIdGame(await DeckOfCardsAPI.getIdGame());
	};
	const { showToast, setShowToast, winName } = useGame();
	return (
		
		<ToastContainer className='p-3' position='top-start'>
			<Toast show={showToast} onClose={() => setShowToast(false)}>
				<Toast.Header>
					<div>
						<TfiGame />
					</div>
					<strong className='me-auto'>CARTAS</strong>
					<small>GANADOR</small>
				</Toast.Header>
				<Toast.Body>{winName}</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};

export default ToastWinner;
