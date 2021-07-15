import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Header from './components/Header';

import Route from './components/Route';

const items = [
   { title: 'React?', content: 'Is a front end js fw' },
   { title: 'React 1?', content: 'Is a front end js fw 1' },
   { title: 'React 2?', content: 'Is a front end js fw 2' },
];

const options = [
   { label: 'Red', value: 'red' },
   { label: 'Blue', value: 'blue' },
   { label: 'Green', value: 'green' },
];

const App = () => {
   const [selected, setSelected] = useState(options[0]);

   return (
      <div>
         <Header />
         <Route path="/">
            <Accordion items={items} />
         </Route>
         <Route path="/search">
            <Search />
         </Route>
         <Route path="/dropdown">
            <Dropdown
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
               controlLabel="Select a Color" />
            <span style={{ color: selected.value }}>I am color <strong>{selected.value}</strong></span>
         </Route>
         <Route path="/translate">
            <Translate />
         </Route>
      </div>
   );
};

export default App;