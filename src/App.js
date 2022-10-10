import Introduction from './components/intro/Introduction';
import Work from './components/work/Work';
import Message from './components/message/Message';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import './App.css';

function App() {
	const ref = useRef(null);

	const options = {
		smooth: true,
		multiplier: 3,
		smartphone: {
			smooth: true,
		},
	};

	return (
		<LocomotiveScrollProvider options={options} containerRef={ref}>
			<main data-scroll-container ref={ref}>
				<Introduction />
				<Work />
				<Message />
			</main>
		</LocomotiveScrollProvider>
	);
}

export default App;
