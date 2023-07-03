import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

const Screen1 = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Animated.View
        style={{backgroundColor: 'red'}}
        layout={Layout.duration(1000)}>
        <Pressable onPress={() => setIsOpen(!isOpen)}>
          <Text>Open</Text>
        </Pressable>
        {isOpen && <View style={{width: 300, height: 400}} />}
      </Animated.View>
      <Text onPress={() => navigation.navigate('Screen2')}>nav</Text>
    </>
  );
};

const Screen2 = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Animated.View
        style={{backgroundColor: 'red'}}
        layout={Layout.duration(1000)}>
        <Pressable onPress={() => setIsOpen(!isOpen)}>
          <Text>Open</Text>
        </Pressable>
        {isOpen && <View style={{width: 300, height: 400}} />}
      </Animated.View>
    </>
  );
};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
