import AsyncStorage from '@react-native-async-storage/async-storage';


const EMPRESAS_KEY = 'empresas';

export const loadEmpresas = async () => {
  try {
    const storedEmpresas = await AsyncStorage.getItem(EMPRESAS_KEY);
    return storedEmpresas ? JSON.parse(storedEmpresas) : [];
  } catch (e) {
    console.error('Erro ao carregar empresas:', e);
    return [];
  }
};

export const saveEmpresas = async (empresas) => {
  try {
    await AsyncStorage.setItem(EMPRESAS_KEY, JSON.stringify(empresas));
  } catch (e) {
    console.error('Erro ao salvar empresas:', e);
  }
};

export const addEmpresa = async (empresa) => {
  const empresas = await loadEmpresas();
  const newEmpresas = [...empresas, { ...empresa, id: Date.now().toString() }];
  await saveEmpresas(newEmpresas);
  return newEmpresas;
};

export const deleteEmpresa = async (id) => {
  const empresas = await loadEmpresas();
  const newEmpresas = empresas.filter((empresa) => empresa.id !== id);
  await saveEmpresas(newEmpresas);
  return newEmpresas;
};


export const editEmpresa = async (updatedEmpresa) => {
  const empresas = await loadEmpresas();
  const newEmpresas = empresas.map((empresa) =>
    empresa.id === updatedEmpresa.id ? updatedEmpresa : empresa
  );
  await saveEmpresas(newEmpresas);
  return newEmpresas;
};
