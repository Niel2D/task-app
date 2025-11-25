import axios from "axios";
import { getAllJSDocTags } from "typescript";

const API_URL = "http://192.168.0.101:8081/apitasks";

export const taskService = {
   
    getAllTasks: async () => {
    try { 
          const response = await axios.get(API_URL);
          return response.data;
    }   catch(error) {
         console.errir("Erro ao buscar tarefas:", error);
         throw error;

    }

    },

    creatTask: async (title, description) => {
           try {
                 const response = await axios.post(API_URL, { 
                    title,
                    description,
                 });
                 return response.data;
                }catch (erro){
                 console.error("|Erro ao criar tarefa", error);
                 throw error;
             

           }
    },



     toggleTask: async (id) => {
            try {
                  const response =    await axios.patch("${API_URL}/${id}/toggle")
                  return response.data;
            }   catch (error) {
                  console.error("erro ao autalizar tarefa", error);
                  throw error;
            
            }

     },

       deleteTask: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      throw error;
    }
  },

  updateTask: async (id, title, description) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        title,
        description,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw error;
    }
  },


};