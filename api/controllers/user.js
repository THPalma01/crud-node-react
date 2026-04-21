import axios from "axios";
import { readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storageFile = join(__dirname, "..", "data", "users.json");

async function loadUsers() {
  try {
    const content = await readFile(storageFile, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function saveUsers(users) {
  await writeFile(storageFile, JSON.stringify(users, null, 2), "utf-8");
}

function buildNextId(users) {
  return users.reduce((maxId, user) => Math.max(maxId, Number(user.id) || 0), 0) + 1;
}

function normalizeCpf(cpf) {
  return String(cpf || "").replace(/[^\d]+/g, "");
}

async function validateCpf(cpf) {
  const resultado = await axios.post("http://localhost:3002/validar_cpf", { cpf });

  if (!resultado.data.valido) {
    throw new Error(resultado.data.mensagem || "CPF inválido.");
  }
}

export const getUsers = async (_, res) => {
  try {
    const users = await loadUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message || "Erro ao carregar usuários.");
  }
};

export const addUser = async (req, res) => {
  const { nome, email, fone, data_nascimento } = req.body;
  const cpf = normalizeCpf(req.body.cpf);

  try {
    await validateCpf(cpf);

    const users = await loadUsers();
    if (users.some((user) => normalizeCpf(user.cpf) === cpf)) {
      return res.status(400).json("Já existe um usuário cadastrado com esse CPF.");
    }

    const newUser = {
      id: buildNextId(users),
      nome,
      email,
      fone,
      data_nascimento,
      cpf,
    };

    users.push(newUser);
    await saveUsers(users);

    return res.status(200).json("Usuário criado com sucesso.");
  } catch (error) {
    if (error.message === "CPF inválido.") {
      return res.status(422).json(error.message);
    }

    if (error.response?.data?.mensagem) {
      return res.status(400).json(error.response.data.mensagem);
    }

    return res.status(400).json(error.message || "Erro ao cadastrar usuário.");
  }
};

export const updateUser = async (req, res) => {
  const { nome, email, fone, data_nascimento } = req.body;
  const cpf = normalizeCpf(req.body.cpf);
  const userId = Number(req.params.id);

  try {
    await validateCpf(cpf);

    const users = await loadUsers();
    const userIndex = users.findIndex((user) => Number(user.id) === userId);

    if (userIndex === -1) {
      return res.status(404).json("Usuário não encontrado.");
    }

    const cpfExists = users.some((user) => Number(user.id) !== userId && normalizeCpf(user.cpf) === cpf);
    if (cpfExists) {
      return res.status(400).json("Já existe um usuário cadastrado com esse CPF.");
    }

    users[userIndex] = {
      ...users[userIndex],
      nome,
      email,
      fone,
      data_nascimento,
      cpf,
    };

    await saveUsers(users);

    return res.status(200).json("Usuário atualizado com sucesso.");
  } catch (error) {
    if (error.message === "CPF inválido.") {
      return res.status(422).json(error.message);
    }

    if (error.response?.data?.mensagem) {
      return res.status(400).json(error.response.data.mensagem);
    }

    return res.status(400).json(error.message || "Erro ao atualizar usuário.");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const users = await loadUsers();
    const filteredUsers = users.filter((user) => Number(user.id) !== userId);

    if (filteredUsers.length === users.length) {
      return res.status(404).json("Usuário não encontrado.");
    }

    await saveUsers(filteredUsers);
    return res.status(200).json("Usuário deletado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message || "Erro ao deletar usuário.");
  }
};