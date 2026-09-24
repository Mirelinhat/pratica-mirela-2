import { Text, StyleSheet, View, ScrollView } from 'react-native';
import '@/global.css';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function pagina2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Título Principal */}
      <View className="mb-6 items-center px-6 mt-10">
        <Text className="text-zinc-900 text-3xl font-black tracking-tight text-center">
          Aprofundando na IA
        </Text>
        <Text className="text-zinc-500 text-sm font-medium mt-1 text-center">
          Arraste para o lado para ver mais conceitos
        </Text>
      </View>

      {/* Container Horizontal (Caixas Lado a Lado) */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollHorizontal}
      >
        {/* Primeira Caixa (Nova Pergunta) */}
        <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl w-80 mr-4 justify-center">
          <Text className='text-white uppercase font-extrabold text-lg tracking-wider text-center mb-4'>
            O que são Modelos de Linguagem (LLMs)?
          </Text>
          <Text className='text-white font-normal text-sm leading-relaxed text-center'>
            São IAs treinadas com quantidades massivas de texto da internet para entender, resumir, traduzir e gerar linguagem humana de forma natural, como o ChatGPT ou o Claude.
          </Text>
        </Box>

        {/* Segunda Caixa (Nova Pergunta) */}
        <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl w-80 mr-4 justify-center">
          <Text className='text-white uppercase font-extrabold text-lg tracking-wider text-center mb-3'>
            O que é IA Generativa?
          </Text>
          <Text className='text-white font-normal text-sm leading-relaxed text-center'>
            É um tipo de IA focada em criar conteúdos inéditos — como imagens, textos, códigos de programação, músicas e vídeos — a partir de comandos simples dados por texto (prompts).
          </Text>
        </Box>
        
        {/* Terceira Caixa (Nova Pergunta) */}
        <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-xl w-80 mr-6 justify-center">
          <Text className='text-white uppercase font-extrabold text-lg tracking-wider text-center mb-3'>
            A IA pode substituir completamente os humanos?
          </Text>
          <Text className='text-white font-normal text-sm leading-relaxed text-center'>
            Não totalmente. A IA é excelente em automatizar tarefas repetitivas e analisar dados, mas ainda carece de empatia real, intuição profunda, ética e criatividade genuína.
          </Text>
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  scrollHorizontal: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  texto:{
    backgroundColor: "#ff7a58"
  }
});