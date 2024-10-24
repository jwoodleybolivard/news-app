import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateArticle from './components/CreateArticle'
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="spacer">
                <Routes>
                    <Route path="/" element={<ArticleList />} />
                    <Route path="/articles/:id" element={<ArticleDetail />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
