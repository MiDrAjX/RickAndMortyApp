import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import CharacterList from '../pages/CharacterList';
import colors from '../styles/colors';
import CharacterOverView from '../pages/CharacterOverView';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
<stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle:{
            backgroundColor: colors.white,
        },
    }}
>
        <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
        />

        <stackRoutes.Screen
        name="CharacterList"
        component={CharacterList}
        />
        <stackRoutes.Screen
        name="CharacterOverView"
        component={CharacterOverView}
        />

        </stackRoutes.Navigator>
)

export default AppRoutes;