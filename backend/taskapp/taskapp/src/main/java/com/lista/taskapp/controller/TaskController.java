package com.lista.taskapp.controller;

import com.lista.taskapp.model.Task;
import com.lista.taskapp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/test")
    public String test() {
        return "Backend funcionando!";
    }


    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }



    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task newTask = taskService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTask);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task task) { try {
        Task updatedTask = taskService.updateTask(id, task);
        return ResponseEntity.ok(updatedTask);
    }   catch (RuntimeException e) {
        return ResponseEntity.notFound().build();
    }
    }

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Task> toggleTaskCompletion(@PathVariable Long id) {
        try {
            Task task = taskService.toggleTaskCompletion(id);
            return ResponseEntity.ok(task);
        }   catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
        }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    // GET: Buscar por status (completas ou não)
    @GetMapping("/status")
    public List<Task> getTasksByStatus(@RequestParam Boolean completed) {
        return taskService.getTasksByStatus(completed);
    }
}


