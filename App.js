import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts, JotiOne_400Regular } from "@expo-google-fonts/joti-one";

const WatcherToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Carregar a fonte "Joti One"
  let [fontsLoaded] = useFonts({
    JotiOne_400Regular
  });

  if(!fontsLoaded){
    return null;
  }
  

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now().toString(), name: task }]);
      setTask("");
    } else {
      alert("Por favor, insira uma tarefa.");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pinimg.com/222x/73/a0/08/73a008721173568b251c5a42b8b125d5.jpg",
          }}
          style={styles.headerImage}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Watcher</Text>
          <Text style={styles.titleSecondary}>To <Text style={{color:"#F9A825"}}>Do</Text></Text>
        </View>
      </View>

      {/* Input de tarefa */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Anote uma nova tarefa..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Icon name="add" size={30} color="#582222" />
        </TouchableOpacity>
      </View>

      {/* Lista de tarefas */}
      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>
          Nenhuma tarefa foi adicionada ainda :(
        </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.name}</Text>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Icon name="delete" size={24} color="#F44336" />
              </TouchableOpacity>
            </View>
          )}
          style={styles.taskList}
        />
      )}

      {/* Rodapé */}
      <View style={styles.footer}>
        <Image
          source={{
            uri: "data:image/png;base64,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", // Ícone representando o cachorro
          }}
          style={styles.footerImage}
        />
        <View>
          <Text style={styles.footerText}>Todos os direitos reservados ©</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#582222",
    paddingTop: 16,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 16
  },
  headerImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  titles:{
    width: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: 'JotiOne_400Regular'
  },
  titleSecondary: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: 'JotiOne_400Regular'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    textAlign: 'center'
  },
  addButton: {
    backgroundColor: "#F9A825",
    marginLeft: 10,
    borderRadius: 50,
    width: '50px',
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyMessage: {
    color: "#fff4",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: 'JotiOne_400Regular'
  },
  taskList: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskText: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'JotiOne_400Regular'
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#F9A825",
    justifyContent: "center",
    backgroundColor: '#fff',
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerImage: {
    width: 25,
    height: 35,
    marginRight: 10,
  },
  footerText: {
    color: "#000",
    fontSize: 12,
  },
});

export default WatcherToDo;
