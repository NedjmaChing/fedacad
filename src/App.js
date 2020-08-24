import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import ScrollToTop from './components/layout/ScrollToTop';

import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import News from './components/news/News';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';


const App = () => (
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<Header/>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/news" component={News} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/contact" component={Contact} />
				<Footer/>
			</ScrollToTop>
		</Router>
	</Provider>
);

export default App;
