import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<ArticleList />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
