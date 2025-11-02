import type { TablesInsert, TablesUpdate } from 'database.types';

import { supabase } from '$utils/supabase/supabaseClient';

import type { Tables } from '../../../database.types';

type Todo = Tables<'todo-list'>;
type TodoInsert = TablesInsert<'todo-list'>;
type TodoUpdate = TablesUpdate<'todo-list'>;

// 🟢 Create a todo
export async function createTodo(todoText: string): Promise<Todo> {
  const { data, error } = await supabase
    .from('todo-list')
    .insert({ 'todo-text': todoText } as TodoInsert)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// 🔵 Read all todos
export async function getTodos(): Promise<Todo[]> {
  const { data, error } = await supabase
    .from('todo-list')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data || [];
}

// 🟡 Update a todo
export async function updateTodo(id: number, todoText: string): Promise<Todo> {
  const { data, error } = await supabase
    .from('todo-list')
    .update({ 'todo-text': todoText } as TodoUpdate)
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// 🔴 Delete a todo
export async function deleteTodo(id: number): Promise<void> {
  const { error } = await supabase.from('todo-list').delete().eq('id', id);

  if (error) throw new Error(error.message);
}
