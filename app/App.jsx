
import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Link} from "expo-router"

export default function App() {
  return (


      <View style={styles.container}>
        <Text className='uppercase font-extrabold'>Página Home</Text>
        <Divider className="my-3 w-52" />
        <Link href="/pagina1" asChild>
        <Button className="bg-fuchsia-300">
          <ButtonText className='font-bold text-white'>Primeiro Botão</ButtonText>
        </Button>
        </Link>
        <Divider className="my-3 w-20" />
       
   
         <Button className="bg-indigo-600">
          <ButtonText className='font-bold text-white'>Segundo Botão</ButtonText>
        </Button>
        <Divider className="my-3 w-20" />

         <Button className="bg-slate-800">
          <ButtonText className='font-bold text-white'>Terceiro Botão</ButtonText>
        </Button>
       <Divider className="my-3 w-52" />

      </View>
    
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
