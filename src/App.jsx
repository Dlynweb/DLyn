import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import CostumeList from "./components/CostumeList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import costumes from './Costumes'


function App() {
    const [searchText, setSearchText] = useState('');

    const filteredCostumes = costumes.filter(costume => {
        const { name, fitSize, gender } = costume;
        const searchRegex = new RegExp(searchText, 'i');
        return searchRegex.test(name) || searchRegex.test(fitSize) || searchRegex.test(gender);
    });

    return (
        <div className="container">
            {/*<div className="red-rectangle" />*/}
            <Navbar />
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <CostumeList costumes={filteredCostumes} />
            <Footer />
            <ContactUs />
        </div>
    );
}

export default App;