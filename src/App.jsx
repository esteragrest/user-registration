import styles from './app.module.css';
import { Form } from './components/Form';

export const App = () => {
	return (
		<div className={styles.app}>
			<Form />
		</div>
	);
};
