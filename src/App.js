import './scss/app.scss'
import Header from './components/Shared/Header';
import MainPage from './pages/MainPage';

function App() {
	return (
		<div className="wrapper">
			<div className="container">
				<Header/>
				<MainPage/>
			</div>
		</div>
	);
}

export default App;
