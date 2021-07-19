import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './right-panel.css';
function RightBar() {
  return (
    <div className='right-bar'>
       <section className='right-items'>
           <h2>New to Twitter Clone?</h2>
           <p>Sign up now to get your own personalized timeline!</p>
           <button>Sign up</button>
       </section>
    </div>
  );
}
export default RightBar;
