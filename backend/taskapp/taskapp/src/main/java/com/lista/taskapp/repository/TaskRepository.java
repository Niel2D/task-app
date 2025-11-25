package com.lista.taskapp.repository;

import com.lista.taskapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {


    //Buscar tarefas já feitas

    List<Task> findByCompleted(Boolean completed);

    // Buscar tarefas por Titulo

    List<Task> findByTitleContainingIgnoreCase(String title);

}
