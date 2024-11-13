import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  Image,
} from "react-native";
import EmpresaModal from "./components/EmpresaModal";
import EmpresaItem from "./components/EmpresaItem";
import {
  loadEmpresas,
  addEmpresa,
  deleteEmpresa,
  editEmpresa,
} from "./services/EmpresaService";
import styles from "./styles";
import logo from "./assets/logo.png";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [empresas, setEmpresas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmpresas, setFilteredEmpresas] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [empresaEditando, setEmpresaEditando] = useState(null);

  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoading(false), 2000);

    fetchEmpresas();

    return () => clearTimeout(loadTimer);
  }, []);

  const fetchEmpresas = async () => {
    const storedEmpresas = await loadEmpresas();
    setEmpresas(storedEmpresas);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length >= 3) {
      const results = empresas.filter((empresa) =>
        empresa.razaoSocial.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmpresas(results);
    } else {
      setFilteredEmpresas([]);
    }
  };

  const handleSaveEmpresa = async (empresa) => {
    let updatedEmpresas;
    if (empresaEditando) {
      updatedEmpresas = await editEmpresa({
        ...empresa,
        id: empresaEditando.id,
      });
    } else {
      updatedEmpresas = await addEmpresa(empresa);
    }
    setEmpresas(updatedEmpresas);
    setSearchQuery("");
    setFilteredEmpresas([]);
    setModalVisible(false);
    setEmpresaEditando(null);
  };

  const handleEditEmpresa = (empresa) => {
    setEmpresaEditando(empresa);
    setModalVisible(true);
  };

  const handleDeleteEmpresa = async (id) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta empresa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          onPress: async () => {
            const updatedEmpresas = await deleteEmpresa(id);
            setEmpresas(updatedEmpresas);
            setFilteredEmpresas(
              updatedEmpresas.filter((empresa) =>
                empresa.razaoSocial
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
            );
          },
        },
      ]
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Buscar empresas cadastradas</Text>

      <TextInput
        style={[
          styles.appInput,
          focusedInput === "search" && {
            borderColor: "#007AFF",
            borderWidth: 2,
          },
        ]}
        placeholder="Digite a razão social desejada..."
        value={searchQuery}
        onChangeText={handleSearch}
        onFocus={() => setFocusedInput("search")}
        onBlur={() => setFocusedInput(null)}
      />

      <FlatList
        data={filteredEmpresas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EmpresaItem
            empresa={item}
            onDelete={handleDeleteEmpresa}
            onEdit={handleEditEmpresa}
          />
        )}
        ListEmptyComponent={<Text>Nenhuma empresa encontrada.</Text>}
      />

      <Button
        style={styles.addEmpresaButton}
        title="Adicionar Empresa"
        onPress={() => setModalVisible(true)}
      />
      <EmpresaModal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(false);
          setEmpresaEditando(null);
        }}
        onSave={handleSaveEmpresa}
        empresa={empresaEditando}
      />
    </View>
  );
};

export default App;
