import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: "Work"},
    {id: 2, title: "Family"},
    {id: 3, title: "Study"},
    {id: 4, title: "Relax"},
    {id: 5, title: "Sport"},
    {id: 6, title: "Food"},
    {id: 7, title: "Finance"},
    {id: 8, title: "Gadget"},
    {id: 9, title: "Health"},
    {id: 10, title: "Car"}
  ]

  static priorities: Priority[] = [
    {id: 1, title: "Low", color: "#e5e5e5"},
    {id: 2, title: "Middle", color: "#d1bb28"},
    {id: 3, title: "High", color: "#ff00f4"},
    {id: 4, title: "Immediately", color: "#ff0000"}
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: "Test Task",
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[8],
      date: new Date(`2023-10-11`)
    }
  ]
}
