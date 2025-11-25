package com.lista.taskapp.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.jetbrains.annotations.NotNull;
import java.time.LocalDateTime;


@Entity
@Table(name= "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;

    private String description;

    @Column(nullable = false, columnDefinition = "boolean default false")
    private Boolean completed = false;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;


    @PrePersist
    protected void onCreated() {
        createdAt = LocalDateTime.now();
    }

    //Construtores
    public Task() {}

    public Task(String title, String description){
        this.title =title;
        this.description =description;

    }

// Getter e Setters

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

// set do title


    public void setTitle(String title){
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

// set do description

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getCompleted() {
        return completed;
    }

// set do completed

    public void setCompleted(@NotNull Boolean completed){
        this.completed = completed;
        if (completed) {
            this.completedAt = LocalDateTime.now();
        } else {
            this.completedAt = null;
        }
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getCompletedAt() {
        return completedAt;
    }

// para debug/logs

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", completed=" + completed +
                ", createdAt=" + createdAt +
                ", completedAt=" + completedAt +
                '}';
    }

}
