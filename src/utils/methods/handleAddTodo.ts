import { CONSTANTS } from '$utils/constants';
import { createTodo } from '$utils/services/todo';

import { handleDeleteTodo } from './handleDeleteTodo';

export const handleAddTodo = async (
  inputElement: HTMLInputElement | null,
  listWrapper: HTMLElement | null,
  listItem: HTMLLIElement | null
) => {
  const todoText = inputElement?.value.trim();

  if (!todoText) return;

  const addTodoResult = await createTodo(todoText);
  if (addTodoResult && listItem) {
    const newListItem = listItem.cloneNode(true) as HTMLLIElement;

    newListItem.querySelector(CONSTANTS.todoText)!.textContent = addTodoResult['todo-text'];
    newListItem.setAttribute('data-id', addTodoResult.id.toString());

    // Attach delete handler
    newListItem.querySelector(CONSTANTS.delete)!.addEventListener('click', async () => {
      await handleDeleteTodo(addTodoResult.id, newListItem);
    });

    listWrapper?.appendChild(newListItem);
    inputElement!.value = ''; // clear input after adding
  }
};
