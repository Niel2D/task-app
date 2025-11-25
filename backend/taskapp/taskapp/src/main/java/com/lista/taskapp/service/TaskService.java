package com.lista.taskapp.service;


import com.lista.taskapp.model.Task;
import com.lista.taskapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task createTask(Task task) {
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com id: " + id));

        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());

        return taskRepository.save(task);
    }

    // Marcar tarefa como completa/incompleta
    public Task toggleTaskCompletion(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada com id: " + id));

        task.setCompleted(!task.getCompleted());
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
    public List<Task> getTasksByStatus(Boolean completed) {
        return taskRepository.findByCompleted(completed);
    }

}
