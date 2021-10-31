import 'bootstrap/dist/css/bootstrap.min.css';
import Balance from './components/Balance';
import Budget from './components/Budget';
import SpentTotal from './components/Spent';

const App = () => {
	return (
    <div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Balance />
					</div>
					<div className='col-sm'>
						<SpentTotal />
					</div>
				</div>
			</div>
  );
};

export default App;