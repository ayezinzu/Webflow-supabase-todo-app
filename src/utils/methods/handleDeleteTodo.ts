import { deleteTodo } from '$utils/services/todo';

export const handleDeleteTodo = async (todoid: number, newListItem: HTMLElement) => {
  try {
    await deleteTodo(todoid);
    console.log('Todo deleted successfully');
    newListItem.remove(); // remove from DOM
  } catch (err) {
    console.error('Failed to delete todo:', err);
  }
};
