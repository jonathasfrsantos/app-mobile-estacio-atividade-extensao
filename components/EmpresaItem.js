import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles";

const formatCNPJ = (cnpj) => {
  return cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

const formatInscricaoMunicipal = (inscricaoMunicipal) => {
  return inscricaoMunicipal.replace(/^(\d)(\d{3})(\d{3})(\d)$/, "$1.$2.$3-$4");
};

const formatInscricaoEstadual = (inscricaoEstadual) => {
  return inscricaoEstadual.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2.$3");
};

const EmpresaItem = ({ empresa, onDelete, onEdit }) => (
  <View style={styles.empresaItemContainer}>
    <Text style={styles.itemHeaderText}> Razão Social</Text>
    <Text style={styles.itemValueText}>
      {" "}
      {empresa.razaoSocial.toUpperCase()}
    </Text>

    <Text style={styles.itemHeaderText}> CNPJ</Text>
    <Text style={styles.itemValueText}> {formatCNPJ(empresa.cnpj)}</Text>

    <Text style={styles.itemHeaderText}> Inscrição Municipal</Text>
    <Text style={styles.itemValueText}>
      {" "}
      {formatInscricaoMunicipal(empresa.inscricaoMunicipal)}
    </Text>

    <Text style={styles.itemHeaderText}> Inscrição Estudual</Text>
    <Text style={styles.itemValueText}>
      {" "}
      {formatInscricaoEstadual(empresa.inscricaoEstadual)}
    </Text>

    <Text style={styles.itemHeaderText}> Órgão de registro</Text>
    <Text style={styles.itemValueText}>
      {" "}
      {empresa.orgaoRegistro.toUpperCase()}
    </Text>

    <Text style={styles.itemHeaderText}> Número no Órgão de registro</Text>
    <Text style={styles.itemValueText}> {empresa.numeroOrgao}</Text>

    <View style={styles.buttonsContainer}>
      <View style={styles.buttonWrapper}>
        <Button title="EDITAR" onPress={() => onEdit(empresa)} color="blue" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="DELETAR"
          onPress={() => onDelete(empresa.id)}
          color="red"
        />
      </View>
    </View>
  </View>
);

export default EmpresaItem;
