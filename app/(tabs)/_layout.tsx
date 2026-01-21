import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (<Tabs screenOptions={{tabBarActiveTintColor:'blue' }}>
    <Tabs.Screen name="index" options={{title:"Home", tabBarIcon: ({color})=>(
      <FontAwesome name="home" size={24} color={color} />
      ) 
    }} />
    
    <Tabs.Screen name="login" options={{title:"Login" }} />
    
  </Tabs>
  );
}

// The TabsLayout is used to create a tab based navigation system in the app.