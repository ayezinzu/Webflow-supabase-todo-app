import { CONSTANTS } from '$utils/constants';
import { handleAddTodo } from '$utils/methods/handleAddTodo';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Webflow i');
  const inputElement = document.querySelector<HTMLInputElement>(CONSTANTS.inputField);
  const addButton = document.querySelector<HTMLButtonElement>(CONSTANTS.add);
  const listWrapper = document.querySelector<HTMLUListElement>(CONSTANTS.listWrapper);
  const listItem = document.querySelector<HTMLLIElement>(CONSTANTS.listItem);

  // Remove the template list item
  listItem?.remove();

  addButton?.addEventListener('click', async () => {
    await handleAddTodo(inputElement, listWrapper, listItem);
  });
});
