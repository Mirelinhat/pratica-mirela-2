import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function pagina3() {
  const router = useRouter();
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollVertical}>
      {/* Título Principal */}
      <View className="mb-6 items-center px-6 mt-10">
        <Text className='uppercase font-extrabold text-2xl text-center' style={styles.textoPrincipal}>
          Exemplos
        </Text>
        <Text className="text-zinc-300 text-sm font-medium mt-2 text-center">
          Role para baixo para ver os exemplos de IA
        </Text>
      </View>

      {/* Container Vertical (Caixas uma abaixo da outra) */}
      <View className="w-full px-6 items-center">
        {/* Primeira Caixa */}
        <Box className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-xl w-full max-w-sm mb-4 justify-center">
          <Text className='text-zinc-900 uppercase font-extrabold text-lg tracking-wider text-center mb-3'>
            IA Generativa
          </Text>
          <Text className='text-zinc-700 font-normal text-base leading-relaxed text-center'>
            Uso de modelos como o ChatGPT para criar textos, códigos e responder dúvidas em tempo real de forma inteligente.
          </Text>
        </Box>

        {/* Segunda Caixa */}
        <Box className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-xl w-full max-w-sm mb-4 justify-center">
          <Text className='text-zinc-900 uppercase font-extrabold text-lg tracking-wider text-center mb-3'>
            Visão Computacional
          </Text>
          <Text className='text-zinc-700 font-normal text-base leading-relaxed text-center'>
            Tecnologia capaz de reconhecer rostos, ler imagens e classificar objetos automaticamente com alta precisão.
          </Text>
        </Box>
        
        {/* Terceira Caixa */}
        <Box className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-xl w-full max-w-sm mb-6 justify-center">
          <Text className='text-zinc-900 uppercase font-extrabold text-lg tracking-wider text-center mb-3'>
            Carros Autônomos
          </Text>
          <Text className='text-zinc-700 font-normal text-base leading-relaxed text-center'>
            Algoritmos avançados de aprendizado de máquina que permitem aos veículos trafegarem e tomarem decisões sem motorista.
          </Text>
        </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
  scrollVertical: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  textoPrincipal: {
    color: '#ff7850',
  },
});