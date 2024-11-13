import { StyleSheet} from "react-native";

const styles = StyleSheet.create({

  //estilos da tela de carregamento

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  logo: {
    width: 250, 
    height: 250,
    resizeMode: 'contain', 
  },

  //estilos dos botões dos componentes EmpresaItem e EmpresaModal

  buttonsContainer: {
    marginBottom: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  
  buttonWrapper: {
    flex: 1, 
  },
  
  buttonStyle: {
    width: "100%", 
  },

  // estilos do App.js

  appContainer: {
    marginTop: 50,
    marginBottom: 20,
    flex: 1,
    padding: 20,
  },

  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  appInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
  },

  // estilos das Empresas Listadas

  empresaItemContainer: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center", 
    paddingHorizontal: 20, 
  },

  itemHeaderText: {
    fontSize: 18,

    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center", 
  },

  itemValueText: {
    textAlign: "center",
    fontSize: 16,
    flexWrap: "wrap", 
    width: "90%", 
    paddingLeft: 10, 
    paddingRight: 10, 
    marginBottom: 10,
  },

  itemButtonsContainer: {
    marginBottom: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },

  // estilos do modal

  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  modalHeader: {
    fontWeight: 'bold',
 
    borderColor: "#ddd",
    marginBottom: 5,
  },

  modalInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,

  },

  modalInputFocused: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },


});

export default styles;
