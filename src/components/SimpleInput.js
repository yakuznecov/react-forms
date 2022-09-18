import { useState } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	// является ли действительным введенное имя
	const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

	// обработчик инпута
	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	// обработчик ввода имени
	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true); // если ввод теряет фокус, он был затронут
	};

	// обработчик формы
	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		setEnteredName('');
		setEnteredNameTouched(false); // сбросить состояние после отправки
	};

	const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
				{nameInputIsValid && <p className='error-text'>Имя не должно быть пустым</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
