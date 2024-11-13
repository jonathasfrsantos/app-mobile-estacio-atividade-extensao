import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Modal } from "react-native";
import styles from "../styles";

const EmpresaModal = ({ isVisible, onClose, onSave, empresa }) => {
  const [form, setForm] = useState({
    razaoSocial: "",
    cnpj: "",
    inscricaoMunicipal: "",
    inscricaoEstadual: "",
    orgaoRegistro: "",
    numeroOrgao: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    if (empresa) {
      setForm(empresa);
    } else {
      setForm({
        razaoSocial: "",
        cnpj: "",
        inscricaoMunicipal: "",
        inscricaoEstadual: "",
        orgaoRegistro: "",
        numeroOrgao: "",
      });
    }
  }, [empresa]);

  const handleSave = () => {
    if (!form.razaoSocial || !form.cnpj) {
      alert("Razão Social e CNPJ são obrigatórios!");
      return;
    }
    onSave(form);
    setForm({
      razaoSocial: "",
      cnpj: "",
      inscricaoMunicipal: "",
      inscricaoEstadual: "",
      orgaoRegistro: "",
      numeroOrgao: "",
    });
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>
          {empresa ? "Editar Empresa" : "Adicionar Empresa"}
        </Text>

        <Text style={styles.modalHeader}>Razão Social</Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "razaoSocial" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.razaoSocial}
          onChangeText={(text) => setForm({ ...form, razaoSocial: text })}
          onFocus={() => setFocusedInput("razaoSocial")}
          onBlur={() => setFocusedInput(null)}
        />

        <Text style={styles.modalHeader}>CNPJ (apenas números)</Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "cnpj" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.cnpj}
          onChangeText={(text) => setForm({ ...form, cnpj: text })}
          onFocus={() => setFocusedInput("cnpj")}
          onBlur={() => setFocusedInput(null)}
          keyboardType="numeric"
          maxLength={14}
        />

        <Text style={styles.modalHeader}>
          Inscrição Municipal (apenas números)
        </Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "inscricaoMunicipal" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.inscricaoMunicipal}
          onChangeText={(text) =>
            setForm({ ...form, inscricaoMunicipal: text })
          }
          onFocus={() => setFocusedInput("inscricaoMunicipal")}
          onBlur={() => setFocusedInput(null)}
          keyboardType="numeric"
          maxLength={8}
        />

        <Text style={styles.modalHeader}>
          Inscrição Estadual (apenas números)
        </Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "inscricaoEstadual" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.inscricaoEstadual}
          onChangeText={(text) => setForm({ ...form, inscricaoEstadual: text })}
          onFocus={() => setFocusedInput("inscricaoEstadual")}
          onBlur={() => setFocusedInput(null)}
          keyboardType="numeric"
          maxLength={8}
        />

        <Text style={styles.modalHeader}>Órgão de registro</Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "orgaoRegistro" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.orgaoRegistro}
          onChangeText={(text) => setForm({ ...form, orgaoRegistro: text })}
          onFocus={() => setFocusedInput("orgaoRegistro")}
          onBlur={() => setFocusedInput(null)}
        />

        <Text style={styles.modalHeader}>Nº no órgão de registro</Text>
        <TextInput
          style={[
            styles.modalInput,
            focusedInput === "numeroOrgao" && {
              borderColor: "#007AFF",
              borderWidth: 2,
            },
          ]}
          value={form.numeroOrgao}
          onChangeText={(text) => setForm({ ...form, numeroOrgao: text })}
          onFocus={() => setFocusedInput("numeroOrgao")}
          onBlur={() => setFocusedInput(null)}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Salvar"
              onPress={handleSave}
              style={styles.buttonStyle}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Cancelar"
              onPress={onClose}
              color="red"
              style={styles.buttonStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EmpresaModal;
