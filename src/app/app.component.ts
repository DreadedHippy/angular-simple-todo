import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  todoInputContent = '';
  title = 'sample-todo';

  todos = signal<Todo[]>([
    {
      content: "Test",
      completed: false
    }, {
      content: "iowfwiofjwiofjwioefjwioefjwioefjiejfiowejfiwoefjwioejfiowejfiwojefiwefjiwefjiwefjiwefjiwefjiweofjiweofjweiofjiwefjioweefjweiofjwioefjweiof",
      completed: false
    }
  ]);

  addTodo() {
    console.log(this.todoInputContent);
    if (this.todoInputContent.length < 1) {
      return
    }

    this.todos.update(v => {
      v.push({
        content: this.todoInputContent,
        completed: false
      });

      return v;
    })

    this.todoInputContent = "";
  }

  deleteTodo(index: number) {
    this.todos.mutate(v => {
      v.splice(index, 1);

      return v;
    })
  }
}


interface Todo {
  content: string,
  completed: boolean
}
