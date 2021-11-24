/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { WeatherUI } from "../WeatherUI"

test('Hello World', () => {
  const currentweather = {
    description: 'light rain',
    icon: '10n',
  };

  const weather_3h_from_now = {
    description: 'broken clouds',
    icon: '04d',
  };

  const component = render(
    <WeatherUI current_weather={currentweather} weather_3h_from_now={weather_3h_from_now} />
  );

  expect(component.container).toHaveTextContent(
    'light rain',
  );

  expect(component.container).toHaveTextContent(
    'broken clouds',
  );
});
