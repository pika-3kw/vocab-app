import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import WordCardContainer from '../WordCard';

const myStyle = makeStyles({
  root: {
    overflowY: 'auto',
    height: '100%'
  }
});

const LearnPage = ({ data }) => {
  const classes = myStyle();

  const [listCard, setListCard] = useState([]);
  const [listData, setListData] = useState([]);

  // lưu listData vào redux và cache vì khi chuyển sang các tab khác sẽ mất
  // AnswerForm check đáp án, đúng thì cập nhật lại listData ở redux vầ gửi kết quả lên server
  useEffect(() => {
    setListData([...listData, ...data]);
  }, [data]);

  useEffect(() => {
    setListCard(
      listData.map(data => <WordCardContainer key={data.id} data={data} />)
    );
  }, [listData]);

  return <div className={classes.root}>{listCard}</div>;
};

export default LearnPage;
