import { Component, OnInit } from '@angular/core';
import { PlannerTasks } from 'src/app/shared/models/planer-task.model';

enum FilterType {
  Pending,
  Done,
  All
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})

export class PlannerComponent implements OnInit {
  plannerTasks: PlannerTasks[] = [
    {
      description: 'Buy potatoes',
      done: false
    },
    {
      description: 'Feed the cat Feed the cat Feed ',
      done: false
    }
  ];
  taskInputValue = '';
  pendingTaskCount = 0;
  visibleTasks?: PlannerTasks[];
  filterType = FilterType;
  selectedFilterType = FilterType.All;

  ngOnInit(): void {
    this.setVisibleTasks();
    this.setPendingTasksCount();
  }

  addTask(): void {
    const trimmedValue = this.taskInputValue.trim();

    if (trimmedValue) {
      const newTask = {description: trimmedValue, done: false};
      this.plannerTasks.push(newTask);
      this.taskInputValue = '';
      this.setPendingTasksCount();
    }
  }

  deleteTask(index: number): void {
    this.plannerTasks = this.plannerTasks.filter((task, i) => i !== index);
    this.setPendingTasksCount();
  }

  setPendingTasksCount(): void {
    this.pendingTaskCount = this.plannerTasks.filter(task => !task.done).length;
    this.setVisibleTasks();
  }

  clearAllTasks(): void {
    this.plannerTasks = [];
    this.setPendingTasksCount();
  }

  setVisibleTasks(): void {
    if (this.selectedFilterType === FilterType.Pending) {
      this.visibleTasks = this.plannerTasks.filter(task => !task.done);
    } else if (this.selectedFilterType === FilterType.Done) {
      this.visibleTasks = this.plannerTasks.filter(task => task.done)
    } else {
      this.visibleTasks = [...this.plannerTasks];
    }
  }

  setSelectedFilterType(type: FilterType): void {
    this.selectedFilterType = type;
    this.setVisibleTasks()
  }
}
