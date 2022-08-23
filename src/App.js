import React from 'react';
import Numbers from './components/Numbers';
import { Box, Text } from '@chakra-ui/react';
import CountButton from './components/CountButton';
import ResultButton from './components/ResultButton';

function App() {

  const [counts, setCounts] = React.useState('0');
  const [result, setResult] = React.useState('');

  const applyExpression = (countedNumber) => {
    setCounts(countedNumber)
  };

  const finalResult = () => {
    setResult(eval(counts))
  };

  React.useEffect(() => {
    const unterance = new SpeechSynthesisUtterance(counts);
    speechSynthesis.speak(unterance);
  }, [counts]);

 
 

  return (
    <div className='App'>
      <Box bg={'green.100'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Box bg={'blue.100'} display={'flex'} flexDirection={'column'} gap={'5px'} justifyContent={'center'} alignItems={'center'} width={'600px'}>
          <Box bg={'pink.100'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} paddingLeft={'20px'} paddingRight={'20px'}>
            <Text display={'flex'} justifyContent={'start'} alignItems={'center'} height={'50px'} borderRadius={'10px'} fontWeight={'medium'} fontSize={'5xl'}>
              {counts}
            </Text>
            <Text display={'flex'} justifyContent={'end'} alignItems={'center'} width={'100%'} height={'50px'} borderRadius={'10px'} fontWeight={'medium'} textColor={'red'} fontSize={'5xl'}>
              {result}
            </Text>
          </Box>
          <Numbers data={counts} onClick={setCounts} />
          <Box display={'flex'}>
            <CountButton data={counts} expression={'+'} onClick={applyExpression} />
            <CountButton data={counts} expression={'-'} onClick={applyExpression} />
            <CountButton data={counts} expression={'*'} onClick={applyExpression} />
            <CountButton data={counts} expression={'/'} onClick={applyExpression} />
          </Box>
          <ResultButton onClick={finalResult} />
        </Box>
      </Box>
    </div >
  );

}

export default App;
