import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import useGame from '../hooks/useGame';
const FormPlay = () => {
	const { iniciar } = useGame();
	const handClick = async () => {
		await iniciar();
	};
	const { requestCards } = useGame();
	const handleClick = async () => {
		await requestCards();
	};
	const { requestPar } = useGame();
	const handleClic = async () => {
		await requestPar();
	};
	
	return (
		<Stack gap={2} className='col-md-5 mx-auto'>
			<Button onClick={handClick} variant='secondary'>
				INICIAR
			</Button>
			<Button onClick={handleClick} variant='secondary'>
				REPARTIR
			</Button>
			<Button onClick={handleClic} variant='secondary'>
				PEDIR CARTA
			</Button>
		</Stack>
	);
};

export default FormPlay;
