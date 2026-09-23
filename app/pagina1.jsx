
import { Text, StyleSheet, View} from 'react-native';
import '@/global.css';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function pagina1() {
  const router = useRouter();
  return (
    
   
      <View style={styles.container}>
    <Text className='uppercase font-extrabold'>Página Um</Text>
    <Text className='uppercase font-extrabold'>eu</Text>
    </View>
   
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#331cff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    backgroundColor:"#e5ff00"
  }
});

