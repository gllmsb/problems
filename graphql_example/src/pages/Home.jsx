import React, { useState } from 'react';
import {useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { allFilms } from '../queries/allFilms';
import styles from '../styles/Home.module.scss';
import { Modal } from '../components/Modal/Modal';
import { HeroSection } from '../components/Hero/Hero';

import posterEpisode4 from '../assets/images/ep4.png';
import posterEpisode5 from '../assets/images/ep5.png';
import posterEpisode6 from '../assets/images/ep6.png';
import posterEpisode1 from '../assets/images/ep1.png';
import posterEpisode2 from '../assets/images/ep2.png';
import posterEpisode3 from '../assets/images/ep3.png';


const posterMap = {
    "A New Hope": posterEpisode4,
    "The Empire Strikes Back": posterEpisode5,
    "Return of the Jedi": posterEpisode6,
    "The Phantom Menace": posterEpisode1,
    "Attack of the Clones": posterEpisode2,
    "Revenge of the Sith": posterEpisode3
  };

  export const Home = () => {
    const [selectedFilm, setSelectedFilm] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const { data, isLoading, error } = useQuery({
      queryKey: ['allFilms'],
      queryFn: async () =>
        request('https://swapi-graphql.netlify.app/.netlify/functions/index', allFilms),
    });
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const handleFilmClick = (film) => {
      setSelectedFilm({
        ...film,
        posterUrl: posterMap[film.title], 
      });
      setIsModalOpen(true); 
    };
  
    return (
      <>
      <HeroSection/>
      <div className={styles.filmContainer}>
        {data.allFilms.films.map((item) => (
          <div className={styles.filmCard} key={item.id} onClick={() => handleFilmClick(item)}>
            <img src={posterMap[item.title]} alt={item.title} className={styles.poster} />
            <h2 className={styles.title}>{item.title}</h2>
          </div>
        ))}
  
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} film={selectedFilm} />
      </div>
      </>
      
    );
  };

