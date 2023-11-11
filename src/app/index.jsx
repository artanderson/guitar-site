import React, { useState } from 'react';
import styles from './index.module.css';
import Chord from '../components/chord';
import data from '../chords.json';

function App() {
	const chords = data.forms;
  	return (
      	<div className={styles.app}>
        	{chords.map((form, idx) => (
			<div className={styles.form} key={idx}>
			<h2>{form.title}: {form.note}</h2>
			<div className={styles.chords}>
				{Object.keys(form.chords).map((chord, i) => (
				<div key={i} className={styles.chord}>    
					<h3>{chord}</h3>
					<Chord chord={form.chords[chord]} /> 
				</div>
				))}
			</div>
			</div>
        	))}
      	</div>
  	)
}

export default App
