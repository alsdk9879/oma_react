import React, { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json(); // json으로 변환되고, promise 반환
      })
      .then((data) => {
        setData(data);
      });
  }, [url]); // [url] : 의존성 배열. count가 변경되었을 때만, 이 함수(useEffect()) 실행 / 아무것도 넣지 않으면, 다른 함수가 실행될 때도 같이 실행됨. / 랜더링 직후 최초 한번만 실행 : [] -> 빈배열로 넣어주면 됨.

  return data;
}

export default useFetch;
