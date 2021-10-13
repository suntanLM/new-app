import React, { useEffect, useState } from 'react';
import './App.css';
import { Wrapper, TextLink, VerticalWarpper, HorizontalWrapper, Text } from 'qhc-lib-web-design';
import ListView from './ListView';

interface News {
  newsTitle: string;
  describe: string;
}

function DisplayNews(news: News) {
  return (
    <VerticalWarpper>
      <Text>{news.newsTitle}</Text>
      <Text>{news.describe}</Text>
    </VerticalWarpper>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const listNews: News[] = [
    { newsTitle: 'NHK', describe: 'Hahaha' },
    { newsTitle: 'VTV', describe: 'Hehehe' }
  ];

  useEffect(() => {
    document.title = "U're " + count + ' times Dinged';
  }, [count]);

  return (
    <div className="App">
      <Wrapper background={"blue"} margin={"10px"} padding={"10px"}>
        <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 1</TextLink>
        <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 2</TextLink>
        <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 3</TextLink>
        <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 4</TextLink>
      </Wrapper>

      <Wrapper background={"red"} height={'auto'} width={'auto'}>
        <VerticalWarpper background={"yellow"} width={'100px'}>
          <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 1</TextLink>
          <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 2</TextLink>
          <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 3</TextLink>
          <TextLink href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 4</TextLink>
        </VerticalWarpper>
        <HorizontalWrapper background={"cyan"} width={'auto'} alignContent={'centerEvenly'}>
          <TextLink background={"orange"} padding={'5px'} margin={'10px'} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 1</TextLink>
          <TextLink background={"orange"} padding={'5px'} margin={'10px'} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 2</TextLink>
          <TextLink background={"orange"} padding={'5px'} margin={'10px'} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 3</TextLink>
          <TextLink background={"orange"} padding={'5px'} margin={'10px'} href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Text 4</TextLink>
        </HorizontalWrapper>
      </Wrapper>

      <VerticalWarpper fullWidthHeight alignContent="center">
        <Wrapper>
          <Text>{'a'}</Text>
        </Wrapper>
        <Wrapper>
          <Text>{'b'}</Text>
        </Wrapper>
        <VerticalWarpper>
          <HorizontalWrapper>
            <Wrapper>
              <Text>{'c'}</Text>
            </Wrapper>

          </HorizontalWrapper>
        </VerticalWarpper>
      </VerticalWarpper>

      <ListView>
        {
          listNews.map((item) => DisplayNews(item))
        }
      </ListView>


      <button onClick={() => setCount(count + 1)}>
        Ding Ding Ding {count} times
      </button>
    </div>
  );
}

export default App;
