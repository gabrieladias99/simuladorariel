import React, { useState, useCallback } from 'react';
import { Slider } from '@material-ui/core';

import GlobalStyle from './styles/global';
import washingMachineSmall from './assets/washing-machine-small.svg';
import washingMachineMedium from './assets/washing-machine-medium.svg';
import washingMachineHigh from './assets/washing-machine-high.svg';

import { Container, FormContainer, Options } from './styles';

const App = () => {
  const [machineKilos, setMachineKilos] = useState();
  const [machineFulfillment, setMachineFulfillment] = useState();

  const handleChange = useCallback(data => {
    console.log(data);
    // setMachineKilos(data);
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <FormContainer>
          <h2>Vamos descobrir quanto de produto você tem que usar?</h2>
          <h3>Qual o tamanho da sua máquina (kg)?</h3>
          <Slider
            defaultValue={8}
            aria-labelledby="discrete-slider-custom"
            min={0}
            max={20}
            step={1}
            valueLabelDisplay="on"
            onChange={handleChange}
            color="secondary"
          />
          <h3>Quão cheia ela está?</h3>
          <Options>
            <button type="button">
              <img alt="quase vazia" src={washingMachineSmall} />
            </button>
            <button type="button" src={washingMachineMedium}>
              <img alt="meio cheia" />
            </button>
            <button type="button">
              <img alt="cheia" src={washingMachineHigh} />
            </button>
          </Options>
        </FormContainer>
      </Container>
    </>
  );
};

export default App;
