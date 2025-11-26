import { useReducer, createContext, useEffect } from "react";
import Todosreducer from '../reducers/Todosreducer';

export const Todoscontext = createContext([]);

const Todosprovider = ({ children }) => {
  const [todos, dispatch] = useReducer(Todosreducer, [], () => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    return storage && storage.length ? storage : []; // ← هنا نبدأ فاضي لأول مرة
  });

  // حفظ التودوز في localStorage عند أي تغيير
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoscontext.Provider value={{ todos, dispatch }}>
      {children}
    </Todoscontext.Provider>
  );
};

export default Todosprovider;
