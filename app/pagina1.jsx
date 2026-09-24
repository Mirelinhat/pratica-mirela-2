import { Text, StyleSheet, View, ScrollView } from 'react-native';

import '@/global.css';

import { useRouter } from 'expo-router';

import { Box } from '@/components/ui/box';



export default function pagina1() {

  const router = useRouter();



  return (

    <ScrollView contentContainerStyle={styles.container}>



      <View className="mb-8 items-center px-6 mt-10">

        <Text className="text-zinc-900 text-3xl font-black tracking-tight text-center">

          Explorando a IA

        </Text>

        <Text className="text-zinc-500 text-sm font-medium mt-1 text-center">

          Conceitos fundamentais e perguntas rápidas

        </Text>

      </View>





      <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl mx-6 shadow-xl max-w-md mb-6">

        <Text className='text-white uppercase font-extrabold text-xl tracking-wider text-center mb-4'>

          O que é Inteligência Artificial?

        </Text>

        <Text className='text-zinc-300 font-normal text-sm leading-relaxed text-center'>

          A Inteligência Artificial (IA) é a capacidade de sistemas computacionais imitarem funções humanas — como raciocinar, aprender, criar e resolver problemas.{"\n\n"}

          Diferente de softwares tradicionais que apenas seguem ordens rígidas, a IA analisa grandes volumes de dados, identifica padrões e toma decisões ou gera conteúdos de forma autônoma.

        </Text>

      </Box>





      <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl mx-6 shadow-xl max-w-md mb-6">

        <Text className='text-white uppercase font-extrabold text-lg tracking-wider text-center mb-3'>

          Qual é a diferença entre IA, Machine Learning e Deep Learning?

        </Text>

        <Text className='text-zinc-300 font-normal text-sm leading-relaxed text-center'>

          Machine Learning (aprendizado de máquina) é um subcampo da IA que permite às máquinas aprenderem com dados. Deep Learning (aprendizado profundo) é um subcampo avançado do Machine Learning baseado em redes neurais artificiais complexas.

        </Text>

      </Box>





      <Box className="bg-slate-900 border border-slate-700 p-6 rounded-2xl mx-6 shadow-xl max-w-md mb-10">

        <Text className='text-white uppercase font-extrabold text-lg tracking-wider text-center mb-3'>

          Quais são os principais tipos ou ramos da IA?

        </Text>

        <Text className='text-zinc-300 font-normal text-sm leading-relaxed text-center'>

          Inclui o Processamento de Linguagem Natural (NLP), Visão Computacional, Robótica, sistemas especialistas e aprendizado de máquina.

        </Text>

      </Box>

    </ScrollView>

  );

}



const styles = StyleSheet.create({

  container: {

    flexGrow: 1,

    backgroundColor: '#ffffff',

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 20,

  },

  texto: {

    backgroundColor: "#ff7a58"

  }

});

