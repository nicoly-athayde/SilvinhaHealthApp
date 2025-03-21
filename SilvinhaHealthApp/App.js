import { useSate } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [height, setHeight] = useSate(null);
  const [weight, setWeight] = useSate(null);
  const [imc, setImc] = useSate(null);
  const [messageImc, setMessageImc] = useSate("Preencha o peso e a altura");
  const [textButton, setTextButton] = useSate("Calcular");

  function calcularImc() {
    if (weight != null && height != null){
      Keyboard.dismiss();
      setImc((weight / (height * height)).toFixed(2));
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual a");
      setTextButton("Calcular Novamente");
    } else {
      setImc(null);
      setMessageImc("Preencha o peso e a altura");
      setTextButton("Calcular");
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silvinha Health App</Text>
      </View>
      <View style={styles.content}> 
        <Text style={styles.subTitle}>Calculadora de IMC</Text>

        <View>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            value={height ?? ''}
            onChangeText={setHeight}
            placeholder='Ex. 1.70'
            keyboardType='numeric'
          ></TextInput>
        <View style={{marginTop: 25}}></View>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            value={weight ?? ''}
            onChangeText={setWeight}
            placeholder='Ex. 60Kg'
            keyboardType='numeric'
          ></TextInput>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => calcularImc()}
        >
          <Ionicons name="calculator-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.imcContainer}>
          <Text style={styles.imcText}>{messageImc}</Text>
          <Text style={styles.imcResult}>{imc}</Text>
        </View>

      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed2f4',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#d90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    color: '#edf2f4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#edf2f4'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#d90429',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#d90429',
    borderBottomWidth: 2
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#edf2f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  imcContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  imcText: {
    fontSize: 18,
    color: '#ef233c',
    fontWeight: 'bold'
  },
  imcResult: {
    fontSize: 48,
    color: '#ef233c',
    fontWeight: 'bold',
  }

});
