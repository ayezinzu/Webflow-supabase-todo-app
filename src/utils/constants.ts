const PREFIX = 'data';

export const SUPABASE_KEYS: { supabase_project_url: string; supabase_anon_key: string } = {
  supabase_project_url: 'https://xxacibdjiesgpssxhmsj.supabase.co',
  supabase_anon_key:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4YWNpYmRqaWVzZ3Bzc3hobXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwODM5OTcsImV4cCI6MjA3NzY1OTk5N30.mMDcrOAhXbPSuk0ROzpdXxeHL00w-VP-8F_3Lo3mgxA',
};
export const CONSTANTS = {
  inputField: `[${PREFIX}=
    "todo-input"]`,
  add: `[${PREFIX}="add"]`,
  listWrapper: `[${PREFIX}="list-wrapper"]`,
  listItem: `[${PREFIX}="list-item"]`,
  todoText: `[${PREFIX}="todo-text"]`,
  done: `[${PREFIX}="done"]`,
  delete: `[${PREFIX}="delete"]`,
};
