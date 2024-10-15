export type TODO = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type GET_TODO_RES = TODO[];
