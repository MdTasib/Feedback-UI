import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
	return (
		<FeedbackProvider>
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<Routes>
						<Route
							path='/'
							element={
								<main className='container'>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</main>
							}
						/>
						<Route path='/about' element={<About />} />
					</Routes>
					<AboutLink />
				</React.Fragment>
			</BrowserRouter>
		</FeedbackProvider>
	);
}

export default App;
