import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], searchItem: string): Todo[] {
    if (!searchItem) return todos;

    const text = searchItem.toLowerCase();

    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
