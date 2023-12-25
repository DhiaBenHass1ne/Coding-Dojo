import React, { useState } from 'react';

const Tabs = ({ allTabs }) => {
  const [content, setContent] = useState('');

  const update = (id) => () => {
    setContent(allTabs[id]);
  };

  return (
    <div>
      {allTabs.map((one_tab, idx) => (
        <button value={idx} key={idx} onClick={update(idx)}>
          {`Tab ${idx + 1}`}
        </button>
      ))}
      <p>{content}</p>
    </div>
  );
};

export default Tabs;
