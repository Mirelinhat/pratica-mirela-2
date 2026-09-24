
import { StyleSheet, } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from "expo-router";
import Ionicons, { } from "@expo/vector-icons/Ionicons"


export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <Tabs initialRouteName='pagina1' screenOptions={{ headerShown: false, // Cor do ícone e texto da aba selecionada (Branco puro)
          tabBarActiveTintColor: '#7c3a3a',
      
          tabBarInactiveTintColor: '#ffffff',
      
          tabBarStyle: {
            backgroundColor: '#ff7a58', // Um cinza escuro elegante para o fundo da barra
            borderTopColor: '#ffffff',   // Linha sutil de separação no topo da barra
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
          }, }}>
        <Tabs.Screen name='pagina1' options={{
          title: "Home", tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name='pagina2' options={{
          title: "Gostei", tabBarIcon: ({color, size}) => (
            <Ionicons name="alarm-outline" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name='pagina3' options={{
          title: "Perfil", tabBarIcon: ({color, size}) => (
            <Ionicons name="albums-sharp" size={size} color={color} />
          )
        }} />
        <Tabs.Screen name='index' options={{ href: null }} />
      </Tabs>

    </GluestackUIProvider>

  );
}




