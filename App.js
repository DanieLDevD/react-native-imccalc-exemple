import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [mensagem, setMensagem] = useState("");

  const calculoIMC = () => {
    if (peso && altura) {
      const imc = peso / Math.pow(altura / 100, 2);
      setResultado(`Seu IMC é ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        setMensagem("Você está abaixo do peso");
      } else if (imc >= 18.5 && imc < 24.9) {
        setMensagem("Você está com o peso normal");
      } else {
        setMensagem("Você está acima do peso");
      }
    } else {
      setResultado("Preencha os campos corretamente!");
    }
  };

  return (
    <View className="flex-1 justify-center px-">
      <Text className="text-4xl font-bold mb-6 text-center">
        Calcuadora IMC
      </Text>
      <TextInput
        className="h-10 border border-gray-300 rounded px-4 mb-4"
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={(Text) => setPeso(Text)}
        keyboardType="numeric"
      />
      <TextInput
        className="h-10 border border-gray-300 rounded px-4 mb-4"
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        className="bg-blue-500 mx-8 rounded-full p-2 justify-center flex items-center"
        onPress={calculoIMC}
      >
        <Text>Calcular </Text>
      </TouchableOpacity>
      <Text className="text-center mt-6">{resultado}</Text>
      <Text className="text-center mt-2">{mensagem}</Text>
    </View>
  );
}
