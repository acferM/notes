import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { SignUp } from '../pages/SignUp';

const stackRoutes = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <stackRoutes.Navigator headerMode="none">
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen name="Signup" component={SignUp} />
    </stackRoutes.Navigator>
  );
}
