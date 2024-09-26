import React, { useEffect, useState } from 'react'
import styles from '../styles/Search.module.scss'; 
import { Pagination } from '../components/Pagination/Pagination';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [characters, setCharacters] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const charactersPerPage = 10; 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.searchPage}>
      <h1>Star Wars Characters</h1>
    
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Star Wars Characters"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.charactersGrid}>
        {currentCharacters.map((character) => (
          <div key={character.id} className={styles.characterCard}>
            <img src={character.image} alt={character.name} className={styles.characterImage} />
            <h2 className={styles.characterName}>{character.name}</h2>
          </div>
        ))}
      </div>

      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      />
    </div>
  );
};