export default function Todosreducer(currentstate, action) {
  switch (action.type) {
    case "load":
      return action.payload;

    case "added":
      return [...currentstate, action.payload];

    case "edit":
      return currentstate.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, details: action.payload.details }
          : todo
      );

    case "del":
      return currentstate.filter(todo => todo.id !== action.payload.id);

    case "com":
      return currentstate.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return currentstate;
  }
}
