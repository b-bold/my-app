export interface Todo {
    // we need to add a unique property to find each todo
    // id: number (can be a uuid)
    task: string;
    finished: boolean;
  }