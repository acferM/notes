import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Welcome } from '../pages/Welcome'

const stackRoutes = createStackNavigator()

export function StackRoutes() {
  return (
    <stackRoutes.Navigator
      headerMode="none"
    >
      <stackRoutes.Screen 
        name="Welcome"
        component={Welcome}
      />
    </stackRoutes.Navigator>
  )
}