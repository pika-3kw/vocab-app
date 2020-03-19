import React, { useState, useEffect } from 'react';
import LearnPage from './LearnPage';

const LearnPageContainer = () => {
  const [listData, setListData] = useState([
    {
      type: 'en',
      id: 'K24d',
      word: 'test',
      mean: 'kiểm tra',
      wclass: 'noun',
      phonetic: '/test/'
    },
    {
      type: 'vi',
      id: 'K7wf',
      word: 'flat',
      mean: 'bằng phẳng',
      wclass: 'noun',
      phonetic: '//flæt//'
    }
  ]);

  return <LearnPage data={listData} />;
};

export default LearnPageContainer;
